#!/usr/bin/env python3
"""
Fix the data-model mismatch between QuizEngine.tsx and grade 11/12 quiz data.

QuizEngine expects: answer ∈ {"A", "B", "C", "D"} (letter label)
Offending data has: answer == full option string (e.g., "Frictional")

This script walks the affected JSON files, and for each question whose answer
is a full option string that equals one of its options, replaces the answer
with the corresponding letter A–D.

Files with `answer` already in letter form are left untouched.
Files are rewritten in place; a .bak copy is saved alongside first.

SEVERITY: S1 — without this fix, every grade 11/12 student on the live site
gets 0/25 on every quiz regardless of their actual answers.
"""
import json
import shutil
from pathlib import Path
import sys

DATA_DIR = Path(__file__).resolve().parent.parent / "src" / "data"
LETTERS = ["A", "B", "C", "D"]

AFFECTED_FILES = [
    "physics-quizzes.json",
    "chemistry-quizzes.json",
    "biology-quizzes.json",
    "maths-higher-quizzes.json",
    "maths-quizzes.json",
    "quizzes.json",
]


def fix_file(path: Path) -> dict:
    raw = path.read_text(encoding="utf-8")
    data = json.loads(raw)

    stats = {
        "file": path.name,
        "total": 0,
        "already_letter": 0,
        "converted": 0,
        "answer_not_in_options": 0,
        "bad_options_count": 0,
        "unconvertible_samples": [],
    }

    for grade, weeks in data.items():
        if not isinstance(weeks, list):
            continue
        for wk in weeks:
            for q in wk.get("questions", []):
                stats["total"] += 1
                ans = q.get("answer")
                opts = q.get("options", [])

                if ans in LETTERS:
                    stats["already_letter"] += 1
                    continue

                if len(opts) != 4:
                    stats["bad_options_count"] += 1
                    if len(stats["unconvertible_samples"]) < 5:
                        stats["unconvertible_samples"].append(
                            {
                                "reason": "options_len_not_4",
                                "grade": grade,
                                "week": wk.get("week"),
                                "q": q.get("question", "")[:80],
                                "opts_len": len(opts),
                                "answer": ans,
                            }
                        )
                    continue

                if isinstance(ans, str) and ans in opts:
                    idx = opts.index(ans)
                    q["answer"] = LETTERS[idx]
                    stats["converted"] += 1
                else:
                    stats["answer_not_in_options"] += 1
                    if len(stats["unconvertible_samples"]) < 5:
                        stats["unconvertible_samples"].append(
                            {
                                "reason": "answer_not_in_options",
                                "grade": grade,
                                "week": wk.get("week"),
                                "q": q.get("question", "")[:80],
                                "opts": opts,
                                "answer": ans,
                            }
                        )

    # Back up original (only if not already backed up)
    bak = path.with_suffix(path.suffix + ".bak")
    if not bak.exists():
        shutil.copy2(path, bak)

    # Rewrite file (preserve pretty-print; match existing repo style)
    path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    return stats


def main():
    print("=" * 80)
    print("Fixing quiz answer format: string -> letter (A/B/C/D)")
    print("=" * 80)

    grand_total = {
        "total": 0,
        "already_letter": 0,
        "converted": 0,
        "answer_not_in_options": 0,
        "bad_options_count": 0,
    }

    all_unconvertible = []

    for fname in AFFECTED_FILES:
        fpath = DATA_DIR / fname
        if not fpath.exists():
            print(f"SKIP: {fname} (not found)")
            continue
        stats = fix_file(fpath)
        print(
            f"{stats['file']:<30} total={stats['total']:>5} "
            f"already_letter={stats['already_letter']:>5} "
            f"converted={stats['converted']:>5} "
            f"unconvertible={stats['answer_not_in_options'] + stats['bad_options_count']:>3}"
        )
        for k in grand_total:
            grand_total[k] += stats[k]
        all_unconvertible.extend(stats["unconvertible_samples"])

    print("-" * 80)
    print(
        f"{'TOTAL':<30} total={grand_total['total']:>5} "
        f"already_letter={grand_total['already_letter']:>5} "
        f"converted={grand_total['converted']:>5} "
        f"unconvertible={grand_total['answer_not_in_options'] + grand_total['bad_options_count']:>3}"
    )

    if all_unconvertible:
        print("\nUNCONVERTIBLE SAMPLES (manual review needed):")
        for s in all_unconvertible[:20]:
            print(f"  {s}")
        print(
            "\n⚠️  These questions could not be auto-fixed "
            "(answer doesn't match any option, or options list is not 4 entries). "
            "Manual review required."
        )
        return 1 if grand_total["answer_not_in_options"] + grand_total["bad_options_count"] > 0 else 0

    print("\n✅ All string-format answers successfully converted to letter format.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
