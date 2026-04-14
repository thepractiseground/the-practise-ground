#!/usr/bin/env python3
"""QA Inventory — enumerate every quiz data file and count its scope."""
import json
from pathlib import Path

DATA = Path("src/data")
TOTAL = 0
ROWS = []

for f in sorted(DATA.glob("*.json")):
    try:
        d = json.loads(f.read_text())
    except Exception as e:
        ROWS.append((f.name, "ERR", str(e)[:80], 0))
        continue

    if isinstance(d, dict):
        grades = sorted(d.keys())
        grade_totals = {}
        for g, weeks in d.items():
            if isinstance(weeks, list):
                wc = len(weeks)
                qc = sum(len(w.get("questions", [])) for w in weeks if isinstance(w, dict))
                grade_totals[g] = (wc, qc)
        file_total = sum(qc for _, qc in grade_totals.values())
        TOTAL += file_total
        detail = "; ".join(f"g{g}:{wc}w/{qc}q" for g, (wc, qc) in grade_totals.items())
        ROWS.append((f.name, ",".join(grades), detail, file_total))
    elif isinstance(d, list):
        ROWS.append((f.name, "list", f"{len(d)} items", len(d)))
    else:
        ROWS.append((f.name, type(d).__name__, "non-standard", 0))

# also inventory .ts fun/challenge files (rough count)
for tsf in DATA.glob("*.ts"):
    if ".bak" in tsf.name:
        continue
    txt = tsf.read_text()
    q_count = txt.count('"question"') + txt.count("'question'")
    ROWS.append((tsf.name, "ts", f"~{q_count} question-shaped entries", q_count))
    TOTAL += q_count

print(f"{'File':<35} {'Grades/Type':<20} {'Detail':<60} {'Qs':>6}")
print("=" * 125)
for name, grades, detail, qc in ROWS:
    print(f"{name:<35} {str(grades):<20} {detail[:60]:<60} {qc:>6}")
print("=" * 125)
print(f"{'GRAND TOTAL':<35} {'':<20} {'':<60} {TOTAL:>6}")
