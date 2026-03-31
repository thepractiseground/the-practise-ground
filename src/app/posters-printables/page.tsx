import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Posters & Printables — English, Maths & Science | The Practise Ground",
  description:
    "Download free educational posters and printables for English grammar, Maths, and Science. Perfect for classrooms, home study, and revision. No sign-up required.",
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
  subject: "English" | "Maths" | "Science";
  tags: string[];
};

const posters: Poster[] = [
  // English
  {
    title: "Grammar: Verbs",
    description: "A visual guide to verbs — action words, helping verbs, and how they work in sentences. Great for introducing verb types to younger learners.",
    file: "/posters/english-grammar-verbs-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Verbs", "Parts of Speech"],
  },
  {
    title: "Types of Sentences",
    description: "Learn the four types of sentences — declarative, interrogative, imperative, and exclamatory — with clear examples and visual cues.",
    file: "/posters/types-of-sentences-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Sentences", "Writing"],
  },
  {
    title: "Conjunctions",
    description: "Understand coordinating, subordinating, and correlative conjunctions with examples. A handy reference for building complex sentences.",
    file: "/posters/conjunctions-grammar-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Conjunctions", "Writing"],
  },
  {
    title: "Present Continuous Tense",
    description: "How to form and use the present continuous tense — structure, examples, and common usage patterns for everyday actions.",
    file: "/posters/present-continuous-tense-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Tenses", "Verb Forms"],
  },
  {
    title: "Adverbs",
    description: "A colourful guide to adverbs — types, placement in sentences, and examples. Covers manner, time, place, frequency, and degree.",
    file: "/posters/english-grammar-adverbs-poster.pdf",
    subject: "English",
    tags: ["Grammar", "Adverbs", "Parts of Speech"],
  },
  {
    title: "Idioms — Colourful Edition",
    description: "A vibrant poster featuring everyday English idioms with meanings and fun illustrations. Includes 'break the ice', 'piece of cake', 'spill the beans', and more.",
    file: "/posters/english-idioms-poster-colourful.pdf",
    subject: "English",
    tags: ["Idioms", "Vocabulary", "Speaking"],
  },
  {
    title: "Idioms — Illustrated",
    description: "Learn popular English idioms through playful illustrations that show both the literal and figurative meanings. Perfect for visual learners.",
    file: "/posters/english-idioms-poster-illustrated.pdf",
    subject: "English",
    tags: ["Idioms", "Vocabulary", "Speaking"],
  },
  {
    title: "Idioms — Vintage Style",
    description: "A classic blue-and-beige poster of essential English idioms with clear definitions. Elegant design ideal for classroom display or study corners.",
    file: "/posters/english-idioms-poster-vintage.pdf",
    subject: "English",
    tags: ["Idioms", "Vocabulary", "Speaking"],
  },
  {
    title: "Elements of Science Fiction",
    description: "The five key elements of sci-fi — unknown settings, advanced technology, time travel, space travel, and odd characters — with examples and explanations.",
    file: "/posters/elements-of-scifi-poster.pdf",
    subject: "English",
    tags: ["Literature", "Genre", "Creative Writing"],
  },
  // Maths
  {
    title: "Split Strategy",
    description: "Break down addition and subtraction into easier steps using the split strategy. A foundational mental maths technique for younger students.",
    file: "/posters/math-split-strategy-poster.pdf",
    subject: "Maths",
    tags: ["Mental Maths", "Addition", "Strategy"],
  },
  {
    title: "Angles",
    description: "Visual reference for acute, obtuse, right, straight, and reflex angles — with degree ranges and real-world examples.",
    file: "/posters/angles-math-poster.pdf",
    subject: "Maths",
    tags: ["Geometry", "Angles", "Measurement"],
  },
  {
    title: "Order of Operations",
    description: "Master BODMAS/PEMDAS with this step-by-step guide. Covers brackets, orders, division, multiplication, addition, and subtraction.",
    file: "/posters/order-of-operations-poster.pdf",
    subject: "Maths",
    tags: ["Arithmetic", "BODMAS", "Problem Solving"],
  },
  {
    title: "Maths Symbols",
    description: "A clean reference of essential mathematical symbols — from basic operations to equality, inequality, and set notation.",
    file: "/posters/maths-symbols-poster.pdf",
    subject: "Maths",
    tags: ["Symbols", "Reference", "Notation"],
  },
  {
    title: "Regular Polygons",
    description: "Identify and learn the properties of regular polygons — from equilateral triangles to decagons. Includes number of sides, angles, and names.",
    file: "/posters/regular-polygons-poster.pdf",
    subject: "Maths",
    tags: ["Geometry", "Shapes", "Polygons"],
  },
  {
    title: "Financial Maths — Common Terms",
    description: "Key financial maths vocabulary — budget, debit, credit, income, principal, asset, and more. A clear reference for introducing money concepts.",
    file: "/posters/financial-math-poster.pdf",
    subject: "Maths",
    tags: ["Financial Literacy", "Vocabulary", "Money"],
  },
  {
    title: "Operations Keywords",
    description: "Know which keywords signal addition, subtraction, multiplication, or division in word problems. Essential for cracking maths problem-solving questions.",
    file: "/posters/operations-keywords-poster.pdf",
    subject: "Maths",
    tags: ["Arithmetic", "Word Problems", "Strategy"],
  },
  {
    title: "Fraction Chart",
    description: "A visual fraction bar chart showing equivalent fractions from 1 whole down to tenths. Colour-coded bars make comparing and simplifying fractions easy.",
    file: "/posters/fractions-chart-poster.pdf",
    subject: "Maths",
    tags: ["Fractions", "Number Sense", "Reference"],
  },
  {
    title: "Multiplication Table",
    description: "A complete 12×12 multiplication grid with colour-coded rows and columns. The go-to reference poster for learning and revising times tables.",
    file: "/posters/multiplication-table-poster.pdf",
    subject: "Maths",
    tags: ["Multiplication", "Times Tables", "Reference"],
  },
  // Science
  {
    title: "Forms of Energy",
    description: "Explore the different forms of energy — kinetic, potential, thermal, chemical, electrical, light, sound, and nuclear — with visual examples.",
    file: "/posters/forms-of-energy-poster.pdf",
    subject: "Science",
    tags: ["Physics", "Energy", "Forces"],
  },
  {
    title: "DNA & Biology",
    description: "Understand the structure of DNA — the double helix, base pairs, nucleotides, and how genetic information is stored and replicated.",
    file: "/posters/dna-biology-poster.pdf",
    subject: "Science",
    tags: ["Biology", "Genetics", "Cells"],
  },
  {
    title: "Earth's Layers",
    description: "A cross-section of our planet showing the crust, mantle, outer core, and inner core — with temperature, thickness, and composition details.",
    file: "/posters/earths-layers-poster.pdf",
    subject: "Science",
    tags: ["Geology", "Earth Science", "Structure"],
  },
  {
    title: "Introduction to Genetics",
    description: "The basics of genetics — DNA, genes, chromosomes, alleles, and inheritance patterns. A clear starting point for understanding heredity.",
    file: "/posters/introduction-to-genetics-poster.pdf",
    subject: "Science",
    tags: ["Biology", "Genetics", "Heredity"],
  },
  {
    title: "Photosynthesis",
    description: "How plants convert sunlight into energy — the light and dark reactions, chloroplasts, and the role of carbon dioxide, water, and glucose.",
    file: "/posters/photosynthesis-science-poster.pdf",
    subject: "Science",
    tags: ["Biology", "Plants", "Energy"],
  },
  {
    title: "Pathogens",
    description: "An overview of the four main types of pathogens — bacteria, viruses, fungi, and parasites — with how they spread and how the body fights them.",
    file: "/posters/pathogens-science-poster.pdf",
    subject: "Science",
    tags: ["Biology", "Health", "Disease"],
  },
  {
    title: "Periodic Table of Elements",
    description: "A colourful periodic table showing all 118 elements organised by group and period — with atomic numbers, symbols, and colour-coded categories.",
    file: "/posters/periodic-table-poster.pdf",
    subject: "Science",
    tags: ["Chemistry", "Elements", "Reference"],
  },
  {
    title: "Food Web",
    description: "Visualise how energy flows through an ecosystem — producers, primary consumers, secondary consumers, and decomposers connected in a web of life.",
    file: "/posters/food-web-science-poster.pdf",
    subject: "Science",
    tags: ["Biology", "Ecology", "Ecosystems"],
  },
];

const subjectConfig = {
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
  const subjects = ["English", "Maths", "Science"] as const;

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy via-blue-800 to-indigo-900 py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Free to download &amp; print
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Posters &amp; <span className="text-brand-orange">Printables</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto">
            Beautifully designed educational posters for your classroom wall, study desk, or revision folder. Download, print, and learn.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-brand-orange">{posters.length}</p>
              <p className="text-gray-500 text-sm mt-1">Posters Available</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-brand-navy">3</p>
              <p className="text-gray-500 text-sm mt-1">Subjects</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-brand-teal">PDF</p>
              <p className="text-gray-500 text-sm mt-1">Print-Ready Format</p>
            </div>
          </div>
        </div>
      </section>

      {/* Posters by subject */}
      {subjects.map((subject) => {
        const config = subjectConfig[subject];
        const subjectPosters = posters.filter((p) => p.subject === subject);

        return (
          <section key={subject} className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{config.emoji}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">{subject}</h2>
              <span className={`${config.tagBg} text-sm font-bold px-3 py-1 rounded-full`}>
                {subjectPosters.length} posters
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjectPosters.map((poster) => {
                const thumbSrc = poster.file.replace("/posters/", "/posters/thumbnails/").replace(".pdf", ".png");
                return (
                  <div
                    key={poster.file}
                    className={`${config.bgColor} border ${config.borderColor} rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col`}
                  >
                    {/* Poster preview */}
                    <div className="relative w-full bg-white border-b border-gray-100" style={{ aspectRatio: "600/848" }}>
                      <Image
                        src={thumbSrc}
                        alt={`${poster.title} — free ${poster.subject.toLowerCase()} poster for classrooms and study`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-brand-navy mb-2">{poster.title}</h3>
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
                desc: "Print on A4 or A3 paper and pin to your classroom wall, study corner, or revision board for quick reference.",
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
