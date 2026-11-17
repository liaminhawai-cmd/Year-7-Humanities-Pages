/* =======================================================================
   CONTENT BLOCK for the Ancient China WAGOLL family.
   This is the ONLY place the wall text lives.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.

   ------------------------------------------------------------------
   THIS WALL REHEARSES TASK 3 OF THE SOURCE ANALYSIS BOOKLET, ON OTHER SOURCES.

   Task 3's big answer is Q5: evaluate the significance of a ruler, using the
   sources and your own knowledge, weighing strengths against weaknesses. So
   the wall leads with significance and carries the two rows that judgement
   rests on, perspectives and interpretations. Three of the rubric's six
   rows, in the rubric's own words. The other three are marked from Tasks 1,
   2 and 4, on sources this wall does not rehearse.

   Until November 2026 the wall was built on Task 3 itself: the same painting
   and the same Peter Bol interview the students are marked on, which handed
   out the answers (AGENTS.md, rule 1). It is now Emperor Wu of Han, on a
   Tang-dynasty mural from the Mogao Caves and the Legacy section of his
   Wikipedia article. Neither appears in any assessment. He is a ruler whose
   achievements and costs both have to be weighed, so the thinking transfers
   to Q5 and the content does not. See SOURCE-NOTICE.md.

   It runs Level 6 to Level 9, because that is what the booklet rubric runs.
   ======================================================================= */

const WALL = {
  id: "hist-china",
  title: "Emperor Wu of Han",
  expected: "Level 7",
  inquiry: "Emperor Wu made the Han empire about twice as big. His wars also made his people poorer. How significant was he as a ruler?",
  foot: "<b>Sources:</b> a mural in Cave 323 of the Mogao Caves at Dunhuang, painted in the Tang dynasty in the 700s CE (public domain), and the Legacy section of the Wikipedia article on Emperor Wu of Han (CC BY-SA 4.0). Neither is in the Source Analysis Booklet. The rows on this wall are three of that booklet's rubric rows, word for word."
};

const FACTS = [
  ["The person", "Emperor Wu of Han, who ruled China for 54 years, from 141 to 87 BCE."],
  ["Source A", "A mural in Cave 323 of the Mogao Caves, painted by Buddhists in the 700s CE, more than 800 years after he died."],
  ["Source B", "The Legacy section of the Wikipedia article about him: a modern summary of what historians say."],
  ["What he built", "An empire about twice the size of the one he was given. Confucian learning as the training for officials. Contact with Central Asia through his envoy Zhang Qian."],
  ["What it cost", "Wars paid for with heavy taxes and government control of salt and iron. Peasant revolts. Harsh punishments, and witchcraft trials that killed thousands and led to his own son's death."],
  ["Why he is hard", "The same wars built the empire and burdened the people. Near the end of his life he said so himself, in the Repenting Edict of 89 BCE."]
];

/* ink: the colour on paper, all above 4.5:1 on the wall's cream
   lamp: the same criterion on the dark bar of the big-screen tool
   underline: the second channel, which survives a greyscale photocopy and
              a colour-blind reader. Significance also carries a weight. */
const CRITERIA = [
  { key:"significance",   row:"Historical significance",         name:"Historical significance",         glyph:"✦",
    ink:"#9b2f22", lamp:"#f0968a", underline:"solid", weight:"3px" },
  { key:"perspective",    row:"Historical perspectives",         name:"Historical perspectives",         glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
  { key:"interpretation", row:"Historical interpretations",      name:"Historical interpretations",      glyph:"◆",
    ink:"#6b4a86", lamp:"#bda0d8", underline:"double" },
];

/* The CAT rubric's own bands. Not Foundation to Year 10. */
const LEVELS = ["Level 6","Level 7","Level 8","Level 9"];

const EXAMPLES = {
"Level 6":
`Source A is a painting of {perspective|Emperor Wu bowing to two golden statues}. The painter {perspective|shows him as a good and holy man}. Source B says that {interpretation|historians do not all agree about him}. Emperor Wu was {significance|important because he made the Han empire much bigger}.`,

"Level 7":
`Source A is a mural painted by Buddhists in the Mogao Caves, hundreds of years after Emperor Wu died. It {perspective|shows him kneeling to two golden statues, as if he were a Buddhist}, so {perspective|the painters saw him as a ruler who honoured their faith}. Source B gives a different view. It says {interpretation|historians have treated him with ambivalence}, because {interpretation|some praise the land he won and others say his policies were a burden on his people}. Emperor Wu was significant for more than one reason. {significance|He roughly doubled the size of the empire}, and {significance|much of that land is still part of China today}. {significance|He also made Confucianism the official teaching}, so {significance|officials were trained in it for centuries after he died}.`,

"Level 8":
`Source A was painted in Cave 323 at Mogao in the 700s CE, more than 800 years after Emperor Wu ruled. The Buddhist painters {perspective|show him kneeling before two golden statues in a temple, with his officials waiting behind him}, so {perspective|he becomes a model worshipper for the monks and pilgrims who saw the cave}. Source B explains why {interpretation|historians have treated him with ambivalence}: {interpretation|one side counts the land he won, while the other counts the burden his policies put on his people}. Both sides are needed to explain his significance. The changes he caused were huge, because {significance|he roughly doubled the empire and sent Zhang Qian west, opening contact with Central Asia}. The impact on people was harsh, because {significance|his wars were paid for with heavy taxes and government control of salt and iron}. His legacy lasted, since {significance|Confucianism stayed the official teaching of Chinese government until the last emperor, about two thousand years later}. {significance|So how significant he seems depends on whether you measure the empire or the people who paid for it}.`,

"Level 9":
`Emperor Wu is significant mainly as a builder of the Chinese state, and the cost of that building is part of his significance rather than a footnote to it. Source A shows how his meaning changed over time. {perspective|Buddhist painters working about 850 years after his reign show him kneeling to two golden statues}. The label says {perspective|his army won them fighting the Xiongnu, but the painters stand them in a temple hall as if they were Buddhas}, so {perspective|the most powerful emperor of the Han appears to honour the painters' own faith}. The older charge that Source B reports sees a different man: {perspective|an emperor "extravagant and superstitious", whose policies became "a burden on his people"}. Source B {interpretation|holds both views at once, which is why it says historians have treated him "with ambivalence"}. {interpretation|Its evidence, the doubled empire and the land still inside China, supports the state-builder reading more firmly than the Buddhist one}, which no record from his own time supports. Weighing the criteria, {significance|his long-term legacy is strongest: borders, Confucian officials and contact with Central Asia that lasted for centuries}. {significance|His impact on his own people is the weakness, through heavy taxes, revolts and the purges of his last years}, and {significance|his Repenting Edict of 89 BCE shows that even he judged part of his rule a failure}. {significance|His significance is therefore contested, and it changes with who is doing the measuring}.`
};

const EXPLANATIONS = {
"Level 6": {
  significance:   "Identifies one basic reason why he was important.",
  perspective:    "Identifies the point of view the painting takes.",
  interpretation: "Recognises that historians do not all agree."
},
"Level 7": {
  significance:   "Describes more than one reason, and one effect that lasted after he died.",
  perspective:    "Describes the point of view by saying how the painters show him and why.",
  interpretation: "Describes the different view in Source B and what each side looks at."
},
"Level 8": {
  significance:   "Explains significance with criteria: change caused, impact on people, legacy and perspective, each with evidence.",
  perspective:    "Explains the point of view by showing who the mural was made for.",
  interpretation: "Explains why historians differ: each side measures something different."
},
"Level 9": {
  significance:   "Makes a judgement, weighs strengths against weaknesses, and shows that significance is contested and changes with who measures it.",
  perspective:    "Compares the Buddhist painters' view with the older charge, outlining what each is placed to see.",
  interpretation: "Weighs the interpretations and says which is better supported by evidence, and why."
}
};

/* Verbatim from the Year 7 Ancient China Source Analysis Rubric, level for
   level. Do not paraphrase these, a student is marked against this wording,
   so the wall has to carry it exactly as the rubric does. The significance
   bands are the rubric's descriptive bands, and they name Qin Shi Huang
   because the rubric does; they are not rewritten for Emperor Wu. */
const CONTINUUM = {
significance:{
 "Level 6":"Identifies one basic reason why Qin Shi Huang (or another figure/event) was important. Provides simple statements such as “He changed China” or “He was powerful.”",
 "Level 7":"Describes more than one reason for Qin Shi Huang’s significance (e.g., unification, administration reforms). Shows some awareness that significance relates to impact or change. Begins to explain short-term or long-term effects. Uses some evidence from the sources or prior knowledge.",
 "Level 8":"Clearly explains why Qin Shi Huang was significant, using historical criteria such as: Impact on people, Long-term legacy, Changes caused, Perspectives (positive and negative). Shows awareness that significance can be interpreted differently by different groups (e.g., Han writers vs. modern historians). Uses evidence purposefully to support explanations.",
 "Level 9":"Makes a clear, insightful judgment about Qin Shi Huang’s significance and justifies it with multiple pieces of evidence. Evaluates significance through several criteria: Perspectives of different groups (ancient vs modern). Shows understanding that significance is complex, debatable, and changes over time, Analyses both strengths and limitations of Qin’s legacy (e.g., nation-building vs. oppression). Weighs up different historical interpretations and explains why one interpretation may be more convincing."},
perspective:{
 "Level 6":"I can identify different points of view in primary sources.",
 "Level 7":"I can describe different points of view in primary sources.",
 "Level 8":"I can explain different points of view in primary sources.",
 "Level 9":"I can compare and contrast different points of view in primary sources, outlining the similarities and differences."},
interpretation:{
 "Level 6":"I can recognise that historians may interpret historical events and developments differently.",
 "Level 7":"I can describe different historical interpretations of the past.",
 "Level 8":"I can explain different historical interpretations and contested debates about the past, providing different examples to show how people and events have been interpreted.",
 "Level 9":"I can analyse different historical interpretations and contested debates about the past and identify the evidence used to support these interpretations."},
};

/* Which question in the booklet each row is marked from, as the rubric
   itself maps them. It names the task, not the answer, so it stays. */
const TASK_MAP = {
  significance:   "Task 3: Qin Shi Huang: Q3, Q5",
  perspective:    "Task 3, Qin Shi Huang: Q2",
  interpretation: "Task 1, Source 2: Q5"
};

const SHEET_IMAGE = "wudi-mogao-323.jpg";

/* ---------------------------------------------------------------------------
   TWO sources that disagree: a later painting that claims him for Buddhism,
   and a modern summary that weighs his gains against his costs.

   SOURCES drives the tab strip on bump-it-up.html. Each entry carries its own
   hotspots, so a picture source and a written source behave identically.
   --------------------------------------------------------------------------- */
const SOURCES = [
 {
  id: "mural",
  tab: "A · The mural",
  kind: "image",
  file: SHEET_IMAGE,
  ar:   "960/1242",
  alt:  "A mural from the Mogao Caves. At the top, a temple hall with two tall standing statues inside. Below it Emperor Wu, the largest figure, kneels on a low platform facing the hall, with two attendants behind him. Officials in pale and orange robes stand to the left holding tablets. A dark panel of Chinese writing sits below the emperor.",
  missing: "The picture of the mural did not load.<br>Keep <b>wudi-mogao-323.jpg</b> in the same folder as this page.",
  cite: "Source A: mural in Cave 323, Mogao Caves, Dunhuang, China. Tang dynasty, 700s CE, artist unknown. Public domain. Photograph from Wikimedia Commons, File:HanWudiBuddhas.jpg. See SOURCE-NOTICE.md.",
  whole: { label:"The whole mural",
    text:"Painted on the wall of a Buddhist cave temple more than 800 years after Emperor Wu died. The painters never saw him. Every choice in it, who kneels and what is worshipped, is how later Buddhists wanted him remembered." },
  /* Percentages of the 960x1242 file, read off the image by cropping each
     region and checking it against the description before committing to the
     numbers. Nudge them if the plate is ever replaced with a different crop. */
  hotspots: [
   { x:35, y:19, w:22, h:24, label:"The two statues",
     text:"Two tall figures standing inside a temple hall. The writing below says his army won them fighting the Xiongnu. The painters show them as holy figures, in the place a temple keeps for what it worships." },
   { x:53, y:54, w:19, h:22, label:"The emperor, kneeling",
     text:"Emperor Wu, the biggest figure in the picture, kneeling on a low platform and facing the hall. The painters make the most powerful man in China bow, which is a strong claim about what he believed." },
   { x:16, y:56, w:37, h:33, label:"His officials",
     text:"Officials in court robes holding tablets, standing back from the emperor. Their presence makes this an act of the whole government, not a private prayer." },
   { x:56, y:75, w:16, h:23, label:"The written label",
     text:"A label in Chinese. It says the emperor won two golden statues in his war against the Xiongnu, set them up in his Ganquan Palace and worshipped them. A label tells the viewer how to read the picture." }
  ]
 },
 {
  id: "wikipedia",
  tab: "B · Wikipedia",
  kind: "text",
  cite: "Source B: Wikipedia, \"Emperor Wu of Han\", Legacy section, revision 1384672986 (November 2026), en.wikipedia.org/wiki/Emperor_Wu_of_Han. Shortened: … shows where words are left out. Text CC BY-SA 4.0, creativecommons.org/licenses/by-sa/4.0.",
  whole: { label:"The whole extract",
    text:"A modern summary, written by many unnamed volunteers, of what historians say about him. It is not a historian's own argument, so it reports the disagreement rather than settling it." },
  paragraphs: [
    "Historians have treated Emperor Wu with ambivalence, and there are certainly some contradictory accounts of his life. He roughly doubled the size of the Han empire of China during his reign, and much of the territory that he annexed is now part of modern China.",
    "Emperor Wu is said to have been extravagant and superstitious, allowing his policies to become a burden on his people. … The punishments for perceived failures and disloyalty were often exceedingly harsh.",
    "In 140 BC, Emperor Wu conducted an imperial examination of over 100 young scholars. … most of the scholars were commoners with no noble background. This event would have a major impact on Chinese history, marking the official start of the establishment of Confucianism as official imperial doctrine."
  ],
  hotspots: [
   { mark:"Historians have treated Emperor Wu with ambivalence", label:"Historians disagree, and it says so",
     text:"Ambivalence means having two opposite feelings at once. This sentence is the interpretations row: it tells you the judgement is argued over before giving either side." },
   { mark:"much of the territory that he annexed is now part of modern China", label:"A legacy you can measure",
     text:"Long-term significance. The result of his wars is still on the map more than two thousand years later." },
   { mark:"is said to have been", label:"Said by whom?",
     text:"The extract does not name who said it. A careful answer notices that a charge is being reported, not proved." },
   { mark:"allowing his policies to become a burden on his people", label:"The cost",
     text:"Impact on people. A strong answer holds this against the land he won rather than choosing one and ignoring the other." },
   { mark:"marking the official start of the establishment of Confucianism as official imperial doctrine", label:"A change that lasted",
     text:"Changes caused. Confucianism stayed the official teaching of Chinese government until the last emperor." }
  ]
 }
];

/* Anything that reads a single source still gets one. bump-it-up.html prefers
   SOURCES when it is defined. */
const SOURCE_PANEL = Object.assign({}, SOURCES[0]);
const HOTSPOTS = SOURCES[0].hotspots;

/* This wall has no rungs below Level 6: the CAT rubric it mirrors starts at
   Level 6 and its lowest band is "Not shown". Declared empty rather than
   omitted so every page that reads this file behaves the same. */
const EARLY_LEVELS = [];
const EARLY_EXAMPLES = {};
const EARLY_EXPLANATIONS = {};

/* Victorian Curriculum 2.0, History sub-strand "Using historical sources",
   one code per row in CRITERIA order: S04 (value of sources as evidence for
   significance), S05 (perspectives), S06 (interpretations). VC 2.0 bands two
   years at a time, so Levels 7 and 8 share a code. */
const VC = {
 "Level 6": [
   ["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"],
   ["VC2HH6S05","describe historical perspectives and identify beliefs, values and attitudes of people and groups based on evidence from primary sources"],
   ["VC2HH6S06","explain different historical interpretations"]],
 "Level 7": [
   ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"],
   ["VC2HH8S05","explain the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
   ["VC2HH8S06","analyse historical interpretations and debates"]],
 "Level 8": [
   ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"],
   ["VC2HH8S05","explain the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
   ["VC2HH8S06","analyse historical interpretations and debates"]],
 "Level 9": [
   ["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"],
   ["VC2HH10S05","analyse the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
   ["VC2HH10S06","evaluate historical interpretations and debates"]]
};
const VC_NOTE = "The rows are the Ancient China Source Analysis Booklet rubric, word for word. The significance bands name Qin Shi Huang because the rubric does; the same bands apply to any ruler. The codes are Victorian Curriculum 2.0, which has no separate significance code and folds it into S04.";

/* new: what this rung adds. background: the facts the rung's example uses
   that are not in either source. The page labels it "You need to know". */
const BUMP = {
 "Level 6": { new:"One reason he was important, and the side the painting takes.",
   background:"Emperor Wu ruled the Han dynasty from 141 to 87 BCE. He won wars that made the empire much bigger." },
 "Level 7": { new:"A second reason he mattered, and one effect that lasted after he died.",
   background:"He made Confucianism the official teaching for government officials. Much of the land he conquered is still part of China." },
 "Level 8": { new:"Significance measured with criteria: change caused, impact on people, legacy. A reason the views of him differ.",
   background:"He sent his envoy Zhang Qian west in 139 BCE. He paid for his wars with heavy taxes and by making salt and iron a government business." },
 "Level 9": { new:"A judgement, with the views weighed against each other, and significance shown to change with who measures it.",
   background:"Buddhism reached China after Emperor Wu died. In 89 BCE he issued the Repenting Edict, apologising to the nation for his past policy mistakes." }
};

const GLOSS = {
 tier2: {
   "ambivalence":"having two opposite feelings at once",
   "extravagant":"spending far too much",
   "superstitious":"believing in magic and luck",
   "annexed":"took over and added to a country",
   "doctrine":"a set of official beliefs",
   "commoners":"ordinary people, not nobles",
   "burden":"a heavy load to carry",
   "envoy":"a person sent to speak for a ruler"
 },
 tier3: {
   "primary source":"Was created at the time being studied. It shows the view of people who saw the events first-hand.",
   "secondary source":"Was created after the time being studied. It is made by people who combine primary sources to explain the past.",
   "perspective":"A person's point of view, shaped by who they are and what they have experienced.",
   "interpretation":"An explanation of what something means, which different people may see in different ways.",
   "significance":"How important something was, how many people it affected and for how long.",
   "contested":"Argued about. Historians disagree about a contested claim.",
   "legacy":"Something from the past that still affects us today.",
   "dynasty":"A line of rulers usually a family line. In China a dynasty ended when a rebellion or a war removed the family from power.",
   "Confucianism":"The teachings of Confucius, which stress good conduct, family duty and rulers who lead by example, to build a just and peaceful society.",
   "Buddhism":"The beliefs based on the teachings of the Buddha: that suffering is caused by desire, and that people can reach nirvana, a state of bliss free from rebirth.",
   "Buddhist":"A follower of Buddhism, the beliefs based on the teachings of the Buddha.",
   "mural":"A painting made directly on a wall.",
   "Xiongnu":"Nomadic peoples of the northern grasslands who fought the Han for centuries."
 }
};

/* One line per row, in CRITERIA order: significance, perspectives,
   interpretations. */
const KID = {
 "Level 6": { band:"Level 6", lines:[
   "I can say one reason a ruler was important.",
   "I can say whose side the source takes.",
   "I can say that historians do not all agree."]},
 "Level 7": { band:"Level 7", lines:[
   "I can give more than one reason a ruler mattered, including one that lasted after them.",
   "I can describe the point of view in the source.",
   "I can describe a different explanation of the same ruler."]},
 "Level 8": { band:"Level 8", lines:[
   "I can explain a ruler's significance using change, impact on people, legacy and perspective.",
   "I can explain who a source was made for and how that shapes its point of view.",
   "I can explain why two accounts of the same ruler disagree."]},
 "Level 9": { band:"Level 9", lines:[
   "I can make a judgement about a ruler's significance, weigh the strengths against the weaknesses, and show that it is argued over.",
   "I can compare two points of view and say what each is placed to see.",
   "I can weigh interpretations and say which the evidence supports better."]}
};

/* The paragraph shape Task 3, Q5 wants, in the order the answer builds. */
const FRAME = {
  blurb: "Q5 asks you to evaluate a ruler's significance from the sources and your own knowledge. These are the moves.",
  steps: [
    { key:"perspective",    label:"Whose side?",     prompt:"How does each source show the ruler, and who was it made for?" },
    { key:"interpretation", label:"Who disagrees?",  prompt:"What do the different views say, and why do they differ?" },
    { key:"significance",   label:"Weigh the ruler", prompt:"What changed because of them, who paid for it, and what lasted? Make a judgement and hold the strengths and weaknesses together." }
  ]
};
