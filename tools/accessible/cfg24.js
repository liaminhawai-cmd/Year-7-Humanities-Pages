/* Config for the 2.4 accessible page: the three ways. The stops, questions, model answers and starters are the paper
   sheet's, word for word (lesson-2-4-build in the private repository). The error hunt has no model answer here: the
   group's reading decides. Students choose the source for their own tradition (pick), with a checklist for each.
   The expert readings and the recording sheet stay on paper. Words are the vocab hub's 2.4 words. Made once from
   the earlier 2.4 page body; edit this file from now on. */
const CFG = {
 "id": "2.4",
 "title": "The three ways",
 "key": "three24.access.v1",
 "intro": "Watch the video in three parts. Stop and jot at each stop. Then find the errors, with your group's reading. Last, read the source for your group's tradition and say what it tells us.",
 "videos": {
  "main": {
   "id": "87jRYTOONRw",
   "title": "Confucianism, Taoism and Buddhism, video"
  }
 },
 "words": [
  [
   "philosopher",
   "One who studies the causes of things. A philosopher asks big questions about life, truth and how people should live."
  ],
  [
   "confucianism",
   "The teachings of Confucius, which stress good conduct, family duty and rulers who lead by example, to build a just and peaceful society."
  ],
  [
   "taoism",
   "The beliefs that people should follow the Tao, ‘the way’ of nature, and see themselves as part of nature."
  ],
  [
   "buddhism",
   "The beliefs based on the teachings of the Buddha: that suffering is caused by desire, and that people can reach nirvana, a state of bliss free from rebirth."
  ],
  [
   "enlightenment",
   "A state of deep understanding and freedom from desire, which Buddhists try to reach."
  ],
  [
   "harmony",
   "A state of peace and agreement, where people or things fit together without conflict."
  ],
  [
   "tolerance",
   "Accepting that other people have different beliefs or ways of living, and allowing them."
  ]
 ],
 "stops": [
  {
   "n": 1,
   "from": "0:33",
   "at": "1:30",
   "title": "Taoism (Daoism)",
   "qs": [
    {
     "id": "1a",
     "kind": "fact",
     "m": 1,
     "min": 4,
     "q": "What did Taoists believe about nature?",
     "stems": [
      "Taoists believed that people should ",
      "A universal force "
     ],
     "a": "People should be one with nature (1); or: a universal force flows through all living things. [0:50]"
    },
    {
     "id": "1b",
     "kind": "link",
     "m": 2,
     "min": 8,
     "q": "How were Taoists different from the followers of Confucius?",
     "stems": [
      "Taoists did not believe in ",
      "The followers of Confucius wanted ",
      "This is different because "
     ],
     "a": "1 mark: Taoists did not believe in a lot of rules or government.\n2 marks: sets it against Confucius's followers, who wanted a strong, organised government. [1:00, 2:14]"
    },
    {
     "id": "1c",
     "kind": "fact",
     "m": 2,
     "min": 4,
     "q": "Yin and yang are pairs of opposite forces. Give two of the video's pairs.",
     "stems": [
      "One pair is ",
      "Another pair is "
     ],
     "a": "Any two of dark and light, cold and hot, male and female (1 each). [1:19]"
    }
   ]
  },
  {
   "n": 2,
   "from": "1:33",
   "at": "3:11",
   "title": "Confucianism",
   "qs": [
    {
     "id": "2a",
     "kind": "fact",
     "m": 1,
     "min": 3,
     "q": "Who wrote down Confucius's teachings?",
     "stems": [
      "His ",
      "They were written down by "
     ],
     "a": "His followers (he did not write them himself). [1:50]"
    },
    {
     "id": "2b",
     "kind": "fact",
     "m": 2,
     "min": 4,
     "q": "Name two things Confucius said were important.",
     "stems": [
      "One thing was ",
      "Another thing was "
     ],
     "a": "Any two of respect, politeness, fairness, honour, morality, family (1 each). [1:55 to 2:14]"
    },
    {
     "id": "2c",
     "kind": "fact",
     "m": 1,
     "min": 3,
     "q": "Family mattered to Confucius. What did he say people had to do?",
     "stems": [
      "People had to ",
      "Children had to "
     ],
     "a": "Honour their relatives. [2:11]"
    }
   ]
  },
  {
   "n": 3,
   "from": "3:16",
   "at": "4:09",
   "title": "Buddhism",
   "qs": [
    {
     "id": "3a",
     "kind": "fact",
     "m": 1,
     "min": 3,
     "q": "Where and when does the video say the Buddha was born?",
     "stems": [
      "The video says he was born in ",
      "The year was "
     ],
     "a": "Nepal, 563 BC. [3:25]"
    },
    {
     "id": "3b",
     "kind": "link",
     "m": 2,
     "min": 8,
     "q": "What is karma?",
     "stems": [
      "Karma means ",
      "So good actions will ",
      "And bad actions will "
     ],
     "a": "1 mark: all actions have consequences.\n2 marks: links it: good actions will help you later and bad ones will hurt you. [3:54 to 4:09]"
    },
    {
     "id": "3c",
     "kind": "fact",
     "m": 1,
     "min": 3,
     "q": "What does the video say happens when the cycle of rebirth is complete?",
     "stems": [
      "The video says the person ",
      "When the cycle ends, "
     ],
     "a": "The person enters nirvana. [3:46]"
    }
   ]
  }
 ],
 "extra": {
  "label": "Find the errors",
  "task": "Bonus · after your reading",
  "title": "Find the errors",
  "intro": "The video gets something wrong about each of the three ways. Find one for each, and say what your group's reading says instead. 1 bonus mark each.",
  "items": [
   {
    "id": "e1",
    "kind": "fact",
    "bonus": true,
    "m": 1,
    "min": 8,
    "q": "Taoism (Daoism). The video says: Taoism was founded in the sixth century by Laozi, who wrote the Tao Te Ching (0:36). The idea of yin and yang comes from Taoism (1:08). What does your group's reading say instead?",
    "stems": [
     "The reading says ",
     "The video is wrong because "
    ]
   },
   {
    "id": "e2",
    "kind": "fact",
    "bonus": true,
    "m": 1,
    "min": 8,
    "q": "Confucianism. The video says: The video quotes Confucius with sayings such as 'Forget injuries, never forget kindnesses' (2:28 to 3:06). What does your group's reading say instead?",
    "stems": [
     "The reading says ",
     "The video is wrong because "
    ]
   },
   {
    "id": "e3",
    "kind": "fact",
    "bonus": true,
    "m": 1,
    "min": 8,
    "q": "Buddhism. The video says: Buddhists believe in a rebirth of the self, and the person's soul enters nirvana (3:38 to 3:50). Buddhism spread through India and China (3:34), with no date. What does your group's reading say instead?",
    "stems": [
     "The reading says ",
     "The video is wrong because "
    ]
   }
  ]
 },
 "pick": {
  "labels": {
   "confucian": "Confucianism: Source C, the Admonitions Scroll",
   "daoist": "Taoism: Source D, Laozi riding an ox",
   "buddhist": "Buddhism: Source B, the Diamond Sutra"
  },
  "levels": {
   "confucian": {
    "5": [
     {
      "id": "cf5a",
      "k": "source",
      "t": "I said Source C is a painting, and named one thing I can see.",
      "adv": "Say what it is and what you can see: a bear, guards with spears, a lady, the emperor."
     },
     {
      "id": "cf5b",
      "k": "context",
      "t": "I said what story it shows: a court lady stood in front of a bear to save the emperor.",
      "adv": "The painting shows Lady Feng stepping in front of an escaped bear to protect Emperor Yuan of Han."
     },
     {
      "id": "cf5c",
      "k": "judge",
      "t": "I said one thing it shows and one thing it cannot tell us.",
      "adv": "It shows what a court lady was meant to do. It cannot tell us how ordinary women lived."
     }
    ],
    "6": [
     {
      "id": "cf6a",
      "k": "source",
      "t": "I said Source C is not a primary source for the bear attack.",
      "adv": "A primary source was made at the time. The attack was in 38 BCE."
     },
     {
      "id": "cf6b",
      "k": "source",
      "t": "I gave a reason: the painting was made centuries after the attack.",
      "adv": "Back up the type with when it was made. The scroll was painted long after 38 BCE."
     },
     {
      "id": "cf6c",
      "k": "context",
      "t": "I said it shows a Han dynasty story about Lady Feng saving the emperor.",
      "adv": "Name the lady and the emperor. The story is from the Han dynasty."
     },
     {
      "id": "cf6d",
      "k": "judge",
      "t": "I said it is more useful for what women at court were taught than for what really happened.",
      "adv": "Say what it is more useful for, and what it is less useful for."
     }
    ],
    "7": [
     {
      "id": "cf7a",
      "k": "source",
      "t": "I said where it is from: Scene 4 of the Admonitions Scroll, a painting on silk in the British Museum.",
      "adv": "Origin is who, when and where. It is one scene from a long scroll called the Admonitions Scroll."
     },
     {
      "id": "cf7b",
      "k": "source",
      "t": "I described its features: Lady Feng between the bear and the emperor, two guards with spears, another lady running away.",
      "adv": "Features are what you can see. Look at the bear, the guards and the ladies."
     },
     {
      "id": "cf7c",
      "k": "source",
      "t": "I said its purpose: to teach, as it illustrates a poem written in 292 to advise women at court.",
      "adv": "Purpose is why it was made. The official Zhang Hua wrote the poem to advise the women of the court."
     },
     {
      "id": "cf7d",
      "k": "context",
      "t": "I said Confucius taught that everyone has a proper role and place.",
      "adv": "Confucianism says each person has a proper role in society. Say what that means for a wife."
     },
     {
      "id": "cf7e",
      "k": "context",
      "t": "I linked it to the scene: a wife puts the emperor's life above her own.",
      "adv": "Join the teaching to the picture. Lady Feng faces the bear to protect the emperor."
     },
     {
      "id": "cf7f",
      "k": "judge",
      "t": "I drew a conclusion: it is useful for how Confucian teaching expected court women to behave, but it cannot tell us how ordinary women lived.",
      "adv": "Finish with what the source is useful for, then what it cannot show."
     }
    ],
    "8": [
     {
      "id": "cf8a",
      "k": "source",
      "t": "I backed up the origin with evidence: modern scholars date it to the 5th to 8th century, and it may copy an earlier painting.",
      "adv": "It is traditionally said to be by Gu Kaizhi, but modern scholars think it is later, and may be a copy."
     },
     {
      "id": "cf8b",
      "k": "context",
      "t": "I explained the Confucian point of view: a wife's first duty is loyalty to her husband and her emperor.",
      "adv": "Say what the painting teaches, and where it comes from in Confucius's teaching about roles."
     },
     {
      "id": "cf8c",
      "k": "judge",
      "t": "I said it is strong evidence of the values the court wanted women to learn, weak evidence for the attack itself, and asked a question about it.",
      "adv": "Ask whether women at court really lived up to this ideal."
     }
    ],
    "9": [
     {
      "id": "cf9a",
      "k": "source",
      "t": "I explained its purpose: viewers compare the brave woman with the one who runs away, and are meant to copy the brave one.",
      "adv": "The painter sets Lady Fu running away beside Lady Feng. What is the viewer supposed to do?"
     },
     {
      "id": "cf9b",
      "k": "context",
      "t": "I used the readings: Confucianism gave both partners duties, but the scroll only shows the wife's.",
      "adv": "The readings say a husband should show kindness and a wife respect. Which does the scroll show?"
     },
     {
      "id": "cf9c",
      "k": "judge",
      "t": "I explained the limits: it shows only women at court, only nine of twelve scenes survive, and it cannot show whether women accepted the lesson.",
      "adv": "Say who is missing from the evidence, and what is missing from the scroll itself."
     }
    ]
   },
   "daoist": {
    "5": [
     {
      "id": "dq5a",
      "k": "source",
      "t": "I said Source D is a painting of an old man on an ox, and named one thing I can see.",
      "adv": "Say what it is and what you can see: a long white beard, a scroll in his hand, an ox."
     },
     {
      "id": "dq5b",
      "k": "context",
      "t": "I said who the old man is: Laozi.",
      "adv": "The painting shows Laozi, the man traditionally said to have founded Taoism."
     },
     {
      "id": "dq5c",
      "k": "judge",
      "t": "I said one thing it shows and one thing it cannot tell us.",
      "adv": "It shows how people imagined Laozi. It cannot tell us what he was really like."
     }
    ],
    "6": [
     {
      "id": "dq6a",
      "k": "source",
      "t": "I said Source D is not a primary source about Laozi.",
      "adv": "A primary source was made at the time. Laozi is said to have lived in the 6th century BCE."
     },
     {
      "id": "dq6b",
      "k": "source",
      "t": "I gave a reason: Zhang Lu painted it in the Ming dynasty, nearly 2,000 years later.",
      "adv": "Back up the type with who made it and when."
     },
     {
      "id": "dq6c",
      "k": "context",
      "t": "I said it shows the story of Laozi leaving China after writing the Tao Te Ching.",
      "adv": "Say which story the painting shows."
     },
     {
      "id": "dq6d",
      "k": "judge",
      "t": "I said it is more useful for the stories people told about Taoism than for learning about Laozi.",
      "adv": "Say what it is more useful for, and what it is less useful for."
     }
    ],
    "7": [
     {
      "id": "dq7a",
      "k": "source",
      "t": "I said where it is from: painted by Zhang Lu in the Ming dynasty, now in the National Palace Museum in Taipei.",
      "adv": "Origin is who, when and where. Name the painter, the dynasty and the museum."
     },
     {
      "id": "dq7b",
      "k": "source",
      "t": "I described its features: an old man with a long white beard riding an ox and holding a scroll, with almost nothing else in the picture.",
      "adv": "Features are what you can see. Look at the man, the ox and the empty space."
     },
     {
      "id": "dq7c",
      "k": "source",
      "t": "I said its purpose: it shows a well-known story that the museum says became linked with good luck.",
      "adv": "The museum that holds it says the story came to be linked with good luck."
     },
     {
      "id": "dq7d",
      "k": "context",
      "t": "I told the story: the guard Yinxi asked Laozi to write down his wisdom before he left.",
      "adv": "The guard at the mountain pass, Yinxi, asked Laozi to record his wisdom."
     },
     {
      "id": "dq7e",
      "k": "context",
      "t": "I said the Tao Te Ching is the most important Taoist text.",
      "adv": "In the story Laozi wrote the Tao Te Ching, then went on."
     },
     {
      "id": "dq7f",
      "k": "judge",
      "t": "I drew a conclusion: it is useful for how people remembered Taoism's beginnings, but it cannot show us the real Laozi.",
      "adv": "Finish with what the source is useful for, then what it cannot show."
     }
    ],
    "8": [
     {
      "id": "dq8a",
      "k": "source",
      "t": "I backed up the origin with evidence: Zhang Lu was illustrating a legend, so he could not have seen any of it.",
      "adv": "He painted nearly 2,000 years after Laozi is said to have lived."
     },
     {
      "id": "dq8b",
      "k": "context",
      "t": "I explained the Taoist idea: living simply and in harmony with nature, which the painting shows.",
      "adv": "Taoism encouraged simple living. Look at the plain man, the slow ox and the empty space."
     },
     {
      "id": "dq8c",
      "k": "judge",
      "t": "I said it is strong evidence of how people imagined Taoism's founder, weak evidence about Laozi himself, and asked whether he existed.",
      "adv": "Modern scholars think the details of Laozi's life were invented later, and the Tao Te Ching had several authors."
     }
    ],
    "9": [
     {
      "id": "dq9a",
      "k": "source",
      "t": "I explained what its origin means: it shows how Taoism was understood in the Ming dynasty, long after Laozi.",
      "adv": "Say what a Ming painting can tell us, and what it cannot."
     },
     {
      "id": "dq9b",
      "k": "context",
      "t": "I used the readings: Taoism has two sides, a philosophy of simple living and a religion close to folk belief, and the good-luck link fits the second.",
      "adv": "The readings describe two sides of Taoism. Which side did people who kept lucky paintings follow?"
     },
     {
      "id": "dq9c",
      "k": "judge",
      "t": "I explained the limits: it shows a legend about a man who may never have lived, painted in one artist's own style.",
      "adv": "Say what the painting cannot prove, and why."
     }
    ]
   },
   "buddhist": {
    "5": [
     {
      "id": "bd5a",
      "k": "source",
      "t": "I said Source B is a printed page from a book, and named one thing I can see.",
      "adv": "Say what it is and what you can see: a picture of a seated figure teaching a crowd, and columns of Chinese writing."
     },
     {
      "id": "bd5b",
      "k": "context",
      "t": "I said it is a Buddhist text.",
      "adv": "The Diamond Sutra is a Buddhist text: a talk by the Buddha."
     },
     {
      "id": "bd5c",
      "k": "judge",
      "t": "I said one thing it shows and one thing it cannot tell us.",
      "adv": "It shows that Buddhist books were printed. It cannot tell us how many people believed."
     }
    ],
    "6": [
     {
      "id": "bd6a",
      "k": "source",
      "t": "I said Source B is a primary source for Buddhism in Tang China.",
      "adv": "A primary source was made at the time. This book was printed in 868, in the Tang dynasty."
     },
     {
      "id": "bd6b",
      "k": "source",
      "t": "I gave a reason: people made it in 868.",
      "adv": "Back up the type with when it was made."
     },
     {
      "id": "bd6c",
      "k": "context",
      "t": "I said it is a Chinese translation of a talk the Buddha gave.",
      "adv": "The Buddha lived in India. The book is in Chinese."
     },
     {
      "id": "bd6d",
      "k": "judge",
      "t": "I said it is more useful for Buddhism in China in 868 than for the Buddha's own life.",
      "adv": "Say what it is more useful for, and what it is less useful for."
     }
    ],
    "7": [
     {
      "id": "bd7a",
      "k": "source",
      "t": "I said where it is from: the opening page of the Diamond Sutra, printed on 11 May 868, now in the British Library.",
      "adv": "Origin is who, when and where. Name the book, the date and where it is now."
     },
     {
      "id": "bd7b",
      "k": "source",
      "t": "I described its features: a figure with a halo teaching a crowd, beside columns of Chinese text.",
      "adv": "Features are what you can see. Look at the central figure, the crowd and the text."
     },
     {
      "id": "bd7c",
      "k": "source",
      "t": "I said its purpose: its last lines say it was made for free distribution, to spread a Buddhist text.",
      "adv": "The last lines say it was made for universal free distribution."
     },
     {
      "id": "bd7d",
      "k": "context",
      "t": "I said that by the Tang dynasty people of every class followed Buddhism, with many monasteries and temples.",
      "adv": "Say how popular Buddhism had become by the Tang dynasty."
     },
     {
      "id": "bd7e",
      "k": "context",
      "t": "I said what it shows: a religion from India had become part of Chinese life.",
      "adv": "The book is a Chinese translation of an Indian religion's teaching."
     },
     {
      "id": "bd7f",
      "k": "judge",
      "t": "I drew a conclusion: it is useful for how widely Buddhism had spread, but as one book it cannot tell us how many people believed.",
      "adv": "Finish with what the source is useful for, then what it cannot show."
     }
    ],
    "8": [
     {
      "id": "bd8a",
      "k": "source",
      "t": "I backed up the origin with evidence: a scroll about 5 metres long, found in a sealed cave at the Mogao Caves, and the oldest dated printed book.",
      "adv": "Use detail from the facts: where it was found, how long it is, how old it is."
     },
     {
      "id": "bd8b",
      "k": "context",
      "t": "I used the history: Emperor Wuzong persecuted Buddhism from 841 to 845, so Wang Jie's gift suggests believers held on to their faith.",
      "adv": "Only about 23 years before this book, Buddhism was persecuted. What does printing it then suggest?"
     },
     {
      "id": "bd8c",
      "k": "judge",
      "t": "I said it is strong evidence that Buddhist texts were printed and shared, and weak evidence of how many people followed Buddhism.",
      "adv": "Say what the book proves strongly, and what it hardly shows."
     }
    ],
    "9": [
     {
      "id": "bd9a",
      "k": "source",
      "t": "I explained what the origin means: it records its own date, who paid for it and why, which was Wang Jie, for his two parents.",
      "adv": "Few sources tell us this much about where they came from. Say what that means for how far we can trust it."
     },
     {
      "id": "bd9b",
      "k": "context",
      "t": "I used the readings: respect for parents (filial piety) is part of Chinese Buddhist ethics as well as Confucianism, so one man acted on both.",
      "adv": "The readings say filial piety belongs to Confucian, Chinese Buddhist and Daoist ethics."
     },
     {
      "id": "bd9c",
      "k": "judge",
      "t": "I explained the limits: it survived only because it was sealed in a cave, and it comes from one region of China.",
      "adv": "Say what one surviving book cannot show about the whole country."
     }
    ]
   }
  },
  "stems": {
   "confucian": {
    "source": [
     "Source C is ",
     "It is not a primary source because ",
     "It comes from ",
     "Its features include ",
     "It was made to "
    ],
    "context": [
     "The story is about ",
     "Confucius taught that ",
     "The painting shows a wife ",
     "This means the court expected "
    ],
    "judge": [
     "It is useful for ",
     "It is strong evidence of ",
     "But it cannot tell us ",
     "A historian must be careful because "
    ]
   },
   "daoist": {
    "source": [
     "Source D is ",
     "It is not a primary source because ",
     "It was painted ",
     "Its features include ",
     "It shows a story that "
    ],
    "context": [
     "The story is that ",
     "Taoism taught ",
     "Laozi is said to have ",
     "Historians think "
    ],
    "judge": [
     "It is useful for ",
     "It is strong evidence of ",
     "But it cannot tell us ",
     "A historian must be careful because "
    ]
   },
   "buddhist": {
    "source": [
     "Source B is ",
     "It is a primary source because ",
     "It was printed ",
     "Its features include ",
     "It was made to "
    ],
    "context": [
     "By the Tang dynasty ",
     "Buddhism came from ",
     "Wang Jie made it ",
     "This shows "
    ],
    "judge": [
     "It is useful for ",
     "It is strong evidence of ",
     "But it cannot tell us ",
     "A historian must be careful because "
    ]
   }
  }
 },
 "stems": {
  "source": [
   "Source ",
   "It is not a primary source because ",
   "It comes from ",
   "Its features include ",
   "It was made to "
  ],
  "context": [
   "The story is about ",
   "Confucius taught that ",
   "Taoism teaches ",
   "By the Tang dynasty "
  ],
  "judge": [
   "It is useful for ",
   "It is strong evidence of ",
   "But it cannot tell us ",
   "A historian must be careful because "
  ]
 }
};
