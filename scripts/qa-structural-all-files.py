#!/usr/bin/env python3
"""Structural QA across EVERY quiz file in src/data/.

Checks: schema, 25 Qs/week, 4 unique options, answer ∈ {A,B,C,D} with matching option,
placeholder detection, duplicate question scan within file.

Data model (matches QuizEngine.tsx):
  answer: "A" | "B" | "C" | "D"  (letter index into options array)

CI contract:
  - CRITICAL categories → script exits 1 (build fails).
    These are unambiguous structural bugs that make a question unanswerable
    or malformed: placeholder text in option/question body, wrong option count,
    answer not a letter, answer letter pointing past end of options, empty
    question text, missing fields.
  - WARN categories → reported but non-fatal (exit 0 if no CRITICAL).
    These need content-level judgement (duplicate questions across revision
    weeks, duplicate options inside a question, week with ≠25 Qs) and are
    being worked down through the Phase D deep-audit backlog.

Usage:
  python3 scripts/qa-structural-all-files.py          # full report, exits 1 on CRITICAL
  python3 scripts/qa-structural-all-files.py --strict  # exits 1 on ANY issue (CRITICAL or WARN)
"""
import json
import re
import sys
from pathlib import Path
from collections import defaultdict

DATA = Path("src/data")
LETTERS = ["A", "B", "C", "D"]

# NOTE: 'XXX' was deliberately removed from the placeholder list because it is
# a valid Roman-numeral answer (30) in maths quizzes. We rely on 'TBD', 'TODO',
# 'Option A/B/C/D', 'placeholder', and 'lorem ipsum' as sufficient signals.
PLACEHOLDER_PATTERNS = [
    re.compile(r"^Option [A-D]$", re.I),
    re.compile(r"^\s*TBD\s*$", re.I),
    re.compile(r"^\s*placeholder\s*$", re.I),
    re.compile(r"^\s*TODO\s*$", re.I),
    re.compile(r"^\s*lorem ipsum", re.I),
]

CRITICAL_CATEGORIES = {
    "placeholder_options",
    "placeholder_questions",
    "wrong_option_count",
    "answer_not_letter",
    "answer_letter_but_no_option_at_position",
    "missing_fields",
    "empty_question_text",
}

WARN_CATEGORIES = {
    "duplicate_options",
    "duplicate_questions",
    "wrong_week_question_count",
}


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
            week_no = wk.get("week", wi + 1)
            if len(qlist) != 25:
                issues["wrong_week_question_count"].append(
                    f"g{grade}/wk{week_no}: {len(qlist)} questions (expected 25)"
                )
            for qi, q in enumerate(qlist):
                qcount_total += 1
                qid = f"g{grade}/wk{week_no}/q{qi + 1}"
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
                    issues["wrong_option_count"].append(
                        f"{qid}: {len(opts) if isinstance(opts, list) else 'n/a'} options"
                    )
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
    for qt, ids in qtext_seen.items():
        if len(ids) > 1 and qt:
            issues["duplicate_questions"].append(f"{qt[:60]!r} appears at: {ids}")
    return {"file": fp.name, "total_questions": qcount_total, "issues": issues}


def main():
    strict = "--strict" in sys.argv
    results = []
    for f in sorted(DATA.glob("*.json")):
        results.append(check_file(f))

    # summary
    print(f"{'FILE':<30} {'Qs':>6} {'CRIT':>6} {'WARN':>6}")
    print("=" * 55)
    grand_critical = 0
    grand_warn = 0
    fatal = False
    for r in results:
        if "fatal" in r:
            print(f"{r['file']:<30} {'FATAL':>6} {r['fatal']}")
            fatal = True
            continue
        crit = sum(len(r["issues"][k]) for k in CRITICAL_CATEGORIES)
        warn = sum(len(r["issues"][k]) for k in WARN_CATEGORIES)
        grand_critical += crit
        grand_warn += warn
        print(f"{r['file']:<30} {r['total_questions']:>6} {crit:>6} {warn:>6}")
    print("=" * 55)
    print(f"{'TOTAL':<30} {'':>6} {grand_critical:>6} {grand_warn:>6}\n")

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
            if not items:
                continue
            tag = "CRITICAL" if category in CRITICAL_CATEGORIES else "WARN"
            print(f"  [{tag}] [{category}] {len(items)} items")
            for item in items[:10]:
                print(f"    - {item}")
            if len(items) > 10:
                print(f"    ... and {len(items) - 10} more")

    if fatal:
        print("\nFATAL parse error in one or more files.", file=sys.stderr)
        sys.exit(2)
    if grand_critical > 0:
        print(f"\nFAIL: {grand_critical} CRITICAL structural issues.", file=sys.stderr)
        sys.exit(1)
    if strict and grand_warn > 0:
        print(f"\nFAIL (--strict): {grand_warn} WARN issues.", file=sys.stderr)
        sys.exit(1)
    print(f"\nOK: 0 CRITICAL structural issues. ({grand_warn} WARN tracked in Phase D backlog.)")
    sys.exit(0)


if __name__ == "__main__":
    main()
