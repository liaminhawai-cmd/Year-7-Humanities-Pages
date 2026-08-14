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
const LANGS=(typeof EAL_LANGS!=="undefined"?EAL_LANGS:[]).filter(l=>{
  const translated=WORDS.filter(w=>w.trans);
  return !translated.length||translated.every(w=>w.trans[l.code]);
});
const STORE="topic-vocab-"+((typeof WALL!=="undefined"&&WALL.id)||location.pathname);
let known=new Set(),lang="",mode="meet",round=[],at=0,answered=false;
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
    const morph=w.morph?.length?`<div class="morphs">${w.morph.map(p=>`<span class="morph">${esc(p[0])} · ${esc(p[1])}</span>`).join("")}</div>`:"";
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
function start(which){mode=which;round=shuffle(WORDS).slice(0,Math.min(10,WORDS.length));at=0;answered=false;renderPractice()}
function next(){at++;answered=false;renderPractice()}
function finish(){
  box().innerHTML=`<div class="progress">Round complete</div><p class="prompt">You finished ${round.length} words.</p>
    <p>${known.size} of ${WORDS.length} are marked secure on this device.</p>
    <div class="actions"><button class="primary" id="again">Practise again</button><button class="secondary" id="meetAgain">Return to the word list</button></div>`;
  $("again").onclick=()=>start(mode);$("meetAgain").onclick=()=>show("meet");count();
}
function renderPractice(){
  if(at>=round.length)return finish();
  const w=round[at],tr=translation(w);
  box().innerHTML=`<div class="progress">${mode==="build"?"Build & match":"Use from memory"} · ${at+1} of ${round.length}</div><div id="task"></div>`;
  mode==="build"?(w.morph?.length>1?renderBuild(w,tr):renderMatch(w,tr)):renderRecall(w,tr);
  count(`${at+1}/${round.length}`);
}
function renderMatch(w,tr){
  const opts=shuffle([w,...distractors(w)]);
  $("task").innerHTML=`<p class="prompt">${esc(w.def)}</p>${tr?`<p class="translation" lang="${esc(lang)}">${esc(tr)}</p>`:""}
    <div class="options">${opts.map(o=>`<button data-word="${esc(o.word)}">${esc(o.word)}</button>`).join("")}</div><p class="feedback" id="feedback"></p>`;
  $("task").querySelectorAll(".options button").forEach(b=>b.onclick=()=>{
    if(answered)return;answered=true;const ok=b.dataset.word.toLowerCase()===w.word.toLowerCase();
    b.classList.add(ok?"right":"wrong");if(ok)mark(w.word);
    $("feedback").className="feedback "+(ok?"ok":"bad");$("feedback").innerHTML=ok?`Correct — <b>${esc(w.word)}</b>.`:`The word is <b>${esc(w.word)}</b>.`;
    setTimeout(next,850);
  });
}
function renderBuild(w,tr){
  const parts=w.morph.map((p,i)=>({surface:p[0],meaning:p[1],i}));let placed=0;
  $("task").innerHTML=`<p class="prompt">Build <b>${esc(w.word)}</b> from its meaning-parts.</p><p>${esc(w.def)}</p>
    ${tr?`<p class="translation" lang="${esc(lang)}">${esc(tr)}</p>`:""}
    <div class="built">${parts.map((_,i)=>`<span class="slot" data-slot="${i}"></span>`).join("")}</div>
    <div class="bank">${shuffle(parts).map(p=>`<button class="piece" data-i="${p.i}"><b>${esc(p.surface)}</b><br><small>${esc(p.meaning)}</small></button>`).join("")}</div>
    <p class="feedback" id="feedback">Tap the pieces in word order.</p>`;
  $("task").querySelectorAll(".piece").forEach(b=>b.onclick=()=>{
    if(+b.dataset.i!==placed){$("feedback").className="feedback bad";$("feedback").textContent="Not that piece yet — read the meanings and try again.";return}
    const p=parts[placed],slot=$("task").querySelector(`[data-slot="${placed}"]`);slot.textContent=p.surface;slot.classList.add("filled");b.disabled=true;placed++;
    if(placed===parts.length){mark(w.word);$("feedback").className="feedback ok";$("feedback").textContent="Built correctly.";setTimeout(next,850)}
    else{$("feedback").className="feedback";$("feedback").textContent="Good. Add the next piece."}
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
$("lang").innerHTML='<option value="">English only</option>'+LANGS.map(l=>`<option value="${l.code}">${esc(l.label)} · ${esc(l.english)}</option>`).join("");
$("lang").value=lang;$("lang").onchange=()=>{lang=$("lang").value;save();mode==="meet"?drawMeet():renderPractice()};
$("search").oninput=drawMeet;$("left").onchange=drawMeet;document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>show(b.dataset.mode));drawMeet();
