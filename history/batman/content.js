/* =======================================================================
   CONTENT BLOCK for the history WAGOLL family.
   This is the ONLY place the wall text lives. wagoll-wall.html,
   level-sheets.html and interactive.html all read it, so editing here
   updates the wall, the per-level A3 sheets and the interactive at once.

   DRAFT. Not linked from the site navigation. Two open items before this
   can be taught or published: the source image below is a 400x183 web
   thumbnail (State Library Victoria, accession H92.196) standing in for a
   proper reproduction, and the framing has not been checked with the
   Wurundjeri Woi Wurrung Cultural Heritage Aboriginal Corporation. See
   SOURCE-NOTICE.md.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.
   ======================================================================= */

const WALL = {
  id: "hist-batman",
  title: "Two documents, one meeting",
  expected: "Year 7",
  inquiry: "A painting says Batman bought this land. A Proclamation says that was never possible. Which do you trust, and why?",
  foot: "<b>Sources:</b> <i>Batman's Treaty with the Aborigines at Merri Creek</i>, John Wesley Burtt, oil on canvas, circa 1875. State Library of Victoria, Pictures Collection, accession H92.196. Proclamation by Governor Sir Richard Bourke, 26 August 1835, National Archives of Australia. Reproduction terms for the painting have not yet been confirmed; see SOURCE-NOTICE.md."
};

const FACTS = [
  ["The painting", "Batman's Treaty with the Aborigines at Merri Creek, painted by John Wesley Burtt about 1875, roughly forty years after the meeting it shows."],
  ["The document", "A Proclamation signed by Governor Sir Richard Bourke on 26 August 1835, ten weeks after Batman's meeting."],
  ["What Batman claimed", "That Kulin leaders agreed to a treaty selling him land stretching from Melbourne to Geelong, about 240,000 hectares."],
  ["What Bourke declared", "That no settler could ever buy land from Aboriginal people. Any such treaty was ‘void and of no effect.’"],
  ["What's missing", "No Kulin record of the meeting has survived. The painting, the treaty and the Proclamation were all made by colonists."]
];

/* ink: the colour on paper, all four above 4.5:1 on the wall's cream lamp,
   the same criterion on the dark bar of the big-screen tool. underline, the
   second channel, is what survives a greyscale photocopy and a colour-blind
   reader. Colours and glyphs match the rest of the history family, so a
   student who knows GS73's wall reads this one the same way. */
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

/* Two rungs below Grade 5, matching the Victorian Curriculum's own two-year
   bands: Foundation to Level 2, then Levels 3 and 4. Criteria appear one at
   a time on the way up, which is the point of the ladder, not an omission. */
const EARLY_LEVELS = ["Foundation to Level 2", "Levels 3 and 4"];

const EARLY_EXAMPLES = {
 "Foundation to Level 2":
`This is a {source|painting}. I can see {source|canoes} and {source|spears}. A man in a {source|white shirt} is standing with {context|Kulin people}.`,

 "Levels 3 and 4":
`The painting shows {source|a man named Batman meeting Aboriginal people from the Kulin Nation}. On the ground are {source|blankets with mirrors, shirts and beads on them}. Batman said {context|the Kulin people agreed to sell him their land}. A different document called the {evidence|Proclamation says no one could buy Aboriginal land at all}.`
};

const EARLY_EXPLANATIONS = {
 "Foundation to Level 2": {
   source:  "Names three things the child can point to in the painting: it is a painting, and it shows canoes and spears.",
   context: "Names the group of people in the painting, using their own name rather than a general word." },
 "Levels 3 and 4": {
   source:  "Names the source, the event and one visible feature, the gifts on the blankets.",
   context: "Reports Batman's own claim about what happened.",
   evidence:"Reports a second document that disagrees with the first, without yet explaining why." }
};

const EXAMPLES = {
"Grade 5":
`This painting is a {source|picture of Batman meeting Kulin people in 1835}. I can see {source|blankets with gifts on them} and {source|men holding spears}. It shows {context|the day Batman said he bought Kulin land}. {evidence|The Proclamation disagrees}: it says no one could buy Aboriginal land. The painting is {judge|useful for showing what people wore and carried}, but it {judge|cannot show me what was really said}.`,

"Year 6":
`The source is a {source|painting of Batman's meeting with the Kulin Nation}, showing {source|gifts laid out on the ground and people talking}. It was painted to {context|remember an event some colonists were proud of}. {evidence|Batman claimed the Kulin people agreed to sell their land}, but {evidence|the Proclamation says such a sale was never allowed}. The painting is {judge|useful for showing how colonists pictured the meeting}, although {judge|it cannot tell us what the Kulin people actually thought}.`,

"Year 7":
`The event is {source|Batman's meeting with Kulin leaders in June 1835}. The painting is {source|a later artwork by John Wesley Burtt, made about forty years afterwards to record the meeting}. At this time, {context|Batman wanted land, and colonists were arguing about whether buying land from Aboriginal people was even allowed}. {evidence|Batman's own account says the Kulin people agreed to sell}; {evidence|Bourke's Proclamation says any such sale was ‘void and of no effect’}. The painting is {judge|useful for showing how the meeting was later remembered}, but {judge|it was painted forty years later, by someone who was not there}.`,

"Year 8":
`The painting is {source|Burtt's 1875 artwork of Batman's 1835 meeting with the Kulin Nation}, made to {source|show the meeting as calm and friendly}. {context|In the 1830s, Britain claimed Australia belonged to no one, so land could not legally be bought from its people}. {evidence|Batman argued his treaty was a fair purchase}; {evidence|Bourke's Proclamation rejects that, calling every such treaty ‘void’}; {evidence|the painting takes neither side, it simply shows the meeting happening}. The painting is {judge|useful evidence of how the meeting was later pictured}, but {judge|it cannot be trusted as a record of what was said or agreed, because the artist was not there}.`,

"Year 9":
`The event is {source|Batman's 1835 meeting with Kulin leaders}; the source used here is {source|Burtt's 1875 painting, made forty years later for people who had not seen it happen}. {context|The meeting sits inside a bigger argument: colonists wanted land, while British law increasingly held that Aboriginal people could not sell land they were said not to own}. {evidence|Batman's account presents willing agreement}; {evidence|Bourke's Proclamation presents the opposite, that no agreement could ever be legal}; {evidence|the two documents disagree because they were written for different purposes, one to justify a land claim, one to control it}. The painting is {judge|strong evidence of how colonists wanted the meeting remembered}, but {judge|weak evidence of what actually happened, since no Kulin account of the day survives}.`,

"Year 10":
`The source is {source|a colonial painting of a disputed meeting}. Its {source|explicit content is a peaceful exchange of goods}; its {source|implicit message is that Batman's claim to the land was fair and orderly}, aimed at {source|later Australians who wanted to believe the colony began well}. {context|Painted in 1875, it reflects the values of its own time: order, progress, and an easy conscience about how the colony was founded}. {evidence|Batman's treaty and Bourke's Proclamation give opposite answers to one question, could this land be bought}; {evidence|they differ because one argues for private ownership and the other for the Crown's sole authority over the land}. Overall, the painting is {judge|useful evidence of memory and myth-making, but poor evidence of the event itself}: {judge|it was made decades later, by an artist who never saw the meeting, and no Kulin account from the day survives to check it against}.`
};

const EXPLANATIONS = {
"Grade 5": {
  source:  "The blue phrases name what the picture shows and two things visible in it: gifts, and men with spears.",
  context: "The green phrase places the painting on the day of Batman's claim, without yet explaining why that claim was disputed.",
  evidence:"The orange phrase reports the Proclamation's disagreement without yet explaining what either side argues.",
  judge:   "The purple phrases give one use and one limit: clothing and objects are visible, spoken words are not."
},
"Year 6": {
  source:  "'A painting of Batman's meeting' and 'gifts laid out' identify the source and one feature; purpose is not yet explained.",
  context: "The green phrase explains why the painting was made: to remember an event, without yet placing it in a wider argument.",
  evidence:"The answer gives both claims but does not yet say why they conflict.",
  judge:   "It recognises usefulness for one thing, how colonists pictured the day, and a clear limit: Kulin thoughts are absent.",
},
"Year 7": {
  source:  "The answer separates the 1835 event from the 1875 painting of it, then names when the painting was made and why.",
  context: "The green sentence places the meeting inside a real argument: whether buying Aboriginal land was legally possible at all.",
  evidence:"The orange phrases give both documents' claims side by side, quoting the Proclamation's own words.",
  judge:   "The purple judgement names a use, then bounds it: the artist's absence limits what the painting can prove.",
},
"Year 8": {
  source:  "The blue phrases describe the painting and explain the effect it was made to create: a calm, friendly scene.",
  context: "The green phrase explains the legal argument of the 1830s that the painting sits inside.",
  evidence:"The answer shows three positions, Batman's, Bourke's, and the painting's own silence on who was right.",
  judge:   "It separates what the painting is useful for from what it cannot be trusted for, and gives the reason.",
},
"Year 9": {
  source:  "The blue phrases separate the event from the source, and explain who the painting was really made for.",
  context: "The green phrases place both documents inside one bigger dispute, then name what each side was arguing for.",
  evidence:"Each document is explained through its purpose: justifying a claim, or controlling one.",
  judge:   "The purple comparison names what the painting is strong evidence for, and what it is weak evidence for, and why.",
},
"Year 10": {
  source:  "The blue phrases separate explicit content from implicit message, and name the audience the painting was made for.",
  context: "The green phrases use the painting's date to explain the values of the people who made and first viewed it.",
  evidence:"The evaluation explains why the documents disagree: they defend two different sources of authority over the land.",
  judge:   "The overall judgement holds two different kinds of usefulness apart, evidence of memory, and evidence of fact.",
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

const SHEET_IMAGE = "batman-treaty-source.jpg";

const SOURCE_PANEL = {
  kind: "image",
  file: SHEET_IMAGE,
  ar:   "400/183",
  alt:  "Batman's Treaty with the Aborigines at Merri Creek, an 1875 painting by John Wesley Burtt showing Batman and Kulin men beside blankets laid out with trade goods.",
  missing: "The picture of the painting did not load.<br>Keep <b>batman-treaty-source.jpg</b> in the same folder as this page.",
  whole: { label:"The whole painting",
    text:"Everyone in this scene was painted, not photographed, by someone who was born after this meeting happened." }
};

/* Percentages of the image. Placeholder crops against the 400x183 web
   thumbnail; recheck against a proper reproduction before this ships. */
const HOTSPOTS = [
 { x:4,  y:60, w:34, h:38, label:"The gifts",
   text:"Blankets laid on the ground, with mirrors, shirts and beads on top: the painting's record of what Batman offered in return for the land." },
 { x:41, y:30, w:20, h:60, label:"Batman and the man beside him",
   text:"Batman, in a white shirt, stands with a Kulin man whose hand rests near his arm. No portrait of Batman was painted while he was alive, so this face is the artist's invention." },
 { x:59, y:22, w:24, h:62, label:"The Kulin men",
   text:"Men from the Kulin Nation, some in possum-skin cloaks, one holding a long spear. Their names are not recorded in the painting or its caption." },
 { x:82, y:40, w:17, h:48, label:"The camp",
   text:"Shelters and more people on the far side of the scene, going on with everyday life while the meeting in the foreground happens." }
];

/* new: the skill this rung adds that the one below it did not have.
   background: the outside knowledge a student needs before the example
   makes sense, named so a teacher can see exactly what is being assumed and
   check it has actually been taught. Shown on screen as "You need to know". */
const BUMP = {
 "Foundation to Level 2": {
   new:"You name what you can see in the painting.",
   background:"That a painting is made by a person, and can show things that did not really happen that way." },
 "Levels 3 and 4": {
   new:"You say what the painting is claimed to show, and that a second document disagrees with it.",
   background:"That the Kulin Nation is a group of Aboriginal peoples whose Country this land is, and that Europeans arrived after them." },
 "Grade 5": {
   new:"You name the date the painting shows, bring in the Proclamation as a second source, and give one use and one limit.",
   background:"That Batman said he bought this land, and that the Proclamation is a different, official document that disagreed." },
 "Year 6": {
   new:"You explain why the painting was made, not just what it shows, and give both sides' claims.",
   background:"That paintings can be made to make an event look a certain way, for people who were not there." },
 "Year 7": {
   new:"You separate the 1835 event from the 1875 painting of it, and quote the Proclamation's own words.",
   background:"That the painting was made forty years after 1835, and that colonists were arguing about whether buying Aboriginal land was ever legal." },
 "Year 8": {
   new:"You give three positions instead of two, adding what the painting itself does and does not take sides on, and explain why the artist's absence limits it.",
   background:"That British law in the 1830s treated Australia as belonging to no one, which is why Bourke could declare Batman's treaty void." },
 "Year 9": {
   new:"You explain why the two documents disagree, not only that they disagree, by naming what each one was written to achieve.",
   background:"That no Kulin record of the meeting survives, so every account historians have was written by colonists." },
 "Year 10": {
   new:"You separate what a source explicitly shows from what it implies, and name the audience it was really made for.",
   background:"That the painting was made in 1875, forty years on, when colonists had their own reasons to want the founding of Melbourne remembered as fair." }
};

/* Tier 3 = the subject's own words, which need a definition.
   Tier 2 = general academic words, which need a plainer synonym.
   Matched case-insensitively on whole words wherever they appear. */
const GLOSS = {
 tier3: {
  "Proclamation":"An official public announcement made by a governor, with the force of law.",
  "treaty":"A formal agreement, usually between two groups or nations.",
  "Kulin Nation":"Five Aboriginal peoples whose Country covers the area around present-day Melbourne.",
  "grazier":"A farmer who raises sheep or cattle on open land.",
  "void":"Having no legal force. A void agreement counts as if it never happened.",
  "trespasser":"Someone occupying land without legal permission to be there.",
  "vacant":"Empty, belonging to no one. The Proclamation calls the land 'vacant' while also describing Aboriginal people living on it.",
  "Crown":"The British monarch, acting as the legal head of the government and its territory."
 },
 tier2: {
  "claimed":"said, without proof",
  "declared":"announced officially",
  "authority":"the power to decide",
  "legal":"allowed by law",
  "dispute":"disagreement",
  "contested":"argued about",
  "implicit":"suggested, not stated directly",
  "explicit":"stated directly",
  "myth-making":"turning an event into a story people want to believe",
  "reject":"refuse to accept",
  "justify":"give good reasons for",
  "purpose":"the reason it was made"
 }
};
