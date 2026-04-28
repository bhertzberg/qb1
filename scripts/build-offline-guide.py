"""
Copy ~/Desktop/qbg.png into assets/qbg.png for the Guide page.

The site shows assets/qbg.png inline with a download link; edit the PNG on your
Desktop and run this script to refresh the repo copy.

Run: python3 scripts/build-offline-guide.py
"""
from __future__ import annotations

import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = Path.home() / "Desktop" / "qbg.png"
OUT = ROOT / "assets" / "qbg.png"


def main() -> int:
    if not SRC.is_file():
        print(f"Missing {SRC}", file=sys.stderr)
        return 1
    OUT.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(SRC, OUT)
    print(f"Copied {SRC} -> {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
