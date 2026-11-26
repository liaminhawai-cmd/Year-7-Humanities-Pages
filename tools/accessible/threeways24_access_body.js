/* ======================================================================= */
const $ = id => document.getElementById(id);
const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const cap1 = t => t[0].toUpperCase() + t.slice(1);
const KEY = "three24.access.v1";
const VIDEO = "87jRYTOONRw";
/* The paper sheet's stops, word for word (lesson-2-4-build/build24.js in the private repository).
   m = marks; "fact" is a key detail, "link" is levelled: 1 names it, 2 links it. The stems are
   sentence starters only; the model answer appears after the student checks their own. */
const STOPS = [
 { n:1, from:"0:33", at:"1:30", title:"Taoism (Daoism)", qs:[
  { id:"1a", kind:"fact", m:1, min:4, q:"What did Taoists believe about nature?", stems:["Taoists believed that people should ", "A universal force "],
    a:"People should be one with nature (1); or: a universal force flows through all living things. [0:50]" },
  { id:"1b", kind:"link", m:2, min:8, q:"How were Taoists different from the followers of Confucius?", stems:["Taoists did not believe in ", "The followers of Confucius wanted ", "This is different because "],
    a:"1 mark: Taoists did not believe in a lot of rules or government.\n2 marks: sets it against Confucius's followers, who wanted a strong, organised government. [1:00, 2:14]" },
  { id:"1c", kind:"fact", m:2, min:4, q:"Yin and yang are pairs of opposite forces. Give two of the video's pairs.", stems:["One pair is ", "Another pair is "],
    a:"Any two of dark and light, cold and hot, male and female (1 each). [1:19]" } ] },
 { n:2, from:"1:33", at:"3:11", title:"Confucianism", qs:[
  { id:"2a", kind:"fact", m:1, min:3, q:"Who wrote down Confucius's teachings?", stems:["His ", "They were written down by "],
    a:"His followers (he did not write them himself). [1:50]" },
  { id:"2b", kind:"fact", m:2, min:4, q:"Name two things Confucius said were important.", stems:["One thing was ", "Another thing was "],
    a:"Any two of respect, politeness, fairness, honour, morality, family (1 each). [1:55 to 2:14]" },
  { id:"2c", kind:"fact", m:1, min:3, q:"Family mattered to Confucius. What did he say people had to do?", stems:["People had to ", "Children had to "],
    a:"Honour their relatives. [2:11]" } ] },
 { n:3, from:"3:16", at:"4:09", title:"Buddhism", qs:[
  { id:"3a", kind:"fact", m:1, min:3, q:"Where and when does the video say the Buddha was born?", stems:["The video says he was born in ", "The year was "],
    a:"Nepal, 563 BC. [3:25]" },
  { id:"3b", kind:"link", m:2, min:8, q:"What is karma?", stems:["Karma means ", "So good actions will ", "And bad actions will "],
    a:"1 mark: all actions have consequences.\n2 marks: links it: good actions will help you later and bad ones will hurt you. [3:54 to 4:09]" },
  { id:"3c", kind:"fact", m:1, min:3, q:"What does the video say happens when the cycle of rebirth is complete?", stems:["The video says the person ", "When the cycle ends, "],
    a:"The person enters nirvana. [3:46]" } ] }];
/* The bonus: the video gets something wrong about each way. Students check it against their group's reading.
   No model answer on this page: the reading decides. */
const ERRORS = [
 { id:"e1", n:1, t:"Taoism (Daoism)", m:1, min:8, claim:"Taoism was founded in the sixth century by Laozi, who wrote the Tao Te Ching (0:36). The idea of yin and yang comes from Taoism (1:08).", stems:["The reading says ", "The video is wrong because "] },
 { id:"e2", n:2, t:"Confucianism", m:1, min:8, claim:"The video quotes Confucius with sayings such as 'Forget injuries, never forget kindnesses' (2:28 to 3:06).", stems:["The reading says ", "The video is wrong because "] },
 { id:"e3", n:3, t:"Buddhism", m:1, min:8, claim:"Buddhists believe in a rebirth of the self, and the person's soul enters nirvana (3:38 to 3:50). Buddhism spread through India and China (3:34), with no date.", stems:["The reading says ", "The video is wrong because "] }];
const ALLQ = STOPS.flatMap(st => st.qs);
const JOTTED = ALLQ.reduce((n, q) => n + q.m, 0);
const BONUS = ERRORS.reduce((n, e) => n + e.m, 0);
const TOTAL = JOTTED + BONUS;
const WORDS_HINT = "Tip: if a word is new, open the vocab hub for 2.4 first.";

let A = { name:"", txt:{}, chk:{}, mk:{}, step:0, zoom:1, rate:.9, tint:"cream",
          sup:{ big:false, read:false, mic:false }, used:{}, started:0, secs:0, log:[] };
try { const x = JSON.parse(localStorage.getItem(KEY)); if (x) A = Object.assign(A, x); } catch (e) {}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(A)); } catch (e) {} }
if (!A.started) { A.started = Date.now(); save(); }
setInterval(() => { if (document.visibilityState === "visible" && A.step > 0) { A.secs += 15; save(); } }, 15000);
let lastTap = 0;
function steady(){ const n = Date.now(); if (n - lastTap < 400) return false; lastTap = n; return true; }
const wc = t => (t || "").trim() ? t.trim().split(/\s+/).length : 0;

/*@@SPEECH@@*/

/* ---------- the pages ---------- */
const STEPS = [{ id:"start", label:"Start" }]
  .concat(STOPS.map(st => ({ id:"stop", n:st.n, label:"Stop " + st.n })))
  .concat([{ id:"errors", label:"Bonus: find the errors" }, { id:"hand", label:"Hand in" }]);
const jotDone = () => ALLQ.filter(q => A.chk[q.id]).length;
function stepDone(s){
  if (s.id === "stop") return STOPS[s.n - 1].qs.every(q => A.chk[q.id]);
  if (s.id === "errors") return ERRORS.every(e => wc(A.txt[e.id]) >= e.min);
  return false;
}
function drawStrip(){
  $("strip").innerHTML = STEPS.map((s, i) => '<button type="button" data-step="' + i + '" class="' + (stepDone(s) ? "ok" : "") + '"' + (i === A.step ? ' aria-current="true"' : "") + ">" + esc(s.label) + "</button>").join("");
  $("strip").querySelectorAll("button").forEach(b => b.onclick = () => { if (steady()) go(+b.dataset.step); });
}
function go(k){ A.step = Math.max(0, Math.min(STEPS.length - 1, k)); if (A.step !== 0) armLock(); save(); render(); $("screen").parentElement.scrollTop = 0; }
/*@@LOCK@@*/
$("back").onclick = () => { if (steady()) go(A.step - 1); };
$("next").onclick = () => { if (steady()) go(A.step + 1); };

/*@@ZOOM@@*/
function render(){
  stopReading(); stopMic();
  drawStrip();
  const s = STEPS[A.step];
  $("back").disabled = A.step === 0;
  $("next").hidden = A.step === STEPS.length - 1;
  $("screen").innerHTML = { start:startScreen, stop:() => stopScreen(STOPS[s.n - 1]), errors:errorsScreen, hand:handScreen }[s.id]();
  wire();
}

/*@@SUPPORTS@@*/
function startScreen(){
  return `<div class="card"><p class="task">Ancient China 2.4</p><h1>The three ways</h1>
    <p class="rd">Watch the video in three parts. Stop and jot at each stop. Then find the errors, with your group's reading.</p>
    <div class="row" style="margin-top:16px"><label for="nm" style="font-weight:800">NAME</label><input id="nm" type="text" autocomplete="off" value="${esc(A.name)}"></div>
    <div class="looks" role="group" aria-label="Supports"><span class="lbl">Supports</span>
      <button type="button" class="big sup" data-sup="big" aria-pressed="${A.sup.big}">Big buttons</button>
      <button type="button" class="big sup" data-sup="read" aria-pressed="${A.sup.read}" ${TTS ? "" : "disabled"}>🔊 Read to me${TTS ? "" : " (not in this browser)"}</button>
      <button type="button" class="big sup" data-sup="mic" aria-pressed="${A.sup.mic}" ${SR ? "" : "disabled"}>🎤 Voice typing${SR ? "" : " (not in this browser)"}</button></div>
    ${SR && A.sup.mic ? `<p class="note" id="micNote" aria-live="polite">${esc(micMsg)}</p>` : ""}
    ${TTS && A.sup.read ? `<div class="looks" role="group" aria-label="Reading speed"><span class="lbl">Reading speed</span>${[[.75, "Slower"], [.9, "Normal"]].map(([r, t]) => `<button type="button" class="big" data-rate="${r}" aria-pressed="${(A.rate || .9) === r}">${t}</button>`).join("")}</div>` : ""}
    <div class="looks" role="group" aria-label="Background"><span class="lbl">Background</span>${TINTS.map(t => `<button type="button" class="big" data-tint="${t}" aria-pressed="${(A.tint || "cream") === t}">${cap1(t)}</button>`).join("")}</div>
    <p class="note">More practice: <a href='../china/vocab-hub.html#2.4' target='_blank' rel='noopener'>the Ancient China vocab hub, lesson 2.4</a>. ${esc(WORDS_HINT)}</p>
    <p class="note">Your work saves on this device as you go.</p>
    <p class="note">${FS ? "When you leave Start, the lesson goes full screen. If you leave full screen or the page, it is written in your lesson log." : "This browser cannot go full screen."}</p></div>`;
}

/* ---------- the stops ---------- */
const secs = t => { const p = t.split(":").map(Number); return p[0] * 60 + p[1]; };
function vid(from, label){
  return `<div><iframe class="vid" title="Confucianism, Taoism and Buddhism, video" src="https://www.youtube-nocookie.com/embed/${VIDEO}?start=${secs(from)}&rel=0&modestbranding=1" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
    <p class="note rd">${esc(label)}</p></div>`;
}
const needNote = q => "Write at least " + q.min + " word" + (q.min > 1 ? "s" : "") + " first.";
function qBox(q){
  const t = A.txt[q.id] || "", ok = wc(t) >= q.min, shown = !!A.chk[q.id];
  return `<div class="qa" id="qa_${q.id}">
    <div class="q"><p>${esc(q.q)}</p>${readBtn("Read the question")}</div>
    <span class="marks">${q.m} mark${q.m > 1 ? "s" : ""}${q.kind === "link" ? ": say what, then link it to a cause or a result" : ": a key detail"}</span>
    <div class="stems" role="group" aria-label="Sentence starters">${q.stems.map((x, k) => `<button type="button" class="big" data-stem="${q.id}" data-k="${k}">${esc(x.trim())} …</button>`).join("")}</div>
    <textarea class="short" data-key="${q.id}" aria-label="Your answer">${esc(t)}</textarea>
    <div class="row" style="margin-top:8px">${micBtn(q.id)}<button type="button" class="big" data-undo="${q.id}">↶ Undo</button><button type="button" class="big" data-sayans="${q.id}">🔊 Read my answer</button>
      <button type="button" class="big" style="background:var(--sel);color:#fff;border-color:var(--sel)" data-check="${q.id}" ${ok ? "" : "disabled"}>Check my answer</button></div>
    <p class="note" id="cn_${q.id}">${ok ? "" : needNote(q)}</p>
    <div id="k_${q.id}" ${shown ? "" : "hidden"}>
      <div class="key rd"><b>Model answer</b>\n${esc(q.a)}</div>
      <div class="selfm" role="group" aria-label="My marks"><b>My marks:</b> ${Array.from({ length:q.m + 1 }, (_, v) => `<button type="button" class="big" data-mk="${q.id}" data-v="${v}" aria-pressed="${A.mk[q.id] === v}">${v}</button>`).join("")}</div></div></div>`;
}
function stopScreen(st){
  return `<div class="card"><p class="task">Part 1 · Stop and jot · ${st.n} of 3</p><h2 class="rd">${esc(st.title)}</h2>
    <div class="two">${vid(st.from, "Watch from " + st.from + " to " + st.at + ". Pause the video at " + st.at + ", then jot your answers.")}
    <div>${st.qs.map(qBox).join("")}</div></div></div>`;
}

/* ---------- the bonus: find the errors ---------- */
function errBox(e){
  const t = A.txt[e.id] || "", ok = wc(t) >= e.min;
  return `<div class="qa" id="qa_${e.id}">
    <div class="q"><p><b>${esc(e.t)}.</b> The video says: ${esc(e.claim)}</p>${readBtn("Read the video's claim")}</div>
    <span class="marks">${e.m} bonus mark: say what your group's reading says instead</span>
    <div class="stems" role="group" aria-label="Sentence starters">${e.stems.map((x, k) => `<button type="button" class="big" data-stem="${e.id}" data-k="${k}">${esc(x.trim())} …</button>`).join("")}</div>
    <textarea class="short" data-key="${e.id}" aria-label="Your answer">${esc(t)}</textarea>
    <div class="row" style="margin-top:8px">${micBtn(e.id)}<button type="button" class="big" data-undo="${e.id}">↶ Undo</button><button type="button" class="big" data-sayans="${e.id}">🔊 Read my answer</button></div>
    <p class="note" id="cn_${e.id}">${ok ? "" : needNote(e)}</p>
    <div class="selfm" role="group" aria-label="My bonus mark"><b>My mark:</b> ${[0, 1].map(v => `<button type="button" class="big" data-mk="${e.id}" data-v="${v}" aria-pressed="${A.mk[e.id] === v}">${v}</button>`).join("")}</div></div>`;
}
function errorsScreen(){
  return `<div class="card"><p class="task">Bonus · after your reading</p><h2 class="rd">Find the errors</h2>
    <p class="rd">The video gets something wrong about each of the three ways. Find one for each, and say what your group's reading says instead. 1 bonus mark each.</p>
    ${ERRORS.map(errBox).join("")}</div>`;
}

/* ---------- hand in ---------- */
const jotMarks = () => ALLQ.reduce((n, q) => n + (A.mk[q.id] || 0), 0) + ERRORS.reduce((n, e) => n + (A.mk[e.id] || 0), 0);
function handScreen(){
  return `<div class="card"><p class="task">Hand in</p><h2 class="rd">2.4 stop and jot: the three ways</h2>
    <p class="tot">${jotMarks()} out of ${TOTAL} marks, by my own marking. ${jotDone()} of ${ALLQ.length} questions checked.</p>
    <div class="row" style="margin-top:16px"><button type="button" class="big go" style="background:var(--sel);color:#fff;border-color:var(--sel)" id="printBtn">Print</button>
    <button type="button" class="big" id="copyBtn">Copy my work</button>
    <button type="button" class="big" id="rowBtn">Copy a row for the class sheet</button><span id="copied" role="status"></span></div>
    <p class="note">The marks are your own. Nothing on this page judged your writing. Your teacher marks it.</p></div>`;
}

/*@@CARET@@*/
function noteFor(key){
  const q = [...ALLQ, ...ERRORS].find(x => x.id === key);
  if (q){
    const ok = wc(A.txt[key]) >= q.min, b = document.querySelector('[data-check="' + key + '"]'), n = $("cn_" + key);
    if (b) b.disabled = !ok;
    if (n) n.textContent = ok ? "" : needNote(q);
  }
}
function wire(){
  const S = $("screen");
  const nm = $("nm"); if (nm) nm.addEventListener("input", () => { A.name = nm.value; save(); });
  S.querySelectorAll("textarea[data-key]").forEach(ta => ta.addEventListener("input", () => { A.txt[ta.dataset.key] = ta.value; save(); noteFor(ta.dataset.key); drawStrip(); }));
  S.querySelectorAll("[data-readel]").forEach(b => b.onclick = () => readEls([b.parentElement.querySelector(".rd, p")]));
  S.querySelectorAll("[data-sayans]").forEach(b => b.onclick = () => speak(A.txt[b.dataset.sayans] || "Nothing written yet."));
  S.querySelectorAll("[data-mic]").forEach(b => {
    b.addEventListener("pointerdown", e => e.preventDefault());
    b.onclick = () => { if (!steady()) return; if (recKey === b.dataset.mic) stopMic(); else startMic(b.dataset.mic); };
  });
  S.querySelectorAll("[data-rate]").forEach(b => b.onclick = () => { if (!steady()) return; A.rate = +b.dataset.rate; save(); render(); speak("This is the reading speed."); });
  S.querySelectorAll("[data-sup]").forEach(b => b.onclick = () => {
    if (!steady()) return;
    const k = b.dataset.sup; A.sup[k] = !A.sup[k]; if (A.sup[k]) A.used[k] = true;
    save(); applySupports(); render();
    if (k === "mic" && A.sup.mic) openMic();
  });
  S.querySelectorAll("[data-tint]").forEach(b => b.onclick = () => { if (!steady()) return; A.tint = b.dataset.tint; save(); applyTint(); render(); });
  S.querySelectorAll("[data-stem]").forEach(b => b.addEventListener("pointerdown", e => e.preventDefault()));
  S.querySelectorAll("[data-stem]").forEach(b => b.onclick = () => { if (!steady()) return; const q = [...ALLQ, ...ERRORS].find(x => x.id === b.dataset.stem); caretInsert(q.id, q.stems[+b.dataset.k]); });
  S.querySelectorAll("[data-undo]").forEach(b => {
    b.addEventListener("pointerdown", e => e.preventDefault());
    b.onclick = () => {
      if (!steady()) return;
      const key = b.dataset.undo, ta = document.querySelector('textarea[data-key="' + key + '"]');
      if (!ta || !undo[key] || !undo[key].length) return;
      ta.value = undo[key].pop(); A.txt[key] = ta.value; save(); noteFor(key); drawStrip(); ta.focus();
    };
  });
  /* checking an answer opens the model in place, with no re-render, so the video keeps its place */
  S.querySelectorAll("[data-check]").forEach(b => b.onclick = () => { if (!steady()) return; A.chk[b.dataset.check] = true; save(); const k = $("k_" + b.dataset.check); if (k) k.hidden = false; drawStrip(); });
  S.querySelectorAll("[data-mk]").forEach(b => b.onclick = () => {
    if (!steady()) return; const id = b.dataset.mk; A.mk[id] = +b.dataset.v; save();
    S.querySelectorAll('[data-mk="' + id + '"]').forEach(x => x.setAttribute("aria-pressed", +x.dataset.v === A.mk[id]));
  });
  const pr = $("printBtn"); if (pr) pr.onclick = () => { graceUntil = Date.now() + 120000; buildPrint(); window.print(); graceUntil = Date.now() + 3000; };
  const copy = async t => { try { await navigator.clipboard.writeText(t); $("copied").textContent = "Copied."; } catch (e) { $("copied").textContent = "Copy did not work here. Use Print instead."; } };
  const cp = $("copyBtn"); if (cp) cp.onclick = () => copy(plainText());
  const rw = $("rowBtn"); if (rw) rw.onclick = () => copy(classRow());
}

/* ---------- the printed copy, the class row ---------- */
const mins = () => Math.round((A.secs || 0) / 60);
function buildPrint(){
  $("print").innerHTML = `
    <h1>Ancient China 2.4 · The three ways</h1>
    <p><b>Name:</b> ${esc(A.name || "")} &nbsp; <b>Printed:</b> ${new Date().toLocaleDateString("en-AU")} &nbsp; <i>Done on the accessible online version.</i></p>
    <p><b>Supports used:</b> ${esc(supportsUsed())} &nbsp; <b>Time on the page:</b> about ${mins()} minutes</p>
    <h2>Stop and jot (my own marks: ${ALLQ.reduce((n, q) => n + (A.mk[q.id] || 0), 0)} out of ${JOTTED})</h2>
    <table><tr><th>Question</th><th>My answer</th><th>Marks</th></tr>${ALLQ.map(q => `<tr><td>${esc(q.q)}</td><td>${esc(A.txt[q.id] || "")}</td><td>${A.mk[q.id] === undefined ? "" : A.mk[q.id] + " / " + q.m}</td></tr>`).join("")}</table>
    <h2>Bonus: find the errors (my own marks: ${ERRORS.reduce((n, e) => n + (A.mk[e.id] || 0), 0)} out of ${BONUS})</h2>
    <table><tr><th>The video says</th><th>What my reading says</th><th>Marks</th></tr>${ERRORS.map(e => `<tr><td>${esc(e.t)}: ${esc(e.claim)}</td><td>${esc(A.txt[e.id] || "")}</td><td>${A.mk[e.id] === undefined ? "" : A.mk[e.id] + " / " + e.m}</td></tr>`).join("")}</table>
    <h2>Lesson log</h2><p>${FS ? `Left full screen or the page ${exits()} time${exits() === 1 ? "" : "s"}.` : "This browser has no full screen, so the lesson was not locked."}</p>
    ${exits() ? `<p>${logLines().map(esc).join("<br>")}</p>` : ""}
    <p style="font-size:9pt;color:#555">The marks are the student's own. Nothing on the page judged the writing.</p>`;
}
function plainText(){
  return ["Ancient China 2.4: The three ways", "Name: " + A.name, "Supports used: " + supportsUsed(), "Time on the page: about " + mins() + " minutes", "",
    "Stop and jot, my own marks " + ALLQ.reduce((n, q) => n + (A.mk[q.id] || 0), 0) + " out of " + JOTTED]
    .concat(ALLQ.map(q => q.q + "\n  " + (A.txt[q.id] || "(nothing written)") + "\n  Marks: " + (A.mk[q.id] === undefined ? "not marked" : A.mk[q.id] + " / " + q.m)))
    .concat(["", "Bonus: find the errors, my own marks " + ERRORS.reduce((n, e) => n + (A.mk[e.id] || 0), 0) + " out of " + BONUS])
    .concat(ERRORS.map(e => e.t + "\n  The video says: " + e.claim + "\n  My reading says: " + (A.txt[e.id] || "(nothing written)") + "\n  Mark: " + (A.mk[e.id] === undefined ? "not marked" : A.mk[e.id] + " / " + e.m)))
    .concat(["", "Left full screen or the page: " + (FS ? exits() + " times" : "no full screen in this browser")]).concat(logLines()).join("\n");
}
/* One tab-separated row for a shared sheet. Columns: name, date, minutes on the page, my marks for each
   of the 9 stop-and-jot questions, their total, my marks for each of the 3 bonus errors, their total,
   times out of full screen. It cannot tell you whether any of it is good. */
function classRow(){
  const clean = t => String(t || "").replace(/[\t\r\n]+/g, " ").trim();
  const jot = ALLQ.reduce((n, q) => n + (A.mk[q.id] || 0), 0), bon = ERRORS.reduce((n, e) => n + (A.mk[e.id] || 0), 0);
  return [clean(A.name), new Date().toLocaleDateString("en-AU"), mins()].concat(ALLQ.map(q => A.mk[q.id] === undefined ? "" : A.mk[q.id]))
    .concat([jot]).concat(ERRORS.map(e => A.mk[e.id] === undefined ? "" : A.mk[e.id])).concat([bon])
    .concat([FS ? exits() : "no lock"]).join("\t");
}

$("readPage").onclick = () => { if (!steady()) return; if (reading) stopReading(); else readEls(readPageEls()); };
A.sup = Object.assign({ big:false, read:false, mic:false }, A.sup); A.used = A.used || {}; A.chk = A.chk || {}; A.mk = A.mk || {};
setZoom(A.zoom); applyTint(); applySupports(); setReadUI();
render();
if (A.sup.mic && SR) openMic();
if (A.step !== 0 && FS && !document.fullscreenElement) { $("lockH").textContent = "Back to the lesson"; $("lock").hidden = false; }
