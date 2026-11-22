/* Engine for module.html (Ancient China 2.3, Daily life). The content is in module.html;
   the hub's words are in vocab-data.js (generated). Nothing here judges writing: the video
   and Remember questions are marked, everything a student writes or ticks is their own. */
"use strict";
const $ = id => document.getElementById(id);
const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const KEY = "china23.module.v1";
const blankSA = () => ({ orig:["", "", ""], ans:["", "", ""], phase:"write", lvl:5, items:{}, checkedAt:0, finished:false });
let A = { name:"", yr:7, step:0, started:0, secs:0, log:[], slide:0, hub:"2.3",
          vq:{ order:VQ.map(q => q.id), done:{}, first:{}, streak:0, resets:0, tries:{} }, vown:"",
          rem:{}, tbl:{}, seen:{}, sa:{ lowe:blankSA(), chariot:blankSA() },
          sup:{ big:false, read:false, mic:false }, used:{}, zoom:1, tint:"cream", rate:.9 };
try { const s = JSON.parse(localStorage.getItem(KEY)); if (s) A = Object.assign(A, s); } catch (e) {}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(A)); $("saved").textContent = "Saved on this device"; } catch (e) { $("saved").textContent = "Not saving: storage is blocked here"; } }
if (!A.started) { A.started = Date.now(); save(); }
setInterval(() => { if (document.visibilityState === "visible" && A.step > 0 && $("lock").hidden) { A.secs += 15; save(); } }, 15000);
let lastTap = 0; const steady = () => { const n = Date.now(); if (n - lastTap < 350) return false; lastTap = n; return true; };
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ---------- the steps ---------- */
const STEPS = [
  { id:"start", short:"Start" }, { id:"words", short:"1 Words", task:"Step 1: the words" },
  { id:"watch", short:"2 Watch", task:"Engage: watch, then answer" }, { id:"read", short:"3 Read", task:"Discover and develop: read and fill the table" },
  { id:"rem1", short:"Remember?", task:"Remember?" }, { id:"lowe", short:"4 Source 1", task:"Source analysis: Source 1" },
  { id:"chariot", short:"5 Source 2", task:"Source analysis: Source 2" }, { id:"rem2", short:"Remember?", task:"Remember?" },
  { id:"report", short:"Report" } ];
const SI = id => STEPS.findIndex(s => s.id === id);

/* ---------- the vocab hub's saved progress (same site, same device) ---------- */
function hubState(){ try { return JSON.parse(localStorage.getItem(HUB_KEY)) || {}; } catch (e) { return {}; } }
const builtWord = w => { const s = hubState(); return !!(s.lessons && s.lessons[w.l] && s.lessons[w.l].buildDone && s.lessons[w.l].buildDone[w.w]); };
const lessonWords = id => HUB_WORDS.filter(w => w.l === id);
const builtIn = id => lessonWords(id).filter(builtWord).length;
const lessonTitle = id => (HUB_LESSONS.find(l => l.id === id) || {}).title || "";

/* ---------- linking: big ideas open a box; hub words open their card ---------- */
const STOP = new Set(["Change", "Progress", "Development", "Compare", "Contrast", "Conclusion", "Informed", "Evaluate", "Judgement", "Defence", "Symbol",
  "Conflict", "Era", "Reform", "Universal", "Invention", "Achievement", "Sequence", "Convention", "Decade", "Century", "Timeline", "Landform", "Landscape",
  "Accuracy", "Harmony", "Tolerance", "Overthrow", "Successor", "Reign", "Rebellion", "Unify", "Commerce", "Origin", "Purpose", "Context", "Evidence", "Perspective",
  "Interpretation", "Significance", "Usefulness", "Reliability", "Bias", "Contested", "Legacy", "Philosopher", "Enlightenment"]);
const VWORDS = HUB_WORDS.map((w, i) => ({ i, w })).filter(x => !STOP.has(x.w.w));
const FORMS = VWORDS.flatMap(x => x.w.f.map(f => ({ f, i:x.i }))).sort((a, b) => b.f.length - a.f.length);
/* a form, or its plural (merchants, scholars, generations) */
const VRX = new RegExp("\\b(" + FORMS.map(x => x.f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")(?:e?s)?\\b", "gi");
const formIndex = f => { const lo = f.toLowerCase(), cands = [lo, lo.replace(/s$/, ""), lo.replace(/es$/, "")];
  for (const c of cands) { const x = FORMS.find(y => y.f.toLowerCase() === c); if (x) return x.i; } return -1; };
/* text -> html with concept buttons (first match of each, if asked) and hub words (first of each) */
function rich(text, opts = {}){
  const hold = []; let s = esc(text);
  if (opts.concepts) {
    const used = new Set();
    for (const [ci, c] of CONCEPTS.entries()) {
      s = s.replace(c.m, m => { if (used.has(ci)) return m; used.add(ci); hold.push(`<button type="button" class="concept" data-concept="${ci}" aria-expanded="false">${m}</button>`); return "\u0001" + (hold.length - 1) + "\u0001"; });
    }
  }
  const seen = new Set();
  s = s.split(/(\u0001\d+\u0001)/).map(part => /^\u0001\d+\u0001$/.test(part) ? part : part.replace(VRX, m => {
    const i = formIndex(m); if (i < 0 || seen.has(i)) return m; seen.add(i);
    hold.push(`<button type="button" class="vw" data-vw="${i}">${m}</button>`); return "\u0001" + (hold.length - 1) + "\u0001"; })).join("");
  return s.replace(/\u0001(\d+)\u0001/g, (m, n) => hold[+n]);
}
function wordCard(i){
  const w = HUB_WORDS[i], built = builtWord(w);
  $("wcBody").innerHTML = built
    ? `<h2 id="wcH">${esc(w.w)}</h2>${w.t.length ? `<div class="tiles">${w.t.map(([p, g]) => `<span>${esc(p)}<small>${esc(g)}</small></span>`).join("")}</div>` : ""}
       <p>${esc(w.m)}</p>${w.n ? `<p class="note">${esc(w.n)}</p>` : ""}<p class="note">From vocab hub lesson ${esc(w.l)}, ${esc(lessonTitle(w.l))}. You have built this word.</p>
       <div class="row"><button type="button" class="big go" data-wclose="1">Close</button></div>`
    : `<h2 id="wcH">${esc(w.w)}</h2><p>You haven't built this word yet. It is in vocab hub lesson <b>${esc(w.l)}, ${esc(lessonTitle(w.l))}</b>.</p>
       <p class="note">Build it there, then tap the word again to see its parts and meaning.</p>
       <div class="row"><button type="button" class="big go" data-wgo="${esc(w.l)}">Build it now, in lesson ${esc(w.l)}</button><button type="button" class="big" data-wclose="1">Not now</button></div>`;
  $("wcard").hidden = false;
  const g = $("wcBody").querySelector("[data-wgo]"); if (g) g.onclick = () => { A.hub = g.dataset.wgo; A.hubBack = A.step; $("wcard").hidden = true; go(SI("words")); };
  $("wcBody").querySelector("[data-wclose]").onclick = () => { $("wcard").hidden = true; };
  $("wcBody").querySelector("button").focus();
}
$("wcard").addEventListener("click", e => { if (e.target === $("wcard")) $("wcard").hidden = true; });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !$("wcard").hidden) $("wcard").hidden = true; });
/* A big idea that is also a hub word: its box carries the word card too. */
function conceptWord(text){
  const i = formIndex(text.trim()); if (i < 0) return "";
  const w = HUB_WORDS[i];
  return builtWord(w)
    ? `<p style="margin:8px 0 0"><b>The word:</b> ${w.t.length ? w.t.map(([p, g]) => `<b>${esc(p)}</b> (${esc(g)})`).join(" + ") + ". " : ""}${esc(w.m)}</p>`
    : `<p style="margin:8px 0 0">You haven't built <b>${esc(w.w)}</b> yet. <button type="button" class="big" data-wgo2="${esc(w.l)}" style="min-height:36px">Build it in lesson ${esc(w.l)}</button></p>`;
}
function wireRich(S){
  S.querySelectorAll("[data-wgo2]").forEach(b => b.onclick = () => { A.hub = b.dataset.wgo2; A.hubBack = A.step; go(SI("words")); });
  S.querySelectorAll("[data-vw]").forEach(b => b.onclick = () => wordCard(+b.dataset.vw));
  S.querySelectorAll("[data-concept]").forEach(b => b.onclick = () => {
    const ci = +b.dataset.concept, p = b.closest("p, li, div"), id = "cbox" + ci;
    const open = document.getElementById(id);
    if (open) { open.remove(); b.setAttribute("aria-expanded", "false"); return; }
    A.seen["c" + ci] = true; save();
    p.insertAdjacentHTML("afterend", `<div class="cbox" id="${id}"><b>${esc(CONCEPTS[ci].k)}.</b> ${rich(CONCEPTS[ci].t)}${conceptWord(b.textContent)}</div>`);
    b.setAttribute("aria-expanded", "true"); wireRich(document.getElementById(id));
  });
}

/* ---------- navigation ---------- */
function stepDone(id){
  if (id === "start") return !!A.name.trim();
  if (id === "words") return builtIn("2.3") === lessonWords("2.3").length;
  if (id === "watch") return VQ.every(q => A.vq.done[q.id]);
  if (id === "read") return READ.every(r => (A.tbl[r.id] || []).filter(x => (x || "").trim()).length === 2);
  if (id === "rem1" || id === "rem2") return !!(A.rem[id] && A.rem[id].items.every(it => it.done));
  if (id === "lowe" || id === "chariot") return A.sa[id].finished;
  return false;
}
function drawStrip(){
  $("strip").innerHTML = STEPS.map((s, k) => `<button type="button" class="${stepDone(s.id) ? "ok" : ""}" data-k="${k}" aria-current="${k === A.step}">${esc(s.short)}</button>`).join("");
  $("strip").querySelectorAll("button").forEach(b => b.onclick = () => { if (steady()) go(+b.dataset.k); });
  document.querySelectorAll("[data-yr]").forEach(b => b.setAttribute("aria-pressed", +b.dataset.yr === A.yr));
}
function go(k){ A.step = Math.max(0, Math.min(STEPS.length - 1, k)); if (A.step !== 0) armLock(); save(); render(); $("screen").parentElement.scrollTop = 0; }
$("back").onclick = () => { if (steady()) go(A.step - 1); };
$("next").onclick = () => { if (steady()) go(A.step + 1); };
document.querySelectorAll("[data-yr]").forEach(b => b.onclick = () => { A.yr = +b.dataset.yr; A.used = A.used || {}; A.used["y" + A.yr] = true; save(); render(); });

function render(){
  stopReading(); stopMic();
  drawStrip();
  const s = STEPS[A.step];
  $("back").disabled = A.step === 0; $("next").hidden = A.step === STEPS.length - 1;
  const body = { start:startScreen, words:wordsScreen, watch:watchScreen, read:readScreen, rem1:() => remScreen("rem1"),
    lowe:() => saScreen("lowe"), chariot:() => saScreen("chariot"), rem2:() => remScreen("rem2"), report:reportScreen }[s.id]();
  $("screen").innerHTML = (s.task ? `<p class="task">${esc(s.task)}</p>` : "") + body;
  wire(); wireRich($("screen")); accessWire();
}

/* ---------- start ---------- */
function startScreen(){
  return `<div class="card"><h1>Ancient China 2.3: Daily life</h1>
    <p>What was daily life like in Ancient China, for the ruling classes and the working classes?</p>
    <div class="row"><label for="nm"><b>Name</b></label><input id="nm" type="text" autocomplete="off" value="${esc(A.name)}"></div>
    <h3 style="margin-top:16px">Reading level</h3>
    <div class="row" role="group" aria-label="Reading level">${[6, 7, 8].map(y => `<button type="button" class="big" data-yr2="${y}" aria-pressed="${A.yr === y}">Year ${y}</button>`).join("")}</div>
    <p class="note">Year 7 is the class reading. You can change it at any time, top right.</p>
    <h3 style="margin-top:16px">Supports</h3>
    <div class="row" role="group" aria-label="Supports">
      <button type="button" class="big" data-sup="big" aria-pressed="${A.sup.big}">Big buttons</button>
      <button type="button" class="big" data-sup="read" aria-pressed="${A.sup.read}" ${TTS ? "" : "disabled"}>🔊 Read to me${TTS ? "" : " (not in this browser)"}</button>
      <button type="button" class="big" data-sup="mic" aria-pressed="${A.sup.mic}" ${SR ? "" : "disabled"}>🎤 Voice typing${SR ? "" : " (not in this browser)"}</button></div>
    ${SR && A.sup.mic ? `<p class="note" id="micNote" aria-live="polite">${esc(micMsg)}</p>` : ""}
    ${TTS && A.sup.read ? `<div class="row" style="margin-top:8px" role="group" aria-label="Reading speed"><b>Reading speed</b>${[[.75, "Slower"], [.9, "Normal"]].map(([r, t]) => `<button type="button" class="big" data-rate="${r}" aria-pressed="${A.rate === r}">${t}</button>`).join("")}</div>` : ""}
    <div class="row" style="margin-top:8px" role="group" aria-label="Background"><b>Background</b>${["cream", "blue", "yellow", "white"].map(t => `<button type="button" class="big" data-tint="${t}" aria-pressed="${A.tint === t}">${t[0].toUpperCase() + t.slice(1)}</button>`).join("")}</div>
    <p class="note">Zoom (A− and A+) is in the bottom bar on every page.</p>
    <h3 style="margin-top:16px">How it works</h3>
    <ol><li>Build the words.</li><li>Watch the video and answer the questions. Two wrong in a row sends you back to question 1.</li>
    <li>Read the slides and fill the table.</li><li>Answer two sources on your own, then check your answers level by level.</li><li>Read your report.</li></ol>
    <p class="note">When you leave this page the module goes full screen. If you leave full screen or the page, it goes in your report. Your work saves on this device as you go.</p></div>`;
}

/* ---------- words: the hub's lesson, inside the module ---------- */
function wordsScreen(){
  const id = A.hub || "2.3", n = builtIn(id), of = lessonWords(id).length;
  const back = A.hubBack !== undefined && A.hubBack !== SI("words") ? `<button type="button" class="big" id="hubBack">← Back to ${esc(STEPS[A.hubBack].short)}</button>` : "";
  return `<div class="card"><div class="row" style="justify-content:space-between"><h2 style="margin:0">Vocab hub lesson ${esc(id)}: ${esc(lessonTitle(id))}</h2>${back}</div>
    <p class="note" id="hubCount">Built: <b>${n} of ${of}</b> words. Build each word from its parts, then use it.${id !== "2.3" ? ` <button type="button" class="big" id="hub23" style="min-height:38px">Lesson 2.3 words</button>` : ""}</p>
    <iframe class="hubframe" id="hub" title="Vocab hub lesson ${esc(id)}" src="${esc(HUB(id).replace("#", "?m=" + Date.now() + "#"))}"></iframe></div>`;
}

/* ---------- watch: the video, then its questions ---------- */
const vById = id => VQ.find(q => q.id === id);
let vFb = null, vStart = 0;
function watchScreen(){
  const v = A.vq, left = v.order.filter(id => !v.done[id]), cur = left[0] ? vById(left[0]) : null;
  const dots = VQ.map((q, k) => `<span class="${v.done[q.id] ? "ok" : cur && cur.id === q.id ? "now" : ""}">${k + 1}</span>`).join("");
  const opts = cur ? (v.shuf && v.shuf[cur.id]) || (v.shuf = v.shuf || {}, v.shuf[cur.id] = shuffle(cur.opts)) : [];
  return `<div class="two"><div class="card"><div class="vid"><iframe id="yt" title="${esc(VIDEO.title)}" src="https://www.youtube-nocookie.com/embed/${VIDEO.id}?rel=0${vStart ? "&start=" + vStart + "&autoplay=1" : ""}" allow="autoplay; encrypted-media; picture-in-picture"></iframe></div>
      <p class="note">${esc(VIDEO.title)} (YouTube). As you watch, answer the questions.</p></div>
    <div class="card"><div class="dots">${dots}</div>
      ${cur ? `<h3>${esc(cur.q)}</h3><div class="opts">${opts.map(o => `<button type="button" class="big" data-vo="${esc(o)}">${esc(o)}</button>`).join("")}</div>`
            : `<h3>All eight answered.</h3><label for="vown"><b>${esc(VQ_OWN.q)}</b></label><textarea id="vown" style="min-height:90px">${esc(A.vown)}</textarea>`}
      ${vFb ? `<div class="fb ${vFb.ok ? "yes" : "no"}" role="status">${vFb.html}</div>` : ""}
      <p class="note">Resets so far: ${v.resets}. Two wrong in a row starts the questions again from question 1.</p></div></div>`;
}
function answerVideo(o){
  const v = A.vq, id = v.order.filter(x => !v.done[x])[0], q = vById(id); if (!q) return;
  v.tries[id] = (v.tries[id] || 0) + 1;
  if (o === q.a) {
    if (v.first[id] === undefined) v.first[id] = true;
    v.done[id] = true; v.streak = 0; vStart = 0;
    vFb = { ok:true, html:`Right. ${esc(q.why)}` };
  } else {
    if (v.first[id] === undefined) v.first[id] = false;
    v.streak++;
    if (v.streak >= 2) {
      v.done = {}; v.streak = 0; v.resets++; v.shuf = {}; v.order = VQ.map(x => x.id);
      vFb = { ok:false, html:`Two wrong in a row, so back to question 1. Watch the part you missed first: <button type="button" class="big" data-vt="${q.t}" style="min-height:36px">▶ Play from ${mmss(q.t)}</button>` };
    } else {
      // spaced: the missed question comes back two questions later
      const left = v.order.filter(x => !v.done[x]); left.splice(left.indexOf(id), 1); left.splice(Math.min(2, left.length), 0, id);
      v.order = VQ.map(x => x.id).filter(x => v.done[x]).concat(left);
      vFb = { ok:false, html:`Not this one. Watch again from ${mmss(q.t)}, and the question comes back soon. <button type="button" class="big" data-vt="${q.t}" style="min-height:36px">▶ Play from ${mmss(q.t)}</button>` };
    }
  }
  save(); render();
}

/* ---------- read: slides, free to move between, one row of the table each ---------- */
function readScreen(){
  const k = Math.max(0, Math.min(READ.length, A.slide || 0));
  const nav = `<div class="slidenav">${READ.map((r, i) => `<button type="button" data-sl="${i}" aria-current="${i === k}" class="${(A.tbl[r.id] || []).filter(x => (x || "").trim()).length === 2 ? "ok" : ""}">${i + 1}. ${esc(r.title)}</button>`).join("")}<button type="button" data-sl="${READ.length}" aria-current="${k === READ.length}">My table</button></div>`;
  if (k === READ.length) {
    return `<div class="card">${nav}<h2>Inequality in ancient China, in life and death</h2>
      <table class="tbl"><tr><th></th><th>Ruling classes</th><th>Working classes</th></tr>
      ${READ.map(r => `<tr><th>${esc(r.row)}</th>${[0, 1].map(c => `<td>${esc((A.tbl[r.id] || [])[c] || "") || "<span class='note'>(empty)</span>"}</td>`).join("")}</tr>`).join("")}</table>
      <p class="note">Tap a slide above to change a row.</p></div>`;
  }
  const r = READ[k], cells = A.tbl[r.id] || ["", ""], both = cells.every(x => (x || "").trim().length >= 3);
  return `<div class="card slide">${nav}<h2>${esc(r.title)}</h2><p class="note">Year ${A.yr} reading. Change it top right. Dotted words open their vocab card; ⊕ words open more.</p>
    <p>${rich(r.t[A.yr], { concepts:true })}</p></div>
    <div class="card"><h3>Fill the table: ${esc(r.row)}</h3>
      <div class="two"><div><label for="t0"><b>Ruling classes</b></label><textarea id="t0" data-tbl="${r.id}" data-c="0" style="min-height:90px">${esc(cells[0] || "")}</textarea></div>
      <div><label for="t1"><b>Working classes</b></label><textarea id="t1" data-tbl="${r.id}" data-c="1" style="min-height:90px">${esc(cells[1] || "")}</textarea></div></div>
      ${A.seen[r.id] ? `<div class="model"><b>One way to put it.</b> Ruling: ${esc(MODEL[r.id][0])} Working: ${esc(MODEL[r.id][1])}<br><span class="note">Check yours says the same kind of thing. Change it if you missed something.</span></div>`
        : `<div class="row" style="margin-top:10px"><button type="button" class="big" id="showModel" ${both ? "" : "disabled"}>Compare with a model answer</button><span class="note">${both ? "" : "Write both cells first."}</span></div>`}
      <div class="row" style="margin-top:10px">${k > 0 ? `<button type="button" class="big" data-sl="${k - 1}">← ${esc(READ[k - 1].title)}</button>` : ""}<button type="button" class="big go" data-sl="${k + 1}">${k + 1 < READ.length ? esc(READ[k + 1].title) + " →" : "My table →"}</button></div></div>`;
}

/* ---------- remember: missed video questions and hub words come back later ---------- */
function makeRem(id){
  if (A.rem[id]) return A.rem[id];
  const used = Object.values(A.rem).flatMap(r => r.items.map(it => it.ref));
  const missed = VQ.filter(q => A.vq.first[q.id] === false && !used.includes(q.id));
  const vpick = (missed.length ? missed : shuffle(VQ.filter(q => !used.includes(q.id))))[0] || VQ[0];
  const words = shuffle(lessonWords("2.3").filter(w => !used.includes(w.w)));
  const w = words.find(x => !builtWord(x)) || words[0];
  const others = shuffle(lessonWords("2.3").filter(x => x.w !== w.w)).slice(0, 3).map(x => x.w);
  A.rem[id] = { items:[
    { ref:vpick.id, kind:"video", q:vpick.q, a:vpick.a, opts:shuffle(vpick.opts), t:vpick.t, done:false },
    { ref:w.w, kind:"word", q:`Which word means: "${w.m}"`, a:w.w, opts:shuffle([w.w, ...others]), done:false } ] };
  save(); return A.rem[id];
}
let remFb = {};
function remScreen(id){
  const R = makeRem(id);
  return `<div class="card"><h2>Remember?</h2><p class="note">Two questions from earlier. Answering from memory, after a gap, is what makes it stick.</p>
    ${R.items.map((it, n) => `<div class="card" style="margin-top:12px"><h3>${esc(it.q)}</h3>
      <div class="opts">${it.opts.map(o => `<button type="button" class="big" data-rem="${id}" data-n="${n}" data-o="${esc(o)}" aria-pressed="${it.done && o === it.a}" ${it.done ? "disabled" : ""}>${esc(o)}</button>`).join("")}</div>
      ${remFb[id + n] ? `<div class="fb ${remFb[id + n].ok ? "yes" : "no"}">${remFb[id + n].html}</div>` : ""}</div>`).join("")}</div>`;
}

/* ---------- sources: answer blind, then check level by level ---------- */
const srcById = id => SOURCES.find(s => s.id === id);
let pendingHl = null, notYet = null, saMsg = "";
function srcPanel(src){
  return src.kind === "text"
    ? `<p><b>${esc(src.title)}</b> ${esc(src.head)}</p><div class="quote">${rich(src.text)}</div><p class="cap">${esc(src.cite)}</p>`
    : `<p><b>${esc(src.title)}</b> ${esc(src.head)}</p><img class="srcimg" src="${esc(src.img)}" alt="${esc(src.alt)}"><p class="cap">${rich(src.cite)}</p>`;
}
/* the answer as the student wrote it, with their highlights and anything they added after seeing a checklist */
function ansHtml(S, q){
  const text = S.ans[q], o = S.orig[q].length, marks = Object.values(S.items).filter(it => it.hl && it.hl[0] === q).map(it => [it.hl[1], it.hl[2]]);
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const m = marks.some(([a, b]) => i >= a && i < b), ad = i >= o;
    const open = (m ? "<mark>" : "") + (ad ? "<span class='added'>" : ""), close = (ad ? "</span>" : "") + (m ? "</mark>" : "");
    out += open + esc(text[i]) + close;
  }
  return out.replace(/<\/mark><mark>/g, "").replace(/<\/span><\/mark><mark><span class='added'>/g, "").replace(/<\/span><span class='added'>/g, "") || "<span class='note'>(nothing written)</span>";
}
const levelItems = (src, L) => src.levels[L] || [];
const levelDone = (S, src, L) => levelItems(src, L).every(it => S.items[it.id] && S.items[it.id].s);
function saScreen(id){
  const src = srcById(id), S = A.sa[id];
  if (S.phase === "write") {
    return `<div class="two"><div class="card">${srcPanel(src)}</div>
      <div class="card"><h3>Answer on your own first</h3><p class="note">No checklist yet. Write what you can. You will check it level by level next, and your report shows what you wrote before you saw any checklist.</p>
      ${src.qs.map((q, n) => `<label for="q${n}"><b>${n + 1}. ${rich(q)}</b></label><textarea id="q${n}" data-sa="${id}" data-q="${n}">${esc(S.orig[n])}</textarea>`).join("")}
      <div class="row" style="margin-top:10px"><button type="button" class="big go" id="saCheck" ${S.orig.join("").trim().length >= 20 ? "" : "disabled"}>I've finished: check my answer</button>
      <span class="note">${S.orig.join("").trim().length >= 20 ? "" : "Write your answers first."}</span></div></div></div>`;
  }
  const L = S.lvl, items = levelItems(src, L);
  const bar = LEVELS_SA.map(l => `<span class="${l < L || (l === L && S.finished) ? "done" : l === L ? "now" : ""}">Level ${l}${l === 9 ? " (optional)" : ""}</span>`).join("");
  const li = items.map(it => {
    const st = S.items[it.id] || {};
    const cls = st.s === "got" ? "got" : st.s === "add" ? "addd" : st.s === "skip" ? "skip" : "";
    let ctl = "";
    if (S.finished) ctl = "";
    else if (pendingHl === it.id) ctl = `<p class="note">Select the words in your answer that show this, then press <b>Mark it</b>.</p><div class="row"><button type="button" class="big go" data-mark="${it.id}">Mark it</button><button type="button" class="big" data-cancel="1">Cancel</button></div>`;
    else if (notYet === it.id) ctl = `<p class="note">You can add it now, or skip it. Your report shows it was added after you saw the checklist.</p>
        <div class="row"><label>Add to answer <select id="addQ">${src.qs.map((q, n) => `<option value="${n}">${n + 1}</option>`).join("")}</select></label></div>
        <textarea id="addT" style="min-height:70px" placeholder="Type what you would add"></textarea>
        <div class="row"><button type="button" class="big go" data-add="${it.id}">Add it</button><button type="button" class="big" data-skip="${it.id}">Skip for now</button><button type="button" class="big" data-cancel="1">Cancel</button></div>`;
    else if (!st.s) ctl = `<div class="row"><button type="button" class="big" data-yes="${it.id}">✓ I did this</button><button type="button" class="big" data-no="${it.id}">Not yet</button></div>`;
    else ctl = `<p class="note">${st.s === "got" ? (st.inAdded ? "Ticked, in words you added." : "Ticked, in your first answer.") : st.s === "add" ? "Added after seeing the checklist." : "Skipped."} <button type="button" class="big" data-redo="${it.id}" style="min-height:34px">Change</button></p>`;
    return `<li class="${cls}"><span class="it">${esc(it.t)}</span>${ctl}</li>`;
  }).join("");
  const allDone = levelDone(S, src, L);
  const nextBtns = S.finished ? `<p class="fb yes">Checklist finished. ${L < 9 ? `<button type="button" class="big" data-l9="1">Try Level 9 too</button>` : ""}</p>`
    : allDone ? (L < 8 ? `<button type="button" class="big go" data-up="1">Bump up to Level ${L + 1} →</button>`
      : L === 8 ? `<div class="row"><button type="button" class="big go" data-up="1">Try Level 9 (optional) →</button><button type="button" class="big" data-fin="1">Finish here</button></div>`
      : `<button type="button" class="big go" data-fin="1">Finish</button>`) : `<p class="note">Go through every line at this level to bump up.</p>`;
  return `<div class="two"><div class="card">${srcPanel(src)}
      <h3 style="margin-top:12px">Your answer</h3>${src.qs.map((q, n) => `<p style="margin:6px 0 2px"><b>${n + 1}. ${esc(q)}</b></p><div class="ans" data-ansq="${n}">${ansHtml(S, n)}</div>`).join("")}
      <p class="note"><mark>Yellow</mark> is where you showed each tick. <span class="added" style="background:var(--add)">Blue</span> is what you added after seeing a checklist.</p></div>
    <div class="card"><div class="lvlbar">${bar}</div>
      <h3>Level ${L}${L === 5 ? ": the first checks" : ""}</h3>
      ${RUB1[L] ? `<p class="rub"><b>Rubric:</b> ${esc(RUB1[L])}</p>` : `<p class="rub">The rubric starts at Level 6. These are the first checks.</p>`}
      ${saMsg ? `<p class="fb no" role="status">${esc(saMsg)}</p>` : ""}
      <ul class="ckl">${li}</ul>${nextBtns}</div></div>`;
}
/* a selection inside one answer, as [question, start, end] in that answer's text */
function selectionInAnswer(){
  const sel = window.getSelection(); if (!sel || sel.isCollapsed || !sel.rangeCount) return null;
  const r = sel.getRangeAt(0), box = r.startContainer.parentElement && r.startContainer.parentElement.closest(".ans");
  if (!box || !box.contains(r.endContainer)) return null;
  const pre = document.createRange(); pre.selectNodeContents(box); pre.setEnd(r.startContainer, r.startOffset);
  const s = pre.toString().length, e = s + r.toString().length;
  return e > s ? [+box.dataset.ansq, s, e] : null;
}

/* ---------- wiring ---------- */
function wire(){
  const S = $("screen");
  const nm = $("nm"); if (nm) nm.addEventListener("input", () => { A.name = nm.value; save(); drawStrip(); });
  S.querySelectorAll("[data-yr2]").forEach(b => b.onclick = () => { A.yr = +b.dataset.yr2; save(); render(); });
  // words
  const hb = $("hubBack"); if (hb) hb.onclick = () => { const k = A.hubBack; A.hubBack = undefined; A.hub = "2.3"; go(k); };
  const h23 = $("hub23"); if (h23) h23.onclick = () => { A.hub = "2.3"; render(); };
  const hf = $("hub"); if (hf) { const upd = () => { const c = $("hubCount"); if (c) c.querySelector("b").textContent = `${builtIn(A.hub || "2.3")} of ${lessonWords(A.hub || "2.3").length}`; drawStrip(); }; hf.addEventListener("load", upd); setTimeout(upd, 1500); window.addEventListener("storage", upd); }
  // watch
  S.querySelectorAll("[data-vo]").forEach(b => b.onclick = () => { if (steady()) answerVideo(b.dataset.vo); });
  S.querySelectorAll("[data-vt]").forEach(b => b.onclick = () => { vStart = +b.dataset.vt; render(); });
  const vo = $("vown"); if (vo) vo.addEventListener("input", () => { A.vown = vo.value; save(); });
  // read
  S.querySelectorAll("[data-sl]").forEach(b => b.onclick = () => { A.slide = +b.dataset.sl; save(); render(); $("screen").parentElement.scrollTop = 0; });
  S.querySelectorAll("[data-tbl]").forEach(t => t.addEventListener("input", () => {
    const r = t.dataset.tbl; A.tbl[r] = A.tbl[r] || ["", ""]; A.tbl[r][+t.dataset.c] = t.value; save(); drawStrip();
    const b = $("showModel"); if (b) { const ok = A.tbl[r].every(x => (x || "").trim().length >= 3); b.disabled = !ok; b.nextElementSibling.textContent = ok ? "" : "Write both cells first."; } }));
  const sm = $("showModel"); if (sm) sm.onclick = () => { A.seen[READ[A.slide].id] = true; save(); render(); };
  // remember
  S.querySelectorAll("[data-rem]").forEach(b => b.onclick = () => {
    if (!steady()) return;
    const R = A.rem[b.dataset.rem], n = +b.dataset.n, it = R.items[n], ok = b.dataset.o === it.a;
    if (it.first === undefined) it.first = ok;
    if (ok) { it.done = true; remFb[b.dataset.rem + n] = { ok:true, html:"Right." }; }
    else remFb[b.dataset.rem + n] = { ok:false, html: it.kind === "video" ? `Not this one. It was in the video at ${mmss(it.t)}. Try again.` : "Not this one. Tap the words in the reading, or build them in step 1. Try again." };
    save(); render(); });
  // sources: writing
  S.querySelectorAll("[data-sa]").forEach(t => t.addEventListener("input", () => {
    const Sx = A.sa[t.dataset.sa]; Sx.orig[+t.dataset.q] = t.value; save();
    const b = $("saCheck"), ok = Sx.orig.join("").trim().length >= 20; b.disabled = !ok; b.nextElementSibling.textContent = ok ? "" : "Write your answers first."; }));
  const sc = $("saCheck"); if (sc) sc.onclick = () => { const Sx = A.sa[STEPS[A.step].id]; Sx.ans = Sx.orig.slice(); Sx.phase = "check"; Sx.checkedAt = Date.now(); save(); render(); };
  // sources: checking
  const id = STEPS[A.step].id, Sx = A.sa[id];
  S.querySelectorAll("[data-yes]").forEach(b => b.onclick = () => { pendingHl = b.dataset.yes; notYet = null; saMsg = ""; render(); });
  S.querySelectorAll("[data-no]").forEach(b => b.onclick = () => { notYet = b.dataset.no; pendingHl = null; saMsg = ""; render(); });
  S.querySelectorAll("[data-cancel]").forEach(b => b.onclick = () => { pendingHl = notYet = null; saMsg = ""; render(); });
  S.querySelectorAll("[data-mark]").forEach(b => { b.addEventListener("pointerdown", e => e.preventDefault()); b.onclick = () => {
    const hl = selectionInAnswer();
    if (!hl) { saMsg = "Select some words in your answer first: drag across them, then press Mark it."; render(); return; }
    Sx.items[b.dataset.mark] = { s:"got", hl, inAdded: hl[1] >= Sx.orig[hl[0]].length, at:Date.now() };
    pendingHl = null; saMsg = ""; save(); render(); }; });
  S.querySelectorAll("[data-add]").forEach(b => b.onclick = () => {
    const t = ($("addT").value || "").trim(), q = +$("addQ").value;
    if (!t) { saMsg = "Type what you would add, or choose Skip for now."; render(); return; }
    const cur = Sx.ans[q], start = cur.length + (cur && !/\s$/.test(cur) ? 1 : 0);
    Sx.ans[q] = cur + (cur && !/\s$/.test(cur) ? " " : "") + t;
    Sx.items[b.dataset.add] = { s:"add", text:t, q, hl:[q, start, Sx.ans[q].length], at:Date.now() };
    notYet = null; saMsg = ""; save(); render(); });
  S.querySelectorAll("[data-skip]").forEach(b => b.onclick = () => { Sx.items[b.dataset.skip] = { s:"skip", at:Date.now() }; notYet = null; save(); render(); });
  S.querySelectorAll("[data-redo]").forEach(b => b.onclick = () => { delete Sx.items[b.dataset.redo]; save(); render(); });
  S.querySelectorAll("[data-up]").forEach(b => b.onclick = () => { Sx.lvl++; save(); render(); });
  S.querySelectorAll("[data-fin]").forEach(b => b.onclick = () => { Sx.finished = true; save(); render(); });
  S.querySelectorAll("[data-l9]").forEach(b => b.onclick = () => { Sx.finished = false; Sx.lvl = 9; save(); render(); });
  // report
  const pr = $("printBtn"); if (pr) pr.onclick = () => { graceUntil = Date.now() + 120000; buildPrint(); window.print(); graceUntil = Date.now() + 3000; };
  const copy = async t => { try { await navigator.clipboard.writeText(t); $("copied").textContent = "Copied."; } catch (e) { $("copied").textContent = "Copy did not work here. Use Print instead."; } };
  const cr = $("rowBtn"); if (cr) cr.onclick = () => copy(classRow());
}

/* ---------- report ---------- */
function saSummary(id){
  const src = srcById(id), S = A.sa[id], rows = [];
  let blind = 0, withAdds = 0, blindBroken = false, addBroken = false, added = 0, skipped = 0;
  for (const L of LEVELS_SA) {
    const its = levelItems(src, L);
    const firstAll = its.every(it => S.items[it.id] && S.items[it.id].s === "got" && !S.items[it.id].inAdded);
    const anyAll = its.every(it => S.items[it.id] && (S.items[it.id].s === "got" || S.items[it.id].s === "add"));
    if (!blindBroken && firstAll) blind = L; else blindBroken = true;
    if (!addBroken && anyAll) withAdds = L; else addBroken = true;
    for (const it of its) { const st = S.items[it.id]; if (st && st.s === "add") added++; if (st && st.s === "skip") skipped++; rows.push({ L, it, st }); }
  }
  return { src, S, rows, blind, withAdds, added, skipped };
}
const resLinks = keys => keys.map(k => `<a href="${esc(RES[k][1])}" target="_blank" rel="noopener">${esc(RES[k][0])}</a>`).join(" · ");
function reportScreen(){
  const v = A.vq, vFirst = VQ.filter(q => v.first[q.id] === true).length, vMissed = VQ.filter(q => v.first[q.id] === false);
  const rems = ["rem1", "rem2"].flatMap(r => A.rem[r] ? A.rem[r].items : []), remFirst = rems.filter(it => it.first === true).length;
  const cells = READ.reduce((n, r) => n + (A.tbl[r.id] || []).filter(x => (x || "").trim()).length, 0);
  const w23 = lessonWords("2.3"), notBuilt = w23.filter(w => !builtWord(w));
  const sums = ["lowe", "chariot"].map(saSummary);
  const tagOf = st => !st || !st.s ? `<span class="tag s">Not checked</span>` : st.s === "got" && !st.inAdded ? `<span class="tag y">First time</span>` : st.s === "add" || st.inAdded ? `<span class="tag a">Added after the list</span>` : `<span class="tag s">Skipped</span>`;
  const saBlock = ({ src, S, rows, blind, withAdds }) => `<h3>${esc(src.title)}: ${esc(src.head)}</h3>
    ${S.phase === "write" ? `<p>Not answered yet. <button type="button" class="big" data-gotostep="${SI(src.id)}">Go to ${esc(src.title)}</button></p>` : `
    <p>Your first answer, before any checklist, reached <b>${blind ? "Level " + blind : "below Level 5"}</b>. With what you added, <b>${withAdds ? "Level " + withAdds : "below Level 5"}</b>.</p>
    <ul>${rows.filter(r => r.L <= Math.max(S.lvl, 5)).map(({ L, it, st }) => `<li>${tagOf(st)} <b>L${L}</b> ${esc(it.t)}${!st || st.s !== "got" || st.inAdded ? `<br><span class="note">${esc(it.adv)}${it.res.length ? " Explore: " + resLinks(it.res) : ""}</span>` : ""}</li>`).join("")}</ul>`}`;
  const advice = [];
  if (notBuilt.length) advice.push(`Build the 2.3 words you haven't built yet (${notBuilt.map(w => esc(w.w)).join(", ")}): ${resLinks(["hub23"])}.`);
  const parts = [...new Map(vMissed.map(q => [q.t, q])).values()];   // two questions can share one part of the video
  if (parts.length) advice.push(`Watch these parts of the video again: ${parts.map(q => `<a href="${at(q.t)}" target="_blank" rel="noopener">${esc(q.topic)} at ${mmss(q.t)}</a>`).join(" · ")}.`);
  if (v.resets) advice.push(`You were sent back to question 1 ${v.resets === 1 ? "once" : v.resets + " times"}. Next time, pause the video and answer each question as it comes up.`);
  if (cells < 12) advice.push(`Your table has ${12 - cells} empty cell${12 - cells === 1 ? "" : "s"}. Finish it in step 3: it is your summary of the whole lesson.`);
  const unstarted = sums.filter(s => s.S.phase === "write");
  if (unstarted.length) advice.push(`Answer ${unstarted.map(s => esc(s.src.title)).join(" and ")} on your own, then check it level by level.`);
  const NEXT = { 5:["say what the source is about, and use its own examples as evidence", []], 6:["say what type of source it is and why, every time", ["hub21", "aus"]],
    7:["name the origin (who, when, where) and the purpose before you say anything else", ["hub25", "aus"]], 8:["join every piece of evidence to what it shows, with a link word", ["cai"]] };
  const weak = sums.filter(s => s.S.phase !== "write").flatMap(s => s.rows.filter(r => !(r.st && r.st.s === "got" && !r.st.inAdded) && r.L <= 8).map(r => r.L));
  if (weak.length) { const low = Math.min(...weak); advice.push(`Your next step in source analysis is Level ${low}: ${NEXT[low][0]}.${NEXT[low][1].length ? " " + resLinks(NEXT[low][1]) + "." : ""}`); }
  if (!advice.length) advice.push("Everything done, first time. Try Level 9 on both sources if you haven't, and read the Year 8 slides.");
  return `<div class="card rep"><h1>My report</h1>
    <p><b>${esc(A.name || "(no name)")}</b> · ${Math.round(A.secs / 60)} minutes on the module · reading level Year ${A.yr}</p>
    <p class="note">The lock is off on this page, so the links open without counting against you.</p>
    <h2>What to do next</h2><ul>${advice.map(a => `<li>${a}</li>`).join("")}</ul>
    <h3>Words (vocab hub 2.3)</h3><p>Built ${w23.length - notBuilt.length} of ${w23.length}.</p>
    <h3>Video questions</h3><p>Right first time: <b>${vFirst} of ${VQ.length}</b>. Back to question 1: ${v.resets} time${v.resets === 1 ? "" : "s"}.</p>
    ${vMissed.length ? `<ul>${vMissed.map(q => `<li>${esc(q.q)} <a href="${at(q.t)}" target="_blank" rel="noopener">Watch from ${mmss(q.t)}</a></li>`).join("")}</ul>` : ""}
    <p class="note">My interesting fact: ${esc(A.vown || "(not written)")}</p>
    <h3>Remember?</h3><p>Right first time: ${remFirst} of ${rems.length}.</p>
    <h3>The table</h3><p>${cells} of 12 cells written. Model answers looked at: ${READ.filter(r => A.seen[r.id]).length} of 6.</p>
    ${sums.map(saBlock).join("")}
    <h3>Supports</h3><p>${esc(supportsUsed())}</p>
    <h3>Full screen</h3><p>Left full screen or the page ${A.log.length} time${A.log.length === 1 ? "" : "s"}.</p>
    <p class="note">The video and Remember questions were marked by the page. Your table, your answers and your ticks are your own: the page did not judge them, and your teacher will.</p>
    <div class="row" style="margin-top:12px"><button type="button" class="big go" id="printBtn">Print or save as PDF</button><button type="button" class="big" id="rowBtn">Copy a row for my teacher</button><span id="copied" role="status"></span></div></div>`;
}
function buildPrint(){
  const sums = ["lowe", "chariot"].map(saSummary);
  $("print").innerHTML = `<h1>Ancient China 2.3 · Daily life</h1><p><b>${esc(A.name)}</b> · ${new Date().toLocaleDateString("en-AU")} · ${Math.round(A.secs / 60)} minutes · Year ${A.yr} reading</p>` +
    $("screen").querySelector(".rep").innerHTML.replace(/<button[\s\S]*?<\/button>/g, "") +
    sums.map(({ src, S }) => `<h2>${esc(src.title)}: my answers</h2>${src.qs.map((q, n) => `<p><b>${n + 1}. ${esc(q)}</b></p><div class="ans">${ansHtml(S, n)}</div>`).join("")}`).join("") +
    `<h2>My table</h2><table border="1" cellpadding="4" style="border-collapse:collapse;width:100%"><tr><th></th><th>Ruling classes</th><th>Working classes</th></tr>${READ.map(r => `<tr><th>${esc(r.row)}</th><td>${esc((A.tbl[r.id] || [])[0] || "")}</td><td>${esc((A.tbl[r.id] || [])[1] || "")}</td></tr>`).join("")}</table>` +
    (A.log.length ? `<h2>Full-screen log</h2><p>${A.log.map(x => esc(new Date(x.t).toLocaleString("en-AU") + ": " + x.what)).join("<br>")}</p>` : "");
}
/* One tab-separated row for a class sheet: name, date, minutes, reading level, 2.3 words
   built, video right first time, resets, Remember right first time, table cells, then for
   each source the first-answer level, the level with additions, items added, items skipped,
   then exits, the interesting fact and both first answers in the student's own words.
   It cannot tell you whether the writing is any good. */
function classRow(){
  const c = t => String(t ?? "").replace(/[\t\r\n]+/g, " ").trim();
  const sums = ["lowe", "chariot"].map(saSummary), v = A.vq;
  const rems = ["rem1", "rem2"].flatMap(r => A.rem[r] ? A.rem[r].items : []);
  return [c(A.name), new Date().toLocaleDateString("en-AU"), Math.round(A.secs / 60), "Y" + A.yr, builtIn("2.3") + "/" + lessonWords("2.3").length,
    VQ.filter(q => v.first[q.id] === true).length + "/" + VQ.length, v.resets, rems.filter(it => it.first === true).length + "/" + rems.length,
    READ.reduce((n, r) => n + (A.tbl[r.id] || []).filter(x => (x || "").trim()).length, 0) + "/12",
    ...sums.flatMap(s => ["L" + s.blind, "L" + s.withAdds, s.added, s.skipped]), A.log.length, c(A.vown),
    ...sums.map(s => c(s.S.orig.join(" | "))), c(supportsUsed())].join("\t");
}

/* ---------- ACCESS: supports chosen on Start (as in the accessible Rome CAT) ---------- */
const SUP_NAMES = { big:"Big buttons", read:"Read to me", mic:"Voice typing" };
function supportsUsed(){ const L = Object.keys(SUP_NAMES).filter(k => A.used[k]).map(k => SUP_NAMES[k]); if (A.used.zoom > 1) L.push("Zoom up to " + Math.round(A.used.zoom * 100) + "%"); return L.length ? L.join(", ") : "none"; }
function applySupports(){
  A.sup = Object.assign({ big:false, read:false, mic:false }, A.sup);
  document.body.classList.toggle("bigui", !!A.sup.big);
  document.body.classList.toggle("noread", !A.sup.read || !TTS);
  document.body.classList.toggle("nomic", !A.sup.mic || !SR);
  ["cream", "blue", "yellow", "white"].forEach(t => document.body.classList.toggle("tint-" + t, (A.tint || "cream") === t));
  if (!A.sup.read) stopReading();
  if (!A.sup.mic) { stopMic(); closeMic(); }
}
const ZOOMS = [0.8, 0.9, 1, 1.15, 1.3, 1.5, 1.75, 2];
function setZoom(z){
  A.zoom = ZOOMS.includes(z) ? z : 1; if (A.zoom > 1) A.used.zoom = Math.max(A.used.zoom || 1, A.zoom);
  document.documentElement.style.setProperty("--z", A.zoom); document.body.classList.toggle("zbig", A.zoom >= 1.5);
  $("zLvl").textContent = Math.round(A.zoom * 100) + "%"; $("zOut").disabled = A.zoom === ZOOMS[0]; $("zIn").disabled = A.zoom === ZOOMS[ZOOMS.length - 1]; save();
}
$("zIn").onclick = () => { if (steady()) setZoom(ZOOMS[Math.min(ZOOMS.length - 1, ZOOMS.indexOf(A.zoom) + 1)]); };
$("zOut").onclick = () => { if (steady()) setZoom(ZOOMS[Math.max(0, ZOOMS.indexOf(A.zoom) - 1)]); };

/* read to me: the device's own voice; each word is lit up as it is read */
var TTS = "speechSynthesis" in window;
var voice = null, reading = null;
function pickVoice(){ const v = speechSynthesis.getVoices().filter(x => /^en/i.test(x.lang)); const rank = x => (x.lang === "en-AU" ? 0 : /en-(GB|NZ)/.test(x.lang) ? 1 : 2) + (x.localService ? 0 : 3); voice = v.sort((a, b) => rank(a) - rank(b))[0] || null; }
if (TTS) { pickVoice(); speechSynthesis.addEventListener("voiceschanged", pickVoice); }
function utter(t){ const u = new SpeechSynthesisUtterance(t); u.lang = voice ? voice.lang : "en-AU"; if (voice) u.voice = voice; u.rate = A.rate || .9; return u; }
function setReadUI(){ const b = $("readPage"); b.setAttribute("aria-pressed", !!reading); b.textContent = reading ? "■ Stop reading" : "🔊 Read this page"; }
function stopReading(){ if (!TTS) return; const r = reading; reading = null; if (r && r.el) r.el.innerHTML = r.orig; speechSynthesis.cancel(); setReadUI(); }
function speak(t){ if (!TTS) return; stopReading(); speechSynthesis.speak(utter(t)); }
function readEls(els){
  if (!TTS) return; stopReading();
  const r = reading = { queue: els.filter(e => e && e.textContent.trim()), el:null, orig:"" }; setReadUI();
  const next = () => {
    if (reading !== r) return;
    if (r.el) { r.el.innerHTML = r.orig; r.el = null; }
    const el = r.queue.shift(); if (!el) { reading = null; setReadUI(); return; }
    const text = el.textContent.replace(/\s+/g, " ").trim(), spans = [];
    text.replace(/\S+/g, (w, i) => { spans.push([i, i + w.length]); return w; });
    r.el = el; r.orig = el.innerHTML;
    el.innerHTML = spans.map(([a, b]) => `<span class="w">${esc(text.slice(a, b))}</span>`).join(" ");
    const ws = el.querySelectorAll(".w"), u = utter(text);
    u.onboundary = e => { if (reading !== r || e.name === "sentence") return; const k = spans.findIndex(([a, b]) => e.charIndex >= a && e.charIndex < b); ws.forEach((w, j) => w.classList.toggle("now", j === k)); if (k >= 0) ws[k].scrollIntoView({ block:"nearest" }); };
    u.onend = u.onerror = () => setTimeout(next, 150);
    speechSynthesis.speak(u);
  };
  next();
}
$("readPage").onclick = () => {
  if (!steady()) return; if (reading) { stopReading(); return; }
  readEls([...$("screen").querySelectorAll("h1, h2, h3, .slide > p:not(.note), .quote, .cap, .opts .big, .ckl .it, .rub, .fb, .model, .cbox, label b, .rep li, .rep p")]);
};

/* voice typing: the browser's speech recognition puts what is said at the cursor */
var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
var rec = null, recFor = null, sttLang = null, micStream = null, micMsg = "";
(async () => { try { if (SR && SR.available) for (const l of ["en-AU", "en-GB", "en-US"]) if (await SR.available({ langs:[l], processLocally:true }) === "available") { sttLang = l; break; } } catch (e) {} })();
const liveTrack = () => micStream && micStream.getAudioTracks().find(t => t.readyState === "live");
function micNote(t){ micMsg = t; const n = $("micNote"); if (n) n.textContent = t; }
async function openMic(){
  if (liveTrack()) { micNote("Microphone on. It only listens when you tap Speak."); return; }
  if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) { micNote("This browser cannot use the microphone."); return; }
  micNote("If the browser asks to use the microphone, choose Allow.");
  try { micStream = await navigator.mediaDevices.getUserMedia({ audio:true }); micNote("Microphone on. It only listens when you tap Speak."); }
  catch (e) { micStream = null; micNote(e.name === "NotFoundError" ? "No microphone found on this device." : "The microphone is blocked. Ask your teacher."); }
}
function closeMic(){ if (micStream) micStream.getTracks().forEach(t => t.stop()); micStream = null; }
function stopMic(){ const r = rec; rec = null; recFor = null; if (r) { try { r.stop(); } catch (e) {} }
  document.querySelectorAll(".acc-mic").forEach(b => { b.setAttribute("aria-pressed", "false"); b.textContent = "🎤 Speak"; }); }
function putSaid(ta, said){
  said = (said || "").trim(); if (!said || !ta || !document.body.contains(ta)) return;
  const s = ta.selectionStart ?? ta.value.length, e = ta.selectionEnd ?? ta.value.length, before = ta.value.slice(0, s);
  const text = (!before.trim() || /[.!?]\s*$/.test(before) ? said[0].toUpperCase() + said.slice(1) : said) + " ";
  const pad = before && !/\s$/.test(before) ? " " : "";
  ta.value = before + pad + text + ta.value.slice(e);
  const at = (before + pad + text).length; ta.setSelectionRange(at, at);
  ta.dispatchEvent(new Event("input", { bubbles:true }));     // the box's own handler saves it
}
function startMic(ta, btn, note){
  stopMic(); stopReading();
  const r = rec = new SR(); recFor = ta;
  r.lang = sttLang || "en-AU"; r.continuous = true; r.interimResults = true; if (sttLang) r.processLocally = true;
  r.onresult = e => { if (r.closed) return; let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) { const x = e.results[i]; if (x.isFinal) putSaid(ta, x[0].transcript); else interim += " " + x[0].transcript.trim(); }
    r.pending = interim.trim(); note.textContent = r.pending ? "Hearing: " + r.pending : "Listening."; };
  r.onerror = e => { if (e.error === "aborted") return; r.err = true;
    note.textContent = e.error === "network" ? "Voice typing needs the internet on this device." : e.error === "not-allowed" || e.error === "service-not-allowed" ? "The microphone is blocked. Ask your teacher." : e.error === "no-speech" ? "Nothing heard. Tap Speak and try again." : "Voice typing stopped. Tap Speak to start again."; };
  r.onend = () => { r.closed = true; if (r.pending) { putSaid(ta, r.pending); r.pending = ""; } if (rec === r) stopMic(); if (!r.err) note.textContent = ""; };
  const track = liveTrack(); let started = false;
  if (track) { try { r.start(track); started = true; } catch (e) {} }
  if (!started) { try { r.start(); started = true; } catch (e) {} }
  if (started) { btn.setAttribute("aria-pressed", "true"); btn.textContent = "■ Stop"; note.textContent = "Listening."; }
  else { rec = null; recFor = null; note.textContent = "Voice typing did not start."; }
}

/* after each render: Speak and Read-my-writing under every writing box, and the Start controls */
function accessWire(){
  const S = $("screen");
  S.querySelectorAll("textarea").forEach(ta => {
    if (ta.nextElementSibling && ta.nextElementSibling.classList.contains("acc")) return;
    const bar = document.createElement("div"); bar.className = "acc";
    bar.innerHTML = (SR ? `<button type="button" class="big acc-mic" aria-pressed="false">🎤 Speak</button>` : "")
      + (TTS ? `<button type="button" class="big acc-read">🔊 Read my writing</button>` : "") + `<p class="heard" aria-live="polite"></p>`;
    ta.after(bar);
    const mb = bar.querySelector(".acc-mic"), note = bar.querySelector(".heard");
    if (mb) { mb.addEventListener("pointerdown", e => e.preventDefault()); mb.onclick = () => { if (!steady()) return; if (recFor === ta) stopMic(); else { ta.focus(); startMic(ta, mb, note); } }; }
    const rb = bar.querySelector(".acc-read"); if (rb) rb.onclick = () => speak(ta.value.trim() || "Nothing written yet.");
  });
  S.querySelectorAll("[data-sup]").forEach(b => b.onclick = () => { if (!steady()) return; const k = b.dataset.sup; A.sup[k] = !A.sup[k]; if (A.sup[k]) A.used[k] = true; save(); applySupports(); render(); if (k === "mic" && A.sup.mic) openMic(); });
  S.querySelectorAll("[data-rate]").forEach(b => b.onclick = () => { if (!steady()) return; A.rate = +b.dataset.rate; save(); render(); speak("This is the reading speed."); });
  S.querySelectorAll("[data-tint]").forEach(b => b.onclick = () => { if (!steady()) return; A.tint = b.dataset.tint; save(); applySupports(); render(); });
}

/* ---------- the full-screen lock (no password), off on the report ---------- */
const FS = !!(document.documentElement.requestFullscreen && document.fullscreenEnabled !== false);
let graceUntil = 0;
function armLock(){ if (FS && !document.fullscreenElement && STEPS[A.step].id !== "report") document.documentElement.requestFullscreen().catch(() => {}); }
function showLock(what){
  const id = STEPS[A.step].id;
  if (id === "start" || id === "report" || !$("lock").hidden) return;
  if (Date.now() > graceUntil) { A.log.push({ t:Date.now(), what }); save(); }
  $("lockH").textContent = what === "Left the page" ? "You left the page" : what === "Left the window" ? "You switched away" : "You left full screen";
  $("lock").hidden = false; $("lockBack").focus();
}
$("lockBack").onclick = () => { const done = () => { $("lock").hidden = true; }; if (FS) document.documentElement.requestFullscreen().then(done, done); else done(); };
document.addEventListener("fullscreenchange", () => { if (FS && !document.fullscreenElement) showLock("Left full screen"); });
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") showLock("Left the page"); });
/* Alt+Tab leaves the page visible and in full screen, so watch focus as well. A click
   into the video or the vocab hub also blurs the window, but document.hasFocus() stays
   true; and once focus is inside a frame the page gets no second blur, so check each second. */
window.addEventListener("blur", () => setTimeout(() => { if (!document.hasFocus() && Date.now() > graceUntil) showLock("Left the window"); }, 200));
setInterval(() => { if (document.visibilityState === "visible" && !document.hasFocus() && Date.now() > graceUntil) showLock("Left the window"); }, 1000);
document.addEventListener("click", e => { const g = e.target.closest("[data-gotostep]"); if (g) go(+g.dataset.gotostep); });

A.sup = Object.assign({ big:false, read:false, mic:false }, A.sup); A.used = A.used || {};
applySupports(); setZoom(A.zoom || 1);
render();
if (A.sup.mic && SR) openMic();
if (A.step !== 0 && STEPS[A.step].id !== "report" && FS && !document.fullscreenElement) { $("lockH").textContent = "Back to the module"; $("lock").hidden = false; }
