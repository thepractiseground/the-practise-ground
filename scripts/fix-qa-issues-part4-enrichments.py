#!/usr/bin/env python3
"""
QA Fix Part 4: Regenerate 416 broken enrichments for Class 11 & 12
(physics, chemistry, biology, maths-higher).

Strategy:
- Parse the `topic` field robustly — handle parenthetical subtopic lists,
  em-dash/hyphen splits, and comma-separated bullet lists.
- Generate subject-aware, grammatical learning objectives using a verb map
  keyed on the semantic type of each subtopic (process, quantity, law, entity).
- Write study tips (missing on every existing entry) — Class 12 tips are
  board-exam focused (NCERT focus, exemplar, past papers, CBSE marking).
- Use varied intro sentence structures so the output is not monotonous.
"""
import json
import re
import hashlib
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'src' / 'data'

# ── Topic parser ──────────────────────────────────────────────────────────

def clean_subtopic(s: str) -> str:
    """Clean a subtopic string: strip, remove trailing punctuation, balance parens."""
    s = s.strip().strip('.,;:')
    # Balance parentheses: if we have more '(' than ')', strip trailing '('
    o, c = s.count('('), s.count(')')
    if o > c:
        s = s.rstrip('(').strip()
    elif c > o:
        s = s.rstrip(')').strip()
    return s


def parse_topic(topic: str):
    """Return (chapter_name, subtopics_list).

    Examples
    --------
    'Physical World - Scope, Nature of Physical Laws, Fundamental Forces'
      → ('Physical World', ['Scope', 'Nature of Physical Laws', 'Fundamental Forces'])
    'Chemical Bonding – Hybridization (sp, sp², sp³, sp³d, sp³d²)'
      → ('Chemical Bonding', ['Hybridization (sp, sp², sp³, sp³d, sp³d²)'])
    'Revision – Organic Chemistry (Basics & Nomenclature)'
      → ('Revision', ['Organic Chemistry (Basics & Nomenclature)'])
    """
    if not topic:
        return ('Revision', ['key concepts'])
    t = topic.strip()
    # Split on em-dash, en-dash, or hyphen-with-spaces first
    m = re.split(r'\s[-–—]\s', t, maxsplit=1)
    if len(m) == 2:
        chapter = m[0].strip()
        rest = m[1].strip()
    else:
        chapter = t
        rest = ''

    if not rest:
        return (chapter, ['core concepts'])

    # Protect parenthetical commas by substituting temporarily
    protected = []
    def _protect(m):
        protected.append(m.group(0))
        return f'__P{len(protected)-1}__'
    rest_p = re.sub(r'\([^)]*\)', _protect, rest)
    parts = [p.strip() for p in rest_p.split(',') if p.strip()]
    # Restore parens
    def _restore(s):
        for i, p in enumerate(protected):
            s = s.replace(f'__P{i}__', p)
        return s
    parts = [_restore(p) for p in parts]
    parts = [clean_subtopic(p) for p in parts if clean_subtopic(p)]
    if not parts:
        parts = ['core concepts']
    return (chapter, parts)


# ── Verb selection by subtopic type ───────────────────────────────────────

# Keywords that hint at the *kind* of subtopic, used to pick a sensible verb.
THEOREM_WORDS = ('theorem', 'law', 'principle', 'rule', 'postulate', 'axiom', 'equation')
PROCESS_WORDS = ('reaction', 'synthesis', 'preparation', 'process', 'cycle', 'pathway',
                 'replication', 'transcription', 'translation', 'respiration',
                 'photosynthesis', 'digestion', 'circulation', 'excretion',
                 'fermentation', 'hydrolysis', 'metabolism', 'mitosis', 'meiosis')
QUANTITY_WORDS = ('velocity', 'acceleration', 'momentum', 'force', 'energy', 'power',
                  'pressure', 'temperature', 'frequency', 'wavelength', 'amplitude',
                  'resistance', 'current', 'voltage', 'capacitance', 'inductance',
                  'radius', 'volume', 'mass', 'weight', 'density', 'enthalpy',
                  'entropy', 'concentration', 'molarity', 'ph', 'constant',
                  'rate', 'efficiency', 'ratio', 'proportion', 'factor')
ENTITY_WORDS = ('cell', 'tissue', 'organ', 'organism', 'molecule', 'atom', 'ion',
                'compound', 'element', 'bond', 'hormone', 'enzyme', 'protein',
                'nucleic', 'vitamin', 'bacteria', 'virus', 'fungi', 'algae',
                'family', 'group', 'kingdom', 'species', 'genus', 'metal', 'nonmetal')
STRUCTURE_WORDS = ('structure', 'anatomy', 'morphology', 'configuration', 'shape',
                   'geometry', 'isomerism', 'stereochemistry')
CLASSIFY_WORDS = ('classification', 'types', 'kinds', 'categories', 'varieties')

# Per-subject default objective verbs (used when subtopic doesn't hint a type)
SUBJECT_VERBS = {
    'physics':      ['analyse', 'derive', 'calculate', 'explain', 'apply'],
    'chemistry':    ['identify', 'explain', 'predict', 'write', 'apply'],
    'biology':      ['describe', 'identify', 'compare', 'explain', 'diagram'],
    'maths-higher': ['prove', 'solve', 'evaluate', 'apply', 'verify'],
}


def pick_verb(sub: str, subject: str, idx: int) -> str:
    """Choose a grammatical verb for the given subtopic."""
    s = sub.lower()
    if any(w in s for w in THEOREM_WORDS):
        return 'state and apply' if subject != 'biology' else 'state'
    if any(w in s for w in PROCESS_WORDS):
        return 'describe' if subject == 'biology' else 'explain'
    if any(w in s for w in QUANTITY_WORDS):
        return 'calculate' if subject in ('physics', 'chemistry') else 'evaluate'
    if any(w in s for w in ENTITY_WORDS):
        return 'identify'
    if any(w in s for w in STRUCTURE_WORDS):
        return 'draw and explain' if subject == 'biology' else 'describe'
    if any(w in s for w in CLASSIFY_WORDS):
        return 'classify'
    # Fall back to cycling through subject verbs
    return SUBJECT_VERBS[subject][idx % len(SUBJECT_VERBS[subject])]


def to_objective(sub: str, subject: str, idx: int) -> str:
    """Produce a clean 'Verb + Subtopic' learning objective."""
    verb = pick_verb(sub, subject, idx)
    # Preserve subtopic capitalisation as-is (protects proper nouns, acronyms)
    sub_out = sub.strip()
    return f"{verb.capitalize()} {sub_out}"


# ── Introductions ─────────────────────────────────────────────────────────

INTRO_OPENERS_11 = {
    'physics': [
        "{chapter} is a foundational Grade 11 physics chapter that covers {flist}.",
        "In Grade 11 physics, {chapter} introduces you to {flist}.",
        "This Grade 11 physics unit on {chapter} develops your understanding of {flist}.",
    ],
    'chemistry': [
        "{chapter} is a core Grade 11 chemistry chapter covering {flist}.",
        "In Grade 11 chemistry, {chapter} builds your grasp of {flist}.",
        "This Grade 11 chemistry chapter on {chapter} introduces {flist}.",
    ],
    'biology': [
        "{chapter} is a key Grade 11 biology chapter focusing on {flist}.",
        "In Grade 11 biology, {chapter} explores {flist}.",
        "This Grade 11 biology chapter on {chapter} covers {flist}.",
    ],
    'maths-higher': [
        "{chapter} is a central Grade 11 mathematics chapter covering {flist}.",
        "In Grade 11 advanced mathematics, {chapter} develops techniques for {flist}.",
        "This Grade 11 mathematics chapter on {chapter} introduces {flist}.",
    ],
}

INTRO_CLOSERS_11 = {
    'physics': [
        "Solid foundations here make later chapters on mechanics, electromagnetism, and modern physics much easier.",
        "Mastering these ideas sharpens your problem-solving for numericals and conceptual questions alike.",
        "These concepts reappear throughout Grade 12 and in competitive exams like JEE and NEET.",
    ],
    'chemistry': [
        "A strong base in these ideas makes organic, inorganic, and physical chemistry much more approachable later.",
        "These fundamentals show up repeatedly in NCERT exemplar problems and board questions.",
        "Clear understanding here pays off in competitive exams (JEE/NEET) where speed matters.",
    ],
    'biology': [
        "Mastering this now makes later chapters on plant/animal physiology, genetics, and ecology much smoother.",
        "Concepts introduced here reappear in Grade 12 and are frequent sources of NEET questions.",
        "Clear diagrams and defined terms from this chapter are high-frequency in NCERT exemplar and boards.",
    ],
    'maths-higher': [
        "The logical tools introduced here power later work in calculus, algebra, and vectors.",
        "Speed and accuracy here translate directly into better JEE-level problem solving.",
        "These methods reappear throughout Grade 12 and in board + competitive exam papers.",
    ],
}

INTRO_OPENERS_12 = {
    'physics': [
        "{chapter} is a board-exam essential in Grade 12 physics covering {flist}.",
        "In CBSE Grade 12 physics, {chapter} is a heavyweight chapter dealing with {flist}.",
        "This Grade 12 physics chapter on {chapter} is a consistent source of board questions on {flist}.",
    ],
    'chemistry': [
        "{chapter} is a high-yield Grade 12 chemistry chapter covering {flist}.",
        "In Grade 12 chemistry, {chapter} is an NCERT-heavy chapter focusing on {flist}.",
        "This Grade 12 chemistry chapter on {chapter} carries strong weightage in boards, exploring {flist}.",
    ],
    'biology': [
        "{chapter} is a board-exam staple in Grade 12 biology covering {flist}.",
        "In NEET and CBSE Grade 12, {chapter} is an essential chapter exploring {flist}.",
        "This Grade 12 biology chapter on {chapter} is a consistent source of diagrams and direct questions on {flist}.",
    ],
    'maths-higher': [
        "{chapter} is a core Grade 12 mathematics chapter carrying significant board weight, covering {flist}.",
        "In Grade 12 advanced mathematics, {chapter} is a theorem-heavy chapter developing {flist}.",
        "This Grade 12 mathematics chapter on {chapter} is high-yield for CBSE + JEE, exploring {flist}.",
    ],
}

INTRO_CLOSERS_12 = {
    'physics': [
        "This chapter often carries 6-8 marks in CBSE boards — direct numerical and derivation questions are very common.",
        "Expect at least one long-answer (5-mark) question from this chapter on the board paper almost every year.",
        "For JEE and NEET, this chapter is equally important — conceptual clarity plus quick numerical practice is key.",
    ],
    'chemistry': [
        "This is one of the most scoring chapters in CBSE Grade 12 — direct NCERT questions are frequent.",
        "Expect direct NCERT intext and exercise questions to reappear on the board paper almost verbatim.",
        "Strong command over named reactions and reaction mechanisms here pays off in both boards and JEE.",
    ],
    'biology': [
        "This chapter is a reliable source of 3- and 5-mark questions in CBSE Grade 12 and high-yield for NEET.",
        "Accurate, labelled diagrams from NCERT carry huge weight — practise them until you can draw from memory.",
        "Memorising scientific names, dates, and flowcharts here pays off across boards and NEET MCQs.",
    ],
    'maths-higher': [
        "This chapter regularly carries 8-13 marks in CBSE Grade 12 — theorems + application problems are standard.",
        "Board paper almost always contains one 5-mark proof and two 3-mark application problems from this area.",
        "For JEE, speed on these standard problem types is critical — build fluency through timed practice.",
    ],
}


def _stable_pick(seq, seed_key: str):
    """Pick an item from seq using a stable hash of seed_key (no randomness)."""
    h = int(hashlib.md5(seed_key.encode()).hexdigest(), 16)
    return seq[h % len(seq)]


def format_list(items):
    """Format a list of subtopics into readable prose: 'A, B, and C'."""
    items = [i for i in items if i]
    if not items:
        return 'core concepts'
    if len(items) == 1:
        return items[0]
    if len(items) == 2:
        return f'{items[0]} and {items[1]}'
    return ', '.join(items[:-1]) + f', and {items[-1]}'


def build_intro(subject, grade, chapter, subtopics):
    opener_pool = (INTRO_OPENERS_12 if grade == '12' else INTRO_OPENERS_11)[subject]
    closer_pool = (INTRO_CLOSERS_12 if grade == '12' else INTRO_CLOSERS_11)[subject]
    seed = f'{subject}/{grade}/{chapter}'
    opener = _stable_pick(opener_pool, seed + 'O')
    closer = _stable_pick(closer_pool, seed + 'C')
    flist = format_list(subtopics[:4])
    return f"{opener.format(chapter=chapter, flist=flist)} {closer}"


# ── Study Tips ────────────────────────────────────────────────────────────

STUDY_TIPS_11 = {
    'physics': [
        "Build a formula sheet and revise it before every practice session — physics at this level rewards quick recall.",
        "Always draw a clear free-body or setup diagram before writing equations; most sign errors trace back to sloppy diagrams.",
        "After a practice problem, re-derive the formula you used from first principles — that is the fastest route to deep understanding.",
        "Do the NCERT intext examples and exercises first; they set the tone for the difficulty level you'll face in tests.",
        "Pay careful attention to units and dimensional consistency — it catches most silly mistakes automatically.",
    ],
    'chemistry': [
        "Memorise the periodic table trends and key exceptions early; most of Grade 11 chemistry builds on them.",
        "Keep a dedicated notebook for reactions and mechanisms — writing them out by hand cements the patterns.",
        "Revise the NCERT diagrams (electron dot structures, molecular geometry) until you can reproduce them in under a minute.",
        "Do NCERT intext + exercise questions first, then move to exemplar problems for higher-order practice.",
        "Make flashcards for formulas, definitions, and key constants — 5 minutes of daily review beats a weekend cram.",
    ],
    'biology': [
        "Master the NCERT diagrams — many board and NEET questions come directly from labelling them.",
        "Keep a running glossary of scientific names and technical terms; biology at this level is vocabulary-heavy.",
        "Summarise each chapter as a flowchart or mind map once you finish reading; it helps with long-term recall.",
        "Do NCERT intext and exercise questions first, then attempt NCERT exemplar for concept-testing MCQs.",
        "Revise previous chapters weekly — biology topics interconnect and earlier units are prerequisites for later ones.",
    ],
    'maths-higher': [
        "Write out the full solution step by step — most lost marks at this level are from skipped steps, not wrong ideas.",
        "Do the NCERT exercise questions first, then NCERT exemplar, before tackling any reference-book material.",
        "Maintain a running log of mistakes and theorem conditions — review it before every test to avoid repeat errors.",
        "Time yourself on at least one full exercise per week to build exam-level speed and accuracy.",
        "When stuck, write down what is given, what is to find, and relevant formulas — structure often reveals the path.",
    ],
}

STUDY_TIPS_12 = {
    'physics': [
        "CBSE Grade 12 physics rewards derivation practice — memorise the standard derivations verbatim, then write them out daily from memory.",
        "Solve all NCERT intext + exercise problems; board questions are often lifted directly or with minor number changes.",
        "Maintain a formula sheet with dimensions and limits of applicability; revise it the morning before every test.",
        "Practise previous 10 years of CBSE board papers — you'll see the same 3-4 question types repeat constantly.",
        "For numericals, write 'Given / To find / Formula / Solution' on every problem — the marking scheme rewards this structure.",
    ],
    'chemistry': [
        "NCERT is the single most important book for CBSE Grade 12 chemistry — read it line by line, highlighting exceptions and named reactions.",
        "Make a separate notebook for named reactions with reagent, product, and mechanism; revise it weekly.",
        "Solve NCERT intext + exercise + exemplar questions; board questions are frequently verbatim or very close.",
        "For numericals (solutions, electrochemistry, kinetics), practise until your setup is automatic — speed saves the exam.",
        "Practise previous 10 years of CBSE board papers with a timer; you'll spot the high-frequency question patterns quickly.",
    ],
    'biology': [
        "NCERT is non-negotiable for CBSE Grade 12 biology — direct one-liners from the textbook appear every year.",
        "Master NCERT diagrams (ovum, embryo sac, nephron, ECG, DNA replication fork); board questions frequently ask for labelled diagrams.",
        "Memorise scientific names, definitions, and key numerical data from NCERT — 1-mark questions often test exact recall.",
        "Solve NCERT exemplar for concept-testing MCQs, then previous 10 years of CBSE papers for board-style long answers.",
        "Revise in chapter + sub-topic cycles and test yourself weekly — biology's sheer volume makes regular revision essential.",
    ],
    'maths-higher': [
        "Memorise all standard theorems and their proofs word-for-word — CBSE awards proof marks for exact wording + correct steps.",
        "Solve every NCERT exercise and miscellaneous exercise problem; board papers regularly pick from the miscellaneous set.",
        "Maintain a personal formula-and-theorem sheet with conditions of applicability; revise it before each mock exam.",
        "Time yourself on previous 10 years of CBSE board papers; you'll see standard 5-mark problems repeat with minor tweaks.",
        "Double-check every sign and limit of integration — most lost marks in calculus are arithmetic slips, not conceptual errors.",
    ],
}


def build_study_tips(subject, grade, seed):
    pool = (STUDY_TIPS_12 if grade == '12' else STUDY_TIPS_11)[subject]
    # Deterministically pick 3 distinct tips per week using seed-offset hashes
    h = int(hashlib.md5(seed.encode()).hexdigest(), 16)
    picked = []
    for i in range(3):
        idx = (h >> (i * 8)) % len(pool)
        tip = pool[idx]
        # Avoid dupes within the trio
        while tip in picked:
            idx = (idx + 1) % len(pool)
            tip = pool[idx]
        picked.append(tip)
    return picked


# ── Learning objectives ──────────────────────────────────────────────────

def build_objectives(subject, grade, chapter, subtopics):
    """3-5 grammatical objectives."""
    # Filter generic/weak subtopics that lead to meaningless objectives
    picks = [s for s in subtopics if s.lower() not in ('core concepts', 'key concepts', 'concepts', 'problems')]
    picks = picks[:3] if len(picks) >= 3 else picks[:]
    objs = [to_objective(s, subject, i) for i, s in enumerate(picks)]

    # Avoid the 'X concepts concepts' trap when chapter already contains 'concepts'
    chapter_lc = chapter.lower()
    if grade == '12':
        closer = f"Solve CBSE board-pattern problems from {chapter_lc} including NCERT exemplar-level questions"
    else:
        if 'concepts' in chapter_lc:
            closer = f"Apply ideas from {chapter_lc} to NCERT exercise and exemplar problems"
        else:
            closer = f"Apply {chapter_lc} concepts to NCERT exercise and exemplar problems"
    objs.append(closer)

    # If objectives are too few, add a generic study objective
    if len(objs) < 3:
        if grade == '12':
            objs.insert(-1, f"Master the key derivations and worked examples from NCERT for {chapter_lc}")
        else:
            objs.insert(-1, f"Work through NCERT intext examples and exercise questions for {chapter_lc}")

    # Deduplicate while preserving order
    seen = set()
    out = []
    for o in objs:
        k = o.lower().strip()
        if k not in seen:
            seen.add(k)
            out.append(o)
    return out


# ── Main ────────────────────────────────────────────────────────────────

def regenerate():
    enrichment = json.loads((DATA / 'quiz-enrichment.json').read_text())
    subjects = ['physics', 'chemistry', 'biology', 'maths-higher']
    total = 0
    for subj in subjects:
        quiz = json.loads((DATA / f'{subj}-quizzes.json').read_text())
        for grade in ('11', '12'):
            weeks_list = quiz.get(grade, [])
            grade_e = enrichment[subj].setdefault(grade, {})
            for w in weeks_list:
                wk_num = w['week']
                topic = w.get('topic') or w.get('title') or ''
                chapter, subtopics = parse_topic(topic)
                seed = f'{subj}/{grade}/{wk_num}'
                intro = build_intro(subj, grade, chapter, subtopics)
                objs = build_objectives(subj, grade, chapter, subtopics)
                tips = build_study_tips(subj, grade, seed)
                grade_e[str(wk_num)] = {
                    'introduction': intro,
                    'learningObjectives': objs,
                    'studyTips': tips,
                }
                total += 1
    (DATA / 'quiz-enrichment.json').write_text(
        json.dumps(enrichment, ensure_ascii=False, indent=2)
    )
    return total


n = regenerate()
print(f"✅ Regenerated {n} enrichments across physics/chemistry/biology/maths-higher (grades 11 & 12)")

# Sanity-check a few
data = json.loads((DATA / 'quiz-enrichment.json').read_text())
for subj in ('physics', 'chemistry', 'biology', 'maths-higher'):
    for grade in ('11', '12'):
        for wk in ('1', '15', '40'):
            e = data[subj][grade].get(wk)
            if not e:
                continue
            print(f"\n=== {subj}/{grade}/wk{wk} ===")
            print(f"intro: {e['introduction'][:180]}")
            print(f"objectives: {e['learningObjectives']}")
            print(f"tips ({len(e['studyTips'])}): {e['studyTips'][0][:100]}...")
            break
        break
    # Only show first grade/week combo per subject to keep output tight
