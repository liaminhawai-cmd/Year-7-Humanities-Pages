/* ======================================================================= */
/*@@CFG@@*/
const $ = id => document.getElementById(id);
const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const cap1 = t => t[0].toUpperCase() + t.slice(1);
const KEY = CFG.key;
const STOPS = CFG.stops;
const EXTRA = CFG.extra;                         /* going further, or a bonus; may be absent */
const EXTRA_ITEMS = EXTRA ? EXTRA.items : [];
const ALLQ = STOPS.flatMap(st => st.qs).concat(EXTRA_ITEMS);
const BASEQ = ALLQ.filter(q => !q.bonus);
const BASE = BASEQ.reduce((n, q) => n + q.m, 0), BONUS = ALLQ.filter(q => q.bonus).reduce((n, q) => n + q.m, 0);
const SRC_Q = CFG.srcQ;
/* The rubric rows come from the wall's own content.js, so the words are the wall's words. */
const ROWS = CRITERIA.map(c => [c.key, c.name.replace(/&amp;/g, "&"), c.glyph, CFG.stems[c.key]]);
const NEXT_STEMS = CFG.nextStems || ["add ", "say what the source cannot show: ", "use a fact from the lesson to explain: "];
const LV = ["Level 6", "Level 7", "Level 8", "Level 9"];
const WORDS = CFG.words;
(function(){
  const s = document.createElement("style");
  s.textContent = CRITERIA.map(c => ".g-" + c.key + " .big{border-color:" + c.ink + ";border-style:" + (c.underline === "dotted" ? "dotted" : c.underline === "dashed" ? "dashed" : "solid") + (c.underline === "double" ? ";border-width:5px" : "") + "}.g-" + c.key + " .lab{color:" + c.ink + "}").join("")
    + ".g-answer .big{border-color:#555}.g-answer .lab{color:#333}"
    + ".facts,.parts{margin:8px 0 0;padding-left:1.3em}.facts li{margin:0 0 8px;list-style:none;padding:0}.plain{font-style:italic;color:#333;margin:2px 0 10px 12px;border-left:4px solid #bbb;padding-left:10px}"
    + ".psg{border-left:6px solid #176b87;background:#fff;border-radius:8px;padding:8px 14px;margin:8px 0}.src{max-width:100%;height:auto;border-radius:10px}img.tall{max-height:70vh;width:auto}.lnk{display:inline-block;margin-top:6px}.bandrow{margin:0 0 18px}";
  document.head.appendChild(s);
})();

let A = { name:"", txt:{}, chk:{}, mk:{}, self:{}, step:0, zoom:1, rate:.9, tint:"cream",
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
  .concat(EXTRA ? [{ id:"extra", label:EXTRA.label }] : [])
  .concat([{ id:"source", label:"Source analysis" }, { id:"level", label:"My level" }, { id:"hand", label:"Hand in" }]);
const jotDone = () => ALLQ.filter(q => A.chk[q.id]).length;
function stepDone(s){
  if (s.id === "stop") return STOPS[s.n - 1].qs.every(q => A.chk[q.id]);
  if (s.id === "extra") return EXTRA_ITEMS.every(q => A.chk[q.id]);
  if (s.id === "source") return wc(A.txt.para) >= 30;
  if (s.id === "level") return ROWS.every(r => A.self[r[0]]);
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
  $("screen").innerHTML = { start:startScreen, stop:() => stopScreen(STOPS[s.n - 1]), extra:extraScreen, source:sourceScreen, level:levelScreen, hand:handScreen }[s.id]();
  wire();
}

/*@@SUPPORTS@@*/
function startScreen(){
  return `<div class="card"><p class="task">Ancient China ${esc(CFG.id)}</p><h1>${esc(CFG.title)}</h1>
    <p class="rd">${esc(CFG.intro)}</p>
    <div class="row" style="margin-top:16px"><label for="nm" style="font-weight:800">NAME</label><input id="nm" type="text" autocomplete="off" value="${esc(A.name)}"></div>
    <div class="looks" role="group" aria-label="Supports"><span class="lbl">Supports</span>
      <button type="button" class="big sup" data-sup="big" aria-pressed="${A.sup.big}">Big buttons</button>
      <button type="button" class="big sup" data-sup="read" aria-pressed="${A.sup.read}" ${TTS ? "" : "disabled"}>🔊 Read to me${TTS ? "" : " (not in this browser)"}</button>
      <button type="button" class="big sup" data-sup="mic" aria-pressed="${A.sup.mic}" ${SR ? "" : "disabled"}>🎤 Voice typing${SR ? "" : " (not in this browser)"}</button></div>
    ${SR && A.sup.mic ? `<p class="note" id="micNote" aria-live="polite">${esc(micMsg)}</p>` : ""}
    ${TTS && A.sup.read ? `<div class="looks" role="group" aria-label="Reading speed"><span class="lbl">Reading speed</span>${[[.75, "Slower"], [.9, "Normal"]].map(([r, t]) => `<button type="button" class="big" data-rate="${r}" aria-pressed="${(A.rate || .9) === r}">${t}</button>`).join("")}</div>` : ""}
    <div class="looks" role="group" aria-label="Background"><span class="lbl">Background</span>${TINTS.map(t => `<button type="button" class="big" data-tint="${t}" aria-pressed="${(A.tint || "cream") === t}">${cap1(t)}</button>`).join("")}</div>
    <h2 style="margin-top:18px">Words for this lesson</h2>
    <dl class="words">${WORDS.map(([w, d]) => `<div><span class="rd"><dt>${esc(cap1(w))}</dt><dd>${esc(d)}</dd></span>${readBtn("Read this word")}</div>`).join("")}</dl>
    <p class="note">More practice: <a href='../china/vocab-hub.html#${esc(CFG.id)}' target='_blank' rel='noopener'>the Ancient China vocab hub, lesson ${esc(CFG.id)}</a>. Open it before you start.</p>
    <p class="note">Your work saves on this device as you go.</p>
    <p class="note">${FS ? "When you leave Start, the lesson goes full screen. If you leave full screen or the page, it is written in your lesson log." : "This browser cannot go full screen."}</p></div>`;
}

/* ---------- the stops ---------- */
const secs = t => { const p = t.split(":").map(Number); return p[0] * 60 + p[1]; };
function vid(from, label, v){
  const V = CFG.videos[v || "main"];
  return `<div><iframe class="vid" title="${esc(V.title)}" src="https://www.youtube-nocookie.com/embed/${V.id}?start=${secs(from)}&rel=0&modestbranding=1" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
    <p class="note rd">${esc(label)}</p>
    <a class="lnk" href="https://youtu.be/${V.id}?t=${secs(from)}" target="_blank" rel="noopener">If the video does not play, open it on YouTube</a></div>`;
}
const needNote = q => "Write at least " + q.min + " word" + (q.min > 1 ? "s" : "") + " first.";
function qBox(q){
  const t = A.txt[q.id] || "", ok = wc(t) >= q.min, shown = !!A.chk[q.id];
  return `<div class="qa" id="qa_${q.id}">
    <div class="q"><p>${esc(q.q)}</p>${readBtn("Read the question")}</div>
    <span class="marks">${q.m} ${q.bonus ? "bonus " : ""}mark${q.m > 1 ? "s" : ""}${q.kind === "link" ? ": say what, then link it to a cause or a result" : q.kind === "weigh" ? ": give a reason, then weigh both" : ": a key detail"}</span>
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
  return `<div class="card"><p class="task">Stop and jot · ${st.n} of ${STOPS.length}</p><h2 class="rd">${esc(st.title)}</h2>
    <div class="two">${vid(st.from, "Watch from " + st.from + " to " + st.at + ". Pause the video at " + st.at + ", then jot your answers.", st.v)}
    <div>${st.qs.map(qBox).join("")}</div></div></div>`;
}
function extraScreen(){
  const v = EXTRA.video;
  return `<div class="card"><p class="task">${esc(EXTRA.task)}</p><h2 class="rd">${esc(EXTRA.title)}</h2>
    ${EXTRA.intro ? `<p class="rd">${esc(EXTRA.intro)}</p>` : ""}
    ${v ? `<div class="two">${vid(v.from, v.label, v.v)}<div>${EXTRA_ITEMS.map(qBox).join("")}</div></div>` : EXTRA_ITEMS.map(qBox).join("")}</div>`;
}

/* ---------- source analysis, with stems ---------- */
const factList = list => `<ul class="facts">${list.map(([h, t]) => `<li><span class="rd">${h ? `<b>${esc(h)}.</b> ` : ""}${esc(t)}</span>${readBtn("Read this")}</li>`).join("")}</ul>`;
const paraNote = () => { const n = wc(A.txt.para); return n < 30 ? n + " words so far. Aim for 30 or more, and use every colour." : n + " words. Now read it back and add what the source cannot tell us."; };
function sourceBlock(S){
  if (S.kind === "text"){
    return `<div class="srcblk"><h3>${esc(S.tab)}</h3>
      ${S.paragraphs.map((p, k) => `<div class="psg rd">${esc(p)}</div>${readBtn("Read this extract")}${S.plain && S.plain[k] ? `<p class="plain rd">In plain English: ${esc(S.plain[k])}</p>` : ""}`).join("")}
      <p class="cap rd">${esc(S.cite)}</p>
      <ul class="parts">${S.hotspots.map(h => `<li class="rd"><b>${esc(h.label)}.</b> ${esc(h.text)}</li>`).join("")}</ul></div>`;
  }
  return `<div class="srcblk"><h3>${esc(S.tab)}</h3>
    <img class="src tall" src="${S.file}" alt="${esc(S.alt)}"><p class="cap rd">${esc(S.cite)}</p>
    <ul class="parts">${S.hotspots.map(h => `<li class="rd"><b>${esc(h.label)}.</b> ${esc(h.text)}</li>`).join("")}</ul></div>`;
}
function sourceScreen(){
  return `<div class="card"><p class="task">Source analysis</p>
    <div class="q"><p>${esc(SRC_Q)}</p>${readBtn("Read the question")}</div>
    <div class="two"><div>
      ${SOURCES.map(sourceBlock).join("")}
      <h3 style="margin-top:12px">What you need to know</h3>${factList(FACTS)}
    </div><div>
      <p class="note">Tap a starter to add it to your answer, then finish the sentence. Use every colour.</p>
      ${ROWS.map(r => `<div class="grp g-${r[0]}"><p class="lab">${r[2]} ${esc(r[1])}</p><div class="stems">${r[3].map((x, i) => `<button type="button" class="big" data-sstem="${r[0]}" data-k="${i}">${esc(x.trim())} …</button>`).join("")}</div></div>`).join("")}
      ${CFG.answerStems ? `<div class="grp g-answer"><p class="lab">My answer to the question</p><div class="stems">${CFG.answerStems.map((x, i) => `<button type="button" class="big" data-sstem="answer" data-k="${i}">${esc(x.trim())} …</button>`).join("")}</div></div>` : ""}
      <textarea data-key="para" style="margin-top:14px" aria-label="Your answer to the question">${esc(A.txt.para || "")}</textarea>
      <div class="row" style="margin-top:8px">${micBtn("para")}<button type="button" class="big" data-undo="para">↶ Undo</button><button type="button" class="big" data-sayans="para">🔊 Read my answer</button></div>
      <p class="note" id="paraN" aria-live="polite">${paraNote()}</p>
    </div></div></div>`;
}

/* ---------- my level: the rubric rows, word for word ---------- */
function levelScreen(){
  const line = (k, l) => (CONTINUUM[k] && CONTINUUM[k][l]) || "";
  return `<div class="card"><p class="task">My level</p><h2 class="rd">Read your answer, then choose the level that fits it, row by row.</h2>
    ${ROWS.map(r => `<div class="bandrow"><h3>${r[2]} ${esc(r[1])}</h3><div class="bands" role="group" aria-label="${esc(r[1])}">${LV.map(l => `<button type="button" class="big" data-self="${r[0]}" data-v="${l}" aria-pressed="${A.self[r[0]] === l}"><b>${l}</b>${esc(line(r[0], l))}</button>`).join("")}</div></div>`).join("")}
    <h3>To move up one level I would</h3>
    <div class="stems">${NEXT_STEMS.map((x, i) => `<button type="button" class="big" data-sstem="next" data-k="${i}">${esc(x.trim())} …</button>`).join("")}</div>
    <textarea class="short" data-key="nextstep" style="margin-top:10px" aria-label="To move up one level I would">${esc(A.txt.nextstep || "")}</textarea>
    <div class="row" style="margin-top:8px">${micBtn("nextstep")}<button type="button" class="big" data-undo="nextstep">↶ Undo</button></div></div>`;
}

/* ---------- hand in ---------- */
const jotMarks = () => ALLQ.reduce((n, q) => n + (A.mk[q.id] || 0), 0);
const marksLine = () => jotMarks() + " out of " + BASE + (BONUS ? " (plus up to " + BONUS + " bonus)" : "");
function handScreen(){
  return `<div class="card"><p class="task">Hand in</p><h2 class="rd">Stop and jot</h2>
    <p class="tot">${marksLine()}, by my own marking. ${jotDone()} of ${ALLQ.length} questions checked.</p>
    <h2 class="rd">Source analysis</h2><p class="rd" style="white-space:pre-wrap">${esc(A.txt.para || "(nothing written)")}</p>
    <p>${ROWS.map(r => esc(r[1]) + ": " + esc(A.self[r[0]] || "not chosen")).join(" · ")}</p>
    <div class="row" style="margin-top:16px"><button type="button" class="big go" style="background:var(--sel);color:#fff;border-color:var(--sel)" id="printBtn">Print</button>
    <button type="button" class="big" id="copyBtn">Copy my work</button>
    <button type="button" class="big" id="rowBtn">Copy a row for the class sheet</button><span id="copied" role="status"></span></div>
    <p class="note">The marks and the levels are your own. Nothing on this page judged your writing. Your teacher marks it.</p></div>`;
}

/*@@CARET@@*/
function noteFor(key){
  const q = ALLQ.find(x => x.id === key);
  if (q){
    const ok = wc(A.txt[key]) >= q.min, b = document.querySelector('[data-check="' + key + '"]'), n = $("cn_" + key);
    if (b) b.disabled = !ok;
    if (n) n.textContent = ok ? "" : needNote(q);
  }
  if (key === "para"){ const n = $("paraN"); if (n) n.textContent = paraNote(); }
}
function wire(){
  const S = $("screen");
  const nm = $("nm"); if (nm) nm.addEventListener("input", () => { A.name = nm.value; save(); });
  S.querySelectorAll("textarea[data-key]").forEach(ta => ta.addEventListener("input", () => { A.txt[ta.dataset.key] = ta.value; save(); noteFor(ta.dataset.key); drawStrip(); }));
  S.querySelectorAll("[data-readel]").forEach(b => b.onclick = () => readEls([b.previousElementSibling && b.previousElementSibling.matches(".psg") ? b.previousElementSibling : b.parentElement.querySelector(".rd, p")]));
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
  S.querySelectorAll("[data-stem],[data-sstem]").forEach(b => b.addEventListener("pointerdown", e => e.preventDefault()));
  S.querySelectorAll("[data-stem]").forEach(b => b.onclick = () => { if (!steady()) return; const q = ALLQ.find(x => x.id === b.dataset.stem); caretInsert(q.id, q.stems[+b.dataset.k]); });
  S.querySelectorAll("[data-sstem]").forEach(b => b.onclick = () => {
    if (!steady()) return; const k = b.dataset.sstem;
    if (k === "next") return caretInsert("nextstep", NEXT_STEMS[+b.dataset.k]);
    if (k === "answer") return caretInsert("para", CFG.answerStems[+b.dataset.k]);
    caretInsert("para", ROWS.find(r => r[0] === k)[3][+b.dataset.k]);
  });
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
  S.querySelectorAll("[data-self]").forEach(b => b.onclick = () => { if (!steady()) return; A.self[b.dataset.self] = b.dataset.v; save(); render(); });
  const pr = $("printBtn"); if (pr) pr.onclick = () => { graceUntil = Date.now() + 120000; buildPrint(); window.print(); graceUntil = Date.now() + 3000; };
  const copy = async t => { try { await navigator.clipboard.writeText(t); $("copied").textContent = "Copied."; } catch (e) { $("copied").textContent = "Copy did not work here. Use Print instead."; } };
  const cp = $("copyBtn"); if (cp) cp.onclick = () => copy(plainText());
  const rw = $("rowBtn"); if (rw) rw.onclick = () => copy(classRow());
}

/* ---------- the printed copy, the class row ---------- */
const mins = () => Math.round((A.secs || 0) / 60);
function buildPrint(){
  $("print").innerHTML = `
    <h1>Ancient China ${esc(CFG.id)} · ${esc(CFG.title)}</h1>
    <p><b>Name:</b> ${esc(A.name || "")} &nbsp; <b>Printed:</b> ${new Date().toLocaleDateString("en-AU")} &nbsp; <i>Done on the accessible online version.</i></p>
    <p><b>Supports used:</b> ${esc(supportsUsed())} &nbsp; <b>Time on the page:</b> about ${mins()} minutes</p>
    <h2>Stop and jot (my own marks: ${marksLine()})</h2>
    <table><tr><th>Question</th><th>My answer</th><th>Marks</th></tr>${ALLQ.map(q => `<tr><td>${esc(q.q)}</td><td>${esc(A.txt[q.id] || "")}</td><td>${A.mk[q.id] === undefined ? "" : A.mk[q.id] + " / " + q.m}</td></tr>`).join("")}</table>
    <h2>${esc(SRC_Q)}</h2><div class="ans">${esc(A.txt.para || "(nothing written)")}</div>
    <table><tr><th>Row</th><th>My level</th></tr>${ROWS.map(r => `<tr><td>${esc(r[1])}</td><td>${esc(A.self[r[0]] ? A.self[r[0]] + ": " + ((CONTINUUM[r[0]] && CONTINUUM[r[0]][A.self[r[0]]]) || "") : "not chosen")}</td></tr>`).join("")}</table>
    <p><b>To move up one level I would:</b> ${esc((A.txt.nextstep || "").trim()) || "<i>(not written)</i>"}</p>
    <h2>Lesson log</h2><p>${FS ? `Left full screen or the page ${exits()} time${exits() === 1 ? "" : "s"}.` : "This browser has no full screen, so the lesson was not locked."}</p>
    ${exits() ? `<p>${logLines().map(esc).join("<br>")}</p>` : ""}
    <p style="font-size:9pt;color:#555">The marks and the levels are the student's own. Nothing on the page judged the writing.</p>`;
}
function plainText(){
  return ["Ancient China " + CFG.id + ": " + CFG.title, "Name: " + A.name, "Supports used: " + supportsUsed(), "Time on the page: about " + mins() + " minutes", "",
    "Stop and jot, my own marks " + marksLine()]
    .concat(ALLQ.map(q => q.q + "\n  " + (A.txt[q.id] || "(nothing written)") + "\n  Marks: " + (A.mk[q.id] === undefined ? "not marked" : A.mk[q.id] + " / " + q.m)))
    .concat(["", SRC_Q, A.txt.para || "(nothing written)", ""])
    .concat(ROWS.map(r => r[1] + ": " + (A.self[r[0]] || "not chosen")))
    .concat(["To move up one level I would: " + ((A.txt.nextstep || "").trim() || "(not written)"),
      "Left full screen or the page: " + (FS ? exits() + " times" : "no full screen in this browser")]).concat(logLines()).join("\n");
}
/* One tab-separated row for a shared sheet. Columns: name, date, minutes on the page, my marks for each
   stop-and-jot question, their total, words in the source answer, my level for each row, times out of
   full screen, next step, the answer. It cannot tell you whether any of it is good. */
function classRow(){
  const clean = t => String(t || "").replace(/[\t\r\n]+/g, " ").trim();
  return [clean(A.name), new Date().toLocaleDateString("en-AU"), mins()].concat(ALLQ.map(q => A.mk[q.id] === undefined ? "" : A.mk[q.id]))
    .concat([jotMarks(), wc(A.txt.para)]).concat(ROWS.map(r => A.self[r[0]] || ""))
    .concat([FS ? exits() : "no lock", clean(A.txt.nextstep), clean(A.txt.para)]).join("\t");
}

$("readPage").onclick = () => { if (!steady()) return; if (reading) stopReading(); else readEls(readPageEls()); };
A.sup = Object.assign({ big:false, read:false, mic:false }, A.sup); A.used = A.used || {}; A.self = A.self || {}; A.chk = A.chk || {}; A.mk = A.mk || {};
setZoom(A.zoom); applyTint(); applySupports(); setReadUI();
render();
if (A.sup.mic && SR) openMic();
if (A.step !== 0 && FS && !document.fullscreenElement) { $("lockH").textContent = "Back to the lesson"; $("lock").hidden = false; }
