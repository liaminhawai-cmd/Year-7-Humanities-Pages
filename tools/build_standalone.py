#!/usr/bin/env python3
"""Bundles a page and everything it loads into ONE html file.

    python3 tools/build_standalone.py history/bump-it-up.html

The normal pages load content.js and the source image from alongside them,
which is right for the site but wrong the moment someone downloads a single
file out of a browser: the page arrives without its picture and the hotspots
collapse onto the caption. This inlines the script and base64s the image, so
the result works from a Downloads folder, an email attachment or a USB stick
with nothing beside it.

Writes <name>-standalone.html next to the original.
"""

import base64
import mimetypes
import re
import sys
from pathlib import Path


def bundle(src: Path) -> Path:
    html = src.read_text(encoding="utf-8")
    folder = src.parent

    # <script src="..."> -> inline
    def inline_script(m):
        path = folder / m.group(1)
        if not path.exists():
            sys.exit(f"missing script: {path}")
        return "<script>\n/* inlined from " + m.group(1) + " */\n" + \
               path.read_text(encoding="utf-8") + "\n</script>"

    html = re.sub(r'<script src="([^"]+)"></script>', inline_script, html)

    def data_uri(path: Path) -> str:
        mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
        return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode("ascii")

    # src="something.jpg|png|..." -> data: URI
    def inline_img(m):
        attr, ref = m.group(1), m.group(2)
        if ref.startswith(("data:", "http:", "https:")):
            return m.group(0)
        path = folder / ref
        if not path.exists():
            sys.exit(f"missing image: {path}")
        return f'{attr}="{data_uri(path)}"'

    html = re.sub(r'(src)="([^"]+\.(?:jpg|jpeg|png|gif|webp|svg))"', inline_img, html, flags=re.I)

    # The page now names its picture in content.js rather than in the markup, so
    # the attribute pass above finds nothing. Swap any quoted filename that is a
    # real image sitting beside the page — that is where SHEET_IMAGE lives.
    def inline_named(m):
        quote, ref = m.group(1), m.group(2)
        path = folder / ref
        if not path.exists():
            return m.group(0)
        return f"{quote}{data_uri(path)}{quote}"

    html = re.sub(r'(["\'])([^"\'/\\]+\.(?:jpg|jpeg|png|gif|webp|svg))\1',
                  inline_named, html, flags=re.I)

    left = re.findall(r'(?:src|href)="(?!data:|https?:|#)([^"]+)"', html)
    if left:
        print("  note: still references", ", ".join(sorted(set(left))))

    out = src.with_name(src.stem + "-standalone.html")
    out.write_text(html, encoding="utf-8")
    return out


if __name__ == "__main__":
    targets = sys.argv[1:] or ["history/bump-it-up.html"]
    root = Path(__file__).resolve().parents[1]
    for t in targets:
        out = bundle(root / t)
        print(f"wrote {out.relative_to(root)}  ({out.stat().st_size/1024:.0f} KB)")
