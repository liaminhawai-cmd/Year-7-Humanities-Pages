/* Renders booklet.html to a print-ready A5 PDF.
 *
 *   node booklet/build-booklet.mjs
 *
 * Paper size comes from the pdf() call, not from CSS. Chromium does not honour
 * `@page { size: A5 }` — with preferCSSPageSize it silently falls back to US
 * Letter — so the size is set here and the stylesheet only has to lay out one
 * A5 page without overflowing it.
 *
 * Every page is measured against the A5 box before the PDF is written. A
 * booklet that quietly runs to eleven pages because a paragraph grew is worse
 * than a build that fails, so overflow is reported per page in millimetres.
 */
import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const MM = 96 / 25.4;                       // CSS px per mm at 96dpi
const PAGE_H = 210 * MM;                    // A5 portrait

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("file://" + path.join(HERE, "booklet.html"));
await page.waitForFunction(() => document.querySelectorAll(".page").length > 0);

const over = await page.evaluate((h) =>
  [...document.querySelectorAll(".page")].map((el, i) => ({
    n: i + 1,
    overflow: Math.max(0, el.scrollHeight - h),
  })).filter(p => p.overflow > 1), PAGE_H);

const count = await page.$$eval(".page", n => n.length);

if (over.length) {
  console.error("A5 booklet — CONTENT OVERFLOWS:");
  for (const p of over) {
    console.error(`  page ${p.n}: ${(p.overflow / MM).toFixed(1)}mm too tall`);
  }
  console.error("Trim the text or reduce a font size; do not let it spill.");
  await browser.close();
  process.exit(1);
}

const out = path.join(HERE, "What-is-source-analysis-A5.pdf");
await page.pdf({
  path: out,
  width: "148mm",
  height: "210mm",
  printBackground: true,
  margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
});
await browser.close();

console.log(`What-is-source-analysis-A5.pdf — ${count} A5 pages, all fit`);
console.log("Print double-sided on A4 at 2-up, short-edge binding, then fold.");
