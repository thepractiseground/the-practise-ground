// Summer Challenge: 8-week curated curriculum per grade
// Each week maps to specific quiz weeks from existing data files

export interface ChallengeSubject {
  subject: "English" | "Maths" | "Science" | "Physics" | "Chemistry" | "Biology";
  quizWeek: number;
  topic: string;
  quizPath: string;
}

export interface ChallengeWeek {
  week: number;
  theme: string;
  subjects: ChallengeSubject[];
}

export interface GradeChallenge {
  grade: number;
  weeks: ChallengeWeek[];
}

export const SUMMER_CHALLENGE: Record<number, GradeChallenge> = {
  5: {
    grade: 5,
    weeks: [
      {
        week: 1,
        theme: "Building Blocks",
        subjects: [
          { subject: "English", quizWeek: 1, topic: "Sentences – Structure & Types", quizPath: "/quiz/5/1" },
          { subject: "Maths", quizWeek: 1, topic: "Place Value (up to lakhs/millions)", quizPath: "/quiz/maths/5/1" },
          { subject: "Science", quizWeek: 1, topic: "Living and Non-Living Things", quizPath: "/quiz/science/5/1" },
        ],
      },
      {
        week: 2,
        theme: "Words & Numbers",
        subjects: [
          { subject: "English", quizWeek: 2, topic: "Nouns – Types & Number", quizPath: "/quiz/5/2" },
          { subject: "Maths", quizWeek: 5, topic: "Addition & Subtraction (up to 6 digits)", quizPath: "/quiz/maths/5/5" },
          { subject: "Science", quizWeek: 6, topic: "Food and Nutrition", quizPath: "/quiz/science/5/6" },
        ],
      },
      {
        week: 3,
        theme: "Action & Operations",
        subjects: [
          { subject: "English", quizWeek: 5, topic: "Verbs – Action, Linking, Tense", quizPath: "/quiz/5/5" },
          { subject: "Maths", quizWeek: 7, topic: "Multiplication (2-3 digit)", quizPath: "/quiz/maths/5/7" },
          { subject: "Science", quizWeek: 7, topic: "States of Matter", quizPath: "/quiz/science/5/7" },
        ],
      },
      {
        week: 4,
        theme: "Descriptions & Fractions",
        subjects: [
          { subject: "English", quizWeek: 7, topic: "Adjectives – Types & Degrees", quizPath: "/quiz/5/7" },
          { subject: "Maths", quizWeek: 15, topic: "Fractions (types, equivalence)", quizPath: "/quiz/maths/5/15" },
          { subject: "Science", quizWeek: 11, topic: "Force, Work, and Energy", quizPath: "/quiz/science/5/11" },
        ],
      },
      {
        week: 5,
        theme: "Tenses & Decimals",
        subjects: [
          { subject: "English", quizWeek: 6, topic: "Verb Tenses – Present, Past, Future", quizPath: "/quiz/5/6" },
          { subject: "Maths", quizWeek: 19, topic: "Decimals (place value, comparison)", quizPath: "/quiz/maths/5/19" },
          { subject: "Science", quizWeek: 13, topic: "Light – Sources, Shadows, Reflection", quizPath: "/quiz/science/5/13" },
        ],
      },
      {
        week: 6,
        theme: "Connections & Geometry",
        subjects: [
          { subject: "English", quizWeek: 14, topic: "Conjunctions", quizPath: "/quiz/5/14" },
          { subject: "Maths", quizWeek: 23, topic: "Geometry - Lines & Angles", quizPath: "/quiz/maths/5/23" },
          { subject: "Science", quizWeek: 17, topic: "The Solar System", quizPath: "/quiz/science/5/17" },
        ],
      },
      {
        week: 7,
        theme: "Vocabulary & Measurement",
        subjects: [
          { subject: "English", quizWeek: 23, topic: "Synonyms & Antonyms", quizPath: "/quiz/5/23" },
          { subject: "Maths", quizWeek: 29, topic: "Perimeter", quizPath: "/quiz/maths/5/29" },
          { subject: "Science", quizWeek: 21, topic: "Habitats and Ecosystems", quizPath: "/quiz/science/5/21" },
        ],
      },
      {
        week: 8,
        theme: "Comprehension & Review",
        subjects: [
          { subject: "English", quizWeek: 37, topic: "Reading Comprehension", quizPath: "/quiz/5/37" },
          { subject: "Maths", quizWeek: 31, topic: "Area (rectangles, squares)", quizPath: "/quiz/maths/5/31" },
          { subject: "Science", quizWeek: 25, topic: "Circulatory System", quizPath: "/quiz/science/5/25" },
        ],
      },
    ],
  },
  6: {
    grade: 6,
    weeks: [
      {
        week: 1,
        theme: "Building Blocks",
        subjects: [
          { subject: "English", quizWeek: 1, topic: "Sentences & Sentence Structure", quizPath: "/quiz/6/1" },
          { subject: "Maths", quizWeek: 1, topic: "Integers: Number Line", quizPath: "/quiz/maths/6/1" },
          { subject: "Science", quizWeek: 2, topic: "Components of Food", quizPath: "/quiz/science/6/2" },
        ],
      },
      {
        week: 2,
        theme: "Parts of Speech & Operations",
        subjects: [
          { subject: "English", quizWeek: 3, topic: "Nouns", quizPath: "/quiz/6/3" },
          { subject: "Maths", quizWeek: 4, topic: "BODMAS", quizPath: "/quiz/maths/6/4" },
          { subject: "Science", quizWeek: 7, topic: "Getting to Know Plants", quizPath: "/quiz/science/6/7" },
        ],
      },
      {
        week: 3,
        theme: "Action & Fractions",
        subjects: [
          { subject: "English", quizWeek: 5, topic: "Verbs – Action, Linking, Helping", quizPath: "/quiz/6/5" },
          { subject: "Maths", quizWeek: 7, topic: "Fractions: Compare", quizPath: "/quiz/maths/6/7" },
          { subject: "Science", quizWeek: 10, topic: "Motion and Measurement", quizPath: "/quiz/science/6/10" },
        ],
      },
      {
        week: 4,
        theme: "Tenses & Decimals",
        subjects: [
          { subject: "English", quizWeek: 6, topic: "Verb Tenses – Present, Past, Future", quizPath: "/quiz/6/6" },
          { subject: "Maths", quizWeek: 10, topic: "Decimals: Add & Subtract", quizPath: "/quiz/maths/6/10" },
          { subject: "Science", quizWeek: 11, topic: "Light, Shadows and Reflections", quizPath: "/quiz/science/6/11" },
        ],
      },
      {
        week: 5,
        theme: "Agreement & Ratios",
        subjects: [
          { subject: "English", quizWeek: 7, topic: "Subject-Verb Agreement", quizPath: "/quiz/6/7" },
          { subject: "Maths", quizWeek: 13, topic: "Ratio: Simplify", quizPath: "/quiz/maths/6/13" },
          { subject: "Science", quizWeek: 12, topic: "Electricity and Circuits", quizPath: "/quiz/science/6/12" },
        ],
      },
      {
        week: 6,
        theme: "Voice & Algebra",
        subjects: [
          { subject: "English", quizWeek: 19, topic: "Active & Passive Voice", quizPath: "/quiz/6/19" },
          { subject: "Maths", quizWeek: 19, topic: "Algebra: Evaluate", quizPath: "/quiz/maths/6/19" },
          { subject: "Science", quizWeek: 17, topic: "The Cell — Building Block of Life", quizPath: "/quiz/science/6/17" },
        ],
      },
      {
        week: 7,
        theme: "Vocabulary & Shapes",
        subjects: [
          { subject: "English", quizWeek: 14, topic: "Synonyms & Antonyms", quizPath: "/quiz/6/14" },
          { subject: "Maths", quizWeek: 25, topic: "Angles: Complement", quizPath: "/quiz/maths/6/25" },
          { subject: "Science", quizWeek: 27, topic: "Heat and Temperature", quizPath: "/quiz/science/6/27" },
        ],
      },
      {
        week: 8,
        theme: "Comprehension & Data",
        subjects: [
          { subject: "English", quizWeek: 29, topic: "Reading Comprehension", quizPath: "/quiz/6/29" },
          { subject: "Maths", quizWeek: 37, topic: "Data: Mean", quizPath: "/quiz/maths/6/37" },
          { subject: "Science", quizWeek: 29, topic: "Physical and Chemical Changes", quizPath: "/quiz/science/6/29" },
        ],
      },
    ],
  },
  7: {
    grade: 7,
    weeks: [
      {
        week: 1,
        theme: "Foundations",
        subjects: [
          { subject: "English", quizWeek: 1, topic: "Types of Sentences", quizPath: "/quiz/7/1" },
          { subject: "Maths", quizWeek: 1, topic: "Integers: Multiply", quizPath: "/quiz/maths/7/1" },
          { subject: "Science", quizWeek: 1, topic: "Nutrition in Plants", quizPath: "/quiz/science/7/1" },
        ],
      },
      {
        week: 2,
        theme: "Grammar & Fractions",
        subjects: [
          { subject: "English", quizWeek: 5, topic: "Pronouns – Types & Usage", quizPath: "/quiz/7/5" },
          { subject: "Maths", quizWeek: 4, topic: "Fractions: Multiply", quizPath: "/quiz/maths/7/4" },
          { subject: "Science", quizWeek: 4, topic: "Heat", quizPath: "/quiz/science/7/4" },
        ],
      },
      {
        week: 3,
        theme: "Tenses & Rationals",
        subjects: [
          { subject: "English", quizWeek: 9, topic: "Verb Tenses – Present, Past, Future", quizPath: "/quiz/7/9" },
          { subject: "Maths", quizWeek: 7, topic: "Rational Numbers: Order", quizPath: "/quiz/maths/7/7" },
          { subject: "Science", quizWeek: 6, topic: "Physical and Chemical Changes", quizPath: "/quiz/science/7/6" },
        ],
      },
      {
        week: 4,
        theme: "Voice & Algebra",
        subjects: [
          { subject: "English", quizWeek: 17, topic: "Active & Passive Voice", quizPath: "/quiz/7/17" },
          { subject: "Maths", quizWeek: 13, topic: "Algebra: Simplify", quizPath: "/quiz/maths/7/13" },
          { subject: "Science", quizWeek: 10, topic: "Respiration in Organisms", quizPath: "/quiz/science/7/10" },
        ],
      },
      {
        week: 5,
        theme: "Speech & Equations",
        subjects: [
          { subject: "English", quizWeek: 18, topic: "Direct & Indirect Speech", quizPath: "/quiz/7/18" },
          { subject: "Maths", quizWeek: 16, topic: "Equations: One-Step", quizPath: "/quiz/maths/7/16" },
          { subject: "Science", quizWeek: 13, topic: "Motion and Time", quizPath: "/quiz/science/7/13" },
        ],
      },
      {
        week: 6,
        theme: "Clauses & Geometry",
        subjects: [
          { subject: "English", quizWeek: 15, topic: "Phrases & Clauses", quizPath: "/quiz/7/15" },
          { subject: "Maths", quizWeek: 28, topic: "Triangles: Angles", quizPath: "/quiz/maths/7/28" },
          { subject: "Science", quizWeek: 15, topic: "Light", quizPath: "/quiz/science/7/15" },
        ],
      },
      {
        week: 7,
        theme: "Vocabulary & Percent",
        subjects: [
          { subject: "English", quizWeek: 20, topic: "Vocabulary – Synonyms, Antonyms", quizPath: "/quiz/7/20" },
          { subject: "Maths", quizWeek: 22, topic: "Percent: Profit/Loss", quizPath: "/quiz/maths/7/22" },
          { subject: "Science", quizWeek: 19, topic: "The Cell — Structure and Functions", quizPath: "/quiz/science/7/19" },
        ],
      },
      {
        week: 8,
        theme: "Comprehension & Data",
        subjects: [
          { subject: "English", quizWeek: 26, topic: "Reading Comprehension", quizPath: "/quiz/7/26" },
          { subject: "Maths", quizWeek: 40, topic: "Data: Probability", quizPath: "/quiz/maths/7/40" },
          { subject: "Science", quizWeek: 25, topic: "Sound", quizPath: "/quiz/science/7/25" },
        ],
      },
    ],
  },
  8: {
    grade: 8,
    weeks: [
      {
        week: 1,
        theme: "Foundations",
        subjects: [
          { subject: "English", quizWeek: 1, topic: "Types of Sentences & Functions", quizPath: "/quiz/8/1" },
          { subject: "Maths", quizWeek: 1, topic: "Rational Numbers", quizPath: "/quiz/maths/8/1" },
          { subject: "Science", quizWeek: 8, topic: "Cell — Structure and Functions", quizPath: "/quiz/science/8/8" },
        ],
      },
      {
        week: 2,
        theme: "Grammar & Equations",
        subjects: [
          { subject: "English", quizWeek: 7, topic: "Verb Tenses – Simple, Continuous, Perfect", quizPath: "/quiz/8/7" },
          { subject: "Maths", quizWeek: 4, topic: "Linear Equations", quizPath: "/quiz/maths/8/4" },
          { subject: "Science", quizWeek: 4, topic: "Materials — Metals and Non-Metals", quizPath: "/quiz/science/8/4" },
        ],
      },
      {
        week: 3,
        theme: "Voice & Exponents",
        subjects: [
          { subject: "English", quizWeek: 11, topic: "Active & Passive Voice", quizPath: "/quiz/8/11" },
          { subject: "Maths", quizWeek: 7, topic: "Powers & Exponents", quizPath: "/quiz/maths/8/7" },
          { subject: "Science", quizWeek: 11, topic: "Force and Pressure", quizPath: "/quiz/science/8/11" },
        ],
      },
      {
        week: 4,
        theme: "Speech & Algebra",
        subjects: [
          { subject: "English", quizWeek: 12, topic: "Direct & Indirect Speech", quizPath: "/quiz/8/12" },
          { subject: "Maths", quizWeek: 16, topic: "Algebraic Expressions", quizPath: "/quiz/maths/8/16" },
          { subject: "Science", quizWeek: 13, topic: "Sound", quizPath: "/quiz/science/8/13" },
        ],
      },
      {
        week: 5,
        theme: "Clauses & Percentage",
        subjects: [
          { subject: "English", quizWeek: 14, topic: "Clauses – Noun, Adjective, Adverb", quizPath: "/quiz/8/14" },
          { subject: "Maths", quizWeek: 22, topic: "Percentage & Profit", quizPath: "/quiz/maths/8/22" },
          { subject: "Science", quizWeek: 17, topic: "Light — Reflection", quizPath: "/quiz/science/8/17" },
        ],
      },
      {
        week: 6,
        theme: "Non-finites & Geometry",
        subjects: [
          { subject: "English", quizWeek: 10, topic: "Non-finite Verbs", quizPath: "/quiz/8/10" },
          { subject: "Maths", quizWeek: 31, topic: "Quadrilaterals", quizPath: "/quiz/maths/8/31" },
          { subject: "Science", quizWeek: 22, topic: "Circulatory System", quizPath: "/quiz/science/8/22" },
        ],
      },
      {
        week: 7,
        theme: "Vocabulary & Mensuration",
        subjects: [
          { subject: "English", quizWeek: 20, topic: "Synonyms & Antonyms", quizPath: "/quiz/8/20" },
          { subject: "Maths", quizWeek: 37, topic: "Mensuration", quizPath: "/quiz/maths/8/37" },
          { subject: "Science", quizWeek: 29, topic: "Ecosystem and Food Chains", quizPath: "/quiz/science/8/29" },
        ],
      },
      {
        week: 8,
        theme: "Comprehension & Data",
        subjects: [
          { subject: "English", quizWeek: 31, topic: "Reading Comprehension", quizPath: "/quiz/8/31" },
          { subject: "Maths", quizWeek: 43, topic: "Data Handling", quizPath: "/quiz/maths/8/43" },
          { subject: "Science", quizWeek: 19, topic: "Stars and the Solar System", quizPath: "/quiz/science/8/19" },
        ],
      },
    ],
  },
  9: {
    grade: 9,
    weeks: [
      {
        week: 1,
        theme: "Foundations",
        subjects: [
          { subject: "English", quizWeek: 2, topic: "Tenses — Present, Past, Future", quizPath: "/quiz/9/2" },
          { subject: "Maths", quizWeek: 1, topic: "Number Systems", quizPath: "/quiz/maths/9/1" },
          { subject: "Science", quizWeek: 1, topic: "Matter — Nature and Behaviour", quizPath: "/quiz/science/9/1" },
        ],
      },
      {
        week: 2,
        theme: "Grammar & Polynomials",
        subjects: [
          { subject: "English", quizWeek: 5, topic: "Reported Speech", quizPath: "/quiz/9/5" },
          { subject: "Maths", quizWeek: 4, topic: "Polynomials", quizPath: "/quiz/maths/9/4" },
          { subject: "Science", quizWeek: 4, topic: "Atoms and Molecules", quizPath: "/quiz/science/9/4" },
        ],
      },
      {
        week: 3,
        theme: "Voice & Coordinates",
        subjects: [
          { subject: "English", quizWeek: 10, topic: "Voice (Active and Passive)", quizPath: "/quiz/9/10" },
          { subject: "Maths", quizWeek: 7, topic: "Coordinate Geometry", quizPath: "/quiz/maths/9/7" },
          { subject: "Science", quizWeek: 6, topic: "Cell — The Fundamental Unit of Life", quizPath: "/quiz/science/9/6" },
        ],
      },
      {
        week: 4,
        theme: "Clauses & Equations",
        subjects: [
          { subject: "English", quizWeek: 9, topic: "Clauses (Noun, Adjective, Adverb)", quizPath: "/quiz/9/9" },
          { subject: "Maths", quizWeek: 10, topic: "Linear Equations in Two Variables", quizPath: "/quiz/maths/9/10" },
          { subject: "Science", quizWeek: 8, topic: "Motion", quizPath: "/quiz/science/9/8" },
        ],
      },
      {
        week: 5,
        theme: "Connectors & Triangles",
        subjects: [
          { subject: "English", quizWeek: 12, topic: "Cohesive Devices", quizPath: "/quiz/9/12" },
          { subject: "Maths", quizWeek: 16, topic: "Triangle Congruence", quizPath: "/quiz/maths/9/16" },
          { subject: "Science", quizWeek: 10, topic: "Force and Laws of Motion", quizPath: "/quiz/science/9/10" },
        ],
      },
      {
        week: 6,
        theme: "Transformation & Circles",
        subjects: [
          { subject: "English", quizWeek: 21, topic: "Transformation of Sentences", quizPath: "/quiz/9/21" },
          { subject: "Maths", quizWeek: 25, topic: "Circles", quizPath: "/quiz/maths/9/25" },
          { subject: "Science", quizWeek: 14, topic: "Work and Energy", quizPath: "/quiz/science/9/14" },
        ],
      },
      {
        week: 7,
        theme: "Vocabulary & Statistics",
        subjects: [
          { subject: "English", quizWeek: 49, topic: "Vocabulary in Context", quizPath: "/quiz/9/49" },
          { subject: "Maths", quizWeek: 37, topic: "Statistics", quizPath: "/quiz/maths/9/37" },
          { subject: "Science", quizWeek: 16, topic: "Sound", quizPath: "/quiz/science/9/16" },
        ],
      },
      {
        week: 8,
        theme: "Comprehension & Probability",
        subjects: [
          { subject: "English", quizWeek: 26, topic: "Reading Comprehension", quizPath: "/quiz/9/26" },
          { subject: "Maths", quizWeek: 40, topic: "Probability", quizPath: "/quiz/maths/9/40" },
          { subject: "Science", quizWeek: 18, topic: "Diversity in Living Organisms", quizPath: "/quiz/science/9/18" },
        ],
      },
    ],
  },
  10: {
    grade: 10,
    weeks: [
      {
        week: 1,
        theme: "Foundations",
        subjects: [
          { subject: "English", quizWeek: 1, topic: "Tense Consistency & Sequence", quizPath: "/quiz/10/1" },
          { subject: "Maths", quizWeek: 1, topic: "Real Numbers — Euclid's Division", quizPath: "/quiz/maths/10/1" },
          { subject: "Science", quizWeek: 1, topic: "Chemical Reactions and Equations", quizPath: "/quiz/science/10/1" },
        ],
      },
      {
        week: 2,
        theme: "Grammar & Polynomials",
        subjects: [
          { subject: "English", quizWeek: 4, topic: "Narration (Reported Speech)", quizPath: "/quiz/10/4" },
          { subject: "Maths", quizWeek: 5, topic: "Polynomials — Zeroes", quizPath: "/quiz/maths/10/5" },
          { subject: "Science", quizWeek: 2, topic: "Acids, Bases and Salts", quizPath: "/quiz/science/10/2" },
        ],
      },
      {
        week: 3,
        theme: "Editing & Equations",
        subjects: [
          { subject: "English", quizWeek: 6, topic: "Editing & Omission", quizPath: "/quiz/10/6" },
          { subject: "Maths", quizWeek: 9, topic: "Linear Equations — Graphical", quizPath: "/quiz/maths/10/9" },
          { subject: "Science", quizWeek: 6, topic: "Life Processes — Nutrition", quizPath: "/quiz/science/10/6" },
        ],
      },
      {
        week: 4,
        theme: "Cloze & Quadratics",
        subjects: [
          { subject: "English", quizWeek: 7, topic: "Gap-Filling / Cloze", quizPath: "/quiz/10/7" },
          { subject: "Maths", quizWeek: 13, topic: "Quadratic Equations — Factorisation", quizPath: "/quiz/maths/10/13" },
          { subject: "Science", quizWeek: 10, topic: "Control and Coordination — Nervous System", quizPath: "/quiz/science/10/10" },
        ],
      },
      {
        week: 5,
        theme: "Comprehension & Trigonometry",
        subjects: [
          { subject: "English", quizWeek: 12, topic: "Reading Comprehension & Inference", quizPath: "/quiz/10/12" },
          { subject: "Maths", quizWeek: 29, topic: "Trigonometry — Ratios", quizPath: "/quiz/maths/10/29" },
          { subject: "Science", quizWeek: 17, topic: "Light — Reflection", quizPath: "/quiz/science/10/17" },
        ],
      },
      {
        week: 6,
        theme: "Discourse & Geometry",
        subjects: [
          { subject: "English", quizWeek: 18, topic: "Discourse Markers & Cohesion", quizPath: "/quiz/10/18" },
          { subject: "Maths", quizWeek: 25, topic: "Triangles — Similarity", quizPath: "/quiz/maths/10/25" },
          { subject: "Science", quizWeek: 21, topic: "Electricity — Current and Circuits", quizPath: "/quiz/science/10/21" },
        ],
      },
      {
        week: 7,
        theme: "Writing & Statistics",
        subjects: [
          { subject: "English", quizWeek: 13, topic: "Vocabulary in Context & Word Formation", quizPath: "/quiz/10/13" },
          { subject: "Maths", quizWeek: 45, topic: "Statistics — Mean (Grouped Data)", quizPath: "/quiz/maths/10/45" },
          { subject: "Science", quizWeek: 14, topic: "Heredity and Evolution", quizPath: "/quiz/science/10/14" },
        ],
      },
      {
        week: 8,
        theme: "Review & Probability",
        subjects: [
          { subject: "English", quizWeek: 25, topic: "Integrated Grammar Review", quizPath: "/quiz/10/25" },
          { subject: "Maths", quizWeek: 49, topic: "Probability — Classical", quizPath: "/quiz/maths/10/49" },
          { subject: "Science", quizWeek: 25, topic: "Our Environment", quizPath: "/quiz/science/10/25" },
        ],
      },
    ],
  },
  11: {
    grade: 11,
    weeks: [
      {
        week: 1,
        theme: "Foundations",
        subjects: [
          { subject: "English", quizWeek: 1, topic: "Advanced Tenses – Present Perfect & Present Perfect Continuous", quizPath: "/quiz/11/1" },
          { subject: "Maths", quizWeek: 1, topic: "Sets – Concepts, Notation & Types of Sets", quizPath: "/quiz/maths/11/1" },
          { subject: "Physics", quizWeek: 1, topic: "Physical World – Scope, Nature of Physical Laws", quizPath: "/quiz/physics/11/1" },
          { subject: "Chemistry", quizWeek: 1, topic: "Some Basic Concepts – Matter, Laws of Chemical Combination", quizPath: "/quiz/chemistry/11/1" },
          { subject: "Biology", quizWeek: 1, topic: "The Living World – Characteristics, Biodiversity, Taxonomy", quizPath: "/quiz/biology/11/1" },
        ],
      },
      {
        week: 2,
        theme: "Language & Logic",
        subjects: [
          { subject: "English", quizWeek: 3, topic: "Modals – Obligation, Permission, Ability & Possibility", quizPath: "/quiz/11/3" },
          { subject: "Maths", quizWeek: 5, topic: "Trigonometric Functions – Angles, Degree & Radian Measure", quizPath: "/quiz/maths/11/5" },
          { subject: "Physics", quizWeek: 5, topic: "Motion in a Straight Line – Acceleration, Equations of Motion", quizPath: "/quiz/physics/11/5" },
          { subject: "Chemistry", quizWeek: 5, topic: "Structure of Atom – Bohr's Model, Quantum Numbers", quizPath: "/quiz/chemistry/11/5" },
          { subject: "Biology", quizWeek: 3, topic: "Biological Classification – Five Kingdom Classification", quizPath: "/quiz/biology/11/3" },
        ],
      },
      {
        week: 3,
        theme: "Numbers & Patterns",
        subjects: [
          { subject: "English", quizWeek: 5, topic: "Clauses – Noun, Adjective & Adverb Clauses", quizPath: "/quiz/11/5" },
          { subject: "Maths", quizWeek: 10, topic: "Complex Numbers – Modulus, Conjugate, Argand Plane", quizPath: "/quiz/maths/11/10" },
          { subject: "Physics", quizWeek: 7, topic: "Motion in a Plane – Scalars & Vectors, Vector Addition", quizPath: "/quiz/physics/11/7" },
          { subject: "Chemistry", quizWeek: 10, topic: "Chemical Bonding – Covalent Bond, Lewis Structures", quizPath: "/quiz/chemistry/11/10" },
          { subject: "Biology", quizWeek: 10, topic: "Animal Kingdom – Basis of Classification", quizPath: "/quiz/biology/11/10" },
        ],
      },
      {
        week: 4,
        theme: "Forces & Structures",
        subjects: [
          { subject: "English", quizWeek: 10, topic: "Error Correction & Editing (CBSE Board Pattern)", quizPath: "/quiz/11/10" },
          { subject: "Maths", quizWeek: 15, topic: "Combinations – Formulae & Applications", quizPath: "/quiz/maths/11/15" },
          { subject: "Physics", quizWeek: 12, topic: "Laws of Motion – Newton's Third Law, Free Body Diagrams", quizPath: "/quiz/physics/11/12" },
          { subject: "Chemistry", quizWeek: 12, topic: "Chemical Bonding – Hybridization (sp, sp², sp³)", quizPath: "/quiz/chemistry/11/12" },
          { subject: "Biology", quizWeek: 15, topic: "Morphology of Flowering Plants – Root System, Stem", quizPath: "/quiz/biology/11/15" },
        ],
      },
      {
        week: 5,
        theme: "Energy & Reactions",
        subjects: [
          { subject: "English", quizWeek: 18, topic: "Reading Comprehension – Factual Passages", quizPath: "/quiz/11/18" },
          { subject: "Maths", quizWeek: 18, topic: "Binomial Theorem – Applications & Middle Term", quizPath: "/quiz/maths/11/18" },
          { subject: "Physics", quizWeek: 15, topic: "Work, Energy and Power – Work-Energy Theorem", quizPath: "/quiz/physics/11/15" },
          { subject: "Chemistry", quizWeek: 15, topic: "Chemical Thermodynamics – First Law, State Functions", quizPath: "/quiz/chemistry/11/15" },
          { subject: "Biology", quizWeek: 25, topic: "Cell – Cell Membrane, Endomembrane System", quizPath: "/quiz/biology/11/25" },
        ],
      },
      {
        week: 6,
        theme: "Matter & Life",
        subjects: [
          { subject: "English", quizWeek: 25, topic: "Speech Writing – Structure, Tone & Persuasion", quizPath: "/quiz/11/25" },
          { subject: "Maths", quizWeek: 25, topic: "Conic Sections – Circle (Standard & General Form)", quizPath: "/quiz/maths/11/25" },
          { subject: "Physics", quizWeek: 25, topic: "Mechanical Properties of Fluids – Pascal's Law, Bernoulli", quizPath: "/quiz/physics/11/25" },
          { subject: "Chemistry", quizWeek: 18, topic: "Equilibrium – Physical & Chemical, Law of Mass Action", quizPath: "/quiz/chemistry/11/18" },
          { subject: "Biology", quizWeek: 30, topic: "Biomolecules – Carbohydrates", quizPath: "/quiz/biology/11/30" },
        ],
      },
      {
        week: 7,
        theme: "Waves & Organic Chemistry",
        subjects: [
          { subject: "English", quizWeek: 35, topic: "Discovering Tut: The Saga Continues - A.R. Williams", quizPath: "/quiz/11/35" },
          { subject: "Maths", quizWeek: 35, topic: "Statistics – Measures of Dispersion", quizPath: "/quiz/maths/11/35" },
          { subject: "Physics", quizWeek: 35, topic: "Oscillations – Simple Harmonic Motion (SHM)", quizPath: "/quiz/physics/11/35" },
          { subject: "Chemistry", quizWeek: 25, topic: "Organic Chemistry – IUPAC Nomenclature", quizPath: "/quiz/chemistry/11/25" },
          { subject: "Biology", quizWeek: 35, topic: "Transport in Plants – Transpiration, Translocation", quizPath: "/quiz/biology/11/35" },
        ],
      },
      {
        week: 8,
        theme: "Revision & Integration",
        subjects: [
          { subject: "English", quizWeek: 50, topic: "Albert Einstein at School - Patrick Pringle", quizPath: "/quiz/11/50" },
          { subject: "Maths", quizWeek: 52, topic: "Revision – Statistics, Probability & Applied Maths", quizPath: "/quiz/maths/11/52" },
          { subject: "Physics", quizWeek: 52, topic: "Comprehensive Revision – Full Syllabus", quizPath: "/quiz/physics/11/52" },
          { subject: "Chemistry", quizWeek: 52, topic: "Comprehensive Revision – Full Syllabus", quizPath: "/quiz/chemistry/11/52" },
          { subject: "Biology", quizWeek: 52, topic: "Chemical Coordination – Feedback Mechanisms", quizPath: "/quiz/biology/11/52" },
        ],
      },
    ],
  },
  12: {
    grade: 12,
    weeks: [
      {
        week: 1,
        theme: "Foundation Week",
        subjects: [
          { subject: "English", quizWeek: 1, topic: "Tenses (Present, Past, Future - All Forms)", quizPath: "/quiz/12/1" },
          { subject: "Maths", quizWeek: 1, topic: "Relations (types, equivalence)", quizPath: "/quiz/maths/12/1" },
          { subject: "Physics", quizWeek: 1, topic: "Electric Charges and Fields – Coulomb's Law", quizPath: "/quiz/physics/12/1" },
          { subject: "Chemistry", quizWeek: 1, topic: "Solid State – Crystal Lattices, Unit Cells", quizPath: "/quiz/chemistry/12/1" },
          { subject: "Biology", quizWeek: 1, topic: "Reproduction in Organisms – Asexual & Sexual", quizPath: "/quiz/biology/12/1" },
        ],
      },
      {
        week: 2,
        theme: "Core Concepts",
        subjects: [
          { subject: "English", quizWeek: 5, topic: "Reported Speech / Indirect Speech", quizPath: "/quiz/12/5" },
          { subject: "Maths", quizWeek: 5, topic: "Matrix Operations (addition, scalar multiplication)", quizPath: "/quiz/maths/12/5" },
          { subject: "Physics", quizWeek: 7, topic: "Current Electricity – Ohm's Law, Drift Velocity", quizPath: "/quiz/physics/12/7" },
          { subject: "Chemistry", quizWeek: 7, topic: "Electrochemistry – Nernst Equation, Conductance", quizPath: "/quiz/chemistry/12/7" },
          { subject: "Biology", quizWeek: 9, topic: "Principles of Inheritance – Mendel's Laws", quizPath: "/quiz/biology/12/9" },
        ],
      },
      {
        week: 3,
        theme: "Advanced Understanding",
        subjects: [
          { subject: "English", quizWeek: 9, topic: "Sentence Reordering & Transformation", quizPath: "/quiz/12/9" },
          { subject: "Maths", quizWeek: 12, topic: "Continuity of Functions", quizPath: "/quiz/maths/12/12" },
          { subject: "Physics", quizWeek: 9, topic: "Current Electricity – Kirchhoff's Laws, Wheatstone Bridge", quizPath: "/quiz/physics/12/9" },
          { subject: "Chemistry", quizWeek: 9, topic: "Chemical Kinetics – Rate of Reaction, Rate Law", quizPath: "/quiz/chemistry/12/9" },
          { subject: "Biology", quizWeek: 14, topic: "Pedigree Analysis, Genetic Disorders", quizPath: "/quiz/biology/12/14" },
        ],
      },
      {
        week: 4,
        theme: "Applied Learning",
        subjects: [
          { subject: "English", quizWeek: 14, topic: "Reading Comprehension – Discursive Passages", quizPath: "/quiz/12/14" },
          { subject: "Maths", quizWeek: 14, topic: "Derivatives of Standard Functions", quizPath: "/quiz/maths/12/14" },
          { subject: "Physics", quizWeek: 12, topic: "Moving Charges and Magnetism – Ampere's Law", quizPath: "/quiz/physics/12/12" },
          { subject: "Chemistry", quizWeek: 12, topic: "Surface Chemistry – Adsorption, Catalysis", quizPath: "/quiz/chemistry/12/12" },
          { subject: "Biology", quizWeek: 18, topic: "Molecular Basis of Inheritance – Translation, Genetic Code", quizPath: "/quiz/biology/12/18" },
        ],
      },
      {
        week: 5,
        theme: "Complex Topics",
        subjects: [
          { subject: "English", quizWeek: 18, topic: "Notice Writing & Invitation Writing", quizPath: "/quiz/12/18" },
          { subject: "Maths", quizWeek: 18, topic: "Maxima and Minima", quizPath: "/quiz/maths/12/18" },
          { subject: "Physics", quizWeek: 22, topic: "Ray Optics – Reflection, Refraction, Total Internal Reflection", quizPath: "/quiz/physics/12/22" },
          { subject: "Chemistry", quizWeek: 22, topic: "Coordination Compounds – Werner's Theory, IUPAC", quizPath: "/quiz/chemistry/12/22" },
          { subject: "Biology", quizWeek: 22, topic: "Evolution – Darwin's Theory, Natural Selection", quizPath: "/quiz/biology/12/22" },
        ],
      },
      {
        week: 6,
        theme: "Specialized Domains",
        subjects: [
          { subject: "English", quizWeek: 22, topic: "Report Writing", quizPath: "/quiz/12/22" },
          { subject: "Maths", quizWeek: 25, topic: "Differential Equations – Variable Separable", quizPath: "/quiz/maths/12/25" },
          { subject: "Physics", quizWeek: 27, topic: "Dual Nature of Radiation – Photoelectric Effect", quizPath: "/quiz/physics/12/27" },
          { subject: "Chemistry", quizWeek: 25, topic: "Haloalkanes and Haloarenes – Properties", quizPath: "/quiz/chemistry/12/25" },
          { subject: "Biology", quizWeek: 25, topic: "Human Health – Immunity (Innate, Acquired)", quizPath: "/quiz/biology/12/25" },
        ],
      },
      {
        week: 7,
        theme: "Literature & Applications",
        subjects: [
          { subject: "English", quizWeek: 27, topic: "The Last Lesson (Alphonse Daudet)", quizPath: "/quiz/12/27" },
          { subject: "Maths", quizWeek: 30, topic: "Bayes' Theorem", quizPath: "/quiz/maths/12/30" },
          { subject: "Physics", quizWeek: 30, topic: "Atoms – Hydrogen Spectrum, Energy Levels", quizPath: "/quiz/physics/12/30" },
          { subject: "Chemistry", quizWeek: 30, topic: "Ethers – Preparation and Properties", quizPath: "/quiz/chemistry/12/30" },
          { subject: "Biology", quizWeek: 30, topic: "Strategies for Enhancement in Food Production", quizPath: "/quiz/biology/12/30" },
        ],
      },
      {
        week: 8,
        theme: "Grand Revision",
        subjects: [
          { subject: "English", quizWeek: 52, topic: "Grand Revision – All Sections Combined", quizPath: "/quiz/12/52" },
          { subject: "Maths", quizWeek: 27, topic: "Linear Programming – Applications", quizPath: "/quiz/maths/12/27" },
          { subject: "Physics", quizWeek: 52, topic: "Grand Revision", quizPath: "/quiz/physics/12/52" },
          { subject: "Chemistry", quizWeek: 52, topic: "Grand Revision", quizPath: "/quiz/chemistry/12/52" },
          { subject: "Biology", quizWeek: 52, topic: "Grand Revision", quizPath: "/quiz/biology/12/52" },
        ],
      },
    ],
  },
};

export function getSummerChallenge(grade: number): GradeChallenge | null {
  return SUMMER_CHALLENGE[grade] || null;
}
