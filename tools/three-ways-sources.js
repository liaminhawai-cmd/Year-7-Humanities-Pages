// Sources C, D and B for the 2.4 wall, read by tools/gen_three_ways_wall.js.
// Each is a source the students analyse on paper; their worked examples stay locked until the
// teacher types the password near the end, so students can check their own answer.
// Facts: the 2.4 source sheets (private repository, lesson-2-4-build/build24.js), the 2.4
// readings, and the Wikipedia articles "Admonitions Scroll" (1385270066), "Laozi" (1386086508),
// "Diamond Sutra" (1387227548), "Chinese Buddhism" (1387057256). Quotations are word for word.

/* What each rung adds, the same for all three (the rubric rows, in plain words). */
const NEW = {
  "Foundation to Level 2": "Say what the source is, what you can see, and what it shows.",
  "Levels 3 and 4": "Describe the source, say what it is about, and what it shows.",
  "Level 5": "Name the source and a feature, say when it was made, and one thing it can and cannot tell us.",
  "Level 6": "Say what kind of source it is, what it shows, and what it is more and less useful for.",
  "Level 7": "Origin, features and purpose; the context; and what the source cannot show.",
  "Level 8": "Evidence for the origin, the point of view it shows, and what it is strong and weak evidence for.",
  "Level 9": "What the origin means, the context explained, and the limits of the source.",
  "Level 10": "Explicit and implicit meaning, the makers' values, and other sources to test it."
};
/* What a marked phrase proves, the same for all three. */
const WHY = {
  "Foundation to Level 2": { source: "Says what the source is and what can be seen.", context: "Says what it is about.", judge: "Says one thing it shows." },
  "Levels 3 and 4": { source: "Describes the source.", context: "Says who or what it is about.", judge: "Says what it shows." },
  "Level 5": { source: "Names the source and one feature.", context: "Says when it was made.", judge: "Says one thing it can tell us and one thing it cannot." },
  "Level 6": { source: "Identifies the type of source.", context: "Identifies what it shows about the time.", judge: "Recognises what it is more and less useful for." },
  "Level 7": { source: "Identifies origin, features and purpose.", context: "Describes the context.", judge: "Draws a conclusion about usefulness, then names a limit." },
  "Level 8": { source: "Describes the origin with evidence.", context: "Uses the context to work out the point of view.", judge: "Weighs strong and weak evidence, and asks questions." },
  "Level 9": { source: "Explains what the origin means for the evidence.", context: "Explains the context.", judge: "Identifies the limits of its reliability." },
  "Level 10": { source: "Analyses explicit and implicit meaning.", context: "Explains the values of the people who made it.", judge: "Tests it against other sources." }
};
const bump = bg => Object.fromEntries(Object.keys(NEW).map(l => [l, { new: NEW[l], background: bg[l] }]));
const why = () => JSON.parse(JSON.stringify(WHY));

module.exports = [
 {
  id: "confucian", tab: "C · Confucian", kind: "image", file: "confucian-admonitions-scene4.jpg", ar: "1872/799", locked: true,
  inquiry: "What does Source C tell us about the influence of Confucianism in China?",
  alt: "A scroll painting: a black bear lunges at a court lady while two guards with spears step in; on the right the emperor and two ladies watch; on the far left a lady walks away.",
  missing: "The picture did not load.<br>Keep <b>confucian-admonitions-scene4.jpg</b> in the same folder as this page.",
  cite: "Source C: Scene 4, Lady Feng and the bear, from the Admonitions Scroll. Ink and colour on silk. British Museum. Public domain, via Wikimedia Commons.",
  whole: { label: "The whole scene", text: "Scene 4 of the Admonitions Scroll: Lady Feng and the bear. Nine of the scroll's twelve scenes survive in the British Museum copy." },
  facts: [
    ["The painting", "Part of a long painting on silk called the Admonitions Scroll, now in the British Museum. Traditionally said to be by Gu Kaizhi (about 345 to 406); modern scholars date it to the 5th to 8th century, and it may be a copy."],
    ["The poem", "It illustrates a poem written in 292 by Zhang Hua, an official, to give advice to the women of the imperial court."],
    ["This scene", "\"When a black bear climbed out of its cage, Lady Feng rushed forward. How could she have been without fear? She knew she might be killed, yet she did not care.\""],
    ["The story", "In 38 BCE Lady Feng, a wife of Emperor Yuan of Han, stood in front of an escaped bear to save the emperor. Guards killed the bear and she lived. The lady on the far left is thought to be Lady Fu, who ran away."],
    ["Confucius", "The scroll belongs to a tradition of teaching pictures that began in the Han dynasty and was influenced by Confucius, who taught that everyone in society has a proper role and place."]
  ],
  hotspots: [
    { x: 2, y: 30, w: 21, h: 66, label: "The lady on the left", text: "Thought to be Lady Fu, who ran away from the bear. The painting sets her against Lady Feng." },
    { x: 25, y: 58, w: 17, h: 41, label: "The bear", text: "A black bear that has climbed out of its cage, lunging forward." },
    { x: 40, y: 16, w: 13, h: 60, label: "The guards", text: "Two guards with spears, arriving just in time. In the story they killed the bear." },
    { x: 50, y: 30, w: 16, h: 52, label: "Lady Feng", text: "Lady Feng, standing between the bear and the emperor." },
    { x: 68, y: 35, w: 17, h: 58, label: "The emperor", text: "Emperor Yuan of Han, seated, watching with his court ladies." },
    { x: 57, y: 2, w: 17, h: 28, label: "The red seals", text: "Collectors over many centuries stamped their seals of ownership on the scroll." }
  ],
  examples: {
    "Foundation to Level 2": "{source|This is a painting of a bear and some people}. {source|A lady stands in front of the bear}. {context|She is keeping the emperor safe}. {judge|It shows that people thought she was brave}.",
    "Levels 3 and 4": "{source|Source C is an old painting on silk}. {source|It shows a black bear, two guards with spears and a lady standing in front of the bear}. {context|The lady, Lady Feng, was protecting the emperor}. {judge|It shows that court ladies were expected to put the emperor first}.",
    "Level 5": "{source|Source C is a painting from the Admonitions Scroll}. A feature I notice is {source|the lady running away on the far left}. {context|It was painted in China more than 1,200 years ago}. {judge|It can tell us what behaviour was praised}, {judge|but not exactly what happened that day}.",
    "Level 6": "{source|Source C is a painting, part of the Admonitions Scroll}. {source|It is not a primary source for the event, because it was painted centuries after 38 BCE}. {context|It shows a Han dynasty story of a court lady who saved the emperor from a bear}. {judge|It is more useful for learning what women at court were taught to do than for learning exactly what happened}.",
    "Level 7": "{source|Source C is Scene 4 of the Admonitions Scroll, a painting on silk traditionally said to be by Gu Kaizhi, now in the British Museum}. {source|It shows Lady Feng standing in front of an escaped bear while two guards rush in with spears, the emperor watches, and another lady runs away}. {source|Its purpose was to teach: it illustrates a poem written in 292 by the official Zhang Hua to give advice to the women of the court}. {context|Confucius taught that everyone has a proper role and place, and the scroll shows a wife putting the emperor before her own life}. {judge|It is useful for showing what Confucian teaching expected of women at court}, {judge|but it cannot tell us how ordinary women lived}.",
    "Level 8": "{source|Source C is a scene from the Admonitions Scroll, which modern scholars date to the 5th to 8th century and which may copy an earlier painting by Gu Kaizhi}. {source|Its features carry the lesson: brave Lady Feng faces the bear at the centre, while Lady Fu runs away at the edge}. {source|It illustrates Zhang Hua's poem of 292, written to advise the women of the court}. {context|It belongs to a tradition of teaching pictures influenced by Confucius, who taught that people should keep their proper roles}, so {context|it shows a Confucian point of view: loyalty to the emperor and husband comes first}. {judge|It is strong evidence of the values the court wanted women to learn}, {judge|but weak evidence for the event itself, painted centuries after 38 BCE, and we should ask whether court women really lived this way}.",
    "Level 9": "{source|Source C's origin is uncertain, a painting of the 5th to 8th century that may copy Gu Kaizhi, but its purpose is clear: it illustrates a poem written to advise the women of the court}. {source|The painter set two women side by side so that the brave one and the one who fled could be compared}. {context|This is the Confucian idea of roles at work: the readings say a wife should respect her husband and a husband should show kindness to his wife}, yet {context|the scroll teaches only the wife's side of that duty}. {judge|So it is reliable evidence of the ideal held up to court women}, {judge|but its limits matter: it shows only the imperial court, it is one of nine surviving scenes, and it cannot show whether women accepted the lesson}.",
    "Level 10": "{source|Source C's explicit meaning is bravery: a woman faces a bear to save the emperor}. {source|Its implicit meaning is a ranking of women: by placing Lady Fu running away beside Lady Feng, it teaches which kind of wife is good}. {context|Zhang Hua wrote the poem as advice for the court, and the painting turns that advice into a picture that values loyalty and knowing one's place}. {judge|Tested against Confucius's own words it fits: the Analects says there is good government \"when the prince is prince, and the minister is minister; when the father is father, and the son is son\" (12.11)}, {judge|and the scroll adds the wife to that list of roles}. {judge|But the readings say the duty ran both ways, a husband owing kindness to his wife, and the scroll shows only one side, so it is reliable evidence of what the court wanted, not of how roles worked in life}."
  },
  explanations: why(),
  bump: bump({
    "Level 6": "The scene shows a story from 38 BCE; the painting is centuries later.",
    "Level 7": "Zhang Hua wrote the poem in 292 to advise the women of the court. The scroll is in the British Museum.",
    "Level 8": "Modern scholars date it to the 5th to 8th century. The lady on the left is thought to be Lady Fu, who ran away.",
    "Level 9": "Nine of the twelve scenes survive. The readings say a husband should show kindness and a wife respect.",
    "Level 10": "Analects 12.11 is in the Confucianism reading."
  })
 },
 {
  id: "daoist", tab: "D · Taoist", kind: "image", file: "daoist-laozi-ox.jpg", ar: "926/1688", locked: true,
  inquiry: "What does Source D tell us about Taoism?",
  alt: "A hanging scroll: an old bald man with a long beard, holding a scroll, rides a water buffalo.",
  missing: "The picture did not load.<br>Keep <b>daoist-laozi-ox.jpg</b> in the same folder as this page.",
  cite: "Source D: Laozi Riding an Ox, by Zhang Lu. Hanging scroll, ink on paper. National Palace Museum, Taipei. Public domain, via Wikimedia Commons.",
  whole: { label: "The whole painting", text: "A hanging scroll by Zhang Lu, Ming dynasty (1368 to 1644). Laozi leaves China on his ox." },
  facts: [
    ["The painting", "A hanging scroll painted by Zhang Lu in the Ming dynasty (1368 to 1644). It is in the National Palace Museum, Taipei."],
    ["The story", "Laozi rode west on his ox through a mountain pass. The guard at the pass, Yinxi, asked him to write down his wisdom before he left; the story says he wrote the Tao Te Ching, then went on."],
    ["Good luck", "The museum that holds it says the story came to be linked with good luck."],
    ["Laozi", "Traditional accounts say Laozi lived in the 6th century BCE. Modern scholars think the details of his life were invented later, and that the Tao Te Ching was written by several people."]
  ],
  hotspots: [
    { x: 35, y: 32, w: 22, h: 14, label: "The old man", text: "A bald old man with a long white beard, looking up: Laozi, as the painter imagined him." },
    { x: 20, y: 47, w: 18, h: 9, label: "The scroll in his hand", text: "He holds a scroll. In the story he writes down his wisdom, the Tao Te Ching." },
    { x: 8, y: 60, w: 84, h: 36, label: "The ox", text: "An ox, a water buffalo, carrying him slowly west." },
    { x: 5, y: 8, w: 90, h: 20, label: "The empty space", text: "Most of the scroll is left plain, with almost nothing in it." },
    { x: 43, y: 0, w: 14, h: 7, label: "The red seals", text: "Red seals stamped on the painting." }
  ],
  examples: {
    "Foundation to Level 2": "{source|This is a painting of an old man riding an ox}. {source|He has a long white beard}. {context|He is Laozi, a teacher from China long ago}. {judge|It shows what people thought he looked like}.",
    "Levels 3 and 4": "{source|Source D is a painting of Laozi riding an ox}. {source|He holds a scroll and looks up}. {context|The story says he wrote down his wisdom before he left China}. {judge|It shows a famous story about how Taoism began}.",
    "Level 5": "{source|Source D is a painting called Laozi Riding an Ox}. A feature I notice is {source|the plain, empty background}. {context|It was painted in the Ming dynasty}. {judge|It can tell us the story people told about Laozi}, {judge|but not what he really looked like}.",
    "Level 6": "{source|Source D is a painting from the Ming dynasty}. {source|It is not a primary source about Laozi, because it was painted nearly 2,000 years after he is said to have lived}. {context|It shows the story of Laozi leaving China after writing the Tao Te Ching}. {judge|It is more useful for learning the stories later people told about Taoism than about Laozi himself}.",
    "Level 7": "{source|Source D is Laozi Riding an Ox, a hanging scroll painted by Zhang Lu in the Ming dynasty, now in the National Palace Museum, Taipei}. {source|It shows an old man with a long white beard, holding a scroll, riding an ox, with almost nothing else in the picture}. {source|Its purpose was to show a famous story, which the museum says came to be linked with good luck}. {context|In the story the guard Yinxi asked Laozi to write down his wisdom before he left, and he wrote the Tao Te Ching, the most important Taoist text}. {judge|It is useful for showing how the beginning of Taoism was remembered}, {judge|but it cannot show us the real Laozi}.",
    "Level 8": "{source|Source D was painted by Zhang Lu in the Ming dynasty, nearly 2,000 years after Laozi is said to have lived}. {source|Its features suit Taoist ideas: a simple old man, a slow ox and a plain, empty background}. {source|It illustrates a story, not an event the painter saw}. {context|Modern scholars think the details of Laozi's life were invented later and that the Tao Te Ching was written by several people}, so {context|the painting shows a legend that later people believed and valued}. {context|Taoism taught living simply and in harmony with nature, and the painting shows that kind of life}. {judge|It is strong evidence of how Taoists and others imagined their founder}, {judge|but weak evidence about Laozi, and we should ask whether he existed at all}.",
    "Level 9": "{source|Source D's origin, a Ming painting, means it shows how Taoism looked to people in the Ming dynasty, not in Laozi's time}. {source|The museum says the story came to be linked with good luck, so a painting like this was valued as a lucky picture as well as a lesson}. {context|That shows both sides of Taoism in the readings: a philosophy of living simply, and a religion bound up with the folk beliefs of ordinary people}. {judge|It is reliable evidence that the Laozi story mattered to later Chinese people}, {judge|but its limits are sharp: it shows a legend about a man who may not have existed, painted by one artist in his own style}.",
    "Level 10": "{source|Source D's explicit meaning is a story: an old man leaves on his ox after writing his book}. {source|Its implicit meaning is in the style: a humble figure, a slow animal and empty space make simplicity look wise}. {context|The painter and the people who valued it as a lucky picture shared Taoist values: following nature and not pushing against it}. {judge|The Tao Te Ching supports that reading: \"The highest excellence is like (that of) water\", which takes \"the low place which all men dislike\" (8)}. {judge|But the same text begins \"The Tao that can be trodden is not the enduring and unchanging Tao\" (1), which warns that the Tao cannot be pinned down}, {judge|so the painting can show how Taoism was felt, but not test whether its founder or his story were real}."
  },
  explanations: why(),
  bump: bump({
    "Level 6": "Ming dynasty: 1368 to 1644. Laozi is traditionally placed in the 6th century BCE.",
    "Level 7": "The guard Yinxi asked Laozi to write down his wisdom. The museum links the story with good luck.",
    "Level 8": "Modern scholars think Laozi's life story was invented later, and the Tao Te Ching had several authors.",
    "Level 9": "The readings describe two sides of Taoism: a philosophy and a religion close to folk religion.",
    "Level 10": "Tao Te Ching chapters 1 and 8 are in the Taoism reading."
  })
 },
 {
  id: "buddhist", tab: "B · Buddhist", kind: "image", file: "buddhist-diamond-sutra.jpg", ar: "1610/969", locked: true,
  inquiry: "What does Source B tell us about the influence of Buddhism in China?",
  alt: "A printed page: on the right, a detailed picture of a seated figure with a halo teaching a crowd of monks and guardians; on the left, columns of Chinese characters.",
  missing: "The picture did not load.<br>Keep <b>buddhist-diamond-sutra.jpg</b> in the same folder as this page.",
  cite: "Source B: the opening picture (frontispiece) of the Diamond Sutra, printed in 868. British Library, Or. 8210/P.2. CC0, via Wikimedia Commons.",
  whole: { label: "The whole page", text: "The opening of the Diamond Sutra, printed from carved wooden blocks and dated 11 May 868." },
  facts: [
    ["The book", "The Diamond Sutra is a Buddhist text: a talk by the Buddha to a senior monk, Subhuti. This copy, a Chinese translation, was printed from carved wooden blocks on a scroll about 5 m long."],
    ["The date", "Dated 11 May 868, in the Tang dynasty. It is the oldest printed book that carries a date."],
    ["Where it was found", "In a walled-up cave at the Mogao Caves near Dunhuang. Aurel Stein bought it in 1907; it is now in the British Library."],
    ["Its last lines", "\"Reverently made for universal free distribution by Wang Jie on behalf of his two parents on the 15th day of the 4th month of the 9th year of Xiantong [11 May 868].\""]
  ],
  hotspots: [
    { x: 0, y: 0, w: 35, h: 100, label: "The text", text: "Chinese characters printed from a carved wooden block: the sutra in Chinese translation." },
    { x: 55, y: 18, w: 22, h: 52, label: "The central figure", text: "A seated figure with a halo, teaching a crowd. The sutra is a talk by the Buddha." },
    { x: 37, y: 55, w: 14, h: 32, label: "The kneeling figure", text: "A listener kneeling at the front of the crowd." },
    { x: 54, y: 74, w: 15, h: 22, label: "The lion", text: "A lion lying at the foot of the platform." },
    { x: 75, y: 50, w: 23, h: 50, label: "The crowd", text: "Monks and guardians crowd round to listen." }
  ],
  examples: {
    "Foundation to Level 2": "{source|This is a page from a very old printed book}. {source|It has a picture of a teacher and many people}. {context|It is a Buddhist book from China}. {judge|It shows that some people in China were Buddhists}.",
    "Levels 3 and 4": "{source|Source B is the first page of the Diamond Sutra, a Buddhist book}. {source|It has a picture of a teacher with a halo, next to Chinese writing}. {context|It was printed in China in 868}. {judge|It shows that Buddhism was important in China}.",
    "Level 5": "{source|Source B is a printed Buddhist book called the Diamond Sutra}. A feature I notice is {source|the detailed picture next to the writing}. {context|It was printed in China in 868}. {judge|It can tell us that Buddhist books were printed and shared}, {judge|but not what everyone in China believed}.",
    "Level 6": "{source|Source B is a printed book, the Diamond Sutra}. {source|It is a primary source for Buddhism in Tang China, because it was made in 868}. {context|It is a Chinese translation of a talk given by the Buddha}. {judge|It is more useful for learning about Buddhism in China in 868 than about the Buddha's own life}.",
    "Level 7": "{source|Source B is the opening of the Diamond Sutra, printed from carved wooden blocks and dated 11 May 868, now in the British Library}. {source|It shows a figure with a halo teaching a crowd, beside columns of Chinese writing}. {source|Its purpose was to spread a Buddhist text: its last lines say it was made for free distribution}. {context|By the Tang dynasty Buddhism was popular with all social classes, with many monasteries and temples}, and {context|this Chinese translation shows that a religion from India had become part of Chinese life}. {judge|It is useful for showing how far Buddhism had spread}, {judge|but it is one book, so it cannot tell us how many people believed}.",
    "Level 8": "{source|Source B is a scroll about 5 metres long, printed in 868 and found in a walled-up cave at the Mogao Caves near Dunhuang}. {source|It is the oldest printed book that carries a date, and its detailed picture shows the skill spent on it}. {source|Its last lines say Wang Jie made it \"for universal free distribution\" on behalf of his two parents}. {context|Buddhism had come to China in the Han dynasty, and by the Tang it was popular with all classes}, yet {context|only about 23 years earlier, in 841 to 845, Emperor Wuzong had persecuted Buddhism}, so {context|Wang Jie's gift shows believers keeping their faith}. {judge|It is strong evidence that Buddhist texts were printed and shared}, {judge|but weak evidence of how many people followed Buddhism}.",
    "Level 9": "{source|Source B's origin is unusually secure: it carries its own date, the name of the man who paid for it, and his reason}. {source|Wang Jie made it on behalf of his two parents, so a Buddhist book was used to honour a family}. {context|The readings say filial piety belongs to Chinese Buddhist ethics as well as Confucian ones, and this source shows that joining in action}. {judge|So it is reliable evidence of how one family practised Buddhism}, {judge|but its limits matter: it survived by chance in a sealed cave, and it speaks for one place, not all of China}.",
    "Level 10": "{source|Source B's explicit meaning is religious: the Buddha's teaching, printed to be given away}. {source|Its implicit meaning is that a son's duty to his parents could be done through a Buddhist act}. {context|Wang Jie's values joined two traditions: honouring his parents, which Confucius taught, and spreading the Buddha's words}. {judge|The Analects fits his motive: filial piety needs reverence, not only support (2.7)}. {judge|The Dhammapada fits his act: \"Not to commit any sin, to do good, and to purify one's mind, that is the teaching of (all) the Awakened\" (183)}. {judge|But the readings warn that emperors sometimes favoured one way and persecuted another, so this source shows the three ways meeting in one family, not that they always met in harmony}."
  },
  explanations: why(),
  bump: bump({
    "Level 6": "868 is in the Tang dynasty. The Buddha lived in India about 563 to 483 BCE.",
    "Level 7": "By the Tang dynasty Buddhism was popular with all classes, with many monasteries and temples.",
    "Level 8": "Emperor Wuzong persecuted Buddhism in 841 to 845. Buddhism reached China in the Han dynasty.",
    "Level 9": "The readings say filial piety is part of Confucian, Chinese Buddhist and Daoist ethics.",
    "Level 10": "Analects 2.7 is in the Confucianism reading; Dhammapada 183 is in the Buddhism reading."
  })
 }
];
