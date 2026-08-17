# Read this first

Rules for anyone building teaching resources in this repository, human or model.
Every rule below is here because it was got wrong once. The example that
produced it is attached, because the example is the part that transfers.

## The walls

### 1. The wall teaches the skill. The CAT tests it. They do not share a source.

A WAGOLL wall models better thinking on a source the student will not be
assessed on. The CAT then asks for the same thinking on material they have not
seen.

Ancient Australia does this correctly. The wall is built on GS73, a grinding
stone from Madjedbebe. CAT 1 tests source analysis on a woomera, an eel trap, a
boomerang and a Joseph Lycett painting. GS73 appears nowhere in that CAT. A
student who has worked the wall has rehearsed origin, context, evidence and
usefulness, and still has to think for themselves on the day.

Ancient China is the standing example of the failure. Its wall is built on Task 3
of the assessment booklet, on the same painting and the same Peter Bol interview
the students are marked on, and its `TASK_MAP` points each row at real CAT
question numbers. It hands out the answers. It needs rebuilding on a rehearsal
source the booklet does not use.

Before you build a wall, ask whether its source appears in the CAT. If it does,
choose another source.

### 2. Every row is a way of thinking, not a way of presenting.

Rome's CAT rubric marks four things: chronology, cause and effect, metacognition
and presentation. The wall carries the first two and adds continuity and change
from Kew's Developmental Rubric. The other two are off it.

"I can present information creatively" teaches a student to improve their
formatting. Metacognition is about managing your own learning. Both can be worth
marking. Neither is a way of thinking about the past, and a wall that models them
is teaching PowerPoint.

The test for a row: does climbing it make the student's thinking better, or their
document tidier?

### 3. Quote rubric wording exactly.

A student is marked against the rubric's own sentence. `CONTINUUM` carries that
wording verbatim and the comment above it says so. Do not paraphrase it, tighten
it or improve it. If the wording is poor, say so and leave it alone.

### 4. Say when the curriculum is blank.

Economics has no innovation descriptor below Level 7, so that cell reads "Not on
the continuum until Level 7" rather than a descriptor written to fill the hole.
Geography's S04 and S05 do not exist below Levels 5 and 6, so the lower rungs
claim fewer codes than the upper ones.

Do not invent a descriptor, a code or a level to make a grid look complete.

### 5. Check a curriculum claim against the document before making it.

The Economics wall's five single levels are the school's own wording, not
Victorian Curriculum 2.0, which bands the subject 5 to 6, 7 to 8 and 9 to 10. The
wall was not rewritten, because changing the level structure changes the printed
A3 sheets and that is the teacher's call. The footer was corrected instead, and
now names the closest real descriptors.

Correct the claim rather than the artefact, unless you have been asked to rebuild
the artefact.

### 6. Measure rather than assert.

Whether one wall works and another does not was settled by counting. China's fact
load falls across the rungs (4, then +3, +3, +2) while Rome's rises (6, then +6,
+3, +7), and 67% of China's Level 8 example is grounded in its source against
Rome's 11%. Reading levels are tuned against per-rung Flesch-Kincaid targets, not
by feel.

If you claim a wall works, produce the number that says so.

## Writing

### 7. No em dashes. Anywhere.

Use a comma, a colon or a full stop. An en dash between two numbers in a range is
fine. This applies to code comments as much as to student-facing text.

### 8. Australian spelling.

organised, behaviour, prioritise, centre, modelled, colour, analyse.

### 9. Write like a teacher, not a content marketer.

Cut on sight:

- "not just X, but Y", and "it isn't X, it's Y"
- three-part flourishes built for rhythm rather than accuracy
- unlock, unleash, delve, elevate, seamless, robust, harness, empower, foster,
  tapestry, testament, navigate, realm, embark, leverage, holistic, myriad, journey
- micro-subheadings sitting over one-sentence paragraphs
- a closing sentence that restates what the paragraph just said

Name the specific thing. Attach a number where one exists. Let a short flat
sentence carry the weight.

## Structure and generated files

### 10. One file holds the words.

`content.js` in a topic folder is the only place that topic's wall text lives.
`tools/build_index_pages.py` is the only place the navigation lives. Edit the
source and regenerate. Never hand-edit a generated `index.html` or a
`*-standalone.html`, because the next regeneration silently discards it.

After editing a `content.js` or a `bump-it-up.html`:

```
python3 tools/build_index_pages.py
python3 tools/build_standalone.py <topic>/bump-it-up.html
```

The workflow fails the build if an index page differs from what the generator
produces.

### 11. Arrays paired by position must be spliced together.

`KID.lines` maps to `CRITERIA` by index. Removing a criterion through
`HIDDEN_CRITERIA` without removing its matching "I can" line shifts every caption
below it onto the wrong row. That bug shipped once. Withdraw a criterion and you
splice both arrays at the same index.

### 12. Never change a unit's `path`.

`path` is the localStorage key holding a student's saved progress. Civics moved
from Year 7 to Year 8 and its path still reads
`year-7/humanities-civics/civics`, because renaming it would wipe the progress of
every student who had used it. A label that is slightly wrong beats data loss.

### 13. Two channels for every signal.

Each criterion carries a colour and an underline pattern, plus a glyph in the
explanation band. A wall has to survive a greyscale photocopy and a colour-blind
reader. Contrast stays above 4.5:1.

## Publishing

### 14. Check copyright and privacy before every public push.

This repository is public and live. The private `Year-7-Humanities` repository
holds curriculum documents, assessment booklets, source packs and planning. None
of that crosses over.

An image inside a teacher-compiled booklet is not cleared for publication by
virtue of sitting in the booklet. Find the original, confirm it is public domain
or licensed, and cite it. GS73 is CC BY 4.0 and carries its attribution, with no
commercial use without Mirarr consent.

### 15. No student or staff personal information.

No names, emails, IDs, marks, class lists or support notes. No accounts, no
analytics, no trackers. Student progress stays in `localStorage` in the browser.

### 16. Verify the deploy rather than assuming it.

The site is published by the `Check and publish` workflow in
`.github/workflows/check.yml`, and Settings > Pages > Source must stay on
**GitHub Actions**. It has been switched to a branch before, which quietly served
a stale snapshot while every push to `main` deployed nothing visible. After
pushing, confirm the run went green and its commit matches yours.

## Working method

### 17. Do the task that was asked.

Not the adjacent one that looks more interesting. If you find a real problem
somewhere else, name it and finish the asked task first.

### 18. Do not invent curriculum content unprompted.

If a topic has no glossary, report that it has no glossary. Writing one and
shipping it quietly puts words in front of students that no teacher chose.
