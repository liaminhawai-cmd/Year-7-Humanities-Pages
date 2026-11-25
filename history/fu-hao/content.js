/* =======================================================================
   CONTENT BLOCK for the Fu Hao owl zun wall: Ancient China lesson 2.2,
   Social groups. This is the ONLY place the wall text lives.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.

   ------------------------------------------------------------------
   WHAT IT REHEARSES. The source-analysis rows that Tasks 1, 2 and 4 of the
   Source Analysis Booklet mark, and that no other China wall carries: origin,
   features and purpose; historical context; accuracy, usefulness and
   reliability. Task 1 asks those questions of a bronze bell; this wall asks
   them of a different bronze, so the thinking transfers and the bell's
   answers do not. The vessel is in no assessment.

   WHY THIS SOURCE. The 2.2 lesson's own source is an ox-shaped zun, but no
   record for that exact vessel could be checked. The Fu Hao owl zun is the
   same kind of object (an animal-shaped bronze wine vessel) with a secure,
   checkable record. Every fact on this wall is in the English Wikipedia
   articles "Fu Hao owl zun" (revision 1360676011) and "Fu Hao" (revision
   1382990820), checked against the Chinese article 妇好鸮尊 (revision
   92691681). The Shang context cards come from the English article "Shang
   dynasty" (revision 1384194042). Nothing else is claimed. See SOURCE-NOTICE.md.

   Colours, glyphs and underlines are the Ancient Australia wall's (history/
   batman), so a student who knows that wall reads this one the same way.
   ======================================================================= */

const WALL = {
  id: "hist-fu-hao",
  title: "Fu Hao's owl",
  expected: "Level 7",
  inquiry: "What is Source A, and what does it tell us about who held power in Shang China?",
  foot: "<b>Source:</b> a bronze owl-shaped zun from the tomb of Fu Hao, Shang dynasty, about 1200 BCE, now in the National Museum of China (photo: Gary Todd, CC0). Facts from the Wikipedia articles \"Fu Hao owl zun\" and \"Fu Hao\" (CC BY-SA 4.0). The rows are the Ancient China Source Analysis Rubric, word for word."
};

const FACTS = [
  ["The object", "One of a pair of bronze zun, wine vessels shaped like owls, about 46 cm tall. One is in the National Museum of China, the other in the Henan Museum."],
  ["Where it was found", "In 1976, in the tomb of Fu Hao at Yinxu, near Anyang. Robbers had broken into many Shang royal tombs long ago, but hers was untouched."],
  ["Fu Hao", "A wife of King Wu Ding who also led armies as a general and served as a high priestess. Her name is cast inside the vessel's mouth. She died about 1200 BCE."],
  ["Her tomb", "468 bronzes, more than 700 jade objects, oracle bones, six dogs and sixteen sacrificed people."],
  ["Shang China", "The Shang dynasty ruled much of northern China from about 1600 to 1046 BCE. Yinxu was its last capital."],
  ["The king", "At the top. He led the army into battle and was the high priest, asking the ancestors questions through oracle bones."],
  ["Below the king", "Royal relatives and nobles held estates and paid tribute to the king. Officials managed artisans, archers and labourers. War captives were sacrificed in rituals."],
  ["Bronze and rank", "The court and nobles needed bronze vessels for ceremonies to the ancestors. Rules set how many vessels a noble of each rank could own."]
];

const CRITERIA = [
  { key:"source",  row:"Origin, features &amp; purpose",        name:"Origin, features &amp; purpose",        glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"context", row:"Historical context",                    name:"Historical context",                    glyph:"▲",
    ink:"#357a46", lamp:"#74c288", underline:"dashed" },
  { key:"judge",   row:"Accuracy, usefulness &amp; reliability", name:"Accuracy, usefulness &amp; reliability", glyph:"◆",
    ink:"#744f91", lamp:"#bda0d8", underline:"double" },
];

const LEVELS = ["Level 6","Level 7","Level 8","Level 9"];

/* The class sees only these rungs. Levels 7 to 9 stay behind the curtain until
   the teacher types 7F on the page (the TEACHER UNLOCK block in
   bump-it-up.html, copied from history/army). The words are still in this
   file, so it stops browsing, not a determined student. */
const STUDENT_LEVELS = ["Level 6"];

const EXAMPLES = {
"Level 6":
`{source|Source A is a bronze wine vessel shaped like an owl}. {source|It is a primary source because it was made at the time}. {context|It belonged to Fu Hao, who was married to the king}. {judge|It is useful because it shows that rich people owned beautiful things}.`,

"Level 7":
`{source|Source A is a bronze zun, a wine vessel shaped like an owl, found in 1976 in the tomb of Fu Hao at Anyang}. {source|It is a primary source because it was made and used in the Shang dynasty, about 1200 BCE}. Its features include {source|folded wings, two legs and a tail that works as a third leg, with patterns all over}. {source|Its purpose was to hold wine}. {context|Fu Hao was a wife of King Wu Ding, and she was also a general and a priestess}, so {context|Bronze vessels like this were used in ceremonies to the ancestors by the king's court and nobles}, so {context|the vessel belonged to someone at the very top of Shang society}. {judge|It is useful for showing how rich and skilled the ruling class was}, {judge|but it cannot tell us how ordinary labourers lived}.`,

"Level 8":
`{source|Source A is one of a pair of bronze zun, wine vessels shaped like owls, found in 1976 in the untouched tomb of Fu Hao at Yinxu, near Anyang}. {source|Fu Hao's name is cast inside it, which tells us who it was made for}, so {source|it is a primary source from about 1200 BCE}. Its features were planned with great care: {source|the owl's tail forms a third leg, small creatures sit on the lid, and patterns of cicadas, a snake and dragons cover the bronze}. {source|Its purpose was to hold wine}. {context|Fu Hao was a wife of King Wu Ding who also led armies and served as a high priestess}, and {context|her tomb held 468 bronzes, more than 700 jades and sixteen sacrificed people}. {context|Shang rules set how many bronze vessels a noble of each rank could own}, so {context|a tomb this full of bronze puts her at the very top of the hierarchy, just below the king}. {judge|That makes it strong evidence of the ruling family's wealth and skill}, {judge|but weak evidence about the artisans who made it and the labourers below them}.`,

"Level 9":
`{source|Source A is one of a pair of owl-shaped bronze zun from the tomb of Fu Hao, a royal tomb at Yinxu found untouched in 1976}. {source|Because it was excavated where it was buried and has her name cast inside, its origin is unusually secure: a primary source from about 1200 BCE, made for one named person}. {source|Its design, a tail that becomes a third leg, a lid crowded with small creatures and a skin of cast patterns, was meant to impress as well as to hold wine}. {context|Fu Hao was a wife of King Wu Ding who commanded armies and acted as a high priestess, and she was buried with 468 bronzes, over 700 jades and sixteen sacrificed people}; {context|the vessel comes from a society in which rank was measured in bronze, and a ruling family could command metal, the skilled work of artisans and even the lives of war captives}. {judge|It is highly reliable evidence about that family's wealth and power}, but {judge|a historian must be careful generalising from it: Fu Hao was exceptional, a woman with a military and religious power that was rare}, and {judge|it tells us nothing directly about the artisans and labourers further down}. {judge|Even the owl needs care, because owls seem to have been honoured in the Shang period and only later became a bad omen, so the meaning of the shape depends on its time}.`
};

const EXPLANATIONS = {
"Level 6": {
  source:  "Identifies the type of source and that it is from the time.",
  context: "Identifies one fact about the time and the owner.",
  judge:   "Recognises one thing the source is useful for."
},
"Level 7": {
  source:  "Identifies origin (where and when it was found), features and purpose.",
  context: "Describes who Fu Hao was and where that puts the vessel in society.",
  judge:   "Draws a conclusion about usefulness, then names what it cannot show."
},
"Level 8": {
  source:  "Describes origin with evidence (the name cast inside), and the features in detail.",
  context: "Uses the tomb to describe how wealthy and powerful its owner was.",
  judge:   "Weighs what it is strong evidence for against what it is weak evidence for, and why."
},
"Level 9": {
  source:  "Explains why its origin is secure, and that the design had a purpose beyond use.",
  context: "Explains what kind of society could make and bury such an object.",
  judge:   "Explains the limits: one exceptional owner, the missing majority, and meanings that change over time."
}
};

/* Verbatim from the Ancient China Source Analysis Rubric (rows 1, 2 and 5 of the
   booklet's teacher assessment). Do not paraphrase these. */
const CONTINUUM = {
source:{
 "Level 6":"I can identify different types of historical sources.",
 "Level 7":"I can identify the origin, content features and purpose of historical sources.",
 "Level 8":"I can describe the origin, content features and purpose of historical sources.",
 "Level 9":"I can explain the origin, content features and purpose of historical sources."},
context:{
 "Level 6":"I can identify the historical context of a source.",
 "Level 7":"I can describe the historical context of a source.",
 "Level 8":"I can describe the historical context of sources to determine the perspectives of people from the past and recognise different points of view.",
 "Level 9":"I can explain the historical context of sources."},
judge:{
 "Level 6":"I can recognise that some historical sources are more useful than others.",
 "Level 7":"I can draw conclusions about the usefulness of sources.",
 "Level 8":"I can compare and contrast historical sources and ask questions about their accuracy, usefulness and reliability.",
 "Level 9":"I can compare and contrast historical sources and identify their accuracy, usefulness and reliability."},
};

/* Which question in the booklet each row is marked from, as the rubric maps them. */
const TASK_MAP = {
  source:  "Task 1: Source 1: Q1&ndash;3 &middot; Source 2: Q4 &middot; Task 2, Jade Suit: Q1, Q2",
  context: "Task 2, Jade Suit: Q3",
  judge:   "Task 4"
};

const SHEET_IMAGE = "fu-hao-owl-zun.jpg";

const SOURCES = [
 {
  id: "owl",
  tab: "Source A",
  kind: "image",
  file: SHEET_IMAGE,
  ar:   "960/1440",
  alt:  "A green-brown bronze vessel shaped like an owl, seen from the side. Small animal figures sit on its lid, a curved handle runs down its back, a spiral marks its folded wing, and its tail reaches the ground as a third leg beside two thick legs. Patterns cover the whole surface.",
  missing: "The picture did not load.<br>Keep <b>fu-hao-owl-zun.jpg</b> in the same folder as this page.",
  cite: "Source A: bronze owl-shaped zun with the inscription Fu Hao, Shang dynasty, about 1200 BCE, from the tomb of Fu Hao, Yinxu, Anyang. National Museum of China. Photo: Gary Todd, CC0, via Wikimedia Commons.",
  whole: { label:"The whole vessel",
    text:"A wine vessel about 46 cm tall, cast in bronze in the Shang dynasty and buried with Fu Hao. Her name is cast inside its mouth, which this photo cannot show." },
  /* Percentages of the 960x1440 file, read off the image region by region.
     Check them again if the file is replaced. */
  hotspots: [
   { x:16, y:7, w:37, h:33, label:"The lid",
     text:"The lid lifts off. Small creatures, a bird and a dragon-like animal, are cast on top of it. Someone designed this to be looked at, not only used." },
   { x:12, y:38, w:18, h:24, label:"The handle",
     text:"A curved handle down the owl's back, for lifting the vessel and pouring the wine." },
   { x:59, y:51, w:23, h:22, label:"The folded wing",
     text:"A spiral marks the owl's folded wing. The records describe patterns of cicadas, a snake and dragons cast over the body." },
   { x:12, y:76, w:22, h:21, label:"The tail: a third leg",
     text:"The owl's tail reaches the ground and works as a third leg, so the vessel stands on three supports, like a tripod." },
   { x:52, y:74, w:27, h:19, label:"The legs",
     text:"Two thick legs and the tail hold up a vessel about 46 cm tall, full of wine. It was made to stand on a table or an altar." }
  ]
 }
];
const SOURCE_PANEL = Object.assign({}, SOURCES[0]);
const HOTSPOTS = SOURCES[0].hotspots;

const EARLY_LEVELS = [];
const EARLY_EXAMPLES = {};
const EARLY_EXPLANATIONS = {};

/* Victorian Curriculum 2.0, History, "Using historical sources": S03 for features,
   content and context, S04 for the value of sources as evidence. */
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
const VC_NOTE = "The rows are the Ancient China Source Analysis Rubric, word for word: the same three rows that Tasks 1, 2 and 4 of the booklet mark. The codes are Victorian Curriculum 2.0.";

/* new: what this rung adds. background: facts the rung uses that are not in the photo. */
const BUMP = {
 "Level 6": { new:"Say what kind of source it is, one fact about its owner, and one thing it is useful for.",
   background:"Fu Hao was married to King Wu Ding of the Shang dynasty." },
 "Level 7": { new:"Origin, features and purpose; who Fu Hao was; and what the source cannot show.",
   background:"Found in 1976 in Fu Hao's tomb at Anyang. Fu Hao was a general and a priestess as well as a wife of the king. The Shang court and nobles used bronze vessels in ceremonies to the ancestors." },
 "Level 8": { new:"Evidence for the origin, the tomb as context, and what it is strong and weak evidence for.",
   background:"Her name is cast inside the vessel. Her tomb held 468 bronzes, more than 700 jades and sixteen sacrificed people. Rules set how many bronze vessels a noble of each rank could own." },
 "Level 9": { new:"Why the origin is secure, and the limits: one exceptional owner, the missing majority, changing meanings.",
   background:"Most people sacrificed in Shang rituals were war captives. Owls seem to have been honoured in the Shang period and only later became a bad omen." }
};

const GLOSS = {
 tier2: {
   "cast":"made by pouring hot metal into a mould",
   "excavated":"dug up carefully by archaeologists",
   "exceptional":"very unusual",
   "omen":"a sign of what will happen",
   "generalising":"saying something is true of everyone from one example",
   "tribute":"goods or payments given to a ruler to show loyalty",
   "estates":"large areas of land owned by one person or family",
   "captives":"people taken prisoner in a war",
   "labourers":"people who do hard work with their hands"
 },
 tier3: {
   "primary source":"Was created at the time being studied. It shows the view of people who saw the events first-hand.",
   "secondary source":"Was created after the time being studied. It is made by people who combine primary sources to explain the past.",
   "origin":"Who made a source, when and where.",
   "purpose":"Why a source was made.",
   "hierarchy":"A system that ranks people from the top to the bottom, from the most powerful to the least powerful.",
   "dynasty":"A line of rulers usually a family line. In China a dynasty ended when a rebellion or a war removed the family from power.",
   "zun":"A Chinese bronze vessel for holding wine, often made in the shape of an animal.",
   "bronze":"A metal made by melting copper and tin together. It was costly, so bronze objects belonged to rulers and nobles.",
   "priestess":"A woman who leads religious ceremonies.",
   "high priest":"The person who leads the most important religious ceremonies.",
   "artisans":"Skilled workers who make things by hand, such as bronze casters.",
   "nobles":"Powerful families ranked just below the ruler.",
   "rank":"A person's level in a hierarchy.",
   "ancestors":"Family members who lived and died long ago. The Shang made offerings to them.",
   "oracle bones":"Bones and shells that Shang rulers had cracked with heat, to ask questions of their ancestors and gods."
 }
};

/* One line per row, in CRITERIA order. */
const KID = {
 "Level 6": { band:"Level 6", lines:["I can say what kind of source it is.", "I can say one thing about the time it comes from.", "I can say one thing the source is good for."] },
 "Level 7": { band:"Level 7", lines:["I can say where a source came from, what is in it and why it was made.", "I can describe what was happening and who owned it.", "I can say what a source is good for, and what it cannot tell me."] },
 "Level 8": { band:"Level 8", lines:["I can back up a source's origin with evidence and describe its features in detail.", "I can use the context to work out whose point of view a source shows.", "I can say what a source is strong evidence for and what it is weak evidence for."] },
 "Level 9": { band:"Level 9", lines:["I can explain why a source's origin is secure and what it was designed to do.", "I can explain the kind of society that made a source.", "I can explain the limits of a source before I generalise from it."] }
};
