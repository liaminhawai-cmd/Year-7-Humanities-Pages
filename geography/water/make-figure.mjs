/* Draws the source figure for the Water in the World wall.
 *
 * The numbers are the United States Geological Survey's summary of global
 * water storage (after Shiklomanov, "World fresh water resources", 1993).
 * USGS material is public domain. The DRAWING is ours — this script is the
 * only place it exists, so the figure and the wall text cannot drift apart,
 * and the wall is honest with students that the display is a classroom redraw
 * of someone else's estimates rather than a published figure.
 *
 * The fourth slice of panel 3 is a remainder, labelled as one. Do not replace
 * it with a list of small stores unless you have a citation for each.
 *
 *   node water/make-figure.mjs      ->  water/water-distribution.png
 */
import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const HERE = path.dirname(fileURLToPath(import.meta.url));

const PANELS = [
  { title: "All the water on Earth",
    note: "every ocean, ice sheet, aquifer, lake and river",
    parts: [
      ["Salt water in the oceans", 96.5, "#1c5c78"],
      ["Everything else", 3.5, "#7fb3c8"]
    ],
    zoomInto: 1, zoomLabel: "of that 3.5%, the fresh water is 2.5%" },

  { title: "All the fresh water",
    note: "2.5% of the total above",
    parts: [
      ["Frozen in glaciers, ice caps and permanent snow", 68.7, "#4a7ba0"],
      ["Groundwater", 30.1, "#2f6b52"],
      ["Surface and other fresh water", 1.2, "#b45309"]
    ],
    zoomInto: 2, zoomLabel: "and of that 1.2% …" },

  { title: "Surface and other fresh water",
    note: "1.2% of the fresh water above",
    parts: [
      ["Ice and snow on the ground", 73.1, "#4a7ba0"],
      ["Lakes", 20.9, "#1c5c78"],
      ["Soil moisture, swamps, the atmosphere and living things", 5.5, "#8a8578"],
      ["Rivers", 0.49, "#a3341d"]
    ],
    zoomInto: null, zoomLabel: null }
];

const W = 1600, H = 1320;

const L = 96, BAR_W = 1408, WIDE = 340;   // a slice narrower than WIDE px is legended

function bar(p, i) {
  const y = 118 + i * 390;
  const top = y + 96, hgt = 86;

  let x = L;
  const geom = p.parts.map(([label, pct, colour]) => {
    /* a 0.49% slice is a hairline: floor the drawn width so it stays visible,
       and print the true number beside it rather than trusting the geometry */
    const w = Math.max(7, (pct / 100) * BAR_W);
    const g = { label, pct, colour, x, w };
    x += w;
    return g;
  });

  const seg = geom.map(g =>
    `<rect x="${g.x.toFixed(1)}" y="${top}" width="${g.w.toFixed(1)}" height="${hgt}" fill="${g.colour}"/>`
  ).join("");

  /* Wide slices are labelled where they sit. Narrow ones cannot be — the text
     is many times wider than the slice — so they go to a legend row beneath,
     which is also the only place a 0.49% river is legible at all. */
  const wide = geom.filter(g => g.w >= WIDE);
  const thin = geom.filter(g => g.w <  WIDE);

  const wideLabels = wide.map(g => `<g>
      <text x="${(g.x + g.w / 2).toFixed(1)}" y="${top + 122}" text-anchor="middle" class="pct">${g.pct}%</text>
      <text x="${(g.x + g.w / 2).toFixed(1)}" y="${top + 156}" text-anchor="middle" class="lab">${g.label}</text>
    </g>`).join("");

  let cx = L;
  const legend = thin.map(g => {
    const text = `${g.pct}%  ${g.label}`;
    const width = 20 + 13 + 10 + text.length * 10.3;   // swatch + gap + glyph run
    const item = `<g>
      <polyline points="${(g.x + g.w / 2).toFixed(1)},${top + hgt} ${(g.x + g.w / 2).toFixed(1)},${top + 186} ${(cx + 10)},${top + 186} ${(cx + 10)},${top + 200}"
                fill="none" stroke="#8a8578" stroke-width="2"/>
      <rect x="${cx}" y="${top + 200}" width="20" height="20" fill="${g.colour}"/>
      <text x="${cx + 33}" y="${top + 218}" class="leg"><tspan class="legpct">${g.pct}%</tspan>  ${g.label}</text>
    </g>`;
    cx += width;
    return item;
  }).join("");

  return `<g>
    <text x="${L}" y="${y + 34}" class="ptitle">${i + 1}. ${p.title}</text>
    <text x="${L}" y="${y + 70}" class="pnote">${p.note}</text>
    ${seg}
    <rect x="${L}" y="${top}" width="${BAR_W}" height="${hgt}" fill="none" stroke="#20231f" stroke-width="2"/>
    ${wideLabels}
    ${legend}
  </g>`;
}

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <style>
    text{font-family:Georgia,"Times New Roman",serif;fill:#20231f}
    .ptitle{font-size:38px;font-weight:700}
    .pnote{font-size:25px;fill:#675f54;font-style:italic}
    .pct{font-size:31px;font-weight:700}
    .lab{font-size:23px;fill:#3d3a33}
    .leg{font-size:22px;fill:#3d3a33}
    .legpct{font-weight:700;fill:#20231f}
    .head{font-size:29px;font-weight:700;letter-spacing:2px;fill:#675f54}
    .cite{font-size:19px;fill:#675f54;font-family:system-ui,sans-serif}
  </style>
  <rect width="${W}" height="${H}" fill="#fbf7ee"/>
  <text x="96" y="66" class="head">WHERE THE WORLD'S WATER IS</text>
  ${PANELS.map(bar).join("")}
  <text x="96" y="1272" class="cite">Estimates: U.S. Geological Survey, &#8220;Where is Earth&#8217;s water?&#8221; (public domain), after Shiklomanov (1993).</text>
  <text x="96" y="1300" class="cite">Figure redrawn for classroom use. Each panel is a breakdown of one slice of the panel above it.</text>
</svg>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H } });
await page.setContent(`<body style="margin:0">${svg}</body>`);
const out = path.join(HERE, "water-distribution.png");
await page.screenshot({ path: out });
await browser.close();
console.log("wrote", path.relative(process.cwd(), out));
