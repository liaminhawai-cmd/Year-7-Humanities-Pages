/* =======================================================================
   CONTENT BLOCK for the economics WAGOLL family.
   This is the ONLY place the wall text lives. wagoll-wall.html,
   level-sheets.html and interactive.html all read it, so editing here
   updates the wall, the per-level A3 sheets and the interactive at once.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.
   
   CURRICULUM WARNING. The five single levels below (Level 6 to Level 10)
   and their descriptor wording came from the source document this wall
   was built from. They are NOT Victorian Curriculum 2.0. That curriculum
   bands Economics and Business as Levels 5-6, 7-8 and 9-10, and none of
   the row wording below appears in it.

   Nothing here has been rewritten, because changing the level structure
   changes the printed A3s and the Word wall, and that is the teacher's
   call rather than a silent edit. What HAS changed is the claim: the
   footer no longer says this is curriculum wording, and it names the
   real descriptors the wall is closest to.

   To rebuild against VC 2.0 properly, LEVELS becomes three bands and the
   CONTINUUM rows map to VC2HE6/8/10 K01-K04 and S03/S05.
   ======================================================================= */const WALL = {
  id: "econ-pigeon",
  title: "Pigeon Patrol — one business, five levels",
  expected: "Level 7",
  task: "<b>The task:</b> students plan, run and evaluate a small business for the school. Every worked example below describes the <b>same</b> student business — Pigeon Patrol, a service that clears pigeons from school eating areas — written five times, once at each level of the continuum.",
  foot: "<b>The row wording below is the school’s own, not the Victorian Curriculum.</b> Checked against the Victorian Curriculum 2.0 Economics and Business Levels 5–10 scope and sequence: that document bands the subject 5&ndash;6, 7&ndash;8 and 9&ndash;10 rather than by single level, and none of the wording below appears in it. The closest real descriptors are VC2HE8K01 (scarcity, costs and benefits, incentives, opportunity cost), VC2HE8K03 (purposes and goals of businesses, and taking advantage of market opportunity), VC2HE8K04 (entrepreneurship and the link to business success), VC2HE8S03 (draw conclusions from graphs, models and text to identify cause-and-effect relationships) and VC2HE8S05 (analyse a response, identifying costs and benefits). <b>Level 7 is the expected level for Year 7</b> and is boxed in gold. Each criterion carries two signals — a colour <i>and</i> an underline pattern — so the wall still works photocopied in black and white. Marked with ■ ▲ ● in the explanation band for the same reason."
};

const CRITERIA = [
  { key:"success",    row:"Business success",
    name:"Business success",     glyph:"■", line:"solid",
    blurb:"Why the business exists, what makes it work, and how it stays ahead of competitors." },
  { key:"innovation", row:"Innovation &amp; entrepreneurship",
    name:"Innovation &amp; entrepreneurship", glyph:"▲", line:"dashed",
    blurb:"Taking the initiative, testing ideas, and improving something that already exists." },
  { key:"decisions",  row:"Business decisions",
    name:"Business decisions",   glyph:"●", line:"dotted",
    blurb:"Costs, benefits, risks, and the effects a decision has — intended and unintended." },
];

const LEVELS = ["Level 6","Level 7","Level 8","Level 9","Level 10"];

const MOVE = {
  "Level 6":  "States and identifies",
  "Level 7":  "Outlines and describes",
  "Level 8":  "Explains effects",
  "Level 9":  "Evaluates trade-offs",
  "Level 10": "Justifies with analysis"
};

const EXAMPLES = {
"Level 6":
`We started Pigeon Patrol so we could {success|remove pigeons safely from eating areas} and students could use the space. We tried {innovation|fake hawk kites and scent gel} because we didn’t want to harm the birds. We chose {decisions|cheap netting instead of metal spikes so the school could afford it}.`,

"Level 7":
`We noticed pigeons were ruining lunch spots, so we offered a service the school could {success|book and pay for}. We tested {innovation|hawk kites, scent gel, and frisbees}; frisbees were {decisions|$0} but someone had to keep throwing them, while gel cost {decisions|$15} but worked all day. We considered rocks (also free) but rejected it because {decisions|one broken window could cost hundreds}.`,

"Level 8":
`We ran two one-week trials and recorded results, then {innovation|changed our plan based on what the data showed (gel near bins + netting at the worst corner)}. The result was {success|fewer lunchtime complaints and a cleaner area}, but gel near bins needed signage so students didn’t touch it. We identified {decisions|risks like injury or property damage and reduced them with clear rules}.`,

"Level 9":
`Other pest-control businesses could offer the same service, so we offered a {success|“no-poo guarantee” and faster response packages}. We knew another school was already using scent gel and netting, so we copied that and used {innovation|gel near bins plus netting in the corner pigeons treated like a VIP lounge}. We weighed benefits (trust, repeat bookings) against costs like {decisions|free call-outs, staff time, and extra labour}. We priced the guarantee higher to cover that labour but noted it might reduce demand from smaller schools.`,

"Level 10":
`To maintain our edge, we {success|tracked outcomes across multiple schools each term} (how long pigeon numbers stayed low, and how many follow-up visits were needed). We used a simple {decisions|cost–benefit analysis}: better equipment cost {decisions|$600} upfront, but reduced repeat visits by {decisions|2 per school per term}. If a repeat visit costs {decisions|$80}, that’s {decisions|$160 saved per school per term}. We kept improving it with {innovation|new signage, better scheduling, and improved packages} so customers stayed happy.`
};

/* One entry per criterion, in criterion order, so the column reads straight
   down: marked phrase → why it counts → continuum descriptor.
   `notYet` names the ceiling of the level — what is still missing. */
const EXPLANATIONS = {
"Level 6": {
  items:{
    success:    ["Business success", "states the purpose and identifies this as a service (not a good)."],
    innovation: ["Innovation", "a trial is present, but it is not explained as a process."],
    decisions:  ["Business decisions", "includes one decision with an effect (affordability → netting choice)."]
  }, notYet:"" },

"Level 7": {
  items:{
    success:    ["Business success", "uses a real problem + willingness to pay."],
    innovation: ["Entrepreneurship", "shows initiative and risk (pitching / organising)."],
    decisions:  ["Business decisions", "describes costs and benefits with concrete comparisons ($0 vs $15; window damage)."]
  }, notYet:"Discusses costs and benefits, but does not yet show systematic testing over time or broader consequences." },

"Level 8": {
  items:{
    success:    ["Business success", "links actions to outcomes (complaints / cleanliness)."],
    innovation: ["Entrepreneur contribution", "shows the service being improved on the basis of evidence."],
    decisions:  ["Business decisions", "explains costs and benefits including the effects and potential consequences (signage, rules, risks)."]
  }, notYet:"Explains consequences, but does not yet evaluate market competition or strategic trade-offs." },

"Level 9": {
  items:{
    success:    ["Competitive advantage", "describes why differentiation matters in a competitive market."],
    innovation: ["Innovation", "explains innovation as iterative improvement and combination, not invention."],
    decisions:  ["Business decisions", "evaluates intended benefits against unintended effects (free call-outs, time, demand)."]
  }, notYet:"Evaluates consequences, but does not yet justify with a full numerical cost–benefit calculation across contexts." },

"Level 10": {
  items:{
    success:    ["Maintaining advantage", "uses longitudinal tracking across schools."],
    innovation: ["Innovation in the real world", "connects ongoing improvement to how service businesses succeed beyond school scenarios."],
    decisions:  ["Cost–benefit analysis", "justifies an investment with numbers and payback logic."]
  }, notYet:"" }
};

const CONTINUUM = {
success:{
 "Level 6":"I can explain the purpose of a business and recognise the different ways that businesses choose to provide goods and services.",
 "Level 7":"I can outline the characteristics of successful businesses.",
 "Level 8":"I can describe the characteristics of successful businesses and the way these businesses use enterprising behaviours.",
 "Level 9":"I can describe why businesses need to create competitive advantage.",
 "Level 10":"I can explain how a business could maintain a competitive advantage."},
innovation:{
 "Level 6":"",
 "Level 7":"I can outline the characteristics of an entrepreneur.",
 "Level 8":"I can explain how entrepreneurs contribute to business success.",
 "Level 9":"I can explain the nature of innovation.",
 "Level 10":"I can discuss how innovation has contributed to business success in the real world."},
decisions:{
 "Level 6":"I can identify the possible effects of business decisions.",
 "Level 7":"I can describe the costs and benefits of different business decisions.",
 "Level 8":"I can explain the costs and benefits of different business decisions, including the effects and potential consequences of these actions.",
 "Level 9":"I can evaluate the costs and benefits of different business decisions, including the intended and unintended effects and potential consequences of these actions.",
 "Level 10":"I can use cost-benefit analysis to justify business decisions."},
};

/* The continuum row is genuinely blank here in the curriculum, so the cell
   says so rather than inventing a descriptor to fill the hole. */
const GAP_TEXT = "Not on the continuum until Level 7.";


/* ---------------------------------------------------------------------------
   Paragraph frame (paragraph-builder.html). Same idea as the ELC TEEA tool:
   one card per step, each opening to the job, the guide, a worked non-example
   and sentence stems. The worked examples are NOT repeated here — the builder
   pulls them out of EXAMPLES above, so they can never drift.
   --------------------------------------------------------------------------- */

const FRAME = {
  name: "P · I · D",
  blurb: "The three steps are the three criteria, in the order you write them. Reading down the wall is the same as writing the answer.",
  steps: [
    { key:"success", letter:"P", title:"Purpose",
      job:"Say what the business is for, and what makes it work.",
      guide:"A real problem, and someone willing to pay to have it fixed. Higher up, this becomes: why would anyone choose us instead of a competitor?",
      warn:"We made a business.",
      warnWhy:"No purpose, no customer, no problem being solved.",
      stems:["We started ___ so we could ___.",
             "We noticed ___, so we offered a service the school could ___.",
             "To stay ahead of ___, we offered ___."] },

    { key:"innovation", letter:"I", title:"Initiative",
      job:"Show the testing, not just the idea.",
      guide:"Innovation here is almost never invention. It is combining, testing and improving something that already exists. Reach for “we changed…”, and attach what made you change it.",
      warn:"We had a really original idea.",
      warnWhy:"Calling it original is not showing initiative. What did you try, and what did you change afterwards?",
      stems:["We tested ___, ___ and ___.",
             "We changed our plan based on ___.",
             "We kept improving it with ___."] },

    { key:"decisions", letter:"D", title:"Decisions",
      job:"Weigh the costs against the benefits, and say what the decision caused.",
      guide:"Numbers do the work: $0 against $15, two visits saved, $160 a term. Higher up, add the effect you did not intend.",
      warn:"We chose the cheaper option.",
      warnWhy:"Cheaper than what, by how much, and what did choosing it cost you?",
      stems:["___ cost ___, but ___.",
             "We considered ___ but rejected it because ___.",
             "We weighed ___ against costs like ___."] },

  ]
};

const VERBS = {
  use: [
    { w:"identifies", note:"points at it" },
    { w:"describes",  note:"adds detail" },
    { w:"compares",   note:"sets two things side by side" },
    { w:"explains",   note:"gives a reason" },
    { w:"affects",    note:"names a consequence" },
    { w:"reduces",    note:"names a measurable change" },
    { w:"evaluates",  note:"weighs it up" },
    { w:"weighs",     note:"weighs it up" },
    { w:"justifies",  note:"gives grounds, usually with numbers" },
    { w:"calculates", note:"gives grounds, usually with numbers" },
    { w:"adjusts",    note:"changes the plan on evidence" }
  ],
  avoid: [
    { w:"it was good",      why:"good for whom, measured how?" },
    { w:"we worked hard",   why:"effort is not evidence of a business decision." },
    { w:"everyone helped",  why:"hides your own contribution, which is what the criterion asks for." },
    { w:"a lot / heaps",    why:"replace with the number you actually recorded." }
  ]
};

const BUILD = {
  intro: "The wall is empty. Each round you answer fills part of it in. Nothing is locked — you can leave a round and come back.",
  stages: [
    { id:"phrase", title:"Which criterion does this phrase prove?", short:"Phrases",
      teach:"Every marked phrase on the wall is marked because it <b>proves one criterion</b>. The unmarked words around it are the glue that holds the sentence together.<br><br>Ask: <i>what is this phrase doing?</i> Naming what the business does is not the same as weighing what a decision cost. Having an idea is not the same as testing one.",
      reteach:"Slow it down. Read the phrase on its own, without the sentence around it, and ask what job it does:<ul><li>Does it say <b>what the business is for</b> or what makes it work? → Business success.</li><li>Does it show something being <b>tried, tested or changed</b>? → Innovation &amp; entrepreneurship.</li><li>Does it give a <b>cost, a benefit or a consequence</b>? → Business decisions.</li></ul>" },

    { id:"descriptor", title:"Which row does this descriptor belong in?", short:"Rows",
      teach:"Under the worked examples, the wall has one row per criterion. Each row runs left to right through the levels.<br><br>These are the descriptors from that grid. Put each one back in its row.",
      reteach:"The verb at the start is usually the giveaway for the level, not the row. For the <b>row</b>, look at what the sentence is about: what the business is for, what got tested and changed, what a decision cost and gained, or how you worked." },

    { id:"level", title:"Which level is this descriptor?", short:"Levels",
      teach:"Read across a row and the same skill gets harder every twelve months. The verb carries most of that change: <i>identify</i> sits low, <i>outline</i> and <i>describe</i> in the middle, <i>explain</i>, <i>evaluate</i> and <i>justify</i> higher up.",
      reteach:"Line the verbs up in your head, easiest to hardest: identify → outline → describe → explain → evaluate → justify. Then find where this descriptor's verb sits." },

    { id:"order", title:"Put the answer in order", short:"Order",
      teach:"The finished answer runs in the same order as the wall reads downwards. Drag or tap the sentences into that order.",
      reteach:"Follow the frame: say what the business is for, then what you tested and changed, then what the decision cost and gained, and last what you did and would change." }
  ],
  done: "The wall is complete. Everything in it came out of your answers."
};
