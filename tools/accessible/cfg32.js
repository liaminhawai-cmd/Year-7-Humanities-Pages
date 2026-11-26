/* Config for the 3.2 accessible page: the Great Wall. The stops, questions and model answers are the paper
   sheet's, word for word (lesson-3-2-build/build32.js in the private repository). Stems are sentence
   starters only. The words are the vocab hub's 3.2 words. */
const CFG = {
  id: "3.2", title: "The Great Wall", key: "china32.access.v1",
  intro: "Watch two videos in four parts. Stop and jot at each stop. Then do the myth hunt, and read three sources to decide: was the Great Wall a success?",
  videos: { v1: { id: "m68zyXyeYG0", title: "How and why the Great Wall of China was really built" }, v2: { id: "23oHqNEqRyo", title: "What makes the Great Wall of China so extraordinary (TED-Ed)" } },
  srcQ: "Was the Great Wall a success?",
  words: [["impregnable", "So strong that it cannot be captured or broken into."], ["vassal state", "A smaller state that pays tribute to, and obeys, a stronger ruler."],
    ["fortification", "A strong wall, tower or other structure built to protect a place from attack."], ["defence", "Action taken to protect a place or its people from attack."],
    ["nomadic", "Moving from place to place to find food and grazing land, rather than living in one settled place."], ["symbol", "An object, image or place that stands for an idea or for a whole country."],
    ["conflict", "A serious fight or struggle between groups, such as a war."]],
  stops: [
   { n: 1, v: "v1", from: "0:00", at: "2:44", title: "Video 1: why the first walls were built", qs: [
    { id: "1a", kind: "link", m: 2, min: 8, q: "Why did China first build walls in the north?", stems: ["China built walls to ", "The Xiongnu were ", "A fixed wall suited China because "],
      a: "1 mark: to defend against raiders from the north, the Xiongnu (the video says \"Shungu\").\n2 marks: links it to how they fought: they were horse archers who struck suddenly and were hard to chase, so a fixed defence suited China better. [1:16 to 2:44]" }] },
   { n: 2, v: "v1", from: "2:44", at: "4:50", title: "Video 1: how the early wall worked", qs: [
    { id: "2a", kind: "fact", m: 2, min: 5, q: "How was the early wall built in the desert?", stems: ["The wall was built from ", "Bundles of "], a: "Rammed earth pounded inside a frame (1), with bundles of reeds layered in to bind it (1). [2:56 to 3:29]" },
    { id: "2b", kind: "link", m: 2, min: 8, q: "The video says the wall was more than a barrier. What else was it?", stems: ["It was also ", "For example, ", "It blocked "],
      a: "1 mark: a protection and communications network.\n2 marks: gives an example: spikes slowed attackers while soldiers shot down from the wall; it blocked weak points such as passes and valleys. [3:48 to 4:42]" }] },
   { n: 3, v: "v2", from: "0:06", at: "1:49", title: "Video 2: the Qin and Han walls", qs: [
    { id: "3a", kind: "link", m: 2, min: 8, q: "What did Qin Shi Huang do with the walls after 221 BCE, and why?", stems: ["Qin Shi Huang ", "He did this because "],
      a: "1 mark: he expanded the earlier states' walls, connecting some and strengthening others.\n2 marks: links it: the northern mountains were open to Xiongnu and other invasions. [0:27 to 0:55]" },
    { id: "3b", kind: "link", m: 2, min: 8, q: "Who built the wall, and what was it like for them?", stems: ["The wall was built by ", "Many of them ", "This made the wall "],
      a: "1 mark: soldiers, conscripted peasants and criminals, many not by choice.\n2 marks: links it: many died from accidents, hunger and exhaustion, and the wall became known as a place of suffering. [0:59 to 1:47]" }] },
   { n: 4, v: "v2", from: "1:49", at: "4:13", title: "Video 2: the Ming wall, and did it work?", qs: [
    { id: "4a", kind: "fact", m: 2, min: 5, q: "How did the Ming dynasty change the wall?", stems: ["The Ming used ", "They also added "], a: "Any two: rebuilt it in brick and stone; added watchtowers; fire and smoke signals between towers; openings for archers (1 each). [1:59 to 2:33]" },
    { id: "4b", kind: "link", m: 2, min: 8, q: "Did the wall keep invaders out? Give evidence.", stems: ["Not always. ", "For example, ", "In 1644 "],
      a: "1 mark: not always.\n2 marks: gives an example: the Mongols crossed it in the 13th century, and in 1644 the Manchus overthrew the Ming. [1:49 to 2:51]" }] }],
  extra: { label: "Myth hunt", task: "Bonus · myth hunt", title: "Myth or true?",
    intro: "People say these three things about the wall. Decide if each is a myth or true, and give your evidence from the videos.",
    items: [
     { id: "m1", kind: "fact", bonus: true, m: 1, min: 6, q: "People say: you can see the Great Wall from the Moon. Myth or true? Give your evidence.", stems: ["I think this is ", "The video says "],
       a: "Myth. Video 2 (3:40 to 3:57): it is barely visible even from low Earth orbit, and not at all from the Moon. Wikipedia agrees." },
     { id: "m2", kind: "fact", bonus: true, m: 1, min: 6, q: "People say: workers who died were buried inside the wall. Myth or true? Give your evidence.", stems: ["I think this is ", "The video says "],
       a: "Myth. Video 2 (1:38 to 1:45): no human remains have been found inside it, though grave pits show many workers died. Simple Wikipedia calls it a myth." },
     { id: "m3", kind: "fact", bonus: true, m: 1, min: 6, q: "People say: Qin Shi Huang built the Great Wall in one go. Myth or true? Give your evidence.", stems: ["I think this is ", "The video says "],
       a: "Myth. Video 2 (0:16 to 0:55): states built walls first; he joined and extended them; later dynasties rebuilt them, and the best-known parts are Ming." }] },
  stems: {
    source: ["Source A is ", "It was taken ", "It shows ", "The Ming built walls like this to "],
    interpretation: ["Source C says the wall was ", "Source B says ", "Waldron thinks ", "The two sources disagree about "],
    judge: ["The photo is useful for ", "But it cannot tell us ", "Source C is accurate about ", "Source C leaves out "]
  },
  answerStems: ["I think the wall was ", "because ", "The Qin wall ", "The Ming wall "]
};
