#!/usr/bin/env python3
"""
QA Fix Part 1: Quick structural fixes.
- Fix schema bug: rename `title` → `topic` on maths-higher/12 wk47-52
- Fix 2 factually wrong physics answers (12/wk1 Q4, Q20)
- Fix 13 duplicate-option questions
- Add 4th option to chemistry/12/wk32/Q14
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'src' / 'data'

def load(name):
    return json.loads((DATA / f'{name}-quizzes.json').read_text())

def save(name, obj):
    (DATA / f'{name}-quizzes.json').write_text(json.dumps(obj, ensure_ascii=False, indent=2))
    print(f"✓ wrote src/data/{name}-quizzes.json")

physics = load('physics')
chemistry = load('chemistry')
maths_h = load('maths-higher')

# ── FIX A: Rename `title` → `topic` on maths-higher/12 wk47-52 ─────────────
renamed = 0
for w in maths_h.get('12', []):
    if w.get('week') in range(47, 53) and 'title' in w and 'topic' not in w:
        w['topic'] = w.pop('title')
        renamed += 1
print(f"A. Renamed title→topic on {renamed} weeks (maths-higher/12 wk47-52)")

# ── FIX B: Physics Grade 12 Week 1 factual answers ────────────────────────
# Q4: Two identical charges repel 10N at 1m → q = √(Fr²/k) = √(10/9e9) ≈ 3.33e-5 C
# Q20: Dimension of k in Coulomb's law → [M L³ T⁻⁴ A⁻²]
phys12 = physics['12']
wk1 = next(w for w in phys12 if w['week'] == 1)

# Q4
q4 = wk1['questions'][3]  # index 3 = Q4
print(f"B. Physics/12/wk1/Q4 before: Q='{q4['question'][:50]}...' ans='{q4['answer']}' opts={q4['options']}")
q4['options'] = ['3.33×10⁻⁵ C', '1.05×10⁻⁵ C', '1×10⁻⁵ C', '3.33×10⁻⁴ C']
q4['answer'] = '3.33×10⁻⁵ C'
print(f"   Physics/12/wk1/Q4 after: ans='{q4['answer']}' opts={q4['options']}")

# Q20
q20 = wk1['questions'][19]
print(f"   Physics/12/wk1/Q20 before: Q='{q20['question'][:50]}...' ans='{q20['answer']}' opts={q20['options']}")
q20['question'] = 'The dimensional formula of Coulomb\'s constant k is:'
q20['options'] = ['[M L³ T⁻⁴ A⁻²]', '[M L³ T⁻² A⁻²]', '[M L² T⁻³ A⁻¹]', '[M L T⁻² A⁻¹]']
q20['answer'] = '[M L³ T⁻⁴ A⁻²]'
print(f"   Physics/12/wk1/Q20 after: ans='{q20['answer']}' opts={q20['options']}")

# ── FIX C: 13 duplicate-option questions ──────────────────────────────────
# Each fix replaces the duplicate distractor with a new plausible one while
# preserving the correct answer intact.

def fix_q(subject_data, grade, week_num, q_index_1based, new_options, new_answer=None, new_question=None):
    """Locate and patch a question."""
    weeks = subject_data[grade]
    w = next(w for w in weeks if w['week'] == week_num)
    q = w['questions'][q_index_1based - 1]
    if new_question:
        q['question'] = new_question
    q['options'] = new_options
    if new_answer is not None:
        q['answer'] = new_answer
    else:
        # ensure existing answer still in options
        assert q['answer'] in new_options, f"answer missing from options: {q['answer']} not in {new_options}"

# physics/12/wk1/Q14 — Spheres +4μC,-2μC touch, separate 3m. Answer = 1×10⁻³ repulsive (duplicated)
# After touching, charges equalise to (+4-2)/2 = +1μC each. F = k*q²/r² = 9e9*(1e-6)²/9 = 1e-3 N, repulsive.
fix_q(physics, '12', 1, 14,
      ['1×10⁻³ N, repulsive', '1×10⁻³ N, attractive', '0.5×10⁻³ N, repulsive', '2×10⁻³ N, attractive'],
      '1×10⁻³ N, repulsive')

# chemistry/12/wk1/Q5 — edge length of cubic unit cell. Answer = a√3/2 (duplicated)
# body-diagonal distance from corner to centre of cube = a√3/2
fix_q(chemistry, '12', 1, 5,
      ['a/2', 'a√2/2', 'a√3/2', 'a√3'], 'a√3/2')

# chemistry/12/wk33/Q2 — IUPAC name of CH₃COOH. "Acetic acid" duplicated; IUPAC = Ethanoic acid
fix_q(chemistry, '12', 33, 2,
      ['Acetic acid', 'Ethanoic acid', 'Methanoic acid', 'Propanoic acid'], 'Ethanoic acid')

# chemistry/12/wk41/Q8 — Mole fraction of solute in 1 M NaCl (density 1.04 g/mL) ≈ 0.018 (duplicated)
fix_q(chemistry, '12', 41, 8,
      ['0.018', '0.036', '0.10', '0.50'], '0.018')

# maths-higher/g11/wk3/Q21 — R = {(1,a),(2,b),(3,c)}; R⁻¹ = {(a,1),(b,2),(c,3)} (duplicated)
fix_q(maths_h, '11', 3, 21,
      ['{(a,1), (b,2), (c,3)}', '{(1,a), (2,b), (3,c)}', '{(a,3), (b,2), (c,1)}', '{(1,c), (2,b), (3,a)}'],
      '{(a,1), (b,2), (c,3)}')

# maths-higher/g11/wk12/Q13 — √(5-12i) = ±(3-2i) (duplicated)
fix_q(maths_h, '11', 12, 13,
      ['2 - 3i', '±(3 - 2i)', '3 + 2i', '±(2 + 3i)'], '±(3 - 2i)')

# maths-higher/g11/wk19/Q24 — ratio of 4th:3rd term in (a+b)ⁿ = (n-2)b/(3a) (duplicated)
fix_q(maths_h, '11', 19, 24,
      ['(n-2)b/(3a)', '(n-3)b/(3a)', '3b/((n-2)a)', 'b(n-2)/(2a)'], '(n-2)b/(3a)')

# maths-higher/g11/wk23/Q7 — 1²+...+20² = 2870 (duplicated)
fix_q(maths_h, '11', 23, 7,
      ['2870', '2840', '2900', '2660'], '2870')

# maths-higher/g12/wk2/Q17 — Domain of f⁻¹ where f(x) = (x-1)/(x+2). f is 1–1 with range ℝ\{1}, so Dom(f⁻¹)=ℝ\{1}
fix_q(maths_h, '12', 2, 17,
      ['All reals except -2', 'All reals except 1', 'All reals except 0', 'All reals'],
      'All reals except 1')

# maths-higher/g12/wk2/Q24 — inverse of f(x)=e^(2x) = ln(x)/2 (duplicated)
fix_q(maths_h, '12', 2, 24,
      ['ln(x)/2', 'ln(2x)', 'e^(x/2)', '2·ln(x)'], 'ln(x)/2')

# maths-higher/g12/wk8/Q24 — A=[1 2;0 3], A⁻¹=[1 -2/3; 0 1/3] (duplicated)
fix_q(maths_h, '12', 8, 24,
      ['[1 -2/3; 0 1/3]', '[3 -2; 0 1]', '[1 2; 0 3]', 'Does not exist'],
      '[1 -2/3; 0 1/3]')

# maths-higher/g12/wk11/Q20 — A₁ for system 2x+y=5, 3x+2y=8. A₁ = |5 1; 8 2| = 10-8 = 2 (duplicated)
fix_q(maths_h, '12', 11, 20,
      ['2', '5', '6', '10'], '2')

# maths-higher/g12/wk14/Q12 — x=t², y=t³, at t=1 dy/dx = 3/2. "3/2" and "1.5" are SAME; use a single form.
fix_q(maths_h, '12', 14, 12,
      ['3/2', '2/3', '3', '1'], '3/2')

print("C. Fixed 13 duplicate-option questions across physics/chemistry/maths-higher")

# ── FIX D: Chemistry/12/wk32/Q14 — add 4th option ─────────────────────────
# Aldol condensation: β-hydroxy aldehyde (or β-hydroxy ketone) → loses water → α,β-unsaturated carbonyl
# The correct primary product (aldol step) is a β-hydroxy aldehyde.
fix_q(chemistry, '12', 32, 14,
      ['β-hydroxy aldehyde', 'α,β-unsaturated aldehyde', 'Ester', 'Carboxylic acid'],
      'β-hydroxy aldehyde')
print("D. Added 4th option to chemistry/12/wk32/Q14")

# ── Save all ──────────────────────────────────────────────────────────────
save('physics', physics)
save('chemistry', chemistry)
save('maths-higher', maths_h)

print("\n✅ Part 1 fixes applied.")
