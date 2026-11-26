/* Config for the 2.2 accessible page: social groups and the Fu Hao owl. The stops, questions, model answers,
   starters and words are the earlier 2.2 page's, which are the paper sheet's word for word (lesson-2-2-build in the
   private repository). The Check it checklist (levels) is new. Facts are the wall's own (history/fu-hao/content.js).
   Made once from the old page body; edit this file from now on. */
const CFG = {
 "id": "2.2",
 "title": "Social groups",
 "key": "china22.access.v1",
 "intro": "Part 1: watch the video in four parts. Stop and jot at each stop. Part 2: look at a bronze owl and say what it tells us about who held power.",
 "videos": {
  "main": {
   "id": "qUGbfNN8nWA",
   "title": "Life in Ancient China, Captivating History"
  }
 },
 "srcQ": "What does Source A tell us about social groups in Shang China?",
 "words": [
  [
   "hierarchy",
   "A system that ranks people from the top to the bottom, from the most powerful to the least powerful."
  ],
  [
   "bureaucrat",
   "A government official."
  ],
  [
   "peasant",
   "A poor farmer who works a small piece of land."
  ],
  [
   "merchant",
   "A person who buys and sells goods to make a profit."
  ],
  [
   "scholar",
   "A person who has studied a subject for many years and knows a great deal about it."
  ]
 ],
 "stops": [
  {
   "n": 1,
   "from": "0:38",
   "at": "2:34",
   "title": "The first Chinese societies",
   "qs": [
    {
     "id": "1a",
     "kind": "fact",
     "m": 2,
     "min": 2,
     "q": "What two crops did the first farmers in China grow?",
     "stems": [
      "The first farmers grew ",
      " and "
     ],
     "a": "Rice (1) and millet (1)."
    },
    {
     "id": "1b",
     "kind": "fact",
     "m": 2,
     "min": 4,
     "q": "Who was at the top of these early societies, and who was at the bottom?",
     "stems": [
      "At the top were ",
      "At the bottom were "
     ],
     "a": "Top: kings and shamans (1). Bottom: the working class, mostly farmers (1)."
    }
   ]
  },
  {
   "n": 2,
   "from": "2:34",
   "at": "5:11",
   "title": "From kings to an empire",
   "qs": [
    {
     "id": "2a",
     "kind": "fact",
     "m": 1,
     "min": 1,
     "q": "In what year did the Qin dynasty unify most of the states?",
     "stems": [
      "The Qin dynasty unified most of the states in "
     ],
     "a": "221 BCE (1)."
    },
    {
     "id": "2b",
     "kind": "link",
     "m": 2,
     "min": 8,
     "q": "The feudal system was replaced by one based on merit. What changed, and what did it lead to?",
     "stems": [
      "Before, jobs went to people because of ",
      "Now, jobs went to people because of ",
      "This led to "
     ],
     "a": "1 mark: says what changed: important jobs, even high court positions, went to people for their ability (merit) instead of their family or land.\n2 marks: links it to a result: it led to a new emphasis on learning and ideas (intellectualism), because ability now mattered."
    }
   ]
  },
  {
   "n": 3,
   "from": "5:11",
   "at": "8:06",
   "title": "Kings, nobles and officials",
   "qs": [
    {
     "id": "3a",
     "kind": "fact",
     "m": 2,
     "min": 6,
     "q": "The earliest kings had two roles. Name them.",
     "stems": [
      "The first role was ",
      "The second role was "
     ],
     "a": "Religious: leading rituals and ceremonies (1). Secular (worldly): wealth and the power to command the commoners' work (1)."
    },
    {
     "id": "3b",
     "kind": "link",
     "m": 2,
     "min": 8,
     "q": "How did the Mandate of Heaven change what a king could do?",
     "stems": [
      "The Mandate of Heaven said ",
      "This meant the king could "
     ],
     "a": "1 mark: says the king's authority was given and confirmed by heaven.\n2 marks: links that to more power: he could do as he pleased, drop his ceremonial roles and interfere directly in people's lives."
    },
    {
     "id": "3c",
     "kind": "link",
     "m": 2,
     "min": 8,
     "q": "What was the difference between a noble and an official?",
     "stems": [
      "A noble was ",
      "An official was ",
      "The difference is "
     ],
     "a": "1 mark: one side: nobles inherited their position (it was hereditary), or officials were appointed by the emperor.\n2 marks: both sides, set against each other: nobles were born to it, officials were chosen by the emperor."
    }
   ]
  },
  {
   "n": 4,
   "from": "8:06",
   "at": "9:58",
   "title": "Who was respected, and who was not",
   "qs": [
    {
     "id": "4a",
     "kind": "link",
     "m": 2,
     "min": 8,
     "q": "Why did Confucius say farmers deserved respect, even above artisans?",
     "stems": [
      "Confucius said farmers deserved respect because ",
      "This matters because everyone "
     ],
     "a": "1 mark: says farmers provided the food.\n2 marks: links it to the whole society: everyone depended on farmers to survive, so farming was the only hard work by hand that the elites respected."
    },
    {
     "id": "4b",
     "kind": "link",
     "m": 2,
     "min": 8,
     "q": "Did women have any protection? Give a protection and a limit.",
     "stems": [
      "One protection was ",
      "But a limit was "
     ],
     "a": "1 mark: one protection: women were excluded from corvée (unpaid forced labour), or in Han times could own land in their own right.\n2 marks: weighs a protection against a limit: marriages were arranged by the heads of families and a wife joined her husband's clan."
    }
   ]
  }
 ],
 "extra": {
  "label": "Going further",
  "task": "Part 1 · Going further",
  "title": "Merchants and rank",
  "video": {
   "from": "8:06",
   "label": "Watch from 8:06 to 8:57 again if you need it.",
   "v": "main"
  },
  "items": [
   {
    "id": "f",
    "kind": "link",
    "m": 3,
    "min": 12,
    "q": "Merchants were ranked near the bottom, yet some grew rich. Why might a rich merchant's real life differ from his rank?",
    "stems": [
     "Merchants were ranked ",
     "But a rich merchant could ",
     "The ranking and real life differed because "
    ],
    "a": "1 mark: says where the hierarchy put merchants: low, below farmers and artisans.\n2 marks: links wealth to real life: a rich merchant could live comfortably, own goods and land, and have influence.\n3 marks: explains the gap: the hierarchy was an ideal set by Confucian scholars, who looked down on making money from other people's work (and the gentry despised small traders); money gave power the official ranking did not."
   }
  ]
 },
 "levels": {
  "5": [
   {
    "id": "o5a",
    "k": "source",
    "t": "I said Source A is a bronze wine vessel shaped like an owl, and named one feature I notice.",
    "adv": "Say what it is and one thing you can see: the wings, the tail that touches the ground like a third leg, or the lid."
   },
   {
    "id": "o5b",
    "k": "context",
    "t": "I said who it belonged to, or where and when it is from.",
    "adv": "It belonged to Fu Hao, a wife of a Shang king. It comes from China, about 1200 BCE."
   },
   {
    "id": "o5c",
    "k": "judge",
    "t": "I said one thing it tells us and one thing it cannot tell us.",
    "adv": "It tells us Fu Hao's family owned fine bronze. It does not tell us how ordinary people lived."
   }
  ],
  "6": [
   {
    "id": "o6a",
    "k": "source",
    "t": "I said Source A is a primary source.",
    "adv": "A primary source was made at the time. The owl was made in the Shang dynasty, about 1200 BCE."
   },
   {
    "id": "o6b",
    "k": "source",
    "t": "I gave a reason: people made it at the time it comes from.",
    "adv": "Back up the type with a reason about who made it and when."
   },
   {
    "id": "o6c",
    "k": "context",
    "t": "I said who Fu Hao was: she was married to a Shang king.",
    "adv": "Fu Hao was married to King Wu Ding of the Shang dynasty."
   },
   {
    "id": "o6d",
    "k": "judge",
    "t": "I said it is more useful for rich and powerful people than for ordinary people.",
    "adv": "Say what it is more useful for, and what it is less useful for."
   }
  ],
  "7": [
   {
    "id": "o7a",
    "k": "source",
    "t": "I said where and when it was found: Fu Hao's tomb at Anyang, dug up in 1976.",
    "adv": "Origin is who, when and where. Archaeologists found it in 1976 in Fu Hao's tomb at Anyang."
   },
   {
    "id": "o7b",
    "k": "source",
    "t": "I described its features: folded wings, a tail that acts as a third leg, patterns over the surface.",
    "adv": "Features are what you can see. Look at the wings, the tail, the lid and the patterns."
   },
   {
    "id": "o7c",
    "k": "source",
    "t": "I said its purpose: it held wine for ceremonies to honour the ancestors.",
    "adv": "Purpose is why it was made. It is a zun, a ritual wine vessel used in ceremonies."
   },
   {
    "id": "o7d",
    "k": "context",
    "t": "I said Fu Hao was also a general and a priestess, not only a wife.",
    "adv": "Fu Hao led armies and served as a high priestess as well as being married to the king."
   },
   {
    "id": "o7e",
    "k": "context",
    "t": "I said the court and nobles used bronze vessels to honour their ancestors, so its owner was at the top of Shang society.",
    "adv": "Bronze vessels were needed for ceremonies to the ancestors. Only the ruling class owned them."
   },
   {
    "id": "o7f",
    "k": "judge",
    "t": "I drew a conclusion: useful for the ruling class's wealth and skill, but it tells us nothing about ordinary labourers.",
    "adv": "Finish with what the source is useful for, then what it cannot show."
   }
  ],
  "8": [
   {
    "id": "o8a",
    "k": "source",
    "t": "I backed up its origin with evidence: her name is cast inside the vessel, and robbers never reached her tomb.",
    "adv": "Her name is cast inside the vessel's mouth. Robbers had broken into many other Shang royal tombs, but not hers."
   },
   {
    "id": "o8b",
    "k": "context",
    "t": "I used the tomb to show her rank: 468 bronzes, over 700 jades and sixteen sacrificed people, and rules that limited bronze by rank.",
    "adv": "Shang rules set how many bronze vessels a noble of each rank could own. What does her tomb suggest about her rank?"
   },
   {
    "id": "o8c",
    "k": "judge",
    "t": "I said what it is strong evidence for (the ruling family's wealth) and what it is weak evidence for (artisans and labourers).",
    "adv": "Say what the owl proves strongly, and what it hardly shows at all."
   }
  ],
  "9": [
   {
    "id": "o9a",
    "k": "source",
    "t": "I explained what its origin means for the evidence: it came from an undisturbed tomb with her name on it, so we can trust where it came from.",
    "adv": "Say what the origin means for us. It was found in a tomb that robbers never reached."
   },
   {
    "id": "o9b",
    "k": "context",
    "t": "I explained what the burial shows about power: the ruling family controlled metal, skilled workers and even the lives of war captives.",
    "adv": "Sixteen people were sacrificed in her tomb. Most people sacrificed in Shang rituals were war captives."
   },
   {
    "id": "o9c",
    "k": "judge",
    "t": "I explained the limits: Fu Hao was exceptional, and the vessel says nothing directly about artisans and labourers.",
    "adv": "She was a woman with both military and religious authority. Can one tomb stand for all Shang rulers?"
   }
  ]
 },
 "stems": {
  "source": [
   "Source A is ",
   "It is a primary source because ",
   "It was found ",
   "Its features include ",
   "Its purpose was "
  ],
  "context": [
   "Fu Hao was ",
   "Her tomb held ",
   "In Shang society, bronze showed ",
   "So the vessel belonged to "
  ],
  "judge": [
   "It is useful for ",
   "It is strong evidence of ",
   "But it cannot tell us ",
   "A historian must be careful because "
  ]
 }
};
