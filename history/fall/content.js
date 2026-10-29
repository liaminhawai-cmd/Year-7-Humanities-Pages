/* =======================================================================
   CONTENT BLOCK for the Rome rehearsal task: Why did the Western Roman
   Empire fall?

   HIDDEN. This page is not in the site map and nothing links to it. The
   teacher opens it by its address after students have written a first
   draft on the worksheet, so the models are not seen before the draft.
   Keep it out of tools/build_index_pages.py.

   It rehearses the CAT's two thinking rows, chronology and cause and
   effect, in the rubric's own words (rules 2 to 4), on different events
   from the CAT (rule 1): the CAT asks why the Republic became an empire,
   this asks why the Western Empire fell. The worked examples use only what
   is in the worksheet's fact box, which is drawn from the Fall of the Roman
   Empire lesson: its reading, the barbarian-invasions map and the mind map
   of reasons.

   Mark evidence in an example with {key|the phrase}.
   ======================================================================= */

const WALL = {
  id: "hist-fall",
  title: "Why did the Western Roman Empire fall?",
  expected: "Level 7",
  inquiry: "Why did the Western Roman Empire fall?",
  foot: "<b>Sources:</b> the fact box on the worksheet, written from the Fall of the Roman Empire lesson: its reading, the map of barbarian invasions and the mind map of reasons historians have given. The worked examples were written for this page."
};

const FACTS = [
  ["What", "The end of the Western Roman Empire. The Eastern Empire, ruled from Constantinople, lasted about another 1000 years."],
  ["When", "A slow decline from about 180 CE to 476 CE, late in Rome's imperial period, which began in 27 BCE."],
  ["Where", "The frontiers of the empire, attacked from many sides, and the city of Rome itself."],
  ["How we know", "From Roman writers and from historians since, who still argue about which reasons mattered most."]
];

const CRITERIA = [
  { key:"chron", row:"Chronology",       name:"Chronology",       glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"cause", row:"Cause and effect", name:"Cause and effect", glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
];

const LEVELS = ["Level 6","Level 7","Level 8","Level 9","Level 10"];

const EXAMPLES = {
"Level 6":
`The Western Roman Empire fell for a few reasons. {chron|First, from about 180 CE,} {cause|Roman generals fought each other to become emperor}. {chron|Then} {cause|trade got worse because travel was dangerous}. {chron|After that, in 284 CE,} {cause|Diocletian split the empire in two, but it did not fix the problems}. {chron|Later, in 378 CE,} {cause|the Visigoths beat Rome's army}. {chron|In the end, in 476 CE,} {cause|the last emperor in the West was removed}. The empire fell because it had too many problems.`,

"Level 7":
`The Western Roman Empire fell because its problems inside made it too weak to stop the attacks from outside. {chron|From about 180 CE} {cause|rival generals fought each other for power, so soldiers who should have guarded the frontiers were fighting other Romans}. {cause|Trade fell away as travel became dangerous, and Rome lost the taxes that paid its army}. {chron|About a hundred years later, in 284 CE,} {cause|Emperor Diocletian split the empire into East and West}, but {chron|from 307 to 310 CE} {cause|six rival emperors fought a civil war}. {chron|In 378 CE} {cause|the Visigoths defeated Rome's armies, and Emperor Theodosius had to let them live inside the empire}. {chron|Almost a hundred years after that, in 476 CE,} {cause|the last Western emperor was removed}. Rome did not fall in a day: it was worn down for nearly 300 years.`,

"Level 8":
`The Western Roman Empire fell because each attempt to fix its problems left it weaker. {chron|The decline began around 180 CE, two hundred years into Rome's imperial period}. {cause|Generals fought for power because an emperor now needed the army behind him}. {cause|Diocletian, who had won power through his own soldiers, split the empire in 284 CE because he believed two emperors would give stronger government}. {cause|The problems remained, and from 307 to 310 CE six rival emperors fought each other}. {cause|In 378 CE, after the Visigoths defeated Rome's armies, Theodosius let them form their own state inside the empire, so that they would defend its frontiers}. {chron|After his death in 395 CE the split became permanent, and the West faced the barbarians on its own until 476 CE}, {cause|when its last emperor was removed}. Each solution bought time, but none of them fixed the empire's weakness.`,

"Level 9":
`The Western Roman Empire fell mainly because of problems inside it, which left it unable to hold back the barbarians outside. {chron|The decline lasted almost 300 years, from about 180 CE to 476 CE}, {cause|so no single invasion explains it}. {cause|The long-term causes came first: rival generals fought for power, trade declined, and Rome lost the taxes it needed to pay its army}. {cause|To fill its ranks Rome recruited barbarians, so the army meant to defend the empire could no longer be counted on}. {chron|The short-term causes came in its last hundred years}: {cause|the Visigoths' victory in 378 CE, and the permanent split after 395 CE that left the West to face the invasions alone}. {cause|Even the solutions had results nobody intended: Diocletian's split, meant to make government stronger, became the line along which the empire broke}. War did the final damage, but by then economic collapse had already made the West too weak to win.`,

"Level 10":
`The Western Roman Empire fell because the things that had held it together slowly stopped working. {chron|For about two centuries after Augustus, one emperor, one army and a rich trade held the empire together, but from about 180 CE each of these began to change}: {cause|generals fought to become emperor, trade declined, and the soldiers Rome paid were more and more often barbarians whose loyalty it could not count on}. {chron|What stayed the same was the empire's size, with long frontiers that still had to be defended}, {cause|now with less money and less loyal troops}. {cause|Rome's leaders acted with clear motives: Diocletian split the empire in 284 CE to govern it better, and Theodosius let the Visigoths settle in 378 CE so they would guard the frontiers}. {cause|Both decisions had results they did not intend: the split became permanent after 395 CE, and the West was left to face the invasions alone}. {chron|By 476 CE, when its last emperor was removed, the Western Empire had changed so much that its fall was the last step of a long decline, not a sudden collapse}.`
};

const EXPLANATIONS = {
"Level 6": {
  chron: "The blue phrases put the events in order with first, then, after that, later and in the end.",
  cause: "The orange phrases name what happened and what it led to." },
"Level 7": {
  chron: "The blue phrases use CE dates and measure the time between them: about a hundred years later, almost a hundred years after that, nearly 300 years.",
  cause: "The orange phrases say how events affected different groups: soldiers, the army's pay, the Visigoths, the emperor." },
"Level 8": {
  chron: "The blue phrases place the decline in a period: two hundred years into Rome's imperial period, then the West on its own.",
  cause: "The orange phrases give motives: why generals fought, what Diocletian believed, what Theodosius hoped the Visigoths would do." },
"Level 9": {
  chron: "The blue phrases say how long things lasted: a decline of almost 300 years, short-term causes in the last hundred.",
  cause: "The orange phrases weigh the causes: long-term against short-term, which mattered most, and a result nobody intended." },
"Level 10": {
  chron: "The blue phrases show what changed and what stayed the same across the whole period, and why that matters.",
  cause: "The orange phrases separate what leaders intended from what actually happened, and link long-term causes to the end." }
};

/* CAT rubric, Ancient Rome, 2025. Quoted exactly (rule 4). The rubric
   stops at Level 9, so Level 10 shows the KID lines and the curriculum. */
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
  cite: "Fact box from the worksheet, written from the Fall of the Roman Empire lesson.",
  whole: { label:"The fact box", text:"Everything the worked examples use is here." },
  paragraphs: [
   "From about 180 CE: the empire begins to weaken as rival Roman army generals fight each other for power. Several emperors take power by corrupt means, and several are assassinated.",
   "Trade that had made the empire rich declines, because travel over long distances becomes dangerous and barbarian tribes raid the empire's lands. As Rome loses control of its provinces, it loses the taxes it received from them.",
   "Farm work is done more and more by slaves, so small farmers and farm workers lose their living.",
   "As attacks increase, more and more barbarians are recruited into the Roman army. Its loyalty can no longer be taken for granted, and it costs a huge amount to pay.",
   "284 CE: Emperor Diocletian, a general who won power through his soldiers, divides the empire into East and West under two emperors. He believes this will give stronger government, but the problems remain.",
   "307 to 310 CE: civil war, as six rival emperors compete for power. The winner, Constantine, builds a new capital at Byzantium, soon renamed Constantinople.",
   "378 CE: the Visigoths defeat Rome's armies. Emperor Theodosius lets them form their own state inside the empire, and in return they promise to defend its frontiers.",
   "394 CE: Theodosius reunites the empire after the West breaks away under a rival emperor. After his death in 395 CE, the split into East and West becomes permanent.",
   "Huns, Goths, Vandals, Franks, Saxons and other groups push into the Western Empire from many sides.",
   "476 CE: the last Western emperor, Romulus Augustulus, is removed by a Germanic general, Odoacer. This is known as the Fall of Rome. The Eastern Empire lasts about another 1000 years."
  ],
  hotspots: [
   { mark:"rival Roman army generals fight each other for power", label:"The start of the decline",
     text:"The trouble begins inside the empire, around 180 CE." },
   { mark:"it loses the taxes it received from them", label:"Money",
     text:"Less trade and fewer provinces mean less money to pay the army." },
   { mark:"Its loyalty can no longer be taken for granted", label:"The army",
     text:"The force meant to protect the empire becomes harder to trust." },
   { mark:"He believes this will give stronger government", label:"A motive",
     text:"Diocletian's reason for splitting the empire. Did it work?" },
   { mark:"in return they promise to defend its frontiers", label:"A deal",
     text:"Theodosius hands part of the job of defence to the Visigoths." },
   { mark:"the split into East and West becomes permanent", label:"A result nobody planned",
     text:"The split was meant to help. It became the line where the empire broke." }
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
`Rome was really really big. {chron|First} the soldiers had fights with each other. {cause|So nobody was looking after the edges}. {chron|Then} lots of other people came in. {chron|At the end} Rome broke. I think Rome was too big.`,

 "Levels 3 and 4":
`{chron|Around 180 CE} Roman generals started fighting each other. {cause|Because they were fighting, Rome got weaker}. {chron|Later} {cause|the empire was split into two parts}. {chron|In 378 CE} the Visigoths beat the Roman army. {chron|In 476 CE} {cause|the last emperor in the West was removed}, and the Western Empire ended.`,

 "Level 5":
`The Western Roman Empire fell after a long time of trouble. {chron|From about 180 CE} {cause|generals fought to be emperor, which made the army weaker}. {chron|In 284 CE} {cause|Diocletian split the empire to make it easier to rule}. {chron|In 378 CE} {cause|the Visigoths beat Rome's armies}. {chron|In 476 CE} {cause|barbarian attacks finally ended the Western Empire}.`
};

const EARLY_EXPLANATIONS = {
 "Foundation to Level 2": {
   chron: "Puts events in order with first, then and at the end (VC2HH2S02).",
   cause: "Says why something happened (VC2HH2S06)." },
 "Levels 3 and 4": {
   chron: "Uses dates and puts events across many years in order (VC2HH4S02).",
   cause: "Says what caused a change and what it led to (VC2HH4S07)." },
 "Level 5": {
   chron: "Uses four CE dates in the right order (VC2HH6S02).",
   cause: "Explains causes and effects from the start of the decline to the end (VC2HH6S08)." }
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
  ["VC2HH10S08","analyse short- and long-term causes and the intended and unintended consequences of significant events, individuals, ideas and developments and their contributions to continuity and change"]],
 "Level 10": [
  ["VC2HH10S02","sequence significant events, individuals, ideas, movements and developments chronologically to analyse continuity and change, and causes and consequences"],
  ["VC2HH10S08","analyse short- and long-term causes and the intended and unintended consequences of significant events, individuals, ideas and developments and their contributions to continuity and change"]]
};
const VC_NOTE = "Levels 6 to 9 use the CAT rubric's wording. The rubric stops at Level 9 and is blank below Level 6, so Level 10 and the lower rungs show the Victorian Curriculum only. VC2 bands History two years at a time, so neighbouring rungs share a code.";

const BUMP = {
 "Foundation to Level 2": {
   new:"You put things in order, and say why one thing happened.",
   background:"that Rome was a very big place with lots of soldiers." },
 "Levels 3 and 4": {
   new:"You use dates, and say what caused a change.",
   background:"that an empire is a group of lands ruled by one emperor." },
 "Level 5": {
   new:"You use CE dates in order, and say what each cause led to.",
   background:"that CE dates count forwards, so a bigger CE number is later." },
 "Level 6": {
   new:"You put the events in order and say what each one led to.",
   background:"that the Western Roman Empire ended in 476 CE." },
 "Level 7": {
   new:"You use CE dates, measure the time between them, and say how events affected different groups.",
   background:"what CE means, and that the decline lasted from about 180 to 476 CE." },
 "Level 8": {
   new:"You place the decline in a period, and give the motives behind what people did.",
   background:"that Rome's imperial period began with Augustus in 27 BCE." },
 "Level 9": {
   new:"You say how long things lasted, and weigh which causes mattered most, including results nobody intended.",
   background:"the difference between a long-term cause and a short-term one." },
 "Level 10": {
   new:"You show what changed and what stayed the same across the whole period, and why.",
   background:"that leaders can intend one thing and cause another." }
};

const GLOSS = {
 tier3: {
  "barbarians":"The Roman name for all the peoples who lived beyond the empire's borders.",
  "frontiers":"The borders of the empire, where its land ended.",
  "Visigoths":"One of the Goth peoples, who defeated Rome's armies in 378 CE.",
  "civil war":"A war between groups inside the same country.",
  "imperial period":"Rome's time ruled by emperors, from 27 BCE.",
  "Diocletian":"A general who became emperor and split the empire in 284 CE.",
  "Theodosius":"An emperor who let the Visigoths settle inside the empire."
 },
 tier2: {
  "decline":"a slow slide down",
  "collapse":"a sudden fall",
  "rival":"competing against each other",
  "recruited":"brought in to join",
  "permanent":"lasting for ever",
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
 "Level 6": { band:"CAT rubric · Level 6", lines:[] },
 "Level 7": { band:"CAT rubric · Level 7", lines:[] },
 "Level 8": { band:"CAT rubric · Level 8", lines:[] },
 "Level 9": { band:"CAT rubric · Level 9", lines:[] },
 "Level 10": { band:"Level 10 · past the CAT rubric, which stops at Level 9", lines:[
   "I can sequence events and developments to show what changed and what stayed the same, and why.",
   "I can analyse long-term and short-term causes, and intended and unintended results."]}
};

/* Translations for the glossed words, in the shape eal.js uses. Drafted and
   unreviewed; not labelled on screen. */
const TIER3_T = {
  "barbarians": {"zh-Hans":"蛮族","zh-Hant":"蠻族","vi":"người man di","ar":"البرابرة","fa":"بربرها","ur":"وحشی قبائل","ml":"ബാർബേറിയൻമാർ","am":"ባርባሪያኖች"},
  "frontiers": {"zh-Hans":"边境","zh-Hant":"邊境","vi":"biên giới","ar":"الحدود","fa":"مرزها","ur":"سرحدیں","ml":"അതിർത്തികൾ","am":"ድንበሮች"},
  "Visigoths": {"zh-Hans":"西哥特人","zh-Hant":"西哥德人","vi":"người Visigoth","ar":"القوط الغربيون","fa":"ویزیگوت‌ها","ur":"وزیگوتھ","ml":"വിസിഗോത്തുകൾ","am":"ቪዚጎቶች"},
  "civil war": {"zh-Hans":"内战","zh-Hant":"內戰","vi":"nội chiến","ar":"حرب أهلية","fa":"جنگ داخلی","ur":"خانہ جنگی","ml":"ആഭ്യന്തരയുദ്ധം","am":"የእርስ በርስ ጦርነት"},
  "imperial period": {"zh-Hans":"帝国时期","zh-Hant":"帝國時期","vi":"thời kỳ đế quốc","ar":"العصر الإمبراطوري","fa":"دوره امپراتوری","ur":"شاہی دور","ml":"സാമ്രാജ്യ കാലഘട്ടം","am":"የንጉሠ ነገሥት ዘመን"},
  "Diocletian": {"zh-Hans":"戴克里先","zh-Hant":"戴克里先","vi":"Diocletianus","ar":"دقلديانوس","fa":"دیوکلتیان","ur":"ڈیوکلیشن","ml":"ഡയോക്ലീഷ്യൻ","am":"ዲዮቅልጥያኖስ"},
  "Theodosius": {"zh-Hans":"狄奥多西","zh-Hant":"狄奧多西","vi":"Theodosius","ar":"ثيودوسيوس","fa":"تئودوسیوس","ur":"تھیوڈوسیس","ml":"തിയോഡോഷ്യസ്","am":"ቴዎዶስዮስ"}
};
const TIER2_T = {
  "decline": {"zh-Hans":"衰落","zh-Hant":"衰落","vi":"sự suy tàn","ar":"انحدار","fa":"زوال","ur":"زوال","ml":"അധഃപതനം","am":"ውድቀት"},
  "collapse": {"zh-Hans":"崩溃","zh-Hant":"崩潰","vi":"sự sụp đổ","ar":"انهيار","fa":"فروپاشی","ur":"انہدام","ml":"തകർച്ച","am":"መፈራረስ"},
  "rival": {"zh-Hans":"敌对的","zh-Hant":"敵對的","vi":"đối địch","ar":"متنافس","fa":"رقیب","ur":"حریف","ml":"എതിരാളിയായ","am":"ተፎካካሪ"},
  "recruited": {"zh-Hans":"招募","zh-Hant":"招募","vi":"được tuyển mộ","ar":"جُنِّد","fa":"به خدمت گرفته شد","ur":"بھرتی کیا گیا","ml":"റിക്രൂട്ട് ചെയ്തു","am":"ተመለመለ"},
  "permanent": {"zh-Hans":"永久的","zh-Hant":"永久的","vi":"vĩnh viễn","ar":"دائم","fa":"دائمی","ur":"مستقل","ml":"സ്ഥിരമായ","am":"ቋሚ"},
  "intended": {"zh-Hans":"有意的","zh-Hant":"有意的","vi":"có chủ ý","ar":"مقصود","fa":"عمدی","ur":"ارادی","ml":"ഉദ്ദേശിച്ച","am":"የታሰበ"}
};
