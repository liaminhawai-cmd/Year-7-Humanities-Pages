# Curriculum check — the wall against Kew's continuum against VC 2.0

Checked 14 August 2026 against:

- `learning-continuum-master.xlsx`, sheet **The Humanities**, rows 19–23 (Kew High School)
- **Victorian Curriculum 2.0 History, Foundation to Level 10** scope and sequence,
  sub-strand *Using historical sources*

Three things were checked, and they have three different answers.

---

## 1. Is the wall accurate to Kew's continuum?

**Yes. Every rung is transcribed correctly, level for level.**

The Year 7–10 wording on this wall is not invented and is not paraphrased. It is
Kew's continuum verbatim, with `Year N` on the wall matching `Level N` in the
spreadsheet:

| Wall row | Wall Year 7 | Kew Level 7 |
|---|---|---|
| Origin, features & purpose | identify the origin, content features and purpose | ✅ identical |
| Historical context | outline the historical context of a source | ✅ identical |
| Historical interpretations | describe different historical interpretations of the past | ✅ identical |
| Accuracy, usefulness & reliability | draw conclusions about the usefulness of sources | ✅ identical |

The same holds at Years 6, 8, 9 and 10. Grade 5 is a bridging column written for
this wall — Kew's History continuum starts at Level 6, so there is nothing to
transcribe there, and that column is ours.

## 2. Is Kew's continuum accurate to the Victorian Curriculum?

**Mostly, but it runs about one level behind through the middle of the ladder,
and it converges again by Level 10.**

VC 2.0 bands History two years at a time, so Level 8 is the *exit* of the
Levels 7–8 band and should carry that band's verb. For three of the five rows it
does not:

| Row | Kew Level 8 | VC Levels 7–8 | Gap |
|---|---|---|---|
| Origin, features & purpose | **describe** the origin, content features and purpose | **explain** the features, content and context (VC2HH8S03) | one verb low |
| Historical interpretations | **explain** different interpretations and contested debates | **analyse** historical interpretations and debates (VC2HH8S06) | one verb low |
| Accuracy, usefulness & reliability | **compare and contrast** sources and **ask questions** about accuracy | **analyse the value of sources for use as evidence** to explain significance, continuity and change, and causes and consequences (VC2HH8S04) | one verb low, and narrower |
| Historical perspectives | **explain** different points of view in primary sources | **explain** the perspectives, beliefs, values and attitudes (VC2HH8S05) | ✅ matched |
| Historical context | describe the historical context of sources | (VC folds context into VC2HH8S03) | not separable |

Kew's **Level 9** wording is what VC asks for at **Levels 7–8**. By Level 10 the
two line up again: Kew's "analyse the origin, explicit and implicit meaning, and
purpose" sits against VC2HH10S03 "analyse the purpose, features, content and
context", and Kew's "evaluate different historical interpretations" sits against
VC2HH10S06 "evaluate historical interpretations and debates".

The one row that stays behind at Level 10 is accuracy and usefulness: Kew asks
students to **analyse** accuracy and reliability where VC2HH10S04 asks them to
**evaluate** the value of sources as evidence. Kew's Level 11 column does say
"evaluate", so the school ladder reaches it a year later.

**The narrowing is worth more attention than the verb.** VC2HH8S04 and
VC2HH10S04 are not about accuracy in the abstract — they ask what a source is
worth *for explaining historical significance, continuity and change, and causes
and consequences*. Kew's row asks about accuracy, usefulness and reliability
without tying them to anything. A student can satisfy Kew's row and still not
have done what the curriculum descriptor asks.

## 3. What is missing from the wall?

**Kew's continuum has five source-analysis rows. This wall has four.**

| Kew row | On the wall? |
|---|---|
| Origin, features and purpose of sources | ✅ |
| Historical context | ✅ |
| **Historical perspectives (primary sources)** | ❌ **missing** |
| Historical interpretations (secondary sources) | ✅ |
| Accuracy, usefulness and reliability | ✅ |

The perspectives row — "I can identify / describe / explain / compare / analyse
different points of view in primary sources" — is the one VC codes as S05, and
it is the only one of the five with no colour, no underline pattern and no
column on the wall.

At the top rungs the wall's **Historical context** row is quietly doing this
work already. The Year 10 GS73 example marks "testing claims, seeking
permission, and stating honestly how certain they are" in the context colour,
and that is a statement about values, not about context. The same happens in the
Egypt and Vesuvius units.

**This is the one substantive change still to make.** Adding it means a fifth
criterion — a fifth colour, a fifth underline pattern, a fifth glyph — and
re-marking twenty-four worked examples across the three units. It is a
deliberate decision, not a tidy-up, so it has not been made unilaterally.

---

## What changed as a result of this check

- Every rung now carries its real VC 2.0 descriptor and code, Foundation to
  Level 10. Before this check the wall carried codes to Level 6 only and
  described everything above it as "the school's own continuum" — which was
  true, but left the impression the school wording had no curriculum behind it.
- `VC_NOTE` now states that the wall shows two layers, and names the gap.
- The row wording itself is **unchanged**, because it was right.

## Where each layer lives

| Layer | In `content.js` | Shown by |
|---|---|---|
| Kew's continuum | `CONTINUUM` | the wall, the level sheets, the A2/A3 PDFs, the Word wall |
| Kew's continuum in student language | `KID` | the "I can…" box in `bump-it-up.html` |
| VC 2.0 descriptors and codes | `VC`, `VC_NOTE` | teacher-facing, alongside the above |
