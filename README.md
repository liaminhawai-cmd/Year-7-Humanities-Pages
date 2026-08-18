# Year 7 Humanities: the live site

**[Open the site →](https://liaminhawai-cmd.github.io/Year-7-Humanities-Pages/)**

The public half of the Year 7 Humanities work. Same split as `ELC` and
`ELC-Pages`: teacher context lives in the private
**[Year-7-Humanities](https://github.com/liaminhawai-cmd/Year-7-Humanities)**
repository, and only student-facing runtime files live here.

## Shape

```
index.html            four areas
├── civics/           (nothing built yet)
├── history/          batman · vesuvius · china · gs73 · egypt
├── geography/        water · landforms
├── economics/        pigeon-patrol
├── vocab/            word hubs and trainers
└── print/            PDFs, Word walls, the student booklet
```

Landing page → subject → topic → resources. Every level has an `index.html`, and
every one of those reads `assets/hub.css`, so they cannot drift apart in style.

## One file holds the words

Each topic folder holds a single `content.js` with every word of that topic's
wall. The pages in that folder read it, and so do the PDF, Word and standalone
builders in `tools/`. **Edit there and it changes everywhere at once.**

`eal.js` at the root holds the source-analysis vocabulary shared by every topic, twenty words with a definition and eighteen translations, and the same file
generates the Year 7 unit on the
[EAL Word Builder](https://liaminhawai-cmd.github.io/EAL-Vocabulary-Site/):

```
python3 tools/build_vocab_entries.py ../eal-vocabulary-site
```

So a word cannot mean one thing on a wall and another in the Word Builder.

## Rebuilding

```
npm i playwright                              # once
node history/gs73/build-pdf.mjs               # A2 wall, A3 sheets, source sheet
node history/batman/build-pdf.mjs             # two A2 wall sheets, A3 level sheets
node economics/pigeon-patrol/build-pdf.mjs    # A3 wall, A3 sheets
node geography/water/make-figure.mjs          # redraw the water figure
node print/booklet/build-booklet.mjs          # the A5 student booklet

pip install python-docx
python3 tools/build_docx.py                   # editable Word walls, every topic in SUBJECTS
python3 tools/build_standalone.py history/gs73/bump-it-up.html   # …and the rest
```

Every builder measures its output against the paper before writing it and fails
with the overshoot in millimetres rather than letting a sheet quietly grow onto
a second page.

## What came from where

This repository consolidates five that came before it. Nothing was deleted; the
old ones are retired with a pointer here.

| Was in | Now at |
|---|---|
| `Year-7-History` | `history/gs73`, `history/egypt`, `history/vesuvius` |
| `Year-7-Geography` | `geography/water` |
| `Year-7-Economics` | `economics/pigeon-patrol` |
| `Water-in-the-world` | `geography/landforms`, `vocab/` |
| `ELC/interactive/humanities` | `geography/landforms`, `vocab/` |

**Two files are marked "alt version"** in `geography/landforms/`. Wattle Bay and
the mine planner each existed twice, under different names in different
repositories, and it is not clear which is current. Both are kept until someone
says which to retire.

## House rules

1. **No student or staff names**, in content, code, commit messages or file
   metadata.
2. **Nothing is collected.** No accounts, no tracking, no analytics.
   `localStorage` only, and the pages say so.
3. **No gates.** Nothing is locked behind finishing something else, teachers
   jump around mid-lesson.
4. **No filler.** No points, badges or streaks. If a line does not teach,
   instruct, or report a real state, it should not be there.
5. **Two signals per criterion.** Colour *and* an underline pattern, plus a glyph
   in the explanation bands. Colour alone does not survive a photocopy and is
   not reliable for colour-blind students.
6. **Translations are labelled.** The EAL translations are machine-drafted and
   say so wherever they appear.

## Curriculum

`CURRICULUM-CHECK.md` records how the walls line up against Kew High's own
learning continuum and against Victorian Curriculum 2.0, including where the
two disagree, and the one row of Kew's continuum the History wall is still
missing.

## Source notices

Three folders in `history/` carry a source image, and each has a
`SOURCE-NOTICE.md` beside it saying what is settled about that image and what is
not. Read the notice before reusing a plate anywhere, and especially before
print.

- `history/batman/`: the Burtt painting is out of copyright; the State Library
  of Victoria's terms on this reproduction are not yet confirmed, and **the
  framing of that wall has not been checked with the Wurundjeri Woi Wurrung
  Cultural Heritage Aboriginal Corporation.** That item is open and is named on
  the topic page.
- `history/china/`: the booklet does not record the painting's artist, date or
  holding collection, so the page dates it no more precisely than the evidence
  allows.
- `history/gs73/`: below.

## GS73 and Mirarr Country

The source images in `history/gs73/` come from Figure 3 of Hayes, E. H. et al.
(2022), *Scientific Reports* 12, 11747: open access under CC BY 4.0. The
research was conducted with permission from the custodians of Madjedbebe, May
Nango and Djaykuk Djandjomerr, and Mirarr Senior Traditional Owner Yvonne
Margarula, with Gundjeihmi Aboriginal Corporation facilitating the work. The
images were published for general educational purposes; **no commercial use is
authorised without prior Mirarr consent.** Full details in
`history/gs73/SOURCE-NOTICE.md`. Keep that attribution on the wall itself, at a
readable size.
