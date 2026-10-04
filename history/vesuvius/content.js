/* =======================================================================
   CONTENT BLOCK for the Ancient Rome wall, built on Pliny's two letters.
   This is the ONLY place the wall text lives.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.

   ------------------------------------------------------------------
   DRAFT. Written and levelled, not yet taught.

   What this wall rehearses. CAT 2 (2025) is a guidebook for a traveller
   arriving in Rome in 300 CE, with a timeline of Rome's history and a
   one-page history outline. Its rubric marks four rows: chronology, cause
   and effect, metacognition and presentation. The first two are ways of
   thinking about the past and are on this wall, in the rubric's own words.
   The other two are not (AGENTS.md rules 2 and 3).

   Pliny is not in CAT 2, so he is a rehearsal source (rule 1). He suits
   these two rows because the times, the days and the reasons are all in the
   letters themselves, so a student can sequence events and name causes
   without first learning a body of outside content.

   The source text is given in full and unchanged, apart from paragraph
   breaks and the cleaning listed in WALL.foot. Do not insert notes, dates or
   explanations into SOURCES[].paragraphs. Commentary belongs in hotspots.

   An earlier wall on this folder read an extract of the first letter for
   source analysis. It is in git history at a9f1f4a if it is ever wanted.
   ======================================================================= */

const WALL = {
  id: "hist-vesuvius",
  title: "Two letters about Vesuvius",
  expected: "Level 7",
  inquiry: "What happened at Vesuvius, in what order, and why did people do what they did?",
  foot: "<b>Sources:</b> Pliny the Younger, Letters 6.16 and 6.20, to Tacitus, written about 106 CE. Translated by William Melmoth (1746), revised by F. C. T. Bosanquet (1909); public domain. Both letters are given in full. Paragraph breaks have been added; the edition's footnote numbers and the scanning errors in the copy supplied (prevai1ed, atmd, to he driven) have been removed. No other wording has been changed. <b>The date in the letters, 24 August, is disputed:</b> a charcoal note found at Pompeii in 2018 is dated 17 October."
};

const FACTS = [
  ["Who wrote them", "Pliny the Younger, aged 17 or 18. He was at Misenum with his mother and his uncle, Pliny the Elder, who commanded the Roman fleet there."],
  ["Who they were for", "Tacitus, a Roman historian. He asked Pliny how his uncle died, so that he could put it in his history."],
  ["When", "By the letters' own date, the eruption began on 24 August 79 CE. Pliny wrote both letters around 106 CE, about 27 years later."],
  ["Where Rome was up to", "Rome had been a republic until 27 BCE, then was ruled by emperors. In 79 CE the emperor was Titus, who had come to power that year."],
  ["The places", "Misenum was the navy's base, about 30 km across the Bay of Naples from Vesuvius. Stabiae was a town on the coast about 15 km south of the mountain."],
  ["The date", "A note written in charcoal on a wall at Pompeii, found in 2018, is dated 17 October. It has no year on it. Many historians now think the eruption was in autumn."],
  ["Not in either letter", "Pompeii. Neither letter names the town the eruption is best known for."]
];

/* Two rows, the two CAT 2 rows that are ways of thinking. Blue and orange
   are the pair most colour-blind readers still tell apart, and each row also
   has its own underline pattern and glyph, so the wall survives a greyscale
   photocopy (rule 18). */
const CRITERIA = [
  { key:"chron", row:"Chronology",       name:"Chronology",       glyph:"■",
    ink:"#176b87", lamp:"#6fc0da", underline:"solid" },
  { key:"cause", row:"Cause and effect", name:"Cause and effect", glyph:"●",
    ink:"#a34d1d", lamp:"#e89a63", underline:"dotted" },
];

/* The CAT 2 rubric's own four levels, then Level 10. The rubric stops at
   Level 9, so Level 10 has no CONTINUUM wording (rule 5): its rubric pane
   shows the Victorian Curriculum Level 10 descriptors and a KID band instead.
   Below Level 6 the rubric is blank too, so those rungs are EARLY_LEVELS. */
const LEVELS = ["Level 6","Level 7","Level 8","Level 9","Level 10"];

const EXAMPLES = {
"Level 6":
`Pliny's first letter can go on a timeline. {chron|At one in the afternoon on 24 August, his mother sees the cloud}. {chron|That evening his uncle reaches Stabiae and has supper}. {chron|During the night the courtyard fills with stones}, and {chron|in the morning he dies on the shore}. Some causes and effects are clear: {cause|the falling stones mean they must wake him and move him}, and {cause|the high waves mean no one can escape by sea}.`,

"Level 7":
`The eruption fits a clear time frame: {chron|it began on 24 August 79 CE}, and {chron|Pliny wrote about it around 106 CE, 27 years later}. {chron|His two letters cover the same days from two places, Stabiae and Misenum}. The eruption affected people in different ways. {cause|For his uncle, Rectina's note turned a trip to study the cloud into a rescue}. {cause|For the crowd at Misenum, fear made people follow others instead of deciding for themselves}.`,

"Level 8":
`{chron|The eruption happened in 79 CE, in the time of the Roman Empire}, {chron|about a hundred years after Augustus became the first emperor in 27 BCE}. {cause|An onshore wind carried his uncle to Stabiae, but the same wind stopped Pomponianus from sailing away}. His uncle's actions had motives. {cause|He bathed and ate supper cheerfully}, and Pliny says why: {cause|to calm his frightened friend by seeming unworried}.`,

"Level 9":
`The letters cover about three days: {chron|from the cloud on the afternoon of 24 August}, {chron|through a night and a morning of darkness}, {chron|to the body being found when the light returned}. {chron|Two timelines run side by side: while his uncle sheltered at Stabiae, Pliny and his mother waited at Misenum}. {chron|Even the date is uncertain, because a note found at Pompeii in 2018 points to October}. The causes were not only physical. {cause|The ash forced choices}, but motives shaped what people did: {cause|his uncle steered towards danger to help others}, {cause|Pliny would not leave his mother}, and {cause|some people spread false stories, which made the fear worse}.`,

"Level 10":
`{chron|Pliny wrote about 27 years after the eruption, so his timeline is a memory, built partly from what other people told him}. {chron|Both letters fit on one timeline: the cloud at one in the afternoon, a night of shaking at Stabiae and at Misenum, then the third day, when the light came back in both places}. {chron|In Rome's longer story, 79 CE falls about a century into the rule of the emperors, when Rome controlled the whole Mediterranean and kept a navy at Misenum}. The causes worked over different lengths of time. {cause|In the long term, towns had grown up along the coast below Vesuvius, and the ground shook so often in Campania that nobody left when the shaking started}. {cause|In the short term, the onshore wind that carried his uncle to Stabiae also kept the ships from leaving}. Some results were intended and some were not. {cause|His uncle sailed to rescue people, which was his aim}, but {cause|by landing at Stabiae he was trapped with the people he came to help}. {cause|Pliny wrote so that his uncle would be remembered, and an unintended result is that the letters became one of the main written records of the eruption}.`
};

const EXPLANATIONS = {
"Level 6": {
  chron: "The blue phrases put four events from the first letter in order, using the times the letter gives.",
  cause: "The orange phrases give two causes, each with its effect." },
"Level 7": {
  chron: "The blue phrases use CE dates, measure the gap between the eruption and the writing, and see that both letters cover the same days.",
  cause: "The orange phrases show the eruption affecting one person and one group in different ways." },
"Level 8": {
  chron: "The blue phrases place the eruption in a period of Roman history, counted from the first emperor.",
  cause: "The orange phrases explain one cause with two effects, then name a person's motive for what he did." },
"Level 9": {
  chron: "The blue phrases give how long it lasted, run two timelines side by side, and notice that the date itself is disputed.",
  cause: "The orange phrases separate the physical cause from the motives of three different people." },
"Level 10": {
  chron: "The blue phrases notice the letters were written 27 years later, lay both letters on one timeline, and place 79 CE in Rome's longer story.",
  cause: "The orange phrases separate long-term from short-term causes, and intended from unintended results." }
};

/* CAT 2 rubric, Ancient Rome, 2025. Quoted exactly (rule 4). Level 7
   chronology is one cell in the rubric that wraps onto two lines. */
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

const SOURCES = [
 {
  id: "letter1",
  tab: "Letter 1 · My uncle",
  kind: "text",
  cite: "Pliny the Younger, Letters 6.16, to Tacitus, about 106 CE. Translated by William Melmoth, revised by F. C. T. Bosanquet (1909).",
  whole: { label:"The first letter",
    text:"How Pliny's uncle died, at Stabiae, from the afternoon of 24 August until his body was found." },
  paragraphs: [
   "Your request that I would send you an account of my uncle's death, in order to transmit a more exact relation of it to posterity, deserves my acknowledgments; for, if this accident shall be celebrated by your pen, the glory of it, I am well assured, will be rendered forever illustrious. And notwithstanding he perished by a misfortune, which, as it involved at the same time a most beautiful country in ruins, and destroyed so many populous cities, seems to promise him an everlasting remembrance; notwithstanding he has himself composed many and lasting works; yet I am persuaded, the mentioning of him in your immortal writings, will greatly contribute to render his name immortal. Happy I esteem those to be to whom by provision of the gods has been granted the ability either to do such actions as are worthy of being related or to relate them in a manner worthy of being read; but peculiarly happy are they who are blessed with both these uncommon talents: in the number of which my uncle, as his own writings and your history will evidently prove, may justly be ranked. It is with extreme willingness, therefore, that I execute your commands; and should indeed have claimed the task if you had not enjoined it.",
   "He was at that time with the fleet under his command at Misenum. On the 24th of August, about one in the afternoon, my mother desired him to observe a cloud which appeared of a very unusual size and shape. He had just taken a turn in the sun and, after bathing himself in cold water, and making a light luncheon, gone back to his books: he immediately arose and went out upon a rising ground from whence he might get a better sight of this very uncommon appearance. A cloud, from which mountain was uncertain, at this distance (but it was found afterwards to come from Mount Vesuvius), was ascending, the appearance of which I cannot give you a more exact description of than by likening it to that of a pine tree, for it shot up to a great height in the form of a very tall trunk, which spread itself out at the top into a sort of branches; occasioned, I imagine, either by a sudden gust of air that impelled it, the force of which decreased as it advanced upwards, or the cloud itself being pressed back again by its own weight, expanded in the manner I have mentioned; it appeared sometimes bright and sometimes dark and spotted, according as it was either more or less impregnated with earth and cinders.",
   "This phenomenon seemed to a man of such learning and research as my uncle extraordinary and worth further looking into. He ordered a light vessel to be got ready, and gave me leave, if I liked, to accompany him. I said I had rather go on with my work; and it so happened, he had himself given me something to write out. As he was coming out of the house, he received a note from Rectina, the wife of Bassus, who was in the utmost alarm at the imminent danger which threatened her; for her villa lying at the foot of Mount Vesuvius, there was no way of escape but by sea; she earnestly entreated him therefore to come to her assistance. He accordingly changed his first intention, and what he had begun from a philosophical, he now carries out in a noble and generous spirit. He ordered the galleys to be put to sea, and went himself on board with an intention of assisting not only Rectina, but the several other towns which lay thickly strewn along that beautiful coast.",
   "Hastening then to the place from whence others fled with the utmost terror, he steered his course direct to the point of danger, and with so much calmness and presence of mind as to be able to make and dictate his observations upon the motion and all the phenomena of that dreadful scene. He was now so close to the mountain that the cinders, which grew thicker and hotter the nearer he approached, fell into the ships, together with pumice-stones, and black pieces of burning rock: they were in danger too not only of being aground by the sudden retreat of the sea, but also from the vast fragments which rolled down from the mountain, and obstructed all the shore. Here he stopped to consider whether he should turn back again; to which the pilot advising him, \"Fortune,\" said he, \"favours the brave; steer to where Pomponianus is.\"",
   "Pomponianus was then at Stabiae, separated by a bay, which the sea, after several insensible windings, forms with the shore. He had already sent his baggage on board; for though he was not at that time in actual danger, yet being within sight of it, and indeed extremely near, if it should in the least increase, he was determined to put to sea as soon as the wind, which was blowing dead in-shore, should go down. It was favourable, however, for carrying my uncle to Pomponianus, whom he found in the greatest consternation: he embraced him tenderly, encouraging and urging him to keep up his spirits, and, the more effectually to soothe his fears by seeming unconcerned himself, ordered a bath to be got ready, and then, after having bathed, sat down to supper with great cheerfulness, or at least (what is just as heroic) with every appearance of it.",
   "Meanwhile broad flames shone out in several places from Mount Vesuvius, which the darkness of the night contributed to render still brighter and clearer. But my uncle, in order to soothe the apprehensions of his friend, assured him it was only the burning of the villages, which the country people had abandoned to the flames: after this he retired to rest, and it is most certain he was so little disquieted as to fall into a sound sleep: for his breathing, which, on account of his corpulence, was rather heavy and sonorous, was heard by the attendants outside. The court which led to his apartment being now almost filled with stones and ashes, if he had continued there any time longer, it would have been impossible for him to have made his way out.",
   "So he was awoke and got up, and went to Pomponianus and the rest of his company, who were feeling too anxious to think of going to bed. They consulted together whether it would be most prudent to trust to the houses, which now rocked from side to side with frequent and violent concussions as though shaken from their very foundations; or fly to the open fields, where the calcined stones and cinders, though light indeed, yet fell in large showers, and threatened destruction. In this choice of dangers they resolved for the fields: a resolution which, while the rest of the company were hurried into by their fears, my uncle embraced upon cool and deliberate consideration. They went out then, having pillows tied upon their heads with napkins; and this was their whole defence against the storm of stones that fell round them. It was now day everywhere else, but there a deeper darkness prevailed than in the thickest night; which however was in some degree alleviated by torches and other lights of various kinds.",
   "They thought proper to go farther down upon the shore to see if they might safely put out to sea, but found the waves still running extremely high, and boisterous. There my uncle, laying himself down upon a sail cloth, which was spread for him, called twice for some cold water, which he drank, when immediately the flames, preceded by a strong whiff of sulphur, dispersed the rest of the party, and obliged him to rise. He raised himself up with the assistance of two of his servants, and instantly fell down dead; suffocated, as I conjecture, by some gross and noxious vapour, having always had a weak throat, which was often inflamed. As soon as it was light again, which was not till the third day after this melancholy accident, his body was found entire, and without any marks of violence upon it, in the dress in which he fell, and looking more like a man asleep than dead.",
   "During all this time my mother and I, who were at Misenum--but this has no connection with your history, and you did not desire any particulars besides those of my uncle's death; so I will end here, only adding that I have faithfully related to you what I was either an eye-witness of myself or received immediately after the accident happened, and before there was time to vary the truth. You will pick out of this narrative whatever is most important: for a letter is one thing, a history another; it is one thing writing to a friend, another thing writing to the public.",
   "Farewell."
  ],
  /* The short version, one entry per paragraph. Each entry is a list of exact
     pieces of that paragraph, shown joined with an ellipsis; null leaves the
     paragraph out. Nothing in a piece may differ from the full text: the
     check in tools/ refuses a piece it cannot find. */
  short: [
   ["Your request that I would send you an account of my uncle's death, in order to transmit a more exact relation of it to posterity, deserves my acknowledgments;"],
   ["He was at that time with the fleet under his command at Misenum. On the 24th of August, about one in the afternoon, my mother desired him to observe a cloud which appeared of a very unusual size and shape.",
    "A cloud, from which mountain was uncertain, at this distance (but it was found afterwards to come from Mount Vesuvius), was ascending, the appearance of which I cannot give you a more exact description of than by likening it to that of a pine tree, for it shot up to a great height in the form of a very tall trunk, which spread itself out at the top into a sort of branches;"],
   ["This phenomenon seemed to a man of such learning and research as my uncle extraordinary and worth further looking into. He ordered a light vessel to be got ready,",
    "As he was coming out of the house, he received a note from Rectina, the wife of Bassus, who was in the utmost alarm at the imminent danger which threatened her; for her villa lying at the foot of Mount Vesuvius, there was no way of escape but by sea; she earnestly entreated him therefore to come to her assistance. He accordingly changed his first intention,",
    "He ordered the galleys to be put to sea, and went himself on board with an intention of assisting not only Rectina, but the several other towns which lay thickly strewn along that beautiful coast."],
   ["Hastening then to the place from whence others fled with the utmost terror, he steered his course direct to the point of danger,",
    "He was now so close to the mountain that the cinders, which grew thicker and hotter the nearer he approached, fell into the ships, together with pumice-stones, and black pieces of burning rock:",
    "Here he stopped to consider whether he should turn back again; to which the pilot advising him, \"Fortune,\" said he, \"favours the brave; steer to where Pomponianus is.\""],
   ["Pomponianus was then at Stabiae,",
    "He had already sent his baggage on board;",
    "he was determined to put to sea as soon as the wind, which was blowing dead in-shore, should go down. It was favourable, however, for carrying my uncle to Pomponianus, whom he found in the greatest consternation:",
    "the more effectually to soothe his fears by seeming unconcerned himself, ordered a bath to be got ready, and then, after having bathed, sat down to supper with great cheerfulness,"],
   ["Meanwhile broad flames shone out in several places from Mount Vesuvius, which the darkness of the night contributed to render still brighter and clearer.",
    "after this he retired to rest, and it is most certain he was so little disquieted as to fall into a sound sleep:",
    "The court which led to his apartment being now almost filled with stones and ashes, if he had continued there any time longer, it would have been impossible for him to have made his way out."],
   ["So he was awoke and got up, and went to Pomponianus and the rest of his company, who were feeling too anxious to think of going to bed. They consulted together whether it would be most prudent to trust to the houses, which now rocked from side to side with frequent and violent concussions as though shaken from their very foundations; or fly to the open fields, where the calcined stones and cinders, though light indeed, yet fell in large showers, and threatened destruction. In this choice of dangers they resolved for the fields:",
    "They went out then, having pillows tied upon their heads with napkins; and this was their whole defence against the storm of stones that fell round them. It was now day everywhere else, but there a deeper darkness prevailed than in the thickest night;"],
   ["They thought proper to go farther down upon the shore to see if they might safely put out to sea, but found the waves still running extremely high, and boisterous.",
    "the flames, preceded by a strong whiff of sulphur, dispersed the rest of the party, and obliged him to rise. He raised himself up with the assistance of two of his servants, and instantly fell down dead;",
    "As soon as it was light again, which was not till the third day after this melancholy accident, his body was found entire, and without any marks of violence upon it, in the dress in which he fell, and looking more like a man asleep than dead."],
   ["I have faithfully related to you what I was either an eye-witness of myself or received immediately after the accident happened, and before there was time to vary the truth."],
   null
  ],
  /* Plain English, one paragraph for each paragraph of the letter. Written
     for this page. It sits beside the source and is never mixed into it. */
  plain: [
   "You asked me how my uncle died, so you can put it in your history. Thank you. If you write about him, people will remember him forever. I am happy to do it.",
   "My uncle was at Misenum, in charge of the navy's ships. On 24 August, at about one in the afternoon, my mother showed him a strange cloud. It was very big and an odd shape. He went up to a high place to see it better. From so far away we could not tell which mountain it came from. Later we found out it was Vesuvius. The cloud looked like a pine tree: a tall trunk going straight up, then spreading out at the top like branches. Some of it looked light, and some looked dark and dirty with earth and ash.",
   "My uncle loved to learn, so he wanted a closer look. He had a small fast boat made ready, and asked if I wanted to come. I said no, I would rather keep studying. As he was leaving the house, a note came from Rectina. Her house was at the bottom of Vesuvius, and the only way out was by sea. She was terrified and begged him to save her. So he changed his plan. He had set out to study the cloud. Now he set out to rescue people. He sent out the big warships to help Rectina and the many people living along the coast.",
   "Everyone else was running away from the danger. He sailed straight towards it, calm enough to keep describing what he saw so it could be written down. The closer the ships got, the hotter and thicker the ash that fell on them, with pumice and burnt black rocks. The sea suddenly pulled back, so they might run aground, and rocks from the mountain blocked the shore. He stopped and thought about turning back. The pilot told him to. He said, \"Fortune favours the brave. Sail to Pomponianus.\"",
   "Pomponianus was at Stabiae, across a small bay. He was not in danger yet, but he could see it coming. He had already put his things on a ship. He planned to sail away as soon as the wind dropped, because it was blowing towards the land. That same wind carried my uncle straight to him. Pomponianus was very frightened. My uncle hugged him and told him to be brave. To calm him down, my uncle acted as if he was not worried. He had a bath and then ate dinner cheerfully, or at least looked cheerful, which is just as brave.",
   "Meanwhile big flames shone from Vesuvius in many places, bright in the dark night. To calm his friend, my uncle said it was only empty villages burning. Then he went to bed and fell fast asleep. He was a big man and snored loudly, and the servants outside could hear him. But the courtyard outside his room was filling up with stones and ash. If he had stayed in bed much longer, he could not have got out.",
   "So they woke him. He joined Pomponianus and the others, who were too worried to sleep. They talked about what to do. They could stay inside, but the houses were rocking from the earthquakes. Or they could go out into the fields, where stones were falling like rain. They chose the fields. The others chose because they were scared. My uncle chose because he had thought it through. They tied pillows on their heads to protect them from the stones. By now it was morning everywhere else, but where they were it was darker than the darkest night. They used torches and lamps to see.",
   "They went down to the beach to see if they could escape by sea, but the waves were still too big and rough. My uncle lay down on a sail and asked twice for cold water. Then flames and a strong smell of sulphur made the others run. Two servants helped him stand up, and he fell down dead. I think the fumes choked him, because his throat had always been weak. When daylight came back, on the third day, they found his body. It was not hurt, and he was still in his clothes. He looked asleep, not dead.",
   "My mother and I were at Misenum all this time, but you did not ask about that, so I will stop here. Everything I have told you, I saw myself or heard straight after it happened, before anyone could change the story. Use the parts you need. A letter to a friend is not the same as a history for everyone to read.",
   "Goodbye."
  ],
  hotspots: [
   { mark:"about one in the afternoon", label:"One in the afternoon",
     text:"The first time of day in the letter. Everything after this can be put in order from here." },
   { mark:"he received a note from Rectina", label:"Rectina's note",
     text:"Rectina lives at the foot of the mountain and can only escape by sea. Her note changes the plan from watching the cloud to rescuing people." },
   { mark:"favours the brave", label:"Fortune favours the brave",
     text:"The pilot says turn back. The uncle keeps going, and Pliny gives his reason in his own words." },
   { mark:"which was blowing dead in-shore", label:"The wind",
     text:"The wind blows towards the land. It carries the uncle to Stabiae, and it stops anyone sailing away." },
   { mark:"The court which led to his apartment being now almost filled with stones and ashes", label:"The courtyard fills",
     text:"Stones and ash pile up outside his room. That is why they wake him." },
   { mark:"the third day after this melancholy accident", label:"The third day",
     text:"The light comes back and his body is found. This tells you how long the darkness lasted." }
  ]
 },
 {
  id: "letter2",
  tab: "Letter 2 · My mother and I",
  kind: "text",
  cite: "Pliny the Younger, Letters 6.20, to Tacitus, about 106 CE. Translated by William Melmoth, revised by F. C. T. Bosanquet (1909).",
  whole: { label:"The second letter",
    text:"What happened to Pliny and his mother at Misenum, on the same days as the first letter." },
  paragraphs: [
   "The letter which, in compliance with your request, I wrote to you concerning the death of my uncle has raised, it seems, your curiosity to know what terrors and dangers attended me while I continued at Misenum; for there, I think, my account broke off:",
   "Though my shocked soul recoils, my tongue shall tell. My uncle having left us, I spent such time as was left on my studies (it was on their account indeed that I had stopped behind), till it was time for my bath. After which I went to supper, and then fell into a short and uneasy sleep.",
   "There had been noticed for many days before a trembling of the earth, which did not alarm us much, as this is quite an ordinary occurrence in Campania; but it was so particularly violent that night that it not only shook but actually overturned, as it would seem, everything about us. My mother rushed into my chamber, where she found me rising, in order to awaken her. We sat down in the open court of the house, which occupied a small space between the buildings and the sea. As I was at that time but eighteen years of age, I know not whether I should call my behaviour, in this dangerous juncture, courage or folly; but I took up Livy, and amused myself with turning over that author, and even making extracts from him, as if I had been perfectly at my leisure. Just then, a friend of my uncle's, who had lately come to him from Spain, joined us, and observing me sitting by my mother with a book in my hand, reproved her for her calmness, and me at the same time for my careless security: nevertheless I went on with my author.",
   "Though it was now morning, the light was still exceedingly faint and doubtful; the buildings all around us tottered, and though we stood upon open ground, yet as the place was narrow and confined, there was no remaining without imminent danger: we therefore resolved to quit the town. A panic-stricken crowd followed us, and (as to a mind distracted with terror every suggestion seems more prudent than its own) pressed on us in dense array to drive us forward as we came out. Being at a convenient distance from the houses, we stood still, in the midst of a most dangerous and dreadful scene.",
   "The chariots, which we had ordered to be drawn out, were so agitated backwards and forwards, though upon the most level ground, that we could not keep them steady, even by supporting them with large stones. The sea seemed to roll back upon itself, and to be driven from its banks by the convulsive motion of the earth; it is certain at least the shore was considerably enlarged, and several sea animals were left upon it. On the other side, a black and dreadful cloud, broken with rapid, zigzag flashes, revealed behind it variously shaped masses of flame: these last were like sheet-lightning, but much larger.",
   "Upon this our Spanish friend, whom I mentioned above, addressing himself to my mother and me with great energy and urgency: \"If your brother,\" he said, \"if your uncle be safe, he certainly wishes you may be so too; but if he perished, it was his desire, no doubt, that you might both survive him: why therefore do you delay your escape a moment?\" We could never think of our own safety, we said, while we were uncertain of his. Upon this our friend left us, and withdrew from the danger with the utmost precipitation.",
   "Soon afterwards, the cloud began to descend, and cover the sea. It had already surrounded and concealed the island of Capri and the promontory of Misenum. My mother now besought, urged, even commanded me to make my escape at any rate, which, as I was young, I might easily do; as for herself, she said, her age and corpulency rendered all attempts of that sort impossible; however, she would willingly meet death if she could have the satisfaction of seeing that she was not the occasion of mine. But I absolutely refused to leave her, and, taking her by the hand, compelled her to go with me. She complied with great reluctance, and not without many reproaches to herself for retarding my flight.",
   "The ashes now began to fall upon us, though in no great quantity. I looked back; a dense dark mist seemed to be following us, spreading itself over the country like a cloud. \"Let us turn out of the high-road,\" I said, \"while we can still see, for fear that, should we fall in the road, we should be pressed to death in the dark, by the crowds that are following us.\" We had scarcely sat down when night came upon us, not such as we have when the sky is cloudy, or when there is no moon, but that of a room when it is shut up, and all the lights put out.",
   "You might hear the shrieks of women, the screams of children, and the shouts of men; some calling for their children, others for their parents, others for their husbands, and seeking to recognise each other by the voices that replied; one lamenting his own fate, another that of his family; some wishing to die, from the very fear of dying; some lifting their hands to the gods; but the greater part convinced that there were now no gods at all, and that the final endless night of which we have heard had come upon the world. Among these there were some who augmented the real terrors by others imaginary or wilfully invented. I remember some who declared that one part of Misenum had fallen, that another was on fire; it was false, but they found people to believe them.",
   "It now grew rather lighter, which we imagined to be rather the forerunner of an approaching burst of flames (as in truth it was) than the return of day: however, the fire fell at a distance from us: then again we were immersed in thick darkness, and a heavy shower of ashes rained upon us, which we were obliged every now and then to stand up to shake off, otherwise we should have been crushed and buried in the heap. I might boast that, during all this scene of horror, not a sigh, or expression of fear, escaped me, had not my support been grounded in that miserable, though mighty, consolation, that all mankind were involved in the same calamity, and that I was perishing with the world itself.",
   "At last this dreadful darkness was dissipated by degrees, like a cloud or smoke; the real day returned, and even the sun shone out, though with a lurid light, like when an eclipse is coming on. Every object that presented itself to our eyes (which were extremely weakened) seemed changed, being covered deep with ashes as if with snow. We returned to Misenum, where we refreshed ourselves as well as we could, and passed an anxious night between hope and fear; though, indeed, with a much larger share of the latter: for the earthquake still continued, while many frenzied persons ran up and down heightening their own and their friends' calamities by terrible predictions. However, my mother and I, notwithstanding the danger we had passed, and that which still threatened us, had no thoughts of leaving the place, till we could receive some news of my uncle.",
   "And now, you will read this narrative without any view of inserting it in your history, of which it is not in the least worthy; and indeed you must put it down to your own request if it should appear not worth even the trouble of a letter. Farewell."
  ],
  short: [
   ["The letter which, in compliance with your request, I wrote to you concerning the death of my uncle has raised, it seems, your curiosity to know what terrors and dangers attended me while I continued at Misenum;"],
   ["My uncle having left us, I spent such time as was left on my studies (it was on their account indeed that I had stopped behind), till it was time for my bath. After which I went to supper, and then fell into a short and uneasy sleep."],
   ["There had been noticed for many days before a trembling of the earth, which did not alarm us much, as this is quite an ordinary occurrence in Campania; but it was so particularly violent that night that it not only shook but actually overturned, as it would seem, everything about us. My mother rushed into my chamber, where she found me rising, in order to awaken her.",
    "I took up Livy, and amused myself with turning over that author, and even making extracts from him, as if I had been perfectly at my leisure."],
   ["Though it was now morning, the light was still exceedingly faint and doubtful; the buildings all around us tottered,",
    "we therefore resolved to quit the town. A panic-stricken crowd followed us, and (as to a mind distracted with terror every suggestion seems more prudent than its own) pressed on us in dense array to drive us forward as we came out."],
   ["The sea seemed to roll back upon itself, and to be driven from its banks by the convulsive motion of the earth; it is certain at least the shore was considerably enlarged, and several sea animals were left upon it. On the other side, a black and dreadful cloud, broken with rapid, zigzag flashes, revealed behind it variously shaped masses of flame:"],
   ["\"If your brother,\" he said, \"if your uncle be safe, he certainly wishes you may be so too; but if he perished, it was his desire, no doubt, that you might both survive him: why therefore do you delay your escape a moment?\" We could never think of our own safety, we said, while we were uncertain of his. Upon this our friend left us,"],
   ["Soon afterwards, the cloud began to descend, and cover the sea.",
    "My mother now besought, urged, even commanded me to make my escape at any rate, which, as I was young, I might easily do; as for herself, she said, her age and corpulency rendered all attempts of that sort impossible;",
    "But I absolutely refused to leave her, and, taking her by the hand, compelled her to go with me."],
   ["The ashes now began to fall upon us, though in no great quantity.",
    "\"Let us turn out of the high-road,\" I said, \"while we can still see, for fear that, should we fall in the road, we should be pressed to death in the dark, by the crowds that are following us.\" We had scarcely sat down when night came upon us, not such as we have when the sky is cloudy, or when there is no moon, but that of a room when it is shut up, and all the lights put out."],
   ["You might hear the shrieks of women, the screams of children, and the shouts of men;",
    "Among these there were some who augmented the real terrors by others imaginary or wilfully invented. I remember some who declared that one part of Misenum had fallen, that another was on fire; it was false, but they found people to believe them."],
   ["then again we were immersed in thick darkness, and a heavy shower of ashes rained upon us, which we were obliged every now and then to stand up to shake off, otherwise we should have been crushed and buried in the heap."],
   ["At last this dreadful darkness was dissipated by degrees, like a cloud or smoke; the real day returned,",
    "Every object that presented itself to our eyes (which were extremely weakened) seemed changed, being covered deep with ashes as if with snow.",
    "However, my mother and I, notwithstanding the danger we had passed, and that which still threatened us, had no thoughts of leaving the place, till we could receive some news of my uncle."],
   null
  ],
  plain: [
   "My letter about my uncle's death made you curious. Now you want to know what dangers I faced at Misenum. That is where my last letter stopped.",
   "It is painful to remember, but I will tell you. After my uncle left, I kept studying. That was why I had stayed behind. Then I had a bath, ate dinner, and slept badly for a short time.",
   "For many days the ground had been shaking a little. We did not worry, because that happens often in Campania. But that night it shook so hard that it seemed everything would fall over. My mother rushed into my room. I was already getting up to wake her. We sat in the open yard between the house and the sea. I was only eighteen, and I do not know if what I did next was brave or silly. I picked up a book by the historian Livy and kept reading and taking notes, as if nothing was wrong. A friend of my uncle's, who had just come from Spain, saw this. He told my mother off for being so calm, and me for being so careless. I kept reading anyway.",
   "It was morning by now, but the light was still very dim. The buildings around us were wobbling. We were outside, but the yard was small, so it was still dangerous. We decided to leave the town. A crowd of frightened people followed us and pushed us along, because when people are scared they copy whatever someone else is doing. When we were far enough from the houses, we stopped. It was a terrifying place to be.",
   "The carts we had brought kept rolling backwards and forwards, even on flat ground. We could not hold them still, even with big stones behind the wheels. The sea seemed to pull back, pushed away by the shaking ground. The beach was much wider than before, and sea animals were left lying on the sand. On the other side was a huge black cloud. Zigzag flashes broke through it, and behind them were flames, like lightning but much bigger.",
   "Then the friend from Spain spoke to my mother and me, loudly and urgently. \"If your brother, your uncle, is safe, he wants you to be safe too. If he has died, he would want you to live. So why are you waiting?\" We said we could not think about saving ourselves until we knew he was safe. So our friend left us, and got away from the danger as fast as he could.",
   "Soon the cloud came down and covered the sea. We could no longer see the island of Capri or the point of land at Misenum. My mother begged me, then ordered me, to escape without her. She said I was young and could get away, but she was old and heavy and could not. She said she would die happy if she knew she had not caused my death. I refused to leave her. I took her hand and made her come with me. She came, but slowly, and kept blaming herself for holding me back.",
   "Ash started to fall on us, but not much yet. I looked back. A thick dark cloud was following us, spreading over the land. I said, \"Let's get off the road while we can still see. If we fall over on the road in the dark, the crowd behind us will trample us.\" We had only just sat down when it went dark. It was not like a cloudy night or a night with no moon. It was like a room with no windows and all the lights out.",
   "You could hear women screaming, children crying and men shouting. People were calling for their children, their parents or their husbands, trying to find each other by their voices. Some cried about what would happen to them, and some about their families. Some were so scared of dying that they wanted to die. Some prayed to the gods. More of them believed there were no gods any more, and that this was the last night of the world. Some people made it worse by making up dangers that were not real. They said part of Misenum had fallen down and another part was on fire. It was not true, but people believed them.",
   "Then it got a little lighter. We thought this meant fire was coming, not daylight, and we were right. But the fire landed a long way from us. Then it went dark again, and thick ash poured down on us. Every few minutes we had to stand up and shake it off, or we would have been buried and crushed. I could say I never showed I was afraid. But really, what kept me going was a sad thought: everyone was in the same danger, and the whole world was ending with me.",
   "At last the darkness slowly cleared, like smoke blowing away. Real daylight came back, and the sun even came out, but it looked pale and strange, like during an eclipse. Our eyes were sore. Everything we looked at had changed, covered in deep ash like snow. We went back to Misenum, cleaned up and ate as well as we could. We spent a worried night, more scared than hopeful, because the earthquakes kept going and frightened people ran around making terrible predictions. Even so, my mother and I would not leave until we had news of my uncle.",
   "Read this, but do not put it in your history. It is not good enough for that. If it is not even good enough for a letter, that is your fault for asking. Goodbye."
  ],
  hotspots: [
   { mark:"There had been noticed for many days before a trembling of the earth", label:"Days of shaking",
     text:"The ground had been shaking for days before the eruption. Nobody worried, because it happened often in Campania." },
   { mark:"we therefore resolved to quit the town", label:"Leaving the town",
     text:"The buildings are rocking, so they leave." },
   { mark:"The sea seemed to roll back upon itself", label:"The sea goes out",
     text:"The ground is moving so much that the sea pulls back and leaves sea animals on the sand." },
   { mark:"But I absolutely refused to leave her", label:"He will not leave her",
     text:"His mother tells him to escape without her. He refuses. The volcano did not cause this choice. He did." },
   { mark:"Let us turn out of the high-road", label:"Off the road",
     text:"He leaves the road so the crowd will not crush them in the dark." },
   { mark:"some who augmented the real terrors by others imaginary or wilfully invented", label:"False stories",
     text:"Some people spread stories that were not true, such as part of Misenum falling down. Others believed them." }
  ]
 }
];

/* Anything that reads one source still gets one. bump-it-up.html prefers
   SOURCES. */
const SOURCE_PANEL = Object.assign({}, SOURCES[0]);
const HOTSPOTS = SOURCES[0].hotspots;


/* ---------------------------------------------------------------------------
   The rungs below Level 6, where the CAT rubric has no wording. Three bands,
   following the Victorian Curriculum's own two-year bands, with Level 5 on
   its own because it shares a band with Level 6.
   --------------------------------------------------------------------------- */

const EARLY_LEVELS = ["Foundation to Level 2", "Levels 3 and 4", "Level 5"];

const EARLY_EXAMPLES = {
 "Foundation to Level 2":
`First, {chron|a big cloud went up over the mountain}. Next, {chron|ash fell on the boats}. Then {chron|the sky went dark}. People ran away {cause|because they were scared}.`,

 "Levels 3 and 4":
`At {chron|one o'clock in the afternoon}, Pliny's mother saw a strange cloud. {chron|That night} there were flames on the mountain. {cause|Stones and ash filled the yard, so they had to wake his uncle up}. In the second letter, {cause|the houses were shaking, so Pliny and his mother left the town}.`,

 "Level 5":
`{chron|On 24 August, at about one in the afternoon}, a cloud rose over Vesuvius. {chron|That night} flames lit up the mountain, and {chron|on the third day}, when the light came back, his uncle's body was found. {cause|A note from Rectina made his uncle change his plan}, so he sailed to rescue people instead of just watching. {cause|Rocks from the mountain blocked the shore, so he steered to Stabiae instead}.`
};

const EARLY_EXPLANATIONS = {
 "Foundation to Level 2": {
   chron: "Puts three events in order with first, next and then (VC2HH2S02).",
   cause: "Says why people did something (VC2HH2S06)." },
 "Levels 3 and 4": {
   chron: "Uses a time from the letter, and puts events across a day and a night in order (VC2HH4S02).",
   cause: "Says what caused two changes, and what each one led to (VC2HH4S07)." },
 "Level 5": {
   chron: "Uses a date and a time from the letter, and says when later events happened (VC2HH6S02).",
   cause: "Explains what made the uncle change his plan, and what made him change course (VC2HH6S08)." }
};

/* The Victorian Curriculum 2.0 descriptors each rung is working inside, from
   the History sub-strands Chronology and Causes and consequences. Checked
   against History Foundation-Level 10 (VCAA, 19-06-2024) in the private
   repository. VC2 bands History two years at a time, so neighbouring rungs
   share codes. */
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

const VC_NOTE = "Levels 6 to 9 use the CAT 2 rubric's wording. The rubric stops at Level 9 and is blank below Level 6, so Level 10 and the lower rungs show the Victorian Curriculum only. VC2 bands History two years at a time, so neighbouring rungs share a code.";

/* new: the skill this rung adds.
   background: what a student at this level has already been taught, which
   is what lets them make the rung's inferences. Shown as "A Level 8 student
   already knows". The skill climbs in "new"; the history it leans on is
   named in "background", so a student can tell the two apart. */
const BUMP = {
 "Foundation to Level 2": {
   new:"You put three things in order, and say why one of them happened.",
   background:"that things happen in an order, and that people do things for reasons." },
 "Levels 3 and 4": {
   new:"You use a time from the letter, and say what one event led to.",
   background:"that a volcano can shake the ground, throw out ash and make the sky dark." },
 "Level 5": {
   new:"You use a date, say how long it took, and name the thing that made a person change their plan.",
   background:"that the Romans ruled lands all around the Mediterranean Sea, and sailed between them." },
 "Level 6": {
   new:"You put one person's day on a timeline, and give two causes, each with its effect.",
   background:"how to read and draw a timeline." },
 "Level 7": {
   new:"You use CE dates and measure the time between two events, and say how one event affected a person and a group differently.",
   background:"what BCE and CE mean, and that Rome went from kings, to a republic, to an empire." },
 "Level 8": {
   new:"You place the event in a period of Roman history, and name a person's motive for what they did.",
   background:"that the Republic ended in 27 BCE, when Augustus became the first emperor." },
 "Level 9": {
   new:"You say how long things lasted, run two timelines side by side, and separate physical causes from people's motives.",
   background:"that historians date events from more than one kind of evidence, and that the evidence does not always agree." },
 "Level 10": {
   new:"You sort causes into long term and short term, and results into intended and unintended, and you notice how long after the event the source was written.",
   background:"that a source written years later is shaped by memory and by why it was written, and that by 79 CE Rome ruled every coast of the Mediterranean." }
};

/* Tier 3 = the subject's own words, which need a definition.
   Tier 2 = general academic words, which need a plainer word.
   Matched case-insensitively on whole words wherever they appear. */
const GLOSS = {
 tier3: {
  "eruption":"When a volcano throws out ash, rock, gas or lava.",
  "timeline":"A line showing events in the order they happened, with their dates.",
  "CE":"Common Era. Years counted forward from year 1. 79 CE is 79 years after year 1.",
  "BCE":"Before the Common Era. Years counted backwards from year 1. 27 BCE is 27 years before year 1.",
  "Roman Empire":"Rome and all the lands it ruled under an emperor, from 27 BCE.",
  "emperor":"The single ruler of the Roman Empire.",
  "republic":"Rome's government from 509 BCE to 27 BCE, run by elected officials instead of a king.",
  "Misenum":"The Roman navy's base at the north end of the Bay of Naples, where Pliny was staying.",
  "Stabiae":"A Roman town on the coast south of Vesuvius, where Pliny's uncle died.",
  "Vesuvius":"A volcano near Naples in southern Italy.",
  "Pompeii":"A Roman town buried by the eruption of Vesuvius.",
  "Tacitus":"A Roman historian. Pliny wrote both letters to him."
 },
 tier2: {
  "motives":"reasons for doing something",
  "motive":"a reason for doing something",
  "affected":"changed, had an effect on",
  "uncertain":"not known for sure",
  "physical":"to do with things you can touch, like rock and ash",
  "onshore":"blowing from the sea towards the land",
  "sheltered":"stayed somewhere safe",
  "rescue":"saving people from danger",
  "long term":"over a long time, years or more",
  "short term":"over a short time, hours or days",
  "intended":"meant, planned",
  "unintended":"not meant, not planned"
 }
};

/* The curriculum descriptors said the way a student would say them. Levels
   6 to 9 show the CAT rubric's own sentences, so they carry only a band. */
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
 "Level 9": { band:"CAT 2 rubric · Level 9", lines:[] },
 "Level 10": { band:"Level 10 · past the CAT rubric, which stops at Level 9", lines:[
   "I can sequence events and developments to show what changed and what stayed the same, and why.",
   "I can analyse long-term and short-term causes, and intended and unintended results."]}
};

/* Translations for this unit's own tier-3 and tier-2 words, in the shape
   eal.js uses. Machine-drafted, unreviewed, and labelled as such on screen.
   The eight languages are the ones Year 7 has full coverage in. */
const TIER3_T = {
  "eruption": {"zh-Hans":"火山喷发","zh-Hant":"火山噴發","vi":"sự phun trào núi lửa","ar":"ثوران بركاني","fa":"فوران آتشفشان","ur":"آتش فشاں کا پھٹنا","ml":"അഗ്നിപർവ്വത സ്ഫോടനം","am":"የእሳተ ገሞራ ፍንዳታ"},
  "timeline": {"zh-Hans":"时间线","zh-Hant":"時間線","vi":"dòng thời gian","ar":"خط زمني","fa":"خط زمانی","ur":"زمانی ترتیب کی لکیر","ml":"സമയരേഖ","am":"የጊዜ መስመር"},
  "CE": {"zh-Hans":"公元","zh-Hant":"公元","vi":"Công nguyên (CN)","ar":"بعد الميلاد","fa":"میلادی","ur":"عیسوی","ml":"പൊതുയുഗം","am":"እ.ኤ.አ."},
  "BCE": {"zh-Hans":"公元前","zh-Hant":"公元前","vi":"trước Công nguyên (TCN)","ar":"قبل الميلاد","fa":"پیش از میلاد","ur":"قبل مسیح","ml":"പൊതുയുഗത്തിന് മുമ്പ്","am":"ከክርስቶስ ልደት በፊት"},
  "Roman Empire": {"zh-Hans":"罗马帝国","zh-Hant":"羅馬帝國","vi":"Đế quốc La Mã","ar":"الإمبراطورية الرومانية","fa":"امپراتوری روم","ur":"رومی سلطنت","ml":"റോമാ സാമ്രാജ്യം","am":"የሮማ ኢምፓየር"},
  "emperor": {"zh-Hans":"皇帝","zh-Hant":"皇帝","vi":"hoàng đế","ar":"إمبراطور","fa":"امپراتور","ur":"شہنشاہ","ml":"ചക്രവർത്തി","am":"ንጉሠ ነገሥት"},
  "republic": {"zh-Hans":"共和国","zh-Hant":"共和國","vi":"nền cộng hòa","ar":"جمهورية","fa":"جمهوری","ur":"جمہوریہ","ml":"റിപ്പബ്ലിക്","am":"ሪፐብሊክ"},
  "Misenum": {"zh-Hans":"米塞努姆","zh-Hant":"米塞努姆","vi":"Misenum","ar":"ميسينوم","fa":"میسنوم","ur":"میسینم","ml":"മിസേനം","am":"ሚሴኑም"},
  "Stabiae": {"zh-Hans":"斯塔比伊","zh-Hant":"斯塔比伊","vi":"Stabiae","ar":"ستابيا","fa":"استابیا","ur":"ستابیا","ml":"സ്റ്റാബിയേ","am":"ስታቢየ"},
  "Vesuvius": {"zh-Hans":"维苏威火山","zh-Hant":"維蘇威火山","vi":"núi lửa Vesuvius","ar":"جبل فيزوف","fa":"کوه وزوو","ur":"ویسوویس آتش فشاں","ml":"വെസൂവിയസ് പർവ്വതം","am":"የቬሱቪየስ ተራራ"},
  "Pompeii": {"zh-Hans":"庞贝","zh-Hant":"龐貝","vi":"Pompeii","ar":"بومبي","fa":"پمپئی","ur":"پومپئی","ml":"പോംപെയ്","am":"ፖምፔ"},
  "Tacitus": {"zh-Hans":"塔西佗","zh-Hant":"塔西佗","vi":"Tacitus","ar":"تاسيتس","fa":"تاسیتوس","ur":"ٹیسیٹس","ml":"ടാസിറ്റസ്","am":"ታሲተስ"}
};

const TIER2_T = {
  "motives": {"zh-Hans":"动机","zh-Hant":"動機","vi":"động cơ","ar":"دوافع","fa":"انگیزه‌ها","ur":"محرکات","ml":"ഉദ്ദേശ്യങ്ങൾ","am":"ምክንያቶች"},
  "motive": {"zh-Hans":"动机","zh-Hant":"動機","vi":"động cơ","ar":"دافع","fa":"انگیزه","ur":"محرک","ml":"ഉദ്ദേശ്യം","am":"ምክንያት"},
  "affected": {"zh-Hans":"影响了","zh-Hant":"影響了","vi":"ảnh hưởng đến","ar":"أثّر في","fa":"تأثیر گذاشت","ur":"متاثر کیا","ml":"ബാധിച്ചു","am":"ተጽዕኖ አሳደረ"},
  "uncertain": {"zh-Hans":"不确定的","zh-Hant":"不確定的","vi":"không chắc chắn","ar":"غير مؤكد","fa":"نامعلوم","ur":"غیر یقینی","ml":"അനിശ്ചിതമായ","am":"እርግጠኛ ያልሆነ"},
  "physical": {"zh-Hans":"自然的","zh-Hant":"自然的","vi":"vật chất","ar":"مادي","fa":"فیزیکی","ur":"طبعی","ml":"ഭൗതികമായ","am":"አካላዊ"},
  "onshore": {"zh-Hans":"向岸的","zh-Hant":"向岸的","vi":"thổi vào bờ","ar":"باتجاه الشاطئ","fa":"به سوی ساحل","ur":"ساحل کی طرف","ml":"കരയിലേക്കുള്ള","am":"ወደ ዳርቻ የሚነፍስ"},
  "sheltered": {"zh-Hans":"躲避","zh-Hant":"躲避","vi":"trú ẩn","ar":"احتمى","fa":"پناه گرفت","ur":"پناہ لی","ml":"അഭയം തേടി","am":"ተጠለለ"},
  "rescue": {"zh-Hans":"营救","zh-Hant":"營救","vi":"giải cứu","ar":"إنقاذ","fa":"نجات","ur":"بچاؤ","ml":"രക്ഷാപ്രവർത്തനം","am":"ማዳን"},
  "long term": {"zh-Hans":"长期","zh-Hant":"長期","vi":"lâu dài","ar":"على المدى الطويل","fa":"بلندمدت","ur":"طویل مدت","ml":"ദീർഘകാലം","am":"በረጅም ጊዜ"},
  "short term": {"zh-Hans":"短期","zh-Hant":"短期","vi":"ngắn hạn","ar":"على المدى القصير","fa":"کوتاه‌مدت","ur":"قلیل مدت","ml":"ഹ്രസ്വകാലം","am":"በአጭር ጊዜ"},
  "intended": {"zh-Hans":"有意的","zh-Hant":"有意的","vi":"có chủ ý","ar":"مقصود","fa":"عمدی","ur":"ارادی","ml":"ഉദ്ദേശിച്ച","am":"የታሰበ"},
  "unintended": {"zh-Hans":"无意的","zh-Hant":"無意的","vi":"ngoài ý muốn","ar":"غير مقصود","fa":"ناخواسته","ur":"غیر ارادی","ml":"ഉദ്ദേശിക്കാത്ത","am":"ያልታሰበ"}
};
