// Writes history/great-wall/content.js: the 3.2 bump it up wall, the Great Wall.
//   node tools/gen_great_wall_wall.js
// Rows 1 and 5 (origin; accuracy, usefulness and reliability) and their curriculum codes are copied
// from history/fu-hao/content.js; the interpretations row and its S06 codes from history/china/content.js,
// all word for word. Edit here and rerun; do not hand-edit the generated file.
//
// HOW THE EXAMPLES ARE WRITTEN. Literacy climbs with the level, as the history does, but it climbs
// through vocabulary and the precision of the judgement, not through sentence length. Foundation to
// Level 6 are plain. Levels 7 to 10 add subject words (interpretation, documentary, restored, implicit,
// frontier) and qualified judgements. Every sentence stays easy to parse: one main idea, at most one
// joining clause, the main point first; no chains of "which", "since" and "even though". People and
// things are the subjects of sentences. No LLM tells: no abstract nouns doing the work, no "not X,
// it's Y" contrasts, no tidy closing lines, and none of carries, unusually, quietly, matters.
//
// FACTS. English Wikipedia "Great Wall of China" (revision 1384301633) and "Arthur Waldron" (revision
// 1383247804); Simple English Wikipedia "Great Wall of China" (revision 11000135); the TED-Ed video's
// transcript for Source C. Kublai Khan as Genghis Khan's grandson: the unit's reading pack.
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");
const FU = new Function(read("history/fu-hao/content.js") + "; return { CONTINUUM, VC };")();
const CH = new Function(read("history/china/content.js") + "; return { CONTINUUM, VC };")();

const CONTINUUM = { source: FU.CONTINUUM.source, interpretation: CH.CONTINUUM.interpretation, judge: FU.CONTINUUM.judge };
const LEVELS = ["Level 6", "Level 7", "Level 8", "Level 9", "Level 10"];
const EARLY_LEVELS = ["Foundation to Level 2", "Levels 3 and 4", "Level 5"];
/* Fu Hao's S03 and S04 codes, plus the China wall's S06 (interpretations) where it has one. */
const VC = Object.fromEntries(Object.entries(FU.VC).map(([lv, codes]) =>
  [lv, codes.concat(((CH.VC[lv] || []).filter(([c]) => /S06$/.test(c))))]));

const EX = {
"Foundation to Level 2": `{source|This is a photo of the Great Wall of China}. {source|It is a long stone wall on top of the mountains}. {interpretation|Source C says the wall was strong}. {judge|The photo is good for seeing what the wall looks like}. I think the wall was a success because it was hard to get past.`,
"Levels 3 and 4": `{source|Source A is a photo of the Great Wall}. {source|It has towers and a path along the top}. {interpretation|Source C says the wall was strong, but invaders still got past it}. {judge|Source C is useful because it tells us what happened to the wall}. I think the wall was partly a success, because it stopped some attacks but not all of them.`,
"Level 5": `{source|Source A is a photo of the Great Wall at Mutianyu}. A feature I notice is {source|the square watchtower on the hill}. {interpretation|Source C calls the wall a "remarkable monument to human achievement"}. {interpretation|Source B says many walls were built at different times}. {judge|The photo shows what the wall looks like}, {judge|but it cannot tell us if the wall kept invaders out}. I think the wall was partly a success.`,
"Level 6": `{source|Source A is a photo of the Great Wall at Mutianyu, taken in 2006}. {source|The photo is modern, but the Ming dynasty built the wall in it}. {interpretation|Sources B and C interpret the wall differently}. {interpretation|Source C calls it a monument to human achievement. Source B says it was many walls, built at different times}. {judge|Source A is useful for showing how strong the wall looks}. {judge|Source C is more useful for deciding if it worked, because it says the wall "was not enough" in 1644}. I think the wall was partly a success.`,
"Level 7": `{source|Source A is a photo of the Great Wall at Mutianyu, near Beijing, taken in 2006}. {source|This section was built by the Ming dynasty, which ruled China from 1368 to 1644}. {source|It shows a brick wall with battlements and a square watchtower, running along steep mountain ridges}. {source|The Ming built walls like this to defend their northern border from Mongol raids}. {interpretation|Source C describes the wall as "formidable but not invincible"}. {interpretation|It calls the wall a "remarkable monument to human achievement", but it also says the wall became "a notorious place of suffering"}. {interpretation|Source B describes it differently. It says many walls were built at different times, and the idea of one "Great Wall" came from the Ming wall}. {judge|Source A is useful for showing how strong the Ming wall was}, {judge|but it cannot tell us whether the wall kept invaders out}. {judge|Source C is more useful for that question. It admits the wall "was not enough" when the Manchus took over in 1644}. I conclude that the wall was partly a success. It slowed raiders, but Mongol raids still continued.`,
"Level 8": `{source|Source A is a 2006 photo of Mutianyu, a section of the Ming Great Wall}. {source|Its brick walls, battlements and watchtower show how much stronger the Ming wall was than the earlier rammed-earth walls}. {source|Soldiers in the towers watched for raiders and sent smoke or fire signals}. {interpretation|Writers disagree about what the Great Wall even was}. {interpretation|Source C treats it as one great monument, built and extended over many dynasties}. {interpretation|Source B reports the historian Arthur Waldron's view: there were many walls, each one part of a larger plan for the border}. {interpretation|In his view, the idea of a single "Great Wall" grew out of the Ming wall}. {judge|Source A raises a question: how much of what we see is original?} {judge|Mutianyu was one of the first sections restored after the Cultural Revolution}. {judge|Source C raises another question. It says the Ming wall "was not enough", but does it tell the whole story of 1644?} {judge|It does not say that a Ming general opened the gates to the Manchus}. The Ming army held Shanhai Pass against the Manchus for years. So the wall worked as a defence for long periods, but it could not save the Ming in 1644.`,
"Level 9": `{source|Source A shows the Ming wall as it looks today}. {source|The photo was taken in 2006 at Mutianyu, one of the first sections restored after the Cultural Revolution}. {source|So it shows the wall after modern repairs, and it looks stronger and more complete than much of the wall does now}. {source|A 2012 report found that 22% of the Ming wall has disappeared}. {interpretation|Sources B and C rest on different evidence}. {interpretation|Source C's evidence is the wall's size and the people who built it: soldiers, peasants and criminals, many of whom died}. {interpretation|Waldron's evidence was written records. Wikipedia says his book drew on "extensive documentary research"}. {interpretation|Those records show walls built at different times for different border plans}. {interpretation|That is why he argues the single "Great Wall" is an idea that grew from the Ming wall}. {judge|Both sources are secondary, and they are useful in different ways}. {judge|Source C is accurate on facts we can check, such as the Ming bricks and watchtowers}. {judge|It is less reliable on detail, because it simplifies for a general audience. For example, it calls Kublai Khan Genghis Khan's son, when he was his grandson}. {judge|It also leaves out how the Manchus got through in 1644. Beijing had already fallen to rebels, and a Ming general opened the gates}. My judgement is that the Ming wall was a success as a defence for long periods. The Ming army held Shanhai Pass even after losing the rest of Liaodong.`,
"Level 10": `{source|The explicit meaning of Source A is a strong, unbroken wall along the mountains}. {source|Its implicit meaning comes from where the photo was taken}. {source|Mutianyu is a restored section near Beijing, and tourists visit it today}. {source|So the photo shows the wall as a national symbol as much as a defence}. {interpretation|This links to Waldron's argument in Source B}. {interpretation|He argues that the idea of one "Great Wall" grew out of the Ming wall, and Wikipedia adds that it became "a potent patriotic symbol"}. {interpretation|Source C shares the symbol view when it calls the wall a "remarkable monument to human achievement"}. {interpretation|However, Source C's own evidence supports Waldron. It describes separate state walls, Qin connections, Han extensions and a Ming rebuild in brick}. {judge|Neither source is primary, so each is only as reliable as its evidence}. {judge|Waldron's interpretation rests on written records}. {judge|Source C is accurate that the Manchus took over China in 1644}. {judge|But it is not reliable about how. It says the wall "was not enough", yet Beijing had already fallen to rebels, and a Ming general opened the gates}. {judge|So Source C makes the Ming wall look like more of a failure than it was}. Whether the wall was a success depends on which wall we judge. The Qin wall cost many lives, and the Mongols crossed the walls in the 13th century. The Ming wall held the Manchus at Shanhai Pass until 1644.`
};
const only = early => Object.fromEntries(Object.entries(EX).filter(([l]) => EARLY_LEVELS.includes(l) === early));

const WHY = {
  "Foundation to Level 2": { source: "Says what the source is and what can be seen.", interpretation: "Says what one source thinks.", judge: "Says what the photo is good for." },
  "Levels 3 and 4": { source: "Describes the source.", interpretation: "Says what one source thinks, and one problem.", judge: "Says why a source is useful." },
  "Level 5": { source: "Names the source and one feature.", interpretation: "Says what two sources think.", judge: "Says one thing it can tell us and one thing it cannot." },
  "Level 6": { source: "Identifies the type of source.", interpretation: "Recognises that the two sources see the wall differently.", judge: "Recognises that Source C is more useful for the question." },
  "Level 7": { source: "Identifies origin, features and purpose.", interpretation: "Describes each interpretation, using the sources' words.", judge: "Draws a conclusion about which source is useful for the question." },
  "Level 8": { source: "Describes the origin, with what the features show.", interpretation: "Explains the debate: one monument, or many walls?", judge: "Asks questions about each source's accuracy, and checks Source C against what happened in 1644." },
  "Level 9": { source: "Explains what the origin means for the evidence.", interpretation: "Identifies the evidence each interpretation rests on.", judge: "Identifies what Source C is accurate on, and where it falls short." },
  "Level 10": { source: "Analyses explicit and implicit meaning.", interpretation: "Shows where one source's evidence supports the other's interpretation.", judge: "Analyses Source C's accuracy against the evidence, and what that does to its judgement of the wall." }
};
const NEW = {
  "Foundation to Level 2": "Say what the source is and what you can see. Say if the wall was a success, and why.",
  "Levels 3 and 4": "Describe the source. Say what Source C thinks. Give your answer with a reason.",
  "Level 5": "Name the source and a feature. Say what B and C think. Say what the photo can and cannot show.",
  "Level 6": "Say what kind of source it is. Say how B and C differ. Say which source is more useful. Give your answer.",
  "Level 7": "Say where Source A came from, what it shows and why it was built. Describe each interpretation in the sources' words. Draw a conclusion.",
  "Level 8": "Say what the features show. Explain the debate: one wall or many? Ask questions about the sources. Check Source C against 1644.",
  "Level 9": "Explain what the photo's origin means. Name the evidence behind each interpretation. Say what each source is reliable for.",
  "Level 10": "Explain what the photo says and what it hints at. Show how one source's evidence supports the other. Test Source C against 1644."
};
const BG = {
  "Foundation to Level 2": "The Great Wall was built to keep invaders out of China.",
  "Levels 3 and 4": "Soldiers kept watch from the towers on the wall.",
  "Level 5": "Mutianyu is a section of the wall near Beijing.",
  "Level 6": "The photo was taken in 2006. The Ming dynasty built this part of the wall.",
  "Level 7": "The Ming ruled from 1368 to 1644. They built in brick and stone, and Mongol raids continued.",
  "Level 8": "Towers sent smoke or fire signals. The Ming army held Shanhai Pass against the Manchus until 1644, when a Ming general, Wu Sangui, opened the gates. Mutianyu was one of the first sections restored after the Cultural Revolution.",
  "Level 9": "A 2012 report found 22% of the Ming wall has disappeared. Waldron's book drew on \"extensive documentary research\". Beijing had already fallen to rebels when the gates were opened. Kublai Khan was Genghis Khan's grandson.",
  "Level 10": "Wikipedia says the idea of the Great Wall became \"a potent patriotic symbol\" in recent times. The Mongols crossed the walls in the 13th century."
};
/* Order: source, interpretation, judge, as CRITERIA. The engine shows these lines where the
   rubric has no wording: every row below Level 5, and interpretations at Levels 5 and 10. */
const KID = {
  "Foundation to Level 2": ["I can say what a source is and something I see in it.", "I can say what one source thinks.", "I can say what a source is good for."],
  "Levels 3 and 4": ["I can describe a source and a feature of it.", "I can say what a source thinks about the past.", "I can say why a source is useful."],
  "Level 5": ["I can name a historical source and a feature I notice.", "I can say what two sources think, and how they differ.", "I can say one thing a source can and cannot tell us."],
  "Level 6": ["I can say what kind of source it is.", "I can see that two sources tell the story differently.", "I can say which source is more useful, and why."],
  "Level 7": ["I can say where a source came from, what is in it and why it was made.", "I can describe two interpretations, using their words.", "I can say what a source is good for, and what it cannot tell me."],
  "Level 8": ["I can describe a source's origin and what its features show.", "I can explain what historians disagree about, with examples.", "I can ask questions about whether a source is accurate and reliable."],
  "Level 9": ["I can explain what a source's origin means for what it can tell us.", "I can name the evidence behind each interpretation.", "I can say what each source is accurate and reliable for."],
  "Level 10": ["I can explain what a source says, what it hints at, and why it was made.", "I can show how one source's evidence supports or weakens another's interpretation.", "I can judge how reliable each source is, and why."]
};

const out = `/* =======================================================================
   GENERATED by tools/gen_great_wall_wall.js. Do not edit by hand: edit the
   generator and rerun it.

   CONTENT BLOCK for the 3.2 wall: the Great Wall, Ancient China lesson 3.2.
   It practises historical interpretations (row 4 of the rubric): a modern
   photo of a Ming section, a historian's interpretation as Wikipedia reports
   it, and a TED-Ed video's own words. The question is "Was the Great Wall a
   success?". The sources are in no assessment.

   Every fact is in English Wikipedia "Great Wall of China" (revision
   1384301633) or "Arthur Waldron" (revision 1383247804), Simple English
   Wikipedia "Great Wall of China" (revision 11000135), or the TED-Ed
   video's transcript. See SOURCE-NOTICE.md.

   PASSWORD. The class sees every rung and its rubric rows, and the worked
   examples up to Level 6. Typing "impregnable" opens Levels 7 to 10. It is a
   curtain, not a lock: the words are in this file.
   ======================================================================= */

const WALL = {
  id: "hist-great-wall",
  title: "The Great Wall",
  expected: "Level 7",
  inquiry: "Was the Great Wall a success?",
  foot: "<b>Sources:</b> A, the Great Wall at Mutianyu (photo: Velatrix, 2006, CC0); B, Wikipedia's summary of Arthur Waldron's book (CC BY-SA 4.0); C, the TED-Ed video \\"What makes the Great Wall of China so extraordinary\\". Facts from the Wikipedia articles \\"Great Wall of China\\" and \\"Arthur Waldron\\" (CC BY-SA 4.0). The rows are the Ancient China Source Analysis Rubric, word for word."
};

const FACTS = ${JSON.stringify([
  ["Source A", "The Great Wall at Mutianyu, near Beijing, photographed in 2006. Wikipedia lists Mutianyu as part of the Ming Great Wall. It was one of the first sections restored after the Cultural Revolution."],
  ["The first walls", "States in the north built walls from the 7th century BCE. After 221 BCE, Qin Shi Huang joined and extended them against the Xiongnu."],
  ["The builders", "Soldiers, conscripted peasants and criminals. Many died from accidents, hunger and exhaustion (Source C)."],
  ["The Ming wall", "After the Mongols beat a Ming army at Tumu, the Ming rebuilt the wall in brick and stone. Up to 25,000 watchtowers were built. Towers sent smoke or fire signals."],
  ["Other uses", "Controlling who crossed the border, taxing goods on the Silk Road, and controlling trade."],
  ["Did it work?", "Mongol raids continued. The Manchus crossed several times to raid. In 1644, after rebels had taken Beijing, a Ming general opened the gates at Shanhai Pass to the Manchus."],
  ["Today", "The Ming wall measures 8,850 km. A 2012 report found that 22% of it has disappeared. It cannot be seen from the Moon."]
], null, 1)};

const CRITERIA = [
  { key:"source",         row:"Origin, features &amp; purpose",        name:"Origin, features &amp; purpose",        glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"interpretation", row:"Historical interpretations",           name:"Historical interpretations",           glyph:"▼",
    ink:"#8c2d63", lamp:"#e591c2", underline:"dotted" },
  { key:"judge",          row:"Accuracy, usefulness &amp; reliability", name:"Accuracy, usefulness &amp; reliability", glyph:"◆",
    ink:"#744f91", lamp:"#bda0d8", underline:"double" },
];

const LEVELS = ${JSON.stringify(LEVELS)};
const STUDENT_LEVELS = ["Foundation to Level 2", "Levels 3 and 4", "Level 5", "Level 6"];
const EXAMPLES = ${JSON.stringify(only(false), null, 1)};
const EXPLANATIONS = ${JSON.stringify(Object.fromEntries(LEVELS.map(l => [l, WHY[l]])), null, 1)};

/* Rows 1 and 5: verbatim from history/fu-hao (Levels 6 to 9 the China rubric, 5 and 10 the
   Ancient Australia continuum). Row 4, interpretations: verbatim from history/china, Levels 6 to 9
   only; no rubric anywhere words its Level 5 or 10, so those rungs show the KID line. */
const CONTINUUM = ${JSON.stringify(CONTINUUM, null, 1)};

const SHEET_IMAGE = "great-wall-mutianyu.jpg";
const SOURCES = [
 {
  id: "photo", tab: "Source A", kind: "image", file: SHEET_IMAGE, ar: "1280/958",
  alt: "The brick Great Wall at Mutianyu, with battlements and a square watchtower, running along green mountain ridges under a blue sky.",
  missing: "The picture did not load.<br>Keep <b>great-wall-mutianyu.jpg</b> in the same folder as this page.",
  cite: "Source A: the Great Wall at Mutianyu, near Beijing, a Ming section. Photo: Velatrix, 2006, CC0, via Wikimedia Commons.",
  whole: { label: "The whole photo", text: "A photo taken in 2006 of the Mutianyu section of the Great Wall, near Beijing. The Ming dynasty built this part of the wall." },
  /* Percentages of the 1280x958 file, read off the image region by region. */
  hotspots: [
   { x: 48, y: 51, w: 10, h: 8, label: "The watchtower", text: "A square watchtower. Soldiers watched for raiders and sent smoke or fire signals to the next tower. Up to 25,000 watchtowers were built." },
   { x: 9, y: 73, w: 14, h: 10, label: "The battlements", text: "The raised blocks and gaps along the edge. Soldiers could shoot through the gaps and shelter behind the blocks." },
   { x: 9, y: 84, w: 13, h: 16, label: "Brick and stone", text: "The Ming built in brick and stone. Earlier walls were mostly rammed earth, which wears away faster." },
   { x: 23, y: 79, w: 15, h: 21, label: "The walkway", text: "A paved path along the top. Soldiers and supplies could move along the wall." },
   { x: 24, y: 56, w: 20, h: 14, label: "Restored", text: "Mutianyu was one of the first sections restored after the Cultural Revolution. Some of what you see is modern repair." },
   { x: 62, y: 34, w: 22, h: 28, label: "Along the ridges", text: "The wall follows the tops of steep mountain ridges, so attackers would have to climb to reach it." }
  ]
 },
 {
  id: "waldron", tab: "Source B", kind: "text",
  cite: "Source B: a historian's interpretation, as Wikipedia summarises it: \\"Arthur Waldron\\", revision 1383247804 (November 2026), en.wikipedia.org/wiki/Arthur_Waldron. Waldron's book The Great Wall of China: From History to Myth was published in 1989. Shortened: […] shows where words are left out. Text CC BY-SA 4.0.",
  whole: { label: "The whole extract",
    text: "A modern summary, written by unnamed volunteers, of one historian's book. It reports his interpretation in other words, not his own words." },
  paragraphs: [
    "[…] although multiple walls had been built at various times, the Ming Wall had given rise to the idea of the \\"Great Wall\\" […]",
    "According to Waldron's book, actual wall building was best understood as an aspect of larger frontier strategy, never a single grand project in itself."
  ],
  plain: [
    "Many walls were built at different times. The idea of one \\"Great Wall\\" came from the Ming wall.",
    "Waldron's book says building walls was one part of a bigger plan for the border. It was never one huge project on its own."
  ],
  hotspots: [
   { mark:"multiple walls had been built at various times", label:"Many walls", text:"The first interpretation: there was no single wall. Different states and dynasties built different walls." },
   { mark:"the Ming Wall had given rise to the idea", label:"Where the idea came from", text:"\\"Given rise to\\" means \\"started\\". The Ming wall is the one people picture today, so it shaped the idea of one Great Wall." },
   { mark:"an aspect of larger frontier strategy", label:"Part of a bigger plan", text:"An aspect is one part. A frontier is a border region. A strategy is a plan. The walls were one part of how China managed its border." },
   { mark:"never a single grand project in itself", label:"Not one project", text:"This is where Source B and Source C disagree. Source C treats the wall as one great monument." }
  ]
 },
 {
  id: "teded", tab: "Source C", kind: "text",
  cite: "Source C: the TED-Ed video \\"What makes the Great Wall of China so extraordinary\\", youtu.be/23oHqNEqRyo, in its own words. The times are from the video's transcript.",
  whole: { label: "The four quotes",
    text: "A short animated video made for a general audience. It is a secondary source: it was made long after the walls were built." },
  paragraphs: [
    "\\"Forced labor continued under the Han Emperor Han-Wudi, and the wall's reputation grew into a notorious place of suffering.\\" (1:25)",
    "\\"The wall was formidable but not invincible.\\" (1:49)",
    "\\"But even this new and improved wall was not enough. In 1644, northern Manchu clans overthrew the Ming …\\" (2:33)",
    "\\"… this remarkable monument to human achievement.\\" (4:09)"
  ],
  hotspots: [
   { mark:"Forced labor", label:"Forced labour", text:"Workers were made to build the wall. The video says many were peasants and criminals, and many died." },
   { mark:"a notorious place of suffering", label:"Suffering", text:"Notorious means famous for something bad. This is the cost of the wall." },
   { mark:"formidable but not invincible", label:"Strong, but could be beaten", text:"Formidable means very strong and frightening. Invincible means impossible to beat. So the video judges the wall a partial success." },
   { mark:"was not enough", label:"A failure?", text:"The video's judgement of the Ming wall. Is it the whole story? Check how the Manchus got through in 1644." },
   { mark:"remarkable monument to human achievement", label:"An achievement", text:"The video's final judgement. It treats the wall as one great monument." }
  ]
 }
];
const SOURCE_PANEL = Object.assign({}, SOURCES[0]);
const HOTSPOTS = SOURCES[0].hotspots;

const EARLY_LEVELS = ${JSON.stringify(EARLY_LEVELS)};
const EARLY_EXAMPLES = ${JSON.stringify(only(true), null, 1)};
const EARLY_EXPLANATIONS = ${JSON.stringify(Object.fromEntries(EARLY_LEVELS.map(l => [l, WHY[l]])), null, 1)};

const VC = ${JSON.stringify(VC, null, 1)};
const VC_NOTE = "Levels 6 to 9 are the Ancient China Source Analysis Rubric, word for word: rows 1, 4 and 5. The China rubric stops at 6 and 9, so Level 5 and Level 10 of rows 1 and 5 quote the Ancient Australia source analysis continuum, also word for word. No rubric words the interpretations row at Level 5 or 10, or any row below Level 5: those lines are plain descriptions written for this wall. The codes are Victorian Curriculum 2.0.";

/* new: what this rung adds, as instructions. background: facts the rung uses that are not in the sources. */
const BUMP = ${JSON.stringify(Object.fromEntries([...EARLY_LEVELS, ...LEVELS].map(l => [l, { new: NEW[l], background: BG[l] }])), null, 1)};

const GLOSS = {
 tier2: {
   "formidable":"very strong and frightening",
   "invincible":"impossible to beat",
   "notorious":"famous for something bad",
   "frontier":"the land along a border",
   "strategy":"a plan to reach a goal",
   "aspect":"one part of something",
   "conscripted":"forced to work or fight for the government",
   "restored":"repaired to look like it once did",
   "explicit":"said openly and clearly",
   "implicit":"suggested without being said"
 },
 tier3: {
   "primary source":"Was created at the time being studied. It shows the view of people who saw the events first-hand.",
   "secondary source":"Was created after the time being studied. It is made by people who combine primary sources to explain the past.",
   "interpretation":"A historian's explanation of what happened in the past and why.",
   "origin":"Who made a source, when and where.",
   "purpose":"Why a source was made.",
   "battlements":"A wall along the top of a fort, with gaps for shooting through.",
   "watchtower":"A tall tower where guards keep watch.",
   "rammed earth":"Soil pressed down hard inside a wooden frame to make a wall.",
   "dynasty":"A line of rulers from the same family.",
   "impregnable":"Too strong to be broken into or captured.",
   "fortification":"A wall, tower or building made to defend a place."
 }
};

const KID = ${JSON.stringify(Object.fromEntries(Object.entries(KID).map(([l, lines]) => [l, { band: l, lines }])), null, 1)};
`;
fs.mkdirSync(path.join(ROOT, "history/great-wall"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "history/great-wall/content.js"), out);
const banned = /\u2014|\bcarries\b|\bunusually\b|\bquietly\b|\bmatters\b|\bproduces\b|\bdelve|\btapestry|\btestament/gi;
console.log("wrote history/great-wall/content.js; tells:", (out.match(banned) || []).join(", ") || "none");
