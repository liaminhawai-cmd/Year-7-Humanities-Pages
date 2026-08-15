/* =======================================================================
   CONTENT BLOCK for the history WAGOLL family.
   This is the ONLY place the wall text lives. wagoll-wall.html,
   level-sheets.html and interactive.html all read it, so editing here
   updates the wall, the per-level A3 sheets and the interactive at once.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.
   ======================================================================= */

const WALL = {
  id: "hist-gs73",
  title: "How one stone becomes evidence",
  expected: "Year 7",
  inquiry: "What does GS73 suggest about life at Madjedbebe in ancient Australia?",
  foot: "<b>Source:</b> panels adapted from Figure 3 of Hayes, E. H. et al. (2022), &ldquo;65,000-years of continuous grinding stone use at Madjedbebe, Northern Australia,&rdquo; <i>Scientific Reports</i> 12, 11747, doi:10.1038/s41598-022-15174-x (open access, CC BY 4.0). Figure prepared by Elspeth H. Hayes. The dating comparison uses Clarkson et al. (2017) and Williams et al. (2021). <b>The research was conducted with permission from the custodians of Madjedbebe, May Nango and Djaykuk Djandjomerr, and Mirarr Senior Traditional Owner Yvonne Margarula, with Gundjeihmi Aboriginal Corporation facilitating the work.</b> Mirarr-related images and information were published for general educational purposes; no commercial use is authorised without prior Mirarr consent. See SOURCE-NOTICE.md."
};

const FACTS = [
  ["Ancient object", "GS73, a sandstone millstone fragment excavated from square B5/52 at Madjedbebe on Mirarr Country."],
  ["Modern record", "Hayes and colleagues published photographs, micrographs and laboratory results in a peer-reviewed study in 2022."],
  ["Excavation context", "Phase 2, modelled to 68.7&ndash;50.4 thousand years ago. The earliest end of this range is debated."],
  ["Measured evidence", "Deep partial grooves; levelled quartz grains; striations; bright polish on the raised parts of grains."],
  ["Residues", "41 starch grains recovered and plant-related compounds detected. The exact plant was not identified."],
  ["Known limits", "Two chemical peaks were identified as plastic contamination. The integrity of the Phase 2 layer is contested."]
];

/* ink   — the colour on paper, all five above 4.5:1 on the wall's cream
   lamp  — the same criterion on the dark bar of the big-screen tool
   underline — the second channel, which is what survives a greyscale
               photocopy and a colour-blind reader */
const CRITERIA = [
  { key:"source",   row:"Origin, features &amp; purpose",        name:"Origin, features &amp; purpose",        glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"context",  row:"Historical context",                    name:"Historical context",                    glyph:"▲",
    ink:"#357a46", lamp:"#74c288", underline:"dashed" },
  { key:"evidence", row:"Historical interpretations",            name:"Historical interpretations",            glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
  { key:"judge",    row:"Accuracy, usefulness &amp; reliability", name:"Accuracy, usefulness &amp; reliability", glyph:"◆",
    ink:"#744f91", lamp:"#bda0d8", underline:"double" },
  { key:"meta",     row:"Metacognition",                       name:"Metacognition",                       glyph:"↻",
    ink:"#53666b", lamp:"#a3b6bb", underline:"wavy" },
];

const LEVELS = ["Grade 5","Year 6","Year 7","Year 8","Year 9","Year 10"];

const EXAMPLES = {
"Grade 5":
`GS73 is a {source|stone source} found at Madjedbebe. I can see {source|deep grooves} and {source|shiny patches}. It comes from {context|ancient Australia} and may have been used for grinding. {evidence|Researchers disagree about exactly how old its soil layer is}. The stone is {judge|useful for showing tool use}, but it {judge|cannot tell us the user's name}. I checked my answer and {meta|added the words 'may have' because the source does not prove everything}.`,

"Year 6":
`GS73 is an {source|archaeological artefact}: a {source|sandstone grinding-stone fragment} found at Madjedbebe on Mirarr Country. Photographs show {source|grooves and polish}. It belongs to {context|a very early period of Aboriginal occupation}, when people repeatedly used stone tools. {evidence|Some researchers place Phase 2 at about 65,000 years ago}, while others {evidence|question whether soil movement affected that date}. It is {judge|useful evidence that people ground materials}, although {judge|the stone alone cannot identify exactly what was ground}. Before writing, I {meta|broke the task into source, context, interpretations and usefulness}.`,

"Year 7":
`The ancient source is {source|GS73, a sandstone millstone fragment excavated from Phase 2 at Madjedbebe on Mirarr Country}. The modern record is {source|a 2022 scientific figure by Hayes and colleagues}, created to {source|document its wear and residues and argue for long-term grinding-stone use}. In ancient Australia, {context|grinding technology helped people prepare hard or fibrous plant foods and shows detailed knowledge of local resources}. {evidence|Hayes and colleagues interpret plant processing} because the source contains {evidence|deep grooves, microscopic polish, 41 starch grains and plant-related compounds}; {evidence|other researchers question the earliest date of the layer}. GS73 is {judge|highly useful for investigating plant processing because shape, wear and residues agree}, but {judge|the exact plant is unidentified and the precise age remains contested}. After reviewing, I {meta|changed 'proves' to 'supports' and separated the well-supported function from the disputed date}.`,

"Year 8":
`The ancient source is {source|GS73, a millstone fragment from Phase 2}; Hayes and colleagues' {source|2022 scientific figure records its form, wear and residues so readers can examine their interpretation}. {context|Madjedbebe is a long-occupied site on Mirarr Country}, and the grinding evidence places {context|complex plant preparation within deep Aboriginal history}. {evidence|Hayes interpret seed grinding from wear and residues}; {evidence|Clarkson defend the early context using site integrity and dating}; and {evidence|Williams use termite and sediment evidence to make the precise age less secure}. {judge|Shape, microscopic wear, starch and plant compounds strengthen the function claim}, but I would ask: {judge|Could contamination affect the residues? Could layer movement affect the date?} I reflected by {meta|checking which methods added independent support and recording the questions still unresolved}.`,

"Year 9":
`GS73 is {source|material evidence excavated from a recorded Phase 2 context}. The {source|peer-reviewed 2022 figure combines photographs, micrographs and laboratory results} to {source|persuade a scientific audience that grinding-stone use has a deep history}. The study belongs to {context|research into the deep Aboriginal history of Sahul} and was conducted {context|with permission from Mirarr custodians}. {evidence|Hayes use grooves, polish and residues to argue for seed processing}; {evidence|Clarkson use site integrity and dating to support the early chronology}; while {evidence|Williams use termite and sediment evidence to challenge it}. {judge|Agreement between wear and residue evidence makes grinding the strongest claim}, while {judge|the exact plant and precise age are weaker because they depend on preservation and depositional context}. I {meta|monitored whether I was comparing evidence or merely listing it, then rewrote the list as a judgement}.`,

"Year 10":
`GS73 is an ancient artefact interpreted through a modern scientific publication. Its {source|explicit evidence is recorded wear and residues}; its {source|implicit argument is that grinding technology has a deeper Australian history than older accounts allowed}, aimed at {source|archaeologists and other scientific readers}. The investigation reflects {context|contemporary scientific testing and collaboration with Mirarr custodians}, revealing values of {context|empirical testing, custodial permission and careful qualification}. {evidence|Hayes and Clarkson accept the early context because several records converge}, while {evidence|Williams gives more weight to termite disturbance and sediment movement}; their interpretations differ because they make {evidence|competing judgements about site formation}. Overall, GS73 is {judge|strong evidence for grinding but only qualified evidence for an exact age}: strengths include {judge|converging methods}; limitations include {judge|unidentified starch, contamination and contested layer history}. I {meta|justified triangulation as the strongest strategy, then adapted the conclusion because the claims have different certainty}.`
};

const EXPLANATIONS = {
"Grade 5": {
  source:   "The blue phrases name the source and two visible features: 'stone source', 'deep grooves' and 'shiny patches'. Origin and purpose are not yet developed.",
  context:  "The green phrase places GS73 broadly in 'ancient Australia' but gives little detail about life or practice.",
  evidence: "The orange phrase notices disagreement about the date without describing the competing arguments.",
  judge:    "The purple phrases give one use and one limit: tool use is visible, but the user cannot be named.",
  meta:     "The grey phrase shows a real revision: adding 'may have' makes the inference appropriately cautious."
},
"Year 6": {
  source:   "'Archaeological artefact', 'sandstone grinding-stone fragment' and 'grooves and polish' identify type and features; purpose is not yet explained.",
  context:  "'A very early period of Aboriginal occupation' identifies the context and connects it to repeated tool use.",
  evidence: "The answer recognises two positions on the date but does not yet describe the evidence behind them.",
  judge:    "It recognises usefulness for grinding and a clear limit: the material processed cannot yet be identified.",
  meta:     "The response was planned by breaking the task into the four historical-thinking parts shown on the wall."
},
"Year 7": {
  source:   "The answer separates the ancient object from the modern 2022 record, then identifies origin, features and why the figure was created.",
  context:  "The green sentence outlines how grinding supported plant preparation and knowledge of local resources.",
  evidence: "The orange phrases describe Hayes' plant-processing interpretation and the separate challenge to the earliest date.",
  judge:    "The purple judgement concludes that converging methods make plant processing useful evidence, then bounds the claim with two limits.",
  meta:     "The grey phrase makes editing visible: 'proves' becomes 'supports', and function is separated from precise age."
},
"Year 8": {
  source:   "The blue phrases describe the object and explain how the modern figure lets readers inspect its form, wear and residues.",
  context:  "The green phrases describe Madjedbebe, Mirarr Country and grinding within deep Aboriginal history.",
  evidence: "The answer explains the debate by connecting each interpretation to a different evidence base.",
  judge:    "It compares independent evidence for function and asks targeted reliability questions about contamination and layer movement.",
  meta:     "The reflection identifies which methods added independent support and preserves unresolved questions for further inquiry."
},
"Year 9": {
  source:   "The blue phrases explain why the peer-reviewed figure combines several records and which audience and argument it addresses.",
  context:  "The green phrases explain the deep-history research context and the role of Mirarr custodial permission.",
  evidence: "Each interpretation is analysed through its evidence: wear and residue, site integrity and dating, or termite and sediment movement.",
  judge:    "The purple comparison identifies grinding as a stronger claim than exact plant or exact age and explains why.",
  meta:     "The writer monitors whether evidence is merely listed, then deliberately revises the list into a comparative judgement."
},
"Year 10": {
  source:   "The blue phrases analyse explicit evidence, the publication's implicit argument, purpose and scientific audience.",
  context:  "The green phrases use context to explain the creators' values: empirical testing, permission and qualification.",
  evidence: "The evaluation exposes why interpretations differ: researchers give different weight to converging records and site-formation evidence.",
  judge:    "The overall judgement weighs a strength, three limitations and two claims with different degrees of certainty.",
  meta:     "The writer justifies triangulation, then adapts the conclusion rather than forcing all claims to sound equally certain."
}
};

const CONTINUUM = {
source:{
 "Grade 5":"I can name a historical source and a feature I notice.",
 "Year 6":"I can identify different types of historical sources.",
 "Year 7":"I can identify the origin, content features and purpose of historical sources.",
 "Year 8":"I can describe the origin, content features and purpose of historical sources.",
 "Year 9":"I can explain the origin, content features and purpose of historical sources.",
 "Year 10":"I can analyse the origin, explicit and implicit meaning, and purpose of historical sources."},
context:{
 "Grade 5":"I can say where or when a source comes from.",
 "Year 6":"I can identify the historical context of a source.",
 "Year 7":"I can outline the historical context of a source.",
 "Year 8":"I can describe the historical context of sources.",
 "Year 9":"I can explain historical context, including important events that influenced a source’s creation.",
 "Year 10":"I can explain historical context to identify the motivations, values and attitudes of a source’s creator."},
evidence:{
 "Grade 5":"I can notice that people may explain the past differently.",
 "Year 6":"I can recognise that historians may interpret historical events and developments differently.",
 "Year 7":"I can describe different historical interpretations of the past.",
 "Year 8":"I can explain different historical interpretations and contested debates about the past.",
 "Year 9":"I can analyse historical interpretations and contested debates and identify the evidence used to support them.",
 "Year 10":"I can evaluate historical interpretations and contested debates, including why or how interpretations differ."},
judge:{
 "Grade 5":"I can say one thing a source can and cannot tell us.",
 "Year 6":"I can recognise that some historical sources are more useful than others.",
 "Year 7":"I can draw conclusions about the usefulness of sources.",
 "Year 8":"I can compare and contrast historical sources and ask questions about their accuracy, usefulness and reliability.",
 "Year 9":"I can compare and contrast historical sources and identify their accuracy, usefulness and reliability.",
 "Year 10":"I can compare and contrast sources and analyse their accuracy, usefulness and reliability."},
meta:{
 "Grade 5":"I can follow a source-analysis checklist one step at a time.",
 "Year 6":"I can complete the task by breaking it into smaller parts.",
 "Year 7":"I can review and edit my work.",
 "Year 8":"I can reflect on my learning experience and processes to inform future progress.",
 "Year 9":"I can use, monitor and evaluate a variety of learning strategies.",
 "Year 10":"I can justify and adapt the source-analysis strategies that produced my strongest judgement."},
};


/* ---------------------------------------------------------------------------
   Text for the standalone A3 source sheet (source-sheet.html). Every factual
   claim here comes from the Hayes et al. (2022) paper, the two dating papers
   it is compared with, or SOURCE-NOTICE.md. Interpretations are attributed to
   the researchers who made them rather than stated as settled fact.
   --------------------------------------------------------------------------- */

const SHEET_IMAGE = "gs73-source-panel.jpg";

/* What the big-screen tool puts in the left-hand panel. kind:"image" names a
   file and the rectangles HOTSPOTS zoom into; kind:"text" names paragraphs and
   the phrases to light up. */
const SOURCE_PANEL = {
  kind: "image",
  file: SHEET_IMAGE,
  ar:   "1272/968",
  alt:  "Four views of GS73: the artefact with a scale bar, its worn surface magnified, and two microscope views of polished grains.",
  missing: "The picture of GS73 did not load.<br>Keep <b>gs73-source-panel.jpg</b> in the same folder as this page.",
  whole: { label:"All four views",
    text:"The same object at four magnifications. Nothing is added between one view and the next — only the magnification changes." }
};

const SOURCE_SHEET = {
  kicker: "Ancient Australia · Source A",
  title: "GS73",
  standfirst: "A broken piece of sandstone from a rock shelter in northern Australia, and the long journey by which it became evidence.",

  views: "The four views above are all of the same object. The first is the artefact itself, photographed with a five-centimetre scale bar, with arrows marking the worn areas. The second is the same surface at low magnification, where striations and levelled quartz grains become visible. The last two are microscope views, taken at different points, showing bright polish on the raised parts of individual grains. Nothing has been added to the stone between one view and the next — only the magnification changes.",

  paras: [
    "GS73 is a fragment of a millstone: the lower, fixed slab of a grinding pair, against which a smaller handheld stone is worked. It is sandstone, it is broken, and on its own it looks unremarkable. It was excavated from square B5/52 at the Madjedbebe rock shelter, on Mirarr Country in northern Australia.",

    "Where a thing is found in the ground matters as much as the thing itself. GS73 came from Phase 2 of the excavation, a layer modelled to between 68,700 and 50,400 years ago. That range is not a measurement of the stone; it is a model of the deposit the stone was lying in, and the earliest end of it is disputed.",

    "The stone reached a laboratory before it reached this page. Researchers photographed it, examined its surface under magnification, and washed and analysed what was still caught in it. They recovered 41 starch grains and detected plant-related compounds. They could not identify which plant. They also found two chemical peaks they identified as plastic contamination — a modern signal sitting inside an ancient sample, reported rather than quietly removed.",

    "Hayes and colleagues read the combination — the shape, the deep partial grooves, the levelled grains and polish, the starch and the plant compounds — as evidence of plant processing, and published it in 2022 as part of an argument that grinding-stone use at Madjedbebe has a very long history. Several independent methods pointing the same way is what makes that reading strong.",

    "The age of the layer is argued about separately. Clarkson and colleagues hold that the artefacts stayed where they were deposited, supporting occupation around 65,000 years ago. Williams and colleagues point to termite activity and sediment movement, and argue that the earliest material may not have stayed in place. Note what is and is not in dispute: the disagreement is about how old the layer is, not about whether GS73 is a genuine grinding stone.",

    "None of this work was done on unclaimed ground. Madjedbebe is on Mirarr Country. The research was carried out with the permission of the custodians of Madjedbebe, May Nango and Djaykuk Djandjomerr, and of Mirarr Senior Traditional Owner Yvonne Margarula, with Gundjeihmi Aboriginal Corporation facilitating the work. The images and information were published for general educational purposes; no commercial use is authorised without prior Mirarr consent. Country and custodianship are part of this source’s context, not a footnote to it."
  ],

  close: "A single stone cannot tell you who used it, or what exactly they ground. What it can do — once it has been recorded, magnified, analysed, argued over and attributed — is carry evidence. That is the difference between an object and a source."
};

/* ---------------------------------------------------------------------------
   Paragraph frame (paragraph-builder.html). Same idea as the ELC TEEA tool:
   one card per step, each opening to the job, the guide, a worked non-example
   and sentence stems. The worked examples are NOT repeated here — the builder
   pulls them out of EXAMPLES above, so they can never drift.
   --------------------------------------------------------------------------- */

const FRAME = {
  name: "S · C · I · U",
  blurb: "The four historical-thinking steps build the paragraph.<!--meta--> The grey metacognition phrase shows how the writer planned, checked or revised it.<!--/meta-->",
  steps: [
    { key:"source", letter:"S", title:"Source",
      job:"Say what the source is, where it came from, and why it was made.",
      guide:"Two different things get named here: the ancient object, and the modern record of it. Name both. The words “created to…” are what turn a description into a purpose.",
      warn:"This source is about a stone from Australia.",
      warnWhy:"That is the topic, not the source. No origin, no features, no purpose.",
      stems:["The ancient source is ___, excavated from ___.",
             "The modern record is ___, created to ___.",
             "It was made for ___ so that ___."] },

    { key:"context", letter:"C", title:"Context",
      job:"Use what you know about the period to make the details mean something.",
      guide:"This sentence is knowledge you bring, not something you can see in the source. Say what was happening at the time, and why that makes these details matter.",
      warn:"It is very old.",
      warnWhy:"A date is not a context. Say what people were doing, and why the source fits there.",
      stems:["In ___, ___ helped people ___.",
             "At this time ___, which is why ___.",
             "The study belongs to ___."] },

    { key:"evidence", letter:"I", title:"Interpretations",
      job:"Say what researchers think the source shows, and what in the source makes them think it.",
      guide:"Every interpretation needs its evidence attached with “because”. Where two groups disagree, give both, and say what each one is arguing from.",
      warn:"Researchers disagree about it.",
      warnWhy:"You have named a disagreement without saying what either side argues, or what they argue from.",
      stems:["___ interpret ___ because the source contains ___.",
             "___ argue ___, while ___ question ___.",
             "Each side is arguing from ___."] },

    { key:"judge", letter:"U", title:"Usefulness",
      job:"Judge what the source is good for, then say plainly what it cannot settle.",
      guide:"Useful for what? Name the claim. Then bound it. A limit is not an apology — it is half of the judgement.",
      warn:"This source is very useful and reliable.",
      warnWhy:"Useful for which claim? A judgement with nothing attached and no limit is not a judgement.",
      stems:["___ is useful for investigating ___ because ___.",
             "However, ___ remains ___.",
             "It is strong evidence for ___, but only qualified evidence for ___."] },

  ]
};

const VERBS = {
  use: [
    { w:"names",      note:"points at the source" },
    { w:"identifies", note:"points at the source" },
    { w:"describes",  note:"adds detail" },
    { w:"outlines",   note:"adds detail" },
    { w:"records",    note:"what the modern study did" },
    { w:"documents",  note:"what the modern study did" },
    { w:"explains",   note:"gives a reason" },
    { w:"interprets", note:"reads meaning from evidence" },
    { w:"argues",     note:"takes a position" },
    { w:"questions",  note:"pushes back on a position" },
    { w:"challenges", note:"pushes back on a position" },
    { w:"analyses",   note:"breaks it into parts" },
    { w:"evaluates",  note:"weighs it up" },
    { w:"justifies",  note:"gives grounds for a judgement" },
    { w:"qualifies",  note:"limits a claim on purpose" }
  ],
  avoid: [
    { w:"proves",     why:"almost nothing in history is proved by one source. The wall's own revision is “proves” → “supports”." },
    { w:"is about",   why:"names the topic, not the source." },
    { w:"says",       why:"reports; it does not interpret." },
    { w:"talks about",why:"too vague to meet any descriptor." }
  ]
};

/* ---------------------------------------------------------------------------
   Staged build activity (build-the-wall.html). Only the teaching text lives
   here — every question is generated from EXAMPLES, CONTINUUM and FRAME above,
   so the activity can never ask about something the wall does not say.
   --------------------------------------------------------------------------- */

const BUILD = {
  intro: "The wall is empty. Each round you answer fills part of it in. Nothing is locked — you can leave a round and come back.",
  stages: [
    { id:"phrase", title:"Which criterion does this phrase prove?", short:"Phrases",
      teach:"Every marked phrase on the wall is marked because it <b>proves one criterion</b>. The unmarked words around it are the glue that holds the sentence together.<br><br>Ask: <i>what is this phrase doing?</i> Naming the source is not the same as judging it. Giving an interpretation is not the same as giving the evidence for it.",
      reteach:"Slow it down. Read the phrase on its own, without the sentence around it, and ask what job it does:<ul><li>Does it <b>name or describe the source</b>, or say why it was made? → Origin, features &amp; purpose.</li><li>Does it place the source in <b>a time, a place or a practice</b>? → Historical context.</li><li>Does it say <b>what someone thinks</b>, or give the evidence they think it from? → Historical interpretations.</li><li>Does it say <b>how useful or how limited</b> the source is? → Accuracy, usefulness &amp; reliability.</li><!--meta--><li>Does it show <b>how the writer planned, checked or improved</b> the response? → Metacognition.</li><!--/meta--></ul>" },

    { id:"descriptor", title:"Which row does this descriptor belong in?", short:"Rows",
      teach:"Under the worked examples, the wall has one row per criterion. Each row runs left to right through the levels.<br><br>These are the descriptors from that grid. Put each one back in its row.",
      reteach:"The verb at the start is usually the giveaway for the level, not the row. For the <b>row</b>, look at what the sentence is about: the source itself, its time and place, what people argue, how far you can trust it, or how you worked." },

    { id:"level", title:"Which level is this descriptor?", short:"Levels",
      teach:"Read across a row and the same skill gets harder every twelve months. The verb carries most of that change: <i>name</i> and <i>identify</i> sit low, <i>describe</i> and <i>outline</i> in the middle, <i>explain</i>, <i>analyse</i> and <i>evaluate</i> higher up.",
      reteach:"Line the verbs up in your head, easiest to hardest: name → identify → outline → describe → explain → analyse → evaluate. Then find where this descriptor's verb sits." },

    { id:"order", title:"Put the answer in order", short:"Order",
      teach:"The finished answer runs in the same order as the wall reads downwards. Drag or tap the sentences into that order.",
      reteach:"Follow the frame: say what the source is, then when and where it belongs, then what people make of it and why, then how far you trust it, and last what you changed in your own writing." }
  ],
  done: "The wall is complete. Everything in it came out of your answers."
};


/* ---------------------------------------------------------------------------
   Extra rungs BELOW Grade 5, used only by bump-it-up.html. They are kept out
   of LEVELS on purpose: the wall, the level sheets and the PDFs are built for
   six columns, and eleven would wreck them. The screen tool walks
   EARLY_LEVELS.concat(LEVELS) and reads examples from whichever object has
   them, so nothing is duplicated.

   Criteria appear one at a time on the way up. That is the point of the
   ladder, not an omission: at Prep you can only name the thing you can see.
   --------------------------------------------------------------------------- */

const EARLY_LEVELS = ["Foundation to Level 2", "Levels 3 and 4"];

/* Two rungs, not five. The Victorian Curriculum bands History in two-year
   blocks and draws no distinction between Foundation and Level 2, or between
   Levels 3 and 4, so inventing a rung per year would be inventing precision
   the curriculum does not have. */

const EARLY_EXAMPLES = {
 "Foundation to Level 2":
`This is a rock. It has {source|deep lines} on it. Some parts are {source|shiny}. Someone {context|held it and rubbed it to make food}.`,

 "Levels 3 and 4":
`GS73 is an {source|old grinding stone} found at Madjedbebe. It has {source|deep grooves and shiny patches}. The people who used it were {context|grinding hard seeds to make food}. Some researchers say {evidence|the stone is very old}. Others say {evidence|the soil has moved, so they are not sure}.`
};

const EARLY_EXPLANATIONS = {
 "Foundation to Level 2": {
   source:  "Identifies features you can see on the source itself: the lines, and the shine (VC2HH2S03).",
   context: "Identifies a perspective — what the person using it was trying to do (VC2HH2S04). The wall colours this green, but at this band the curriculum calls it perspectives, not context." },
 "Levels 3 and 4": {
   source:  "Identifies the features and content of a historical source, and names where it was found (VC2HH4S03).",
   context: "Describes the perspective of people in the past, using evidence from the object itself (VC2HH4S04).",
   evidence:"Describes two different historical interpretations of the same object (VC2HH4S05)." }
};

const BUMP = {
 "Foundation to Level 2": {
   new:"You name what you can see on the source, and what the person was doing with it.",
   background:"That the marks on an object were put there by someone, on purpose." },
 "Levels 3 and 4": {
   new:"You name the place it came from, and you say that researchers do not all agree about it.",
   background:"That researchers can look at the same object and reach different conclusions." },
 "Grade 5": {
   new:"Three things switch on at once: you place the source in its time, you judge what it is useful for, and you choose careful words like ‘may have’.",
   background:"That a source can be strong evidence for one thing and weak evidence for another at the same time." },
 "Year 6": {
   new:"You name the type of source, give both positions on its age, and break the task into smaller parts before writing.",
   background:"That archaeologists date the layer an object sat in, not the object itself." },
 "Year 7": {
   new:"You separate the ancient object from the modern record, explain why the record was made, then review and edit your claim.",
   background:"That a scientific figure is made by researchers for a purpose, and that 65,000 years is the modelled age of the layer." },
 "Year 8": {
   new:"You attach each interpretation to its evidence, ask reliability questions, and reflect on which methods gave independent support.",
   background:"That Clarkson and Williams disagree about how the site formed, and that residues can be contaminated by modern material." },
 "Year 9": {
   new:"You explain why several kinds of evidence are stronger together, rank your claims, and monitor whether you are comparing or only listing.",
   background:"What independent evidence means, and that what survives in the ground depends on preservation." },
 "Year 10": {
   new:"You read the argument underneath the evidence, explain why experts differ, and justify and adapt the strategy behind your conclusion.",
   background:"That researchers' values shape their work, and that permission from Mirarr custodians is part of how this research was done." }
};

/* Tier 3 = the subject's own words, which need a definition.
   Tier 2 = general academic words, which need a plainer synonym.
   Matched case-insensitively on whole words wherever they appear. */
const GLOSS = {
 tier3: {
  "artefact":"An object made or used by people in the past.",
  "grinding stone":"A stone that people rub against another stone to crush seeds into flour.",
  "millstone":"The lower, fixed stone of a grinding pair. The smaller stone is worked against it.",
  "excavated":"Carefully dug out of the ground by archaeologists.",
  "Madjedbebe":"A rock shelter in northern Australia where people have lived for tens of thousands of years.",
  "Mirarr":"The Aboriginal people whose Country Madjedbebe sits on.",
  "Phase 2":"The name archaeologists gave to one layer of soil at the site.",
  "sediment":"Sand, soil and dust that settles in layers over time.",
  "residues":"Tiny traces of something left behind on a surface.",
  "starch grains":"Microscopic grains from a plant. Finding them shows plants were being processed.",
  "micrographs":"Photographs taken through a microscope.",
  "archaeologists":"People who study the past by digging up and examining what earlier people left behind.",
  "chronology":"The order and dates of when things happened.",
  "custodians":"The people responsible for looking after Country and the knowledge belonging to it.",
  "contamination":"Something modern getting into an old sample by accident.",
  "striations":"Fine scratch lines left on a surface by rubbing.",
  "polish":"A shine worn onto the raised parts of grains by using a stone over and over."
 },
 tier2: {
  "ancient":"very old",
  "evidence":"proof · signs",
  "interpret":"work out what it means",
  "interpretation":"what someone thinks it means",
  "reliable":"can be trusted",
  "contested":"argued about",
  "converge":"point the same way",
  "qualified":"limited · with conditions",
  "independent":"separate · not connected",
  "purpose":"the reason it was made",
  "context":"the time and place around it",
  "argue":"give reasons for",
  "supports":"backs up",
  "suggests":"hints at",
  "identify":"name · point out",
  "describe":"say what it is like",
  "analyse":"break it down and examine it",
  "evaluate":"judge how good it is",
  "justify":"give good reasons for",
  "recovered":"found and taken out",
  "occupied":"lived in"
 }
};

/* Clickable regions on gs73-source-panel.jpg, as percentages of the image.
   The plate is a 2x2 of the same object at four magnifications. */
const HOTSPOTS = [
 { x:2,  y:2,  w:46, h:50, label:"The artefact",
   text:"GS73 itself, photographed with a five-centimetre scale bar. The white arrows point to the worn areas." },
 { x:50, y:2,  w:48, h:50, label:"Low magnification",
   text:"The same surface, magnified. Now you can see striations — fine scratch lines — and quartz grains levelled flat by rubbing." },
 { x:4,  y:54, w:44, h:44, label:"Microscope view r",
   text:"Bright polish on the raised parts of single grains. Polish like this builds up when a stone is used again and again." },
 { x:50, y:54, w:48, h:44, label:"Microscope view s",
   text:"A second microscope view, from a different spot on the stone. Two views agreeing makes the reading stronger than one view alone." }
];

/* ---------------------------------------------------------------------------
   PEEL and TEEL. Not a different paragraph — the same moves under the names
   students meet in English, mapped onto the same criterion keys so that a
   student's writing survives switching frames.

   P and T are the same move. Both are here because different classes are
   taught different letters, and arguing about the letter helps nobody.
   --------------------------------------------------------------------------- */

const FRAMES = [FRAME,
 { name:"P · E · E · L",
   blurb:"The same four moves under the letters you use in English. Your writing carries across if you switch.",
   steps:[
    { key:FRAME.steps[0].key, letter:"P", title:"Point",
      job:FRAME.steps[0].job, guide:FRAME.steps[0].guide,
      warn:FRAME.steps[0].warn, warnWhy:FRAME.steps[0].warnWhy,
      stems:FRAME.steps[0].stems },
    { key:FRAME.steps[2].key, letter:"E", title:"Evidence",
      job:FRAME.steps[2].job, guide:FRAME.steps[2].guide,
      warn:FRAME.steps[2].warn, warnWhy:FRAME.steps[2].warnWhy,
      stems:FRAME.steps[2].stems },
    { key:FRAME.steps[1].key, letter:"E", title:"Explain",
      job:FRAME.steps[1].job, guide:FRAME.steps[1].guide,
      warn:FRAME.steps[1].warn, warnWhy:FRAME.steps[1].warnWhy,
      stems:FRAME.steps[1].stems },
    { key:FRAME.steps[3].key, letter:"L", title:"Link",
      job:FRAME.steps[3].job, guide:FRAME.steps[3].guide,
      warn:FRAME.steps[3].warn, warnWhy:FRAME.steps[3].warnWhy,
      stems:FRAME.steps[3].stems }]},
 { name:"T · E · E · L",
   blurb:"The same as PEEL, with Topic sentence in place of Point. Your writing carries across if you switch.",
   steps:[
    { key:FRAME.steps[0].key, letter:"T", title:"Topic sentence",
      job:FRAME.steps[0].job, guide:FRAME.steps[0].guide,
      warn:FRAME.steps[0].warn, warnWhy:FRAME.steps[0].warnWhy,
      stems:FRAME.steps[0].stems },
    { key:FRAME.steps[2].key, letter:"E", title:"Evidence",
      job:FRAME.steps[2].job, guide:FRAME.steps[2].guide,
      warn:FRAME.steps[2].warn, warnWhy:FRAME.steps[2].warnWhy,
      stems:FRAME.steps[2].stems },
    { key:FRAME.steps[1].key, letter:"E", title:"Explain",
      job:FRAME.steps[1].job, guide:FRAME.steps[1].guide,
      warn:FRAME.steps[1].warn, warnWhy:FRAME.steps[1].warnWhy,
      stems:FRAME.steps[1].stems },
    { key:FRAME.steps[3].key, letter:"L", title:"Link",
      job:FRAME.steps[3].job, guide:FRAME.steps[3].guide,
      warn:FRAME.steps[3].warn, warnWhy:FRAME.steps[3].warnWhy,
      stems:FRAME.steps[3].stems }]}
];

/* Translations for this unit's own tier-3 words, in the shape eal.js uses, so
   the tool treats a unit word and a shared word identically. The shared
   source-analysis words are NOT repeated here — they live in eal.js and only
   there. Machine-drafted, unreviewed, and labelled as such on screen. */
const TIER3_T = {
  "grinding stone": {"zh-Hans": "石磨", "zh-Hant": "石磨", "vi": "đá nghiền", "ar": "حجر طحن", "fa": "سنگ آسیاب", "ur": "پیسنے کا پتھر", "ml": "അരയ്ക്കുന്ന കല്ല്", "am": "መፍጫ ድንጋይ"},
  "millstone": {"zh-Hans": "磨盘", "zh-Hant": "磨盤", "vi": "cối đá", "ar": "حجر الرحى", "fa": "سنگ آسیاب", "ur": "چکی کا پاٹ", "ml": "തിരികല്ല്", "am": "የወፍጮ ድንጋይ"},
  "excavated": {"zh-Hans": "发掘出土", "zh-Hant": "發掘出土", "vi": "được khai quật", "ar": "مُنقَّب عنه", "fa": "کاوش‌شده", "ur": "کھدائی سے نکالا گیا", "ml": "ഖനനം ചെയ്തെടുത്ത", "am": "የተቆፈረ"},
  "Madjedbebe": {"zh-Hans": "马杰贝贝遗址", "zh-Hant": "馬傑貝貝遺址", "vi": "Madjedbebe (di chỉ)", "ar": "مادجيدبيبي", "fa": "مادجدبیبی", "ur": "مادجدبیبی", "ml": "മാഡ്ജെഡ്ബെബെ", "am": "ማጅedቤቤ"},
  "Mirarr": {"zh-Hans": "米拉尔族", "zh-Hant": "米拉爾族", "vi": "người Mirarr", "ar": "الميرار", "fa": "میرار", "ur": "میرار", "ml": "മിരാർ", "am": "ሚራር"},
  "Phase 2": {"zh-Hans": "第二层", "zh-Hant": "第二層", "vi": "Lớp 2", "ar": "الطبقة ٢", "fa": "لایه ۲", "ur": "تہہ ۲", "ml": "ഘട്ടം 2", "am": "ደረጃ 2"},
  "sediment": {"zh-Hans": "沉积物", "zh-Hant": "沉積物", "vi": "trầm tích", "ar": "رواسب", "fa": "رسوب", "ur": "تلچھٹ", "ml": "അവസാദം", "am": "ደለል"},
  "residues": {"zh-Hans": "残留物", "zh-Hant": "殘留物", "vi": "cặn còn lại", "ar": "بقايا", "fa": "باقی‌مانده‌ها", "ur": "باقیات", "ml": "അവശിഷ്ടങ്ങൾ", "am": "ቀሪዎች"},
  "starch grains": {"zh-Hans": "淀粉粒", "zh-Hant": "澱粉粒", "vi": "hạt tinh bột", "ar": "حبيبات نشا", "fa": "دانه‌های نشاسته", "ur": "نشاستے کے ذرات", "ml": "അന്നജ കണികകൾ", "am": "የስታርች ቅንጣቶች"},
  "micrographs": {"zh-Hans": "显微照片", "zh-Hant": "顯微照片", "vi": "ảnh hiển vi", "ar": "صور مجهرية", "fa": "ریزنگاره‌ها", "ur": "خردبینی تصاویر", "ml": "സൂക്ഷ്മചിത്രങ്ങൾ", "am": "ማይክሮ ፎቶዎች"},
  "archaeologists": {"zh-Hans": "考古学家", "zh-Hant": "考古學家", "vi": "nhà khảo cổ học", "ar": "علماء الآثار", "fa": "باستان‌شناسان", "ur": "ماہرینِ آثارِ قدیمہ", "ml": "പുരാവസ്തു ഗവേഷകർ", "am": "አርኪኦሎጂስቶች"},
  "custodians": {"zh-Hans": "守护者", "zh-Hant": "守護者", "vi": "người gìn giữ", "ar": "الأوصياء", "fa": "نگهبانان", "ur": "محافظین", "ml": "സംരക്ഷകർ", "am": "ጠባቂዎች"},
  "contamination": {"zh-Hans": "污染", "zh-Hant": "污染", "vi": "sự nhiễm bẩn", "ar": "تلوث", "fa": "آلودگی", "ur": "آلودگی", "ml": "മലിനീകരണം", "am": "ብክለት"},
  "striations": {"zh-Hans": "擦痕", "zh-Hant": "擦痕", "vi": "vết xước", "ar": "خدوش", "fa": "خط‌های سایش", "ur": "خراشیں", "ml": "ചാലുകൾ", "am": "ጭረቶች"},
  "polish": {"zh-Hans": "光泽", "zh-Hant": "光澤", "vi": "độ bóng", "ar": "لمعان", "fa": "براقی", "ur": "چمک", "ml": "മിനുസം", "am": "አንጸባራቂነት"}
};

/* ---------- criteria held back from the rubric ----------
   Metacognition is written into this file — a continuum row, an explanation at
   every level, and a marked phrase in every worked example — but it is not being
   assessed for now. Rather than delete that work, it is withdrawn here: the key
   below is removed from CRITERIA, so it is not a colour on the wall, not a row
   in the rubric and not a tappable mark, and its phrases are unwrapped so the
   modelled reflection still reads as ordinary prose in each example.

   Everything is applied in this one place, so all seven pages that read this
   file agree without any of them knowing about it. To bring metacognition back,
   empty this list. */
const HIDDEN_CRITERIA = ["meta"];

for (const key of HIDDEN_CRITERIA) {
  const at = CRITERIA.findIndex(c => c.key === key);
  if (at > -1) CRITERIA.splice(at, 1);
  delete CONTINUUM[key];
  if (typeof EXPLANATIONS !== "undefined")
    for (const lv of Object.values(EXPLANATIONS)) delete lv[key];
  if (typeof EARLY_EXPLANATIONS !== "undefined")
    for (const lv of Object.values(EARLY_EXPLANATIONS)) delete lv[key];
  // Unwrap {key|phrase} to phrase, leaving every other criterion's marks intact.
  const unwrap = new RegExp("\\{" + key + "\\|([^}]*)\\}", "g");
  for (const set of [typeof EXAMPLES !== "undefined" ? EXAMPLES : null,
                     typeof EARLY_EXAMPLES !== "undefined" ? EARLY_EXAMPLES : null])
    if (set) for (const k of Object.keys(set))
      if (typeof set[k] === "string") set[k] = set[k].replace(unwrap, "$1");

  // Teaching prose that only makes sense when the criterion is being assessed is
  // wrapped in <!--key--> … <!--/key--> where it is written. Drop it with the
  // criterion, so no page explains a colour that is no longer on the wall.
  const prose = new RegExp("<!--" + key + "-->[\\s\\S]*?<!--\\/" + key + "-->", "g");
  const strip = obj => { for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (typeof v === "string") obj[k] = v.replace(prose, "");
    else if (v && typeof v === "object") strip(v);
  } };
  for (const o of [typeof FRAME !== "undefined" ? FRAME : null,
                   typeof BUILD !== "undefined" ? BUILD : null,
                   typeof VERBS !== "undefined" ? VERBS : null]) if (o) strip(o);
}

// Clear the markers themselves, whether or not their criterion survived. They
// are inert in HTML, but the Word and PDF builders lay this prose out as text,
// where a stray <!--meta--> would print.
for (const o of [typeof FRAME !== "undefined" ? FRAME : null,
                 typeof BUILD !== "undefined" ? BUILD : null,
                 typeof VERBS !== "undefined" ? VERBS : null]) {
  if (!o) continue;
  (function clean(obj){ for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (typeof v === "string") obj[k] = v.replace(/<!--\/?[a-z]+-->/g, "");
    else if (v && typeof v === "object") clean(v);
  } })(o);
}
