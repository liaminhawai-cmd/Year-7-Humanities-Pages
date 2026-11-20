/* =======================================================================
   CONTENT BLOCK for the Cai Lun wall: Ancient China lesson 2.1, Sources and
   significance. This is the ONLY place the wall text lives.

   A hidden teacher-screen wall, like history/hannibal: not in the site map,
   noindex, opened by its address. Students work on paper; the teacher shows
   the worked example here. The ladder is the same text as page 2 of the
   paper sheet (lesson-2-1-sources-and-significance.docx in the private
   repository, built by lesson-2-1-build/build_lesson21.js). Change both
   together.

   Cai Lun is the worked example only. The students' own paragraph is on
   Zhang Qian, on paper, and Zhang Qian is deliberately not on this screen.
   Neither figure nor either source is in any assessment.

   Three marks, matching the paper legend: the source (solid underline), his
   significance (double underline), and the link words that join them (a
   box). Level 6 is the near-miss: it has no link.
   ======================================================================= */

const WALL = {
  id: "hist-cai-lun",
  title: "Cai Lun",
  expected: "Level 7",
  inquiry: "What does Source A show, and how does that tell us why Cai Lun mattered?",
  foot: "<b>Source:</b> a woodcut from the Tiangong Kaiwu by Song Yingxing, printed in 1637 (public domain, via Wikimedia Commons). The rows are the Ancient China Source Analysis Rubric's origin row and significance bands, word for word."
};

const FACTS = [
  ["The person", "Cai Lun (about 50 to 121 CE) was an official at the court of the Eastern Han emperors."],
  ["Before paper", "Chinese writing was mostly on strips of bamboo or wood, which were heavy, or on silk, which was expensive."],
  ["105 CE", "He showed the emperor a way of making paper from tree bark, hemp, old rags and fishing nets. The emperor rewarded him, and his paper came into wide use."],
  ["Argued over", "Archaeologists have found paper from the 200s BCE, centuries before him. Historians now say he improved papermaking rather than invented it."],
  ["The records", "Most of what we know about him comes from a history written about 300 years after he died."],
  ["Afterwards", "Paper later spread from China to the rest of the world. In China he was worshipped as the god of papermaking."]
];

const CRITERIA = [
  { key:"origin",       row:"Origin, features &amp; purpose", name:"Source",       glyph:"■",
    ink:"#1f5fa8", lamp:"#7fb2e8", underline:"solid" },
  { key:"significance", row:"Historical significance",       name:"Significance", glyph:"✦",
    ink:"#9b2f22", lamp:"#f0968a", underline:"double" },
  { key:"link",         row:"The link",                      name:"Link words",   glyph:"▢",
    ink:"#1f2a30", lamp:"#e6e2d8", underline:"solid", box:true },
];

const LEVELS = ["Level 6","Level 7","Level 8","Level 9"];

const EXAMPLES = {
"Level 6":
`{origin|Source A is a picture of people making paper.} {origin|It was made a long time after Cai Lun lived, so it is not a primary source about him.} Cai Lun was {significance|important because he made paper}.`,
"Level 7":
`{origin|Source A is a woodcut from a Chinese book about how things are made, printed in 1637.} {origin|It shows a worker dipping a screen into a vat of pulp to make a sheet of paper.} {origin|Its purpose was to explain a skill.} {link|This shows that} {significance|paper was still made by hand in China 1,500 years after Cai Lun}, {link|so} {significance|the craft he improved lasted}. He also mattered because {significance|paper was cheaper than silk and lighter than bamboo, so more people could write things down}.`,
"Level 8":
`{origin|Source A is a woodcut printed in 1637, in a Ming dynasty book that explained how useful things were made.} {origin|It shows a worker dipping a screen into a vat of pulp, the step that turns pulp into a sheet, with finished sheets stacked on the table behind him.} {origin|Because it was made 1,500 years after Cai Lun, it cannot show his own workshop.} {origin|The steps in the book begin with cutting bamboo, but the old records say Cai Lun used tree bark, hemp, rags and fishing nets.} {link|So the source is evidence of} {significance|his legacy, not his method}: {significance|the craft he improved was still an everyday industry in the Ming dynasty}. {link|That legacy is why} {significance|he is significant. Paper replaced heavy bamboo strips and costly silk, so governments could keep more records, and later it made printed books possible}.`,
"Level 9":
`{origin|Source A is a woodcut from the Tiangong Kaiwu, a Ming dynasty book of 1637 written to explain how useful things were made.} {origin|It records the papermaking of its own time: a worker dipping a screen into a vat of pulp, in a process that begins with cutting bamboo.} {origin|That makes it a primary source for Ming papermaking but only a late, indirect source for Cai Lun, who used bark, hemp, rags and nets.} {link|What it can prove is} {significance|continuity: the method he reported in 105 CE grew into a craft still practised across China fifteen centuries later}. {link|What it cannot settle is} {significance|whether he invented paper at all}. {significance|Archaeologists have found paper from the 200s BCE, and the main written account of him dates from about 300 years after his death.} {significance|So his significance is contested but strong: he improved and spread paper rather than inventing it}, {link|and the source fits that reading, because} {significance|it shows a process that kept changing long after him, not one fixed by a single inventor}.`
};

const EXPLANATIONS = {
"Level 6": {
  origin:       "Identifies the type of source and that it is not from his time.",
  significance: "Identifies one basic reason he was important.",
  link:         "None yet. The source and his significance sit side by side and never meet."
},
"Level 7": {
  origin:       "Identifies origin, what the picture shows, and its purpose.",
  significance: "More than one reason, and an effect that lasted.",
  link:         "Joins what the source shows to why he mattered."
},
"Level 8": {
  origin:       "Describes the source and what being made later stops it showing.",
  significance: "Explains significance as legacy and change, with evidence.",
  link:         "Says exactly what the source is evidence of, and what follows."
},
"Level 9": {
  origin:       "Explains the source: primary for one thing, late and indirect for another.",
  significance: "A judgement that treats his significance as contested, and weighs the evidence.",
  link:         "Separates what the source can prove from what it cannot settle."
}
};

/* Verbatim from the Year 7 Ancient China Source Analysis Rubric. The
   significance bands name Qin Shi Huang because the rubric does. The link has
   no rubric row of its own, so the rubric pane shows only the first two. */
const CONTINUUM = {
origin:{
 "Level 6":"I can identify different types of historical sources.",
 "Level 7":"I can identify the origin, content features and purpose of historical sources.",
 "Level 8":"I can describe the origin, content features and purpose of historical sources.",
 "Level 9":"I can explain the origin, content features and purpose of historical sources."},
significance:{
 "Level 6":"Identifies one basic reason why Qin Shi Huang (or another figure/event) was important. Provides simple statements such as “He changed China” or “He was powerful.”",
 "Level 7":"Describes more than one reason for Qin Shi Huang’s significance (e.g., unification, administration reforms). Shows some awareness that significance relates to impact or change. Begins to explain short-term or long-term effects. Uses some evidence from the sources or prior knowledge.",
 "Level 8":"Clearly explains why Qin Shi Huang was significant, using historical criteria such as: Impact on people, Long-term legacy, Changes caused, Perspectives (positive and negative). Shows awareness that significance can be interpreted differently by different groups (e.g., Han writers vs. modern historians). Uses evidence purposefully to support explanations.",
 "Level 9":"Makes a clear, insightful judgment about Qin Shi Huang’s significance and justifies it with multiple pieces of evidence. Evaluates significance through several criteria: Perspectives of different groups (ancient vs modern). Shows understanding that significance is complex, debatable, and changes over time, Analyses both strengths and limitations of Qin’s legacy (e.g., nation-building vs. oppression). Weighs up different historical interpretations and explains why one interpretation may be more convincing."},
};

const SHEET_IMAGE = "cai-lun-papermaking-1637.jpg";

const SOURCES = [
 {
  id: "woodcut",
  tab: "Source A",
  kind: "image",
  file: SHEET_IMAGE,
  ar:   "800/1089",
  alt:  "A black and white woodcut. A worker stands at a brick vat of pulp, dipping a flat screen into it with both hands. Behind him a table holds a stack of finished sheets. Two wooden buckets stand to the left, and a pipe pours water into a tub at the bottom right. Four Chinese characters run down the top right corner.",
  missing: "The picture did not load.<br>Keep <b>cai-lun-papermaking-1637.jpg</b> in the same folder as this page.",
  cite: "Source A: woodcut from the Tiangong Kaiwu (The Exploitation of the Works of Nature) by Song Yingxing, printed in 1637, Ming dynasty. Papermaking, step 3 of 5. Public domain; image from Wikimedia Commons.",
  whole: { label:"The whole woodcut",
    text:"Printed in a Ming dynasty book that explained how useful things were made, about 1,500 years after Cai Lun. It shows how paper was made in 1637, not how he made it." },
  /* Percentages of the 800x1089 file, read off the image. Check them again if
     the file is replaced. */
  hotspots: [
   { x:37, y:54, w:44, h:32, label:"The worker at the vat",
     text:"He dips a screen into a brick vat of pulp. When he lifts it, a thin layer of pulp stays on the screen and becomes one sheet of paper." },
   { x:9, y:40, w:31, h:11, label:"Finished sheets",
     text:"A stack of sheets on the table. This was a workshop making paper in quantity, not one person's experiment." },
   { x:85, y:10, w:10, h:25, label:"The label",
     text:"Four characters naming the step, roughly \"swirling the pulp into the screen\". The book labels every step, because its purpose was to teach a process." },
   { x:76, y:81, w:22, h:17, label:"Water piped in",
     text:"A pipe pours water into a tub. Papermaking needs a great deal of water, which is why workshops were built beside streams." }
  ]
 }
];
const SOURCE_PANEL = Object.assign({}, SOURCES[0]);
const HOTSPOTS = SOURCES[0].hotspots;

const EARLY_LEVELS = [];
const EARLY_EXAMPLES = {};
const EARLY_EXPLANATIONS = {};

/* Victorian Curriculum 2.0, History, "Using historical sources": S03 for the
   source, S04 (sources as evidence for significance) for the significance and
   the link, in CRITERIA order. VC 2.0 bands two years at a time. */
const VC = {
 "Level 6": [["VC2HH6S03","describe the features, content and context of historical sources"],
             ["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"]],
 "Level 7": [["VC2HH8S03","explain the features, content and context of historical sources"],
             ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"]],
 "Level 8": [["VC2HH8S03","explain the features, content and context of historical sources"],
             ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"]],
 "Level 9": [["VC2HH10S03","analyse the purpose, features, content and context of historical sources"],
             ["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"]]
};
const VC_NOTE = "The rows are the Ancient China Source Analysis Rubric, word for word. The significance bands name Qin Shi Huang because the rubric does; they are marked the same way for any person. The link words have no rubric row of their own: they are how the source becomes evidence.";

/* The same one-liners as the paper sheet's page 2. */
const BUMP = {
 "Level 6": { new:"Names the source and one reason he mattered. Nothing joins them yet." },
 "Level 7": { new:"Origin and purpose. What the source shows is joined to why he mattered." },
 "Level 8": { new:"Says what the source cannot show. Significance explained as legacy and change." },
 "Level 9": { new:"A judgement. Weighs what the source can prove against a contested claim." }
};

const GLOSS = {
 tier2: {
   "vat":"a big container for liquid",
   "pulp":"a soft wet mash of fibres",
   "craft":"a skill of making things by hand",
   "continuity":"something carrying on without a break",
   "indirect":"not straight from the thing itself"
 },
 tier3: {
   "primary source":"Was created at the time being studied. It shows the view of people who saw the events first-hand.",
   "secondary source":"Was created after the time being studied. It is made by people who combine primary sources to explain the past.",
   "origin":"Who made a source, when and where.",
   "purpose":"Why a source was made.",
   "evidence":"Information from a source used to support a claim.",
   "significance":"How important something was, how many people it affected and for how long.",
   "legacy":"Something from the past that still affects us today.",
   "contested":"Argued about. Historians disagree about a contested claim.",
   "dynasty":"A line of rulers usually a family line. In China a dynasty ended when a rebellion or a war removed the family from power.",
   "woodcut":"A picture printed from a carved block of wood."
 }
};

/* One line per row in CRITERIA order; the link has none. */
const KID = {
 "Level 6": { band:"Level 6", lines:["I can say what kind of source it is.", "I can say one reason a person was important.", ""] },
 "Level 7": { band:"Level 7", lines:["I can say where a source came from, what it shows and why it was made.", "I can give more than one reason a person mattered, including one that lasted.", ""] },
 "Level 8": { band:"Level 8", lines:["I can describe a source and say what it cannot show.", "I can explain a person's significance using legacy and change, with evidence.", ""] },
 "Level 9": { band:"Level 9", lines:["I can explain what a source is good evidence for, and what it is not.", "I can make a judgement about a person's significance and show that it is argued over.", ""] }
};
