// Sources C, D and B for the 2.4 wall, read by tools/gen_three_ways_wall.js.
// Each is a source the students analyse on paper; their worked examples stay locked until the
// teacher types the password near the end, so students can check their own answer.
// Facts: the 2.4 source sheets (private repository, lesson-2-4-build/build24.js), the 2.4
// readings, and the Wikipedia articles "Admonitions Scroll" (1385270066), "Laozi" (1386086508),
// "Diamond Sutra" (1387227548), "Chinese Buddhism" (1387057256). Quotations are word for word.

/* What each rung adds, and the worked examples: tools/three-ways-examples.js. */
const EX = require("./three-ways-examples.js");
const NEW = EX.NEW;
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
  examples: EX.C,
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
  examples: EX.D,
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
  examples: EX.B,
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
