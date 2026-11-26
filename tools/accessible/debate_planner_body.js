/* ======================================================================= */
/* DATA. Everything a teacher might change is in this block. The wording is the paper planner's
   (build43debate.js in the private Year-7-Humanities repository, sections 1 and 2), word for word. */
const KEY = "debate43.planner.v1";
const TOPIC = "We should commemorate Qin Shi Huang.";
const COMMEM = "Commemorate: to honour and remember someone, for example with a statue, a museum or a special day.";
const WORDS = [
  ["Significance", "How important something was, how many people it affected and for how long."],
  ["Legacy", "Something from the past that still affects us today."],
  ["Standardisation", "Making things the same everywhere by setting one standard, such as one system of measures, money or writing."],
  ["Forced labour", "Work that people are made to do with no choice, often with no pay and in harsh conditions."],
  ["Censorship", "Controlling what people may read, say or write, by banning ideas that the ruler or government dislikes."],
  ["Tyrant", "A ruler who holds total power and uses it in a cruel or unfair way."],
  ["Legalism", "A belief that people are best controlled by strict laws, with rewards for those who obey and harsh punishments for those who do not."],
  ["Reform", "A change made to improve how something is run."]];
const WQ = "Wikipedia, “Qin Shi Huang”", WB = "Wikipedia, “Burning of books and burying of scholars”", WD = "Wikipedia, “Qin dynasty”", WM = "Wikipedia, “Mausoleum of the First Qin Emperor”";
const CARDS = [
  ["One country", "By 221 BCE Qin Shi Huang had conquered all the other warring states. He became the first emperor of a united China.", WQ],
  ["One way of writing", "His minister Li Si made the Qin script the standard for all of China. People who spoke different dialects could now read the same writing.", WQ],
  ["Same money and measures", "He made weights and measures the same everywhere and replaced the states' different money with one coin. Wagon axles had to be one standard length, to help transport on the roads.", WQ],
  ["Roads and canals", "He built a large network of roads and canals for trade and communication.", WQ],
  ["The Great Wall", "He joined separate state walls into one Great Wall. Hundreds of thousands of workers were made to build it, and an unknown number died.", WQ],
  ["Building his tomb", "Sima Qian, a historian writing about 100 years later, says 700,000 men built the tomb. The historian John Man says that number is bigger than any city of the time.", WQ],
  ["The Terracotta Army", "About 6,000 clay soldiers were made to protect him in the afterlife. Farmers found them in 1974.", WQ],
  ["Only one set of ideas", "All other philosophies were banned. Legalism became the only set of ideas allowed.", WQ],
  ["Burning books", "From 213 BCE, history books other than Qin's, and books of poetry and philosophy, were to be burned. Anyone who had not burned theirs after 30 days could be tattooed and sent to build the Great Wall. Copies were kept in the emperor's library.", WB],
  ["The scholars", "Sima Qian wrote that 460 scholars were buried alive. Modern historians doubt the details. Many think scholars were killed, but not buried alive.", WB],
  ["Living forever", "As he grew old, he searched for an elixir that would let him live forever. He died in 210 BCE, aged 49.", WQ],
  ["A short dynasty", "Revolts broke out after he died. By 206 BCE his dynasty had collapsed, and the Han dynasty took over.", WD],
  ["Who wrote his story", "Han dynasty historians, who wrote after the Qin fell, often showed him as a tyrant. Some of that view comes from their harsh judgements.", WQ],
  ["Views change", "In 1941 the historian Ma Feibai called him “one of the great heroes of Chinese history”. Traditional Chinese histories almost always called him a cruel tyrant.", WQ],
  ["Remembered today", "His tomb and the Terracotta Army became a World Heritage Site in 1987. His main tomb has still not been opened.", WM + "; " + WQ],
  ["Your own evidence", "", "Where did you find it?"]];
/* The boxes, in the paper's order. kind: team ● dark, intro ▲ gold, arg ■ blue, reb ◆ red (dashed), after ✎ grey.
   A box with a starter has a button that adds the starter to the writing; the starter is the paper's own line. */
const GROUPS = [
  { id:"team",  kind:"team",  step:"Our team",           title:"Our team",           sub:"plan together, so nobody repeats an argument", boxes:[
    { key:"goal", label:"Our team goal" }, { key:"spk1", label:"Speaker 1 argues" }, { key:"spk2", label:"Speaker 2 argues" }, { key:"spk3", label:"Speaker 3 argues" }] },
  { id:"intro", kind:"intro", step:"My intro",           title:"My intro",           sub:"only if I am my team's first speaker", boxes:[
    { key:"intro1", starter:"Today's topic is… Our team agrees / disagrees." }, { key:"intro2", starter:"To commemorate means… Our team will show that…" }] },
  { id:"arg",   kind:"arg",   step:"My argument",        title:"My argument",        sub:"one argument, with evidence", boxes:[
    { key:"arg1", starter:"We think… because…" }, { key:"arg2", starter:"For example,…" }, { key:"arg3", starter:"This shows that…" }] },
  { id:"ready", kind:"reb",   step:"Get ready to rebut", title:"Get ready to rebut", sub:"before the debate", boxes:[
    { key:"ready1", starter:"The other team will probably say…" }, { key:"ready2", starter:"But… In fact, the evidence shows…" }] },
  { id:"while", kind:"reb",   step:"While they speak",   title:"While they speak",   sub:"write what the speaker before you really says", boxes:[
    { key:"while1", starter:"They said that…" }, { key:"while2", starter:"Their example was…" }] },
  { id:"myreb", kind:"reb",   step:"My rebuttal",        title:"My rebuttal",        sub:"answer what they really said, not what you guessed", boxes:[
    { key:"myreb1", starter:"They said that… But…" }, { key:"myreb2", starter:"In fact,… So their point does not work, because…" }] },
  { id:"after", kind:"after", step:"After the debate",   title:"After the debate",   sub:"", boxes:[
    { key:"after1", starter:"The strongest argument I heard was… because…" }, { key:"after2", starter:"One thing our team did well, and one thing we would fix:" }] }];
const GLYPH = { team:"●", intro:"▲", arg:"■", reb:"◆", after:"✎" };
const HANDIN_LINE = "Nothing on this page judged your writing. Your teacher marks it.";

/* ======================================================================= */
const $ = id => document.getElementById(id);
const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const cap1 = t => t[0].toUpperCase() + t.slice(1);
const BOXES = GROUPS.flatMap(g => g.boxes.map(b => Object.assign({ kind:g.kind, group:g.id }, b)));
const boxLabel = b => b.starter || b.label;
const GROUP = Object.fromEntries(GROUPS.map(g => [g.id, g]));

let A = { name:"", team:"", spk:0, topic:TOPIC, txt:{}, step:0, zoom:1, rate:.9, tint:"cream",
          sup:{ big:false, read:false, mic:false }, used:{}, started:0, secs:0, log:[] };
try { const x = JSON.parse(localStorage.getItem(KEY)); if (x) A = Object.assign(A, x); } catch (e) {}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(A)); } catch (e) {} }
if (!A.started) { A.started = Date.now(); save(); }
setInterval(() => { if (document.visibilityState === "visible" && A.step > 0) { A.secs += 15; save(); } }, 15000);
let lastTap = 0;
function steady(){ const n = Date.now(); if (n - lastTap < 400) return false; lastTap = n; return true; }
const wc = t => (t || "").trim() ? t.trim().split(/\s+/).length : 0;

/*@@SPEECH@@*/

/* ---------- the steps ---------- */
const STEPS = [{ id:"start", label:"Start" }].concat(GROUPS.map(g => ({ id:g.id, label:g.step }))).concat([{ id:"hand", label:"Hand in" }]);
function stepDone(s){
  if (s.id === "start") return !!(A.name || "").trim();
  if (s.id === "hand") return false;
  return GROUP[s.id].boxes.some(b => wc(A.txt[b.key]) > 0);
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
  $("screen").innerHTML = s.id === "start" ? startScreen() : s.id === "hand" ? handScreen() : groupScreen(GROUP[s.id]);
  wire();
}

/*@@SUPPORTS@@*/
const topicText = () => (A.topic || "").trim() || TOPIC;
function startScreen(){
  return `<div class="card"><div class="two"><div class="scrollcol" tabindex="0" role="region" aria-label="My details and supports">
    <h1>Debate planner</h1>
    <div class="row"><label for="nm" style="font-weight:800">NAME</label><input id="nm" type="text" autocomplete="off" value="${esc(A.name)}"></div>
    <div class="looks" role="group" aria-label="My team"><span class="lbl">My team</span>${["For", "Against"].map(t => `<button type="button" class="big" data-team="${t}" aria-pressed="${A.team === t}">${t}</button>`).join("")}</div>
    <div class="looks" role="group" aria-label="I am speaker number"><span class="lbl">Speaker number</span>${[1, 2, 3, 4, 5, 6].map(n => `<button type="button" class="big num" data-spk="${n}" aria-pressed="${A.spk === n}" aria-label="Speaker ${n}">${n}</button>`).join("")}</div>
    <div class="row" style="margin-top:12px"><label for="topic" style="font-weight:800">TOPIC</label><input id="topic" type="text" autocomplete="off" value="${esc(topicText())}" style="width:min(640px,100%)"></div>
    <div class="q" style="margin-top:8px"><p class="rd" style="font-weight:500;font-size:17px">${esc(COMMEM)}</p>${readBtn("Read this")}</div>
    <div class="looks" role="group" aria-label="Supports"><span class="lbl">Supports</span>
      <button type="button" class="big sup" data-sup="big" aria-pressed="${A.sup.big}">Big buttons</button>
      <button type="button" class="big sup" data-sup="read" aria-pressed="${A.sup.read}" ${TTS ? "" : "disabled"}>🔊 Read to me${TTS ? "" : " (not in this browser)"}</button>
      <button type="button" class="big sup" data-sup="mic" aria-pressed="${A.sup.mic}" ${SR ? "" : "disabled"}>🎤 Voice typing${SR ? "" : " (not in this browser)"}</button></div>
    ${SR && A.sup.mic ? `<p class="note" id="micNote" aria-live="polite">${esc(micMsg)}</p>` : ""}
    ${TTS && A.sup.read ? `<div class="looks" role="group" aria-label="Reading speed"><span class="lbl">Reading speed</span>${[[.75, "Slower"], [.9, "Normal"]].map(([r, t]) => `<button type="button" class="big" data-rate="${r}" aria-pressed="${(A.rate || .9) === r}">${t}</button>`).join("")}</div>` : ""}
    <div class="looks" role="group" aria-label="Background"><span class="lbl">Background</span>${TINTS.map(t => `<button type="button" class="big" data-tint="${t}" aria-pressed="${(A.tint || "cream") === t}">${cap1(t)}</button>`).join("")}</div>
    <p class="note">Your work saves on this device as you go.</p>
    <p class="note">${FS ? "When you leave Start, the page goes full screen. If you leave full screen or the page, it is written in your log." : "This browser cannot go full screen."}</p>
  </div><div class="scrollcol" tabindex="0" role="region" aria-label="Words to use">
    <h2>Words to use</h2>
    <dl class="words one">${WORDS.map(([w, d]) => `<div><span class="rd"><dt>${esc(w)}</dt><dd>${esc(d)}</dd></span>${readBtn("Read this word")}</div>`).join("")}</dl>
  </div></div></div>`;
}

/* ---------- a writing box ---------- */
function writeBox(b){
  const t = A.txt[b.key] || "", label = boxLabel(b);
  return `<div class="wb"><div class="stems" style="margin:0 0 8px">${b.starter
      ? `<button type="button" class="big" data-stem="${b.key}">${esc(b.starter)}</button>`
      : `<p class="lab rd" style="margin:0">${esc(b.label)}</p>${readBtn("Read this")}`}</div>
    <textarea data-key="${b.key}" aria-label="${esc(label)}">${esc(t)}</textarea>
    <div class="row" style="margin-top:8px">${micBtn(b.key)}<button type="button" class="big" data-undo="${b.key}">↶ Undo</button><button type="button" class="big" data-sayans="${b.key}">🔊 Read my answer</button><span class="note" id="wn_${b.key}" style="margin:0">${wc(t)} words</span></div></div>`;
}
const cardHTML = (c, i) => `<div class="ev"><span class="rd"><b>${i + 1}  ${esc(c[0])}.</b> ${c[1] ? esc(c[1]) + " " : ""}<i class="cap">${esc(c[2])}</i></span>${readBtn("Read this card")}
    <button type="button" class="big" data-card="${i + 1}">Add (card ${i + 1})</button></div>`;
function groupScreen(g){
  const head = `<div class="gh"><span aria-hidden="true">${GLYPH[g.kind]}</span><span class="rd">${esc(g.title)}</span>${g.sub ? `<span class="sub">${esc(g.sub)}</span>` : ""}</div>`;
  let note = "";
  if (g.id === "intro" && A.spk > 1) note = `<p class="note">You chose speaker ${A.spk}. This step is for a team's first speaker.</p>`;
  if (g.id === "arg") return `<div class="card k-${g.kind}">${head}<div class="two"><div class="boxes one scrollcol" tabindex="0" role="region" aria-label="My argument boxes">${g.boxes.map(writeBox).join("")}</div>
    <div><h3 style="margin-top:0">Evidence cards</h3><div class="cards scrollcol" tabindex="0" role="region" aria-label="Evidence cards">${CARDS.map(cardHTML).join("")}</div></div></div></div>`;
  return `<div class="card k-${g.kind}">${head}${note}<div class="boxes">${g.boxes.map(writeBox).join("")}</div></div>`;
}

/* ---------- hand in ---------- */
const cardsUsed = () => {
  const found = new Set();
  ["arg1", "arg2", "arg3"].forEach(k => (A.txt[k] || "").replace(/\bcards?\s*(\d+)/gi, (m, n) => { if (+n >= 1 && +n <= CARDS.length) found.add(+n); return m; }));
  return [...found].sort((a, b) => a - b);
};
function handScreen(){
  return `<div class="card"><h2 class="rd">Hand in</h2>
    <p class="note">${esc(A.name || "No name yet")} · ${A.team ? esc(A.team) : "no team chosen"} · ${A.spk ? "speaker " + A.spk : "no speaker number"} · about ${mins()} minutes on the page</p>
    <dl class="words">${GROUPS.map(g => `<div><span class="rd"><dt>${GLYPH[g.kind]} ${esc(g.title)}</dt><dd>${g.boxes.filter(b => wc(A.txt[b.key])).length} of ${g.boxes.length} boxes written, ${g.boxes.reduce((n, b) => n + wc(A.txt[b.key]), 0)} words</dd></span></div>`).join("")}</dl>
    <div class="row" style="margin-top:16px"><button type="button" class="big go" style="background:var(--sel);color:#fff;border-color:var(--sel)" id="printBtn">Print</button>
    <button type="button" class="big" id="copyBtn">Copy my work</button>
    <button type="button" class="big" id="rowBtn">Copy a row for the class sheet</button><span id="copied" role="status"></span></div>
    <p class="note">${esc(HANDIN_LINE)}</p></div>`;
}

/*@@CARET@@*/
function noteFor(key){ const n = $("wn_" + key); if (n) n.textContent = wc(A.txt[key]) + " words"; }
function wire(){
  const S = $("screen");
  const nm = $("nm"); if (nm) nm.addEventListener("input", () => { A.name = nm.value; save(); drawStrip(); });
  const tp = $("topic"); if (tp) tp.addEventListener("input", () => { A.topic = tp.value; save(); });
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
  S.querySelectorAll("[data-team]").forEach(b => b.onclick = () => { if (!steady()) return; A.team = A.team === b.dataset.team ? "" : b.dataset.team; save(); render(); });
  S.querySelectorAll("[data-spk]").forEach(b => b.onclick = () => { if (!steady()) return; A.spk = A.spk === +b.dataset.spk ? 0 : +b.dataset.spk; save(); render(); });
  S.querySelectorAll("[data-stem],[data-card]").forEach(b => b.addEventListener("pointerdown", e => e.preventDefault()));
  S.querySelectorAll("[data-stem]").forEach(b => b.onclick = () => { if (!steady()) return; caretInsert(b.dataset.stem, BOXES.find(x => x.key === b.dataset.stem).starter); });
  S.querySelectorAll("[data-card]").forEach(b => b.onclick = () => { if (!steady()) return; caretInsert("arg2", "(card " + b.dataset.card + ")"); });
  S.querySelectorAll("[data-undo]").forEach(b => {
    b.addEventListener("pointerdown", e => e.preventDefault());
    b.onclick = () => {
      if (!steady()) return;
      const key = b.dataset.undo, ta = document.querySelector('textarea[data-key="' + key + '"]');
      if (!ta || !undo[key] || !undo[key].length) return;
      ta.value = undo[key].pop(); A.txt[key] = ta.value; save(); noteFor(key); drawStrip(); ta.focus();
    };
  });
  const pr = $("printBtn"); if (pr) pr.onclick = () => { graceUntil = Date.now() + 120000; buildPrint(); window.print(); graceUntil = Date.now() + 3000; };
  const copy = async t => { try { await navigator.clipboard.writeText(t); $("copied").textContent = "Copied."; } catch (e) { $("copied").textContent = "Copy did not work here. Use Print instead."; } };
  const cp = $("copyBtn"); if (cp) cp.onclick = () => copy(plainText());
  const rw = $("rowBtn"); if (rw) rw.onclick = () => copy(classRow());
}

/* ---------- the printed copy, the copied text, the class row ---------- */
const mins = () => Math.round((A.secs || 0) / 60);
const cardList = () => cardsUsed().map(n => n + " " + CARDS[n - 1][0]).join(", ") || "none named";
const logText = () => FS ? "Left full screen or the page " + exits() + " time" + (exits() === 1 ? "" : "s") + "." : "This browser has no full screen, so the page was not locked.";
function buildPrint(){
  $("print").innerHTML = `
    <h1>Debate planner</h1>
    <p><b>Name:</b> ${esc(A.name || "")} &nbsp; <b>My team:</b> ${esc(A.team || "")} &nbsp; <b>Speaker number:</b> ${A.spk || ""} &nbsp; <b>Printed:</b> ${new Date().toLocaleDateString("en-AU")}</p>
    <p><b>Topic:</b> ${esc(topicText())}</p>
    <p><b>Supports used:</b> ${esc(supportsUsed())} &nbsp; <b>Time on the page:</b> about ${mins()} minutes &nbsp; <i>Done on the online version.</i></p>
    ${GROUPS.map(g => `<h2>${GLYPH[g.kind]} ${esc(g.title)}${g.sub ? " <small>(" + esc(g.sub) + ")</small>" : ""}</h2>
      ${g.boxes.map(b => `<p><b>${esc(boxLabel(b))}</b></p><div class="ans">${esc(A.txt[b.key] || "")}</div>`).join("")}`).join("")}
    <h2>Evidence cards named in my argument</h2><p>${esc(cardList())}</p>
    <h2>Log</h2><p>${esc(logText())}</p>
    ${exits() ? `<p>${logLines().map(esc).join("<br>")}</p>` : ""}
    <p style="font-size:9pt;color:#555">${esc(HANDIN_LINE)}</p>`;
}
function plainText(){
  return ["Debate planner", "Name: " + A.name, "My team: " + A.team, "Speaker number: " + (A.spk || ""), "Topic: " + topicText(), "Supports used: " + supportsUsed(), "Time on the page: about " + mins() + " minutes", ""]
    .concat(GROUPS.flatMap(g => [GLYPH[g.kind] + " " + g.title.toUpperCase() + (g.sub ? " (" + g.sub + ")" : "")].concat(g.boxes.map(b => boxLabel(b) + "\n  " + (A.txt[b.key] || "(nothing written)"))).concat([""])))
    .concat(["Evidence cards named in my argument: " + cardList(), "Log: " + logText()]).concat(logLines()).join("\n");
}
/* One tab-separated row for a shared sheet, 26 columns:
   1 name, 2 date, 3 minutes on the page, 4 team, 5 speaker number,
   6 to 22 words in each of the 17 boxes, in BOXES order (goal, speaker 1, 2, 3 argues; intro 1, 2; argument 1, 2, 3;
   get ready 1, 2; while they speak 1, 2; my rebuttal 1, 2; after the debate 1, 2),
   23 evidence card numbers named in the argument (comma separated), 24 times out of full screen ("no lock" if the browser has none),
   25 the argument text (the three argument boxes, joined), 26 the rebuttal text (the two rebuttal boxes, joined).
   It counts words and names; it cannot tell you whether any of it is good. */
function classRow(){
  const clean = t => String(t || "").replace(/[\t\r\n]+/g, " ").trim();
  const join = keys => clean(keys.map(k => clean(A.txt[k])).filter(Boolean).join(" "));
  return [clean(A.name), new Date().toLocaleDateString("en-AU"), mins(), clean(A.team), A.spk || ""]
    .concat(BOXES.map(b => wc(A.txt[b.key])))
    .concat([cardsUsed().join(","), FS ? exits() : "no lock", join(["arg1", "arg2", "arg3"]), join(["myreb1", "myreb2"])]).join("\t");
}

$("readPage").onclick = () => { if (!steady()) return; if (reading) stopReading(); else readEls(readPageEls()); };
A.sup = Object.assign({ big:false, read:false, mic:false }, A.sup); A.used = A.used || {}; A.txt = A.txt || {};
setZoom(A.zoom); applyTint(); applySupports(); setReadUI();
render();
if (A.sup.mic && SR) openMic();
if (A.step !== 0 && FS && !document.fullscreenElement) { $("lockH").textContent = "Back to the planner"; $("lock").hidden = false; }
