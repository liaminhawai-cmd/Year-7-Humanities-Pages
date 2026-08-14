/* =======================================================================
   CONTENT BLOCK for the Vesuvius WAGOLL family.
   This is the ONLY place the wall text lives.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.

   ------------------------------------------------------------------
   DRAFT. The worked examples have been written and levelled but have not
   been taught yet. The curriculum block below is real: the "Using
   historical sources" descriptors do not change with the topic, so all
   three History units meet the same ones.

   Sequenced third on purpose. Unit 1 is an object with no author, unit 2
   is a written source by an outsider at second hand, and this one is a
   written source by a participant — who is nonetheless not an eyewitness
   to the part of it that matters most.
   ======================================================================= */

const WALL = {
  id: "hist-vesuvius",
  title: "A letter about a mountain",
  expected: "Year 7",
  inquiry: "Pliny watched the eruption from thirty kilometres away and wrote about it twenty-five years later. How far can we trust him?",
  foot: "<b>Source:</b> Pliny the Younger, <i>Letters</i> 6.16, to the historian Tacitus, written c. 106 CE about the eruption of Vesuvius in 79 CE. English wording adapted from the public-domain translation of William Melmoth (1746); sentence length and spelling modernised for classroom reading. <b>The traditional date of 24 August is disputed:</b> a charcoal inscription uncovered at Pompeii in 2018, together with the autumn fruit and heavier clothing found in the deposits, has moved many archaeologists to an October eruption. The passage keeps the date the manuscripts give, because the disagreement is part of what there is to analyse."
};

const FACTS = [
  ["Ancient text", "A letter from Pliny the Younger to the historian Tacitus, one of a collection its author arranged for publication."],
  ["The author", "Pliny the Younger, in his eighteenth year at the time of the eruption, nephew of the commander of the Roman fleet."],
  ["Where he stood", "Misenum, a naval base about thirty kilometres across the Bay of Naples from the mountain."],
  ["The delay", "He wrote roughly twenty-five years after the event, at Tacitus' request, for a history Tacitus was writing."],
  ["What he did not see", "His uncle's death. That part reached him from the people who were with him."],
  ["Known limits", "The date is disputed. The account of the death is second-hand. He had a personal stake in how his uncle was remembered."]
];

/* ink   — the colour on paper, all four above 4.5:1 on the wall's cream
   lamp  — the same criterion on the dark bar of the big-screen tool
   underline — the second channel, which is what survives a greyscale
               photocopy and a colour-blind reader */
const CRITERIA = [
  { key:"source",   row:"Origin, features &amp; purpose",        name:"Origin, features &amp; purpose",        glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"context",  row:"Historical context",                    name:"Historical context",                    glyph:"▲",
    ink:"#357a46", lamp:"#74c288", underline:"dashed" },
  { key:"evidence", row:"Historical interpretations",            name:"Historical interpretations",            glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
  { key:"judge",    row:"Accuracy, usefulness &amp; reliability", name:"Accuracy, usefulness &amp; reliability", glyph:"◆",
    ink:"#744f91", lamp:"#bda0d8", underline:"double" },
];

const LEVELS = ["Grade 5","Year 6","Year 7","Year 8","Year 9","Year 10"];

const EXAMPLES = {
"Grade 5":
`This source is {source|a letter written by Pliny the Younger}. He describes {source|a cloud shaped like a pine tree} above the mountain. {context|Ash and burnt stones fell as the ships came closer}. His uncle {context|sailed towards the danger to help people}. Pliny {evidence|watched from a town across the bay}. He {evidence|heard the rest from people who were there}. The letter is {judge|useful for what the eruption looked like}, but he {judge|did not see his uncle die}.`,

"Year 6":
`The source is a letter by {source|Pliny the Younger}. He wrote it {source|to the historian Tacitus}, about the eruption of Vesuvius in 79 CE. He describes {source|a cloud rising like a pine tree}. It had {source|a tall trunk and branches spreading at the top}. As the rescue ships drew closer, {context|hot ash fell, and then pumice and blackened stones}. His uncle {context|commanded the Roman fleet and sailed towards the mountain}. Pliny {evidence|saw the cloud himself, from across the bay}. But {evidence|others told him how his uncle died}. The letter is {judge|useful evidence for what the eruption looked like}, but {judge|it was written about twenty-five years later}.`,

"Year 7":
`The ancient source is {source|a letter from Pliny the Younger to the historian Tacitus}. It was written {source|about twenty-five years after Vesuvius erupted in 79 CE}. Its purpose was to {source|give Tacitus material for a history}, and also to leave {source|a record of how his uncle died}. In the Roman world, {context|Misenum was a naval base, and Pliny's uncle commanded the fleet stationed there}. That is why {context|warships could be launched towards an erupting mountain}. Pliny describes the cloud as {evidence|shaped like a pine tree, with a trunk and spreading branches}. He is clear that {evidence|he watched from across the bay and was told the rest}. The letter is {judge|very useful for the shape and stages of the eruption}, because {judge|the ash and pumice he describes match what excavators dug through at Pompeii}. It cannot tell us {judge|what happened inside the buried towns}.`,

"Year 8":
`Pliny wrote this letter {source|around 106 CE, at the request of Tacitus, who was writing a history}. He tells Tacitus {source|to take from it whatever he needs}, and he says plainly that {source|a letter and a history are not the same thing}. Misenum was {context|the base of the Roman fleet, about thirty kilometres across the bay from the mountain}. Pliny the Elder {context|commanded it and also wrote on natural history}, which explains {context|both the rescue and the curiosity together}. Pliny describes the eruption column as {evidence|a pine-shaped cloud}, a description exact enough that {evidence|volcanologists now call this kind of eruption Plinian}. He separates {evidence|the cloud he saw from his uncle's death, which reached him at second hand}. The letter is {judge|strongly supported where the deposits at Pompeii match his order of ash, then pumice, then stone}. I would ask {judge|how much twenty-five years and a wish to honour his uncle have shaped the telling}.`,

"Year 9":
`The letter survives {source|because it was collected and published among Pliny's correspondence}, not because anyone preserved it {source|as a record of a disaster}. He wrote it {source|for Tacitus, and past him for the readers of a published collection}. He draws the distinction himself: {source|writing to a friend is not writing for the public}. Misenum lay {context|across the Bay of Naples from Vesuvius, far enough for Pliny to watch and near enough for the fleet to be ordered out}. His uncle's decision to sail {context|belonged to a Roman elite in which command and the study of nature sat in one person}. Pliny explains the column {evidence|as a pine, a comparison precise enough that modern volcanology took its name from him}. He distinguishes {evidence|what he observed from what was reported to him afterwards}. Because {judge|the layers excavated at Pompeii follow the same order he gives — ash, then pumice, then blackened stone — the physical account is well supported}. The account of his uncle's last hours is {judge|weaker, resting on survivors' testimony recalled a quarter of a century later}.`,

"Year 10":
`Pliny is a witness to part of what he describes, but the text reaches us {source|as literature: a letter written for publication, inside a collection its author arranged}. Its explicit evidence is {source|the shape of the column and the order of what fell}. Its implicit argument is that {source|his uncle died as a Roman of learning and command should die}, and it is aimed {source|at a historian and, through him, at a reading public}. The letter reflects {context|an empire in which naval command, natural philosophy and literary reputation belonged to the same men}. It reveals what Pliny valued: {context|accuracy, courage, and the memory of his family}. Volcanologists accept the eruption sequence {evidence|because the deposits at Pompeii and Herculaneum record the same order independently}. Historians treat the death scene more cautiously {evidence|because it came through survivors and through twenty-five years of retelling}, and they now dispute even the date {evidence|because autumn fruit, heavier clothing and an inscription found in 2018 point past August}. Their readings diverge because {evidence|deposits and memory decay in different ways}. Overall the letter is {judge|strong evidence for the physical eruption and qualified evidence for the human events inside it}. Its strength is {judge|that an independent record in the ground agrees with it}; its limits are {judge|the delay, the second-hand core, and the author's stake in how his uncle is remembered}.`
};

const EXPLANATIONS = {
"Grade 5": {
  source:   "Names the source, its author, and the image he uses for the cloud.",
  context:  "Says what was falling and what his uncle did.",
  evidence: "Separates what Pliny saw from what he was told.",
  judge:    "Gives one use and one limit, and the limit is about the author's position."
},
"Year 6": {
  source:   "Identifies the type of source, both people involved, the event and the date.",
  context:  "Describes the sequence of what fell, and the role that put his uncle on a ship.",
  evidence: "Recognises that the letter holds two kinds of evidence at once.",
  judge:    "Recognises usefulness and names the delay as the limit."
},
"Year 7": {
  source:   "Identifies origin and content, then states both purposes: material for a history, and a record of a death.",
  context:  "Outlines why a fleet was there at all, which is what makes the rescue possible.",
  evidence: "Describes his interpretation of the column and his own split between seen and reported.",
  judge:    "Concludes from outside corroboration, then bounds the claim with what the letter cannot reach."
},
"Year 8": {
  source:   "Describes the commission, the audience, and Pliny's own statement about genre.",
  context:  "Describes Misenum and explains the double role that produced both the rescue and the observation.",
  evidence: "Connects his description to its modern reception — the term Plinian — and holds the two evidence bases apart.",
  judge:    "Compares the letter with the excavated deposits, then asks targeted questions about time and motive."
},
"Year 9": {
  source:   "Explains why the letter survives at all, and how publication shaped it.",
  context:  "Explains the geography of the bay and the social world that put a naturalist in command of a fleet.",
  evidence: "Analyses the pine comparison as an interpretation precise enough to become a technical term.",
  judge:    "Ranks the physical account above the death scene, and gives the reason for each."
},
"Year 10": {
  source:   "Analyses the letter as literature, with an explicit record and an implicit argument about how to die well.",
  context:  "Uses context to explain the author's values and the world that made them possible.",
  evidence: "Exposes why specialists accept one part, qualify another, and now dispute the date itself.",
  judge:    "Weighs one strength against three limitations and separates two claims of different strength."
}
};

const CONTINUUM = {
source:{
 "Grade 5":"I can name a historical source and a feature I notice.",
 "Year 6":"I can identify different types of historical sources.",
 "Year 7":"I can identify the origin, content features and purpose of historical sources.",
 "Year 8":"I can describe the origin, content features and purpose of historical sources.",
 "Year 9":"I can explain the origin, content features and purpose of historical sources.",
 "Year 10":"I can analyse the origin, explicit and implicit meaning, and purpose of historical sources."},
context:{
 "Grade 5":"I can say where or when a source comes from.",
 "Year 6":"I can identify the historical context of a source.",
 "Year 7":"I can outline the historical context of a source.",
 "Year 8":"I can describe the historical context of sources.",
 "Year 9":"I can explain historical context, including important events that influenced a source’s creation.",
 "Year 10":"I can explain historical context to identify the motivations, values and attitudes of a source’s creator."},
evidence:{
 "Grade 5":"I can notice that people may explain the past differently.",
 "Year 6":"I can recognise that historians may interpret historical events and developments differently.",
 "Year 7":"I can describe different historical interpretations of the past.",
 "Year 8":"I can explain different historical interpretations and contested debates about the past.",
 "Year 9":"I can analyse historical interpretations and contested debates and identify the evidence used to support them.",
 "Year 10":"I can evaluate historical interpretations and contested debates, including why or how interpretations differ."},
judge:{
 "Grade 5":"I can say one thing a source can and cannot tell us.",
 "Year 6":"I can recognise that some historical sources are more useful than others.",
 "Year 7":"I can draw conclusions about the usefulness of sources.",
 "Year 8":"I can compare and contrast historical sources and ask questions about their accuracy, usefulness and reliability.",
 "Year 9":"I can compare and contrast historical sources and identify their accuracy, usefulness and reliability.",
 "Year 10":"I can compare and contrast sources and analyse their accuracy, usefulness and reliability."},
};

const SHEET_IMAGE = "";

const SOURCE_PANEL = {
  kind: "text",
  paragraphs: [
    "My uncle was at Misenum, in command of the fleet. On 24 August, in the early afternoon, my mother pointed out to him a cloud of unusual size and appearance.",
    "It rose like a tree, and I can best describe its shape by likening it to a pine. It shot up to a great height in the form of a tall trunk, which spread out at the top into branches.",
    "Ashes were already falling, hotter and thicker as the ships came nearer, and then pumice and blackened stones, charred and cracked by the fire.",
    "He was overtaken by the flames and the smell of sulphur, and fell. I believe his breathing was stopped by the thick fumes, for he had always had a weak chest.",
    "You will pick out what you want. There is a great difference between a letter and a history, between writing to a friend and writing for the public."
  ],
  cite: "Pliny the Younger, <i>Letters</i> 6.16, to Tacitus, written c. 106 CE. Wording adapted from William Melmoth's public-domain translation of 1746. The August date is the one the manuscripts give; it is disputed.",
  whole: { label:"The whole letter extract",
    text:"Five short extracts in the order Pliny wrote them. The first four are the account; the fifth tells you what kind of document it is." }
};

const HOTSPOTS = [
 { mark:"a cloud of unusual size and appearance", label:"What he actually saw",
   text:"This is the part he witnessed, from thirty kilometres away, at seventeen. Everything in the letter that historians trust most begins here." },
 { mark:"likening it to a pine", label:"The comparison that became a technical term",
   text:"A Roman umbrella pine: a bare trunk with a flat spreading crown. The description was accurate enough that volcanologists now call this eruption type Plinian, after him." },
 { mark:"pumice and blackened stones", label:"The part the ground can check",
   text:"Excavators at Pompeii dug through ash, then pumice, then heavier stone — the same order Pliny gives. An independent record agreeing with a witness is the strongest thing in source analysis." },
 { mark:"a great difference between a letter and a history", label:"He tells you what this is",
   text:"Pliny names his own genre. A letter to a friend, written for publication, supplying a historian with material. Three purposes at once, and he expects you to know it." }
];


/* ---------------------------------------------------------------------------
   The rungs below Grade 5. Two bands, matching the way the Victorian
   Curriculum bands the primary years.
   --------------------------------------------------------------------------- */

const EARLY_LEVELS = ["Foundation to Level 2", "Levels 3 and 4"];

const EARLY_EXAMPLES = {
 "Foundation to Level 2":
`This is a letter. A man called {source|Pliny} wrote it. He saw {source|a big cloud} over a mountain. {context|Hot ash and stones fell down}. His uncle {context|went in a ship to help}.`,

 "Levels 3 and 4":
`Pliny wrote a letter about {source|the day a mountain erupted}. He says the cloud {source|looked like a pine tree}. {context|Hot ash fell on the ships}. Then {context|burnt stones fell too}. His uncle {context|sailed towards the mountain to help}. Pliny {evidence|saw the cloud himself}. He was {evidence|told about his uncle by other people}.`
};

const EARLY_EXPLANATIONS = {
 "Foundation to Level 2": {
   source:  "Identifies what the source is, who wrote it, and one thing he saw (VC2HH2S03).",
   context: "Identifies what people did at the time (VC2HH2S04). The wall colours this green; at this band the curriculum calls it perspectives, not context." },
 "Levels 3 and 4": {
   source:  "Identifies the features and content of the source, including the comparison Pliny uses (VC2HH4S03).",
   context: "Describes what people in the past did, using evidence from the source (VC2HH4S04).",
   evidence:"Describes that the source holds two different kinds of account (VC2HH4S05)." }
};

/* The Victorian Curriculum 2.0 descriptor each rung is working inside, from
   the History sub-strand "Using historical sources", Foundation to Level 10.
   These are about the skill, not the topic, so they are identical across all
   three units — that is correct, not a copy-paste slip.

   This is the SECOND layer: CONTINUUM above is Kew High School's own learning
   continuum. See CURRICULUM-CHECK.md for where the two diverge. */
const VC = {
 "Foundation to Level 2": [
  ["VC2HH2S03","identify the features and content of sources"],
  ["VC2HH2S04","identify perspectives of people in the past or present in sources"]],
 "Levels 3 and 4": [
  ["VC2HH4S03","identify the features and content of historical sources"],
  ["VC2HH4S04","describe perspectives of people from the past based on evidence from primary sources"],
  ["VC2HH4S05","describe different historical interpretations"]],
 "Grade 5": [
  ["VC2HH6S03","describe the features, content and context of historical sources"],
  ["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"],
  ["VC2HH6S05","describe historical perspectives and identify beliefs, values and attitudes of people and groups based on evidence from primary sources"],
  ["VC2HH6S06","explain different historical interpretations"]],
 "Year 6": [
  ["VC2HH6S03","describe the features, content and context of historical sources"],
  ["VC2HH6S04","describe the value of sources for use as evidence to identify historical significance and continuity and change"],
  ["VC2HH6S05","describe historical perspectives and identify beliefs, values and attitudes of people and groups based on evidence from primary sources"],
  ["VC2HH6S06","explain different historical interpretations"]],
 "Year 7": [
  ["VC2HH8S03","explain the features, content and context of historical sources"],
  ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"],
  ["VC2HH8S05","explain the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
  ["VC2HH8S06","analyse historical interpretations and debates"]],
 "Year 8": [
  ["VC2HH8S03","explain the features, content and context of historical sources"],
  ["VC2HH8S04","analyse the value of sources for use as evidence to explain historical significance, continuity and change, and causes and consequences"],
  ["VC2HH8S05","explain the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
  ["VC2HH8S06","analyse historical interpretations and debates"]],
 "Year 9": [
  ["VC2HH10S03","analyse the purpose, features, content and context of historical sources"],
  ["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"],
  ["VC2HH10S05","analyse the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
  ["VC2HH10S06","evaluate historical interpretations and debates"]],
 "Year 10": [
  ["VC2HH10S03","analyse the purpose, features, content and context of historical sources"],
  ["VC2HH10S04","evaluate the value of sources for use as evidence to interpret historical significance, continuity and change, and causes and consequences"],
  ["VC2HH10S05","analyse the perspectives, beliefs, values and attitudes of people and groups based on evidence from a range of sources"],
  ["VC2HH10S06","evaluate historical interpretations and debates"]]
};
const VC_NOTE = "The row wording on this wall is Kew High School's own learning continuum, which runs level by level. The codes are Victorian Curriculum 2.0, which bands History two years at a time — so the two years inside a band share a code. The school continuum runs about one level behind the curriculum through the middle of the ladder: at Level 8 it asks students to \u2018describe\u2019 where VC2HH8S03 asks them to \u2018explain\u2019, and to \u2018explain\u2019 interpretations where VC2HH8S06 asks them to \u2018analyse\u2019. The two converge again by Level 10. See CURRICULUM-CHECK.md.";

const BUMP = {
 "Foundation to Level 2": {
   new:"You say who wrote it and one thing he saw.",
   background:"That a letter is one person writing to another, and that we can still read it." },
 "Levels 3 and 4": {
   new:"You use his own comparison for the cloud, and you notice he did not see everything he writes about.",
   background:"That a writer can see some things and be told others, and that those are not the same kind of evidence." },
 "Grade 5": {
   new:"Three things switch on at once: you place the source in its time, you judge what it is useful for, and you name what he could not see.",
   background:"That a source can be strong evidence for one thing and weak evidence for another at the same time." },
 "Year 6": {
   new:"You name who he wrote to, and you give the order of what fell rather than just saying stuff fell.",
   background:"That Tacitus was a historian, and that Pliny wrote this because he was asked for it." },
 "Year 7": {
   new:"You say why the letter was written, and you bring in evidence from outside the source.",
   background:"That excavators at Pompeii dug through the same layers, in the same order, that Pliny describes." },
 "Year 8": {
   new:"You use Pliny's own statement about what kind of document this is, and you ask what twenty-five years did to it.",
   background:"That the eruption type is named Plinian after this letter, and that his uncle was a natural historian as well as an admiral." },
 "Year 9": {
   new:"You explain why the letter survives at all, and you rank the physical account above the human one.",
   background:"What independent corroboration means, and that a published letter is written for more than one reader." },
 "Year 10": {
   new:"You read the argument underneath the description, and you explain why even the date is now contested.",
   background:"That an inscription found at Pompeii in 2018, plus autumn fruit and heavier clothing in the deposits, moved many archaeologists to an October date." }
};

/* Tier 3 = the subject's own words, which need a definition.
   Tier 2 = general academic words, which need a plainer synonym. */
const GLOSS = {
 tier3: {
  "Vesuvius":"A volcano on the Bay of Naples in Italy. It buried Pompeii and Herculaneum in 79 CE.",
  "Pompeii":"A Roman town buried by the eruption and dug out again from the eighteenth century onwards.",
  "Herculaneum":"A second Roman town buried by the same eruption, under a different kind of deposit.",
  "Misenum":"The Roman naval base across the bay from Vesuvius, where Pliny was staying.",
  "pumice":"A light, bubbly rock thrown out by a volcano. It is full of holes and floats on water.",
  "eruption":"When a volcano throws out ash, rock and gas.",
  "eruption column":"The tall pillar of ash and gas that rises above an erupting volcano.",
  "Plinian":"The name volcanologists give to a tall-column eruption like this one, after Pliny's description of it.",
  "volcanologist":"A scientist who studies volcanoes.",
  "volcanologists":"Scientists who study volcanoes.",
  "deposits":"The layers of ash, pumice and stone left on the ground by an eruption.",
  "sulphur":"A yellow element with a sharp smell, given off by volcanoes.",
  "quadrireme":"A Roman warship rowed by four banks of oarsmen.",
  "Tacitus":"A Roman historian, a friend of Pliny's, who asked him for this account.",
  "corroboration":"Separate evidence that says the same thing, from a different direction.",
  "testimony":"What a witness says happened.",
  "genre":"The kind of writing something is: a letter, a history, a poem.",
  "CE":"Common Era. 79 CE is about 1,950 years ago.",
  "inscription":"Writing cut or painted onto a hard surface."
 },
 tier2: {
  "ancient":"very old",
  "evidence":"proof · signs",
  "account":"the story someone gives of what happened",
  "witness":"someone who was there and saw it",
  "eyewitness":"someone who saw it happen with their own eyes",
  "interpret":"work out what it means",
  "interpretation":"what someone thinks it means",
  "reliable":"can be trusted",
  "contested":"argued about",
  "independent":"separate · not connected",
  "purpose":"the reason it was made",
  "context":"the time and place around it",
  "audience":"the people it was written for",
  "explicit":"said openly",
  "implicit":"not said, but meant",
  "qualified":"limited · with conditions",
  "identify":"name · point out",
  "describe":"say what it is like",
  "analyse":"break it down and examine it",
  "evaluate":"judge how good it is",
  "supports":"backs up"
 }
};

/* The curriculum descriptors said the way a student would say them. */
const KID = {
 "Foundation to Level 2": { band:"Foundation to Level 2", lines:[
   "I can say who wrote it.",
   "I can say one thing he saw."]},
 "Levels 3 and 4": { band:"Levels 3 and 4", lines:[
   "I can say what the source is and what it is about.",
   "I can say what the people in it did.",
   "I can say that he saw some of it and was told the rest."]},
 "Grade 5": { band:"Levels 5 and 6", lines:[
   "I can say what the source is, and when and where it comes from.",
   "I can say what the source is useful for.",
   "I can say what people at the time did and cared about.",
   "I can explain why people tell the story in different ways."]},
 "Year 6": { band:"Levels 5 and 6", lines:[
   "I can say what the source is, and when and where it comes from.",
   "I can say what the source is useful for.",
   "I can say what people at the time did and cared about.",
   "I can explain why people tell the story in different ways."]},
 "Year 7": { band:"School continuum", lines:[
   "I can say where a source came from, what is in it, and why it was made.",
   "I can say what was happening at the time.",
   "I can describe the different ways people explain the past.",
   "I can say how useful a source is."]},
 "Year 8": { band:"School continuum", lines:[
   "I can describe where a source came from, what is in it, and why it was made.",
   "I can describe what was happening at the time.",
   "I can explain the different ways people explain the past, and what they argue about.",
   "I can compare sources and ask whether they are accurate and reliable."]},
 "Year 9": { band:"School continuum", lines:[
   "I can explain where a source came from, what is in it, and why it was made.",
   "I can explain what was happening that made someone create it.",
   "I can pull each explanation apart and find the evidence behind it.",
   "I can compare sources and say how accurate and reliable they are."]},
 "Year 10": { band:"School continuum", lines:[
   "I can work out what a source says openly, and what it argues underneath.",
   "I can use the time and place to explain what the maker believed and valued.",
   "I can judge the different explanations and say why they differ.",
   "I can compare sources and analyse how accurate and reliable they are."]}
};
