#!/usr/bin/env python3
"""Structural QA across EVERY quiz file in src/data/.
Checks: schema, 25 Qs/week, 4 unique options, answer ∈ {A,B,C,D} with matching option,
placeholder detection, duplicate question scan within file.

Data model (matches QuizEngine.tsx):
  answer: "A" | "B" | "C" | "D"  (letter index into options array)
"""
import json, re
from pathlib import Path
from collections import Counter, defaultdict

DATA = Path("src/data")
LETTERS = ["A", "B", "C", "D"]
PLACEHOLDER_PATTERNS = [
    re.compile(r"^Option [A-D]$", re.I),
    re.compile(r"^\s*TBD\s*$", re.I),
    re.compile(r"^\s*placeholder\s*$", re.I),
    re.compile(r"^\s*TODO\s*$", re.I),
    re.compile(r"^\s*XXX\s*$", re.I),
    re.compile(r"^\s*lorem ipsum", re.I),
]

def is_placeholder(s: str) -> bool:
    return any(p.match(s) for p in PLACEHOLDER_PATTERNS)

def check_file(fp: Path):
    try:
        d = json.loads(fp.read_text())
    except Exception as e:
        return {"file": fp.name, "fatal": str(e)[:120]}
    issues = {
        "placeholder_options": [],
        "placeholder_questions": [],
        "wrong_option_count": [],
        "duplicate_options": [],
        "answer_not_letter": [],
        "answer_letter_but_no_option_at_position": [],
        "wrong_week_question_count": [],
        "missing_fields": [],
        "duplicate_questions": [],
        "empty_question_text": [],
    }
    qcount_total = 0
    qtext_seen = defaultdict(list)
    if not isinstance(d, dict):
        return {"file": fp.name, "fatal": "top-level is not a dict"}
    for grade, weeks in d.items():
        if not isinstance(weeks, list):
            continue
        for wi, wk in enumerate(weeks):
            if not isinstance(wk, dict):
                continue
            qlist = wk.get("questions", [])
            week_no = wk.get("week", wi+1)
            if len(qlist) != 25:
                issues["wrong_week_question_count"].append(
                    f"g{grade}/wk{week_no}: {len(qlist)} questions (expected 25)"
                )
            for qi, q in enumerate(qlist):
                qcount_total += 1
                qid = f"g{grade}/wk{week_no}/q{qi+1}"
                if not isinstance(q, dict):
                    issues["missing_fields"].append(f"{qid}: not a dict")
                    continue
                qtext = q.get("question", "")
                opts = q.get("options", [])
                ans = q.get("answer", None)
                if not qtext or not qtext.strip():
                    issues["empty_question_text"].append(qid)
                if is_placeholder(qtext):
                    issues["placeholder_questions"].append(f"{qid}: {qtext!r}")
                qtext_seen[qtext.strip().lower()].append(qid)
                if not isinstance(opts, list) or len(opts) != 4:
                    issues["wrong_option_count"].append(f"{qid}: {len(opts) if isinstance(opts,list) else 'n/a'} options")
                else:
                    stripped = [str(o).strip() for o in opts]
                    if len(set(stripped)) != 4:
                        issues["duplicate_options"].append(f"{qid}: opts={stripped}")
                    for o in stripped:
                        if is_placeholder(o):
                            issues["placeholder_options"].append(f"{qid}: opt={o!r}")
                if ans not in LETTERS:
                    issues["answer_not_letter"].append(f"{qid}: ans={ans!r}")
                elif isinstance(opts, list) and LETTERS.index(ans) >= len(opts):
                    issues["answer_letter_but_no_option_at_position"].append(
                        f"{qid}: ans={ans!r} but only {len(opts)} options"
                    )
    # dupes: same qtext appearing 2+ times
    for qt, ids in qtext_seen.items():
        if len(ids) > 1 and qt:
            issues["duplicate_questions"].append(f"{qt[:60]!r} appears at: {ids}")
    return {"file": fp.name, "total_questions": qcount_total, "issues": issues}

def main():
    results = []
    for f in sorted(DATA.glob("*.json")):
        r = check_file(f)
        results.append(r)

    # summary
    print(f"{'FILE':<30} {'Qs':>6} {'Issues':>8}")
    print("=" * 55)
    grand_issues = 0
    for r in results:
        if "fatal" in r:
            print(f"{r['file']:<30} {'FATAL':>6} {r['fatal']}")
            continue
        issue_count = sum(len(v) for v in r["issues"].values())
        grand_issues += issue_count
        print(f"{r['file']:<30} {r['total_questions']:>6} {issue_count:>8}")
    print("=" * 55)
    print(f"{'TOTAL ISSUES':<30} {'':>6} {grand_issues:>8}\n")

    # detail per file, only if issues found
    for r in results:
        if "fatal" in r:
            continue
        issues = r["issues"]
        total = sum(len(v) for v in issues.values())
        if total == 0:
            continue
        print(f"\n### {r['file']} ({total} issues)")
        for category, items in issues.items():
            if items:
                print(f"  [{category}] {len(items)} items")
                for item in items[:10]:
                    print(f"    - {item}")
                if len(items) > 10:
                    print(f"    ... and {len(items)-10} more")

if __name__ == "__main__":
    main()
