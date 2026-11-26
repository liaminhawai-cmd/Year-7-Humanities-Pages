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
  /* The checklist the student ticks against their own answer after writing it. Each item is something they can
     point at. k is the rubric row (a CRITERIA key). Facts are the wall's own (history/terracotta/content.js). */
  levels: {
    5: [
      { id: "a5a", k: "source", t: "I said Source A is a clay statue of a soldier, and named one thing I can see.", adv: "Start with what it is and what you can see: a clay soldier, kneeling, with armour and a topknot." },
      { id: "a5b", k: "perspective", t: "I said what the emperor wanted.", adv: "Say whose idea the army was: Qin Shi Huang wanted soldiers to guard him after he died." },
      { id: "a5c", k: "judge", t: "I said one thing the statue shows and one thing it cannot tell us.", adv: "It shows the emperor was powerful. It cannot tell us what the workers who made it thought." }],
    6: [
      { id: "a6a", k: "source", t: "I said Source A is a primary source.", adv: "A primary source was made at the time. The army was made in the late 200s BCE." },
      { id: "a6b", k: "source", t: "I gave a reason: workers made it then, and it was buried with Qin Shi Huang.", adv: "Back up the type with a reason about who made it and when." },
      { id: "a6c", k: "perspective", t: "I said whose point of view it shows: the emperor's.", adv: "Name the person. The army shows the emperor's point of view: he wanted protection after death." },
      { id: "a6d", k: "judge", t: "I said what it is more useful for, and what it is less useful for.", adv: "It is more useful for the emperor's wishes, and less useful for the workers' lives." }],
    7: [
      { id: "a7a", k: "source", t: "I said where it came from: the Terracotta Army, buried 210 to 209 BCE and found by farmers in 1974.", adv: "Origin is who, when and where. The army was buried in 210 to 209 BCE. Farmers found it in 1974." },
      { id: "a7b", k: "source", t: "I described its features: armour of small plates, hands held to grip a crossbow, a kneeling pose.", adv: "Features are what you can see. Look at the armour, the hands and how he kneels." },
      { id: "a7c", k: "source", t: "I said its purpose: to protect the emperor in the afterlife.", adv: "Purpose is why it was made. Workers made the army to guard the emperor after he died." },
      { id: "a7d", k: "perspective", t: "I described the emperor's point of view: the army showed his power.", adv: "Thousands of soldiers stand by rank, facing east towards the states he conquered. What did that show?" },
      { id: "a7e", k: "perspective", t: "I described the workers' point of view: they were conscripted.", adv: "The workers probably saw it differently. Sima Qian says 700,000 conscripted workers built the tomb." },
      { id: "a7f", k: "judge", t: "I drew a conclusion: it is useful for how the emperor wanted to be seen, but cannot show how the workers felt.", adv: "Finish with what the source is useful for, then what it cannot show." }],
    8: [
      { id: "a8a", k: "source", t: "I backed up its origin with evidence: every face is different, and traces of paint survive.", adv: "Use detail from the facts: the faces all differ and some of the original paint is still there." },
      { id: "a8b", k: "perspective", t: "I explained the workers' point of view with evidence: a grave pit of workers, or signatures in the figures' armpits.", adv: "Archaeologists found a grave pit of workers near the tomb. Sculptors also signed their names in the armpits of the figures." },
      { id: "a8c", k: "judge", t: "I said what it is strong evidence for and weak evidence for, and asked a question about it.", adv: "Strong evidence of the emperor's view, weak evidence of the workers' experience. Ask how much choice the workers had." }],
    9: [
      { id: "a9a", k: "source", t: "I explained what its origin means for the evidence: it was buried in the pits around the tomb, so its origin is not in doubt.", adv: "Say what the origin means for us. It was found where it was buried, so we can trust where it came from." },
      { id: "a9b", k: "perspective", t: "I compared the two points of view: how they differ and what they share.", adv: "The emperor saw protection and display. The workers saw forced labour. Both views agree the project was enormous." },
      { id: "a9c", k: "judge", t: "I explained the limit: it shows one side, and most of what we know about the workers comes from graves and from Sima Qian.", adv: "Sima Qian wrote a century later. Say what that does to how far we can trust it about the workers." }]
  },
  stems: {
    source: ["Source A is ", "It is a primary source because ", "It was made ", "Its features include ", "It was made to "],
    perspective: ["The emperor wanted ", "The emperor's point of view is shown by ", "The workers probably felt ", "The workers' point of view is missing because "],
    judge: ["It is useful for ", "It is strong evidence of ", "But it cannot tell us ", "A historian must be careful because "]
  }
};
