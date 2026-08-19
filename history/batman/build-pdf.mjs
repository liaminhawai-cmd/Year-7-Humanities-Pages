/**
 * Regenerates the two print masters this topic merges into one shipped file.
 *
 * All wall text lives in content.js. The HTML pages read it, and these PDFs are
 * renders of those pages, so there is never a second copy of the wording to
 * keep in sync.
 *
 *   npm i -D playwright   &&   node history/batman/build-pdf.mjs
 *   pip install pypdf     &&   python3 tools/merge_pdfs.py print/Batman-Treaty-Print-Pack.pdf \
 *       history/batman/Batman-Treaty-Source-Sheets-A3.pdf history/batman/Batman-Treaty-Level-Sheets-A3.pdf
 *
 * The two PDFs land beside this script (gitignored scratch, see .gitignore),
 * and the merge step is what actually produces print/Batman-Treaty-Print-Pack.pdf,
 * the one file the site links to. Regenerating the HTML without also running
 * the merge leaves the shipped PDF stale.
 *
 * You do not need this to print: opening either page in Chrome and choosing
 * Print with the paper size below produces the same output, and you can merge
 * saved PDFs with any tool you like. This just makes the whole thing repeatable.
 */
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

/* No separate wall PDF. wagoll-wall.html still exists as an on-screen view of
   the whole continuum, but its content is the same worked examples and
   continuum the level sheets already carry one-per-page, so printing it too
   was a third redundant copy. What ships is these two, merged into one file
   by merge-print-pack.mjs below: the sources first (they are what a student
   reads before anything else), then a level sheet per year. */
const JOBS = [
  { src: "source-sheet.html",  out: "Batman-Treaty-Source-Sheets-A3.pdf",
    opts: { format: "A3", landscape: true },   margin: "9mm",  expect: 2,
    note: "one A3 landscape sheet per source: the painting, then the Proclamation" },
  { src: "level-sheets.html",  out: "Batman-Treaty-Level-Sheets-A3.pdf",
    opts: { format: "A3" },                    margin: "11mm", expect: 8,
    note: "one A3 portrait anchor sheet per rung, Foundation to Year 10" }
];

/* Set CHROMIUM_PATH if Playwright's own browser download is unavailable and you
   want to point at a Chromium already on the machine. */
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
let failed = false;

for (const job of JOBS) {
  const page = await browser.newPage();
  const problems = [];
  page.on("pageerror", e => problems.push(String(e)));

  await page.goto("file://" + join(here, job.src), { waitUntil: "load" });
  await page.waitForSelector(".sheet");
  /* Pins on an image plate are positioned in JS against the loaded image's
     rendered rect (see source-sheet.html), which is not guaranteed by
     waitUntil:"load" once the images are inserted via innerHTML afterwards.
     Wait for every image on the page to actually finish before measuring or
     printing, or a pin can render at its pre-layout default position. */
  await page.waitForFunction(() => [...document.images].every(img => img.complete));

  /* Measure against the printable box before rendering. Editing content.js is
     what makes a sheet outgrow its page, and a silent extra page is easy to
     miss, so check it here rather than hoping someone opens the PDF. */
  const mm = v => parseFloat(v);
  const PAPER = { A2: [420, 594], A3: [297, 420], A4: [210, 297] };
  const size = job.opts.height
    ? [mm(job.opts.width), mm(job.opts.height)]
    : (job.opts.landscape ? [...PAPER[job.opts.format]].reverse() : PAPER[job.opts.format]);
  const box = { w: size[0] - 2 * mm(job.margin), h: size[1] - 2 * mm(job.margin) };
  const px = v => Math.round(v / 25.4 * 96);

  await page.setViewportSize({ width: px(box.w), height: px(box.h) });
  await page.emulateMedia({ media: "print" });
  const fit = await page.evaluate(limit => {
    const sheets = [...document.querySelectorAll(".sheet")];
    return { count: sheets.length,
             over: sheets.map((s, i) => ({ i, over: Math.round(s.getBoundingClientRect().height - limit) }))
                         .filter(x => x.over > 0),
             /* A fixed-height sheet clips rather than grows, so content that
                outgrows it never shows up as an over-tall page: it just goes
                missing, and the PDF looks fine. Compare what the sheet WANTS
                against what it got. */
             clipped: sheets.map((s, i) => ({ i, by: Math.round(s.scrollHeight - s.clientHeight) }))
                            .filter(x => x.by > 2) };
  }, px(box.h));
  /* Do NOT switch the media emulation back to "screen" here. Doing so leaves
     the page in a state that makes the following pdf() lay out differently and
     silently spill onto an extra page. The page is closed straight after. */

  /* Paper size and margin both come from here. Chromium does not honour
     `@page { size: A2 landscape }`, so preferCSSPageSize silently falls back to
     US Letter. job.margin is kept equal to the page's own @page margin so the
     box measured above matches the box actually printed. */
  await page.pdf({
    path: join(here, job.out),
    printBackground: true,
    margin: { top: job.margin, right: job.margin, bottom: job.margin, left: job.margin },
    ...job.opts
  });
  await page.close();

  if (problems.length) {
    console.error(`${job.out}: page errors\n  ` + problems.join("\n  "));
    failed = true;
  }
  if (fit.count !== job.expect) {
    console.error(`${job.out}: ${fit.count} sheet(s), expected ${job.expect}`);
    failed = true;
  }
  if (fit.over.length) {
    console.error(`${job.out}: sheet(s) taller than the page: `
      + fit.over.map(x => `#${x.i + 1} by ${x.over}px`).join(", ")
      + ". Shorten the text or reduce the type size.");
    failed = true;
  }
  if (fit.clipped.length) {
    console.error(`${job.out}: content clipped off the sheet: `
      + fit.clipped.map(x => `#${x.i + 1} by ${x.by}px`).join(", ")
      + ". It will be missing from the PDF, not spilled onto a second page.");
    failed = true;
  }
  if (!problems.length && !fit.over.length && !fit.clipped.length && fit.count === job.expect) {
    console.log(`${job.out}  :  ${job.note}  (${fit.count} page(s), fits)`);
  }
}

await browser.close();
if (failed) process.exit(1);
