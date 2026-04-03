import Link from "next/link";

const grades = [5, 6, 7, 8, 9, 10, 11, 12];
const scienceGrades = [5, 6, 7, 8, 9, 10];
const seniorGrades = [11, 12];

type QuizSection = {
  label: string;
  emoji: string;
  hoverColor: string;
  grades: number[];
  linkPrefix: string;
  chipLabel?: (g: number) => string;
};

const quizSections: QuizSection[] = [
  { label: "English", emoji: "\uD83D\uDCDD", hoverColor: "hover:bg-brand-orange", grades, linkPrefix: "/quiz/", chipLabel: (g) => `Grade ${g}` },
  { label: "Maths", emoji: "\uD83D\uDD22", hoverColor: "hover:bg-emerald-500", grades, linkPrefix: "/quiz/maths/", chipLabel: (g) => `Grade ${g}` },
  { label: "Maths Higher (JEE)", emoji: "\uD83D\uDCD0", hoverColor: "hover:bg-rose-500", grades: seniorGrades, linkPrefix: "/quiz/maths-higher/", chipLabel: (g) => `Grade ${g}` },
  { label: "Science", emoji: "\uD83D\uDD2C", hoverColor: "hover:bg-purple-500", grades: scienceGrades, linkPrefix: "/quiz/science/", chipLabel: (g) => `Grade ${g}` },
  { label: "Physics", emoji: "\u26A1", hoverColor: "hover:bg-blue-500", grades: seniorGrades, linkPrefix: "/quiz/physics/", chipLabel: (g) => `Grade ${g}` },
  { label: "Chemistry", emoji: "\uD83E\uDDEA", hoverColor: "hover:bg-teal-500", grades: seniorGrades, linkPrefix: "/quiz/chemistry/", chipLabel: (g) => `Grade ${g}` },
  { label: "Biology", emoji: "\uD83E\uDDEC", hoverColor: "hover:bg-green-500", grades: seniorGrades, linkPrefix: "/quiz/biology/", chipLabel: (g) => `Grade ${g}` },
];

export default function Footer() {
  return (
    <footer className="text-gray-300" style={{ backgroundColor: "var(--color-footer-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <div className="border-2 border-gray-400 rounded-md px-2 py-1">
                <span className="text-[10px] text-gray-400 block leading-tight">THE</span>
                <span className="text-sm font-bold text-brand-orange leading-tight">PRACTISE</span>
                <span className="text-[10px] text-gray-300 block leading-tight tracking-[0.25em]">GROUND</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-5">
              Free quizzes for Grades 5-12 across English, Maths, Science, Physics, Chemistry, Biology &amp; more. 39,000+ questions, no sign-up, completely free.
            </p>
            <p className="text-sm text-gray-500">hello@thepractiseground.in</p>
          </div>

          {/* Quizzes — accordion */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4">Quizzes</h3>
            <div className="space-y-1">
              {quizSections.map((section) => (
                <details key={section.label} className="group rounded-lg bg-white/5">
                  <summary className="flex items-center gap-2 px-3 py-2.5 cursor-pointer list-none select-none text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    <span>{section.emoji}</span>
                    <span className="flex-1">{section.label}</span>
                    <span className="text-[10px] text-gray-500">{section.grades.length === 2 ? "Gr 11-12" : `Gr ${section.grades[0]}-${section.grades[section.grades.length - 1]}`}</span>
                    <svg className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="flex flex-wrap gap-1.5 px-3 pb-3 pt-1">
                    {section.grades.map((g) => (
                      <Link
                        key={`${section.label}-${g}`}
                        href={`${section.linkPrefix}${g}`}
                        className={`bg-white/10 ${section.hoverColor} hover:text-white text-gray-400 text-xs px-2.5 py-1.5 rounded-md transition-colors`}
                      >
                        {section.chipLabel ? section.chipLabel(g) : `Grade ${g}`}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}

              {/* English by Level */}
              <details className="group rounded-lg bg-white/5">
                <summary className="flex items-center gap-2 px-3 py-2.5 cursor-pointer list-none select-none text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  <span>🅰️</span>
                  <span className="flex-1">English by Level</span>
                  <span className="text-[10px] text-gray-500">CEFR</span>
                  <svg className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="flex flex-wrap gap-1.5 px-3 pb-3 pt-1">
                  <Link href="/quiz/english/a2" className="bg-white/10 hover:bg-emerald-500 hover:text-white text-gray-400 text-xs px-2.5 py-1.5 rounded-md transition-colors">
                    A2 Elementary
                  </Link>
                  <Link href="/quiz/english/b1" className="bg-white/10 hover:bg-blue-600 hover:text-white text-gray-400 text-xs px-2.5 py-1.5 rounded-md transition-colors">
                    B1 Intermediate
                  </Link>
                </div>
              </details>

              {/* Languages */}
              <details className="group rounded-lg bg-white/5">
                <summary className="flex items-center gap-2 px-3 py-2.5 cursor-pointer list-none select-none text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  <span>🌍</span>
                  <span className="flex-1">Languages (CEFR)</span>
                  <span className="text-[10px] text-gray-500">3 languages</span>
                  <svg className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="flex flex-wrap gap-1.5 px-3 pb-3 pt-1">
                  <Link href="/quiz/spanish" className="bg-white/10 hover:bg-red-500 hover:text-white text-gray-400 text-xs px-2.5 py-1.5 rounded-md transition-colors">
                    🇪🇸 Spanish
                  </Link>
                  <Link href="/quiz/french" className="bg-white/10 hover:bg-blue-500 hover:text-white text-gray-400 text-xs px-2.5 py-1.5 rounded-md transition-colors">
                    🇫🇷 French
                  </Link>
                  <Link href="/quiz/german" className="bg-white/10 hover:bg-yellow-600 hover:text-white text-gray-400 text-xs px-2.5 py-1.5 rounded-md transition-colors">
                    🇩🇪 German
                  </Link>
                </div>
              </details>
            </div>
          </div>

          {/* Links + Actions */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm mb-6">
              <Link href="/summer-challenge" className="hover:text-brand-orange transition-colors text-brand-orange font-semibold">Summer Challenge</Link>
              <Link href="/fun" className="hover:text-brand-orange transition-colors">Fun Quizzes</Link>
              <Link href="/blog" className="hover:text-brand-orange transition-colors">Blog</Link>
              <Link href="/for-parents" className="hover:text-brand-orange transition-colors">For Parents</Link>
              <Link href="/colouring-books" className="hover:text-brand-orange transition-colors">Colouring Books</Link>
              <Link href="/posters-printables" className="hover:text-brand-orange transition-colors">Posters &amp; Printables</Link>
              <Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
              <Link href="/donate" className="hover:text-brand-orange transition-colors">Donate</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} The Practise Ground. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-orange transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
