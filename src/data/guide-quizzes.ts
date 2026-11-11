export interface GuideQuestion {
  q: string;
  options: string[];
  answer: number; // index into options
  why: string;
}

export interface GuideQuiz {
  title: string;
  questions: GuideQuestion[];
  /** Optional free resource shown after the quiz. */
  resource?: { label: string; href: string };
}

/** Short topic quizzes shown inside top guides, keyed by blog slug. */
export const GUIDE_QUIZZES: Record<string, GuideQuiz> = {
  "geometry-essentials-shapes-angles-theorems-explained": {
    title: "Geometry check: 5 quick questions",
    resource: { label: "Free Geometry Practice Pack (PDF, 3 levels)", href: "/posters/geometry-practice-pack.pdf" },
    questions: [
      { q: "What is the sum of the three angles in any triangle?", options: ["90°", "180°", "270°", "360°"], answer: 1, why: "The angles of every triangle add up to 180°." },
      { q: "An angle of 120° is called…", options: ["Acute", "Right", "Obtuse", "Reflex"], answer: 2, why: "Obtuse angles are bigger than 90° but smaller than 180°." },
      { q: "A right-angled triangle has legs of 6 cm and 8 cm. How long is the hypotenuse?", options: ["9 cm", "10 cm", "12 cm", "14 cm"], answer: 1, why: "Pythagoras: 6² + 8² = 36 + 64 = 100, and √100 = 10." },
      { q: "What is each interior angle of a regular hexagon?", options: ["108°", "120°", "135°", "144°"], answer: 1, why: "(n − 2) × 180° ÷ n = 4 × 180° ÷ 6 = 120°." },
      { q: "What is the area of a circle of radius 7 cm? (use π = 22/7)", options: ["44 cm²", "154 cm²", "308 cm²", "49 cm²"], answer: 1, why: "Area = πr² = 22/7 × 7 × 7 = 154 cm²." },
    ],
  },
  "parts-of-speech-made-easy": {
    title: "Parts of speech check: 5 quick questions",
    resource: { label: "Free Parts of Speech Practice Pack (PDF, 3 levels)", href: "/posters/parts-of-speech-practice-pack.pdf" },
    questions: [
      { q: "In “The quick fox jumps”, which word is an adjective?", options: ["The", "quick", "fox", "jumps"], answer: 1, why: "“Quick” describes the noun fox." },
      { q: "Which word is a pronoun in “They are playing outside”?", options: ["They", "are", "playing", "outside"], answer: 0, why: "A pronoun takes the place of a noun. “They” stands for the people playing." },
      { q: "In “She sings beautifully”, what is “beautifully”?", options: ["Adjective", "Adverb", "Noun", "Verb"], answer: 1, why: "It tells us how she sings, so it modifies a verb. That makes it an adverb." },
      { q: "Which word is a preposition in “The book is on the table”?", options: ["book", "is", "on", "table"], answer: 2, why: "“On” shows the position of the book relative to the table." },
      { q: "Which word is a conjunction in “I wanted to go, but it rained”?", options: ["wanted", "go", "but", "rained"], answer: 2, why: "“But” joins the two parts of the sentence." },
    ],
  },
  "letter-writing-format-guide": {
    title: "Letter writing check: 5 quick questions",
    resource: { label: "Free Letter Writing Pack (PDF)", href: "/posters/letter-writing-format-pack.pdf" },
    questions: [
      { q: "Which opening suits a letter to your school principal?", options: ["Dear Rahul,", "Respected Sir/Madam,", "Hello Sir,", "Hi there,"], answer: 1, why: "Formal letters to people in authority use a respectful salutation." },
      { q: "Which closing suits a formal letter that begins “Dear Sir/Madam”?", options: ["Yours faithfully,", "Love,", "Bye for now,", "Your buddy,"], answer: 0, why: "“Yours faithfully” is the standard close when you don't know the person's name." },
      { q: "Which of these is a formal letter?", options: ["Telling a friend about your holiday", "Inviting a cousin to your birthday", "A letter to the editor about a local problem", "Thanking your grandmother for a gift"], answer: 2, why: "Letters to editors, officials and institutions are formal letters." },
      { q: "What is the subject line of a formal letter for?", options: ["To add decoration", "To state the purpose in a few words", "To repeat the address", "To end the letter politely"], answer: 1, why: "A short subject line tells the reader at a glance what the letter is about." },
      { q: "Which tone is right for an informal letter to a friend?", options: ["Stiff and official", "Friendly and conversational", "Angry and demanding", "Very technical"], answer: 1, why: "Informal letters are personal, so a warm, natural tone works best." },
    ],
  },
  "trigonometry-beginners-sin-cos-tan-made-easy": {
    title: "Trigonometry check: 5 quick questions",
    resource: { label: "Free Trigonometry Quick-Reference Sheet (PDF)", href: "/posters/trigonometry-quick-reference-sheet.pdf" },
    questions: [
      { q: "In a right-angled triangle, sin θ equals…", options: ["opposite ÷ hypotenuse", "adjacent ÷ hypotenuse", "opposite ÷ adjacent", "hypotenuse ÷ opposite"], answer: 0, why: "SOH: Sine = Opposite ÷ Hypotenuse." },
      { q: "What is tan 45°?", options: ["0", "1/2", "1", "√3"], answer: 2, why: "At 45° the opposite and adjacent sides are equal, so tan 45° = 1." },
      { q: "What is sin 30°?", options: ["1/2", "√3/2", "1", "0"], answer: 0, why: "sin 30° = 1/2, a value worth memorising." },
      { q: "What is cos 0°?", options: ["0", "1/2", "1", "Undefined"], answer: 2, why: "At 0° the adjacent side equals the hypotenuse, so cos 0° = 1." },
      { q: "sin²θ + cos²θ equals…", options: ["0", "1", "2", "tan²θ"], answer: 1, why: "This is the basic Pythagorean identity: it is always 1." },
    ],
  },
  "coordinate-geometry-graphs-visual-guide": {
    title: "Coordinate geometry check: 5 quick questions",
    resource: { label: "Try the Distance Formula Calculator", href: "/distance-formula-calculator" },
    questions: [
      { q: "What is the distance between (0, 0) and (3, 4)?", options: ["5", "7", "12", "25"], answer: 0, why: "√(3² + 4²) = √25 = 5." },
      { q: "What is the midpoint of (2, 4) and (6, 8)?", options: ["(3, 5)", "(4, 6)", "(8, 12)", "(2, 2)"], answer: 1, why: "Average the coordinates: ((2+6)/2, (4+8)/2) = (4, 6)." },
      { q: "What is the slope of the line through (1, 2) and (3, 6)?", options: ["1", "2", "3", "4"], answer: 1, why: "Slope = (6 − 2) ÷ (3 − 1) = 4 ÷ 2 = 2." },
      { q: "In which quadrant does the point (−3, 5) lie?", options: ["First", "Second", "Third", "Fourth"], answer: 1, why: "A negative x and a positive y place the point in the second quadrant." },
      { q: "Every point on the x-axis has…", options: ["x = 0", "y = 0", "x = y", "both coordinates equal to 1"], answer: 1, why: "On the x-axis the height is zero, so y = 0." },
    ],
  },
  "how-to-solve-physics-numericals": {
    title: "Physics numericals check: 5 quick questions",
    resource: { label: "Physics Numericals: formulas, examples and free PDF pack", href: "/physics-numericals" },
    questions: [
      { q: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1, why: "Force is measured in newtons (N)." },
      { q: "A car goes from rest to 20 m/s in 5 s. What is its acceleration?", options: ["0.25 m/s²", "4 m/s²", "15 m/s²", "100 m/s²"], answer: 1, why: "a = (v − u) ÷ t = (20 − 0) ÷ 5 = 4 m/s²." },
      { q: "A 2 kg mass accelerates at 3 m/s². What is the net force?", options: ["1.5 N", "5 N", "6 N", "8 N"], answer: 2, why: "F = ma = 2 × 3 = 6 N." },
      { q: "A force of 10 N moves an object 3 m in its own direction. How much work is done?", options: ["13 J", "30 J", "3.3 J", "7 J"], answer: 1, why: "Work = force × distance = 10 × 3 = 30 J." },
      { q: "A current of 2 A flows through a 5 Ω resistor. What is the voltage?", options: ["2.5 V", "7 V", "10 V", "3 V"], answer: 2, why: "Ohm's law: V = IR = 2 × 5 = 10 V." },
    ],
  },
};
