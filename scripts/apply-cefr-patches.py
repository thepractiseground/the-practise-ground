#!/usr/bin/env python3
"""
Apply CEFR correctness-audit patches produced by Phase C agents.

Reads JSON patch files from /tmp (one per language-level bucket), applies
them to the source cefr-*.json files, writes a .phaseC.bak backup first.

Patch entry shape (one of):
  wrong_answer   : {week, qi, kind, new_answer, reason}
  dup_options    : {week, qi, kind, new_options[4], new_answer, reason}
  replace_question: {week, qi, kind, new_question, new_options[4], new_answer, reason}

qi may be 0-indexed or 1-indexed depending on the agent that produced it;
we normalize by probing each patch against the actual data.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "src" / "data"

# (patch_file, data_file, level_key)
APPLY = [
    ("/tmp/cefr-patch-fra1.json", DATA_DIR / "cefr-french-quizzes.json", "a1"),
    ("/tmp/cefr-patch-frb1.json", DATA_DIR / "cefr-french-quizzes.json", "b1"),
    ("/tmp/cefr-patch-frc1.json", DATA_DIR / "cefr-french-quizzes.json", "c1"),
    ("/tmp/cefr-patch-deb1.json", DATA_DIR / "cefr-german-quizzes.json", "b1"),
    ("/tmp/cefr-patch-dec1.json", DATA_DIR / "cefr-german-quizzes.json", "c1"),
    ("/tmp/cefr-patch-struct-dea1.json", DATA_DIR / "cefr-german-quizzes.json", "a1"),
    ("/tmp/cefr-patch-struct-esa1.json", DATA_DIR / "cefr-spanish-quizzes.json", "a1"),
    ("/tmp/cefr-patch-struct-esb1.json", DATA_DIR / "cefr-spanish-quizzes.json", "b1"),
    ("/tmp/cefr-patch-struct-esc1.json", DATA_DIR / "cefr-spanish-quizzes.json", "c1"),
    ("/tmp/cefr-patch-struct-ena2.json", DATA_DIR / "cefr-quizzes.json", "a2"),
    ("/tmp/cefr-patch-struct-enb1.json", DATA_DIR / "cefr-quizzes.json", "b1"),
]


def week_obj(level_arr, week_num):
    for wk in level_arr:
        if wk["week"] == week_num:
            return wk
    return None


def apply_patch(level_arr, p):
    wk = week_obj(level_arr, p["week"])
    if wk is None:
        return f"no such week {p['week']}"
    qs = wk["questions"]
    # normalize qi: try 1-indexed first (qi-1), fallback 0-indexed (qi)
    raw_qi = p["qi"]
    if 1 <= raw_qi <= len(qs):
        idx = raw_qi - 1
    elif 0 <= raw_qi < len(qs):
        idx = raw_qi
    else:
        return f"qi {raw_qi} out of range for week {p['week']} (len={len(qs)})"
    q = qs[idx]
    # Infer kind from present fields when missing
    kind = p.get("kind")
    if kind is None:
        if "new_question" in p:
            kind = "replace_question"
        elif "new_options" in p:
            kind = "dup_options"
        else:
            kind = "wrong_answer"
    if kind == "wrong_answer":
        if "new_answer" not in p:
            return "missing new_answer"
        q["answer"] = p["new_answer"]
    elif kind == "dup_options":
        if "new_options" not in p or "new_answer" not in p:
            return "missing new_options/new_answer"
        if len(p["new_options"]) != 4 or len(set(p["new_options"])) != 4:
            return f"new_options not 4 distinct: {p['new_options']}"
        q["options"] = list(p["new_options"])
        q["answer"] = p["new_answer"]
    elif kind == "replace_question":
        if "new_question" not in p or "new_options" not in p or "new_answer" not in p:
            return "missing fields for replace_question"
        if len(p["new_options"]) != 4 or len(set(p["new_options"])) != 4:
            return f"new_options not 4 distinct: {p['new_options']}"
        q["question"] = p["new_question"]
        q["options"] = list(p["new_options"])
        q["answer"] = p["new_answer"]
    else:
        return f"unknown kind: {kind}"
    return None  # ok


def main():
    backups_made = set()
    total_applied = 0
    total_skipped = 0
    for patch_path, data_file, lvl in APPLY:
        if not Path(patch_path).exists():
            print(f"skip (no patch file): {patch_path}")
            continue
        patches = json.loads(Path(patch_path).read_text(encoding="utf-8"))
        data = json.loads(data_file.read_text(encoding="utf-8"))

        # backup once per source file
        bak = data_file.with_suffix(data_file.suffix + ".phaseC.bak")
        if data_file not in backups_made and not bak.exists():
            bak.write_text(data_file.read_text(encoding="utf-8"), encoding="utf-8")
            print(f"backup: {bak.name}")
            backups_made.add(data_file)

        level_arr = data[lvl]
        applied = skipped = 0
        for p in patches:
            err = apply_patch(level_arr, p)
            if err:
                print(f"  [skip] {patch_path} wk{p.get('week')}/qi{p.get('qi')}: {err}")
                skipped += 1
            else:
                applied += 1
        data_file.write_text(
            json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        total_applied += applied
        total_skipped += skipped
        print(f"{data_file.name} [{lvl}]: applied {applied}, skipped {skipped}")

    print(
        f"\nTOTAL applied: {total_applied}  skipped: {total_skipped}"
    )


if __name__ == "__main__":
    main()
