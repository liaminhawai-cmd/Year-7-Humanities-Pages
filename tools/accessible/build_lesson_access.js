// Builds history/<folder>/accessible.html for a lesson from cfgNN.js and lesson_access_body.js. It shares its
// CSS, read-aloud, voice typing, lock, zoom and supports with history/cai-lun/accessible.html, as the 2.2 and
// 2.4 pages do. The page loads the folder's own content.js for the wall's sources, facts and rubric rows.
//   node build_lesson_access.js 31      (terracotta, 3.1)      node build_lesson_access.js 32   (great-wall, 3.2)
const fs = require("fs"), path = require("path");
const WHICH = process.argv[2];
const FOLDERS = { "31": "terracotta", "32": "great-wall" };
if (!FOLDERS[WHICH]) throw new Error("usage: node build_lesson_access.js 31|32");
const SRC = "C:/Tau/Year-7-Humanities-Pages/history/cai-lun/accessible.html";
const OUT = "C:/Tau/Year-7-Humanities-Pages/history/" + FOLDERS[WHICH] + "/accessible.html";
const cfg = fs.readFileSync(path.join(__dirname, "cfg" + WHICH + ".js"), "utf8");
const TITLE = (cfg.match(/title: "([^"]+)"/) || [])[1], ID = (cfg.match(/id: "([^"]+)"/) || [])[1];
const s = fs.readFileSync(SRC, "utf8").replace(/\r\n/g, "\n");
const between = (a, b) => { const i = s.indexOf(a); if (i < 0) throw new Error("no " + a); const j = s.indexOf(b, i + a.length); if (j < 0) throw new Error("no " + b); return s.slice(i, j); };

const extra = `
  .vid{width:100%;aspect-ratio:16/9;border:0;border-radius:12px;background:#000;display:block}
  .qa{border:2px solid var(--line);border-radius:14px;padding:14px 16px;margin:0 0 16px;background:#fff}
  .qa .marks{font-size:15px;font-weight:800;color:var(--gold);text-transform:uppercase;letter-spacing:.04em}
  .key{border-left:6px solid var(--yes);background:#e8f3eb;border-radius:8px;padding:10px 14px;margin:12px 0 0;white-space:pre-line}
  .selfm{display:flex;gap:var(--gap);flex-wrap:wrap;align-items:center;margin:10px 0 0}
  textarea.short{min-height:110px}
  .grp{margin:10px 0 0}.grp .lab{font-weight:800;margin:0 0 6px}
  .tot{font-weight:800;font-size:22px}
  /* phone width: the shared template's header and bottom bar were sized by their widest row, so the
     page scrolled sideways. Let the rows wrap instead. */
  body{grid-template-columns:minmax(0,1fr)!important}
  header.top{width:100%;max-width:100%}
  header.top>.strip{flex:0 0 100%;max-width:100%;min-width:0;width:100%}
  .bottom{flex-wrap:wrap}
`;
const head = s.slice(0, s.indexOf("<style>"))
  .replace(/<title>[^<]*<\/title>/, "<title>" + ID + " " + TITLE + ": the whole lesson online</title>")
  .replace(/<!--[\s\S]*?-->/, `<!--
  Ancient China lesson ${ID}, ${TITLE}: the whole lesson online, for a student who works better on a
  device. The paper sheet's stops and questions, word for word (lesson-${ID.replace(".", "-")}-build in the
  private repository), with sentence starters and model answers after each student's own check; then the
  source analysis with starters for each rubric row, and a level to choose. Sources, facts and rubric
  wording are read from content.js in this folder, the same file the wall uses. The wall's worked examples
  (Levels 7 to 10) are NOT shown here: they stay behind the wall's password.

  Supports (Big buttons, Read to me, Voice typing, zoom, background colours) and the full-screen lock with
  no password are the accessible Cai Lun page's, copied from history/cai-lun/accessible.html. If that
  machinery is patched, patch this file in the same change. Built by scratchpad/tools/build_lesson_access.js.
  Honest interface: nothing here judges the writing. A box needs a few real words before the model answer
  appears; the student marks themselves against it; the teacher marks. Saved on this device as it is typed.
-->`);
const css = s.slice(s.indexOf("<style>"), s.indexOf("</style>")) + extra;
const shell = s.slice(s.indexOf("</style>"), s.indexOf('<script src="content.js"></script>')).replace('<span class="t">Sources and significance</span>', '<span class="t">' + TITLE + "</span>");
const parts = {
  SPEECH: between("/* ---------- read to me", "/* ---------- the pages, in the order"),
  LOCK: between("/* ---------- the full-screen lock", '$("back").onclick'),
  ZOOM: between("const ZOOMS", "function render()"),
  SUPPORTS: between("const TINTS", "function startScreen()"),
  CARET: between("const undo = {};", "function wire(){")
};
parts.CARET = parts.CARET.replace(/drawStrip\(\);\n\}/, "drawStrip(); noteFor(key);\n}");
let body = fs.readFileSync(path.join(__dirname, "lesson_access_body.js"), "utf8");
body = body.replace("/*@@CFG@@*/", () => cfg);
for (const [k, v] of Object.entries(parts)) body = body.replace("/*@@" + k + "@@*/", () => v);
const out = head + css + shell + '<script src="content.js"></script>\n<script>\n' + body + "</script>\n</body>\n</html>\n";
fs.writeFileSync(OUT, out);
console.log("wrote", OUT, out.length);
