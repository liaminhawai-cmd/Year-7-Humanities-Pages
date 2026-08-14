#!/usr/bin/env python3
"""Builds every index page on the site from the one site map below.

    python3 tools/build_index_pages.py

The landing page, the four subject pages and the topic pages are all generated
from SITE. Nothing about the navigation is typed twice, so a resource cannot
appear on one page and be missing from another, and moving something is one
edit here rather than a hunt through nine files.

Content pages — the walls, the bump-it-ups, the simulations — are NOT generated.
They are self-contained and this script never touches them.

Rule of thumb for where a thing goes: a resource lives on the page for the
smallest thing it belongs to. Vocabulary that serves one topic sits on that
topic; nothing sits on the landing page except the four areas and the print
pack, because everything else belongs to something more specific.
"""
import html
import pathlib

WORD_BUILDER = "https://liaminhawai-cmd.github.io/EAL-Vocabulary-Site/"

FOOT = ("Year 7 Humanities &middot; Kew High School. Nothing on this site collects "
        "anything: no accounts, no tracking, no analytics.")

# Shared card sets ---------------------------------------------------------
def wagoll(full, screen, single):
    cards = [
        ("&#128250;", "Bump it up", "bump-it-up.html", screen, "big screen"),
        ("&#128190;", "Bump it up", "bump-it-up-standalone.html", single, "single file"),
    ]
    if full:
        cards += [
            ("&#128202;", "The wall", "wagoll-wall.html",
             "The whole continuum on one surface.", None),
            ("&#128196;", "Level sheets", "level-sheets.html",
             "One anchor sheet per level, ready to print.", None),
            ("&#9999;", "Mark the example", "interactive.html",
             "Mark it yourself, then compare with the model.", None),
            ("&#129521;", "Paragraph builder", "paragraph-builder.html",
             "One card per sentence, with PQE and TEEL stems.", None),
            ("&#127919;", "Build the wall", "build-the-wall.html",
             "Answer a round, fill in part of the wall.", None),
        ]
    return cards

SOURCE_WORDS = ("&#127760;", "The words you need", WORD_BUILDER,
                "Twenty source-analysis words in eighteen languages, on the Word "
                "Builder. The same words are tappable inside the tool above.", None)

# The site map -------------------------------------------------------------
SITE = [
 dict(path="index.html", cls="", depth=0, kicker="Kew High School",
      title="Year 7 Humanities",
      intro="Four subjects, the topics inside them, and every resource that goes with each one.",
      back=None,
      sections=[
        ("The four areas", None, [
          ("&#127963;", "Civics &amp; Citizenship", "civics/",
           "Government, democracy, law and citizenship. Nothing built yet.", "empty"),
          ("\U0001F3FA", "History", "history/",
           "Ancient Australia, Egypt and Rome &mdash; one source analysed at every level.", None),
          ("&#127759;", "Geography", "geography/",
           "Water in the World, and Landscapes &amp; Landforms.", None),
          ("&#128188;", "Economics &amp; Business", "economics/",
           "Pigeon Patrol: one student business at every level of the continuum.", None)]),
        ("To print", "walls, sheets and the student booklet", [
          ("&#128424;", "Print pack", "print/",
           "The A2 and A3 walls, the Word versions, and the A5 booklet.", None)]),
      ],
      note="<b>Everything here is a plain HTML file.</b> No login, no install, and no internet needed "
           "once a page has loaded. The single-file versions download and run from a USB stick.<br><br>"
           "<b>The words for each topic sit with that topic</b>, not in a pile at the front &mdash; "
           "Water in the World has its own vocab hub, History has its own word list, and both also "
           "appear on the <a href=\"" + WORD_BUILDER + "\">EAL Word Builder</a>.<br><br>"
           "<b>Teacher context</b> &mdash; curriculum documents, source files, planning &mdash; lives in "
           "the private <b>Year-7-Humanities</b> repository, not here."),

 # ---------------- Civics ----------------
 dict(path="civics/index.html", cls="civics", depth=1, kicker="Year 7 Humanities",
      title="Civics &amp; Citizenship",
      intro="Nothing has been built for Civics yet. The curriculum is checked and the shelf is ready for it.",
      back=("../", "All four areas"),
      sections=[("Topics", None, [
          ("&#128499;", "Government &amp; democracy", "#", "Ready to build.", "not built"),
          ("&#9878;", "Laws &amp; citizens", "#", "Ready to build.", "not built")])],
      note="The Victorian Curriculum 2.0 Civics and Citizenship Levels 3&ndash;10 document has been "
           "checked and is in the private repository. Kew's own continuum already has Civics rows for "
           "Government, Democracy, Laws and Citizens, and Citizenship, Diversity and Identity."),

 # ---------------- History ----------------
 dict(path="history/index.html", cls="history", depth=1, kicker="Year 7 Humanities",
      title="History",
      intro="Three sources, three kinds of source. Each is answered at every level from Foundation to "
            "Year 10, with the evidence-bearing phrases marked.",
      back=("../", "All four areas"),
      sections=[("Topics", "the source type is the sequence", [
          ("&#129704;", "1 &middot; Ancient Australia", "gs73/",
           "GS73, a grinding stone from Madjedbebe. An excavated object with no author.", None),
          ("\U0001F3FA", "2 &middot; Ancient Egypt", "egypt/",
           "Herodotus on the Nile. A visitor writing much of it at second hand.", "draft"),
          ("&#127755;", "3 &middot; Ancient Rome", "vesuvius/",
           "Pliny on Vesuvius. A participant who did not see the part that matters most.", "draft")])],
      note="<b>The three source types are deliberate.</b> The questions you can ask of an object, of a "
           "visitor's report and of a participant's letter are different questions. Units 2 and 3 are "
           "drafts: written and levelled, but not yet taught.<br><br>"
           "The booklet and the word list are the same for all three topics, so they sit on each topic "
           "page rather than here."),

 dict(path="history/gs73/index.html", cls="history", depth=2, kicker="History &middot; Topic 1",
      title="Ancient Australia",
      intro="GS73, a broken grinding stone from Madjedbebe on Mirarr Country, and the long journey by "
            "which it became evidence.",
      back=("../", "History"),
      sections=[
        ("Resources", None, wagoll(True,
           "Foundation to Year 10, one rung at a time. Tap the rock, tap any phrase.",
           "The same page with the picture built in. Download to use offline.") + [
           ("&#129704;", "The source", "source-sheet.html",
            "What GS73 is, where it was found, and how it became evidence.", None)]),
        ("Words &amp; booklet", None, [
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>GS73 and Mirarr Country.</b> The source images come from Hayes et al. (2022), open access "
           "under CC BY 4.0, published with the consent of Gundjeihmi Aboriginal Corporation for general "
           "educational purposes. No commercial use is authorised without prior Mirarr consent. See "
           "<a href=\"SOURCE-NOTICE.md\">the source notice</a>."),

 dict(path="history/egypt/index.html", cls="history", depth=2, kicker="History &middot; Topic 2",
      title="Ancient Egypt",
      intro="Herodotus on the Nile, about 430 BCE. A Greek visitor explaining a country whose writing "
            "he could not read.",
      back=("../", "History"),
      sections=[
        ("Resources", None, wagoll(False,
           "Foundation to Year 10. Tap any part of the passage, tap any phrase.",
           "The same page with everything built in. Download to use offline.")),
        ("Words &amp; booklet", None, [
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>Draft.</b> The worked examples are written and levelled but have not been taught. There is "
           "no wall, level sheets or print pack for this unit yet."),

 dict(path="history/vesuvius/index.html", cls="history", depth=2, kicker="History &middot; Topic 3",
      title="Ancient Rome",
      intro="Pliny the Younger's letter to Tacitus on the eruption of Vesuvius, written twenty-five "
            "years after it happened.",
      back=("../", "History"),
      sections=[
        ("Resources", None, wagoll(False,
           "Foundation to Year 10. Tap any part of the letter, tap any phrase.",
           "The same page with everything built in. Download to use offline.")),
        ("Words &amp; booklet", None, [
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>Draft.</b> Written and levelled but not yet taught. The traditional 24 August date is "
           "disputed &mdash; an inscription found at Pompeii in 2018 points to autumn &mdash; and the "
           "wall treats that disagreement as part of what there is to analyse."),

 # ---------------- Geography ----------------
 dict(path="geography/index.html", cls="geography", depth=1, kicker="Year 7 Humanities",
      title="Geography",
      intro="Two topics: where the world's water is, and how landscapes are shaped and argued over.",
      back=("../", "All four areas"),
      sections=[("Topics", None, [
          ("&#128167;", "Water in the World", "water/",
           "Where the world's water actually is, and why a place can run short on a planet covered in it.",
           "draft"),
          ("&#9968;", "Landscapes &amp; Landforms", "landforms/",
           "Coasts, mountains and mining. Five simulations, plus the term flashcards.", None)])],
      note="<b>Curriculum:</b> checked against Victorian Curriculum 2.0 Geography F&ndash;10. Water in "
           "the World sits on VC2HG8K01, K03 and K04. Because the source figure is global and K03 is "
           "about <i>Australia's</i> water, that wall covers the scarcity half of the unit and not the "
           "Australian half.<br><br>The vocabulary for each topic sits on that topic's page."),

 dict(path="geography/water/index.html", cls="geography", depth=2,
      kicker="Geography &middot; Topic 1", title="Water in the World",
      intro="If the Earth is covered in water, how can anywhere run short of it?",
      back=("../", "Geography"),
      sections=[
        ("Resources", None, wagoll(False,
           "Foundation to Year 10, one rung at a time. Tap the figure, tap any phrase.",
           "The same page with the figure built in. Download to use offline.")),
        ("Words", "kept in this browser, nothing sent anywhere", [
           ("&#128167;", "Water vocab hub", "water-vocab-hub.html",
            "The full unit vocabulary, with your progress remembered.", None),
           ("&#129513;", "Natural resources morpheme trainer", "natural-resources-morpheme-trainer.html",
            "Build precipitation, erosion and the rest out of their parts.", None),
           ("&#127760;", "On the Word Builder", WORD_BUILDER,
            "The same words in eighteen languages, for EAL students.", None)]),
      ],
      note="<b>Draft.</b> Checked against Victorian Curriculum 2.0 Geography F&ndash;10; the unit sits on "
           "VC2HG8K01, K03 and K04. <b>The figure is a classroom redraw</b> of U.S. Geological Survey "
           "public-domain estimates &mdash; who made a display and why is half the source analysis."),

 dict(path="geography/landforms/index.html", cls="geography", depth=2, kicker="Geography &middot; Topic 2",
      title="Landscapes &amp; Landforms",
      intro="Simulations and decision tasks. Each is a single self-contained file &mdash; download it "
            "and it works offline.",
      back=("../", "Geography"),
      sections=[
        ("Coasts", None, [
          ("&#127754;", "Wattle Bay coastal manager", "wattle-bay-coastal-manager.html",
           "Manage a stretch of coast and live with the consequences.", None),
]),
        ("Mountains", None, [
          ("&#127956;", "Himalaya trek planner", "himalaya-trek-planner.html",
           "Plan a trek against altitude, weather and supplies.", None)]),
        ("Mining &amp; land use", None, [
          ("&#9935;", "Kestrel Range mine inquiry", "kestrel-range-mine-inquiry.html",
           "Should the mine be approved? Weigh the evidence and decide.", None)]),
        ("Words", None, [
          ("&#127183;", "Geography flashcards", "geography-flashcards.html",
           "Landform, glacier, sediment, discharge &mdash; term revision.", None)]),
      ],
      note="Every duplicate has now been resolved: Wattle Bay v14 and the two other mine-siting builds "
           "were retired on request, leaving one tool per task. They are all still in the git history if "
           "any is ever wanted back."),

 # ---------------- Economics ----------------
 dict(path="economics/index.html", cls="economics", depth=1, kicker="Year 7 Humanities",
      title="Economics &amp; Business",
      intro="One student business, written five times &mdash; once at each level of the continuum.",
      back=("../", "All four areas"),
      sections=[("Topics", None, [
          ("&#128038;", "Pigeon Patrol", "pigeon-patrol/",
           "A student service business that clears pigeons from school eating areas.", None)])],
      note="<b>Check before you teach it:</b> the row wording on this wall is the school's own, not "
           "Victorian Curriculum 2.0. That curriculum bands the subject 5&ndash;6, 7&ndash;8 and "
           "9&ndash;10 rather than by single level, and none of the row wording appears in it. The "
           "closest real descriptors are VC2HE8K01, K03, K04 and the skills S03 and S05."),

 dict(path="economics/pigeon-patrol/index.html", cls="economics", depth=2,
      kicker="Economics &middot; Topic 1", title="Pigeon Patrol",
      intro="One student service business, written five times &mdash; once at each level from Level 6 "
            "to Level 10.",
      back=("../", "Economics &amp; Business"),
      sections=[("Resources", None, [
          ("&#128202;", "The wall", "wagoll-wall.html", "The whole continuum on one surface.", None),
          ("&#128196;", "Level sheets", "level-sheets.html",
           "One anchor sheet per level, ready to print.", None),
          ("&#9999;", "Mark the example", "interactive.html",
           "Mark it yourself, then compare with the model.", None),
          ("&#129521;", "Paragraph builder", "paragraph-builder.html",
           "P &middot; I &middot; D &mdash; one card per sentence, with stems.", None),
          ("&#127919;", "Build the wall", "build-the-wall.html",
           "Answer a round, fill in part of the wall.", None)])],
      note="<b>Check before you teach it:</b> the row wording is the school's own, not Victorian "
           "Curriculum 2.0."),

 # ---------------- print ----------------
 dict(path="print/index.html", cls="", depth=1, kicker="Year 7 Humanities", title="Print pack",
      intro="Everything you print, pin up or hand out. Print at 100%, actual size, with background "
            "graphics on.",
      back=("../", "All four areas"),
      sections=[
        ("Student booklet", None, [
          ("&#128214;", "What is source analysis?", "What-is-source-analysis-A5.pdf",
           "9 A5 pages. Print 2-up on A4, short-edge binding, then fold.", None)]),
        ("History &mdash; Ancient Australia", None, [
          ("&#128202;", "The wall", "GS73-WAGOLL-Wall-A2.pdf",
           "A2 landscape, 1 page &mdash; the whole continuum.", None),
          ("&#128196;", "Level sheets", "GS73-Level-Sheets-A3.pdf",
           "A3 portrait, 6 pages &mdash; one per year level.", None),
          ("&#129704;", "The source", "GS73-Source-Sheet-A3.pdf",
           "A3 portrait, 1 page &mdash; the source, described.", None),
          ("&#128221;", "Editable wall", "GS73-WAGOLL-Wall.docx",
           "A3 landscape, opens in Word.", None)]),
        ("Economics &mdash; Pigeon Patrol", None, [
          ("&#128202;", "The wall", "Pigeon-Patrol-WAGOLL-Wall-A3.pdf", "A3 landscape, 1 page.", None),
          ("&#128196;", "Level sheets", "Pigeon-Patrol-Level-Sheets-A3.pdf",
           "A3 portrait, 5 pages &mdash; one per level.", None),
          ("&#128221;", "Editable wall", "Pigeon-Patrol-WAGOLL-Wall.docx",
           "A3 landscape, opens in Word.", None)]),
      ],
      note="The A2 wall is A2 rather than A3 because six columns of that much prose only fit A3 at a "
           "type size nobody can read across a room. If you only have A3, print it at 71% and treat it "
           "as a teacher reference. The A3 walls scale up to A2 at 141%."),
]


def card(emoji, title, href, desc, tag, cls):
    tag_html = f' <span class="tag">{tag}</span>' if tag else ""
    soon = " soon" if href == "#" else ""
    return (f'<a class="card {cls}{soon}" href="{href}">'
            f'<span class="emoji">{emoji}</span>'
            f'<h3>{title}{tag_html}</h3><p>{desc}</p></a>')


def build(spec):
    up = "../" * spec["depth"]
    cls = spec["cls"]
    secs = ""
    for heading, sub, cards in spec["sections"]:
        sub_html = f' <span class="sub">{sub}</span>' if sub else ""
        body = "".join(card(*c, cls) for c in cards)
        secs += f'<section><h2>{heading}{sub_html}</h2><div class="grid">{body}</div></section>\n'
    back = ""
    if spec["back"]:
        href, label = spec["back"]
        back = f'<a class="back" href="{href}">&larr; {label}</a>'
    note = f'<p class="note">{spec["note"]}</p>' if spec.get("note") else ""
    doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="{html.escape(spec['intro'])}">
<title>{spec['title']}</title>
<link rel="stylesheet" href="{up}assets/hub.css">
</head>
<body>
<header class="{cls}">
  <div class="kicker">{spec['kicker']}</div>
  <h1>{spec['title']}</h1>
  <p>{spec['intro']}</p>
  {back}
</header>
<main>
{secs}{note}
</main>
<footer>{FOOT}</footer>
</body>
</html>
"""
    p = pathlib.Path(spec["path"])
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(doc, encoding="utf-8")
    return p


if __name__ == "__main__":
    for spec in SITE:
        print("wrote", build(spec))
    print(f"{len(SITE)} index pages built from one site map")
