// Writes history/terracotta/content.js: the 3.1 bump it up wall, the kneeling archer.
//   node tools/gen_terracotta_wall.js
// Rows 1 and 5 (origin; accuracy, usefulness and reliability) and the curriculum codes are copied
// from history/fu-hao/content.js; the perspectives row from history/china/content.js, all word for
// word. Edit here and rerun; do not hand-edit the generated file.
//
// HOW THE EXAMPLES ARE WRITTEN: in a Year 7 student's voice, as on the 2.2 and 2.4 walls. People
// as the subject, doing something; short sentences; no abstract nouns as subjects, no "not X, it's
// Y", no tidy closing lines, and none of carries, unusually, quietly, matters.
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const load = f => new Function(fs.readFileSync(path.join(ROOT, f), "utf8") + "; return { CONTINUUM, VC };")();
const FU = load("history/fu-hao/content.js"), CH = new Function(fs.readFileSync(path.join(ROOT, "history/china/content.js"), "utf8") + "; return CONTINUUM;")();

const CONTINUUM = { source: FU.CONTINUUM.source, perspective: CH.perspective, judge: FU.CONTINUUM.judge };
const LEVELS = ["Level 6", "Level 7", "Level 8", "Level 9", "Level 10"];
const EARLY_LEVELS = ["Foundation to Level 2", "Levels 3 and 4", "Level 5"];

const EX = {
"Foundation to Level 2": `{source|This is a clay statue of a soldier}. {source|He is kneeling down}. {perspective|The emperor wanted soldiers to guard him after he died}. {judge|It shows that the emperor was powerful}.`,
"Levels 3 and 4": `{source|Source A is a clay soldier from the Terracotta Army}. {source|He kneels on one knee and wears armour}. {perspective|Qin Shi Huang had thousands of soldiers like this made to protect him after he died}. {judge|It shows that he wanted to look strong}.`,
"Level 5": `{source|Source A is a clay statue of a kneeling archer}. A feature I notice is {source|his armour, made of small plates}. {perspective|The emperor wanted an army to guard him in the afterlife}. {judge|It tells us that the emperor had a lot of power}, {judge|but it does not tell us what the workers who made it thought}.`,
"Level 6": `{source|Source A is a clay statue of a kneeling archer from the Terracotta Army}. {source|It is a primary source, because workers made it in the late 200s BCE and it was buried with Qin Shi Huang}. {perspective|It shows the emperor's point of view. He wanted an army to protect him after he died}. {judge|It is more useful for learning what the emperor wanted than for learning about the workers who made it}.`,
"Level 7": `{source|Source A is a life-size clay kneeling archer from the Terracotta Army. It was buried with Qin Shi Huang in 210 to 209 BCE, and farmers found the army in 1974}. {source|He wears armour made of small plates, and he holds his hands as if he is gripping a crossbow}. {source|Workers made the army to protect the emperor in the afterlife}. {perspective|From the emperor's point of view, the army showed his power. Thousands of soldiers stand in formation by rank, facing east towards the states he conquered}. {perspective|The workers saw it differently. Sima Qian says 700,000 conscripted workers built the tomb, so many people were forced to work on it}. {judge|The statue is useful because it shows how the emperor wanted to be seen}, {judge|but it cannot tell us how the workers felt}.`,
"Level 8": `{source|Workers made Source A in the late 200s BCE, and it was buried with Qin Shi Huang to guard him in the afterlife}. {source|Its face is different from every other figure's, and traces of its paint survive}. {source|A museum label at the site says kneeling archers held crossbows, and 160 of them were found in Pit 2}. {perspective|The emperor wanted people to see a ruler whose power lasted after death. His army stands by rank, ready for battle, facing the states he conquered}. {perspective|The workers who made it were conscripted, and archaeologists found a grave pit of workers near the tomb}. {perspective|Sculptors also signed their names in the figures' armpits. That small signature is one sign of the workers' own point of view}. {judge|So the statue is strong evidence of the emperor's view}. {judge|It is weak evidence of the workers' view, and I would ask whether the workers had any choice}.`,
"Level 9": `{source|We know Source A was made for Qin Shi Huang's tomb, because it was buried with him in the pits around it}. {source|The makers gave every figure a different face, so the army looks like real soldiers}. {perspective|The emperor and his workers saw the same army in different ways. To the emperor, it gave him protection in the afterlife and showed his power. To the 700,000 conscripted workers Sima Qian describes, it was forced labour, and a grave pit with 121 workers' skeletons shows that some of them died}. {perspective|Both views agree on one thing: the army was a huge project}. {judge|So the statue is reliable evidence of how the emperor wanted to be seen}. {judge|But it shows only one side. Most of what we know about the workers comes from Sima Qian, who wrote a century later, and from their graves}.`,
"Level 10": `{source|The explicit meaning of Source A is a soldier ready to fight. He kneels and holds his hands to grip a crossbow}. {source|The implicit meaning is about control. Every figure has its place by rank, and every workshop had to put its name on what it made, so the emperor could check the work}. {perspective|The emperor valued order and lasting power. The workers left their own small mark when the sculptors signed their names in the figures' armpits}. {judge|I can test this against Sima Qian. He wrote that 700,000 workers built the tomb and that the workers were trapped inside when it was sealed}. {judge|But the lead archaeologist at the site thinks Sima Qian's account is made up, written to persuade Emperor Wu of the Han. Mercury found in the soil backs up other parts of it}. {judge|So I trust the statue for the emperor's view, but I cannot fully trust any one source for the workers' view}.`
};
const only = early => Object.fromEntries(Object.entries(EX).filter(([l]) => EARLY_LEVELS.includes(l) === early));

const WHY = {
  "Foundation to Level 2": { source: "Says what the source is and what can be seen.", perspective: "Says whose idea it was.", judge: "Says one thing it shows." },
  "Levels 3 and 4": { source: "Describes the source.", perspective: "Says who wanted it and why.", judge: "Says what it shows." },
  "Level 5": { source: "Names the source and one feature.", perspective: "Says what the emperor wanted.", judge: "Says one thing it can tell us and one thing it cannot." },
  "Level 6": { source: "Identifies the type of source.", perspective: "Identifies one point of view: the emperor's.", judge: "Recognises what it is more and less useful for." },
  "Level 7": { source: "Identifies origin, features and purpose.", perspective: "Describes two points of view: the emperor's and the workers'.", judge: "Draws a conclusion about usefulness, then names a limit." },
  "Level 8": { source: "Describes the origin with evidence.", perspective: "Explains each point of view, with evidence for the workers' side.", judge: "Weighs strong and weak evidence, and asks a question." },
  "Level 9": { source: "Explains what the origin means for the evidence.", perspective: "Compares the two points of view: how they differ and what they share.", judge: "Identifies the limits of the evidence." },
  "Level 10": { source: "Analyses explicit and implicit meaning.", perspective: "Explains what each side valued.", judge: "Tests the source against another and weighs that source's reliability too." }
};
const NEW = {
  "Foundation to Level 2": "Say what the source is, what you can see, and what it shows.",
  "Levels 3 and 4": "Describe the source. Say who wanted it and what it shows.",
  "Level 5": "Name the source and one feature. Say what the emperor wanted. Say one thing it can tell us and one thing it cannot.",
  "Level 6": "Say what kind of source it is. Say whose point of view it shows. Say what it is more and less useful for.",
  "Level 7": "Say where it came from, what it looks like and what it was for. Describe two points of view. Say what it cannot show.",
  "Level 8": "Back up where it came from. Explain each point of view, with evidence. Say what it is strong and weak evidence for.",
  "Level 9": "Explain what its origin means for us. Compare the two points of view. Explain where the source falls short.",
  "Level 10": "Explain what it says and what it hints at. Explain what each side valued. Test it against another source."
};
const BG = {
  "Foundation to Level 2": "Qin Shi Huang was the first emperor of China.",
  "Levels 3 and 4": "The Terracotta Army was buried with Qin Shi Huang to protect him after he died.",
  "Level 5": "The army was buried in 210 to 209 BCE.",
  "Level 6": "The figures were made in the late 200s BCE and buried with the emperor.",
  "Level 7": "Farmers found the army in 1974. The soldiers in Pit 1 face east, towards the states the emperor conquered. Sima Qian says 700,000 conscripted workers built the tomb.",
  "Level 8": "A museum label says kneeling archers held crossbows; 160 were found in Pit 2. Archaeologists found a grave pit of workers near the tomb.",
  "Level 9": "The workers' grave pit held 121 skeletons. Sima Qian wrote about a century after the tomb was finished.",
  "Level 10": "Sima Qian says the workers were trapped inside the tomb. The lead archaeologist thinks his account was made up to persuade Emperor Wu; mercury in the soil backs up other parts of it."
};
const KID = {
  "Foundation to Level 2": ["I can say what a source is and something I see in it.", "I can say whose idea it was.", "I can say one thing it shows."],
  "Levels 3 and 4": ["I can describe a source and a feature of it.", "I can say who wanted it made and why.", "I can say what a source shows, and why."],
  "Level 5": ["I can name a historical source and a feature I notice.", "I can say what one person in the past wanted.", "I can say one thing a source can and cannot tell us."],
  "Level 6": ["I can say what kind of source it is.", "I can find one point of view in a source.", "I can say one thing the source is good for."],
  "Level 7": ["I can say where a source came from, what is in it and why it was made.", "I can describe two different points of view.", "I can say what a source is good for, and what it cannot tell me."],
  "Level 8": ["I can back up a source's origin with evidence and describe its features in detail.", "I can explain different points of view, with evidence.", "I can say what a source is strong evidence for and what it is weak evidence for."],
  "Level 9": ["I can explain what a source's origin means for what it can tell us.", "I can compare points of view and say how they are alike and different.", "I can explain the limits of a source."],
  "Level 10": ["I can explain what a source says, what it suggests without saying, and why it was made.", "I can explain what different people valued.", "I can test a source against another and judge both."]
};

const out = `/* =======================================================================
   GENERATED by tools/gen_terracotta_wall.js. Do not edit by hand: edit the
   generator and rerun it.

   CONTENT BLOCK for the 3.1 wall: the kneeling archer, Ancient China lesson
   3.1, the Terracotta Army. It practises historical perspectives (row 3 of the
   rubric), which no other wall on this site models: the emperor's point of view
   and the workers'. The source is in no assessment: booklet Task 3 on Qin Shi
   Huang uses a painting of the book burning and two historians, not the army.

   Every fact is in English Wikipedia "Terracotta Army" (revision 1384682282)
   or "Mausoleum of the First Qin Emperor" (revision 1383227125), or on a
   museum label photographed at the site (Gary Todd, CC0). See SOURCE-NOTICE.md.

   PASSWORD. The class sees every rung and its rubric rows, and the worked
   examples up to Level 6. Typing "mausoleum" opens Levels 7 to 10. It is a
   curtain, not a lock: the words are in this file.
   ======================================================================= */

const WALL = {
  id: "hist-terracotta",
  title: "The kneeling archer",
  expected: "Level 7",
  inquiry: "What does Source A tell us about how Qin Shi Huang wanted to be seen?",
  foot: "<b>Source:</b> a kneeling archer from the Terracotta Army, Qin dynasty, late 200s BCE (photo: Gary Todd, CC0). Facts from the Wikipedia articles \\"Terracotta Army\\" and \\"Mausoleum of the First Qin Emperor\\" (CC BY-SA 4.0) and a museum label at the site. The rows are the Ancient China Source Analysis Rubric, word for word."
};

const FACTS = ${JSON.stringify([
  ["The figure", "A life-size clay kneeling archer from the Terracotta Army. The army was buried with Qin Shi Huang in 210 to 209 BCE."],
  ["The find", "Farmers found the army in 1974 while digging a well."],
  ["Why it was made", "The army was buried to protect the emperor in his afterlife. The soldiers in Pit 1 face east, towards the states he had conquered."],
  ["Rank", "The figures stand in formation by rank and duty. Their height, uniform and hairstyle change with their rank."],
  ["Faces and paint", "Workers used about ten face moulds, then added clay so every face looks different. The figures were painted; most paint flakes off within minutes of being dug up."],
  ["Kneeling archers", "A museum label at the site says they were armoured foot soldiers, the way their hands are held shows each held a crossbow, and 160 were found in Pit 2."],
  ["The workers", "Sima Qian, a Han historian writing about a century later, says 700,000 conscripted workers built the tomb. Sculptors signed their names in the figures' armpits."]
], null, 1)};

const CRITERIA = [
  { key:"source",      row:"Origin, features &amp; purpose",        name:"Origin, features &amp; purpose",        glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"perspective", row:"Historical perspectives",               name:"Historical perspectives",               glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
  { key:"judge",       row:"Accuracy, usefulness &amp; reliability", name:"Accuracy, usefulness &amp; reliability", glyph:"◆",
    ink:"#744f91", lamp:"#bda0d8", underline:"double" },
];

const LEVELS = ${JSON.stringify(LEVELS)};
const STUDENT_LEVELS = ["Foundation to Level 2", "Levels 3 and 4", "Level 5", "Level 6"];
const EXAMPLES = ${JSON.stringify(only(false), null, 1)};
const EXPLANATIONS = ${JSON.stringify(Object.fromEntries(LEVELS.map(l => [l, WHY[l]])), null, 1)};

/* Rows 1 and 5: verbatim from history/fu-hao (Levels 6 to 9 the China rubric, 5 and 10 the
   Ancient Australia continuum). Row 3, perspectives: verbatim from history/china, Levels 6 to 9
   only; no rubric anywhere words its Level 5 or 10, so those rungs show the KID line. */
const CONTINUUM = ${JSON.stringify(CONTINUUM, null, 1)};

const SHEET_IMAGE = "kneeling-archer.jpg";
const SOURCES = [
 {
  id: "archer", tab: "Source A", kind: "image", file: SHEET_IMAGE, ar: "1280/1920",
  alt: "A clay soldier kneeling on one knee, wearing armour of small studded plates, with his hair in a topknot and his hands held as if gripping something.",
  missing: "The picture did not load.<br>Keep <b>kneeling-archer.jpg</b> in the same folder as this page.",
  cite: "Source A: kneeling archer, Terracotta Army, Qin dynasty, late 200s BCE. Photo: Gary Todd, CC0, via Wikimedia Commons.",
  whole: { label: "The whole figure", text: "A life-size clay kneeling archer, made in the late 200s BCE and buried with Qin Shi Huang." },
  /* Percentages of the 1280x1920 file, read off the image region by region. */
  hotspots: [
   { x: 35, y: 4, w: 12, h: 9, label: "The topknot", text: "His hair is tied in a topknot. The figures' hairstyles change with their rank." },
   { x: 36, y: 13, w: 20, h: 13, label: "The face", text: "A face with a moustache. Every figure's face is different. White patches show where the paint has flaked off." },
   { x: 25, y: 29, w: 45, h: 27, label: "The armour", text: "Armour made of small plates fixed with studs. Kneeling archers were armoured foot soldiers." },
   { x: 17, y: 54, w: 30, h: 12, label: "The hands", text: "Both hands are held as if gripping something. A museum label says this shows a kneeling archer once held a crossbow." },
   { x: 24, y: 67, w: 58, h: 32, label: "The kneeling pose", text: "One knee on the ground and one raised, ready to shoot." }
  ]
 }
];
const SOURCE_PANEL = Object.assign({}, SOURCES[0]);
const HOTSPOTS = SOURCES[0].hotspots;

const EARLY_LEVELS = ${JSON.stringify(EARLY_LEVELS)};
const EARLY_EXAMPLES = ${JSON.stringify(only(true), null, 1)};
const EARLY_EXPLANATIONS = ${JSON.stringify(Object.fromEntries(EARLY_LEVELS.map(l => [l, WHY[l]])), null, 1)};

const VC = ${JSON.stringify(FU.VC, null, 1)};
const VC_NOTE = "Levels 6 to 9 are the Ancient China Source Analysis Rubric, word for word: rows 1, 3 and 5. The China rubric stops at 6 and 9, so Level 5 and Level 10 of rows 1 and 5 quote the Ancient Australia source analysis continuum, also word for word. No rubric words the perspectives row at Level 5 or 10, or any row below Level 5: those lines are plain descriptions written for this wall. The codes are Victorian Curriculum 2.0.";

/* new: what this rung adds, as instructions. background: facts the rung uses that are not in the photo. */
const BUMP = ${JSON.stringify(Object.fromEntries([...EARLY_LEVELS, ...LEVELS].map(l => [l, { new: NEW[l], background: BG[l] }])), null, 1)};

const GLOSS = {
 tier2: {
   "conscripted":"forced to work or fight for the government",
   "formation":"a set arrangement of soldiers",
   "explicit":"said openly and clearly",
   "implicit":"suggested without being said"
 },
 tier3: {
   "primary source":"Was created at the time being studied. It shows the view of people who saw the events first-hand.",
   "secondary source":"Was created after the time being studied. It is made by people who combine primary sources to explain the past.",
   "origin":"Who made a source, when and where.",
   "purpose":"Why a source was made.",
   "afterlife":"Life after death.",
   "mausoleum":"A large, grand building or tomb built to hold the body of an important person.",
   "necropolis":"A purpose built cemetery the size of a small city.",
   "archaeologists":"People who study the past by digging up and examining what people left behind.",
   "crossbow":"A bow fixed across a wooden stock, which shoots short arrows when a trigger is pulled."
 }
};

const KID = ${JSON.stringify(Object.fromEntries(Object.entries(KID).map(([l, lines]) => [l, { band: l, lines }])), null, 1)};
`;
fs.mkdirSync(path.join(ROOT, "history/terracotta"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "history/terracotta/content.js"), out);
console.log("wrote history/terracotta/content.js; em dashes:", (out.match(/\u2014/g) || []).length);
