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

/* ink   — the colour on paper, all four above 4.5:1 on the wall's cream
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
];

const LEVELS = ["Grade 5","Year 6","Year 7","Year 8","Year 9","Year 10"];

const EXAMPLES = {
"Grade 5":
`GS73 is a {source|stone source} found at Madjedbebe. I can see {source|deep grooves} and {source|shiny patches}. It comes from {context|ancient Australia} and may have been used for grinding. Researchers {evidence|disagree about exactly how old its soil layer is}. The stone is {judge|useful for showing tool use}, but it {judge|cannot tell us the user’s name}.`,

"Year 6":
`GS73 is a {source|stone tool}: a {source|broken piece of a grinding stone} from Madjedbebe, on Mirarr Country. Photographs show {source|deep grooves and shiny, polished patches}. People were living there {context|many thousands of years ago}, and they {context|used stones like this one to grind their food}. Some archaeologists believe {evidence|the layer is about 65,000 years old}. Others believe {evidence|the soil has moved, so the date is not certain}. The stone is {judge|useful evidence that people were grinding materials}, but it {judge|cannot tell us which plants they were grinding}.`,

"Year 7":
`The ancient object is GS73, {source|a broken piece of a sandstone grinding stone} excavated at {source|Madjedbebe, on Mirarr Country}. The modern source is {source|a set of photographs published by Hayes and her team in 2022}. Their purpose was to {source|record the wear and argue that people ground food there for a very long time}. In ancient Australia, {context|grinding allowed people to eat hard seeds and tough plants}. It also shows {context|they understood the resources around them}. Hayes and her team {evidence|interpret this as plant processing}, because the stone carries {evidence|deep grooves, microscopic polish and 41 starch grains}. Other researchers {evidence|question how old the layer really is}. GS73 is {judge|very useful for studying how people prepared food}, because {judge|its shape, its wear and its plant traces all agree}, but it cannot tell us {judge|which plant was ground}.`,

"Year 8":
`GS73 is {source|a broken millstone} recovered from {source|Phase 2, one of the oldest occupation layers at Madjedbebe}. Hayes and her team {source|photographed it and examined it under a microscope}. They published the images so that {source|other researchers could inspect the same evidence and judge their interpretation}. Madjedbebe is {context|a rock shelter on Mirarr Country that was occupied for many thousands of years}. The grinding marks show that {context|people were already preparing plant foods early in Aboriginal history}. Hayes explains {evidence|the wear and the plant residues as signs of seed grinding}. Clarkson argues that {evidence|the artefacts remained where they were dropped, which supports the early date}. Williams points to {evidence|termite activity and moving sediment, which would make that date less reliable}. The {judge|shape, the microscopic wear, the starch and the plant chemicals all point in the same direction}, so the grinding interpretation is well supported. Even so, I would ask whether {judge|the residues could be contaminated, and whether the layer could have shifted}.`,

"Year 9":
`GS73 is {source|material evidence, excavated from a recorded layer called Phase 2}. Hayes and her team published {source|photographs, microscope images and laboratory results together}. They did this because {source|one form of evidence alone would not convince a scientific audience}. The study belongs to {context|wider research into the deep history of Aboriginal Australia}, and it was carried out {context|with the permission of Mirarr custodians}. Hayes analyses {evidence|the grooves, the polish and the plant residues as evidence of seed processing}. Clarkson analyses {evidence|the condition of the site and the dating to defend the early chronology}. Williams uses {evidence|signs of termite disturbance and sediment movement to challenge it}. Because the wear and the residues agree independently, {judge|grinding is the interpretation I would trust most}. The exact plant and the precise age are {judge|weaker, because both depend on preservation and on how stable the deposit is}.`,

"Year 10":
`GS73 is an ancient artefact, but we meet it only through a modern scientific publication. Its explicit evidence is {source|the recorded wear and the plant residues preserved on the stone}. Its implicit argument is that {source|grinding technology in Australia is far older than earlier accounts allowed}, and that argument is aimed {source|at other archaeologists}. The investigation reflects {context|modern laboratory testing carried out with Mirarr custodians}. It also reveals what those researchers value: {context|testing claims, seeking permission, and stating honestly how certain they are}. Hayes and Clarkson accept the early chronology {evidence|because several independent records converge on it}. Williams gives {evidence|more weight to termite disturbance and sediment movement}. Their interpretations differ because {evidence|they evaluate the formation of the site differently}. Overall, GS73 is {judge|strong evidence for grinding, but only qualified evidence for a precise age}. Its main strength is {judge|that separate tests agree}; its limits are {judge|the unidentified plant, the modern plastic contamination, and the ongoing argument about the layer}.`
};

const EXPLANATIONS = {
"Grade 5": {
  source:   "Names the source and two visible features: ‘stone source’, ‘deep grooves’ and ‘shiny patches’. Origin and purpose are not yet developed.",
  context:  "Places GS73 broadly in ‘ancient Australia’, but gives little detail about life or practice.",
  evidence: "Notices disagreement about the date without describing the competing arguments.",
  judge:    "Gives one use and one limit: tool use is visible, but the user cannot be named."
},
"Year 6": {
  source:   "‘Archaeological artefact’, ‘sandstone grinding-stone fragment’ and ‘grooves and polish’ identify type and features; purpose is not yet explained.",
  context:  "‘A very early period of Aboriginal occupation’ identifies the context and connects it to repeated tool use.",
  evidence: "Recognises two positions on the date, but does not yet describe the evidence behind them.",
  judge:    "Recognises usefulness for grinding and a clear limit: the material processed cannot yet be identified."
},
"Year 7": {
  source:   "Separates the ancient object from the modern 2022 record, then identifies origin, features and why the figure was created.",
  context:  "Outlines how grinding supported plant preparation and knowledge of local resources.",
  evidence: "Describes the plant-processing interpretation and the separate challenge to the earliest date.",
  judge:    "Concludes that converging methods make plant processing useful evidence, then bounds the claim with two limits."
},
"Year 8": {
  source:   "Describes the object and explains how the modern figure lets readers inspect its form, wear and residues.",
  context:  "Describes Madjedbebe, Mirarr Country and grinding within deep Aboriginal history.",
  evidence: "Explains the debate by connecting each interpretation to a different evidence base.",
  judge:    "Compares independent evidence for function, then asks targeted reliability questions about contamination and layer movement."
},
"Year 9": {
  source:   "Explains why the peer-reviewed figure combines several records, and which audience and argument it addresses.",
  context:  "Explains the deep-history research context and the role of Mirarr custodial permission.",
  evidence: "Analyses each interpretation through its evidence: wear and residue, site integrity and dating, or termite and sediment movement.",
  judge:    "Identifies grinding as a stronger claim than exact plant or exact age, and explains why."
},
"Year 10": {
  source:   "Analyses explicit evidence, the publication’s implicit argument, its purpose and its scientific audience.",
  context:  "Uses context to explain the creators’ values: empirical testing, custodial permission and careful qualification.",
  evidence: "Exposes why interpretations differ — researchers give different weight to converging records and site-formation evidence.",
  judge:    "Weighs a strength, three limitations, and two claims that carry different degrees of certainty."
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
  blurb: "The four steps are the four criteria, in the order you write them. Reading down the wall is the same as writing the paragraph.",
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
      reteach:"Slow it down. Read the phrase on its own, without the sentence around it, and ask what job it does:<ul><li>Does it <b>name or describe the source</b>, or say why it was made? → Origin, features &amp; purpose.</li><li>Does it place the source in <b>a time, a place or a practice</b>? → Historical context.</li><li>Does it say <b>what someone thinks</b>, or give the evidence they think it from? → Historical interpretations.</li><li>Does it say <b>how useful or how limited</b> the source is? → Accuracy, usefulness &amp; reliability.</li></ul>" },

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

/* The Victorian Curriculum 2.0 descriptor each rung is working inside, from
   the History sub-strand "Using historical sources", Foundation to Level 10.

   This is the SECOND layer. The wording in CONTINUUM above is Kew High
   School's own learning continuum and is what the school reports against;
   these are the curriculum descriptors that sit underneath it. They are not
   the same thing and they do not line up perfectly — CURRICULUM-CHECK.md sets
   out where they diverge. Showing both is deliberate. */
const VC = {
 "Foundation to Level 2": [
  ["VC2HH2S03","identify the features and content of sources"],
  ["VC2HH2S04","identify perspectives of people in the past or present in sources"]],
 "Levels 3 and 4": [
  ["VC2HH4S03","identify the features and content of historical sources"],
  ["VC2HH4S04","describe perspectives of people from the past based on evidence from primary sources"],
  ["VC2HH4S05","describe different historical interpretations"]],
 "Grade 5": [
  ["VC2HH6S03","describe the features, content and context of historical sources"],
  ["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"],
  ["VC2HH6S05","describe historical perspectives and identify beliefs, values and attitudes of people and groups based on evidence from primary sources"],
  ["VC2HH6S06","explain different historical interpretations"]],
 "Year 6": [
  ["VC2HH6S03","describe the features, content and context of historical sources"],
  ["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"],
  ["VC2HH6S05","describe historical perspectives and identify beliefs, values and attitudes of people and groups based on evidence from primary sources"],
  ["VC2HH6S06","explain different historical interpretations"]],
 "Year 7": [
  ["VC2HH8S03","explain the features, content and context of historical sources"],
  ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"],
  ["VC2HH8S05","explain the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
  ["VC2HH8S06","analyse historical interpretations and debates"]],
 "Year 8": [
  ["VC2HH8S03","explain the features, content and context of historical sources"],
  ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"],
  ["VC2HH8S05","explain the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
  ["VC2HH8S06","analyse historical interpretations and debates"]],
 "Year 9": [
  ["VC2HH10S03","analyse the purpose, features, content and context of historical sources"],
  ["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"],
  ["VC2HH10S05","analyse the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
  ["VC2HH10S06","evaluate historical interpretations and debates"]],
 "Year 10": [
  ["VC2HH10S03","analyse the purpose, features, content and context of historical sources"],
  ["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"],
  ["VC2HH10S05","analyse the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
  ["VC2HH10S06","evaluate historical interpretations and debates"]]
};
const VC_NOTE = "The row wording on this wall is Kew High School's own learning continuum, which runs level by level. The codes are Victorian Curriculum 2.0, which bands History two years at a time — so the two years inside a band share a code. The school continuum runs about one level behind the curriculum through the middle of the ladder: at Level 8 it asks students to \u2018describe\u2019 where VC2HH8S03 asks them to \u2018explain\u2019, and to \u2018explain\u2019 interpretations where VC2HH8S06 asks them to \u2018analyse\u2019. The two converge again by Level 10. See CURRICULUM-CHECK.md.";

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
   new:"You name the type of source, and you give both positions on its age.",
   background:"That archaeologists date the layer an object sat in, not the object itself." },
 "Year 7": {
   new:"You separate the ancient object from the modern record of it, and you say why that record was made.",
   background:"That a scientific figure is made by researchers for a purpose, and that 65,000 years is the modelled age of the layer." },
 "Year 8": {
   new:"You attach each interpretation to the evidence behind it, and you ask reliability questions.",
   background:"That Clarkson and Williams disagree about how the site formed, and that residues can be contaminated by modern material." },
 "Year 9": {
   new:"You explain why several kinds of evidence together are stronger than one, and you rank your claims.",
   background:"What independent evidence means, and that what survives in the ground depends on preservation." },
 "Year 10": {
   new:"You read the argument the publication is making underneath its evidence, and you explain why the experts differ.",
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

/* The curriculum descriptors said the way a student would say them, in the
   same "I can ..." shape as the learning continuum. The formal wording and
   the codes stay in VC above, for the teacher. */
const KID = {
 "Foundation to Level 2": { band:"Foundation to Level 2", lines:[
   "I can name the things I can see on the source.",
   "I can say what the person was doing with it."]},
 "Levels 3 and 4": { band:"Levels 3 and 4", lines:[
   "I can name what I can see, and say where it was found.",
   "I can say what the people were doing, and point to the part that shows it.",
   "I can say that people who study the past do not all agree."]},
 "Grade 5": { band:"Levels 5 and 6", lines:[
   "I can say what the source is, and when and where it comes from.",
   "I can say what the source is useful for.",
   "I can say what people at the time believed and cared about.",
   "I can explain why people tell the story in different ways."]},
 "Year 6": { band:"Levels 5 and 6", lines:[
   "I can say what the source is, and when and where it comes from.",
   "I can say what the source is useful for.",
   "I can say what people at the time believed and cared about.",
   "I can explain why people tell the story in different ways."]},
 "Year 7": { band:"School continuum", lines:[
   "I can say where a source came from, what is in it, and why it was made.",
   "I can say what was happening at the time.",
   "I can describe the different ways people explain the past.",
   "I can say how useful a source is."]},
 "Year 8": { band:"School continuum", lines:[
   "I can describe where a source came from, what is in it, and why it was made.",
   "I can describe what was happening at the time.",
   "I can explain the different ways people explain the past, and what they argue about.",
   "I can compare sources and ask whether they are accurate and reliable."]},
 "Year 9": { band:"School continuum", lines:[
   "I can explain where a source came from, what is in it, and why it was made.",
   "I can explain what was happening that made someone create it.",
   "I can pull each explanation apart and find the evidence behind it.",
   "I can compare sources and say how accurate and reliable they are."]},
 "Year 10": { band:"School continuum", lines:[
   "I can work out what a source says openly, and what it argues underneath.",
   "I can use the time and place to explain what the maker believed and valued.",
   "I can judge the different explanations and say why they differ.",
   "I can compare sources and analyse how accurate and reliable they are."]}
};
