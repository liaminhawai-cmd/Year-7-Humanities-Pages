#!/usr/bin/env python3
"""Turn eal.js into entries for the EAL Word Builder, so the wall and the hub
teach the same words.

    python3 tools/build_vocab_entries.py /workspace/eal-vocabulary-site

eal.js is the single source. This script reads it, shapes each word the way
data/vocab.json expects, and writes the unit back into
year-7 › Humanities & Civics › Source analysis. Run it again after editing
eal.js and the hub catches up; nothing is typed twice.

Morpheme translations are NOT invented here. The hub already carries reviewed
translations for common morphemes — `con` meaning together, `trans` meaning
across — so this reuses those by matching on the morpheme and its meaning. A
morpheme the hub has never seen is emitted with its English meaning and no
translations, which is what the hub already does elsewhere and is honest about
what has and has not been checked.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UNIT_ID = "source-analysis"
UNIT_NAME = "Source analysis — the words you need"
UNIT_PATH = "year-7/humanities-civics/source-analysis"


def read_eal() -> dict:
    """Evaluate eal.js in node and hand the table back as JSON."""
    js = ROOT / "eal.js"
    script = (
        "const fs=require('fs'),vm=require('vm');const c={};vm.createContext(c);"
        f"vm.runInContext(fs.readFileSync({json.dumps(str(js))},'utf8'),c);"
        "vm.runInContext(\"globalThis.OUT=JSON.stringify({EAL,EAL_LANGS,EAL_NOTE})\",c);"
        "process.stdout.write(c.OUT);"
    )
    out = subprocess.run(["node", "-e", script], capture_output=True, text=True)
    if out.returncode:
        sys.exit("could not read eal.js:\n" + out.stderr)
    return json.loads(out.stdout)


def index_morphemes(hub: dict) -> dict:
    """Every morpheme translation already on the hub, keyed by surface AND
    meaning together, so a known morpheme keeps the wording students have seen.

    Deliberately not keyed by surface alone. The same letters carry different
    morphemes — the hub's `ist` meaning "to stand" is not the `ist` in
    archaeologist — and a surface-only match silently attaches the wrong
    translation in eighteen languages at once. If the meaning does not match,
    the part ships with its English meaning and no translations.
    """
    by_pair = {}
    for level in hub.get("levels", []):
        for subject in level.get("subjects", []):
            for unit in subject.get("units", []):
                for word in unit.get("words", []):
                    for part in word.get("parts", []) or []:
                        tr = part.get("translations")
                        if not tr:
                            continue
                        key = ((part.get("surface") or "").lower(),
                               (part.get("meaning") or "").lower())
                        by_pair.setdefault(key, tr)
    return {"pair": by_pair}


def build_words(eal: dict, morphs: dict) -> list:
    words = []
    for term, entry in eal.items():
        parts = []
        for surface, meaning, kind in entry.get("morph", []) or []:
            tr = morphs["pair"].get((surface.lower(), meaning.lower()))
            part = {"surface": surface, "type": kind, "meaning": meaning}
            if tr:
                part["translations"] = tr
            parts.append(part)
        word = {
            "word": term,
            "parts": parts,
            "root": next((p["surface"] for p in parts if p["type"] == "root"), ""),
            "meaning": entry["en"],
            "example": "",
            "tier": 3,
            "translations": dict(sorted(entry["t"].items())),
        }
        words.append(word)
    words.sort(key=lambda w: w["word"])
    return words


def main(hub_dir: Path):
    data = read_eal()
    path = hub_dir / "data" / "vocab.json"
    hub = json.loads(path.read_text(encoding="utf-8"))

    morphs = index_morphemes(hub)
    words = build_words(data["EAL"], morphs)

    subject = None
    for level in hub["levels"]:
        if level["id"] != "year-7":
            continue
        for s in level["subjects"]:
            if s["id"] == "humanities-civics":
                subject = s
    if subject is None:
        sys.exit("year-7 › humanities-civics not found in vocab.json")

    unit = {"id": UNIT_ID, "name": UNIT_NAME, "interactive": True,
            "words": words, "path": UNIT_PATH}

    existing = next((i for i, u in enumerate(subject["units"]) if u["id"] == UNIT_ID), None)
    if existing is None:
        subject["units"].insert(0, unit)
        action = "added"
    else:
        subject["units"][existing] = unit
        action = "updated"

    path.write_text(json.dumps(hub, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    reused = sum(1 for w in words for p in w["parts"] if p.get("translations"))
    bare = sum(1 for w in words for p in w["parts"] if not p.get("translations"))
    print(f"{action} {UNIT_PATH}: {len(words)} words, "
          f"{len(data['EAL_LANGS'])} languages each")
    print(f"  morpheme parts: {reused} reused from the hub, {bare} with English only")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    main(Path(sys.argv[1]))
