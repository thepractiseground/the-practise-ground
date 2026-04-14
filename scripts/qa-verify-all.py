#!/usr/bin/env python3
"""
Final QA verification — runs all the same checks from the original audit
against the now-updated data. Outputs a pass/fail report.
"""
import json
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'src' / 'data'

report = defaultdict(list)

def load(name):
    return json.loads((DATA / f'{name}-quizzes.json').read_text())

enrichment = json.loads((DATA / 'quiz-enrichment.json').read_text())

# ── Check 1: quiz data structural validity ───────────────────────────────
for subj in ('physics', 'chemistry', 'biology', 'maths-higher'):
    data = load(subj)
    for grade in ('11', '12'):
        for w in data.get(grade, []):
            wk = w['week']
            # topic key present (not `title`)
            if 'topic' not in w:
                report['missing_topic'].append(f'{subj}/{grade}/wk{wk}')
            if 'title' in w:
                report['stray_title_key'].append(f'{subj}/{grade}/wk{wk}')
            qs = w.get('questions', [])
            if len(qs) != 25:
                report['wrong_question_count'].append(f'{subj}/{grade}/wk{wk}: {len(qs)} Qs')
            for qi, q in enumerate(qs):
                qtxt = q.get('question', '')
                opts = q.get('options', [])
                ans  = q.get('answer', '')
                if len(qtxt.strip()) < 15:
                    report['short_questions'].append(f'{subj}/{grade}/wk{wk}/Q{qi+1}: {qtxt!r}')
                if len(opts) != 4:
                    report['wrong_option_count'].append(f'{subj}/{grade}/wk{wk}/Q{qi+1}: {len(opts)} options')
                if len(set(opts)) != len(opts):
                    report['duplicate_options'].append(f'{subj}/{grade}/wk{wk}/Q{qi+1}: {opts}')
                if ans not in opts:
                    report['answer_not_in_options'].append(f'{subj}/{grade}/wk{wk}/Q{qi+1}: ans={ans!r}, opts={opts}')

# ── Check 2: enrichment completeness ─────────────────────────────────────
for subj in ('physics', 'chemistry', 'biology', 'maths-higher'):
    data = load(subj)
    for grade in ('11', '12'):
        for w in data.get(grade, []):
            wk = str(w['week'])
            entry = enrichment.get(subj, {}).get(grade, {}).get(wk)
            if not entry:
                report['missing_enrichment'].append(f'{subj}/{grade}/wk{wk}')
                continue
            if not entry.get('introduction') or len(entry['introduction']) < 50:
                report['weak_intro'].append(f'{subj}/{grade}/wk{wk}')
            if not entry.get('learningObjectives') or len(entry['learningObjectives']) < 2:
                report['weak_objectives'].append(f'{subj}/{grade}/wk{wk}')
            if not entry.get('studyTips') or len(entry['studyTips']) < 2:
                report['missing_study_tips'].append(f'{subj}/{grade}/wk{wk}')

# ── Print final report ────────────────────────────────────────────────────
print('=' * 68)
print('FINAL QA VERIFICATION REPORT')
print('=' * 68)
any_fail = False
checks = [
    ('missing_topic',        'Schema: week missing `topic` key'),
    ('stray_title_key',      'Schema: stray `title` key (should be `topic`)'),
    ('wrong_question_count', 'Structural: weeks without exactly 25 questions'),
    ('short_questions',      'Content: questions shorter than 15 chars'),
    ('wrong_option_count',   'Structural: questions without exactly 4 options'),
    ('duplicate_options',    'Content: questions with duplicate options'),
    ('answer_not_in_options','Content: answer not found in options'),
    ('missing_enrichment',   'Enrichment: missing entry'),
    ('weak_intro',           'Enrichment: intro too short'),
    ('weak_objectives',      'Enrichment: < 2 objectives'),
    ('missing_study_tips',   'Enrichment: missing or < 2 study tips'),
]
for key, label in checks:
    items = report[key]
    status = '✅ PASS' if not items else f'❌ FAIL ({len(items)})'
    print(f'{status:16s} {label}')
    if items and len(items) <= 5:
        for it in items:
            print(f'                    {it}')
    elif items:
        for it in items[:5]:
            print(f'                    {it}')
        print(f'                    ... and {len(items) - 5} more')
    if items:
        any_fail = True

print('=' * 68)
if any_fail:
    print('❌ Some checks FAILED. See above.')
    exit(1)
else:
    print('✅ ALL CHECKS PASSED')
