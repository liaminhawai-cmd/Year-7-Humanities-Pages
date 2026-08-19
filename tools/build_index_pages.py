#!/usr/bin/env python3
"""Builds every index page on the site from the one site map below.

    python3 tools/build_index_pages.py

The landing page, the four subject pages and the topic pages are all generated
from SITE. Nothing about the navigation is typed twice, so a resource cannot
appear on one page and be missing from another, and moving something is one
edit here rather than a hunt through nine files.

Content pages, the walls, the bump-it-ups, the simulations, are NOT generated.
They are self-contained and this script never touches them.

Rule of thumb for where a thing goes: a resource lives on the page for the
smallest thing it belongs to. Vocabulary that serves one topic sits on that
topic; nothing sits on the landing page except the four areas and the print
pack, because everything else belongs to something more specific.
"""
import html
import pathlib

WORD_BUILDER = "https://liaminhawai-cmd.github.io/EAL-Vocabulary-Site/"


def words(folder, blurb):
    """A card linking out to one folder of the Word Builder.

    The folder id is the TOPIC's, not the subject's. Every topic page used to
    link to f/history or f/geography, which is the shelf the topic sits on: a
    student on the Ancient Australia page, told these were "the same words",
    landed on the twenty shared source-analysis words instead of the topic's
    own seventeen. The Word Builder has a folder per topic, so link to it.
    """
    return ("&#127760;", "On the Word Builder",
            WORD_BUILDER + "#/l/year-7/humanities-civics/f/" + folder, blurb, None)


# The shared source-analysis unit, which is a subject-level list on purpose: the
# same twenty words serve every source-analysis topic. Topics that have their own
# unit link to that as well, through words() above.
SOURCE_WORDS = words("history",
                     "Twenty source-analysis words in eighteen languages, shared by "
                     "every topic that analyses a source.")

FOOT = ("Year 7 Humanities &middot; Kew High School. Nothing on this site collects "
        "anything: no accounts, no tracking, no analytics.")

# Shared card sets ---------------------------------------------------------
def wagoll(full, blurb):
    """One card for the interactive wall, not two.

    bump-it-up.html and bump-it-up-standalone.html used to get a card each,
    "big screen" and "single file", and open the identical interactive: the
    only difference is whether content.js and the source image are inlined,
    which is invisible to whoever clicked. bump-it-up-standalone.html still
    exists, still gets built by tools/build_standalone.py, and still works
    for the USB-stick, no-internet case the landing page promises. It is just
    not a second nav card any more; the blurb below says it downloads.
    """
    cards = [
        ("&#128250;", "Bump it up", "bump-it-up.html", blurb, None),
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
           "Ancient Australia, Rome and China, and the source each unit is built on.", None),
          ("&#127759;", "Geography", "geography/",
           "Water in the World, and Landscapes &amp; Landforms.", None),
          ("&#128188;", "Economics &amp; Business", "economics/",
           "Pigeon Patrol: one student business at every level of the continuum.", None)]),
      ],
      note="<b>Everything here is a plain HTML file.</b> No login, no install, and no internet needed "
           "once a page has loaded. The single-file versions download and run from a USB stick.<br><br>"
           "<b>The words for each topic sit with that topic</b>, not in a pile at the front: "
           "Water in the World has a lesson-by-lesson vocab hub, History has its own word list, and both "
           "appear on the <a href=\"" + WORD_BUILDER + "\">EAL Word Builder</a>.<br><br>"
           "<b>Teacher context</b>, curriculum documents, source files, planning, lives in "
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
          ("&#128220;", "1 &middot; Ancient Australia", "batman/",
           "Batman's Treaty at Merri Creek. A painting showing a bargain being struck, and a "
           "Proclamation saying no such bargain was ever possible.", None),
          ("&#127963;", "2 &middot; Ancient Rome", "vesuvius/",
           "Pliny the Younger on the eruption of Vesuvius, written twenty-five years after it "
           "happened.", "draft"),
          ("&#127772;", "3 &middot; Ancient China", "china/",
           "Qin Shi Huang, in a painting of the burning of the books and in a historian who "
           "calls him the founder of China.", "draft")]),
        ("Archive", "written and levelled, but not the source a unit is now built on", [
          ("&#129704;", "GS73, the grinding stone", "gs73/",
           "An excavated object from Madjedbebe on Mirarr Country, with no author, answered from "
           "Foundation to Year 10. The fullest resource set on the site: a wall, level sheets, a "
           "paragraph builder and the print pack. Kept because it is the one source here that is "
           "an object rather than a document.", "archived"),
          ("\U0001F3FA", "Ancient Egypt", "egypt/",
           "Herodotus on the Nile, a visitor writing much of it at second hand. Built as History 2 "
           "before the unit list was checked; Year 7 does not teach an Egypt unit. Kept because it "
           "is a complete second-hand-report source and works as extra practice.", "archived")])],
      note="The three units are not assessed on the same skill. "
           "<b>CAT 1: Ancient Australia</b> is a source-analysis test: primary and secondary "
           "sources, reliability and accuracy, and First Nations beliefs, values and lives. The "
           "wall on that page rehearses it, and does it with two sources that disagree, which is "
           "what comparing interpretations needs. "
           "<b>CAT 2: Ancient Rome</b> is a tourist guidebook for a traveller arriving in 300 CE, "
           "and assesses no source analysis at all. So the Rome page holds a Roman source read at "
           "every level: a source for the unit, not a model of its task. "
           "<b>CAT 3: Ancient China</b> is two booklets, chronology skills and source analysis, and "
           "adds historical perspectives and historical significance. Its wall is that booklet's "
           "own rubric, level for level.<br><br>"
           "Both archive walls are finished, levelled and teachable. "
           "They are down there because they are not the source the unit in front of a "
           "class is built on, and a student looking for their own topic should not have to step "
           "past them.<br><br>"
           "The booklet and the word list are the same for every topic, so they sit on each topic "
           "page rather than here."),

 dict(path="history/batman/index.html", cls="history", depth=2, kicker="History &middot; Topic 1",
      title="Ancient Australia",
      intro="A painting says John Batman bought this land. A Proclamation says that was never "
            "possible. Which do you trust, and why?",
      back=("../", "History"),
      sections=[
        ("Resources", None, wagoll(False,
           "Foundation to Year 10. Tap between the two sources, tap any phrase. "
           "Downloads as one file for offline use.") + [
           ("&#128202;", "The wall", "wagoll-wall.html",
            "The whole continuum on one surface, every level side by side for comparison.", None),
           ("&#129513;", "Strand by strand", "rubric-tour.html",
            "Teach one strand of the rubric across five levels, then the class sorts the "
            "phrases back into the wall.", None),
           ("&#128269;", "The sources", "source-sheet.html",
            "The painting and the Proclamation, one A3 sheet each, as large as the page "
            "allows, with who made it and when.", None),
           ("&#128196;", "Level sheets", "level-sheets.html",
            "One A3 anchor sheet per rung, Foundation to Year 10, ready to print.", None),
           ("&#128424;", "Print pack", "../../print/Batman-Treaty-Print-Pack.pdf",
            "One PDF, A3 throughout: the two source sheets, then a level sheet per rung. The editable "
            "Word wall sits alongside it in the print folder.", None)]),
        ("Words &amp; booklet", None, [
           ("&#128218;", "Vocab hub", "vocab-hub.html",
            "Meet, build and recall every word this topic marks.", None),
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="The painting shows a treaty being agreed. The Proclamation, signed ten weeks later, "
           "declares that no settler could buy land from "
           "Aboriginal people and that any such treaty was &ldquo;void and of no effect.&rdquo; Both "
           "are here because a "
           "student cannot compare interpretations from one source, and comparing interpretations "
           "is what CAT 1 marks.<br><br>"
           "Both were made by colonists. No Kulin record of the meeting at Merri "
           "Creek has survived. The painting was made about forty years afterwards by an artist who "
           "was not there, and no portrait of Batman was taken from life, so even his face is "
           "invented. The wall says all of this rather than working around it.<br><br>"
           "The framing of this wall has not been checked with the "
           "Wurundjeri Woi Wurrung Cultural Heritage Aboriginal Corporation, and closing that may "
           "change the wording here. The painting is John Wesley Burtt, circa 1875, State Library of "
           "Victoria H92.196: out of copyright itself, with the terms on this reproduction of it "
           "still to be confirmed before print. See <a href=\"SOURCE-NOTICE.md\">the source "
           "notice</a>."),

 dict(path="history/vesuvius/index.html", cls="history", depth=2, kicker="History &middot; Topic 2",
      title="Ancient Rome",
      intro="Pliny the Younger's letter to Tacitus on the eruption of Vesuvius, written twenty-five "
            "years after it happened.",
      back=("../", "History"),
      sections=[
        ("Resources", None, wagoll(False,
           "Foundation to Year 10. Tap any part of the letter, tap any phrase. "
           "Downloads as one file for offline use.")),
        ("Words &amp; booklet", None, [
           ("&#128218;", "Vocab hub", "vocab-hub.html",
            "Meet, build and recall every word this topic marks.", None),
           words("hist-rome",
                 "The Ancient Rome unit's thirty-one words in nine languages, with spaced practice."),
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>This wall does not rehearse CAT 2, and is not pretending to.</b> Rome's CAT is a "
           "tourist guidebook for a traveller arriving in 300 CE, and it assesses no source analysis "
           "at all. What sits here is a real Roman source read from Foundation to Year 10: a way "
           "into the unit, and the source-analysis skill the other two units are marked on.<br><br>"
           "<b>Draft.</b> Written and levelled but not yet taught. The traditional 24 August date is "
           "disputed, an inscription found at Pompeii in 2018 points to autumn, and the "
           "wall treats that disagreement as part of what there is to analyse."),

 dict(path="history/china/index.html", cls="history", depth=2, kicker="History &middot; Topic 3",
      title="Ancient China",
      intro="Qin Shi Huang made China one country, and burned the books and killed the scholars who "
            "argued. Task 3 of the CAT booklet asks you to weigh him.",
      back=("../", "History"),
      sections=[
        ("Resources", None, wagoll(False,
           "Level 6 to Level 9: the CAT rubric's own bands. Tap the painting, tap any phrase. "
           "Downloads as one file for offline use.")),
        ("Words", None, [
           ("&#128218;", "Vocab hub", "vocab-hub.html",
            "Meet, build and recall every word this topic marks.", None),
           words("hist-china",
                 "The topic's twenty words in nine languages, with spaced practice."),
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>This wall rehearses CAT 3.</b> Every other wall on this site runs Foundation to Year 10, "
           "because it is showing a skill grow across a whole school. This one runs <b>Level 6 to "
           "Level 9</b>, because that is what the Ancient China Source Analysis Booklet rubric runs, and "
           "a student should be able to find their own CAT band on it.<br><br>"
           "<b>Six rows, not four.</b> They are the booklet's five numbered source-analysis rows plus the "
           "significance strand Task 3 adds, including <b>historical perspectives</b>, which the "
           "other walls on this site do not have. Each row also names the question it is marked from.<br><br>"
           "<b>The painting is on the page.</b> Source 1 used to be one line of "
           "text saying a painting existed. It is now the painting, with the emperor, the men taken "
           "from the courtyard, the burning books and the pit each openable on their own. The "
           "booklet does not record the artist, the date or the collection that holds it; see "
           "<a href=\"SOURCE-NOTICE.md\">the source notice</a>.<br><br>"
           "<b>Draft.</b> Written and levelled against the real rubric, but not yet taught."),

 dict(path="history/gs73/index.html", cls="history", depth=2, kicker="History &middot; Archive",
      title="GS73, the grinding stone",
      intro="GS73, a broken grinding stone from Madjedbebe on Mirarr Country, and the long journey by "
            "which it became evidence.",
      back=("../", "History"),
      sections=[
        ("Resources", None, wagoll(True,
           "Foundation to Year 10, one rung at a time. Tap the rock, tap any phrase. "
           "Downloads as one file for offline use.") + [
           ("&#129704;", "The source", "source-sheet.html",
            "What GS73 is, where it was found, and how it became evidence.", None),
           ("&#128424;", "The year-by-year wall", "../../print/Ancient-Australia-WAGOLL-Wall-Grade5-Year10-A3.pdf",
            "A3 portrait, 6 pages, Grade 5 to Year 10. The A2 poster set, the compact A4 WAGOLL "
            "and the editable Word wall sit alongside it in the print folder.", None)]),
        ("Words &amp; booklet", None, [
           ("&#128218;", "Vocab hub", "vocab-hub.html",
            "Meet, build and recall every word this topic marks.", None),
           words("hist-australia",
                 "The topic's seventeen words with spaced practice, in up to eighteen "
                 "languages, eight of them complete across every word."),
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>Archived, and still the fullest thing here.</b> Ancient Australia is now taught from "
           "Batman's Treaty and Governor Bourke's Proclamation, so this is no longer the source in "
           "front of a class. Nothing on it stopped being true: it is a complete resource set, a "
           "wall, level sheets, a paragraph builder, an interactive and the whole print pack, and it "
           "is the only source on this site that is an <i>object</i> rather than a document, with no "
           "author to weigh and no point of view to name.<br><br>"
           "<b>GS73 and Mirarr Country.</b> The source images come from Hayes et al. (2022), open access "
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
           "Foundation to Year 10. Tap any part of the passage, tap any phrase. "
           "Downloads as one file for offline use.")),
        ("Words &amp; booklet", None, [
           ("&#128218;", "Vocab hub", "vocab-hub.html",
            "Meet, build and recall every word this topic marks.", None),
           SOURCE_WORDS,
           ("&#128214;", "What is source analysis?", "../../print/What-is-source-analysis-A5.pdf",
            "The nine-page student booklet, ready to print.", None)]),
      ],
      note="<b>Archived, not a Year 7 unit.</b> This was built as History 2 before the unit list "
           "was checked against the program. Year 7 History teaches Ancient Australia, Ancient China and "
           "Ancient Rome; there is no Egypt unit, and nothing here is assessed.<br><br>"
           "It is kept, not deleted, because it is a complete worked example of a <i>second-hand "
           "report</i>, a visitor explaining a country whose writing he could not read, "
           "which is a source type the taught units do not otherwise cover. It works as extra practice "
           "or a relief lesson. The worked examples are written and levelled but have never been taught, "
           "and there is no wall, level sheets or print pack."),

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
           "Foundation to Year 10, one rung at a time. Tap the figure, tap any phrase. "
           "Downloads as one file for offline use.") + [
           ("&#129521;", "Paragraph builder", "paragraph-builder.html",
            "D &middot; P &middot; I &middot; U, one card per sentence. Switch to PEEL or TEEL.", None)]),
        ("Words", "kept in this browser, nothing sent anywhere", [
           ("&#128218;", "Vocab hub", "water-vocab-hub.html",
            "All 54 words, split into the unit's nine lessons. Each lesson has its own morpheme "
            "bank, a warm-up review of earlier lessons, base-camp and stretch tiers, and a "
            "printable report.", None),
           words("geo-water",
                 "The same nine lessons with spaced practice, in eighteen languages.")]),
        ("Interactive tasks", "decision-and-consequence simulations, each with a printable report", [
           ("&#128167;", "Every Drop", "every-drop.html",
            "200 years in one catchment. Clearing, sewage, a dam, a sealed city, a changed climate "
            ": watch your decisions re-plumb the water cycle itself.", None),
           ("&#127964;&#65039;", "Share the River", "share-the-river.html",
            "“The Big Dry.” Steer a Murray&ndash;Darling catchment through a five-year drought "
            "by setting policy, not numbers, and live with an irreversible legacy.", None)]),
        ("Reading &amp; writing", "lesson 2.1&ndash;2.3 content", [
           ("&#128202;", "Reading data (PQE)", "reading-data-pqe.html",
            "Model P &middot; Q &middot; E on the world's water at three levels, then apply it to "
            "Australia's rainfall map. Project it or print it as a worksheet.", None),
           ("&#9997;&#65039;", "2.3 worked example", "lesson-2-3-worked-example.html",
            "One TEEL paragraph on the Martuwarra Fitzroy River. Tap each part of TEEL; switch "
            "Level 6, 7 and 8 to see what gets added.", None)]),
      ],
      note="<b>Draft.</b> Checked against Victorian Curriculum 2.0 Geography F&ndash;10; the unit sits on "
           "VC2HG8K01, K03 and K04. <b>The figure is a classroom redraw</b> of U.S. Geological Survey "
           "public-domain estimates. Who made a display and why is half the source analysis.<br><br>"
           "<b>Everything below the first two rows</b> was found on an unmerged branch in a different "
           "repository: built for this unit, working, and never linked from it. Nothing here can "
           "drift from the shared vocab hub or the Word Builder: the words are the same words. The "
           "interactive tasks and the 2.1&ndash;2.3 materials exist nowhere else on this site."),

 dict(path="geography/landforms/index.html", cls="geography", depth=2, kicker="Geography &middot; Topic 2",
      title="Landscapes &amp; Landforms",
      intro="Simulations and decision tasks. Each is a single self-contained file, download it "
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
          words("geo-landforms",
                "Archipelago, isthmus, plateau and the rest: 23 terms with morphology, "
                "in nine languages.")]),
      ],
      note="Every duplicate has now been resolved: Wattle Bay v14 and the two other mine-siting builds "
           "were retired on request, leaving one tool per task. They are all still in the git history if "
           "any is ever wanted back."),

 # ---------------- Economics ----------------
 dict(path="economics/index.html", cls="economics", depth=1, kicker="Year 7 Humanities",
      title="Economics &amp; Business",
      intro="One student business, written five times, once at each level of the continuum.",
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
      intro="One student service business, written five times, once at each level from Level 6 "
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
           "The Pigeon Patrol wall, level sheets and editable version.", None)]),
        ("Words", None, [
          words("economics",
                "The topic's eighteen words in nine languages, with spaced practice.")])],
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
        ("History: Batman's Treaty", "the taught Ancient Australia wall", [
          ("&#128424;", "Print pack", "Batman-Treaty-Print-Pack.pdf",
           "10 pages, one file, A3 throughout: two landscape source sheets, then a portrait anchor "
           "sheet per rung, Foundation to Year 10.", None),
          ("&#128221;", "Editable wall", "Batman-Treaty-WAGOLL-Wall.docx",
           "A3 landscape, opens in Word.", None)]),
        ("Economics: Pigeon Patrol", None, [
          ("&#128202;", "The wall", "Pigeon-Patrol-WAGOLL-Wall-A3.pdf", "A3 landscape, 1 page.", None),
          ("&#128196;", "Level sheets", "Pigeon-Patrol-Level-Sheets-A3.pdf",
           "A3 portrait, 5 pages: one per level.", None),
          ("&#128221;", "Editable wall", "Pigeon-Patrol-WAGOLL-Wall.docx",
           "A3 landscape, opens in Word.", None)]),
      ],
      note="Pages 1 and 2 of the Batman's Treaty PDF are the sources, A3 landscape, each "
           "run to the full width of the sheet, with who made it, when, and how long after the "
           "event. What is not on them is any note on what the picture contains: reading the source "
           "is the task, and a sheet that hands the reading over has done it for the student. "
           "Pages 3 to 10 are the level sheets, A3 "
           "portrait, one per rung, opening at Foundation to Level 2 and closing at Year 10. The "
           "cultural-consultation item is still open; see "
           "<a href=\"../history/batman/SOURCE-NOTICE.md\">the source notice</a> before this goes "
           "beyond the classroom.<br><br>"
           "GS73's own print set, the older four-poster wall Ancient Australia used to be taught "
           "from, still exists but has moved off this page: it sits with the wall it illustrates, "
           "on <a href=\"../history/gs73/\">the GS73 topic page</a> itself."),
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
            f'<span><b>{title}</b>{tag_html}: <span class="desc">{desc}</span></span></a>')


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
