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
HISTORY_WORDS = WORD_BUILDER + "#/l/year-7/humanities-civics/f/history"
GEOGRAPHY_WORDS = WORD_BUILDER + "#/l/year-7/humanities-civics/f/geography"

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
             "One card per sentence. Switch between the subject's letters, PEEL and TEEL.", None),
            ("&#127919;", "Build the wall", "build-the-wall.html",
             "Answer a round, fill in part of the wall.", None),
        ]
    return cards

SOURCE_WORDS = ("&#127760;", "The words you need", HISTORY_WORDS,
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
           "Ancient Australia, Rome and China &mdash; each unit rehearsing its own CAT.", None),
          ("&#127759;", "Geography", "geography/",
           "Water in the World, and Landscapes &amp; Landforms.", None),
          ("&#128188;", "Economics &amp; Business", "economics/",
           "Pigeon Patrol: one student business at every level of the continuum.", None)]),
      ],
      note="<b>Everything here is a plain HTML file.</b> No login, no install, and no internet needed "
           "once a page has loaded. The single-file versions download and run from a USB stick.<br><br>"
           "<b>The words for each topic sit with that topic</b>, not in a pile at the front &mdash; "
           "Water in the World has a lesson-by-lesson vocab hub, History has its own word list, and both "
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
      intro="The units on the Year 7 program, and the sources answered at every level from Foundation "
            "to Year 10 with the evidence-bearing phrases marked.",
      back=("../", "All four areas"),
      sections=[
        ("Topics", "the units being taught", [
          ("&#129704;", "1 &middot; Ancient Australia", "gs73/",
           "GS73, a grinding stone from Madjedbebe. An excavated object with no author.", None),
          ("&#127963;", "2 &middot; Ancient Rome", "rome/",
           "Origins, social groups, citizens, religion, law, army &mdash; and a guidebook for a "
           "traveller arriving in 300 CE.", "draft"),
          ("&#127772;", "3 &middot; Ancient China", "china/",
           "Chronology, social groups, the Great Wall and Terracotta Warriors, Qin Shi Huang.", "draft")]),
        ("Archive", "written and levelled, but not rehearsing a CAT", [
          ("&#127755;", "Pliny on Vesuvius", "vesuvius/",
           "A source-analysis wall built for Rome before the CAT was checked. Rome's CAT is a "
           "guidebook and assesses no source analysis, so this rehearses nothing a student is "
           "marked on. Kept because Pliny is a real Roman source and works as extension.", "archived"),
          ("\U0001F3FA", "Ancient Egypt", "egypt/",
           "Herodotus on the Nile, a visitor writing much of it at second hand. Built as History 2 "
           "before the unit list was checked; Year 7 does not teach an Egypt unit. Kept because it "
           "is a complete second-hand-report source and works as extra practice.", "archived")])],
      note="<b>The three units are not assessed on the same skill.</b> "
           "<b>CAT 1 &mdash; Ancient Australia</b> is a source-analysis test: primary and secondary "
           "sources, reliability and accuracy, and First Nations beliefs, values and lives. "
           "<b>CAT 2 &mdash; Ancient Rome</b> is a tourist guidebook for a traveller arriving in "
           "300 CE, marked on chronology, cause and effect and presentation &mdash; no "
           "source analysis at all. <b>CAT 3 &mdash; Ancient China</b> is two booklets, chronology "
           "skills and source analysis, and adds historical perspectives and historical "
           "significance.<br><br>"
           "So the wall on Ancient Australia rehearses its CAT, and the Vesuvius wall does not "
           "rehearse Rome's &mdash; it is a source for the unit, not a model of its task.<br><br>"
           "The booklet and the word list are the same for every topic, so they sit on each topic "
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
            "What GS73 is, where it was found, and how it became evidence.", None),
           ("&#128424;", "Print-ready set", "../../print/",
            "The A2 poster set, six A3 year-level sheets and the compact A4 WAGOLL.", None)]),
        ("Words &amp; booklet", None, [
           ("&#128218;", "Vocab hub", "vocab-hub.html",
            "Meet, build and recall every word this topic marks.", None),
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>GS73 and Mirarr Country.</b> The source images come from Hayes et al. (2022), open access "
           "under CC BY 4.0, published with the consent of Gundjeihmi Aboriginal Corporation for general "
           "educational purposes. No commercial use is authorised without prior Mirarr consent. See "
           "<a href=\"SOURCE-NOTICE.md\">the source notice</a>."),

 dict(path="history/egypt/index.html", cls="history", depth=2, kicker="History &middot; Archive",
      title="Ancient Egypt",
      intro="Herodotus on the Nile, about 430 BCE. A Greek visitor explaining a country whose writing "
            "he could not read.",
      back=("../", "History"),
      sections=[
        ("Resources", None, wagoll(False,
           "Foundation to Year 10. Tap any part of the passage, tap any phrase.",
           "The same page with everything built in. Download to use offline.")),
        ("Words &amp; booklet", None, [
           ("&#128218;", "Vocab hub", "vocab-hub.html",
            "Meet, build and recall every word this topic marks.", None),
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>Archived &mdash; not a Year 7 unit.</b> This was built as History 2 before the unit list "
           "was checked against the program. Year 7 History teaches Ancient Australia, Ancient China and "
           "Ancient Rome; there is no Egypt unit, and nothing here is assessed.<br><br>"
           "It is kept, not deleted, because it is a complete worked example of a <i>second-hand "
           "report</i> &mdash; a visitor explaining a country whose writing he could not read &mdash; "
           "which is a source type the taught units do not otherwise cover. It works as extra practice "
           "or a relief lesson. The worked examples are written and levelled but have never been taught, "
           "and there is no wall, level sheets or print pack."),

 dict(path="history/vesuvius/index.html", cls="history", depth=2, kicker="History &middot; Archive",
      title="Ancient Rome",
      intro="Pliny the Younger's letter to Tacitus on the eruption of Vesuvius, written twenty-five "
            "years after it happened.",
      back=("../", "History"),
      sections=[
        ("Resources", None, wagoll(False,
           "Foundation to Year 10. Tap any part of the letter, tap any phrase.",
           "The same page with everything built in. Download to use offline.")),
        ("Words &amp; booklet", None, [
           ("&#128218;", "Vocab hub", "vocab-hub.html",
            "Meet, build and recall every word this topic marks.", None),
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>Draft.</b> Written and levelled but not yet taught. The traditional 24 August date is "
           "disputed &mdash; an inscription found at Pompeii in 2018 points to autumn &mdash; and the "
           "wall treats that disagreement as part of what there is to analyse."),

 # ---------------- Geography ----------------
 dict(path="history/rome/index.html", cls="history", depth=2, kicker="History &middot; Topic 2",
      title="Ancient Rome",
      intro="A traveller is coming to Rome from the far edge of the empire and has never seen the "
            "city. CAT 2 asks you to write the guidebook they need.",
      back=("../", "History"),
      sections=[
        ("Resources", None, [
           ("&#128250;", "Bump it up", "bump-it-up.html",
            "Level 6 to Level 9 &mdash; the CAT rubric's own bands. Tap any phrase.", "big screen"),
           ("&#128190;", "Bump it up", "bump-it-up-standalone.html",
            "The same page with everything built in. Download to use offline.", "single file")]),
        ("Words", None, [
           ("&#128218;", "Vocab hub", "vocab-hub.html",
            "Meet, build and recall every word this topic marks.", None),
           ("&#127755;", "Pliny on Vesuvius", "../vesuvius/",
            "A Roman source, analysed at every level. Extension &mdash; this CAT does not assess "
            "source analysis.", None)]),
      ],
      note="<b>This wall rehearses CAT 2, and it is not a source-analysis wall.</b> Every other "
           "History wall here marks up an analytical paragraph about a source. Ancient Rome does not "
           "assess that. Its CAT is a tourist guidebook, marked on <b>chronology, cause and effect, "
           "and presentation</b> &mdash; so the worked examples are guidebook writing, "
           "and a student comparing their draft with this wall is comparing like with like.<br><br>"
           "<b>One of the three rows is not a History descriptor.</b> Chronology and cause and effect "
           "carry VC 2.0 codes; Presentation is the school's own reporting row and has no curriculum "
           "code, and the wall says so rather than inventing one.<br><br>"
           "<b>Draft.</b> Written and levelled against the real rubric, but not yet taught."),

 dict(path="history/china/index.html", cls="history", depth=2, kicker="History &middot; Topic 3",
      title="Ancient China",
      intro="Qin Shi Huang made China one country, and burned the books and killed the scholars who "
            "argued. Task 3 of the CAT booklet asks you to weigh him.",
      back=("../", "History"),
      sections=[
        ("Resources", None, [
           ("&#128250;", "Bump it up", "bump-it-up.html",
            "Level 6 to Level 9 &mdash; the CAT rubric's own bands. Tap any phrase.", "big screen"),
           ("&#128190;", "Bump it up", "bump-it-up-standalone.html",
            "The same page with everything built in. Download to use offline.", "single file")]),
        ("Words", None, [
           ("&#128218;", "Vocab hub", "vocab-hub.html",
            "Meet, build and recall every word this topic marks.", None),
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>This wall rehearses CAT 3.</b> Every other wall on this site runs Foundation to Year 10, "
           "because it is showing a skill grow across a whole school. This one runs <b>Level 6 to "
           "Level 9</b>, because that is what the Ancient China Source Analysis Booklet rubric runs, and "
           "a student should be able to find their own CAT band on it.<br><br>"
           "<b>Six rows, not four.</b> They are the booklet's five numbered source-analysis rows plus the "
           "significance strand Task 3 adds &mdash; including <b>historical perspectives</b>, which the "
           "other walls on this site do not have. Each row also names the question it is marked from.<br><br>"
           "<b>Draft.</b> Written and levelled against the real rubric, but not yet taught."),

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
           "The same page with the figure built in. Download to use offline.") + [
           ("&#129521;", "Paragraph builder", "paragraph-builder.html",
            "D &middot; P &middot; I &middot; U, one card per sentence. Switch to PEEL or TEEL.", None)]),
        ("Words", "kept in this browser, nothing sent anywhere", [
           ("&#128218;", "Vocab hub", "water-vocab-hub.html",
            "All 54 words, split into the unit's nine lessons. Each lesson has its own morpheme "
            "bank, a warm-up review of earlier lessons, base-camp and stretch tiers, and a "
            "printable report.", None),
           ("&#127760;", "On the Word Builder", GEOGRAPHY_WORDS,
            "The same nine lessons with spaced practice, in eighteen languages.", None)]),
        ("Interactive tasks", "decision-and-consequence simulations, each with a printable report", [
           ("&#128167;", "Every Drop", "every-drop.html",
            "200 years in one catchment. Clearing, sewage, a dam, a sealed city, a changed climate "
            "&mdash; watch your decisions re-plumb the water cycle itself.", None),
           ("&#127964;&#65039;", "Share the River", "share-the-river.html",
            "“The Big Dry.” Steer a Murray&ndash;Darling catchment through a five-year drought "
            "by setting policy, not numbers, and live with an irreversible legacy.", None)]),
        ("Reading &amp; writing", "lesson 2.1&ndash;2.3 content", [
           ("&#128202;", "Reading data (PQE)", "reading-data-pqe.html",
            "Model P &middot; Q &middot; E on the world's water at three levels, then apply it to "
            "Australia's rainfall map. Project it or print it as a worksheet.", None),
           ("&#9997;&#65039;", "2.3 worked example", "lesson-2-3-worked-example.html",
            "One TEEL paragraph on the Martuwarra Fitzroy River. Tap each part of TEEL; switch "
            "Level 6, 7 and 8 to see what gets added.", None),
           ("&#129685;", "2.3 lesson plan", "lesson-2-3-significance.html",
            "The Significance of Water, rebuilt: one question, a three-case jigsaw, and success "
            "criteria taken from the Interconnection ladder.", "teacher")]),
      ],
      note="<b>Draft.</b> Checked against Victorian Curriculum 2.0 Geography F&ndash;10; the unit sits on "
           "VC2HG8K01, K03 and K04. <b>The figure is a classroom redraw</b> of U.S. Geological Survey "
           "public-domain estimates &mdash; who made a display and why is half the source analysis.<br><br>"
           "<b>Everything below the first two rows</b> was found on an unmerged branch in a different "
           "repository &mdash; built for this unit, working, and never linked from it. Nothing here can "
           "drift from the shared vocab hub or the Word Builder: the words are the same words. The "
           "interactive tasks and the 2.1&ndash;2.3 materials exist nowhere else on this site."),

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
          ("&#127760;", "Landform words", WORD_BUILDER,
           "Archipelago, isthmus, plateau and the rest &mdash; 23 terms on the Word Builder, "
           "with morphology and nine languages.", None)]),
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
           "P &middot; I &middot; D, one card per sentence. Switch to PEEL or TEEL.", None),
          ("&#127919;", "Build the wall", "build-the-wall.html",
           "Answer a round, fill in part of the wall.", None),
          ("&#128424;", "Print-ready set", "../../print/",
           "The Pigeon Patrol wall, level sheets and editable version.", None)])],
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
          ("&#128202;", "Poster set", "Ancient-Australia-History-Wall-Posters-A2.pdf",
           "A2 landscape, 4 pages &mdash; source, method, continuum and contested claim.", None),
          ("&#128196;", "Year-by-year wall", "Ancient-Australia-WAGOLL-Wall-Grade5-Year10-A3.pdf",
           "A3 portrait, 6 pages &mdash; worked example above, matching continuum below.", None),
          ("&#128221;", "Student WAGOLL", "Ancient-Australia-Source-WAGOLL-A4.pdf",
           "A4 portrait, 1 page &mdash; the dense Year 7 model and colour-keyed continuum.", None),
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
      note="The four A2 sheets make the teaching sequence visible across the wall. The six A3 sheets "
           "are the 12-month increments from Grade 5 to Year 10; each keeps the worked example directly "
           "above its matching, colour-coded continuum cells. The A4 page is the compact student model."),
]


def card(emoji, title, href, desc, tag, cls):
    tag_html = f' <span class="tag">{tag}</span>' if tag else ""
    soon = " soon" if href == "#" else ""
    return (f'<a class="card {cls}{soon}" href="{href}">'
            f'<span class="emoji">{emoji}</span>'
            f'<h3>{title}{tag_html}</h3><p>{desc}</p></a>')


def archive_link(emoji, title, href, desc, tag, cls):
    # A retired resource: one line, not a card, so it does not compete for
    # attention with what a teacher is actually meant to click.
    tag_html = f' <span class="tag">{tag}</span>' if tag else ""
    return (f'<a class="archive-link" href="{href}">'
            f'<span class="emoji">{emoji}</span>'
            f'<span><b>{title}</b>{tag_html} &mdash; <span class="desc">{desc}</span></span></a>')


def build(spec):
    up = "../" * spec["depth"]
    cls = spec["cls"]
    secs = ""
    for heading, sub, cards in spec["sections"]:
        sub_html = f' <span class="sub">{sub}</span>' if sub else ""
        # "Archive" is the one heading rendered as small links rather than
        # cards, everywhere on the site, from this single check.
        if heading == "Archive":
            body = "".join(archive_link(*c, cls) for c in cards)
            secs += f'<section><h2>{heading}{sub_html}</h2><div class="archive-links">{body}</div></section>\n'
            continue
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
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%23223f43'/><text x='16' y='24' font-family='Georgia,serif' font-size='22' font-weight='700' fill='%23c99a2e' text-anchor='middle'>7</text></svg>">
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
