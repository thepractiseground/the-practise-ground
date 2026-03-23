import Link from "next/link";
import type { Metadata } from "next";
import HeroImage from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "Free Cambridge IGCSE Quiz Practice — English, Maths & Science | The Practise Ground",
  description:
    "Free Cambridge IGCSE-aligned quizzes for Grades 5 to 10. 23,400+ questions covering English grammar, Maths, and Science. Weekly practice, instant scores, no sign-up. Perfect for Cambridge International exam preparation.",
  keywords: [
    "Cambridge IGCSE quiz practice",
    "IGCSE English quiz",
    "Cambridge maths quiz",
    "IGCSE science quiz",
    "free Cambridge practice questions",
    "Cambridge International exam preparation",
    "Cambridge English grammar questions",
    "Cambridge maths practice online",
    "IGCSE science MCQ",
    "free Cambridge quiz online",
    "Cambridge grade 5 quiz",
    "Cambridge grade 6 practice",
    "Cambridge grade 7 questions",
  ],
  openGraph: {
    title: "Free Cambridge IGCSE Quiz Practice — Grades 5-10 | The Practise Ground",
    description:
      "23,400+ free Cambridge IGCSE-aligned quiz questions for Grades 5-10 in English, Maths & Science. Instant scoring, no sign-up.",
    url: "https://www.thepractiseground.in/quiz/cambridge",
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.thepractiseground.in/quiz/cambridge",
  },
};

const grades = [5, 6, 7, 8, 9, 10];

const subjects = [
  {
    name: "English",
    emoji: "📝",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500",
    hoverBg: "hover:bg-orange-600",
    path: (g: number) => `/quiz/${g}`,
    topics: "Grammar, Vocabulary, Comprehension, Writing, Sentence Structure",
  },
  {
    name: "Maths",
    emoji: "🔢",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500",
    hoverBg: "hover:bg-emerald-600",
    path: (g: number) => `/quiz/maths/${g}`,
    topics: "Arithmetic, Algebra, Geometry, Trigonometry, Statistics",
  },
  {
    name: "Science",
    emoji: "🔬",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-500",
    hoverBg: "hover:bg-purple-600",
    path: (g: number) => `/quiz/science/${g}`,
    topics: "Physics, Chemistry, Biology, Environmental Science",
  },
];

export default function CambridgeLandingPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <HeroImage
          src="/images/og/og-english.png"
          alt="Cambridge IGCSE quiz practice for Grade 5 to 10"
          overlay={0.65}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Cambridge-Aligned Content
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Free Cambridge Practice Quizzes
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-4">
            23,400+ questions aligned with Cambridge International curriculum for Grade 5 to 10. English, Maths &amp; Science — all free, no sign-up required.
          </p>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-8">
            Our questions cover topics from Cambridge International syllabus and are reviewed by experienced educators to ensure relevance and accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#subjects" className="bg-white text-brand-navy font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
              Browse by Subject
            </Link>
            <Link href="#grades" className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
              Browse by Grade
            </Link>
          </div>
        </div>
      </section>

      {/* Subject Sections */}
      <section id="subjects" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-10">
          Choose Your Subject
        </h2>
        <div className="space-y-10">
          {subjects.map((subject) => (
            <div key={subject.name}>
              <div className={`bg-gradient-to-r ${subject.color} rounded-2xl p-6 mb-4`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{subject.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{subject.name}</h3>
                    <p className="text-white/80 text-sm">{subject.topics}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {grades.map((g) => (
                  <Link
                    key={`${subject.name}-${g}`}
                    href={subject.path(g)}
                    className={`${subject.bgColor} ${subject.hoverBg} text-white text-center py-4 rounded-xl font-semibold transition-colors`}
                  >
                    Grade {g}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Grade */}
      <section id="grades" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3">
            Browse by Grade
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Select your grade to see all available subjects and weekly quizzes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {grades.map((g) => (
              <div key={g} className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-200">
                <p className="text-2xl font-bold text-brand-navy mb-3">Grade {g}</p>
                <div className="space-y-2">
                  <Link href={`/quiz/${g}`} className="block text-sm text-brand-orange hover:underline font-medium">English</Link>
                  <Link href={`/quiz/maths/${g}`} className="block text-sm text-emerald-600 hover:underline font-medium">Maths</Link>
                  <Link href={`/quiz/science/${g}`} className="block text-sm text-purple-600 hover:underline font-medium">Science</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cambridge Students Use TPG */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-10">
          Why Cambridge Students Use The Practise Ground
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "📖", title: "Cambridge-Aligned", desc: "Questions cover topics from the Cambridge International syllabus used by international schools worldwide" },
            { icon: "🆓", title: "100% Free", desc: "No sign-up, no fees, no hidden costs — just open and start practising" },
            { icon: "📊", title: "Instant Feedback", desc: "See your score immediately after each quiz and learn from your mistakes" },
            { icon: "📱", title: "Mobile-Friendly", desc: "Practice on any device — phone, tablet, or computer. Works everywhere" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-brand-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">About Cambridge Practice on The Practise Ground</h2>
          <p className="text-gray-600 mb-4">
            Cambridge Assessment International Education offers the IGCSE and O-Level examinations, which are recognized worldwide and used by international schools across the globe. Our quizzes are designed to supplement Cambridge classroom learning by covering key topics from the Cambridge International syllabus across English, Maths, and Science for Grade 5 through 10.
          </p>
          <p className="text-gray-600 mb-4">
            Each subject has 52 weeks of content per grade — that&apos;s a full year of structured practice. Whether your child is preparing for periodic tests, mid-year exams, or the Cambridge IGCSE examinations, consistent weekly practice builds the confidence and knowledge they need to succeed.
          </p>
          <p className="text-gray-600">
            All content is written by experienced educators, reviewed for accuracy, and completely free. No sign-up required — just pick a grade, choose a subject, and start practising.
          </p>
        </div>
      </section>

      {/* Also Try */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Also Available</h2>
          <p className="text-blue-200 mb-8">
            We also offer CEFR-aligned language quizzes for Spanish, French, German, and English as a second language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href="/quiz/english" className="bg-brand-orange text-white font-bold px-8 py-3 rounded-xl hover:opacity-85 transition-all">English (CEFR)</Link>
            <Link href="/quiz/spanish" className="bg-red-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-600 transition-colors">Spanish (CEFR)</Link>
            <Link href="/quiz/french" className="bg-blue-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-600 transition-colors">French (CEFR)</Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Free Cambridge Practice Quizzes — Grade 5-10",
            description:
              "23,400+ free Cambridge IGCSE-aligned quiz questions for Grade 5-10 in English, Maths & Science. Aligned with Cambridge International syllabus.",
            url: "https://www.thepractiseground.in/quiz/cambridge",
            provider: {
              "@type": "EducationalOrganization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thepractiseground.in" },
              { "@type": "ListItem", position: 2, name: "Cambridge Quizzes", item: "https://www.thepractiseground.in/quiz/cambridge" },
            ],
          }),
        }}
      />
    </div>
  );
}
