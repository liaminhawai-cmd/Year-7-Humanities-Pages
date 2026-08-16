/* =======================================================================
   CONTENT BLOCK for the Ancient China WAGOLL family.
   This is the ONLY place the wall text lives.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.

   ------------------------------------------------------------------
   THIS WALL REHEARSES CAT 3.

   Every other wall in this site runs Foundation to Year 10, because it is
   showing a skill growing across the whole school. This one does not. It
   runs Level 6 to Level 9, because that is exactly what the Ancient China
   Source Analysis Booklet rubric runs, and the point of this wall is that a
   student can see their own CAT band on it.

   The six criteria are the rubric's own rows, in the rubric's own words:
   its five numbered source-analysis rows plus the significance strand that
   Task 3 adds. The wall is built on Task 3, Qin Shi Huang, because it is
   the only task in the booklet that touches all six at once: a primary
   painting, a secondary interpretation, and a judgement about a person.
   ======================================================================= */

const WALL = {
  id: "hist-china",
  title: "The First Emperor, weighed",
  expected: "Level 7",
  inquiry: "Qin Shi Huang made China one country. He also burned the books and killed the scholars who argued. How do you weigh a person like that?",
  foot: "<b>Sources:</b> a later Chinese painting of the burning of the books and the execution of 460 scholars, and an interview with <b>Peter Bol</b> of Harvard University, recorded by the BBC. Both appear in Task 3 of the Year 7 Ancient China Source Analysis Booklet, and the rows on this wall are that booklet's rubric, level for level. The painting is not contemporary with Qin Shi Huang, and that is part of what there is to analyse."
};

const FACTS = [
  ["The person", "Qin Shi Huang, who conquered the other states one by one and became the first ruler of a united China in 221 BCE."],
  ["Source 1", "A Chinese painting showing the burning of the books and the execution of 460 scholars. Painted long after the events it shows."],
  ["Source 3", "Peter Bol, a historian at Harvard University, speaking to the BBC. A secondary source: a modern expert explaining the past."],
  ["What he built", "One system of writing, weights, measures and law across every conquered state. Taxes collected and justice run by trained officials."],
  ["What it cost", "Conquered populations enslaved. Scholars killed. Books destroyed. The terracotta army built by forced labour."],
  ["Why he is hard", "The same actions produced the achievement and the cruelty. Neither cancels the other, and a judgement has to hold both."]
];

/* ink: the colour on paper, all six above 4.5:1 on the wall's cream
   lamp, the same criterion on the dark bar of the big-screen tool underline, the second channel, which survives a greyscale photocopy and
               a colour-blind reader. Six criteria and only five underline
               styles exist, so significance also carries a weight, and no
               two rows are told apart by colour alone. */
const CRITERIA = [
  { key:"origin",         row:"Origin, features &amp; purpose",  name:"Origin, features &amp; purpose",  glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"context",        row:"Historical context",              name:"Historical context",              glyph:"▲",
    ink:"#2f6b3f", lamp:"#74c288", underline:"dashed" },
  { key:"perspective",    row:"Historical perspectives",         name:"Historical perspectives",         glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
  { key:"interpretation", row:"Historical interpretations",      name:"Historical interpretations",      glyph:"◆",
    ink:"#6b4a86", lamp:"#bda0d8", underline:"double" },
  { key:"useful",         row:"Usefulness",                      name:"Usefulness",                      glyph:"★",
    ink:"#7a5a10", lamp:"#e0bd63", underline:"wavy" },
  { key:"significance",   row:"Historical significance",         name:"Historical significance",         glyph:"✦",
    ink:"#9b2f22", lamp:"#f0968a", underline:"solid", weight:"3px" },
];

/* The CAT rubric's own bands. Not Foundation to Year 10. This wall is the
   assessment, and a student should find their own row on it. */
const LEVELS = ["Level 6","Level 7","Level 8","Level 9"];

const EXAMPLES = {
"Level 6":
`Source 1 is {origin|a painting}. It shows {origin|books being burned and scholars being killed}. It was made {origin|a long time after it happened}, so it is a secondary source. In Ancient China, {context|Qin Shi Huang was the first emperor and ruled every state}. The painter shows the emperor {perspective|as cruel, standing over the killing}. Source 3 is different, because {interpretation|Peter Bol says China would not exist without him}. Source 1 is {useful|useful for showing what people thought of the emperor}. Qin Shi Huang is {significance|important because he made China one country}.`,

"Level 7":
`Source 1 is {origin|a Chinese painting of the burning of the books and the killing of 460 scholars}. Because it was painted {origin|long after these events happened}, it is a secondary source rather than an eyewitness record. Its purpose was {origin|to show what the emperor did, and to judge him for it}. At this time {context|Qin Shi Huang had defeated every rival state}. He was {context|forcing one law, one script and one set of measures on all of them}. The painting clearly takes a side, because {perspective|it shows the scholars as the victims}. It also shows {perspective|the emperor as the man who gave the order}. Source 3 does not agree, since {interpretation|Peter Bol calls the same emperor the founder of China}. The painting is {useful|useful evidence for how later people remembered him}. It {useful|cannot tell us what really happened in 213 BCE}. He is important because {significance|he turned many separate states into a single country}. He matters too because {significance|the officials and taxes he introduced lasted for centuries afterwards}.`,

"Level 8":
`Source 1 is {origin|a painting of the burning of the books and the killing of 460 scholars}, made {origin|well after the Qin dynasty had fallen}. That matters, because {origin|it holds a memory of the event rather than a record of it}, and its purpose is {origin|to pass judgement as much as to describe}. The events sit inside a conquest, in which {context|Qin Shi Huang took the neighbouring states one by one and enslaved their people}, and then {context|replaced their scripts, weights and laws with his own}. Killing the scholars was part of that same plan, {context|because the books he burned carried the older states' ideas}. The painting takes a clear position, since {perspective|it puts the scholars at the centre as victims}, and {perspective|presents the emperor as the author of their deaths}. Peter Bol reads him very differently, because {interpretation|he treats the same drive to centralise as an extraordinary achievement}. He argues {interpretation|that China itself would not exist without it}, and the two accounts differ because they answer different questions. Source 1 is {useful|strong evidence for how the First Emperor was remembered}, but {useful|weak evidence for the events themselves, because nothing in it dates from the time}. His significance is real, but it is double. {significance|He created a unified China and a system of government that lasted two thousand years}. {significance|He achieved it through warfare, forced labour and the destruction of learning}.`,

"Level 9":
`Source 1 reaches us {origin|as a later painting rather than as testimony}. Its explicit content is {origin|the burning of the books and the execution of 460 scholars}, while its implicit argument is {origin|that this is how the First Emperor ought to be remembered}. Nothing in it was made by a witness, {origin|which limits what it can properly be asked to prove}. The context explains the target, because {context|Qin Shi Huang had ended the rival states by force}, and was {context|imposing a single script, currency, set of measures and legal code across all of them}. The scholars died for carrying learning that belonged to the world he was replacing. The two sources hold opposite points of view: {perspective|the painting speaks for the scholars, arranging the scene so the viewer stands with the dying}. {perspective|Bol speaks as a modern historian, asking how a state came to exist at all}. Their interpretations diverge because they answer different questions. {interpretation|The painting asks whether he was admirable; Bol asks whether he was decisive}. Bol is also explicit about the cost, acknowledging that {interpretation|the mobilisation that enslaved conquered citizens is what produced a working government}. As evidence, {useful|the painting is reliable for later memory and unreliable for 213 BCE}, while {useful|Bol is authoritative on the structure of the Qin state, yet he remains a single interpretation}. Weighing them together, {significance|Qin Shi Huang is significant in the strongest historical sense}. He matters {significance|not because he was admirable, but because the unified China he forced into being outlasted his own dynasty by two thousand years}. {significance|That significance stays contested rather than settled, because the writers who recorded him, the painter who condemned him and the historian who explains him each measure him against something different}.`
};

const EXPLANATIONS = {
"Level 6": {
  origin:         "Names the source, one feature in it, and that it is not from the time.",
  context:        "Identifies who Qin Shi Huang was and what he ruled.",
  perspective:    "Identifies the point of view the painter takes.",
  interpretation: "Recognises that a historian says something different.",
  useful:         "Gives one thing the source is useful for.",
  significance:   "Identifies one reason he was important."
},
"Level 7": {
  origin:         "Identifies origin, content and purpose, and works out primary or secondary from the date.",
  context:        "Outlines the conquest and the forced standardisation the events sit inside.",
  perspective:    "Describes the point of view by naming who is shown as victim and who as cause.",
  interpretation: "Describes a different interpretation and attributes it to the historian who holds it.",
  useful:         "Draws a conclusion about usefulness, then bounds it with what the source cannot reach.",
  significance:   "Describes significance by naming impact at the time and after it."
},
"Level 8": {
  origin:         "Describes origin, content and purpose, and explains what being painted later does to the evidence.",
  context:        "Describes the context and connects the killings to the same programme as the conquest.",
  perspective:    "Explains the point of view by showing how the painting is composed to produce it.",
  interpretation: "Explains both interpretations and gives the reason they differ.",
  useful:         "Compares the two sources and asks what each is and is not good for.",
  significance:   "Explains significance across the short and long term, holding achievement and cost together."
},
"Level 9": {
  origin:         "Explains origin and separates explicit content from implicit argument.",
  context:        "Explains context and uses it to account for why the scholars in particular were targeted.",
  perspective:    "Compares and contrasts two points of view, outlining what each is positioned to see.",
  interpretation: "Analyses why the interpretations differ and identifies the evidence each rests on.",
  useful:         "Identifies the accuracy and reliability of each source and says what each claim is worth.",
  significance:   "Evaluates significance from several perspectives and recognises that it is debatable."
}
};

/* Verbatim from the Year 7 Ancient China Source Analysis Rubric, level for
   level. Do not paraphrase these, a student is marked against this wording,
   so the wall has to carry it exactly as the booklet does. */
const CONTINUUM = {
origin:{
 "Level 6":"I can identify different types of historical sources.",
 "Level 7":"I can identify the origin, content features and purpose of historical sources.",
 "Level 8":"I can describe the origin, content features and purpose of historical sources.",
 "Level 9":"I can explain the origin, content features and purpose of historical sources."},
context:{
 "Level 6":"I can identify the historical context of a source.",
 "Level 7":"I can describe the historical context of a source.",
 "Level 8":"I can describe the historical context of sources to determine the perspectives of people from the past and recognise different points of view.",
 "Level 9":"I can explain the historical context of sources."},
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
useful:{
 "Level 6":"I can recognise that some historical sources are more useful than others.",
 "Level 7":"I can draw conclusions about the usefulness of sources.",
 "Level 8":"I can compare and contrast historical sources and ask questions about their usefulness.",
 "Level 9":"I can compare and contrast historical sources and identify their usefulness."},
significance:{
 "Level 6":"I can identify one basic reason why Qin Shi Huang was important.",
 "Level 7":"I can describe more than one reason for his significance and begin to explain short-term or long-term effects.",
 "Level 8":"I can clearly explain why he was significant using historical criteria: impact on people, long-term legacy, changes caused, and perspectives.",
 "Level 9":"I can evaluate significance through several criteria, weigh different interpretations, and show that significance is complex, debatable and changes over time."},
};

/* Which question in the booklet each row is marked from. The rubric maps
   these itself; carrying the map here is what turns the wall from a poster
   into a revision tool for the actual CAT. */
const TASK_MAP = {
  origin:         "Task 1: Source 1: Q1&ndash;3 &middot; Source 2: Q4 &middot; Task 2, Jade Suit: Q1, Q2", context: "Task 2, Jade Suit: Q3",
  perspective:    "Task 3, Qin Shi Huang: Q2", interpretation: "Task 1, Source 2: Q5",
  useful:         "Task 4 (Level 7 option)",
  significance:   "Task 3: Qin Shi Huang: Q3, Q5"
};

const SHEET_IMAGE = "";

const SOURCE_PANEL = {
  kind: "text",
  paragraphs: [
    "SOURCE 1: A Chinese painting illustrating Qin Shi Huang's burning of the books and execution of 460 scholars.",
    "SOURCE 3: Peter Bol, Harvard University, interviewed by the BBC: \"We wouldn't have a China without Qin Shi Huang. It's that simple. China at the time was a land of many states. Qin Shi Huang built a formidable fighting machine. His army is easy to imagine because he left us the famous terracotta warriors in Xian.\"",
    "\"The Qin was really the first state to go into total mobilisation for war. It really saw the work of its population being fighting and soldiering to win wars and expand. One by one, Qin Shi Huang defeated neighbouring states, swallowed their territory into his growing empire and enslaved and castrated their citizens.\"",
    "\"Qin Shi Huang is credited not only with creating China, but with establishing the world's first truly centralised bureaucratic empire. He set out to unify the procedures and customs and policies of all the states.\"",
    "\"He collected taxes, he administered justice and he had trained bureaucrats all over China. That's an extraordinary achievement.\""
  ],
  cite: "Task 3 of the Year 7 Ancient China Source Analysis Booklet. Source 1 is a later painting; Source 3 is Carry Grace and Peter Bol of Harvard University, for the BBC.",
  whole: { label:"Both sources together",
    text:"A painting that condemns him and a historian who explains him, on the same page. The booklet puts them together on purpose: the gap between them is the task." }
};

const HOTSPOTS = [
 { mark:"burning of the books and execution of 460 scholars", label:"What the painting chooses to show",
   text:"Of everything Qin Shi Huang did, the painter picked this. That choice is the point of view. Ask what the same painter left out, the roads, the single script, the canals." },
 { mark:"We wouldn't have a China without Qin Shi Huang", label:"An interpretation, stated flat",
   text:"This is a historian's claim, not a fact you can look up. It is exactly the kind of sentence the interpretations row is asking you to describe, explain, or analyse." },
 { mark:"enslaved and castrated their citizens", label:"Bol does not soften it",
   text:"Notice that the historian who calls him extraordinary also records the cruelty in the same breath. Significance is not the same as approval, and this sentence is where students usually see that." },
 { mark:"That's an extraordinary achievement", label:"The word to argue with",
   text:"Achievement for whom? A Level 9 answer weighs this against the previous sentence rather than choosing one and ignoring the other." }
];

/* This wall has no rungs below Level 6: the CAT rubric it mirrors starts at
   Level 6 and its lowest band is "Not shown". Declared empty rather than
   omitted so every page that reads this file behaves the same. */
const EARLY_LEVELS = [];
const EARLY_EXAMPLES = {};
const EARLY_EXPLANATIONS = {};

/* Victorian Curriculum 2.0, History sub-strand "Using historical sources".
   The unit plan for Ancient China still cites VCHHK codes, which are
   Victorian Curriculum 1.0; the 2.0 equivalents are below. VC 2.0 bands two
   years at a time, so Levels 7 and 8 share a code. */
const VC = {
 "Level 6": [
   ["VC2HH6S03","describe the features, content and context of historical sources"],
   ["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"],
   ["VC2HH6S05","describe historical perspectives and identify beliefs, values and attitudes of people and groups based on evidence from primary sources"],
   ["VC2HH6S06","explain different historical interpretations"]],
 "Level 7": [
   ["VC2HH8S03","explain the features, content and context of historical sources"],
   ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"],
   ["VC2HH8S05","explain the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
   ["VC2HH8S06","analyse historical interpretations and debates"]],
 "Level 8": [
   ["VC2HH8S03","explain the features, content and context of historical sources"],
   ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"],
   ["VC2HH8S05","explain the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
   ["VC2HH8S06","analyse historical interpretations and debates"]],
 "Level 9": [
   ["VC2HH10S03","analyse the purpose, features, content and context of historical sources"],
   ["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"],
   ["VC2HH10S05","analyse the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
   ["VC2HH10S06","evaluate historical interpretations and debates"]]
};
const VC_NOTE = "The rows on this wall are the Ancient China Source Analysis Booklet rubric, word for word, because that is what the CAT is marked against. The codes are Victorian Curriculum 2.0. Two things are worth knowing. The unit plan for this topic still cites VCHHK codes, which belong to Victorian Curriculum 1.0 and have been superseded. And the booklet's significance strand has no equivalent code of its own: VC 2.0 folds significance into the value-of-sources descriptor (S04) rather than making it a separate skill, which is why the significance row here is the only one whose wording is the rubric's descriptive bands rather than an 'I can' statement. See CURRICULUM-CHECK.md.";

const BUMP = {
 "Level 6": "You have named the source and one reason he mattered. To reach Level 7, say what the source was FOR, and give a second reason he mattered, one that lasted after he died.",
 "Level 7": "You have described the point of view and drawn a conclusion about usefulness. To reach Level 8, say WHY the painting and the historian disagree, and compare what each source is good for rather than judging them one at a time.",
 "Level 8": "You have explained both interpretations and held the achievement against the cost. To reach Level 9, weigh them: say which claim is better supported and why, and show that his significance is argued over rather than agreed.",
 "Level 9": "You are evaluating from several positions and treating significance as contested. Keep the evidence attached to every claim, at this level an unsupported judgement costs more than a cautious one."
};

const GLOSS = {
 tier2: {
   "swallowed":"took over completely",
   "mobilisation":"getting everyone ready for one purpose, usually war",
   "outlasted":"lasted longer than",
   "imposing":"forcing something onto people",
   "condemned":"said it was very wrong"
 },
 tier3: {
   "primary source":"Something made at the time by someone who was there.",
   "secondary source":"Something made later by someone explaining the past.",
   "origin":"Where a source came from: who made it, when, and where.",
   "purpose":"The reason a source was made.",
   "historical context":"What was happening at the time that helps explain the source.",
   "perspective":"How something looks from one person's or group's point of view.",
   "interpretation":"A historian's explanation of what the past means.",
   "contested":"Argued over, with people holding different views.",
   "reliability":"How much a source can be trusted.",
   "usefulness":"How much a source helps answer the question being asked.",
   "significance":"How important something was, at the time and afterwards.",
   "legacy":"What is left behind and still matters long after.",
   "unify":"To make separate things into one.",
   "centralised":"Run from one place, by one government.",
   "bureaucratic":"Run by trained officials following set rules.",
   "dynasty":"A line of rulers from the same family.",
   "standardisation":"Making everything follow the same system.",
   "forced labour":"Work people are made to do without choice or pay.",
   "scholar":"Someone whose work is studying and learning.",
   "terracotta":"Baked clay, the material the buried army is made from."
 }
};

const KID = {
 "Level 6": { band:"Level 6", lines:[
   "I can say what kind of source it is.",
   "I can say what was happening at the time.",
   "I can say whose side the source takes.",
   "I can say that historians do not all agree.",
   "I can say one thing the source is good for.",
   "I can say one reason he was important."]},
 "Level 7": { band:"Level 7", lines:[
   "I can say where the source came from, what is in it, and why it was made.",
   "I can describe what was happening at the time.",
   "I can describe the point of view in the source.",
   "I can describe a historian's different explanation.",
   "I can say how useful the source is, and what it cannot tell me.",
   "I can give more than one reason he mattered, including one that lasted."]},
 "Level 8": { band:"Level 8", lines:[
   "I can describe where the source came from and explain what being made later does to it.",
   "I can describe the context and use it to work out how people saw things.",
   "I can explain how the source builds its point of view.",
   "I can explain why two accounts of the same person disagree.",
   "I can compare two sources and ask what each is good for.",
   "I can explain his significance using impact, legacy, change and perspective."]},
 "Level 9": { band:"Level 9", lines:[
   "I can explain what a source says openly and what it argues underneath.",
   "I can explain the context well enough to say why these people were targeted.",
   "I can compare two points of view and say what each is placed to see.",
   "I can analyse why interpretations differ and name the evidence behind each.",
   "I can judge how accurate and reliable each source is.",
   "I can evaluate significance from several sides and show that it is argued over."]}
};

/* The paragraph shape the booklet's extended answers want. The letters are
   the criteria themselves, in the order Task 3 asks for them. */
const FRAME = {
  blurb: "Task 3 asks for source analysis and significance in one answer. These are the moves, in the order the booklet asks for them.",
  steps: [
    { key:"origin",         label:"Say what it is",      prompt:"Name the source, what is in it, and why it was made. Is it primary or secondary, and how do you know?" },
    { key:"context",        label:"Set the scene",       prompt:"What was happening at the time that explains this source?" },
    { key:"perspective",    label:"Whose side?",         prompt:"Whose point of view does the source take? How can you tell from the way it is made?" },
    { key:"interpretation", label:"Who disagrees?",      prompt:"What does the other source say instead, and why do the two differ?" },
    { key:"useful",         label:"What is it worth?",   prompt:"What is each source good evidence for, and what can it not reach?" },
    { key:"significance",   label:"Weigh him",           prompt:"How important was he, at the time and long after? Hold the achievement and the cost together." }
  ]
};
