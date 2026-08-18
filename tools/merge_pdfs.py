#!/usr/bin/env python3
"""Concatenates PDFs that already exist into one file, page order preserved.

    pip install pypdf
    python3 tools/merge_pdfs.py <output.pdf> <input1.pdf> <input2.pdf> ...

Each source keeps its own page size: this is a page-level concatenation, not a
re-layout, so an A3 landscape page sits next to an A4 portrait page in the same
file with neither one stretched or cropped to match the other. Nothing here
holds any content of its own. Run the PDF's own build-pdf.mjs first, or this
has nothing to merge.
"""

import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter


def merge(out: Path, sources: list[Path]) -> int:
    """Writes out and returns its page count."""
    missing = [s for s in sources if not s.exists()]
    if missing:
        sys.exit("missing input(s), run that topic's build-pdf.mjs first:\n  "
                  + "\n  ".join(str(m) for m in missing))
    writer = PdfWriter()
    for src in sources:
        writer.append(str(src))
    out.parent.mkdir(parents=True, exist_ok=True)
    with open(out, "wb") as f:
        writer.write(f)
    return len(PdfReader(str(out)).pages)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    out = Path(sys.argv[1])
    sources = [Path(a) for a in sys.argv[2:]]
    pages = merge(out, sources)
    print(f"wrote {out}  ({pages} pages)")
