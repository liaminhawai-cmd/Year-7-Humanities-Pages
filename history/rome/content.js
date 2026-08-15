/* =======================================================================
   CONTENT BLOCK for the Ancient Rome WAGOLL family.
   This is the ONLY place the wall text lives.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.

   ------------------------------------------------------------------
   THIS WALL REHEARSES CAT 2, AND IT IS NOT A SOURCE-ANALYSIS WALL.

   Every other History wall on this site marks up an analytical paragraph
   about a source, because that is what those units assess. Ancient Rome does
   not assess source analysis at all. Its CAT is a tourist guidebook written
   for someone travelling from the outer reaches of the empire to Rome in
   300 CE, and it is marked on four things: chronology, cause and effect,
   metacognition, and presentation.

   So the worked examples below are guidebook writing. A student comparing
   their draft with this wall is comparing like with like — the same genre,
   the same audience, the same four criteria — rather than reading a model of
   a task they were never set.

   Metacognition is a real criterion here. It was withdrawn from the Ancient
   Australia wall because that CAT does not mark it; this one does, and the
   rubric asks for summarising, paraphrasing, and choosing and monitoring
   strategies. On the wall it is the phrase where the writer's own thinking
   shows.
   ======================================================================= */

const WALL = {
  id: "hist-rome",
  title: "A guidebook to Rome, 300 CE",
  expected: "Level 7",
  inquiry: "A traveller is coming to Rome from the far edge of the empire and has never seen the city. What do they need to know before they arrive?",
  foot: "<b>Task:</b> Year 7 History CAT 2, Ancient Rome. Research and write a tourist guidebook for someone travelling from the outer reaches of the Roman Empire to the city of Rome in 300 CE. It must include a map of the city centre, a timeline of Rome's history to 300 CE, a one-page history, what to see, religion, currency, language and accommodation. Three lessons, submitted to Compass. The four rows on this wall are that CAT's rubric, level for level."
};

const FACTS = [
  ["The traveller", "Someone from the empire's outer edge — Britain, North Africa, Syria — who has never seen Rome and needs to arrive able to cope."],
  ["The year", "300 CE. Not the Republic, not the height of the Empire. Christianity is rising but Constantine has not yet converted."],
  ["What it must contain", "Map, timeline, history, what to see, religion, currency, language, accommodation. Eight sections."],
  ["Whose Rome", "Accommodation must cover a peasant AND a wealthy traveller. The guidebook is not written only for the rich."],
  ["The trap", "Writing a guidebook for modern tourists. The task says ancient visitors, and the highlight in the task sheet says so twice."],
  ["What it is marked on", "Chronology, cause and effect, metacognition, presentation. Not source analysis — that is CAT 1 and CAT 3."]
];

/* ink   — the colour on paper, all four above 4.5:1 on the wall's cream
   lamp  — the same criterion on the dark bar of the big-screen tool
   underline — the second channel, which survives a greyscale photocopy and
               a colour-blind reader. */
const CRITERIA = [
  { key:"chronology",   row:"Chronology",           name:"Chronology",           glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"cause",        row:"Cause and effect",     name:"Cause and effect",     glyph:"▲",
    ink:"#2f6b3f", lamp:"#74c288", underline:"dashed" },
  { key:"meta",         row:"Metacognition",        name:"Metacognition",        glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
  { key:"presentation", row:"Presentation",         name:"Presentation",         glyph:"◆",
    ink:"#6b4a86", lamp:"#bda0d8", underline:"double" },
];

/* The CAT rubric's own bands. */
const LEVELS = ["Level 6","Level 7","Level 8","Level 9"];

const EXAMPLES = {
"Level 6":
`Welcome to Rome, the greatest city in the empire. It began in {chronology|753 BCE}, which was more than a thousand years before you arrive in {chronology|300 CE}, and the city grew this large because {cause|the River Tiber let boats carry grain and goods right into the centre}. While you are here you should visit the Forum, the public baths and the Colosseum, and you should carry Roman coins with you, because {cause|traders will not sell you food without them}. If you become lost, say "ubi thermae?", which means "where are the baths?", and {presentation|a labelled map of the city centre is printed on the next page}. {meta|I wrote my timeline before anything else, so that my dates stayed in the right order}.`,

"Level 7":
`Welcome to Rome, the largest and busiest city you will ever see. It was founded in {chronology|753 BCE} and has passed through three ages since then: {chronology|first the kings, then the Republic, and now the emperors}. You are arriving in {chronology|300 CE}, which places you late in that third age. The city can feed so many people because {cause|aqueducts carry fresh water down from the hills} and {cause|the Tiber and the great roads bring grain from Egypt and North Africa}. Visit the Forum first, then the public baths, and leave the Colosseum until last, and remember that money matters a great deal here, so carry denarii with you at all times. Three phrases will save you trouble, beginning with {presentation|"ubi thermae?", which means "where are the baths?"}. If you are poor you will sleep in an insula, a crowded block of rented rooms; if you are wealthy you will stay in a domus built around its own private courtyard. {presentation|Every section of this guidebook has its own heading and an illustration}, and {meta|I placed the timeline before the history section, because the dates make the whole story far easier to follow}.`,

"Level 8":
`Welcome to Rome. The city has existed for {chronology|more than a thousand years by the time you arrive in 300 CE}, and it is easiest to hold if you split it into three periods: {chronology|the regal period to 509 BCE, the Republic to 27 BCE, and the imperial period you are travelling in now}. Rome became this large for reasons that still shape your visit. {cause|Because the empire expanded, grain arrived from Egypt and North Africa, which is why a city of a million people does not starve}. {cause|Because the aqueducts were built, there is water for the baths you will use}, and {cause|because the roads were built, you can travel here at all}. Plan your days around the Forum, the baths and the Colosseum, and remember that entertainment came to Rome from the Etruscans. Religion is not optional: honour Jupiter, Mars and Diana, {cause|because Romans believed an offended god brought disaster on the whole city, not only on the person who offended them}. Your accommodation depends on your money — an insula if you are poor, a domus if you are wealthy. {presentation|I have used a labelled map, a dated timeline and a caption under every image so each section can be found quickly}. {meta|I summarised my research into my own words rather than copying it, because that forced me to work out what a traveller actually needs}.`,

"Level 9":
`Welcome to Rome, a city of perhaps a million people in {chronology|300 CE}. Its history divides cleanly into three, and knowing which one you are in matters: {chronology|the regal period from 753 to 509 BCE, the Republic from 509 to 27 BCE, and the imperial period that has run for the three centuries since}. You are arriving late in the third, {chronology|closer to Constantine than to Augustus}. Almost everything you will find useful here is a consequence of something. {cause|Conquest brought Egyptian and African grain into the ports, which is what allows a city this size to eat}, and {cause|the same conquests brought in the enslaved people whose labour built much of what you will admire}. {cause|Because the aqueducts carry fresh water, the baths are public and cheap, which is why they became where Romans do their business as much as their washing}. Rome adopted much of its art, architecture and entertainment from the Greeks and the Etruscans, {cause|so what looks Roman to you is often older and borrowed}. Honour the gods carefully. {cause|Romans held that an offended god punished the whole community, so a foreigner's carelessness was everyone's problem}. Where you sleep will depend entirely on your means: an insula, crowded and stacked, or a domus built around its own courtyard. {presentation|I have set the guidebook out as eight sections, each with a heading, a labelled map or image, and a caption that repeats the one fact a hurried reader needs}. {meta|I paraphrased my sources instead of quoting them, which showed me where I had understood something and where I had only copied it}. {meta|I also rewrote the religion section last, because checking it against the task sheet showed I had written for modern tourists rather than ancient ones}.`
};

const EXPLANATIONS = {
"Level 6": {
  chronology:   "Gives dates and puts them in order.",
  cause:        "Identifies one cause of Rome's growth.",
  meta:         "Names one strategy used, and why.",
  presentation: "Presents information in a basic way — a map is included."
},
"Level 7": {
  chronology:   "Sequences within a framework, naming the three periods and placing the reader inside one.",
  cause:        "Describes causes and their effects on people, not just events.",
  meta:         "Determines a strategy and gives a reason it suits the task.",
  presentation: "Presents creatively — headings, a picture, and a phrase given with its translation."
},
"Level 8": {
  chronology:   "Sequences with reference to named periods and their dates.",
  cause:        "Explains causes and effects, and identifies what people at the time believed and did about them.",
  meta:         "Evaluates a strategy — summarising into own words — and says what it produced.",
  presentation: "Creative and engaging: a labelled map, a dated timeline, captions that do a job."
},
"Level 9": {
  chronology:   "Sequences with reference to periods, their duration, and where the reader sits inside them.",
  cause:        "Analyses causes and effects, including the ones that are uncomfortable, and explains motives.",
  meta:         "Uses, monitors and redirects strategy — catches an error against the task sheet and fixes it.",
  presentation: "Creative, sophisticated and imaginative: a structure designed around how a hurried reader reads."
}
};

/* Verbatim from the Year 7 History CAT 2 rubric, level for level. Do not
   paraphrase these — a student is marked against this wording. */
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
meta:{
 "Level 6":"I can apply learning strategies, including summarising and paraphrasing information.",
 "Level 7":"I can determine the effectiveness of a range of learning strategies and select strategies that best meet the requirements of a task.",
 "Level 8":"I can evaluate the effectiveness of a range of learning strategies and select strategies that best meet the requirements of a task.",
 "Level 9":"I can use, monitor, evaluate and redirect as necessary a range of learning strategies."},
presentation:{
 "Level 6":"I can present information in a basic manner.",
 "Level 7":"I can present information creatively.",
 "Level 8":"I can present information in a creative and engaging manner.",
 "Level 9":"I can present information in a creative, sophisticated and imaginative manner."},
};

const SHEET_IMAGE = "";

const SOURCE_PANEL = {
  kind: "text",
  paragraphs: [
    "THE TASK — Use the internet to research and write a tourist guidebook for someone travelling from the outer reaches of the Roman Empire to Rome (the city) in 300 CE.",
    "YOUR GUIDEBOOK MUST INCLUDE — A map of the city centre as it was in ancient times. A timeline of Rome's history up to 300 CE. A one-page history: the origins of Rome (Romulus and Remus), Roman social classes (Patricians, Plebeians, Non-Citizens, Women and Rulers), and the Roman Army.",
    "WHAT TO SEE — a short guide to interesting sights, for example the Forum, the baths and the Colosseum. RELIGION — choose three gods, and explain what a visitor would need to know to avoid offending each one. What might happen if the God was offended?",
    "CURRENCY — identify the currency and denominations used in 300 CE. LANGUAGE — what language was spoken? Include three useful travel phrases, for example \"where are the baths?\" = ubi thermae? ACCOMMODATION — an option for a peasant and for a wealthy traveller.",
    "REMEMBER that your guidebook is for ancient, not modern, visitors to Rome. Present it as a guidebook — Word, Canva, or ask your teacher. Include plenty of pictures. You have 3 lessons. Submit to Compass by the due date."
  ],
  cite: "Year 7 History CAT 2 — Ancient Rome. The task sheet, quoted so the wall and the assessment cannot drift apart.",
  whole: { label:"The task, in full",
    text:"Eight required sections and one warning. Read the warning twice: the commonest way to lose marks on this CAT is to write a guidebook for a modern tourist." }
};

const HOTSPOTS = [
 { mark:"in 300 CE", label:"The year is doing work",
   text:"Not the Republic and not Augustus. In 300 CE the empire is late, Christianity is spreading, and Constantine has not yet converted. A timeline that stops at Julius Caesar has missed three hundred years." },
 { mark:"Patricians, Plebeians, Non-Citizens, Women and Rulers", label:"Five groups, not two",
   text:"The task names them deliberately. A guidebook that describes only the rich cannot reach the top bands, because the accommodation section explicitly asks for a peasant as well." },
 { mark:"What might happen if the God was offended?", label:"This is the cause-and-effect question",
   text:"It looks like a religion question. It is really the rubric's second row: Romans believed an offended god punished the whole community, which is a cause with an effect on people." },
 { mark:"for ancient, not modern, visitors to Rome", label:"The warning, highlighted twice on the task sheet",
   text:"Recommending a hotel, a currency exchange or a photograph of the ruins puts the guidebook in the wrong century. Checking your draft against this line is itself a metacognition mark." }
];

/* No rungs below Level 6: the CAT rubric this mirrors starts there. Declared
   empty rather than omitted so every page reading this file behaves alike. */
const EARLY_LEVELS = [];
const EARLY_EXAMPLES = {};
const EARLY_EXPLANATIONS = {};

/* Victorian Curriculum 2.0. This CAT sits in the History skills sub-strands
   for chronology and for cause and effect, NOT in "Using historical sources"
   — which is why the codes here differ from every other History wall on this
   site. The metacognition and presentation rows are not History descriptors
   at all: they come from the Critical and Creative Thinking capability and
   from the school's own reporting, so they carry no VC2HH code. */
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
const VC_NOTE = "The rows on this wall are the CAT 2 rubric, word for word, because that is what the guidebook is marked against. Two of the four rows are History skills and carry VC 2.0 codes: chronology, and cause and effect. The other two do not. Metacognition belongs to the Critical and Creative Thinking capability rather than to History, and Presentation is the school's own reporting row — neither has a VC2HH code, and pretending otherwise would misrepresent the curriculum. This is also the only History wall on this site that is not built on the 'Using historical sources' descriptors, because this unit does not assess source analysis. See CURRICULUM-CHECK.md.";

const BUMP = {
 "Level 6": "You have dates in order and one reason the city grew. To reach Level 7, name the three periods of Rome's history and say which one your traveller is arriving in, then say who each cause affected.",
 "Level 7": "You are sequencing within a framework and describing effects on people. To reach Level 8, turn each cause into a because-sentence that reaches the traveller, and say what Romans themselves believed about it.",
 "Level 8": "You are explaining causes and using your own words. To reach Level 9, include the uncomfortable causes as well as the impressive ones, and show a moment where you checked your draft and changed it.",
 "Level 9": "You are analysing cause and effect and redirecting your own strategy. Keep the guidebook readable — at this level sophistication means a hurried traveller can still find the baths."
};

const GLOSS = {
 tier2: {
   "denominations":"the different values coins come in",
   "consequence":"something that happens because of something else",
   "borrowed":"taken from somewhere else and used",
   "means":"how much money someone has",
   "hurried":"in a rush"
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
   "metacognition":"Thinking about how you are learning, and changing it if it is not working.",
   "paraphrase":"Put something into your own words.",
   "summarise":"Give the main points briefly.",
   "regal period":"The time when Rome was ruled by kings, to 509 BCE.",
   "Republic":"The time when Rome was ruled by elected officials, 509 to 27 BCE.",
   "imperial period":"The time when Rome was ruled by emperors, from 27 BCE.",
   "patrician":"A Roman from one of the old wealthy families.",
   "plebeian":"An ordinary Roman citizen, not from a noble family.",
   "aqueduct":"A channel or bridge built to carry water into a city.",
   "insula":"A crowded apartment block where poorer Romans lived.",
   "domus":"A private house built around a courtyard, for wealthy Romans.",
   "forum":"The public square at the centre of a Roman city.",
   "denarius":"A Roman silver coin.",
   "Etruscans":"The people of central Italy whose culture Rome borrowed from."
 }
};

const KID = {
 "Level 6": { band:"Level 6", lines:[
   "I can put dates in the right order and make a timeline.",
   "I can say one cause and what it led to.",
   "I can say what I did to help myself learn.",
   "I can present my work clearly."]},
 "Level 7": { band:"Level 7", lines:[
   "I can use dates and periods to organise Rome's history.",
   "I can describe what a cause did to people and groups.",
   "I can choose a way of working that suits the task and say why.",
   "I can present my work creatively."]},
 "Level 8": { band:"Level 8", lines:[
   "I can place events inside named periods of time.",
   "I can explain causes and effects and say what people at the time wanted.",
   "I can judge how well a strategy worked for me.",
   "I can present my work so it is engaging to read."]},
 "Level 9": { band:"Level 9", lines:[
   "I can use periods and their length to organise a long history.",
   "I can analyse causes and effects and explain why people acted as they did.",
   "I can watch how I am working and change it when it is not working.",
   "I can present my work in a sophisticated and imaginative way."]}
};

/* The guidebook is not a paragraph, so the builder walks the sections of the
   task rather than the sentences of an essay. */
const FRAME = {
  blurb: "The guidebook has eight required sections. These are the moves that earn the four rubric rows inside them.",
  steps: [
    { key:"chronology",   label:"Put time in order",  prompt:"Build the timeline to 300 CE. Name the three periods and say which one your traveller arrives in." },
    { key:"cause",        label:"Say why",            prompt:"For each thing you describe, say why it is there and who it affects. Turn facts into because-sentences." },
    { key:"cause",        label:"Include the cost",   prompt:"Conquest and enslaved labour built much of what the traveller will admire. The top band expects the uncomfortable causes too." },
    { key:"presentation", label:"Lay it out",         prompt:"Heading, map or image, caption. Design it so a hurried traveller can find one fact fast." },
    { key:"meta",         label:"Check and change",   prompt:"Read your draft against the task sheet. Is it written for an ancient visitor? Say what you changed and why." }
  ]
};
