/* =======================================================================
   CONTENT BLOCK for the Ancient Egypt WAGOLL family.
   This is the ONLY place the wall text lives.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.

   ------------------------------------------------------------------
   DRAFT. The worked examples have been written and levelled but have not
   been taught yet. The curriculum block below is real: the "Using
   historical sources" descriptors do not change with the topic, so unit 1
   (GS73) and this unit meet the same ones. Everything else is new.

   This unit is deliberately a WRITTEN source, where unit 1 was an object.
   The bump-it-up page reads SOURCE_PANEL.kind and lays itself out
   accordingly, so the same tool carries both.
   ======================================================================= */

const WALL = {
  id: "hist-herodotus",
  title: "A Greek explains Egypt",
  expected: "Year 7",
  inquiry: "How much can we learn about ancient Egypt from a visitor who could not read Egyptian?",
  foot: "<b>Source:</b> Herodotus, <i>The Histories</i>, Book II, composed c. 430 BCE. English wording adapted from the public-domain translation of George Rawlinson (1858&ndash;60); sentence length and spelling modernised for classroom reading, and the four passages are drawn from sections 5, 14, 19 and 99. <b>The words are a translation of a translation of a copy</b> — no manuscript survives from Herodotus' own lifetime — and the wall treats that as part of the source, not as a footnote to it."
};

const FACTS = [
  ["Ancient text", "Book II of Herodotus' Histories, a Greek prose account written about 430 BCE."],
  ["The author", "Herodotus of Halicarnassus, a Greek who travelled in Egypt when it was a province of the Persian empire."],
  ["The distance", "He wrote roughly two thousand years after the pyramids at Giza were built. He was as far from them as we are from him."],
  ["The language", "He did not read Egyptian. Everything he was told, he was told through interpreters."],
  ["What survives", "No copy from his lifetime. The text reaches us through medieval manuscripts, then a nineteenth-century English translation."],
  ["Known limits", "He says himself where his own observation stops. Modern historians accept his geography far more readily than his chronology."]
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
`This source is {source|writing by Herodotus}, a Greek who {source|went to Egypt} about 2,450 years ago. He says Egypt is {source|a gift of the river}. Each year the Nile {context|flooded the fields and left rich soil behind}. Herodotus tells us {evidence|he saw some of this himself}. He also says {evidence|the rest was told to him}. The source is {judge|useful for how farming worked}, but it {judge|cannot prove what happened before he came}.`,

"Year 6":
`The source is a written account by Herodotus. He was {source|a Greek traveller who visited Egypt around 430 BCE}. He calls Egypt {source|a gift of the river}. Every summer the Nile {context|rose for about a hundred days}. It {context|covered the fields and left rich soil}. When it fell, {context|farmers sowed seed straight into the wet ground}. Herodotus says {evidence|which parts he saw for himself}. He also says {evidence|which parts Egyptians told him}. His account is {judge|useful evidence for Egyptian farming}, but {judge|he could not read Egyptian}.`,

"Year 7":
`The ancient source is a written account of Egypt by {source|Herodotus, a Greek historian who travelled there about 430 BCE}. The modern source is {source|an English translation of what he wrote}. His purpose was to {source|explain Egypt to Greeks who had never seen it}. In ancient Egypt, {context|the Nile flooded each summer and left fertile silt across the fields}. Because of that flood, {context|farmers could sow without ploughing, and the harvest depended on the river rather than on rain}. Herodotus interprets the whole country as {evidence|a gift of the river}. He also separates {evidence|what he saw from what Egyptians told him}. His account is {judge|very useful for how flooding and farming worked}, because {judge|the yearly flood is confirmed by other evidence}. It cannot tell us {judge|what Egyptians believed, because he could not read their writing}.`,

"Year 8":
`Herodotus wrote this account {source|about 430 BCE, roughly two thousand years after the pyramids at Giza were built}. He wrote it {source|in Greek, for Greek readers}. His purpose was {source|to record what he had found out about a country his audience knew only by report}. Egypt was then {context|a province of the Persian empire}, which is {context|how a Greek traveller could move through it at all}. The flood he describes {context|arrived every summer and turned a strip of desert into the richest farmland in the Mediterranean}. Herodotus interprets the land itself as {evidence|made by the river}, and he marks the point where {evidence|his own observation stops and Egyptian testimony begins}. Modern historians accept {evidence|his flooding and his farming}, but they treat {evidence|his Egyptian history as second-hand}. The account is {judge|reliable where it describes what he could see}, and I would ask {judge|who his informants were, and whether they told a foreigner what he wanted to hear}.`,

"Year 9":
`This account survives as {source|a Greek prose work compiled around 430 BCE and copied by hand for centuries afterwards}. Herodotus wrote {source|for an audience that had never entered Egypt}, and that shapes both what he explains and what he assumes. Egypt was then {context|under Persian rule, and Greek travellers moved through it as outsiders in a country whose written language they could not read}. The annual flood {context|deposited silt along the valley and allowed a kind of farming that did not depend on rainfall}. Herodotus explains Egypt itself as {evidence|the product of its river, an interpretation that makes geography the cause of a civilisation}. He also states outright {evidence|where his evidence changes from observation to hearsay}. Because the flood cycle is {judge|independently confirmed by Egyptian records and by later measurement}, that part of the account is strong. His reports of the Egyptian past are {judge|weaker, because they reached him through interpreters and through informants with reasons of their own}.`,

"Year 10":
`Herodotus is an ancient author, but we meet him through {source|a manuscript tradition and a modern translation, each of which has already made choices for us}. His explicit evidence is {source|what he saw of the flood and of Egyptian farming}. His implicit argument is that {source|a landscape can produce a way of life}, and it is addressed {source|to Greeks who defined themselves against the peoples they described}. The account reflects {context|a Persian-ruled Egypt open to Greek travellers}, and it reveals what its author valued: {context|inquiry, direct observation, and honesty about the boundary between the two}. Historians accept the flooding and the farming {evidence|because independent Egyptian records and later measurements converge with them}. They discount much of his Egyptian chronology {evidence|because it rests on informants he had no way of checking}. Their readings differ largely because {evidence|they weigh his declared method against his demonstrable errors differently}. Overall the account is {judge|strong evidence for the geography of the valley and for how a Greek understood it, and weak evidence for the Egyptian past itself}. Its greatest strength is {judge|that he names the limits of his own knowledge}; its limits are {judge|his dependence on interpreters, his distance in time, and the interests of the people who informed him}.`
};

const EXPLANATIONS = {
"Grade 5": {
  source:   "Names the source, its author and one thing he claims.",
  context:  "Places the account in the yearly flood, with a consequence attached.",
  evidence: "Notices that the account has two kinds of evidence in it.",
  judge:    "Gives one use and one limit."
},
"Year 6": {
  source:   "Identifies the type of source, the author, roughly when, and quotes his claim.",
  context:  "Describes the flood cycle and connects it to how farmers worked.",
  evidence: "Recognises that Herodotus himself distinguishes seen from heard.",
  judge:    "Recognises usefulness for farming and names a limit in the author, not the topic."
},
"Year 7": {
  source:   "Separates the ancient text from the modern translation, then identifies origin, content and purpose.",
  context:  "Outlines the flood and explains what it made possible.",
  evidence: "Describes his central interpretation and his own split between observation and report.",
  judge:    "Concludes that outside confirmation makes the farming useful, then bounds it with a limit that follows from the author."
},
"Year 8": {
  source:   "Describes the distance in time, the language, the audience and the purpose together.",
  context:  "Describes Persian rule as the condition that made the visit possible, and the flood as the condition that made Egypt rich.",
  evidence: "Explains the debate by connecting each modern position to the kind of evidence behind it.",
  judge:    "Distinguishes reliable from unreliable within one source, then asks a targeted question about informants."
},
"Year 9": {
  source:   "Explains the transmission — composed, copied, translated — and which audience shaped the telling.",
  context:  "Explains outsider status and the language barrier as context, not just background.",
  evidence: "Analyses his interpretation as a causal claim about geography, and his method statement as evidence in itself.",
  judge:    "Identifies the flood as a stronger claim than the Egyptian past, and explains why."
},
"Year 10": {
  source:   "Analyses explicit content, implicit argument, purpose and the audience's stake in it.",
  context:  "Uses context to explain the author's values: inquiry, observation, and stated limits.",
  evidence: "Exposes why historians accept one part and discount another.",
  judge:    "Weighs a strength against three limitations and separates two claims of different strength."
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

const SHEET_IMAGE = "";

/* A written source rather than an object. The paragraphs are the passage; each
   HOTSPOT names the exact phrase inside them to light up. */
const SOURCE_PANEL = {
  kind: "text",
  paragraphs: [
    "The Egypt to which the Greeks sail is land the Egyptians have gained, a gift of the river.",
    "They gather their harvest with less labour than any other people. They do not break the ground with a plough or a hoe. They wait until the river has come up of itself and watered the fields, and when it has gone down again each man sows his own ground and turns his pigs into it. When the seed has been trodden in by the pigs, he waits for the harvest.",
    "The Nile begins to rise at the summer solstice and keeps rising for a hundred days. Then it falls again and runs low all winter, until the next solstice. About why it does this, no Egyptian, Libyan or Greek I have spoken with could tell me anything.",
    "Up to this point what I have written is what I saw, what I judged, and what I found out by asking. From here on I set down the accounts the Egyptians gave me, as I heard them."
  ],
  cite: "Herodotus, <i>Histories</i>, Book II, sections 5, 14, 19 and 99 (c. 430 BCE). Wording adapted from George Rawlinson's public-domain translation of 1858&ndash;60.",
  whole: { label:"The whole passage",
    text:"Four short extracts, in the order Herodotus wrote them. The last one is the one historians reach for first." }
};

const HOTSPOTS = [
 { mark:"a gift of the river", label:"The claim",
   text:"His whole argument in five words: the country exists because the river made it. This is a claim about cause, not a description — and it is the line he is still quoted for, 2,450 years later." },
 { mark:"with less labour than any other people", label:"A comparison, not a measurement",
   text:"He has no way of measuring Egyptian labour against anyone else's. He is comparing Egypt with the Greek farming he grew up with, and the comparison is doing the work." },
 { mark:"for a hundred days", label:"A number he could check",
   text:"The flood cycle is the part of the account that later measurement confirms. This is why historians trust his geography far more than his history." },
 { mark:"as I heard them", label:"He marks his own limit",
   text:"Herodotus tells you exactly where his evidence changes character. Almost no ancient writer does this. It is both the most useful line in the passage and a warning about everything after it." }
];


/* ---------------------------------------------------------------------------
   The rungs below Grade 5. Two bands, matching the way the Victorian
   Curriculum bands the primary years.
   --------------------------------------------------------------------------- */

const EARLY_LEVELS = ["Foundation to Level 2", "Levels 3 and 4"];

const EARLY_EXAMPLES = {
 "Foundation to Level 2":
`This is old writing. A man wrote it. His name was {source|Herodotus}. He says {context|the river makes the land good}. He {source|saw some of it}. He {evidence|was told the rest}.`,

 "Levels 3 and 4":
`Herodotus was a Greek writer. He {source|went to Egypt a long time ago}. He wrote that the land was {source|a gift of the river}. The Nile {context|flooded every year}. It {context|left good soil, so farmers could grow food}. Herodotus {evidence|saw some things himself}. Other things were {evidence|told to him by Egyptians}.`
};

const EARLY_EXPLANATIONS = {
 "Foundation to Level 2": {
   source:  "Identifies the source and its author, and one thing he did (VC2HH2S03).",
   context: "Identifies a perspective — what the writer says about the river (VC2HH2S04). The wall colours this green; at this band the curriculum calls it perspectives, not context." },
 "Levels 3 and 4": {
   source:  "Identifies the features and content of the source, and when it was made (VC2HH4S03).",
   context: "Describes what people in the past did, using evidence from the source (VC2HH4S04).",
   evidence:"Describes that the source contains two different kinds of account (VC2HH4S05)." }
};

/* The Victorian Curriculum 2.0 descriptor each rung is working inside, from
   the History sub-strand "Using historical sources", Foundation to Level 10.
   These are about the skill, not the topic, so they are identical across all
   three units — that is correct, not a copy-paste slip.

   This is the SECOND layer: CONTINUUM above is Kew High School's own learning
   continuum. See CURRICULUM-CHECK.md for where the two diverge. */
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
   new:"You say who wrote it and what he says about the river.",
   background:"That someone wrote these words down, a very long time ago, and that we still have them." },
 "Levels 3 and 4": {
   new:"You say when he wrote and where he went, and you notice he got his information two different ways.",
   background:"That a writer can see some things and be told others, and that those are not the same kind of evidence." },
 "Grade 5": {
   new:"Three things switch on at once: you place the source in its time, you judge what it is useful for, and you say what it cannot prove.",
   background:"That a source can be strong evidence for one thing and weak evidence for another at the same time." },
 "Year 6": {
   new:"You quote his actual claim, and you notice that he himself separates what he saw from what he was told.",
   background:"That Herodotus was a foreigner in Egypt and could not read Egyptian writing." },
 "Year 7": {
   new:"You separate the ancient text from the modern translation, and you say who he was writing for.",
   background:"That the pyramids were already two thousand years old when he arrived — he is closer to us than to them." },
 "Year 8": {
   new:"You attach each modern position to the evidence behind it, and you ask who told him what.",
   background:"That Egypt was ruled by Persia at the time, and that everything he was told came through an interpreter." },
 "Year 9": {
   new:"You explain how the text reached us, and you rank which parts of it you would trust.",
   background:"What independent confirmation means, and that his method statement is itself a piece of evidence." },
 "Year 10": {
   new:"You read the argument underneath the description, and you explain why historians split on where to trust him.",
   background:"That Greek writing about other peoples was also writing about Greeks, and that a translation is already an interpretation." }
};

/* Tier 3 = the subject's own words, which need a definition.
   Tier 2 = general academic words, which need a plainer synonym. */
const GLOSS = {
 tier3: {
  "Herodotus":"A Greek writer, born about 484 BCE, who travelled widely and wrote the first surviving work of history in Greek.",
  "the Nile":"The river that runs the length of Egypt. Almost everyone in ancient Egypt lived within a few kilometres of it.",
  "silt":"Fine mud carried by a river and left behind when the water goes down. It makes soil rich.",
  "solstice":"The longest or shortest day of the year. The summer solstice is when the Nile flood used to begin.",
  "flood":"When a river rises over its banks and covers the land beside it.",
  "sow":"To scatter seed on ground so that it grows.",
  "harvest":"Gathering in the crop when it is ready.",
  "hearsay":"Something you were told by someone else, rather than saw for yourself.",
  "interpreter":"Someone who turns one language into another as people speak.",
  "interpreters":"People who turn one language into another as people speak.",
  "informant":"A person who tells a writer or researcher what they know.",
  "informants":"People who tell a writer or researcher what they know.",
  "manuscript":"A copy of a text written out by hand, before printing existed.",
  "chronology":"The order and dates of when things happened.",
  "translation":"A version of a text put into another language.",
  "Persian empire":"The empire that ruled Egypt in Herodotus' lifetime, governed from what is now Iran.",
  "BCE":"Before the Common Era. 430 BCE is about 2,450 years ago.",
  "civilisation":"A large society with cities, writing and organised government."
 },
 tier2: {
  "ancient":"very old",
  "evidence":"proof · signs",
  "account":"the story someone gives of what happened",
  "interpret":"work out what it means",
  "interpretation":"what someone thinks it means",
  "reliable":"can be trusted",
  "converge":"point the same way",
  "independent":"separate · not connected",
  "purpose":"the reason it was made",
  "context":"the time and place around it",
  "audience":"the people it was written for",
  "explicit":"said openly",
  "implicit":"not said, but meant",
  "discount":"give little weight to",
  "identify":"name · point out",
  "describe":"say what it is like",
  "analyse":"break it down and examine it",
  "evaluate":"judge how good it is",
  "supports":"backs up",
  "suggests":"hints at",
  "confirmed":"shown to be true by something else"
 }
};

/* The curriculum descriptors said the way a student would say them. */
const KID = {
 "Foundation to Level 2": { band:"Foundation to Level 2", lines:[
   "I can say who wrote it.",
   "I can say one thing the writer says."]},
 "Levels 3 and 4": { band:"Levels 3 and 4", lines:[
   "I can say what the source is and when it was written.",
   "I can say what the people in it were doing.",
   "I can say that the writer got his information in two different ways."]},
 "Grade 5": { band:"Levels 5 and 6", lines:[
   "I can say what the source is, and when and where it comes from.",
   "I can say what the source is useful for.",
   "I can say what people at the time did and cared about.",
   "I can explain why people tell the story in different ways."]},
 "Year 6": { band:"Levels 5 and 6", lines:[
   "I can say what the source is, and when and where it comes from.",
   "I can say what the source is useful for.",
   "I can say what people at the time did and cared about.",
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
