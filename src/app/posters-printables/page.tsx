import Link from "next/link";
import Image from "next/image";
import ClassFilter from "@/components/ClassFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Printable Classroom Posters, Classes 6–12 — Maths, Science, Biology, English",
  description:
    "Free printable posters for classroom noticeboards: Physics, Chemistry, Biology, Maths and English formula, diagram and grammar charts for Classes 6–12. Print on A4 or A3. No sign-up required.",
  openGraph: {
    title: "Free Posters & Printables — The Practise Ground",
    description:
      "Download free educational posters for English grammar, Maths concepts, and Science topics. Print-ready PDFs for classrooms and home study.",
    url: "https://www.thepractiseground.in/posters-printables",
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.thepractiseground.in/posters-printables",
  },
};

type Poster = {
  title: string;
  description: string;
  file: string;
  subject: "English" | "Maths" | "Science" | "Physics" | "Chemistry" | "Biology";
  tags: string[];
  classes: number[];
  isNew?: boolean;
};

const posters: Poster[] = [
  // English
  {
    title: "Parts of Speech (Classes 6–8)",
    description: "Noun, pronoun, verb and adjective with examples, plus the other four word types and a quick spot-them sentence. Noticeboard-ready A4.",
    file: "/posters/english-parts-of-speech-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Parts of Speech", "Noticeboard"],
    classes: [6, 7, 8],
  },
  {
    title: "Tenses at a Glance (Classes 6–8)",
    description: "Simple present, simple past, simple future and present perfect with one example sentence each. Noticeboard-ready A4.",
    file: "/posters/english-tenses-chart-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Tenses", "Noticeboard"],
    classes: [6, 7, 8],
  },
  {
    title: "Direct & Indirect Speech (Classes 8–10)",
    description: "Statements, questions and commands, tense back-shift and the pronoun and time-word changes, with a worked example. Noticeboard-ready A4.",
    file: "/posters/english-direct-indirect-speech-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Speech", "Noticeboard"],
    classes: [8, 9, 10],
  },
  {
    title: "Subject-Verb Agreement (Classes 8–10)",
    description: "Four rules for matching the verb to the subject, with a fix-it box for common mistakes. Noticeboard-ready A4.",
    file: "/posters/english-subject-verb-agreement-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Agreement", "Noticeboard"],
    classes: [8, 9, 10],
  },
  {
    title: "Modal Verbs (Classes 8–9)",
    classes: [8, 9],
    description: "Can, may, must, should and their cousins sorted by job: ability, permission, obligation and advice, with a fix-it box for common mistakes. Noticeboard-ready A4.",
    file: "/posters/english-modal-verbs-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Modals", "Noticeboard"],
  },
  {
    title: "Clauses (Class 11)",
    classes: [11, 12],
    description: "Independent, noun, adjective and adverb clauses with an example for each and a quick test to spot them. Noticeboard-ready A4.",
    file: "/posters/english-clauses-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Clauses", "Class 11"],
  },
  {
    title: "Active & Passive Voice (Classes 8–10)",
    classes: [8, 9, 10],
    description: "How to switch voice in four common tenses, with the three-step method and a worked example. Noticeboard-ready A4.",
    file: "/posters/english-active-passive-voice-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Voice", "Noticeboard"],
  },
  {
    title: "Letter Writing Pack (Classes 8–10)",
    classes: [8, 9, 10],
    description: "Blank formal and informal letter templates, a scoring checklist, and six ready-to-use sample letters — complaint, request, letter to the editor, sick leave, invitation and congratulations. 10 print-ready pages with practice prompts.",
    file: "/posters/letter-writing-format-pack.pdf",
    subject: "English",
    tags: ["Letter Writing", "Exam Prep", "Writing"],
  },
  {
    title: "Grammar: Verbs",
    classes: [6, 7, 8],
    description: "A visual guide to verbs — action words, helping verbs, and how they work in sentences. Great for introducing verb types to younger learners.",
    file: "/posters/english-grammar-verbs-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Verbs", "Parts of Speech"],
  },
  {
    title: "Types of Sentences",
    classes: [6, 7, 8],
    description: "Learn the four types of sentences — declarative, interrogative, imperative, and exclamatory — with clear examples and visual cues.",
    file: "/posters/types-of-sentences-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Sentences", "Writing"],
  },
  {
    title: "Conjunctions",
    classes: [6, 7, 8],
    description: "Understand coordinating, subordinating, and correlative conjunctions with examples. A handy reference for building complex sentences.",
    file: "/posters/conjunctions-grammar-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Conjunctions", "Writing"],
  },
  {
    title: "Present Continuous Tense",
    classes: [6, 7],
    description: "How to form and use the present continuous tense — structure, examples, and common usage patterns for everyday actions.",
    file: "/posters/present-continuous-tense-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Tenses", "Verb Forms"],
  },
  {
    title: "Adverbs",
    classes: [6, 7, 8],
    description: "A colourful guide to adverbs — types, placement in sentences, and examples. Covers manner, time, place, frequency, and degree.",
    file: "/posters/english-grammar-adverbs-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Adverbs", "Parts of Speech"],
  },
  {
    title: "Idioms — Colourful Edition",
    classes: [6, 7, 8, 9, 10],
    description: "A vibrant poster featuring everyday English idioms with meanings and fun illustrations. Includes 'break the ice', 'piece of cake', 'spill the beans', and more.",
    file: "/posters/english-idioms-poster-colourful.pdf",
    subject: "English",
    tags: ["Idioms", "Vocabulary", "Speaking"],
  },
  {
    title: "Idioms — Illustrated",
    classes: [6, 7, 8, 9, 10],
    description: "Learn popular English idioms through playful illustrations that show both the literal and figurative meanings. Perfect for visual learners.",
    file: "/posters/english-idioms-poster-illustrated.pdf",
    subject: "English",
    tags: ["Idioms", "Vocabulary", "Speaking"],
  },
  {
    title: "Idioms — Vintage Style",
    classes: [6, 7, 8, 9, 10],
    description: "A classic blue-and-beige poster of essential English idioms with clear definitions. Elegant design ideal for classroom display or study corners.",
    file: "/posters/english-idioms-poster-vintage.pdf",
    subject: "English",
    tags: ["Idioms", "Vocabulary", "Speaking"],
  },
  {
    title: "Elements of Science Fiction",
    classes: [8, 9, 10],
    description: "The five key elements of sci-fi — unknown settings, advanced technology, time travel, space travel, and odd characters — with examples and explanations.",
    file: "/posters/elements-of-scifi-poster.pdf",
    subject: "English",
    tags: ["Literature", "Genre", "Creative Writing"],
  },
  {
    title: "Creative Writing",
    classes: [8, 9, 10, 11, 12],
    description: "A playful guide to creative writing — story starters, character-building tips, and prompts to spark imagination. Perfect for young writers finding their voice.",
    file: "/posters/creative-writing-poster.pdf",
    subject: "English",
    tags: ["Creative Writing", "Story Writing", "Prompts"],
  },
  // Maths
  {
    title: "Rules for Integers (Class 7)",
    description: "Sign rules for multiplying, dividing and subtracting integers with a worked example for each. Noticeboard-ready A4.",
    file: "/posters/maths-integers-rules-poster.pdf",
    subject: "Maths",
    tags: ["Integers", "Rules", "Class 7"],
    classes: [7],
  },
  {
    title: "Area & Perimeter (Classes 6–8)",
    description: "Area and perimeter of rectangles, squares, triangles and circles with a worked example. Noticeboard-ready A4.",
    file: "/posters/maths-area-perimeter-poster.pdf",
    subject: "Maths",
    tags: ["Mensuration", "Formulas", "Class 6-8"],
    classes: [6, 7, 8],
  },
  {
    title: "Trigonometric Identities (Classes 10–11)",
    description: "The three Pythagorean identities and the sum formula with a worked example. Noticeboard-ready A4.",
    file: "/posters/maths-trig-identities-poster.pdf",
    subject: "Maths",
    tags: ["Trigonometry", "Identities", "Class 10-11"],
    classes: [10, 11],
  },
  {
    title: "Differentiation Rules (Classes 11–12)",
    description: "Power, product, quotient and chain rules plus the standard derivatives, with worked examples. Noticeboard-ready A4.",
    file: "/posters/maths-differentiation-rules-poster.pdf",
    subject: "Maths",
    tags: ["Calculus", "Formulas", "Class 11-12"],
    classes: [11, 12],
  },
  {
    title: "Integration Formulas (Class 12)",
    description: "The standard integrals, integration by parts and worked examples. Noticeboard-ready A4.",
    file: "/posters/maths-integration-formulas-poster.pdf",
    subject: "Maths",
    tags: ["Calculus", "Formulas", "Class 12"],
    classes: [12],
  },
  {
    title: "Quadratic Equations (Classes 10–11)",
    classes: [10, 11],
    description: "The standard form, quadratic formula, discriminant and sum and product of roots, with a worked example. Noticeboard-ready A4.",
    file: "/posters/maths-quadratic-equations-poster.pdf",
    subject: "Maths",
    tags: ["Algebra", "Formulas", "Class 10-11"],
  },
  {
    title: "Algebraic Identities (Classes 8–10)",
    classes: [8, 9, 10],
    description: "Four key identities, each with a mental-maths example such as 103² and 51² − 49². Noticeboard-ready A4.",
    file: "/posters/maths-algebraic-identities-poster.pdf",
    subject: "Maths",
    tags: ["Algebra", "Identities", "Noticeboard"],
  },
  {
    title: "Volume & Surface Area (Classes 9–10)",
    classes: [9, 10],
    description: "Cylinder, cone, sphere and hemisphere formulas with surface areas and a worked example. Noticeboard-ready A4.",
    file: "/posters/maths-mensuration-volume-poster.pdf",
    subject: "Maths",
    tags: ["Mensuration", "Formulas", "Class 9-10"],
  },
  {
    title: "Geometry Quick-Reference Sheet (Classes 6–9)",
    classes: [6, 7, 8, 9],
    description: "Angle types and pairs, parallel lines, triangle facts, Pythagoras and triples, quadrilaterals, polygons, circles, congruence and similarity, with worked examples and practice questions. 5 print-ready pages.",
    file: "/posters/geometry-quick-reference-sheet.pdf",
    subject: "Maths",
    tags: ["Geometry", "Formulas", "Exam Prep"],
  },
  {
    title: "Coordinate Geometry Formula Sheet (Classes 8–10)",
    classes: [8, 9, 10],
    description: "Distance, midpoint, slope, equations of lines, parallel and perpendicular rules, section formula, centroid and triangle area, with worked examples and practice questions. 3 print-ready pages.",
    file: "/posters/coordinate-geometry-formula-sheet.pdf",
    subject: "Maths",
    tags: ["Coordinate Geometry", "Formulas", "Exam Prep"],
  },
  {
    title: "Trigonometry Quick-Reference Sheet (Classes 9–10)",
    classes: [9, 10],
    description: "Sin, cos and tan formulas with SOH-CAH-TOA, the standard-angle values table (0° to 90°), key identities, complementary angles and worked examples with practice questions. 3 print-ready pages.",
    file: "/posters/trigonometry-quick-reference-sheet.pdf",
    subject: "Maths",
    tags: ["Trigonometry", "Formulas", "Exam Prep"],
  },
  {
    title: "Split Strategy",
    classes: [6, 7],
    description: "Break down addition and subtraction into easier steps using the split strategy. A foundational mental maths technique for younger students.",
    file: "/posters/math-split-strategy-poster.pdf",
    subject: "Maths",
    tags: ["Mental Maths", "Addition", "Strategy"],
  },
  {
    title: "Angles",
    classes: [6, 7, 8],
    description: "Visual reference for acute, obtuse, right, straight, and reflex angles — with degree ranges and real-world examples.",
    file: "/posters/angles-math-poster.pdf",
    subject: "Maths",
    tags: ["Geometry", "Angles", "Measurement"],
  },
  {
    title: "Order of Operations",
    classes: [6, 7, 8],
    description: "Master BODMAS/PEMDAS with this step-by-step guide. Covers brackets, orders, division, multiplication, addition, and subtraction.",
    file: "/posters/order-of-operations-poster.pdf",
    subject: "Maths",
    tags: ["Arithmetic", "BODMAS", "Problem Solving"],
  },
  {
    title: "Maths Symbols",
    classes: [6, 7, 8, 9],
    description: "A clean reference of essential mathematical symbols — from basic operations to equality, inequality, and set notation.",
    file: "/posters/maths-symbols-poster.pdf",
    subject: "Maths",
    tags: ["Symbols", "Reference", "Notation"],
  },
  {
    title: "Regular Polygons",
    classes: [7, 8, 9],
    description: "Identify and learn the properties of regular polygons — from equilateral triangles to decagons. Includes number of sides, angles, and names.",
    file: "/posters/regular-polygons-poster.pdf",
    subject: "Maths",
    tags: ["Geometry", "Shapes", "Polygons"],
  },
  {
    title: "Financial Maths — Common Terms",
    classes: [8, 9, 10],
    description: "Key financial maths vocabulary — budget, debit, credit, income, principal, asset, and more. A clear reference for introducing money concepts.",
    file: "/posters/financial-math-poster.pdf",
    subject: "Maths",
    tags: ["Financial Literacy", "Vocabulary", "Money"],
  },
  {
    title: "Operations Keywords",
    classes: [6, 7],
    description: "Know which keywords signal addition, subtraction, multiplication, or division in word problems. Essential for cracking maths problem-solving questions.",
    file: "/posters/operations-keywords-poster.pdf",
    subject: "Maths",
    tags: ["Arithmetic", "Word Problems", "Strategy"],
  },
  {
    title: "Fraction Chart",
    classes: [6, 7],
    description: "A visual fraction bar chart showing equivalent fractions from 1 whole down to tenths. Colour-coded bars make comparing and simplifying fractions easy.",
    file: "/posters/fractions-chart-poster.pdf",
    subject: "Maths",
    tags: ["Fractions", "Number Sense", "Reference"],
  },
  {
    title: "Multiplication Table",
    classes: [6, 7],
    description: "A complete 12×12 multiplication grid with colour-coded rows and columns. The go-to reference poster for learning and revising times tables.",
    file: "/posters/multiplication-table-poster.pdf",
    subject: "Maths",
    tags: ["Multiplication", "Times Tables", "Reference"],
  },
  {
    title: "Percentage Wall",
    classes: [6, 7, 8],
    description: "A colourful wall chart showing common percentages with their fraction and decimal equivalents. A quick-reference tool for converting between forms.",
    file: "/posters/percentage-wall-maths-poster.pdf",
    subject: "Maths",
    tags: ["Percentages", "Fractions", "Decimals"],
  },
  {
    title: "Decimal Wall",
    classes: [6, 7],
    description: "Visual reference chart for understanding decimals — place values, conversions to fractions and percentages, and number line representations.",
    file: "/posters/decimal-wall-maths-poster.pdf",
    subject: "Maths",
    tags: ["Decimals", "Place Value", "Number Sense"],
  },
  // Science
  {
    title: "Motion, Density & Pressure (Classes 8–9)",
    description: "Speed, density, pressure and work done in one sheet, with a worked example. Noticeboard-ready A4.",
    file: "/posters/science-motion-density-pressure-poster.pdf",
    subject: "Science",
    tags: ["Physics", "Formulas", "Class 8-9"],
    classes: [8, 9],
  },
  {
    title: "Forms of Energy",
    classes: [6, 7, 8],
    description: "Explore the different forms of energy — kinetic, potential, thermal, chemical, electrical, light, sound, and nuclear — with visual examples.",
    file: "/posters/forms-of-energy-poster.pdf",
    subject: "Science",
    tags: ["Physics", "Energy", "Forces"],
  },
  {
    title: "DNA & Biology",
    classes: [9, 10, 11, 12],
    description: "Understand the structure of DNA — the double helix, base pairs, nucleotides, and how genetic information is stored and replicated.",
    file: "/posters/dna-biology-poster.pdf",
    subject: "Science",
    tags: ["Biology", "Genetics", "Cells"],
  },
  {
    title: "Earth's Layers",
    classes: [6, 7, 8],
    description: "A cross-section of our planet showing the crust, mantle, outer core, and inner core — with temperature, thickness, and composition details.",
    file: "/posters/earths-layers-poster.pdf",
    subject: "Science",
    tags: ["Geology", "Earth Science", "Structure"],
  },
  {
    title: "Introduction to Genetics",
    classes: [9, 10],
    description: "The basics of genetics — DNA, genes, chromosomes, alleles, and inheritance patterns. A clear starting point for understanding heredity.",
    file: "/posters/introduction-to-genetics-poster.pdf",
    subject: "Science",
    tags: ["Biology", "Genetics", "Heredity"],
  },
  {
    title: "Photosynthesis",
    classes: [6, 7, 8],
    description: "How plants convert sunlight into energy — the light and dark reactions, chloroplasts, and the role of carbon dioxide, water, and glucose.",
    file: "/posters/photosynthesis-science-poster.pdf",
    subject: "Science",
    tags: ["Biology", "Plants", "Energy"],
  },
  {
    title: "Pathogens",
    classes: [8, 9, 10],
    description: "An overview of the four main types of pathogens — bacteria, viruses, fungi, and parasites — with how they spread and how the body fights them.",
    file: "/posters/pathogens-science-poster.pdf",
    subject: "Science",
    tags: ["Biology", "Health", "Disease"],
  },
  {
    title: "Periodic Table of Elements",
    classes: [8, 9, 10, 11, 12],
    description: "A colourful periodic table showing all 118 elements organised by group and period — with atomic numbers, symbols, and colour-coded categories.",
    file: "/posters/periodic-table-poster.pdf",
    subject: "Science",
    tags: ["Chemistry", "Elements", "Reference"],
  },
  {
    title: "Food Web",
    classes: [6, 7, 8],
    description: "Visualise how energy flows through an ecosystem — producers, primary consumers, secondary consumers, and decomposers connected in a web of life.",
    file: "/posters/food-web-science-poster.pdf",
    subject: "Science",
    tags: ["Biology", "Ecology", "Ecosystems"],
  },
  {
    title: "Electricity: Types & Materials",
    classes: [8, 9, 10],
    description: "An illustrated guide to types of electricity, conductors, insulators, and how electrical circuits work. Covers static and current electricity with everyday examples.",
    file: "/posters/electricity-types-materials-poster.pdf",
    subject: "Science",
    tags: ["Physics", "Electricity", "Circuits"],
  },

  // Physics (Classes 11–12)
  {
    title: "Work, Energy & Power (Class 11)",
    description: "Work, kinetic energy, potential energy and power, with the work-energy theorem and a worked example. Noticeboard-ready A4.",
    file: "/posters/physics-work-energy-power-poster.pdf",
    subject: "Physics",
    tags: ["Mechanics", "Formulas", "Class 11"],
    classes: [11, 12],
  },
  {
    title: "Projectile Motion (Class 11)",
    description: "Range, maximum height and time of flight for a projectile, with a worked example. Noticeboard-ready A4.",
    file: "/posters/physics-projectile-motion-poster.pdf",
    subject: "Physics",
    tags: ["Kinematics", "Formulas", "Class 11"],
    classes: [11, 12],
  },
  {
    title: "Ray Optics Formulas (Classes 10–12)",
    description: "Mirror formula, lens formula, magnification and power with the sign convention and a worked example. Noticeboard-ready A4.",
    file: "/posters/physics-ray-optics-poster.pdf",
    subject: "Physics",
    tags: ["Optics", "Formulas", "Class 10-12"],
    classes: [10, 11, 12],
  },
  {
    title: "Equations of Motion (Class 11)",
    classes: [11, 12],
    description: "The four constant-acceleration equations, which to pick for each problem, and a worked example. Noticeboard-ready A4.",
    file: "/posters/physics-equations-of-motion-poster.pdf",
    subject: "Physics",
    tags: ["Kinematics", "Formulas", "Class 11"],
  },
  {
    title: "Newton's Laws & Force (Class 11)",
    classes: [11, 12],
    description: "Newton's laws, F = ma, momentum, weight and friction in one sheet, with a worked example. Noticeboard-ready A4.",
    file: "/posters/physics-newtons-laws-force-poster.pdf",
    subject: "Physics",
    tags: ["Mechanics", "Formulas", "Class 11"],
  },
  {
    title: "Ohm's Law & Circuits (Classes 10–12)",
    classes: [10, 11, 12],
    description: "Ohm's law, electric power and series and parallel resistance with a worked example. Noticeboard-ready A4.",
    file: "/posters/physics-ohms-law-electricity-poster.pdf",
    subject: "Physics",
    tags: ["Electricity", "Formulas", "Class 10-12"],
  },
  // Chemistry (Classes 11–12)
  {
    title: "Organic Functional Groups (Classes 11–12)",
    description: "Alcohol, aldehyde, ketone and carboxylic acid groups with suffixes and examples, plus amines, esters and halides. Noticeboard-ready A4.",
    file: "/posters/chemistry-functional-groups-poster.pdf",
    subject: "Chemistry",
    tags: ["Organic", "Functional Groups", "Class 11-12"],
    classes: [11, 12],
  },
  {
    title: "Types of Chemical Reactions (Classes 9–10)",
    description: "Combination, decomposition, displacement and double displacement reactions with examples and a balancing example. Noticeboard-ready A4.",
    file: "/posters/chemistry-types-of-reactions-poster.pdf",
    subject: "Chemistry",
    tags: ["Reactions", "Equations", "Class 9-10"],
    classes: [9, 10],
  },
  {
    title: "Acids, Bases & pH (Classes 10–11)",
    description: "pH, pOH, neutralisation and the pH scale with a worked example. Noticeboard-ready A4.",
    file: "/posters/chemistry-acids-bases-ph-poster.pdf",
    subject: "Chemistry",
    tags: ["Acids & Bases", "pH", "Class 10-11"],
    classes: [10, 11],
  },
  {
    title: "The Mole Concept (Class 11)",
    classes: [11, 12],
    description: "Moles from mass, particles, gas volume at STP and molarity, with a method and a worked example. Noticeboard-ready A4.",
    file: "/posters/chemistry-mole-concept-poster.pdf",
    subject: "Chemistry",
    tags: ["Mole Concept", "Formulas", "Class 11"],
  },
  {
    title: "Periodic Trends (Class 11)",
    classes: [11, 12],
    description: "Atomic radius, ionisation enthalpy, electronegativity and metallic character across periods and down groups. Noticeboard-ready A4.",
    file: "/posters/chemistry-periodic-trends-poster.pdf",
    subject: "Chemistry",
    tags: ["Periodic Table", "Trends", "Class 11"],
  },
  {
    title: "Gas Laws (Class 11)",
    classes: [11, 12],
    description: "Boyle's, Charles's and Gay-Lussac's laws and the ideal gas equation, with a worked example. Noticeboard-ready A4.",
    file: "/posters/chemistry-gas-laws-poster.pdf",
    subject: "Chemistry",
    tags: ["Gas Laws", "Formulas", "Class 11"],
  },
  // Biology (Classes 7–12)
  {
    title: "Cell Structure & Organelles (Classes 9–11)",
    description: "Nucleus, mitochondria, chloroplast, cell wall and the other organelles, with a quick question. Noticeboard-ready A4.",
    file: "/posters/biology-cell-structure-poster.pdf",
    subject: "Biology",
    tags: ["Cells", "Organelles", "Class 9-11"],
    classes: [9, 10, 11],
    isNew: true,
  },
  {
    title: "Photosynthesis (Classes 7–10)",
    description: "The equation, raw materials, products and stomata, with the starch test. Noticeboard-ready A4.",
    file: "/posters/biology-photosynthesis-poster.pdf",
    subject: "Biology",
    tags: ["Plants", "Equation", "Class 7-10"],
    classes: [7, 8, 9, 10],
    isNew: true,
  },
  {
    title: "Respiration & ATP (Classes 10–12)",
    description: "Aerobic and anaerobic respiration compared, with where each stage happens. Noticeboard-ready A4.",
    file: "/posters/biology-cellular-respiration-poster.pdf",
    subject: "Biology",
    tags: ["Energy", "ATP", "Class 10-12"],
    classes: [10, 11, 12],
    isNew: true,
  },
  {
    title: "DNA & Protein Synthesis (Classes 11–12)",
    description: "Replication, transcription, translation and the codon table basics, with a worked example. Noticeboard-ready A4.",
    file: "/posters/biology-dna-protein-synthesis-poster.pdf",
    subject: "Biology",
    tags: ["Genetics", "DNA", "Class 11-12"],
    classes: [11, 12],
    isNew: true,
  },
  {
    title: "Mendel's Laws of Inheritance (Classes 10–12)",
    description: "Dominance, segregation and independent assortment, with the 3:1 and 9:3:3:1 ratios. Noticeboard-ready A4.",
    file: "/posters/biology-mendel-genetics-poster.pdf",
    subject: "Biology",
    tags: ["Genetics", "Ratios", "Class 10-12"],
    classes: [10, 11, 12],
    isNew: true,
  },
  {
    title: "Human Digestive System (Classes 7–10)",
    description: "Mouth to large intestine, with the enzymes and what each organ does. Noticeboard-ready A4.",
    file: "/posters/biology-human-digestive-system-poster.pdf",
    subject: "Biology",
    tags: ["Human body", "Enzymes", "Class 7-10"],
    classes: [7, 8, 9, 10],
    isNew: true,
  },
  {
    title: "Mitosis vs Meiosis (Classes 10–12)",
    description: "Two ways a cell divides, compared, with the stages of mitosis and crossing over. Noticeboard-ready A4.",
    file: "/posters/biology-mitosis-meiosis-poster.pdf",
    subject: "Biology",
    tags: ["Cell division", "Comparison", "Class 10-12"],
    classes: [10, 11, 12],
    isNew: true,
  },
  {
    title: "Biomolecules (Classes 11–12)",
    description: "Carbohydrates, proteins, lipids and nucleic acids, with the standard food tests. Noticeboard-ready A4.",
    file: "/posters/biology-biomolecules-poster.pdf",
    subject: "Biology",
    tags: ["Biochemistry", "Food tests", "Class 11-12"],
    classes: [11, 12],
    isNew: true,
  },
];

const subjectConfig = {
  Biology: {
    emoji: "🌿",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    tagBg: "bg-green-100 text-green-700",
    buttonBg: "bg-green-600 hover:bg-green-700",
    gradient: "from-green-500 to-lime-500",
    subtitle: "Classes 7–12",
  },
  Physics: {
    emoji: "⚡",
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    tagBg: "bg-sky-100 text-sky-700",
    buttonBg: "bg-sky-600 hover:bg-sky-700",
    gradient: "from-sky-500 to-blue-500",
    subtitle: "Classes 10–12",
  },
  Chemistry: {
    emoji: "🧪",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    tagBg: "bg-rose-100 text-rose-700",
    buttonBg: "bg-rose-600 hover:bg-rose-700",
    gradient: "from-rose-500 to-pink-500",
    subtitle: "Class 11–12",
  },
  English: {
    emoji: "📝",
    color: "text-brand-orange",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    tagBg: "bg-orange-100 text-orange-700",
    buttonBg: "bg-brand-orange hover:bg-orange-600",
    gradient: "from-orange-500 to-amber-500",
  },
  Maths: {
    emoji: "🔢",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    tagBg: "bg-emerald-100 text-emerald-700",
    buttonBg: "bg-emerald-600 hover:bg-emerald-700",
    gradient: "from-emerald-500 to-teal-500",
  },
  Science: {
    emoji: "🔬",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    tagBg: "bg-purple-100 text-purple-700",
    buttonBg: "bg-purple-600 hover:bg-purple-700",
    gradient: "from-purple-500 to-indigo-500",
  },
};

export default function PostersPage() {
  const subjects = ["English", "Maths", "Science", "Physics", "Chemistry", "Biology"] as const;
  const classCounts = [6, 7, 8, 9, 10, 11, 12].map((c) => ({ c, n: posters.filter((p) => p.classes.includes(c)).length }));
  const subjectCounts = subjects.map((sub) => ({ sub, n: posters.filter((p) => p.subject === sub).length }));

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy via-blue-800 to-indigo-900 pt-14 pb-24 sm:pt-16 sm:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              For teachers &amp; students · Free · No sign-up
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Free Posters for Your <span className="text-brand-orange">Classroom Noticeboard</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-xl mx-auto lg:mx-0 mb-7">
              {posters.length} print-ready posters for Classes 6 to 12. Maths, Science, Physics, Chemistry, Biology and English formulas, diagrams and grammar, on one A4 page. Download, print, pin up.
            </p>

            <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-3">Pick your subject</p>
            <nav aria-label="Jump to subject" className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
              {subjectCounts.map(({ sub, n }) => (
                <a
                  key={sub}
                  href={`#${sub.toLowerCase()}`}
                  className="bg-white text-brand-navy hover:bg-orange-50 font-bold text-sm sm:text-base px-4 py-2.5 rounded-xl shadow-md transition-colors"
                >
                  {subjectConfig[sub].emoji} {sub} <span className="text-gray-400 font-medium">{n}</span>
                </a>
              ))}
            </nav>

            <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-3">Or pick your class</p>
            <ClassFilter counts={classCounts} />

            <a
              href="#biology"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-colors"
            >
              New: Biology posters, Classes 7–12
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>

          <div className="hidden lg:block relative h-[420px]" aria-hidden="true">
            {[
              { src: "/posters/thumbnails/chemistry-mole-concept-poster.png", cls: "left-0 top-10 -rotate-6 z-10" },
              { src: "/posters/thumbnails/maths-quadratic-equations-poster.png", cls: "right-0 top-6 rotate-6 z-10" },
              { src: "/posters/thumbnails/physics-equations-of-motion-poster.png", cls: "left-1/2 -translate-x-1/2 top-0 z-20" },
            ].map((p) => (
              <div key={p.src} className={`absolute w-[44%] rounded-lg overflow-hidden shadow-2xl border-4 border-white ${p.cls}`} style={{ aspectRatio: "600/848" }}>
                <Image src={p.src} alt="" fill className="object-cover" sizes="260px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for teachers */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: "1", t: "Download", d: "One click. A free PDF, no sign-up." },
              { n: "2", t: "Print on A4 or A3", d: "Pin it on the classroom noticeboard." },
              { n: "3", t: "Scan to practise", d: "The QR code opens free practice questions on a phone." },
            ].map((x) => (
              <div key={x.n} className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center">{x.n}</span>
                <div>
                  <p className="font-bold text-brand-navy">{x.t}</p>
                  <p className="text-gray-600 text-sm">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="posters-start" />
      {/* Posters by subject */}
      {subjects.map((subject) => {
        const config = subjectConfig[subject];
        const subjectPosters = posters.filter((p) => p.subject === subject);

        return (
          <section key={subject} data-subject-section id={subject.toLowerCase()} className="max-w-6xl mx-auto px-4 sm:px-6 py-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{config.emoji}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                {subject}
                {"subtitle" in config && <span className="text-base font-medium text-gray-500"> · {config.subtitle}</span>}
              </h2>
              <span data-count className={`${config.tagBg} text-sm font-bold px-3 py-1 rounded-full`}>
                {subjectPosters.length} posters
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjectPosters.map((poster) => {
                const thumbSrc = poster.file.replace("/posters/", "/posters/thumbnails/").replace(".pdf", ".png");
                return (
                  <div
                    key={poster.file}
                    data-classes={poster.classes.join(" ")}
                    className={`${config.bgColor} border ${config.borderColor} rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col`}
                  >
                    {/* Poster preview */}
                    <div className="relative w-full bg-white border-b border-gray-100" style={{ aspectRatio: "600/848" }}>
                      <Image
                        src={thumbSrc}
                        alt={`${poster.title}: free printable ${poster.subject} poster (PDF) for classroom noticeboards`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-brand-navy mb-2">
                        {poster.title}
                        {poster.isNew && (
                          <span className="ml-2 align-middle bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
                        )}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{poster.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {poster.tags.map((tag) => (
                          <span key={tag} className={`${config.tagBg} text-xs font-medium px-2 py-1 rounded-full`}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Download button */}
                      <a
                        href={poster.file}
                        download
                        className={`${config.buttonBg} text-white font-semibold text-sm px-5 py-2.5 rounded-xl text-center transition-colors flex items-center justify-center gap-2`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* How to use */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3">How to Use These Posters</h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Download, print, and put them to work — here are some ideas.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                emoji: "🖨️",
                title: "Print & Display",
                desc: "Print on A4 or A3 paper and pin to your classroom noticeboard, study corner, or revision board. Newer posters carry a QR code that opens free practice questions.",
              },
              {
                emoji: "📖",
                title: "Revision Aid",
                desc: "Use as a study companion alongside our quizzes. The visual format helps reinforce key concepts before a test.",
              },
              {
                emoji: "👩‍🏫",
                title: "Teaching Tool",
                desc: "Teachers can use these as lesson starters, homework aids, or supplementary material for classroom discussions.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <span className="text-4xl block mb-4">{item.emoji}</span>
                <h3 className="font-bold text-brand-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to quizzes */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-gradient-to-r from-brand-orange to-orange-500 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Want More Practice?</h2>
            <p className="text-white/90 mb-8 max-w-lg mx-auto">
              Pair these posters with our free weekly quizzes — 23,400+ questions across English, Maths, and Science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quiz/8"
                className="bg-white text-brand-navy font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                English Quizzes
              </Link>
              <Link
                href="/quiz/maths/8"
                className="bg-white text-brand-navy font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Maths Quizzes
              </Link>
              <Link
                href="/quiz/science/8"
                className="bg-white text-brand-navy font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Science Quizzes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Free Educational Posters & Printables",
            description:
              "Download free educational posters and printables for English grammar, Maths, and Science. Print-ready PDFs for classrooms and home study.",
            url: "https://www.thepractiseground.in/posters-printables",
            publisher: {
              "@type": "Organization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
            },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: posters.length,
              itemListElement: posters.map((poster, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "DigitalDocument",
                  name: poster.title,
                  description: poster.description,
                  url: `https://www.thepractiseground.in${poster.file}`,
                  thumbnailUrl: `https://www.thepractiseground.in${poster.file.replace("/posters/", "/posters/thumbnails/").replace(".pdf", ".png")}`,
                  encodingFormat: "application/pdf",
                  isAccessibleForFree: true,
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}
