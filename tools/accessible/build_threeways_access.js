// Builds history/three-ways/accessible.html: the 2.4 stop and jot, accessible online. Shares its CSS,
// read-aloud, voice typing, lock, zoom and supports with history/cai-lun/accessible.html, as the 2.2
// page does (build_fuhao_access.js). Body: threeways24_access_body.js. node build_threeways_access.js
const fs = require("fs"), path = require("path");
const SRC = "C:/Tau/Year-7-Humanities-Pages/history/cai-lun/accessible.html";
const OUT = "C:/Tau/Year-7-Humanities-Pages/history/three-ways/accessible.html";
const s = fs.readFileSync(SRC, "utf8").replace(/\r\n/g, "\n");
const between = (a, b) => { const i = s.indexOf(a); if (i < 0) throw new Error("no " + a); const j = s.indexOf(b, i + a.length); if (j < 0) throw new Error("no " + b); return s.slice(i, j); };

const extra = `
  .vid{width:100%;aspect-ratio:16/9;border:0;border-radius:12px;background:#000;display:block}
  .qa{border:2px solid var(--line);border-radius:14px;padding:14px 16px;margin:0 0 16px;background:#fff}
  .qa .marks{font-size:15px;font-weight:800;color:var(--gold);text-transform:uppercase;letter-spacing:.04em}
  .key{border-left:6px solid var(--yes);background:#e8f3eb;border-radius:8px;padding:10px 14px;margin:12px 0 0;white-space:pre-line}
  .selfm{display:flex;gap:var(--gap);flex-wrap:wrap;align-items:center;margin:10px 0 0}
  textarea.short{min-height:110px}
  .tot{font-weight:800;font-size:22px}
  /* phone width: the shared template's header and bottom bar were sized by their widest row, so the
     page scrolled sideways (547px on a 375px phone). Let the rows wrap instead. */
  body{grid-template-columns:minmax(0,1fr)!important}
  header.top{width:100%;max-width:100%}
  header.top>.strip{flex:0 0 100%;max-width:100%;min-width:0;width:100%}
  .bottom{flex-wrap:wrap}
`;
const head = s.slice(0, s.indexOf("<style>"))
  .replace(/<title>[^<]*<\/title>/, "<title>The three ways: stop and jot</title>")
  .replace(/<!--[\s\S]*?-->/, `<!--
  Ancient China lesson 2.4, The three ways: the accessible online stop and jot. The paper
  sheet's three stops and its bonus error hunt, word for word (lesson-2-4-build/build24.js in the
  private repository), with sentence stems and model answers. The expert readings and the
  recording sheet stay on paper. Nothing on this page judges the writing: the student marks
  against the model, and the teacher marks.

  Supports (Big buttons, Read to me, Voice typing, zoom, background colours) and the full-screen
  lock with no password are the accessible Cai Lun page's, copied from history/cai-lun/accessible.html.
  If that machinery is patched, patch this file in the same change. Built by
  scratchpad/tools/build_threeways_access.js. Saved on this device as it is typed (three24.access.v1).
-->`);
const css = s.slice(s.indexOf("<style>"), s.indexOf("</style>")) + extra;
const shell = s.slice(s.indexOf("</style>"), s.indexOf('<script src="content.js"></script>')).replace('<span class="t">Sources and significance</span>', '<span class="t">The three ways</span>');
const parts = {
  SPEECH: between("/* ---------- read to me", "/* ---------- the pages, in the order"),
  LOCK: between("/* ---------- the full-screen lock", '$("back").onclick'),
  ZOOM: between("const ZOOMS", "function render()"),
  SUPPORTS: between("const TINTS", "function startScreen()"),
  CARET: between("const undo = {};", "function wire(){")
};
let body = fs.readFileSync(path.join(__dirname, "threeways24_access_body.js"), "utf8");
for (const [k, v] of Object.entries(parts)) body = body.replace("/*@@" + k + "@@*/", () => v);
parts.CARET = parts.CARET.replace(/drawStrip\(\);\n\}/, "drawStrip(); noteFor(key);\n}");
body = body.replace("/*@@CARET@@*/", () => parts.CARET);
const out = head + css + shell + "<script>\n" + body + "</script>\n</body>\n</html>\n";
fs.writeFileSync(OUT, out);
console.log("wrote", OUT, out.length);
