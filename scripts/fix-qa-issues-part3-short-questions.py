#!/usr/bin/env python3
"""
QA Fix Part 3: Expand 295 extremely short questions (<15 chars) to be
self-contained with context. Uses rule-based transformations keyed on
question pattern + subject, with a manual override table for tricky cases.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'src' / 'data'

# ── Manual overrides for tricky/physics-unit/ambiguous short questions ────
# Key: (subject, grade, week, q_idx_0based) → new question text.
OVERRIDES = {
    # physics
    ('physics', '11', 3, 7): "Random errors in measurement can be best managed by:",
    ('physics', '11', 4, 3): "In kinematics, velocity is best classified as:",
    ('physics', '11', 27, 8): "In thermodynamics, what is heat best described as?",
    ('physics', '12', 1, 10): "What is the SI unit of Coulomb's constant k?",
    ('physics', '12', 1, 16): "Two electrons placed at any distance in vacuum will:",

    # chemistry — units/elements
    ('chemistry', '12', 15, 3): "In group 15 chemistry, arsenic commonly forms which of the following compounds?",
    ('chemistry', '12', 17, 11): "At room temperature and atmospheric pressure, bromine exists as a:",
    ('chemistry', '12', 17, 12): "At room temperature and atmospheric pressure, iodine exists as a:",
    ('chemistry', '12', 18, 8): "Radon, a noble gas, is best characterised as:",
}

def expand_by_rule(qtext: str, subject: str, topic: str) -> str:
    """Pattern-based expansion. Returns new question text ≥ 15 chars."""
    q = qtext.strip()

    # "X are:" pattern
    if q.endswith(' are:'):
        stem = q[:-5].strip()
        return f"Which of the following best describes what {stem.lower() if stem else 'these entities'} are?"

    # "X is:" / "X is a:" / "X is:"
    if q.endswith(' is:'):
        stem = q[:-4].strip()
        return f"Which of the following best describes what {stem.lower() if stem else 'this'} is?"
    if q.endswith(' is a:'):
        stem = q[:-6].strip()
        return f"Which of the following best describes {stem.lower() if stem else 'this'} as a type of:"
    if q.endswith(' is a '):
        stem = q[:-6].strip()
        return f"In its standard classification, {stem.lower() if stem else 'this'} is a:"

    # "X =" pattern (math/trig identities)
    if q.endswith('='):
        stem = q[:-1].strip()
        return f"Using the standard identity, the value of {stem} is:"

    # "X show(s):" / "X require(s):" — chemistry mechanism qs
    if q.endswith(' shows:'):
        stem = q[:-7].strip()
        return f"With respect to stereochemistry, {stem.lower()} shows which of the following?"
    if q.endswith(' requires:'):
        stem = q[:-10].strip()
        return f"For the reaction to proceed, {stem.lower()} requires:"
    if q.endswith(' forms:'):
        stem = q[:-7].strip()
        return f"Under typical conditions, {stem.lower()} forms which of the following?"
    if q.endswith(' have:'):
        stem = q[:-6].strip()
        return f"With regard to their structure, {stem.lower()} have:"
    if q.endswith(' has:'):
        stem = q[:-5].strip()
        return f"With regard to its structure, {stem.lower()} has:"
    if q.endswith(' gives:') or q.endswith(' produces:'):
        stem = q.rsplit(' ', 1)[0].strip()
        return f"Under the standard conditions of this reaction, {stem.lower()} gives:"

    # Generic question-word endings
    if q.endswith('?'):
        # Already a question, just too short — prefix with subject context
        return f"In the context of {topic.split(' - ')[0].split(' — ')[0][:60]}: {q}"

    # Fallback: prepend topic context
    short_topic = topic.split(' - ')[0].split(' — ')[0].split(',')[0][:60].strip()
    return f"In the context of {short_topic}: {q}"


def normalise(s: str) -> str:
    """Minor cleanup on rule-generated strings (capitalization, double spaces)."""
    s = ' '.join(s.split())
    # Fix lowercase abbreviations that should stay uppercase
    fixes = {'sn1 ': 'SN1 ', 'sn2 ': 'SN2 ', 'e1 ': 'E1 ', 'e2 ': 'E2 ',
             ' sn1': ' SN1', ' sn2': ' SN2', ' e1': ' E1', ' e2': ' E2',
             'kmno': 'KMnO', 'h₂o': 'H₂O', 'h₂s': 'H₂S',
             'dna': 'DNA', 'rna': 'RNA', 'atp': 'ATP', 'adp': 'ADP',
             'nadph': 'NADPH', 'fadh': 'FADH', 'aids': 'AIDS', 'hiv': 'HIV',
             'ph ': 'pH ', 'sn ': 'SN ', 'mcq': 'MCQ'}
    for old, new in fixes.items():
        s = s.replace(old, new)
    return s


def fix_file(subject: str):
    path = DATA / f'{subject}-quizzes.json'
    data = json.loads(path.read_text())
    fixes = 0
    for grade in ('11', '12'):
        for w in data.get(grade, []):
            wk = w['week']
            topic = w.get('topic') or w.get('title') or ''
            for qi, q in enumerate(w['questions']):
                if len(q['question'].strip()) >= 15:
                    continue
                key = (subject, grade, wk, qi)
                if key in OVERRIDES:
                    new_q = OVERRIDES[key]
                else:
                    new_q = expand_by_rule(q['question'], subject, topic)
                new_q = normalise(new_q)
                if len(new_q) < 15:
                    raise RuntimeError(f"Rule produced short result for {key}: {new_q!r} from {q['question']!r}")
                q['question'] = new_q
                fixes += 1
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2))
    print(f"✓ {subject}: expanded {fixes} short questions")
    return fixes


total = 0
for s in ('physics', 'chemistry', 'biology', 'maths-higher'):
    total += fix_file(s)
print(f"\n✅ Expanded {total} short questions total")
