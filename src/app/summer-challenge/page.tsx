"use client";

import Link from "next/link";
import { useState } from "react";
import { SUMMER_CHALLENGE } from "@/data/summer-challenge";

const SUBJECT_COLORS: Record<string, { bg: string; text: string; badge: string; abbr: string }> = {
  English: { bg: "bg-blue-50", text: "text-blue-700", badge: "bg-blue-100 text-blue-700", abbr: "ENG" },
  Maths: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", abbr: "MATH" },
  Science: { bg: "bg-purple-50", text: "text-purple-700", badge: "bg-purple-100 text-purple-700", abbr: "SCI" },
  Physics: { bg: "bg-sky-50", text: "text-sky-700", badge: "bg-sky-100 text-sky-700", abbr: "PHY" },
  Chemistry: { bg: "bg-teal-50", text: "text-teal-700", badge: "bg-teal-100 text-teal-700", abbr: "CHEM" },
  Biology: { bg: "bg-lime-50", text: "text-lime-700", badge: "bg-lime-100 text-lime-700", abbr: "BIO" },
};

const GRADE_PILL_COLORS: Record<number, string> = {
  5: "from-orange-500 to-amber-500",
  6: "from-fuchsia-500 to-pink-500",
  7: "from-blue-500 to-indigo-500",
  8: "from-pink-500 to-rose-500",
  9: "from-yellow-500 to-amber-500",
  10: "from-purple-500 to-violet-500",
  11: "from-teal-500 to-emerald-500",
  12: "from-indigo-500 to-blue-500",
};

const FAQ_ITEMS = [
  {
    q: "Is the Summer Challenge completely free?",
    a: "Yes, 100% free. No sign-up, no subscription, no hidden costs. Just pick your grade and start practising.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. The Practise Ground doesn't require any registration. Your child can start quizzes immediately — just open the link and begin.",
  },
  {
    q: "Is this aligned with CBSE, ICSE, and other curricula?",
    a: "Yes. Our questions cover core concepts taught across CBSE, ICSE, Cambridge, and IB curricula. The Summer Challenge selects foundational topics that are universally important regardless of which board your child follows. For Grades 11-12, topics are also aligned with JEE and NEET preparation.",
  },
  {
    q: "What if my child misses a week?",
    a: "No problem at all. The challenge is self-paced — your child can do any week at any time. There are no deadlines or expiry dates. You can also rearrange the order if needed.",
  },
  {
    q: "Can teachers use this in summer programmes?",
    a: "Absolutely. Many teachers use The Practise Ground for classroom warm-ups, homework, and summer revision programmes. The structured 8-week format makes it easy to assign weekly practice to students.",
  },
  {
    q: "How long does each week take?",
    a: "For Grades 5-10, each week includes 3 quizzes (English, Maths & Science) with 25 questions each — about 45-60 minutes total. For Grades 11-12, each week has 5 quizzes (English, Maths, Physics, Chemistry & Biology) — about 75-90 minutes spread across the week however you like.",
  },
];

export default function SummerChallengePage() {
  const [selectedGrade, setSelectedGrade] = useState(5);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const challenge = SUMMER_CHALLENGE[selectedGrade];

  const isSenior = selectedGrade >= 11;
  const subjectsPerWeek = isSenior ? 5 : 3;
  const questionsPerWeek = subjectsPerWeek * 25;
  const totalQuestions = questionsPerWeek * 8;
  const subjectList = isSenior ? "English, Maths, Physics, Chemistry & Biology" : "English, Maths & Science";

  const whatsappMessage = encodeURIComponent(
    `Check out this free 8-week Summer Challenge for Grade ${selectedGrade}! 📚☀️ Structured revision in ${subjectList} — no sign-up needed.\n\nhttps://www.thepractiseground.in/summer-challenge`
  );

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalResource",
            name: "Summer Challenge — 8-Week Quiz Programme",
            description:
              "Free structured summer revision programme for students in Grades 5-12. 8 weeks of curated quizzes across English, Maths, Science, Physics, Chemistry & Biology with 5,600+ practice questions.",
            provider: {
              "@type": "Organization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
            },
            educationalLevel: ["Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
            learningResourceType: "Quiz",
            isAccessibleForFree: true,
            inLanguage: "en",
            audience: {
              "@type": "EducationalAudience",
              educationalRole: ["student", "parent", "teacher"],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy via-blue-800 to-indigo-900 py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-brand-orange blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-400 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="inline-block bg-brand-orange/20 text-brand-orange font-semibold text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-brand-orange/30">
            Free for All Students
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            The Summer <span className="text-brand-orange">Challenge</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-3 max-w-2xl mx-auto">
            8 weeks of structured revision to keep your child ahead this summer.
            Grades 5-12 — all in one plan.
          </p>
          <p className="text-blue-200/70 text-sm mb-8">
            No sign-up required. Completely free. Works on any device.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/90">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-orange">8</div>
              <div className="text-xs sm:text-sm text-blue-200">Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-orange">5</div>
              <div className="text-xs sm:text-sm text-blue-200">Subjects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-orange">5,600</div>
              <div className="text-xs sm:text-sm text-blue-200">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-orange">8</div>
              <div className="text-xs sm:text-sm text-blue-200">Grades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Selector */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 text-center">
            Select your grade
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist">
            {[5, 6, 7, 8, 9, 10, 11, 12].map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                role="tab"
                aria-selected={selectedGrade === grade}
                className={`px-5 sm:px-6 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 ${
                  selectedGrade === grade
                    ? `bg-gradient-to-r ${GRADE_PILL_COLORS[grade]} text-white shadow-md scale-105`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Grade {grade}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Week Plan Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-2">
          Your 8-Week Plan — Grade {selectedGrade}
        </h2>
        <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto">
          Complete {subjectsPerWeek} quizzes per week across {subjectList}.
          Each quiz has 25 questions with instant scoring.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {challenge.weeks.map((week) => (
            <div
              key={week.week}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 sm:p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-amber-400 text-white font-bold flex items-center justify-center text-sm">
                    {week.week}
                  </span>
                  <div>
                    <h3 className="font-bold text-brand-navy text-sm sm:text-base">
                      Week {week.week}
                    </h3>
                    <p className="text-xs text-gray-400">{week.theme}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">{questionsPerWeek} Qs</span>
              </div>

              <div className="space-y-2.5">
                {week.subjects.map((sub) => {
                  const colors = SUBJECT_COLORS[sub.subject];
                  return (
                    <Link
                      key={sub.subject}
                      href={sub.quizPath}
                      className={`flex items-center justify-between ${colors.bg} rounded-xl px-4 py-3 group hover:shadow-sm transition-all`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${colors.badge} shrink-0`}>
                          {colors.abbr}
                        </span>
                        <span className={`text-sm ${colors.text} truncate`}>{sub.topic}</span>
                      </div>
                      <svg
                        className={`w-4 h-4 ${colors.text} opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Share */}
        <div className="mt-8 text-center">
          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Share This Plan on WhatsApp
          </a>
          <p className="text-xs text-gray-400 mt-2">
            Share with parent groups, friends, or your child&apos;s teacher
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-10">
            How the Summer Challenge Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Pick Your Grade", desc: "Select your child's grade from 5 to 12 above.", icon: "🎯" },
              { step: "2", title: "Follow the Plan", desc: "Each week has quizzes across all subjects for your grade — just follow the weekly plan.", icon: "📋" },
              { step: "3", title: "Take the Quizzes", desc: "25 questions per quiz with instant scoring and answer review.", icon: "✏️" },
              { step: "4", title: "Master the Basics", desc: "By week 8, your child will have revised all core concepts.", icon: "🏆" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center text-sm mx-auto mb-2">
                  {item.step}
                </div>
                <h3 className="font-bold text-brand-navy mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Summer Practice Matters */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
          Why Summer Practice Matters
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Research consistently shows that students can lose up to two months of academic progress
            during long summer breaks — a phenomenon known as &quot;summer learning loss&quot; or the
            &quot;summer slide.&quot; This is especially true for subjects like Maths and Science, where
            concepts build on each other and gaps compound quickly.
          </p>
          <p>
            The good news? It doesn&apos;t take much to prevent it. Studies show that just 2-3 hours of
            structured practice per week during summer can not only prevent learning loss but actually
            help students enter the new academic year ahead of where they left off. The key is
            consistency — short, regular sessions are far more effective than long, irregular ones.
          </p>
          <p>
            That&apos;s exactly what the Summer Challenge is designed for. By spreading carefully
            selected questions across 8 weeks, your child revises the most important concepts from their
            grade level — without feeling overwhelmed. Each quiz takes just 15-20 minutes, making it easy
            to fit into even the busiest summer schedule.
          </p>
          <p>
            Whether your child follows the CBSE, ICSE, Cambridge, or IB curriculum, the topics covered in
            this challenge are universally foundational. For Grades 5-10, it covers English, Maths &amp; Science.
            For Grades 11-12, it expands to five subjects — English, Maths, Physics, Chemistry &amp; Biology —
            aligned with board exam and competitive exam preparation. These are the building
            blocks that every student needs to master before moving to the next grade.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-brand-navy text-sm sm:text-base pr-4">
                    {item.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-800 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Start?
          </h2>
          <p className="text-blue-200 mb-6">
            Pick your grade above and begin the 8-week Summer Challenge today. It&apos;s free, it&apos;s structured, and it works.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-brand-orange hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Pick Your Grade
            </a>
            <Link
              href="/for-parents"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/20"
            >
              Learn More (For Parents)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
