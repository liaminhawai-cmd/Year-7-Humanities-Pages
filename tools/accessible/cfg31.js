/* Config for the 3.1 accessible page: the Terracotta Army. The stops, questions and model answers are the
   paper sheet's, word for word (lesson-3-1-build/build31.js in the private repository). Stems are sentence
   starters only. The words are the vocab hub's 3.1 words. */
const CFG = {
  id: "3.1", title: "The Terracotta Army", key: "china31.access.v1",
  intro: "Watch the video in four parts. Stop and jot at each stop. Then look at a clay archer and say what it tells us about how Qin Shi Huang wanted to be seen.",
  videos: { main: { id: "mP5p4QbvPtc", title: "The incredible history of China's terracotta warriors (TED-Ed)" } },
  srcQ: "What does Source A tell us about how Qin Shi Huang wanted to be seen?",
  words: [["mausoleum", "A large, grand building or tomb built to hold the body of an important person."], ["necropolis", "A purpose built cemetery the size of a small city."],
    ["archaeological", "Relating to the study of the past by digging up and examining the objects, buildings and bones that people left behind."], ["excavation", "The careful digging up of an ancient site to find and record what is buried there."],
    ["immortal", "Living forever and never dying."], ["sculpture", "A figure or shape made by carving stone or wood, or by shaping clay or metal."], ["looted", "Stolen by force, especially from a place during a war or a time of disorder."]],
  stops: [
   { n: 1, from: "0:09", at: "1:16", title: "The first emperor", qs: [
    { id: "1a", kind: "fact", m: 1, min: 4, q: "How did Ying Zheng become the first emperor of China?", stems: ["He became the first emperor by ", "He united "], a: "By uniting China's seven warring kingdoms (1). [0:52 to 1:00]" },
    { id: "1b", kind: "fact", m: 2, min: 6, q: "Name two ways he made China more unified.", stems: ["One way was ", "Another way was "], a: "Any two: one system of weights and measures; one writing script for all of China (1 each). Accept the defensive barrier later called the Great Wall as a third. [1:01 to 1:16]" }] },
   { n: 2, from: "1:16", at: "2:25", title: "An army for the afterlife", qs: [
    { id: "2a", kind: "link", m: 2, min: 8, q: "Why did Qin Shi Huang build an army for his tomb?", stems: ["He was obsessed with ", "He wanted an army to ", "This means he wanted to "],
      a: "1 mark: he was obsessed with death and searched for ways to live forever.\n2 marks: links it: he wanted an army to go with him into the next world so that he could keep ruling. [1:21 to 1:45]" },
    { id: "2b", kind: "link", m: 2, min: 8, q: "What do the pits tell us about how he planned to rule after death?", stems: ["The pits hold ", "This shows he planned to ", "He wanted to rule as "],
      a: "1 mark: names what is there: soldiers in battle formation, chariots and horses, a high command, and also officials, workers, musicians and acrobats.\n2 marks: links it: he planned to rule and live as an emperor, not only to fight. [1:45 to 2:22]" }] },
   { n: 3, from: "2:25", at: "3:26", title: "Making the army", qs: [
    { id: "3a", kind: "link", m: 2, min: 8, q: "How was the army made, and what does that show about his power?", stems: ["The army was made by ", "Workers were ", "This shows he could "],
      a: "1 mark: workshops and reportedly over 720,000 labourers were commandeered; artisans moulded each body part.\n2 marks: links it: he could force huge numbers of people to work for him. [2:31 to 2:48]" },
    { id: "3b", kind: "link", m: 2, min: 8, q: "Why did the makers give each soldier a different face, uniform and weapon?", stems: ["Each soldier was different so ", "The soldiers were arranged by ", "This means the emperor would have "],
      a: "1 mark: to make each one as individual as a real soldier, arranged by rank.\n2 marks: links it to the purpose: so the emperor would have a real army to serve him in the afterlife. [2:39 to 2:56]" }] },
   { n: 4, from: "3:26", at: "4:16", title: "A different kind of burial", qs: [
    { id: "4a", kind: "link", m: 2, min: 8, q: "How was Qin's burial different from royal burials in the Shang and Zhou dynasties?", stems: ["Qin had ", "Shang and Zhou rulers had ", "This is different because "],
      a: "1 mark: he had clay soldiers and servants made.\n2 marks: sets it against the past: Shang and Zhou rulers had living people sacrificed to go with them (as in Fu Hao's tomb, lesson 2.2). [3:48 to 4:07]" }] }],
  extra: { label: "Going further", task: "Going further", title: "Which do you trust more?",
    video: { from: "3:26", label: "Watch from 3:26 to 4:16 again if you need it.", v: "main" },
    items: [
     { id: "f", kind: "weigh", m: 3, min: 12, q: "The video says Qin chose clay figures \"rather than sacrificing living ones\". Sima Qian, a historian writing about a century later, says the workers who built the tomb were trapped inside it when it was sealed. Which do you trust more, and why?",
       stems: ["I trust ", "more, because ", "Sima Qian wrote ", "But the video is "],
       a: "1 mark: picks one and gives a reason.\n2 marks: uses who wrote it and when: Sima Qian wrote about 100 years later, for a Han emperor; the video is a modern summary.\n3 marks: weighs both: the lead archaeologist at the site thinks Sima Qian's account was made up to persuade Emperor Wu, but mercury found in the soil backs up other parts of it; a mass grave of workers shows many workers died, so 'no living people' may be too simple. [3:51; Wikipedia, Mausoleum of the First Qin Emperor]" }] },
  stems: {
    source: ["Source A is ", "It is a primary source because ", "It was made ", "Its features include ", "It was made to "],
    perspective: ["The emperor wanted ", "The emperor's point of view is shown by ", "The workers probably felt ", "The workers' point of view is missing because "],
    judge: ["It is useful for ", "It is strong evidence of ", "But it cannot tell us ", "A historian must be careful because "]
  }
};
