"use strict";
const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle=a=>{const b=[...a];for(let i=b.length-1;i;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};

const WORDS=(()=>{
  const out=new Map();
  for(const [word,def] of Object.entries((typeof GLOSS!=="undefined"&&GLOSS.tier3)||{})){
    const key=word.toLowerCase();
    const trans=(typeof TIER3_T!=="undefined"&&(TIER3_T[word]||Object.entries(TIER3_T).find(([w])=>w.toLowerCase()===key)?.[1]))||null;
    out.set(key,{word,def,trans,morph:null,shared:false});
  }
  for(const [word,item] of Object.entries((typeof EAL!=="undefined"&&EAL)||{}))
    out.set(word.toLowerCase(),{word,def:item.en,trans:item.t||null,morph:item.morph||null,shared:true});
  return [...out.values()].sort((a,b)=>a.word.localeCompare(b.word));
})();
// Offer a language if ANY word carries it, not only if every word does.
// Demanding every word punished the best-covered topics: Ancient Australia has
// all 35 of its words translated, but only 8 languages run right through all of
// them, so the all-or-nothing test hid the other ten from the students who read
// them, while a thinly covered topic offered all eighteen. Coverage is stated
// in the option instead, and a word without a translation simply shows none.
const COVER=new Map();
const LANGS=(typeof EAL_LANGS!=="undefined"?EAL_LANGS:[]).filter(l=>{
  const n=WORDS.filter(w=>w.trans&&w.trans[l.code]).length;
  if(n)COVER.set(l.code,n);
  return n>0;
});
const STORE="topic-vocab-"+((typeof WALL!=="undefined"&&WALL.id)||location.pathname);
let known=new Set(),lang="",mode="meet",round=[],queue=[],at=0,answered=false;
let board=[],phase="board",sel=null;
try{known=new Set(JSON.parse(localStorage.getItem(STORE)||"[]"));lang=localStorage.getItem("wagoll-lang")||""}catch(e){}
if(lang&&!LANGS.some(l=>l.code===lang))lang="";
const box=()=>mode==="recall"?$("practiceRecall"):$("practiceBuild");
const translation=w=>lang&&w.trans&&w.trans[lang]||"";
const languageLabel=()=>LANGS.find(l=>l.code===lang);
function save(){try{localStorage.setItem(STORE,JSON.stringify([...known]));localStorage.setItem("wagoll-lang",lang)}catch(e){}}
function mark(word,on=true){on?known.add(word.toLowerCase()):known.delete(word.toLowerCase());save()}
function count(extra=""){$("count").textContent=`${known.size} of ${WORDS.length} secure${extra?" · "+extra:""}`}

function drawMeet(){
  const q=$("search").value.trim().toLowerCase(),left=$("left").checked;
  const shown=WORDS.filter(w=>(!q||w.word.toLowerCase().includes(q)||w.def.toLowerCase().includes(q))&&(!left||!known.has(w.word.toLowerCase())));
  $("cards").innerHTML=shown.map(w=>{
    const k=known.has(w.word.toLowerCase()),tr=translation(w);
    const morph=w.morph?.length?`<div class="morphs">${w.morph.map(p=>`<span class="morph ${esc(p[2]||"root")}">${esc(p[0])} · ${esc(p[1])}</span>`).join("")}</div>`:"";
    return `<article class="card ${w.shared?"shared":""} ${k?"known":""}">
      <div class="wordrow"><h3>${esc(w.word)}</h3>${w.shared?'<span class="tag">every history unit</span>':""}
      <button class="star" data-word="${esc(w.word)}" aria-label="${k?"Move back to learning":"Mark secure"}">${k?"★":"☆"}</button></div>
      <p class="definition">${esc(w.def)}</p>
      ${tr?`<span class="translation" lang="${esc(lang)}">${esc(tr)}<span class="note">${esc(languageLabel()?.label)} · machine-drafted, not yet speaker-reviewed</span></span>`:""}${morph}</article>`;
  }).join("");
  $("cards").querySelectorAll(".star").forEach(b=>b.onclick=()=>{const key=b.dataset.word.toLowerCase();mark(key,!known.has(key));drawMeet()});
  count(`${shown.length} showing`);
}
const distractors=(correct,n=3)=>shuffle(WORDS.filter(w=>w!==correct)).slice(0,Math.min(n,WORDS.length-1));
const buildable=w=>(w.morph?.length||0)>1;

function start(which){
  mode=which;round=shuffle(WORDS).slice(0,Math.min(10,WORDS.length));at=0;answered=false;sel=null;
  if(mode==="build"){
    board=round.filter(buildable);
    queue=round.filter(w=>!buildable(w));
    phase=board.length?"board":"match";
    return phase==="board"?renderBoard():renderPractice();
  }
  queue=round;renderPractice();
}
function next(){at++;answered=false;renderPractice()}
function finish(){
  box().innerHTML=`<div class="progress">Round complete</div><p class="prompt">You finished ${round.length} words.</p>
    <p>${known.size} of ${WORDS.length} are marked secure on this device.</p>
    <div class="actions"><button class="primary" id="again">Practise again</button><button class="secondary" id="meetAgain">Return to the word list</button></div>`;
  $("again").onclick=()=>start(mode);$("meetAgain").onclick=()=>show("meet");count();
}
function renderPractice(){
  if(at>=queue.length)return finish();
  const w=queue[at],tr=translation(w);
  box().innerHTML=`<div class="progress">${mode==="build"?"Match the meaning":"Use from memory"} · ${at+1} of ${queue.length}</div><div id="task"></div>`;
  mode==="build"?renderMatch(w,tr):renderRecall(w,tr);
  count(`${at+1}/${queue.length}`);
}

/* THE BUILD BOARD.
   Modelled on the Water in the World hub, which gets this right in three ways
   this tool used to get wrong.

   The word is not shown. A row gives its meaning only, so the student has to
   work out which word it is before they can build it. Printing "Build artefact
   from its meaning-parts" above two tiles handed over the answer and left
   nothing to do but tap twice.

   The bank is shared and never depletes. Every morpheme the board needs sits in
   it once, grouped prefix, root and suffix, so a student sees that "spect"
   serves perspective and inspect alike. Cutting each word into its own private
   pile hid the only thing morphology is for.

   Decoys are real morphemes from elsewhere in this topic, so a wrong choice is
   a plausible one rather than obvious padding. */
function renderBoard(){
  const need=new Map();
  board.forEach(w=>w.morph.forEach(([piece,gloss,type])=>{
    const key=piece+"|"+(type||"root");
    if(!need.has(key))need.set(key,{piece,gloss,type:type||"root"});
  }));
  const spare=[];const seen=new Set();
  WORDS.filter(w=>w.morph?.length).forEach(w=>w.morph.forEach(([piece,gloss,type])=>{
    const key=piece+"|"+(type||"root");
    if(!need.has(key)&&!seen.has(key)){seen.add(key);spare.push({piece,gloss,type:type||"root"})}
  }));
  const tiles=[...need.values()].concat(shuffle(spare).slice(0,3));
  const ORDER=["prefix","root","suffix","connector"];
  const LABEL={prefix:"Prefixes",root:"Roots and base words",suffix:"Suffixes",connector:"Joiners"};
  const bank=ORDER.map(type=>{
    const group=tiles.filter(t=>t.type===type);
    if(!group.length)return "";
    return `<div class="mgroup"><div class="glabel ${type}">${LABEL[type]}</div><div class="mtiles">${
      shuffle(group).map(t=>`<button class="mtile ${t.type}" data-piece="${esc(t.piece)}" data-type="${esc(t.type)}"><b>${esc(t.piece)}</b><small>${esc(t.gloss)}</small></button>`).join("")}</div></div>`;
  }).join("");
  const rows=shuffle(board).map(w=>{
    const tr=translation(w);
    return `<div class="wrow" data-word="${esc(w.word)}">
      <div class="wmean">${esc(w.def)}${tr?`<span class="wtr" lang="${esc(lang)}">${esc(tr)}</span>`:""}</div>
      <div class="wslots">${w.morph.map((_,i)=>(i?'<span class="wjoin">+</span>':"")+`<span class="wslot" data-i="${i}"></span>`).join("")}</div>
      <div class="wbuilt"></div></div>`;
  }).join("");
  box().innerHTML=`<div class="progress">Build the words · ${board.length} left</div>
    <p class="boardhint">Read a meaning and work out which word it is. Tap a morpheme, then tap a slot. Build <b>prefix, root, suffix</b>, left to right. Tap a filled slot to take it back. A word you finish correctly leaves the board.</p>
    <div class="mlegend"><span class="prefix">prefix</span><span class="root">root</span><span class="suffix">suffix</span></div>
    <div class="mbank">${bank}</div>
    <p class="feedback" id="feedback"></p>
    <div class="wtable">${rows}</div>`;
  box().querySelectorAll(".mtile").forEach(t=>t.onclick=()=>{
    sel=sel&&sel.el===t?null:{piece:t.dataset.piece,el:t};
    box().querySelectorAll(".mtile").forEach(o=>o.classList.toggle("sel",!!sel&&sel.el===o));
  });
  box().querySelectorAll(".wslot").forEach(s=>s.onclick=()=>{
    if(s.dataset.piece){s.removeAttribute("data-piece");s.textContent="";s.classList.remove("filled");return}
    if(!sel)return;
    s.dataset.piece=sel.piece;s.textContent=sel.piece;s.classList.add("filled");
    sel=null;box().querySelectorAll(".mtile").forEach(o=>o.classList.remove("sel"));
    checkRow(s.closest(".wrow"));
  });
  count(`${board.length} to build`);
}
function checkRow(row){
  const slots=[...row.querySelectorAll(".wslot")];
  if(slots.some(s=>!s.dataset.piece))return;
  const w=board.find(x=>x.word===row.dataset.word);
  const given=slots.map(s=>s.dataset.piece).join("|");
  const want=w.morph.map(t=>t[0]).join("|");
  const fb=$("feedback");
  if(given!==want){
    row.classList.add("wrong");fb.className="feedback bad";
    fb.textContent="Not that combination. Read the meaning again, and check the order runs prefix, root, suffix.";
    setTimeout(()=>{row.classList.remove("wrong");slots.forEach(s=>{s.removeAttribute("data-piece");s.textContent="";s.classList.remove("filled")})},900);
    return;
  }
  mark(w.word);
  row.classList.add("done");
  row.querySelector(".wbuilt").innerHTML=`<b>${esc(w.word)}</b>`;
  fb.className="feedback ok";fb.textContent=`${w.word}. ${w.def}`;
  setTimeout(()=>{
    board=board.filter(x=>x.word!==w.word);
    if(!board.length){phase="match";at=0;return queue.length?renderPractice():finish()}
    row.remove();
    box().querySelector(".progress").textContent=`Build the words · ${board.length} left`;
    count(`${board.length} to build`);
  },1100);
}

function renderMatch(w,tr){
  const opts=shuffle([w,...distractors(w)]);
  $("task").innerHTML=`<p class="prompt">${esc(w.def)}</p>${tr?`<p class="translation" lang="${esc(lang)}">${esc(tr)}</p>`:""}
    <div class="options">${opts.map(o=>`<button data-word="${esc(o.word)}">${esc(o.word)}</button>`).join("")}</div><p class="feedback" id="feedback"></p>`;
  $("task").querySelectorAll(".options button").forEach(b=>b.onclick=()=>{
    if(answered)return;answered=true;const ok=b.dataset.word.toLowerCase()===w.word.toLowerCase();
    b.classList.add(ok?"right":"wrong");if(ok)mark(w.word);
    $("feedback").className="feedback "+(ok?"ok":"bad");$("feedback").innerHTML=ok?`Correct, <b>${esc(w.word)}</b>.`:`The word is <b>${esc(w.word)}</b>.`;
    setTimeout(next,850);
  });
}
function renderRecall(w,tr){
  $("task").innerHTML=`<p class="prompt">${esc(w.def)}</p>${tr?`<p class="translation" lang="${esc(lang)}">${esc(tr)}</p>`:""}
    <label for="answer"><b>Type the English Humanities word</b></label><input class="recall" id="answer" autocomplete="off" autocapitalize="none">
    <p class="feedback" id="feedback"></p><div class="actions"><button class="primary" id="check">Check</button><button class="secondary hidden" id="reveal">Show answer</button></div>`;
  let misses=0;
  const check=()=>{if(answered)return;const given=$("answer").value.trim().toLowerCase();
    if(given===w.word.toLowerCase()){answered=true;mark(w.word);$("feedback").className="feedback ok";$("feedback").textContent="Correct.";setTimeout(next,850)}
    else{misses++;$("feedback").className="feedback bad";$("feedback").textContent=misses===1?`Try again. It begins with “${w.word[0]}”.`:"Try once more, or show the answer.";if(misses>1)$("reveal").classList.remove("hidden")}};
  $("check").onclick=check;$("answer").onkeydown=e=>{if(e.key==="Enter")check()};
  $("reveal").onclick=()=>{answered=true;$("feedback").className="feedback bad";$("feedback").innerHTML=`The answer is <b>${esc(w.word)}</b>.`;setTimeout(next,1200)};$("answer").focus();
}
function show(nextMode){
  mode=nextMode;document.querySelectorAll(".panel").forEach(p=>p.classList.toggle("on",p.id===`panel-${mode}`));
  document.querySelectorAll(".tabs button").forEach(b=>b.setAttribute("aria-selected",String(b.dataset.mode===mode)));
  mode==="meet"?drawMeet():start(mode);
}
$("kicker").textContent=typeof WALL!=="undefined"?WALL.title:"Humanities";
$("lang").innerHTML='<option value="">English only</option>'+LANGS.map(l=>{
  const n=COVER.get(l.code)||0,part=n<WORDS.length?` · ${n} of ${WORDS.length} words`:"";
  return `<option value="${l.code}">${esc(l.label)} · ${esc(l.english)}${part}</option>`}).join("");
$("lang").value=lang;$("lang").onchange=()=>{lang=$("lang").value;save();mode==="meet"?drawMeet():start(mode)};
$("search").oninput=drawMeet;$("left").onchange=drawMeet;document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>show(b.dataset.mode));drawMeet();
