// Summer Challenge: 8-week curated curriculum per grade
// Each week maps to specific quiz weeks from existing data files

export interface ChallengeSubject {
  subject: "English" | "Maths" | "Science";
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
};

export function getSummerChallenge(grade: number): GradeChallenge | null {
  return SUMMER_CHALLENGE[grade] || null;
}
