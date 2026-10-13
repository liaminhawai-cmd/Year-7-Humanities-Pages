/* =======================================================================
   CONTENT BLOCK for the lesson 1.4 bump-it-up: Why did Rome win the war
   against Hannibal?

   HIDDEN. This page is not in the site map and nothing links to it. The
   teacher opens it by its address after students have written a first
   draft on the 1.4 worksheet, so the models are not seen before the draft.
   Keep it out of tools/build_index_pages.py.

   It rehearses the two CAT 2 rows that are ways of thinking, chronology and
   cause and effect, in the rubric's own words (AGENTS.md rules 2 to 4). The
   worked examples use only what is on the worksheet's fact box, the 1.4
   reading and the two videos, so a student can see every claim is
   reachable from what they had.

   Mark evidence in an example with {key|the phrase}.
   ======================================================================= */

const WALL = {
  id: "hist-hannibal",
  title: "Why did Rome win the war against Hannibal?",
  expected: "Level 7",
  inquiry: "Why did Rome win the war against Hannibal?",
  foot: "<b>Sources:</b> the fact box on the 1.4 worksheet, written for this lesson from the 1.4 reading, the BBC clip on Hannibal's elephants and Polybius, a Greek historian who wrote about seventy years after the war. The worked examples were written for this page."
};

const FACTS = [
  ["Who", "Hannibal, a general from Carthage, a trading city in North Africa. Rome and Carthage fought three wars, the Punic Wars."],
  ["When", "The Second Punic War, 218 to 202 BCE. It sits inside Rome's republican period (509 to 27 BCE)."],
  ["Where", "Hannibal marched from Spain, over the Alps and into Italy. The war ended at Zama, in North Africa."],
  ["How we know about the elephants", "Mostly from Polybius, a Greek historian writing about seventy years later, who had spoken to people who were there."]
];

const CRITERIA = [
  { key:"chron", row:"Chronology",       name:"Chronology",       glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"cause", row:"Cause and effect", name:"Cause and effect", glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
];

const LEVELS = ["Level 6","Level 7","Level 8","Level 9"];

const EXAMPLES = {
"Level 6":
`Rome won the war against Hannibal for a few reasons. {chron|First, in 218 BCE, Hannibal crossed the Alps with elephants} and {cause|beat the Romans in big battles}. {chron|Then} {cause|most of his elephants died in the cold winter}. {chron|After that,} {cause|Fabius Maximus stopped fighting big battles, so Hannibal could not win}. {chron|Later} {cause|Rome attacked Africa, so Hannibal had to go home}. {chron|At the end, at Zama,} {cause|his elephants ran the wrong way and Rome won}. Rome won because it kept going.`,

"Level 7":
`Rome won the war against Hannibal because it did not give up and it changed its plan. {chron|In 218 BCE Hannibal crossed the Alps into Italy with about 40 elephants}, and {cause|for Roman soldiers and their horses, who had never seen an elephant, the effect was terror}. {chron|Two years later, in 216 BCE,} {cause|he destroyed a Roman army at Cannae, and some of Rome's allies in Italy joined him}. {cause|Fabius Maximus then stopped fighting big battles, which kept Rome's armies alive}. {cause|When Rome attacked Spain and North Africa, Carthage needed Hannibal back, so he left Italy}. {chron|In 202 BCE, sixteen years after he crossed the Alps,} {cause|he was beaten at Zama}. Rome won because it lasted longer than Hannibal could.`,

"Level 8":
`Rome won the war against Hannibal because its leaders changed their plan when the old one failed. {chron|The Second Punic War, from 218 to 202 BCE, was fought during Rome's republican period}. {cause|Hannibal brought elephants over the Alps because he wanted a weapon that would panic the Romans}, {cause|but the cold killed almost all of them in the first winter}. {chron|Even so, in 216 BCE} {cause|he won at Cannae, so Rome needed a new plan}. {cause|Fabius Maximus refused to fight big battles, because Rome kept losing them, and his aim was to wear Hannibal down}. {cause|Rome then attacked Spain and North Africa so that Carthage would call Hannibal home}. {chron|At Zama, the last battle,} {cause|the Romans opened gaps in their lines and blew trumpets, and the frightened elephants turned on Hannibal's own side}. Rome's choices, more than its strength in battle, won the war.`,

"Level 9":
`Rome won the war against Hannibal because it could keep fighting for longer than he could. {chron|The Second Punic War lasted sixteen years, from 218 to 202 BCE, and for most of it Hannibal's army was in Italy}. {cause|His elephants were meant to win quick victories by panicking the Romans, but that effect was short: within months of the crossing almost all of them had died in the cold}. {chron|His greatest win, at Cannae in 216 BCE, came two years later, after the elephants were gone}, {cause|which suggests they were never the main reason he won}. {cause|The turning point was Rome's choice of a slower plan: Fabius avoided battles, and Rome attacked Spain and North Africa, so Carthage had to call Hannibal home}. {chron|At Zama in 202 BCE, the last battle of the war,} {cause|the elephants did the opposite of what Hannibal intended and ran into his own cavalry}. Hannibal won the battles, but Rome won the war, because Rome could keep going and Hannibal, far from Carthage, could not.`
};

const EXPLANATIONS = {
"Level 6": {
  chron: "The blue phrases put the events in order with first, then, after that and later.",
  cause: "The orange phrases name causes and what each one led to." },
"Level 7": {
  chron: "The blue phrases use BCE dates and measure the time between them: two years later, sixteen years after.",
  cause: "The orange phrases say how events affected different people and groups: Roman soldiers, Rome's allies, Carthage." },
"Level 8": {
  chron: "The blue phrases place the war in a period: the Second Punic War, inside Rome's republican period.",
  cause: "The orange phrases give motives: what Hannibal wanted, and what Fabius was trying to do." },
"Level 9": {
  chron: "The blue phrases say how long things lasted: a sixteen-year war, elephants gone within months, a win two years later.",
  cause: "The orange phrases weigh the causes: the elephants were not the main reason, the slower plan was the turning point, and one result was the opposite of what was intended." }
};

/* CAT 2 rubric, Ancient Rome, 2025. Quoted exactly (rule 4). */
const CONTINUUM = {
chron:{
 "Level 6":"I can sequence events and people in chronological order, and represent time by creating timelines.",
 "Level 7":"I can sequence events and developments within a chronological framework, using dating conventions to represent and measure time.",
 "Level 8":"I can sequence events and developments within a chronological framework with reference to periods of time.",
 "Level 9":"I can sequence events and developments within a chronological framework with reference to periods of time and their duration."},
cause:{
 "Level 6":"I can identify the causes and effects of events and developments.",
 "Level 7":"I can describe the causes and effects of events and developments on societies, individuals, and groups.",
 "Level 8":"I can explain the causes and effects of events and developments and identify the motives and actions of people at the time.",
 "Level 9":"I can analyse the causes and effects of events and developments and explain the motives and actions of people at the time."},
};

const SHEET_IMAGE = "";

/* The worksheet's fact box, as the source panel, so the class can see that
   every claim in the examples comes from something they had. */
const SOURCES = [
 {
  id: "facts",
  tab: "The fact box",
  kind: "text",
  cite: "Fact box from the 1.4 worksheet, written for this lesson.",
  whole: { label:"The fact box", text:"Everything the worked examples use is here or in the 1.4 reading." },
  paragraphs: [
   "264 to 241 BCE: the First Punic War. Rome beats Carthage and takes Sicily and Sardinia.",
   "218 BCE: Hannibal, a general from Carthage, leads an army from Spain over the Alps into Italy, with about 40 war elephants.",
   "Elephants were a terror weapon. They were huge, loud and fast, up to about 40 km an hour. Soldiers and horses who had never seen one panicked.",
   "Elephants were unpredictable. Once frightened or angry, they could attack their own side.",
   "Late 218 BCE: after the Battle of the Trebia, the cold winter killed almost all of Hannibal's elephants. Only one survived.",
   "216 BCE: Hannibal wins his biggest victory, at Cannae, without elephants. Some of Rome's allies in Italy join him.",
   "Fabius Maximus, a Roman general, refuses to fight Hannibal in big battles. Rome attacks Carthage's lands in Spain and North Africa instead, and Carthage calls Hannibal home.",
   "202 BCE: at Zama in North Africa, Hannibal has about 80 new elephants. The Romans leave gaps in their lines and blow trumpets. The elephants run through the gaps or turn back onto Hannibal's own cavalry. Rome wins the war."
  ],
  hotspots: [
   { mark:"with about 40 war elephants", label:"The elephants arrive",
     text:"Hannibal's plan for the elephants starts here, in 218 BCE." },
   { mark:"Only one survived", label:"The first winter",
     text:"Within months, almost all of the elephants are dead." },
   { mark:"without elephants", label:"Cannae",
     text:"His biggest win comes with no elephants at all." },
   { mark:"refuses to fight Hannibal in big battles", label:"Rome's new plan",
     text:"Fabius stops giving Hannibal the battles he keeps winning." },
   { mark:"turn back onto Hannibal's own cavalry", label:"Zama",
     text:"The weapon works against the side that brought it." }
  ]
 }
];
const SOURCE_PANEL = Object.assign({}, SOURCES[0]);
const HOTSPOTS = SOURCES[0].hotspots;

/* The rungs below Level 6, where the CAT rubric is blank. They carry a
   worked example and the Victorian Curriculum code only (rule 5). The
   Foundation to Level 2 example sounds like a seven-year-old on purpose. */
const EARLY_LEVELS = ["Foundation to Level 2", "Levels 3 and 4", "Level 5"];

const EARLY_EXAMPLES = {
 "Foundation to Level 2":
`Hannibal had elephants. {chron|First} he took them over some big snowy mountains. {cause|The elephants got really cold and most of them died}. {chron|Then} there was a big fight. {cause|The Romans blew trumpets and the elephants got scared and ran the wrong way}. {chron|At the end} Rome won. I like elephants.`,

 "Levels 3 and 4":
`Hannibal crossed the Alps with about 40 elephants {chron|in 218 BCE}. {cause|The Romans were scared because they had never seen an elephant before}. {chron|That winter} {cause|it was so cold that nearly all the elephants died}. {chron|After that} Hannibal still won a big battle at Cannae. {chron|In the end, at Zama,} {cause|the Romans blew trumpets and the elephants ran back into Hannibal's own army}, so Rome won the war.`,

 "Level 5":
`Rome won the war against Hannibal, even though he won lots of battles. {chron|In 218 BCE} he crossed the Alps with about 40 elephants {cause|to frighten the Romans}. {cause|The plan worked at first, but the cold winter killed almost all of them}. {chron|In 216 BCE} he beat the Romans at Cannae anyway. {cause|Then Rome attacked Carthage's lands in Africa, so Hannibal had to go home}. {chron|At Zama in 202 BCE} {cause|his new elephants turned on his own side, and Rome won}.`
};

const EARLY_EXPLANATIONS = {
 "Foundation to Level 2": {
   chron: "Puts events in order with first, then and at the end (VC2HH2S02).",
   cause: "Says why something happened (VC2HH2S06)." },
 "Levels 3 and 4": {
   chron: "Uses a date and puts events across a few years in order (VC2HH4S02).",
   cause: "Says what caused a change and what it led to (VC2HH4S07)." },
 "Level 5": {
   chron: "Uses three BCE dates in the right order (VC2HH6S02).",
   cause: "Explains causes and effects from the start of the war to the end (VC2HH6S08)." }
};

const VC = {
 "Foundation to Level 2": [
  ["VC2HH2S02","sequence events chronologically"],
  ["VC2HH2S06","identify the causes and consequences of changes"]],
 "Levels 3 and 4": [
  ["VC2HH4S02","sequence significant events and peoples’ life stories chronologically to identify continuity and change"],
  ["VC2HH4S07","describe the causes and consequences of change"]],
 "Level 5": [
  ["VC2HH6S02","sequence significant events, developments and the lives of individuals chronologically to describe continuity and change, and causes and consequences"],
  ["VC2HH6S08","explain the causes and consequences of significant events and developments"]],
 "Level 6": [
  ["VC2HH6S02","sequence significant events, developments and the lives of individuals chronologically to describe continuity and change, and causes and consequences"],
  ["VC2HH6S08","explain the causes and consequences of significant events and developments"]],
 "Level 7": [
  ["VC2HH8S02","sequence significant events, individuals, ideas and developments chronologically to explain continuity and change and causes and consequences"],
  ["VC2HH8S08","explain the causes and consequences of significant events, individuals, ideas and developments and their contribution to continuity and change"]],
 "Level 8": [
  ["VC2HH8S02","sequence significant events, individuals, ideas and developments chronologically to explain continuity and change and causes and consequences"],
  ["VC2HH8S08","explain the causes and consequences of significant events, individuals, ideas and developments and their contribution to continuity and change"]],
 "Level 9": [
  ["VC2HH10S02","sequence significant events, individuals, ideas, movements and developments chronologically to analyse continuity and change, and causes and consequences"],
  ["VC2HH10S08","analyse short- and long-term causes and the intended and unintended consequences of significant events, individuals, ideas and developments and their contributions to continuity and change"]]
};
const VC_NOTE = "Levels 6 to 9 use the CAT 2 rubric's wording. Below Level 6 the rubric is blank, so those rungs show the Victorian Curriculum only. VC2 bands History two years at a time, so neighbouring rungs share a code.";

const BUMP = {
 "Foundation to Level 2": {
   new:"You put things in order, and say why one thing happened.",
   background:"that elephants are very big, and that snow is very cold." },
 "Levels 3 and 4": {
   new:"You use a date, and say what caused a change.",
   background:"that armies fight wars, and that a general is the person in charge of an army." },
 "Level 5": {
   new:"You use BCE dates in order, and say what each cause led to.",
   background:"that Rome and Carthage were two powerful cities that fought each other." },
 "Level 6": {
   new:"You put the events in order and say what each one led to.",
   background:"that Rome and Carthage fought a war, and that Hannibal brought elephants into Italy." },
 "Level 7": {
   new:"You use BCE dates, measure the time between them, and say how events affected different groups.",
   background:"what BCE means, and that a bigger BCE number is earlier." },
 "Level 8": {
   new:"You place the war in a period, and give the motives behind what people did.",
   background:"that the Second Punic War happened during Rome's republican period, 509 to 27 BCE." },
 "Level 9": {
   new:"You say how long things lasted, and weigh which cause mattered most, including results nobody intended.",
   background:"that a war can be lost even after winning most of its battles." }
};

const GLOSS = {
 tier3: {
  "Carthage":"A trading city in North Africa, Rome's great rival.",
  "Punic War":"One of three wars between Rome and Carthage.",
  "Alps":"The high mountains across the north of Italy.",
  "Cannae":"A battle in southern Italy in 216 BCE, Hannibal's biggest win.",
  "Zama":"A battle in North Africa in 202 BCE, where Rome beat Hannibal.",
  "BCE":"Before the Common Era. Years counted backwards from year 1.",
  "cavalry":"Soldiers who fight on horseback.",
  "republican period":"Rome's time without kings, 509 to 27 BCE."
 },
 tier2: {
  "terror":"very great fear",
  "panic":"to be suddenly too scared to think",
  "allies":"friends who fight on your side",
  "turning point":"the moment things start to change",
  "intended":"meant, planned"
 }
};

const KID = {
 "Foundation to Level 2": { band:"Foundation to Level 2", lines:[
   "I can put things in order: first, next, last.",
   "I can say why something happened."]},
 "Levels 3 and 4": { band:"Levels 3 and 4", lines:[
   "I can put events in the order they happened.",
   "I can say what caused a change, and what it led to."]},
 "Level 5": { band:"Levels 5 and 6", lines:[
   "I can put important events in order on a timeline.",
   "I can explain what caused an event, and what it led to."]},
 "Level 6": { band:"CAT 2 rubric · Level 6", lines:[] },
 "Level 7": { band:"CAT 2 rubric · Level 7", lines:[] },
 "Level 8": { band:"CAT 2 rubric · Level 8", lines:[] },
 "Level 9": { band:"CAT 2 rubric · Level 9", lines:[] }
};

/* Machine-drafted, unreviewed, and labelled as such on screen. */
const TIER3_T = {
  "Carthage": {"zh-Hans":"迦太基","zh-Hant":"迦太基","vi":"Carthage","ar":"قرطاج","fa":"کارتاژ","ur":"قرطاجنہ","ml":"കാർത്തേജ്","am":"ካርቴጅ"},
  "Punic War": {"zh-Hans":"布匿战争","zh-Hant":"布匿戰爭","vi":"Chiến tranh Punic","ar":"الحرب البونيقية","fa":"جنگ پونیک","ur":"پیونک جنگ","ml":"പ്യൂണിക് യുദ്ധം","am":"የፑኒክ ጦርነት"},
  "Alps": {"zh-Hans":"阿尔卑斯山","zh-Hant":"阿爾卑斯山","vi":"dãy Alps","ar":"جبال الألب","fa":"کوه‌های آلپ","ur":"کوہ الپس","ml":"ആൽപ്സ് പർവ്വതനിര","am":"የአልፕስ ተራሮች"},
  "Cannae": {"zh-Hans":"坎尼","zh-Hant":"坎尼","vi":"Cannae","ar":"كاناي","fa":"کانای","ur":"کینائی","ml":"കാന്നെ","am":"ካኔ"},
  "Zama": {"zh-Hans":"扎马","zh-Hant":"扎馬","vi":"Zama","ar":"زاما","fa":"زاما","ur":"زاما","ml":"സാമ","am":"ዛማ"},
  "BCE": {"zh-Hans":"公元前","zh-Hant":"公元前","vi":"trước Công nguyên (TCN)","ar":"قبل الميلاد","fa":"پیش از میلاد","ur":"قبل مسیح","ml":"പൊതുയുഗത്തിന് മുമ്പ്","am":"ከክርስቶስ ልደት በፊት"},
  "cavalry": {"zh-Hans":"骑兵","zh-Hant":"騎兵","vi":"kỵ binh","ar":"سلاح الفرسان","fa":"سواره‌نظام","ur":"گھڑ سوار فوج","ml":"കുതിരപ്പട","am":"ፈረሰኛ ጦር"},
  "republican period": {"zh-Hans":"共和时期","zh-Hant":"共和時期","vi":"thời kỳ cộng hòa","ar":"العصر الجمهوري","fa":"دوره جمهوری","ur":"جمہوری دور","ml":"റിപ്പബ്ലിക്കൻ കാലഘട്ടം","am":"የሪፐብሊክ ዘመን"}
};
const TIER2_T = {
  "terror": {"zh-Hans":"恐惧","zh-Hant":"恐懼","vi":"nỗi kinh hoàng","ar":"رعب","fa":"وحشت","ur":"دہشت","ml":"ഭീതി","am":"ሽብር"},
  "panic": {"zh-Hans":"惊慌","zh-Hant":"驚慌","vi":"hoảng loạn","ar":"يذعر","fa":"وحشت کردن","ur":"گھبرا جانا","ml":"പരിഭ്രാന്തരാകുക","am":"መደናገጥ"},
  "allies": {"zh-Hans":"盟友","zh-Hant":"盟友","vi":"đồng minh","ar":"حلفاء","fa":"متحدان","ur":"اتحادی","ml":"സഖ്യകക്ഷികൾ","am":"አጋሮች"},
  "turning point": {"zh-Hans":"转折点","zh-Hant":"轉折點","vi":"bước ngoặt","ar":"نقطة تحول","fa":"نقطه عطف","ur":"اہم موڑ","ml":"വഴിത്തിരിവ്","am":"መለወጫ ነጥብ"},
  "intended": {"zh-Hans":"有意的","zh-Hant":"有意的","vi":"có chủ ý","ar":"مقصود","fa":"عمدی","ur":"ارادی","ml":"ഉദ്ദേശിച്ച","am":"የታሰበ"}
};
