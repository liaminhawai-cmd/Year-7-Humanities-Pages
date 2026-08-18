# Read this first

Rules for anyone building teaching resources in this repository, human or model.
Every rule below is here because it was got wrong once. The example that
produced it is attached, because the example is the part that transfers.

## What each repository is for

Three repositories, and work goes wrong when they are confused for each other.

- **`Year-7-Humanities-Pages`** (this one, public, live) is the student site. Runtime
  HTML, the walls, the vocab hubs, the simulations, reviewed student-facing data,
  the print masters that are already cleared for publication.
- **`Year-7-Humanities`** (private) is the source and decision record. Curriculum
  documents, assessment booklets, rubrics, unit notebooks, source packs, planning.
  None of it crosses over.
- **`EAL-Vocabulary-Site`** (public, live) is the Word Builder: spaced vocabulary
  practice in eighteen languages, across every year level, not only Humanities. It
  carries a generated copy of each topic's words, and it is a deployment repo, not
  a place to author content.

A CAT, a rubric or a booklet belongs in the private repository and nowhere else.
A word list belongs in this repository, with a generated copy in the Word Builder.

## The walls

### 1. The wall teaches the skill. The CAT tests it. They do not share a source.

A WAGOLL wall models better thinking on a source the student will not be
assessed on. The CAT then asks for the same thinking on material they have not
seen.

Ancient Australia does this correctly, and has done it twice. CAT 1 tests source
analysis on a woomera, an eel trap, a boomerang and a Joseph Lycett painting. The
wall taught from is now Batman's Treaty: Burtt's painting of the meeting at Merri
Creek and Governor Bourke's Proclamation, neither of which is in that CAT. The
GS73 wall it replaced cleared the same bar, on a grinding stone from Madjedbebe.
Either way a student who has worked the wall has rehearsed origin, context,
evidence and usefulness, and still has to think for themselves on the day.

Ancient China is the standing example of the failure. Its wall is built on Task 3
of the assessment booklet, and models the thinking on the same painting and the
same Peter Bol interview the students are marked on. It hands out the answers, and
it needs rebuilding on a rehearsal source the booklet does not use.

That got worse before it gets better. In August 2026 the painting was put on the
page as a picture rather than as a line of text describing it, because a student
cannot describe the features of a source they have not been shown. It is the
right fix for the source panel and the wrong source to be showing, and the two
are separate jobs: keep the picture, move the wall onto a painting the booklet
does not mark.

Its `TASK_MAP` is not the problem. The booklet's rubric itself names the task and
question numbers against each row, "Task 1, Source 1: Q1-3", so the wall is
quoting the rubric rather than leaking anything. Keep it when the wall is rebuilt:
it is how a student finds the row they are marked on.

Before you build a wall, ask whether its source appears in the CAT. If it does,
choose another source.

### 2. The wall carries the CAT's key skills. Not the topic.

A wall is not a map of the discipline. It is a rehearsal of the two, three or four
things this CAT actually marks, at every level from Foundation to Year 10. Each
extra row costs a colour, an underline pattern, a glyph, a rubric line and a
marked phrase in six worked examples, so a row that is not being assessed makes
the assessed ones harder to see.

The rubric sets the ceiling, and the rubric is a document you can open.
`context/UNIT-SKILL-MAP.md` in the private repository names the assessed and
repeatedly practised skills for every Year 7 unit. Start there, open the rubric it
points to, and carry what that rubric weights.

Where the walls sit now:

| Wall | Rows | Against its rubric |
|---|---|---|
| Ancient Australia (Batman) | 4 | CAT 1's four, on two sources that disagree. |
| GS73 | 4 | The same four, archived. Metacognition is written and withdrawn. |
| Ancient Rome (Vesuvius) | 4 | Not CAT 2's rubric at all: Rome's CAT is a guidebook and marks no source analysis. This wall carries the source-analysis four, as a source for the unit rather than a model of its task. |
| Ancient Egypt | 4 | The same four, archived. |
| Water in the World | 4 | Geographical inquiry, not source analysis. |
| Pigeon Patrol | 3 | Business success, innovation, decisions. |
| Ancient China | 6 | Its rubric's own six, and they are numbered in the rubric itself. |

A wall built for CAT 2 existed and was deleted in August 2026: three rows,
chronology and cause and effect from the CAT rubric plus continuity and change
from Kew's Developmental Rubric. It is in the git history if the guidebook task
needs a wall again.

Three or four rows is the working shape and six is the practical ceiling. Ancient
China reaches it legitimately: its booklet rubric really does run five numbered
rows plus significance, so the wall is not over-scoped, it is carrying a wide
rubric. If you meet another one, prefer a second wall over a wider one, and say in
the topic note which CAT each rehearses.

The failure this rule guards against is the other direction: a row added because
it is part of history, or part of geography, rather than because this rubric marks
it. Wanting a skill taught is not evidence that this CAT marks it. Rome is the
model, it dropped two rows the rubric does have, because neither was a way of
thinking about the past. If it is not in the rubric, it does not get a row, and if
it is in the rubric but is really about formatting, it still does not.

### 3. Every row is a way of thinking, not a way of presenting.

Rome's CAT rubric marks four things: chronology, cause and effect, metacognition
and presentation. The wall built on it carried the first two and added continuity
and change from Kew's Developmental Rubric. The other two were deliberately left
off. That wall has since been deleted, but the decision is the clearest example
on the site of this rule being applied, which is why it is still written here.

"I can present information creatively" teaches a student to improve their
formatting. Metacognition is about managing your own learning. Both can be worth
marking. Neither is a way of thinking about the past, and a wall that models them
is teaching PowerPoint.

The test for a row: does climbing it make the student's thinking better, or their
document tidier?

### 4. Quote rubric wording exactly.

A student is marked against the rubric's own sentence. `CONTINUUM` carries that
wording verbatim and the comment above it says so. Do not paraphrase it, tighten
it or improve it. If the wording is poor, say so and leave it alone.

### 5. Say when the curriculum is blank.

Economics has no innovation descriptor below Level 7, so that cell reads "Not on
the continuum until Level 7" rather than a descriptor written to fill the hole.
Geography's S04 and S05 do not exist below Levels 5 and 6, so the lower rungs
claim fewer codes than the upper ones.

Do not invent a descriptor, a code or a level to make a grid look complete.

### 6. Check a curriculum claim against the document before making it.

The Economics wall's five single levels are the school's own wording, not
Victorian Curriculum 2.0, which bands the subject 5 to 6, 7 to 8 and 9 to 10. The
wall was not rewritten, because changing the level structure changes the printed
A3 sheets and that is the teacher's call. The footer was corrected instead, and
now names the closest real descriptors.

Correct the claim rather than the artefact, unless you have been asked to rebuild
the artefact.

### 7. Measure rather than assert.

Whether one wall works and another does not was settled by counting. China's fact
load falls across the rungs (4, then +3, +3, +2) while Rome's rises (6, then +6,
+3, +7), and 67% of China's Level 8 example is grounded in its source against
Rome's 11%. Reading levels are tuned against per-rung Flesch-Kincaid targets, not
by feel.

If you claim a wall works, produce the number that says so.

## Vocabulary

### 8. Every topic's vocab hub is the Water in the World build.

`geography/water/water-vocab-hub.html` is the format. It is not one long word
list. It is:

- the words split into the unit's own lessons, 1.1 to 3.2, six per lesson
- a morpheme bank per lesson, with the word built from tiles against plausible
  decoys, not typed into a box
- base-camp and stretch tiers inside each lesson, so one page carries the range
- a warm-up that reviews earlier lessons before the new ones
- meaning, example sentence, root and translation on every word
- a printable report at the end

The five history hubs are not this yet. Each is a 2 KB page over
`assets/vocab-hub.js`, giving one flat alphabetical list in meet, build and recall
modes, with no lesson split, no tiers, no review and no report. That is the thing
to converge on the water build, not the other way round.

The morpheme bank is the part that has been brought across. The build stage used
to print the word above its own two tiles, so the answer was in the question and
the task was to tap in order. It now shows the meaning only, and puts one shared
bank above the whole board, deduped and grouped prefix, root and suffix, with
three decoys drawn from real morphemes elsewhere in the topic. A word leaves the
board once it is built correctly. Words with nothing to cut up fall through to a
meaning-match round rather than being faked into tiles.

Still missing against the water build: the lesson split, the tiers, the warm-up
review, an example sentence per word, and the report.

Splitting a topic's words across its lessons is a curriculum decision. Bring the
lesson breakdown, then build. Do not allocate words to lessons by guessing.

### 9. The same words, in both places, generated once, linked both ways.

`eal.js` holds the words. `tools/build_vocab_entries.py` reads it and writes the
unit into the Word Builder's `data/vocab.json`. Nothing is typed twice, and the
two sites cannot drift apart because there is only one source.

Both directions carry a link, and the link goes to the topic, not the subject:

- the Word Builder folder for a topic carries `sourceUrl` back to that topic's hub
- the topic's `index.html` carries a card out to that Word Builder folder,
  generated from `build_index_pages.py`, never hand-written

Water in the World is the model here too: nine lesson units in the Word Builder,
matching the nine lessons in the hub, six words each.

## Writing

### 10. No em dashes. Anywhere.

Use a comma, a colon or a full stop. An en dash between two numbers in a range is
fine. This applies to code comments as much as to student-facing text.

### 11. Australian spelling.

organised, behaviour, prioritise, centre, modelled, colour, analyse.

### 12. Write like a teacher, not a content marketer.

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

### 13. One file holds the words.

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

`bump-it-up.html` is not one of the generated files, and it is not unique per
topic either: `gs73`, `china`, `egypt`, `vesuvius` and `batman` each carry their
own copy. A fix to the shared machinery, the translate popup, the zoom viewer,
the source panel, the rubric pane, is a fix that has to be pasted into every copy
or the topics silently drift apart. When you make one, patch every copy in the
same change, verify the diff is identical across files before you write it, and
say in the commit which files got it. There is no generator for this file yet;
until there is, treat "the same edit in five places" as the job, not a shortcut
you can take on one file and forget.

The five copies are not identical, and it is worth knowing on which axis they
differ before you patch. The **source panel** is now the same in all five: a
`SOURCES` list, a tab per source, and a fallback that wraps an older single
`SOURCE_PANEL` into a one-item list, so a wall with one source renders exactly as
it did. What still differs is the **rubric pane**: `china`, `egypt` and
`vesuvius` show the school continuum with the Victorian Curriculum codes and the
`KID` band underneath, and `gs73` and `batman` show the continuum alone. That is
a real difference in what those walls are for, not drift, but check which side
you are on before you edit that function.

### 14. `level-sheets.html` is shared machinery too; `wagoll-wall.html` is not.

`level-sheets.html` reads nothing but `WALL`, `CRITERIA`, `LEVELS`, `EXAMPLES`,
`EXPLANATIONS` and `CONTINUUM` from `content.js`. Copy it into a new topic folder,
change the `<title>`, and it renders that topic's own anchor sheets, because the
CSS already carries colour variables for every criterion key in use across the
site (`source`/`context`/`evidence`/`judge` and `success`/`innovation`/
`decisions`). Confirm the new topic's `CRITERIA` keys already have colours
defined before assuming this; add them if not.

`wagoll-wall.html` is not this simple. It hand-codes the source band, one
`<img>` or one text panel, wired to that topic's own file name and citation. A
topic with two sources that disagree, like Batman's Treaty, needs two full
sheets rather than one, each self-contained (own masthead, own source, own full
continuum table) so either can be pinned up alone, because the worked examples
compare the two sources inside a single paragraph rather than splitting cleanly
by source. Build it by adapting the closest existing `wagoll-wall.html`, not by
assuming the file is generic.

`build-pdf.mjs` is per topic, not shared: each one names its own jobs, its own
paper sizes, and its own `expect` page count. Batman's carries `expect: 2` for
the wall because it renders two sheets; every other topic's wall job expects 1.
The fit check fails loudly if that number is wrong, so trust it over guessing.

`tools/build_docx.py` takes a `SUBJECTS` registry, not a folder name: a topic's
`content.js` path differs from where the finished `.docx` lands (`print/`, not
the topic folder), and the version of this script that predates the topic-folder
split conflated the two, so running it for "history" silently failed once GS73
moved into `history/gs73/`. Add a topic to `SUBJECTS` when you give it a wall; do
not reintroduce the folder-name shortcut.

### 15. Arrays paired by position must be spliced together.

`KID.lines` maps to `CRITERIA` by index. Removing a criterion through
`HIDDEN_CRITERIA` without removing its matching "I can" line shifts every caption
below it onto the wrong row. That bug shipped once. Withdraw a criterion and you
splice both arrays at the same index.

### 16. Withdraw a criterion, do not delete it.

Metacognition is fully written into `history/gs73/content.js`: a continuum row, an
explanation at every level, a marked phrase in all six worked examples. It is off
the wall because it is not being assessed, not because the work was wrong.

`HIDDEN_CRITERIA = ["meta"]` does the withdrawal in one place, and all seven pages
that read the file agree without any of them knowing about it. It drops the row,
unwraps `{meta|phrase}` so the reflection still reads as prose, and strips the
`<!--meta--> … <!--/meta-->` teaching text that only makes sense when the
criterion is marked. Emptying the list brings it back.

Use that mechanism. Deleting the text loses six levels of authored examples that
the next rubric change may want, and leaves nothing to bring back.

### 17. Never change a unit's `path`.

`path` is the localStorage key holding a student's saved progress. Civics moved
from Year 7 to Year 8 and its path still reads
`year-7/humanities-civics/civics`, because renaming it would wipe the progress of
every student who had used it. A label that is slightly wrong beats data loss.

### 18. Two channels for every signal.

Each criterion carries a colour and an underline pattern, plus a glyph in the
explanation band. A wall has to survive a greyscale photocopy and a colour-blind
reader. Contrast stays above 4.5:1.

## Publishing

### 19. Check copyright and privacy before every public push.

This repository is public and live. The private `Year-7-Humanities` repository
holds curriculum documents, assessment booklets, source packs and planning. None
of that crosses over.

An image inside a teacher-compiled booklet is not cleared for publication by
virtue of sitting in the booklet. Find the original, confirm it is public domain
or licensed, and cite it. GS73 is CC BY 4.0 and carries its attribution, with no
commercial use without Mirarr consent.

### 20. No student or staff personal information.

No names, emails, IDs, marks, class lists or support notes. No accounts, no
analytics, no trackers. Student progress stays in `localStorage` in the browser.

### 21. A push to `main` is a publication. Draft on a branch.

There is no staging site. `.github/workflows/check.yml` fires on every push to
`main` and deploys, so merging is publishing, in front of students, immediately.

So a resource that is not ready does not go on `main`. It goes on a branch, and
it stays there until the things that are open have actually been closed. While it
is a draft:

- do not add it to `SITE` in `tools/build_index_pages.py`, because that is what
  puts a card on a page a student can reach
- say what is unfinished at the top of its `content.js`, not only in the commit
  message, because the next person opens the file and not the log
- state it in the topic note too, the way the Vesuvius and China notes do:
  "**Draft.** Written and levelled but not yet taught."

Three separate green lights, and they are not the same conversation: the wording
is right, then the page may go up as a draft, then it may go into the navigation.
Do not treat approval of one as approval of the next.

The Batman wall was the worked example, and in August 2026 it went the rest of
the way: it is now History 1, Ancient Australia, in the site map and on the page
a student reaches. That was a teacher's decision, made knowing the third light
had not been given.

**Its cultural-consultation item is still open.** The framing has not been
checked with the Wurundjeri Woi Wurrung Cultural Heritage Aboriginal
Corporation. Publishing did not close it; it moved it into public view, which is
why the item is now stated on the topic page and in
`history/batman/SOURCE-NOTICE.md` rather than only in a comment. Do not quietly
drop that paragraph because the page looks finished, and expect the wording to
change when the consultation happens.

### 22. Verify the deploy rather than assuming it.

The site is published by the `Check and publish` workflow in
`.github/workflows/check.yml`, and Settings > Pages > Source must stay on
**GitHub Actions**. It has been switched to a branch before, which quietly served
a stale snapshot while every push to `main` deployed nothing visible. After
pushing, confirm the run went green and its commit matches yours.

## Working method

### 23. One branch, folded back in.

Six stale branches sat across the three repositories in August 2026, and not one
held a commit that was not already in `main`. They were leftovers. Four of them,
in `Year-7-Humanities`, pointed at the same commit as each other, because a
workflow force-pushed one orphan commit over all four branch names every time it
ran. The effect was that superseded work looked as though it were live somewhere
unmerged, which is expensive to check and impossible to trust.

Work on the branch you were given, push it, get it into `main`, then delete the
branch. Do not leave one behind as a record of anything, `main` is the record.

Deleting a branch is a thing to do from the GitHub UI or a local clone. The
sandbox these sessions run in can push new refs but not delete them, the proxy
returns 403, so a model cannot tidy this up for you and should say so plainly
rather than report a deletion that did not happen.

### 24. Do the task that was asked.

Not the adjacent one that looks more interesting. If you find a real problem
somewhere else, name it and finish the asked task first.

### 25. Do not invent curriculum content unprompted.

If a topic has no glossary, report that it has no glossary. Writing one and
shipping it quietly puts words in front of students that no teacher chose.
