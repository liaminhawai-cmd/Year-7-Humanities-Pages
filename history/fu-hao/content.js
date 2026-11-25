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

   RANGE. Foundation to Level 10, at the teacher's request (November 2026), in
   the Rome walls' shape (history/army). The China rubric runs Level 6 to 9 only,
   so Level 5 and Level 10 quote the Ancient Australia source analysis continuum
   (its Grade 5 and Year 10 bands, which match the China rubric word for word at
   Levels 6 to 9). Foundation to Level 4 have no rubric wording anywhere: their
   lines in KID are plain descriptions written for this wall. The Level 10
   comparison uses the oracle bones, from the "Shang dynasty" article below.
   ======================================================================= */

const WALL = {
  id: "hist-fu-hao",
  title: "Fu Hao's owl",
  expected: "Level 7",
  inquiry: "What does Source A tell us about social groups in Shang China?",
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

const LEVELS = ["Level 6","Level 7","Level 8","Level 9","Level 10"];

/* The class sees every rung and its rubric rows, but only the worked example of
   these rungs. The worked examples of Levels 7 to 10 stay behind the curtain until
   the teacher types "hierarchy" on the page (the TEACHER UNLOCK block in
   bump-it-up.html, adapted from history/army). The words are still in this
   file, so it stops browsing, not a determined student. */
const STUDENT_LEVELS = ["Foundation to Level 2", "Levels 3 and 4", "Level 5", "Level 6"];

const EXAMPLES = {
"Level 6":
`{source|Source A is a bronze wine vessel shaped like an owl}. {source|It is a primary source because it was made at the time, about 1200 BCE}. {context|It was found in the tomb of Fu Hao, who was married to the king of the Shang dynasty}. {judge|It is more useful for learning about rich and powerful people than about ordinary people}.`,

"Level 7":
`{source|Source A is a bronze zun, a wine vessel shaped like an owl, found in 1976 in the tomb of Fu Hao at Anyang}. {source|It is a primary source because it was made and used in the Shang dynasty, about 1200 BCE}. Its features include {source|folded wings, two legs and a tail that works as a third leg, with patterns all over}. {source|Its purpose was to hold wine}. {context|Fu Hao was a wife of King Wu Ding, and she was also a general and a priestess}, so {context|Bronze vessels like this were used in ceremonies to the ancestors by the king's court and nobles}, so {context|the vessel belonged to someone at the very top of Shang society}. {judge|It is useful for showing how rich and skilled the ruling class was}, {judge|but it cannot tell us how ordinary labourers lived}.`,

"Level 8":
`{source|Source A is one of a pair of bronze zun, wine vessels shaped like owls, found in 1976 in the untouched tomb of Fu Hao at Yinxu, near Anyang}. {source|Fu Hao's name is cast inside it, which tells us who it was made for}, so {source|it is a primary source from about 1200 BCE}. Its features were planned with great care: {source|the owl's tail forms a third leg, small creatures sit on the lid, and patterns of cicadas, a snake and dragons cover the bronze}. {source|Its purpose was to hold wine}. {context|Fu Hao was a wife of King Wu Ding who also led armies and served as a high priestess}, and {context|her tomb held 468 bronzes, more than 700 jades and sixteen sacrificed people}. {context|Shang rules set how many bronze vessels a noble of each rank could own}, so {context|a tomb this full of bronze puts her at the very top of the hierarchy, just below the king}. {judge|That makes it strong evidence of the ruling family's wealth and skill}, {judge|but weak evidence about the artisans who made it and the labourers below them}.`,

"Level 9":
`{source|Source A is one of a pair of owl-shaped bronze zun from the tomb of Fu Hao, a royal tomb at Yinxu found untouched in 1976}. {source|Because it was excavated where it was buried and has her name cast inside, its origin is unusually secure: a primary source from about 1200 BCE, made for one named person}. {source|Its design, a tail that becomes a third leg, a lid crowded with small creatures and a skin of cast patterns, was meant to impress as well as to hold wine}. {context|Fu Hao was a wife of King Wu Ding who commanded armies and acted as a high priestess, and she was buried with 468 bronzes, over 700 jades and sixteen sacrificed people}; {context|the vessel comes from a society in which rank was measured in bronze, and a ruling family could command metal, the skilled work of artisans and even the lives of war captives}. {judge|It is highly reliable evidence about that family's wealth and power}, but {judge|a historian must be careful generalising from it: Fu Hao was exceptional, a woman with a military and religious power that was rare}, and {judge|it tells us nothing directly about the artisans and labourers further down}. {judge|Even the owl needs care, because owls seem to have been honoured in the Shang period and only later became a bad omen, so the meaning of the shape depends on its time}.`,

"Level 10":
`{source|Source A is one of a pair of owl-shaped bronze wine vessels from the tomb of Fu Hao at Yinxu, excavated untouched in 1976, with her name cast inside}. {source|Its explicit meaning is plain: a costly vessel for wine used in ceremonies}. {source|Its implicit meaning lies in the design: a tail turned into a third leg, a lid crowded with creatures and a skin of cast patterns announce skill and expense, so it was made to display status as much as to pour wine}. {context|It was made in a society where rules set how many bronze vessels a noble of each rank could own, so the people who made it and paid for it valued rank, ritual and the ancestors}. {context|Burying it with a royal wife who led armies and served as a priestess, beside sixteen sacrificed people, shows a ruling family that could command metal, labour and lives}. {judge|Archaeologists compare the tomb with the oracle bones, which name Fu Hao in 170 to 180 inscriptions: the weapons and ritual vessels match what the inscriptions say she did in war and ritual, so each source makes the other more reliable}. {judge|Yet both were made by and for the court, so neither speaks for the labourers and captives at the bottom of Shang society}.`
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
},
"Level 10": {
  source:  "Analyses explicit and implicit meaning: what the design was meant to say about its owner.",
  context: "Explains the values of the people who made and paid for it: rank, ritual and the ancestors.",
  judge:   "Compares a second source to judge reliability, then names the limit both sources share."
}
};

/* Levels 6 to 9: verbatim from the Ancient China Source Analysis Rubric (rows 1, 2
   and 5 of the booklet's teacher assessment). Levels 5 and 10: verbatim from the
   Ancient Australia continuum (history/batman, Grade 5 and Year 10), because the
   China rubric stops at 6 and 9. Do not paraphrase these. */
const CONTINUUM = {
source:{
 "Level 5":"I can name a historical source and a feature I notice.",
 "Level 6":"I can identify different types of historical sources.",
 "Level 7":"I can identify the origin, content features and purpose of historical sources.",
 "Level 8":"I can describe the origin, content features and purpose of historical sources.",
 "Level 9":"I can explain the origin, content features and purpose of historical sources.",
 "Level 10":"I can analyse the origin, explicit and implicit meaning, and purpose of historical sources."},
context:{
 "Level 5":"I can say where or when a source comes from.",
 "Level 6":"I can identify the historical context of a source.",
 "Level 7":"I can describe the historical context of a source.",
 "Level 8":"I can describe the historical context of sources to determine the perspectives of people from the past and recognise different points of view.",
 "Level 9":"I can explain the historical context of sources.",
 "Level 10":"I can explain historical context to identify the motivations, values and attitudes of a source’s creator."},
judge:{
 "Level 5":"I can say one thing a source can and cannot tell us.",
 "Level 6":"I can recognise that some historical sources are more useful than others.",
 "Level 7":"I can draw conclusions about the usefulness of sources.",
 "Level 8":"I can compare and contrast historical sources and ask questions about their accuracy, usefulness and reliability.",
 "Level 9":"I can compare and contrast historical sources and identify their accuracy, usefulness and reliability.",
 "Level 10":"I can compare and contrast sources and analyse their accuracy, usefulness and reliability."},
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

const EARLY_LEVELS = ["Foundation to Level 2", "Levels 3 and 4", "Level 5"];
const EARLY_EXAMPLES = {
"Foundation to Level 2":
`{source|This is a bronze pot shaped like an owl}. I can see {source|wings}, {source|feet} and {source|a lid}. {context|It belonged to Fu Hao, the wife of a king in China long ago}. {judge|It shows that she was rich}.`,

"Levels 3 and 4":
`{source|Source A is a bronze pot for wine, shaped like an owl}. {source|It was found in a tomb in China in 1976}. It has {source|wings and a lid with small animals on it}. {context|It belonged to Fu Hao. She was married to the king and led armies}. {judge|It shows that her family was rich and powerful}.`,

"Level 5":
`{source|Source A is a bronze wine vessel shaped like an owl}. A feature I notice is {source|its tail, which touches the ground like a third leg}. {context|It comes from China, about 1200 BCE}. {judge|It can tell us Fu Hao's family owned fine bronze}, {judge|but not how ordinary people lived}.`
};
const EARLY_EXPLANATIONS = {
"Foundation to Level 2": {
  source:  "Says what the source is and names things that can be seen.",
  context: "Says who it belonged to.",
  judge:   "Says one thing it shows."
},
"Levels 3 and 4": {
  source:  "Describes the source and says where and when it was found.",
  context: "Says who owned it and what she did.",
  judge:   "Says what it shows, and gives a reason."
},
"Level 5": {
  source:  "Names the source and one feature.",
  context: "Says where and when it comes from.",
  judge:   "Says one thing it can tell us and one thing it cannot."
}
};

/* Victorian Curriculum 2.0, History, "Using historical sources": S03 for features,
   content and context, S04 for the value of sources as evidence. */
const VC = {
 "Level 5": [["VC2HH6S03","describe the features, content and context of historical sources"],
             ["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"]],
 "Level 6": [["VC2HH6S03","describe the features, content and context of historical sources"],
             ["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"]],
 "Level 7": [["VC2HH8S03","explain the features, content and context of historical sources"],
             ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"]],
 "Level 8": [["VC2HH8S03","explain the features, content and context of historical sources"],
             ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"]],
 "Level 9": [["VC2HH10S03","analyse the purpose, features, content and context of historical sources"],
             ["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"]],
 "Level 10": [["VC2HH10S03","analyse the purpose, features, content and context of historical sources"],
             ["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"]]
};
const VC_NOTE = "Levels 6 to 9 are the Ancient China Source Analysis Rubric, word for word: the same three rows that Tasks 1, 2 and 4 of the booklet mark. The China rubric stops at 6 and 9, so Level 5 and Level 10 quote the Ancient Australia source analysis continuum, also word for word. Foundation to Level 4 have no rubric wording: their lines are plain descriptions written for this wall. The codes are Victorian Curriculum 2.0.";

/* new: what this rung adds. background: facts the rung uses that are not in the photo. */
const BUMP = {
 "Foundation to Level 2": { new:"Say what the source is, something you can see, and who owned it.",
   background:"Fu Hao was the wife of a king in China long ago." },
 "Levels 3 and 4": { new:"Say where it was found, describe what it looks like, and say what it shows.",
   background:"It was found in 1976 in Fu Hao's tomb. She was married to the king and also led armies." },
 "Level 5": { new:"Name the source and a feature, say where and when it comes from, and one thing it can and cannot tell us.",
   background:"It comes from Anyang in China, from about 1200 BCE." },
 "Level 6": { new:"Say what kind of source it is, one fact about its owner, and one thing it is useful for.",
   background:"Fu Hao was married to King Wu Ding of the Shang dynasty." },
 "Level 7": { new:"Origin, features and purpose; who Fu Hao was; and what the source cannot show.",
   background:"Found in 1976 in Fu Hao's tomb at Anyang. Fu Hao was a general and a priestess as well as a wife of the king. The Shang court and nobles used bronze vessels in ceremonies to the ancestors." },
 "Level 8": { new:"Evidence for the origin, the tomb as context, and what it is strong and weak evidence for.",
   background:"Her name is cast inside the vessel. Her tomb held 468 bronzes, more than 700 jades and sixteen sacrificed people. Rules set how many bronze vessels a noble of each rank could own." },
 "Level 9": { new:"Why the origin is secure, and the limits: one exceptional owner, the missing majority, changing meanings.",
   background:"Most people sacrificed in Shang rituals were war captives. Owls seem to have been honoured in the Shang period and only later became a bad omen." },
 "Level 10": { new:"Explicit and implicit meaning, the values of the people who made it, and a second source compared to judge reliability.",
   background:"Oracle bones name Fu Hao in 170 to 180 inscriptions. Archaeologists say the weapons and ritual vessels in her tomb match what the inscriptions record of her wars and rituals." }
};

const GLOSS = {
 tier2: {
   "cast":"made by pouring hot metal into a mould",
   "excavated":"dug up carefully by archaeologists",
   "exceptional":"very unusual",
   "omen":"a sign of what will happen",
   "generalising":"saying something is true of everyone from one example",
   "explicit":"said openly and clearly",
   "implicit":"suggested without being said",
   "corroborates":"backs up",
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
   "oracle bones":"Bones and shells that Shang rulers had cracked with heat, to ask questions of their ancestors and gods.",
   "inscriptions":"Words carved or cut into something hard, such as bone, stone or metal."
 }
};

/* One line per row, in CRITERIA order. */
const KID = {
 "Foundation to Level 2": { band:"Foundation to Level 2", lines:["I can say what a source is and something I see in it.", "I can say who it belonged to.", "I can say one thing it shows."] },
 "Levels 3 and 4": { band:"Levels 3 and 4", lines:["I can describe a source and say where it was found.", "I can say who owned it and what they did.", "I can say what a source shows, and why."] },
 "Level 5": { band:"Level 5", lines:["I can name a source and a feature I notice.", "I can say where or when a source comes from.", "I can say one thing a source can and cannot tell us."] },
 "Level 6": { band:"Level 6", lines:["I can say what kind of source it is.", "I can say one thing about the time it comes from.", "I can say one thing the source is good for."] },
 "Level 7": { band:"Level 7", lines:["I can say where a source came from, what is in it and why it was made.", "I can describe what was happening and who owned it.", "I can say what a source is good for, and what it cannot tell me."] },
 "Level 8": { band:"Level 8", lines:["I can back up a source's origin with evidence and describe its features in detail.", "I can use the context to work out whose point of view a source shows.", "I can say what a source is strong evidence for and what it is weak evidence for."] },
 "Level 9": { band:"Level 9", lines:["I can explain why a source's origin is secure and what it was designed to do.", "I can explain the kind of society that made a source.", "I can explain the limits of a source before I generalise from it."] },
 "Level 10": { band:"Level 10", lines:["I can explain what a source says, what it suggests without saying, and why it was made.", "I can use the context to explain the values of the people who made a source.", "I can compare two sources to judge how reliable each one is."] }
};
