/* =======================================================================
   CONTENT BLOCK for the Ancient Rome WAGOLL family.
   This is the ONLY place the wall text lives.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.

   ------------------------------------------------------------------
   THIS WALL IS ABOUT THREE HISTORICAL THINKING SKILLS.

   Ancient Rome does not assess source analysis — that is CAT 1 and CAT 3.
   Its CAT is a tourist guidebook for a traveller arriving in Rome in 300 CE,
   and the CAT rubric marks four things: chronology, cause and effect,
   metacognition, and presentation.

   This wall carries the two that are historical thinking, and adds a third
   from the school's own Developmental Rubric:

     Chronology            CAT 2 rubric, Levels 6-9
     Cause and effect      CAT 2 rubric, Levels 6-9
     Continuity and change Developmental Rubric, Levels 6-9

   It deliberately leaves out the other two. Presentation is about laying a
   document out attractively; metacognition is about how a student manages
   their own learning. Both are real things a teacher may want to mark, and
   neither is a way of thinking about the past. A WAGOLL wall exists to show
   what better historical thinking looks like, and a row that says "I can
   present information creatively" cannot do that — it teaches a student to
   improve their formatting, not their history.

   Continuity and change earns its place because the guidebook genre demands
   it. A traveller arriving in 300 CE is walking into a city that has been
   there a thousand years: some of what they meet is old and unchanged, and
   some of it has just been transformed. Saying which is which is the skill.
   ======================================================================= */

const WALL = {
  id: "hist-rome",
  title: "A guidebook to Rome, 300 CE",
  expected: "Level 7",
  inquiry: "A traveller is coming to Rome from the far edge of the empire and has never seen the city. What has been here for a thousand years, what has just changed, and why?",
  foot: "<b>Task:</b> Year 7 History CAT 2, Ancient Rome &mdash; a tourist guidebook for someone travelling from the outer reaches of the Roman Empire to the city of Rome in 300 CE. <b>Chronology</b> and <b>cause and effect</b> are that CAT's own rubric rows, Level 6 to Level 9. <b>Continuity and change</b> is from Kew High School's Developmental Rubric. The CAT's other two rows, presentation and metacognition, are not historical thinking and are not on this wall."
};

const FACTS = [
  ["The traveller", "Someone from the empire's outer edge &mdash; Britain, North Africa, Syria &mdash; who has never seen Rome and needs to arrive able to cope."],
  ["The year", "300 CE. Not the Republic, not the height of the Empire. Christianity is spreading but Constantine has not yet converted."],
  ["A thousand years old", "Rome was founded in 753 BCE. Your traveller arrives into a city older than almost anything they know."],
  ["What has lasted", "The Forum. The gods. Latin. The roads. The division between those with citizenship and those without."],
  ["What has changed", "Kings gone, then the Republic gone. Elections replaced by emperors. A new religion spreading fast."],
  ["The skill", "Not listing sights. Saying what is old, what is new, and why &mdash; which is chronology, cause and effect, and continuity and change."]
];

/* ink   — the colour on paper, all three above 4.5:1 on the wall's cream
   lamp  — the same criterion on the dark bar of the big-screen tool
   underline — the second channel, which survives a greyscale photocopy and
               a colour-blind reader. */
const CRITERIA = [
  { key:"chronology", row:"Chronology",            name:"Chronology",            glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"cause",      row:"Cause and effect",      name:"Cause and effect",      glyph:"▲",
    ink:"#2f6b3f", lamp:"#74c288", underline:"dashed" },
  { key:"continuity", row:"Continuity and change", name:"Continuity and change", glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
];

const LEVELS = ["Level 6","Level 7","Level 8","Level 9"];

const EXAMPLES = {
"Level 6":
`Welcome to Rome, the greatest city in the empire. It was founded in {chronology|753 BCE}, more than a thousand years before you arrive in {chronology|300 CE}. The city grew this large because {cause|the River Tiber let boats carry grain and goods right into the centre}. Some things here are very old. {continuity|The Forum has been the middle of the city for hundreds of years}, and people still speak Latin and honour the same gods. Other things have changed completely, because {continuity|Rome once had kings, then elected leaders, and now a single emperor rules everything}. Carry Roman coins with you, because {cause|traders will not sell you food without them}.`,

"Level 7":
`Welcome to Rome, the largest and busiest city you will ever see. It was founded in {chronology|753 BCE} and has passed through three ages since then: {chronology|first the kings, then the Republic, and now the emperors}. You are arriving in {chronology|300 CE}, late in that third age. The city can feed so many people because {cause|aqueducts carry fresh water down from the hills}. {cause|The roads and the Tiber also bring in grain from Egypt and North Africa}. Much of what you see has lasted a very long time, and {continuity|the Forum, the Latin language and the old gods have all been here for centuries}. But the way Rome is governed has changed completely, because {continuity|the Republic ended and its elections were replaced by a single emperor}. One more change is happening right now, since {continuity|Christianity is spreading quickly, although the old temples are still busy}.`,

"Level 8":
`Welcome to Rome, a city of perhaps a million people. It is easiest to hold its history in three periods: {chronology|the regal period to 509 BCE, the Republic to 27 BCE, and the imperial period you are travelling in now}, which means {chronology|the city is already more than a thousand years old when you arrive in 300 CE}. Rome became this large for reasons you will notice immediately. {cause|Because the empire kept expanding, grain arrived from Egypt and North Africa, which is why a city this size does not starve}, and {cause|because the aqueducts were built, the baths are public and cheap}. Some of the city has barely changed. {continuity|The Forum has been its centre since the kings, and the gods honoured there are the same gods}. Other parts are unrecognisable, because {continuity|the Republic's elections and its Senate have given way to rule by one man}, and {continuity|a new religion is spreading through the poorer districts while the old temples still stand}.`,

"Level 9":
`Welcome to Rome in {chronology|300 CE}. Its history divides into three, and knowing which one you are in matters: {chronology|the regal period from 753 to 509 BCE, the Republic from 509 to 27 BCE, and the imperial period that has run for the three centuries since}. You are arriving late in the third, {chronology|closer to Constantine than to Augustus}. Almost everything useful here is a consequence of something. {cause|Conquest brought Egyptian and African grain into the ports, which is what allows a city this size to eat}, and {cause|the same conquests brought in the enslaved people whose labour built much of what you will admire}. What has lasted and what has changed do not divide neatly. {continuity|The Forum, Latin, and the division between citizen and non-citizen have all survived every change of government}, which suggests {continuity|that Rome's habits outlast its constitutions}. Yet {continuity|the Republic's elections vanished within a single lifetime}, and {continuity|Christianity is now spreading faster than any emperor has managed to stop, so the religion you are warned to respect may not be the religion here in fifty years}.`
};

const EXPLANATIONS = {
"Level 6": {
  chronology: "Gives dates and puts them in order.",
  cause:      "Identifies causes and what they led to.",
  continuity: "Recognises that some things changed over time and others stayed the same."
},
"Level 7": {
  chronology: "Sequences within a framework, naming the three periods and placing the reader inside one.",
  cause:      "Describes causes and their effects on people, not just on events.",
  continuity: "Identifies which aspects of Rome changed and which remained the same."
},
"Level 8": {
  chronology: "Sequences with reference to named periods and their dates, and uses that to size the city's age.",
  cause:      "Explains causes and effects, and connects them to what the traveller will actually notice.",
  continuity: "Describes continuity and change together, saying what stayed and what gave way."
},
"Level 9": {
  chronology: "Sequences with reference to periods, their duration, and where the reader sits inside them.",
  cause:      "Analyses causes and effects, including the uncomfortable ones.",
  continuity: "Explains patterns of continuity and change, and gives a reason why something lasted or ended."
}
};

/* Chronology and cause and effect are the CAT 2 rubric, word for word.
   Continuity and change is Kew's Developmental Rubric, word for word. Do not
   paraphrase either — a student is marked against this wording. */
const CONTINUUM = {
chronology:{
 "Level 6":"I can sequence events and people in chronological order, and represent time by creating timelines.",
 "Level 7":"I can sequence events and developments within a chronological framework, using dating conventions to represent and measure time.",
 "Level 8":"I can sequence events and developments within a chronological framework with reference to periods of time.",
 "Level 9":"I can sequence events and developments within a chronological framework with reference to periods of time and their duration."},
cause:{
 "Level 6":"I can identify the causes and effects of events and developments.",
 "Level 7":"I can describe the causes and effects of events and developments on societies, individuals and groups.",
 "Level 8":"I can explain the causes and effects of events and developments and identify the motives and actions of people at the time.",
 "Level 9":"I can analyse the causes and effects of events and developments and explain the motives and actions of people at the time."},
continuity:{
 "Level 6":"I can recognise how some things change over time and others remain the same.",
 "Level 7":"I can identify the aspects of a society, event or development that change over time and others that remain the same.",
 "Level 8":"I can describe continuity and change, including what has stayed the same and what has changed.",
 "Level 9":"I can explain patterns of continuity and change over time (political, economic or social), giving a reason why something changed or why something stayed the same."},
};

const SHEET_IMAGE = "";

const SOURCE_PANEL = {
  kind: "text",
  paragraphs: [
    "THE TASK — Research and write a tourist guidebook for someone travelling from the outer reaches of the Roman Empire to Rome (the city) in 300 CE.",
    "YOUR GUIDEBOOK MUST INCLUDE — A map of the city centre as it was in ancient times. A timeline of Rome's history up to 300 CE. A one-page history: the origins of Rome (Romulus and Remus), Roman social classes (Patricians, Plebeians, Non-Citizens, Women and Rulers), and the Roman Army.",
    "WHAT TO SEE — a short guide to interesting sights, for example the Forum, the baths and the Colosseum. RELIGION — choose three gods, and explain what a visitor would need to know to avoid offending each one. What might happen if the God was offended?",
    "CURRENCY — identify the currency and denominations used in 300 CE. LANGUAGE — what language was spoken? Include three useful travel phrases. ACCOMMODATION — an option for a peasant and for a wealthy traveller.",
    "REMEMBER that your guidebook is for ancient, not modern, visitors to Rome. You have 3 lessons. Submit to Compass by the due date."
  ],
  cite: "Year 7 History CAT 2 — Ancient Rome. The task sheet, quoted so the wall and the assessment cannot drift apart.",
  whole: { label:"The task, in full",
    text:"Eight required sections. This wall does not model how to lay them out — it models the historical thinking that has to happen inside them." }
};

const HOTSPOTS = [
 { mark:"in 300 CE", label:"The year is doing work",
   text:"Not the Republic and not Augustus. In 300 CE the empire is late, Christianity is spreading, and Constantine has not yet converted. A timeline that stops at Julius Caesar has missed three hundred years." },
 { mark:"A timeline of Rome's history up to 300 CE", label:"This is the chronology row",
   text:"A list of dates is Level 6. Naming the three periods is Level 7. Saying how long each lasted, and which one the traveller is standing in, is Level 9." },
 { mark:"the origins of Rome (Romulus and Remus)", label:"Where continuity and change lives",
   text:"The founding story is 753 BCE and the traveller arrives in 300 CE. Everything between those dates is either something that lasted or something that ended — and the strongest guidebooks say which, and why." },
 { mark:"What might happen if the God was offended?", label:"This is the cause-and-effect question",
   text:"It looks like a religion question. It is really the second row: Romans believed an offended god punished the whole community, which is a cause with an effect on people." }
];

/* No rungs below Level 6: both rubrics this wall carries start there.
   Declared empty rather than omitted so every page reading this file behaves
   alike. */
const EARLY_LEVELS = [];
const EARLY_EXAMPLES = {};
const EARLY_EXPLANATIONS = {};

/* Victorian Curriculum 2.0. Unlike every other History wall on this site,
   this one is NOT built on "Using historical sources" — this unit does not
   assess source analysis. All three rows here are genuine History skills
   with codes: VC 2.0 puts causes and effects together with continuity and
   change in a single descriptor (S07), which is exactly why those two rows
   belong on one wall. */
const VC = {
 "Level 6": [
   ["VC2HH6S01","sequence information about events, developments and periods"],
   ["VC2HH6S07","describe causes and effects, and continuity and change"]],
 "Level 7": [
   ["VC2HH8S01","sequence information about events, developments and periods using chronological conventions"],
   ["VC2HH8S07","explain causes and effects, and continuity and change"]],
 "Level 8": [
   ["VC2HH8S01","sequence information about events, developments and periods using chronological conventions"],
   ["VC2HH8S07","explain causes and effects, and continuity and change"]],
 "Level 9": [
   ["VC2HH10S01","sequence information about events, developments and periods using chronological conventions"],
   ["VC2HH10S07","analyse causes and effects, and continuity and change"]]
};
const VC_NOTE = "Chronology and cause and effect are the CAT 2 rubric, word for word. Continuity and change is Kew High School's Developmental Rubric, word for word. All three carry Victorian Curriculum 2.0 codes, and VC 2.0 puts causes and effects together with continuity and change inside one descriptor (S07) — which is why those two rows sit next to each other here rather than in separate units. The CAT's other two rows are not on this wall: presentation is about laying a document out, and metacognition is about managing your own learning. Both may be worth marking; neither is a way of thinking about the past, and a wall that models 'present information creatively' teaches formatting rather than history. See CURRICULUM-CHECK.md.";

const BUMP = {
 "Level 6": "You have dates in order, a cause, and one thing that stayed and one that changed. To reach Level 7, name the three periods of Rome's history and say which one your traveller is arriving in, then say who each cause affected.",
 "Level 7": "You are sequencing within a framework and naming what changed. To reach Level 8, put continuity and change in the same sentence — say what stayed the same AS something else gave way — and turn each cause into a because-sentence.",
 "Level 8": "You are describing continuity and change together. To reach Level 9, give a reason WHY something lasted or ended, and include the uncomfortable causes as well as the impressive ones.",
 "Level 9": "You are explaining patterns and giving reasons. Keep testing them: is what lasted a habit, a building, or a law? Rome's constitutions changed faster than its customs, and noticing that is the top of this rubric."
};

const GLOSS = {
 tier2: {
   "consequence":"something that happens because of something else",
   "borrowed":"taken from somewhere else and used",
   "unrecognisable":"so changed you would not know it",
   "vanished":"disappeared completely",
   "outlast":"to last longer than"
 },
 tier3: {
   "chronology":"The order in which things happened.",
   "chronological framework":"A way of organising time using periods and dates.",
   "dating conventions":"The agreed ways of writing dates, such as BCE and CE.",
   "BCE":"Before Common Era — years counted backwards from year one.",
   "CE":"Common Era — years counted forwards from year one.",
   "period":"A named stretch of time, such as the Republic.",
   "duration":"How long something lasted.",
   "cause":"The reason something happened.",
   "effect":"What happened as a result.",
   "motive":"The reason a person chose to act.",
   "continuity":"Something that stays the same over a long time.",
   "change":"Something that becomes different over time.",
   "pattern":"Something that happens repeatedly, in a way you can describe.",
   "political":"To do with government and power.",
   "economic":"To do with money, work and trade.",
   "social":"To do with how people live together.",
   "regal period":"The time when Rome was ruled by kings, to 509 BCE.",
   "Republic":"The time when Rome was ruled by elected officials, 509 to 27 BCE.",
   "imperial period":"The time when Rome was ruled by emperors, from 27 BCE.",
   "citizen":"A person with legal rights and protections in Rome.",
   "patrician":"A Roman from one of the old wealthy families.",
   "plebeian":"An ordinary Roman citizen, not from a noble family.",
   "aqueduct":"A channel or bridge built to carry water into a city.",
   "insula":"A crowded apartment block where poorer Romans lived.",
   "domus":"A private house built around a courtyard, for wealthy Romans.",
   "forum":"The public square at the centre of a Roman city.",
   "Senate":"The council of leading Romans that governed during the Republic.",
   "denarius":"A Roman silver coin."
 }
};

const KID = {
 "Level 6": { band:"Level 6", lines:[
   "I can put dates in the right order and make a timeline.",
   "I can say one cause and what it led to.",
   "I can say that some things changed and some stayed the same."]},
 "Level 7": { band:"Level 7", lines:[
   "I can use dates and periods to organise Rome's history.",
   "I can describe what a cause did to people and groups.",
   "I can name which parts of Rome changed and which did not."]},
 "Level 8": { band:"Level 8", lines:[
   "I can place events inside named periods of time.",
   "I can explain causes and effects and say what people at the time wanted.",
   "I can describe what stayed the same and what changed, together."]},
 "Level 9": { band:"Level 9", lines:[
   "I can use periods and their length to organise a long history.",
   "I can analyse causes and effects and explain why people acted as they did.",
   "I can explain why something lasted or why it ended."]}
};

/* The guidebook is not a paragraph, so the builder walks the thinking the
   guidebook has to contain rather than the sentences of an essay. */
const FRAME = {
  blurb: "The guidebook has eight required sections. These are the three historical moves that have to happen inside them.",
  steps: [
    { key:"chronology", label:"Put time in order", prompt:"Build the timeline to 300 CE. Name the three periods and say which one your traveller arrives in." },
    { key:"cause",      label:"Say why",          prompt:"For each thing you describe, say why it is there and who it affects. Turn facts into because-sentences." },
    { key:"cause",      label:"Include the cost", prompt:"Conquest and enslaved labour built much of what the traveller will admire. The top band expects the uncomfortable causes too." },
    { key:"continuity", label:"Old or new?",      prompt:"For each sight, ask: has this been here for centuries, or has it just changed? Say which." },
    { key:"continuity", label:"Say why it lasted", prompt:"Give a reason. Why did the Forum survive every change of government when the Republic's elections did not?" }
  ]
};
