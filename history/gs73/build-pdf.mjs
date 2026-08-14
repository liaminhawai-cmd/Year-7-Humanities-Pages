/**
 * Regenerates every print master in this folder from the HTML.
 *
 * All wall text lives in content.js. The HTML pages read it, and these PDFs are
 * renders of those pages, so there is never a second copy of the wording to
 * keep in sync.
 *
 *   npm i -D playwright   &&   node history/build-pdf.mjs
 *
 * You do not need this to print — opening either page in Chrome and choosing
 * Print with the paper size below produces the same output. This just makes it
 * repeatable.
 */
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

const JOBS = [
  { src: "wagoll-wall.html",   out: "GS73-WAGOLL-Wall-A2.pdf",
    opts: { width: "594mm", height: "420mm" }, margin: "8mm",  expect: 1,
    note: "the whole continuum on one A2 landscape sheet" },
  { src: "level-sheets.html",  out: "GS73-Level-Sheets-A3.pdf",
    opts: { format: "A3" },                    margin: "11mm", expect: 6,
    note: "one A3 portrait anchor sheet per year level" },
  { src: "source-sheet.html",  out: "GS73-Source-Sheet-A3.pdf",
    opts: { format: "A3" },                    margin: "12mm", expect: 1,
    note: "the source itself, described, on one A3 portrait sheet" }
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
                         .filter(x => x.over > 0) };
  }, px(box.h));
  /* Do NOT switch the media emulation back to "screen" here. Doing so leaves
     the page in a state that makes the following pdf() lay out differently and
     silently spill onto an extra page. The page is closed straight after. */

  /* Paper size and margin both come from here — Chromium does not honour
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
    console.error(`${job.out}: sheet(s) taller than the page — `
      + fit.over.map(x => `#${x.i + 1} by ${x.over}px`).join(", ")
      + ". Shorten the text or reduce the type size.");
    failed = true;
  }
  if (!problems.length && !fit.over.length && fit.count === job.expect) {
    console.log(`${job.out}  —  ${job.note}  (${fit.count} page(s), fits)`);
  }
}

await browser.close();
if (failed) process.exit(1);
