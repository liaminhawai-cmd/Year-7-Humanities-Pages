/* =======================================================================
   CONTENT BLOCK for the lesson 4.3 bump-it-up: How did Rome's army
   contribute to its success?

   HIDDEN. Not in the site map and nothing links to it except module.html
   in this folder, which the teacher shares by its address. Keep both out of
   tools/build_index_pages.py.

   The class sees only the rungs in STUDENT_LEVELS (Foundation to Level 2,
   Levels 3 and 4), as a place to start a first draft. Typing "teacher" on
   the page opens every rung up to Level 10 for the bump it up at the end.
   See the TEACHER UNLOCK block in bump-it-up.html.

   One row: cause and effect, in the CAT rubric's own words (AGENTS.md rules
   2 to 4). Chronology is left off because this lesson is about how the army
   worked, not about change over time. The worked examples use only what is
   on the 4.3 worksheet (the evidence bank, Josephus, Cannae and the
   Teutoburg Forest), the reading in module.html and the two videos, so a
   student can see every claim is reachable from what they had. They do not
   use the CAT's causes (armies loyal to their generals), so rule 1 holds.

   Mark evidence in an example with {key|the phrase}.
   ======================================================================= */

const WALL = {
  id: "hist-army",
  title: "How did Rome's army contribute to its success?",
  expected: "Level 7",
  inquiry: "How did Rome's army contribute to its success?",
  foot: "<b>Sources:</b> the evidence bank on the 4.3 worksheet, written for this lesson from the 4.3 lesson notes, the TED-Ed video “A day in the life of a Roman soldier” and the clip on Hannibal's tactics at Cannae; and Josephus, The Jewish War, Book 3, chapter 5, sections 1 and 8, in William Whiston's 1737 translation. Josephus is printed in full with paragraph breaks added and one transcription error fixed (“abide ill it” to “abide in it”). The worked examples and the plain English were written for this page."
};

/* The class sees these rungs. Every other rung waits for "teacher". */
const STUDENT_LEVELS = ["Foundation to Level 2", "Levels 3 and 4"];

const FACTS = [
  ["Who", "The Roman army: legions of citizen soldiers, and auxiliaries from the lands Rome had conquered."],
  ["When", "From the early Republic into the empire. The evidence here runs from Cannae in 216 BCE to Josephus, writing about 75 CE."],
  ["Where", "Wherever Rome fought: from Spain to Syria, and north into Germania."],
  ["How we know", "From Josephus, a Jewish general who fought against this army and then wrote about it, and from the weapons and armour archaeologists have found."]
];

const CRITERIA = [
  { key:"cause", row:"Cause and effect", name:"Cause and effect", glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
];

const LEVELS = ["Level 6","Level 7","Level 8","Level 9","Level 10"];

const EXAMPLES = {
"Level 6":
`Rome's army helped Rome succeed in a few ways. {cause|Soldiers trained every day, so they were ready to fight}. {cause|They locked their shields into a testudo, so they could get close to a city wall and take the town}. {cause|They built roads and a camp every night, so the army could move fast and be safe}. {cause|Josephus says Rome won its empire through "their valour, and not the bare gift of fortune"}. {cause|At Cannae the Romans were surrounded and lost}, but most of the time they won. The army was the main reason Rome was so strong.`,

"Level 7":
`Rome's army helped Rome succeed because fighting became a full-time job. {cause|Soldiers like Servius signed up for 25 years and trained every day. For the soldier this meant a hard life far from home, and for Rome it meant an army that was always ready}. {cause|Every soldier carried tools as well as weapons, so the army built a walled camp each night and roads that the next army could use}. {cause|For conquered peoples the army offered a reward: after 25 years an auxiliary became a Roman citizen, so people Rome had beaten now fought for it}. {cause|At Cannae in 216 BCE the army's size did not save it, and tens of thousands of Romans were killed in one day}, {cause|but Rome raised new armies and still won the war}. The army made Rome strong, and it changed the lives of almost everyone in the empire.`,

"Level 8":
`Rome's army contributed to its success because Rome built it to keep winning far from home. {cause|Rome paid its soldiers and kept them for 20 to 25 years because it needed an army that could fight all year, not only in summer}. {cause|Josephus says every soldier "is every day exercised … as if it were in time of war", so in battle the Romans kept their order and did not panic}. {cause|Rome made auxiliaries citizens after 25 years because it wanted conquered peoples to have a reason to be loyal}. {cause|Josephus had his own motive for praising the army: he says he wrote to deter others from rebelling, so he may have made it sound harder to beat than it was}. {cause|At Cannae, Hannibal held his best soldiers back so that the Romans would push forward into a trap}, which shows the army could be beaten by a general who understood it. Rome's choices about how to build its army won it the empire.`,

"Level 9":
`Rome's army was the main cause of Rome's success, but only where it could fight the way it had trained. {cause|Its strengths worked together: daily training kept soldiers in order, the shield wall protected them, and the tools in every pack let them build a camp each night and roads behind them}. {cause|Josephus, who fought against this army and lost, calls its exercises "unbloody battles", which suggests its training mattered more than its weapons}. {cause|Those strengths had limits. At Cannae in 216 BCE Hannibal used the Romans' size and their push forward against them: the further they pushed, the tighter they were packed}. {cause|In the Teutoburg Forest in 9 CE, on a narrow path in heavy rain, the legions could not form a fighting line, so their training could not help them}. {cause|That defeat changed the empire: Rome gave up trying to conquer Germania, and the Rhine became its border}. The army won Rome its empire on open ground, and the places where it could not fight that way became the empire's edges.`,

"Level 10":
`Rome's army was the long-term cause of Rome's success, because it turned the peoples Rome conquered into the soldiers who defended it. {cause|Over centuries Rome changed its army from farmers who fought each summer into full-time soldiers who trained every day and served for 20 to 25 years}. {cause|Rome intended the promise of citizenship to make auxiliaries loyal, and mostly it worked: Servius's tent companions came from Syria to Spain}. {cause|It also had a result nobody intended. Arminius had been an officer in the Roman army, and in 9 CE he used what he knew to trap three legions in the Teutoburg Forest}. {cause|The short-term cause of that defeat was the place, a narrow path in heavy rain with no way out}, {cause|but its long-term result was that Rome gave up trying to conquer Germania, and the Rhine became the border}. {cause|Josephus wanted his readers to believe the army could not be beaten, so that they would not rebel}, yet Cannae and the Teutoburg Forest show that it could be. Rome's army built the empire, and its defeats decided where the empire stopped.`
};

const EXPLANATIONS = {
"Level 6": {
  cause: "The orange phrases name causes and what each one led to: training, the testudo, roads and camps, and one defeat." },
"Level 7": {
  cause: "The orange phrases say how the army affected different people and groups: a soldier like Servius, conquered peoples, and Rome itself." },
"Level 8": {
  cause: "The orange phrases give motives: why Rome paid its soldiers and made auxiliaries citizens, why Josephus wrote, and what Hannibal was trying to do." },
"Level 9": {
  cause: "The orange phrases weigh the causes: which strength mattered most, and where the army's strengths stopped working." },
"Level 10": {
  cause: "The orange phrases separate long-term causes from short-term ones, and what Rome intended from what actually happened." }
};

/* CAT rubric, Ancient Rome, 2025. Quoted exactly (rule 4). The rubric
   stops at Level 9, so Level 10 shows the KID line and the curriculum. */
const CONTINUUM = {
cause:{
 "Level 6":"I can identify the causes and effects of events and developments.",
 "Level 7":"I can describe the causes and effects of events and developments on societies, individuals, and groups.",
 "Level 8":"I can explain the causes and effects of events and developments and identify the motives and actions of people at the time.",
 "Level 9":"I can analyse the causes and effects of events and developments and explain the motives and actions of people at the time."},
};

const SHEET_IMAGE = "";

/* Two sources. The evidence bank is the worksheet's, so the class can see
   that every claim in the examples comes from something they had. Josephus
   is the source itself, in full, with a shortened view and plain English
   beside it (rule 12: nothing is reworded inside the source). */
const SOURCES = [
 {
  id: "bank",
  tab: "The evidence bank",
  kind: "text",
  cite: "The evidence bank and the two defeats from the 4.3 worksheet, written for this lesson, and one fact from the module's reading.",
  whole: { label:"The evidence bank", text:"Everything the worked examples use is here, in Josephus, or in the two videos." },
  paragraphs: [
   "Shield and armour: a helmet, iron body armour and a large curved shield (scutum). Locked together, the shields made a testudo (tortoise): a roof and walls against arrows and stones.",
   "Weapons: two throwing spears (pila), thrown just before the armies met, then a short sword (gladius) for stabbing at close range from behind the shield.",
   "Marching and building: each soldier carried over 20 kg, food for days and tools for building camp (spade, saw, pickaxe, basket). About 30 km a day, a walled camp every night, and roads and bridges.",
   "Organisation: 8 men shared a tent, 80 made a century led by a centurion, and 10 cohorts made a legion of about 5000 to 6000 men.",
   "Training: every day, as if at war. Centurions gave the orders and punished anyone who disobeyed.",
   "Pay and citizenship: legionaries were full-time and paid for 20 to 25 years, then got land or money. Auxiliaries from conquered lands became Roman citizens after 25 years.",
   "From the module's reading: in the early Republic soldiers were farmers who fought each summer and went home.",
   "216 BCE, Cannae: Hannibal's army of about 50 000 surrounds about 80 000 Romans. It is Rome's worst defeat, but Rome raises new armies and wins the war in 202 BCE.",
   "9 CE, the Teutoburg Forest: Arminius, once an officer in the Roman army, traps three legions on a narrow forest path in heavy rain. Rome gives up trying to conquer Germania, and the Rhine becomes the border."
  ],
  hotspots: [
   { mark:"the shields made a testudo", label:"The testudo",
     text:"A roof and walls of shields, so the army could reach a city wall." },
   { mark:"tools for building camp", label:"The tools",
     text:"Every soldier carried a builder's kit as well as weapons." },
   { mark:"became Roman citizens after 25 years", label:"A reward",
     text:"A reason for conquered peoples to fight for Rome." },
   { mark:"Rome raises new armies", label:"After Cannae",
     text:"Rome's worst defeat, and still not the end of the war." },
   { mark:"once an officer in the Roman army", label:"Arminius",
     text:"The man who destroyed three legions had been trained by Rome." }
  ]
 },
 {
  id: "josephus",
  tab: "Josephus",
  kind: "text",
  cite: "Josephus, The Jewish War, Book 3, chapter 5, sections 1 and 8, about 75 CE. Translated by William Whiston, 1737.",
  whole: { label:"Josephus on the Roman army", text:"A Jewish general who fought against Rome in 67 CE, was captured, and later lived in Rome, paid by the emperor." },
  paragraphs: [
   "Now here one cannot but admire at the precaution of the Romans, in providing themselves of such household servants, as might not only serve at other times for the common offices of life, but might also be of advantage to them in their wars.",
   "And indeed if any one does but attend to the other parts of their military discipline, he will be forced to confess, that their obtaining so large a dominion, hath been the acquisition of their valour, and not the bare gift of fortune: for they do not begin to use their weapons first in time of war, nor do they then put their hands first into motion, while they avoided so to do in times of peace; but, as if their weapons did always cling to them, they have never any truce from warlike exercises; nor do they stay till times of war admonish them to use them; for their military exercises differ not at all from the real use of their arms, but every soldier is every day exercised, and that with great diligence, as if it were in time of war, which is the reason why they bear the fatigue of battles so easily; for neither can any disorder remove them from their usual regularity, nor can fear affright them out of it, nor can labour tire them: which firmness of conduct makes them always to overcome those that have not the same firmness; nor would he be mistaken that should call those their exercises unbloody battles, and their battles bloody exercises.",
   "Nor can their enemies easily surprise them with the suddenness of their incursions; for as soon as they have marched into an enemy’s land, they do not begin to fight till they have walled their camp about; nor is the fence they raise rashly made, or uneven; nor do they all abide in it, nor do those that are in it take their places at random; but if it happens that the ground is uneven, it is first levelled: their camp is also four square by measure, and carpenters are ready in great numbers, with their tools, to erect their buildings for them.",
   "This account I have given the reader, not so much with the intention of commending the Romans, as of comforting those that have been conquered by them, and for the deterring others from attempting innovations under their government. This discourse of the Roman military conduct may also perhaps be of use to such of the curious as are ignorant of it, and yet have a mind to know it. I return now from this digression."
  ],
  /* exact pieces of each paragraph; null drops a paragraph from the short view */
  short: [
   null,
   ["if any one does but attend to the other parts of their military discipline, he will be forced to confess, that their obtaining so large a dominion, hath been the acquisition of their valour, and not the bare gift of fortune",
    "every soldier is every day exercised, and that with great diligence, as if it were in time of war, which is the reason why they bear the fatigue of battles so easily",
    "nor would he be mistaken that should call those their exercises unbloody battles, and their battles bloody exercises."],
   ["for as soon as they have marched into an enemy’s land, they do not begin to fight till they have walled their camp about"],
   ["This account I have given the reader, not so much with the intention of commending the Romans, as of comforting those that have been conquered by them, and for the deterring others from attempting innovations under their government."]
  ],
  plain: [
   "The Romans are careful to have servants who are useful in war as well as in everyday life.",
   "Look at how the Roman army is trained and you will see that Rome won its huge empire through courage, not luck. Every soldier trains hard every day, as if there were a war on, so battles do not tire them, and nothing breaks their order or frightens them. You could call their training a battle without blood, and their battles training with blood.",
   "Enemies cannot take them by surprise. When they march into enemy land, they build a walled camp before they fight. They level the ground, lay the camp out square, and have carpenters ready to put up the buildings.",
   "I did not write this to praise the Romans. I wrote it to comfort the peoples Rome has conquered, and to put others off rebelling. It may also help readers who want to know how the Roman army works. Now I go back to my story."
  ],
  hotspots: [
   { mark:"not the bare gift of fortune", label:"Not luck",
     text:"Josephus's cause for the empire: the army's courage and training." },
   { mark:"every soldier is every day exercised", label:"Every day",
     text:"Training in peace as hard as in war." },
   { mark:"unbloody battles, and their battles bloody exercises", label:"Unbloody battles",
     text:"Training so hard that a real battle feels like more practice." },
   { mark:"walled their camp about", label:"The camp",
     text:"A walled camp first, then the fight." },
   { mark:"for the deterring others from attempting innovations", label:"Why he wrote it",
     text:"He wants readers to think Rome cannot be beaten, so they will not rebel." }
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
`The Roman army had lots and lots of soldiers. {cause|They had big shields so the arrows did not hurt them}. They walked a really long way every day. {cause|They won lots of fights so Rome got really big}. One time they lost in a forest. I would not want to carry all that stuff.`,

 "Levels 3 and 4":
`The Roman army helped Rome become a big empire. {cause|The soldiers trained every day, so they were very good at fighting}. {cause|They locked their shields together into a testudo, so arrows could not hurt them}. {cause|They built roads, so the army could get to new places fast}. {cause|Because the army won so many battles, Rome took over lots of land}. But the army did not always win. {cause|At Cannae, Hannibal tricked the Romans and surrounded them}.`,

 "Level 5":
`Rome's army was a big reason Rome became so powerful. {cause|Soldiers trained every day, so in a battle they stayed in order and did not panic}. {cause|Each soldier carried tools, so the army could build a safe camp every night and roads as it went}. {cause|Josephus, who fought against Rome, said Rome won its empire through "valour", not "fortune"}. {cause|Auxiliaries from conquered lands joined because they could become citizens}, so the army kept growing. {cause|The army lost at Cannae and in the Teutoburg Forest when it was trapped}, but most of the time its training won.`
};

const EARLY_EXPLANATIONS = {
 "Foundation to Level 2": {
   cause: "Says why something happened (VC2HH2S06)." },
 "Levels 3 and 4": {
   cause: "Says what caused something and what it led to (VC2HH4S07)." },
 "Level 5": {
   cause: "Explains causes and effects, and uses a source to back one up (VC2HH6S08)." }
};

const VC = {
 "Foundation to Level 2": [["VC2HH2S06","identify the causes and consequences of changes"]],
 "Levels 3 and 4": [["VC2HH4S07","describe the causes and consequences of change"]],
 "Level 5": [["VC2HH6S08","explain the causes and consequences of significant events and developments"]],
 "Level 6": [["VC2HH6S08","explain the causes and consequences of significant events and developments"]],
 "Level 7": [["VC2HH8S08","explain the causes and consequences of significant events, individuals, ideas and developments and their contribution to continuity and change"]],
 "Level 8": [["VC2HH8S08","explain the causes and consequences of significant events, individuals, ideas and developments and their contribution to continuity and change"]],
 "Level 9": [["VC2HH10S08","analyse short- and long-term causes and the intended and unintended consequences of significant events, individuals, ideas and developments and their contributions to continuity and change"]],
 "Level 10": [["VC2HH10S08","analyse short- and long-term causes and the intended and unintended consequences of significant events, individuals, ideas and developments and their contributions to continuity and change"]]
};
const VC_NOTE = "Levels 6 to 9 use the CAT rubric's wording. The rubric stops at Level 9 and is blank below Level 6, so Level 10 and the lower rungs show the Victorian Curriculum only. VC2 bands History two years at a time, so neighbouring rungs share a code.";

const BUMP = {
 "Foundation to Level 2": {
   new:"You say why one thing happened.",
   background:"that soldiers fight in wars and wear armour." },
 "Levels 3 and 4": {
   new:"You say what caused something, and what it led to.",
   background:"that Rome had a big army and won a lot of land." },
 "Level 5": {
   new:"You explain causes and effects, and use a source to back one up.",
   background:"that a source is something from the past that tells us about it." },
 "Level 6": {
   new:"You name several causes, and what each one led to.",
   background:"that Roman soldiers had shields, swords, armour and training." },
 "Level 7": {
   new:"You say how the army affected different people and groups.",
   background:"that legionaries were citizens and auxiliaries were not." },
 "Level 8": {
   new:"You give the motives behind what people did, including the writer of a source.",
   background:"that a writer can have a reason for what they say." },
 "Level 9": {
   new:"You weigh the causes, and say where the army's strengths stopped working.",
   background:"that Rome lost at Cannae in 216 BCE and won the war anyway." },
 "Level 10": {
   new:"You separate long-term from short-term causes, and what was intended from what happened.",
   background:"that a plan can work and still have results nobody expected." }
};

const GLOSS = {
 tier3: {
  "legion":"The main unit of the Roman army, about 5000 to 6000 soldiers.",
  "legions":"The main units of the Roman army, about 5000 to 6000 soldiers each.",
  "centurion":"An officer who led a century of about 80 soldiers.",
  "century":"In the army, a group of about 80 soldiers led by a centurion.",
  "cohort":"Six centuries together, about 480 soldiers.",
  "auxiliaries":"Soldiers from conquered lands who were not Roman citizens.",
  "testudo":"The tortoise: soldiers locked their shields into a roof and walls.",
  "Cannae":"A battle in southern Italy in 216 BCE, where Hannibal surrounded a Roman army.",
  "Teutoburg Forest":"A forest in Germania where three legions were destroyed in 9 CE.",
  "Germania":"The land east of the Rhine River, where Germanic tribes lived.",
  "Josephus":"A Jewish general who fought against Rome, then wrote about its army."
 },
 tier2: {
  "valour":"courage",
  "fortune":"luck",
  "loyal":"faithful, on your side",
  "motive":"a reason for doing something",
  "intended":"meant, planned",
  "panic":"to be suddenly too scared to think"
 }
};

/* With one row, lines[0] is the cause and effect line. */
const KID = {
 "Foundation to Level 2": { band:"Foundation to Level 2", lines:[
   "I can say why something happened."]},
 "Levels 3 and 4": { band:"Levels 3 and 4", lines:[
   "I can say what caused a change, and what it led to."]},
 "Level 5": { band:"Levels 5 and 6", lines:[
   "I can explain what caused an event, and what it led to."]},
 "Level 6": { band:"CAT rubric · Level 6", lines:[] },
 "Level 7": { band:"CAT rubric · Level 7", lines:[] },
 "Level 8": { band:"CAT rubric · Level 8", lines:[] },
 "Level 9": { band:"CAT rubric · Level 9", lines:[] },
 "Level 10": { band:"Level 10 · past the CAT rubric, which stops at Level 9", lines:[
   "I can analyse long-term and short-term causes, and intended and unintended results."]}
};

/* Translations for the glossed words, in the shape eal.js uses. Drafted and
   unreviewed; not labelled on screen. */
const TIER3_T = {
  "legion": {"zh-Hans":"军团","zh-Hant":"軍團","vi":"quân đoàn","ar":"فيلق","fa":"لژیون","ur":"لشکر","ml":"ലീജിയൻ","am":"ሌጌዎን"},
  "legions": {"zh-Hans":"军团","zh-Hant":"軍團","vi":"các quân đoàn","ar":"فيالق","fa":"لژیون‌ها","ur":"لشکر","ml":"ലീജിയനുകൾ","am":"ሌጌዎኖች"},
  "centurion": {"zh-Hans":"百夫长","zh-Hant":"百夫長","vi":"đội trưởng trăm người","ar":"قائد المئة","fa":"فرمانده صد نفر","ur":"سو سپاہیوں کا افسر","ml":"ശതാധിപൻ","am":"የመቶ አለቃ"},
  "century": {"zh-Hans":"百人队","zh-Hant":"百人隊","vi":"đội trăm người","ar":"وحدة المئة","fa":"دسته صدنفره","ur":"سو سپاہیوں کا دستہ","ml":"നൂറുപേരുടെ സംഘം","am":"የመቶ ሰዎች ቡድን"},
  "cohort": {"zh-Hans":"大队","zh-Hant":"大隊","vi":"đơn vị cohort","ar":"فوج","fa":"گردان","ur":"فوجی دستہ","ml":"സൈനിക വിഭാഗം","am":"የጦር ክፍል"},
  "auxiliaries": {"zh-Hans":"辅助军","zh-Hant":"輔助軍","vi":"quân trợ chiến","ar":"القوات المساعدة","fa":"نیروهای کمکی","ur":"معاون فوجی","ml":"സഹായ സൈനികർ","am":"ረዳት ወታደሮች"},
  "testudo": {"zh-Hans":"龟甲阵","zh-Hant":"龜甲陣","vi":"đội hình mai rùa","ar":"تشكيل السلحفاة","fa":"آرایش لاک‌پشتی","ur":"کچھوا صف بندی","ml":"ആമ രൂപീകരണം","am":"የኤሊ አሰላለፍ"},
  "Cannae": {"zh-Hans":"坎尼","zh-Hant":"坎尼","vi":"Cannae","ar":"كاناي","fa":"کانای","ur":"کینائی","ml":"കാന്നെ","am":"ካኔ"},
  "Teutoburg Forest": {"zh-Hans":"条顿堡森林","zh-Hant":"條頓堡森林","vi":"Rừng Teutoburg","ar":"غابة تويتوبورغ","fa":"جنگل توتوبورگ","ur":"ٹیوٹوبرگ کا جنگل","ml":"ട്യൂട്ടോബർഗ് വനം","am":"የቶይቶቡርግ ደን"},
  "Germania": {"zh-Hans":"日耳曼尼亚","zh-Hant":"日耳曼尼亞","vi":"Germania","ar":"جرمانيا","fa":"ژرمانیا","ur":"جرمانیا","ml":"ജർമാനിയ","am":"ጀርማኒያ"},
  "Josephus": {"zh-Hans":"约瑟夫斯","zh-Hant":"約瑟夫斯","vi":"Josephus","ar":"يوسيفوس","fa":"یوسفوس","ur":"یوسیفس","ml":"ജോസീഫസ്","am":"ዮሴፍ"}
};
const TIER2_T = {
  "valour": {"zh-Hans":"勇气","zh-Hant":"勇氣","vi":"lòng dũng cảm","ar":"شجاعة","fa":"دلاوری","ur":"بہادری","ml":"ധീരത","am":"ጀግንነት"},
  "fortune": {"zh-Hans":"运气","zh-Hant":"運氣","vi":"may mắn","ar":"حظ","fa":"بخت","ur":"قسمت","ml":"ഭാഗ്യം","am":"ዕድል"},
  "loyal": {"zh-Hans":"忠诚的","zh-Hant":"忠誠的","vi":"trung thành","ar":"مخلص","fa":"وفادار","ur":"وفادار","ml":"വിശ്വസ്തരായ","am":"ታማኝ"},
  "motive": {"zh-Hans":"动机","zh-Hant":"動機","vi":"động cơ","ar":"دافع","fa":"انگیزه","ur":"محرک","ml":"ഉദ്ദേശ്യം","am":"ዓላማ"},
  "intended": {"zh-Hans":"有意的","zh-Hant":"有意的","vi":"có chủ ý","ar":"مقصود","fa":"عمدی","ur":"ارادی","ml":"ഉദ്ദേശിച്ച","am":"የታሰበ"},
  "panic": {"zh-Hans":"惊慌","zh-Hant":"驚慌","vi":"hoảng loạn","ar":"يذعر","fa":"وحشت کردن","ur":"گھبرا جانا","ml":"പരിഭ്രാന്തരാകുക","am":"መደናገጥ"}
};
