import Link from "next/link";
import Image from "next/image";
import { GRADES, GRADE_INFO, getGradeWeeks } from "@/lib/quiz-data";
import { MATHS_GRADES, MATHS_GRADE_INFO, getMathsGradeWeeks } from "@/lib/maths-quiz-data";
import { SCIENCE_GRADES, SCIENCE_GRADE_INFO, getScienceGradeWeeks } from "@/lib/science-quiz-data";
import { MATHS_HIGHER_GRADES, MATHS_HIGHER_GRADE_INFO, getMathsHigherGradeWeeks } from "@/lib/maths-higher-quiz-data";
import { PHYSICS_GRADES, PHYSICS_GRADE_INFO, getPhysicsGradeWeeks } from "@/lib/physics-quiz-data";
import { CHEMISTRY_GRADES, CHEMISTRY_GRADE_INFO, getChemistryGradeWeeks } from "@/lib/chemistry-quiz-data";
import { BIOLOGY_GRADES, BIOLOGY_GRADE_INFO, getBiologyGradeWeeks } from "@/lib/biology-quiz-data";
import { CEFR_LEVELS, getCefrLevelWeeks } from "@/lib/cefr-quiz-data";
import { SPANISH_CEFR_LEVELS, getSpanishLevelWeeks } from "@/lib/cefr-spanish-quiz-data";
import { FRENCH_CEFR_LEVELS, getFrenchLevelWeeks } from "@/lib/cefr-french-quiz-data";
import { GERMAN_CEFR_LEVELS, getGermanLevelWeeks } from "@/lib/cefr-german-quiz-data";
import SubjectTabs from "@/components/SubjectTabs";


export default function Home() {
  const englishQuestions = GRADES.reduce((sum, g) => {
    const weeks = getGradeWeeks(g);
    return sum + weeks.reduce((s, w) => s + w.questions.length, 0);
  }, 0);

  const mathsQuestions = MATHS_GRADES.reduce((sum, g) => {
    const weeks = getMathsGradeWeeks(g);
    return sum + weeks.reduce((s, w) => s + w.questions.length, 0);
  }, 0);

  const scienceQuestions = SCIENCE_GRADES.reduce((sum, g) => {
    const weeks = getScienceGradeWeeks(g);
    return sum + weeks.reduce((s, w) => s + w.questions.length, 0);
  }, 0);

  const mathsHigherQuestions = MATHS_HIGHER_GRADES.reduce((sum, g) => {
    const weeks = getMathsHigherGradeWeeks(g);
    return sum + weeks.reduce((s, w) => s + w.questions.length, 0);
  }, 0);

  const physicsQuestions = PHYSICS_GRADES.reduce((sum, g) => {
    const weeks = getPhysicsGradeWeeks(g);
    return sum + weeks.reduce((s, w) => s + w.questions.length, 0);
  }, 0);

  const chemistryQuestions = CHEMISTRY_GRADES.reduce((sum, g) => {
    const weeks = getChemistryGradeWeeks(g);
    return sum + weeks.reduce((s, w) => s + w.questions.length, 0);
  }, 0);

  const biologyQuestions = BIOLOGY_GRADES.reduce((sum, g) => {
    const weeks = getBiologyGradeWeeks(g);
    return sum + weeks.reduce((s, w) => s + w.questions.length, 0);
  }, 0);

  const totalQuestions = englishQuestions + mathsQuestions + scienceQuestions + mathsHigherQuestions + physicsQuestions + chemistryQuestions + biologyQuestions;

  const cefrEnglishQ = CEFR_LEVELS.reduce((sum, l) => sum + getCefrLevelWeeks(l).reduce((s, w) => s + w.questions.length, 0), 0);
  const cefrSpanishQ = SPANISH_CEFR_LEVELS.reduce((sum, l) => sum + getSpanishLevelWeeks(l).reduce((s, w) => s + w.questions.length, 0), 0);
  const cefrFrenchQ = FRENCH_CEFR_LEVELS.reduce((sum, l) => sum + getFrenchLevelWeeks(l).reduce((s, w) => s + w.questions.length, 0), 0);
  const cefrGermanQ = GERMAN_CEFR_LEVELS.reduce((sum, l) => sum + getGermanLevelWeeks(l).reduce((s, w) => s + w.questions.length, 0), 0);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, var(--color-hero-from), var(--color-hero-via), var(--color-hero-to))",
      }}
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-4">
          Practise <span className="text-brand-orange">Every Week</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Free interactive quizzes in English, Maths, Science, Physics, Chemistry, Biology &amp; more for Grades 5 to 12. No sign-up required!
        </p>
        <p className="text-base text-gray-500 mb-4">
          {totalQuestions.toLocaleString()}+ questions &middot; 8 subjects &middot; 8 grades &middot; Weekly content
        </p>
      </section>

      {/* Subject Tabs + Content */}
      <SubjectTabs>
        {/* ── English Tab ── */}
        <section data-tab="english" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative overflow-hidden rounded-2xl mb-6 p-6">
            <Image
              src="/images/og/og-english.png"
              alt="English grammar and vocabulary quiz practice for Grades 5 to 12"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/75 to-amber-500/65" />
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-3xl">📝</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">English Quizzes</h2>
              <span className="bg-white/25 text-white text-sm font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                {englishQuestions.toLocaleString()}+ questions
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GRADES.map((grade) => {
              const info = GRADE_INFO[grade];
              const weeks = getGradeWeeks(grade);
              const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
              return (
                <Link
                  key={grade}
                  href={`/quiz/${grade}`}
                  className={`group block rounded-2xl bg-gradient-to-br ${info.color} p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Grade {grade}</h3>
                    <span className="bg-white/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                      {weeks.length} weeks
                    </span>
                  </div>
                  <p className="text-white/90 text-sm mb-1">Ages {info.ageRange}</p>
                  <p className="text-white/80 text-sm mb-4">{totalQ.toLocaleString()} questions</p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Start Practising
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Maths Tab (Standard + Higher) ── */}
        <section data-tab="maths" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative overflow-hidden rounded-2xl mb-6 p-6">
            <Image
              src="/images/og/og-maths.png"
              alt="Maths quiz practice covering arithmetic, algebra and geometry for Grades 5 to 12"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/75 to-teal-500/65" />
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-3xl">🔢</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Maths Quizzes</h2>
              <span className="bg-white/25 text-white text-sm font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                {(mathsQuestions + mathsHigherQuestions).toLocaleString()}+ questions
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MATHS_GRADES.map((grade) => {
              const info = MATHS_GRADE_INFO[grade];
              const weeks = getMathsGradeWeeks(grade);
              const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
              return (
                <Link
                  key={grade}
                  href={`/quiz/maths/${grade}`}
                  className={`group block rounded-2xl bg-gradient-to-br ${info.color} p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Grade {grade}</h3>
                    <span className="bg-white/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                      {weeks.length} weeks
                    </span>
                  </div>
                  <p className="text-white/90 text-sm mb-1">Ages {info.ageRange}</p>
                  <p className="text-white/80 text-sm mb-2">{totalQ.toLocaleString()} questions</p>
                  <p className="text-white/70 text-xs mb-4">{info.topics}</p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Start Practising
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* Maths Higher — Grades 11-12 */}
          <div className="mt-8 mb-4 flex items-center gap-3">
            <span className="text-xl">📐</span>
            <h3 className="text-lg font-bold text-brand-navy">Maths Higher</h3>
            <span className="text-xs font-semibold text-white bg-rose-500 px-2.5 py-0.5 rounded-full">JEE Prep</span>
            <span className="text-sm text-gray-500">Grades 11 &amp; 12</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MATHS_HIGHER_GRADES.map((grade) => {
              const info = MATHS_HIGHER_GRADE_INFO[grade];
              const weeks = getMathsHigherGradeWeeks(grade);
              const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
              return (
                <Link
                  key={`mh-${grade}`}
                  href={`/quiz/maths-higher/${grade}`}
                  className={`group block rounded-2xl bg-gradient-to-br ${info.color} p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Grade {grade}</h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-rose-400/40 text-white text-xs font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">JEE Prep</span>
                      <span className="bg-white/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                        {weeks.length} weeks
                      </span>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mb-1">Ages {info.ageRange}</p>
                  <p className="text-white/80 text-sm mb-2">{totalQ.toLocaleString()} questions</p>
                  <p className="text-white/70 text-xs mb-4">{info.topics}</p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Start Practising
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Science Tab (Combined + Physics/Chemistry/Biology) ── */}
        <section data-tab="science" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative overflow-hidden rounded-2xl mb-6 p-6">
            <Image
              src="/images/og/og-science.png"
              alt="Science quiz practice covering physics, chemistry and biology for Grades 5 to 12"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/75 to-indigo-500/65" />
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-3xl">🔬</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Science Quizzes</h2>
              <span className="bg-white/25 text-white text-sm font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                {(scienceQuestions + physicsQuestions + chemistryQuestions + biologyQuestions).toLocaleString()}+ questions
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCIENCE_GRADES.map((grade) => {
              const info = SCIENCE_GRADE_INFO[grade];
              const weeks = getScienceGradeWeeks(grade);
              const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
              return (
                <Link
                  key={grade}
                  href={`/quiz/science/${grade}`}
                  className={`group block rounded-2xl bg-gradient-to-br ${info.color} p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Grade {grade}</h3>
                    <span className="bg-white/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                      {weeks.length} weeks
                    </span>
                  </div>
                  <p className="text-white/90 text-sm mb-1">Ages {info.ageRange}</p>
                  <p className="text-white/80 text-sm mb-2">{totalQ.toLocaleString()} questions</p>
                  <p className="text-white/70 text-xs mb-4">{info.topics}</p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Start Practising
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* Physics — Grades 11-12 */}
          <div className="mt-8 mb-4 flex items-center gap-3">
            <span className="text-xl">⚡</span>
            <h3 className="text-lg font-bold text-brand-navy">Physics</h3>
            <span className="text-sm text-gray-500">Grades 11 &amp; 12</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHYSICS_GRADES.map((grade) => {
              const info = PHYSICS_GRADE_INFO[grade];
              const weeks = getPhysicsGradeWeeks(grade);
              const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
              return (
                <Link
                  key={`phy-${grade}`}
                  href={`/quiz/physics/${grade}`}
                  className={`group block rounded-2xl bg-gradient-to-br ${info.color} p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Grade {grade}</h3>
                    <span className="bg-white/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                      {weeks.length} weeks
                    </span>
                  </div>
                  <p className="text-white/90 text-sm mb-1">Ages {info.ageRange}</p>
                  <p className="text-white/80 text-sm mb-2">{totalQ.toLocaleString()} questions</p>
                  <p className="text-white/70 text-xs mb-4">{info.topics}</p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Start Practising
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* Chemistry — Grades 11-12 */}
          <div className="mt-8 mb-4 flex items-center gap-3">
            <span className="text-xl">🧪</span>
            <h3 className="text-lg font-bold text-brand-navy">Chemistry</h3>
            <span className="text-sm text-gray-500">Grades 11 &amp; 12</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHEMISTRY_GRADES.map((grade) => {
              const info = CHEMISTRY_GRADE_INFO[grade];
              const weeks = getChemistryGradeWeeks(grade);
              const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
              return (
                <Link
                  key={`chem-${grade}`}
                  href={`/quiz/chemistry/${grade}`}
                  className={`group block rounded-2xl bg-gradient-to-br ${info.color} p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Grade {grade}</h3>
                    <span className="bg-white/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                      {weeks.length} weeks
                    </span>
                  </div>
                  <p className="text-white/90 text-sm mb-1">Ages {info.ageRange}</p>
                  <p className="text-white/80 text-sm mb-2">{totalQ.toLocaleString()} questions</p>
                  <p className="text-white/70 text-xs mb-4">{info.topics}</p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Start Practising
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* Biology — Grades 11-12 */}
          <div className="mt-8 mb-4 flex items-center gap-3">
            <span className="text-xl">🧬</span>
            <h3 className="text-lg font-bold text-brand-navy">Biology</h3>
            <span className="text-sm text-gray-500">Grades 11 &amp; 12</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BIOLOGY_GRADES.map((grade) => {
              const info = BIOLOGY_GRADE_INFO[grade];
              const weeks = getBiologyGradeWeeks(grade);
              const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);
              return (
                <Link
                  key={`bio-${grade}`}
                  href={`/quiz/biology/${grade}`}
                  className={`group block rounded-2xl bg-gradient-to-br ${info.color} p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Grade {grade}</h3>
                    <span className="bg-white/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                      {weeks.length} weeks
                    </span>
                  </div>
                  <p className="text-white/90 text-sm mb-1">Ages {info.ageRange}</p>
                  <p className="text-white/80 text-sm mb-2">{totalQ.toLocaleString()} questions</p>
                  <p className="text-white/70 text-xs mb-4">{info.topics}</p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Start Practising
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Languages Tab ── */}
        <section data-tab="languages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 mb-6">
            <Image
              src="/images/og/og-languages.png"
              alt="Language quizzes for English, Spanish, French and German — CEFR aligned"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-800/60" />
            <div className="relative z-10 flex items-center gap-3 mb-1">
              <span className="text-3xl">🌍</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Language Quizzes</h2>
            </div>
            <p className="relative z-10 text-blue-200 text-sm sm:text-base ml-12">
              CEFR-aligned grammar quizzes — A1 to C1 levels. Free, no sign-up.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "English", emoji: "🇬🇧", href: "/quiz/english", count: cefrEnglishQ, levels: "A2 – B1", color: "from-sky-500 to-blue-600" },
              { name: "Spanish", emoji: "🇪🇸", href: "/quiz/spanish", count: cefrSpanishQ, levels: "A1 – C1", color: "from-red-500 to-rose-600" },
              { name: "French", emoji: "🇫🇷", href: "/quiz/french", count: cefrFrenchQ, levels: "A1 – C1", color: "from-blue-500 to-indigo-600" },
              { name: "German", emoji: "🇩🇪", href: "/quiz/german", count: cefrGermanQ, levels: "A1 – C1", color: "from-yellow-500 to-amber-600" },
            ].map((lang) => (
              <Link
                key={lang.name}
                href={lang.href}
                className={`group block rounded-2xl bg-gradient-to-br ${lang.color} p-5 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{lang.emoji}</span>
                  <h3 className="text-xl font-bold text-white">{lang.name}</h3>
                </div>
                <p className="text-white/90 text-sm mb-1">{lang.levels} levels</p>
                <p className="text-white/75 text-sm mb-3">{lang.count.toLocaleString()}+ questions</p>
                <div className="flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                  Start Practising
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </SubjectTabs>

      {/* Fun Quiz Discovery Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Link
          href="/fun"
          className="group block bg-gradient-to-r from-rose-50 via-purple-50 to-indigo-50 border border-purple-200/60 rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:border-purple-300 transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl sm:text-4xl shrink-0">🧠</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-1 group-hover:text-purple-700 transition-colors">
                Brain Break — Try a Fun Quiz!
              </h3>
              <p className="text-sm text-gray-500">
                Riddles, logic puzzles, general knowledge &amp; more. Our most engaging quizzes — students spend 8 minutes on average!
              </p>
            </div>
            <svg className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform shrink-0 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Why Practise With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "📝", title: "25 Questions Weekly", desc: "Fresh quiz content every week across English, Maths, Science, Physics, Chemistry, Biology and more" },
              { icon: "⚡", title: "Instant Results", desc: "See your score right away and learn which answers you got right or wrong" },
              { icon: "🆓", title: "Completely Free", desc: "No sign-up, no fees, no hidden costs. Just start practising!" },
              { icon: "📱", title: "Works Everywhere", desc: "Practice on your phone, tablet, or computer — anytime, anywhere" },
            ].map((f) => (
              <div key={f.title} className="text-center p-6">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (for SEO/AEO) */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is The Practise Ground?",
                a: "The Practise Ground is a free online platform where students in Grades 5 to 12 can practice English, Maths, Science, Physics, Chemistry, Biology, and Maths Higher (JEE-prep) through weekly quizzes. Each quiz has 25 multiple-choice questions aligned with CBSE, ICSE, and state board curricula.",
              },
              {
                q: "Do I need to sign up to take a quiz?",
                a: "No! All quizzes are completely free and open. Just select your subject and grade, pick a quiz, and start practising immediately — no email or account needed.",
              },
              {
                q: "How often are new quizzes added?",
                a: "We have 52 weeks of quizzes ready for every subject and grade — that is a full year of content per subject. With 39,000+ questions across all subjects, there is always something new to practise!",
              },
              {
                q: "What subjects and topics do you cover?",
                a: "We offer English, Maths, and Science quizzes for Grades 5-12. For Grades 11-12, we also have separate Physics, Chemistry, Biology, and Maths Higher (JEE-prep) tracks. English covers grammar, vocabulary, comprehension, and writing. All content is aligned with CBSE, ICSE, and state board curricula.",
              },
              {
                q: "Is this useful for CBSE and ICSE students?",
                a: "Yes! Our questions are designed to supplement school-level practice and are useful for students following CBSE, ICSE, and state board curricula.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border rounded-xl p-4 hover:shadow-sm transition-shadow">
                <summary className="font-semibold text-brand-navy cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "The Practise Ground",
            url: "https://www.thepractiseground.in",
            description:
              "Free interactive quizzes for students in Grades 5-12 across English, Maths, Science, Physics, Chemistry, Biology and more. 39,000+ questions, no sign-up required.",
            email: "hello@thepractiseground.in",
            areaServed: { "@type": "Place", name: "Worldwide" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Free Quiz Subjects",
              itemListElement: [
                { "@type": "OfferCatalog", name: "English Quizzes", description: "Grammar, vocabulary, comprehension quizzes for Grades 5-12" },
                { "@type": "OfferCatalog", name: "Maths Quizzes", description: "Arithmetic, algebra, geometry quizzes for Grades 5-12" },
                { "@type": "OfferCatalog", name: "Science Quizzes", description: "Physics, chemistry, biology quizzes for Grades 5-10" },
                { "@type": "OfferCatalog", name: "Physics Quizzes", description: "Mechanics, thermodynamics, electromagnetism quizzes for Grades 11-12" },
                { "@type": "OfferCatalog", name: "Chemistry Quizzes", description: "Organic, inorganic, physical chemistry quizzes for Grades 11-12" },
                { "@type": "OfferCatalog", name: "Biology Quizzes", description: "Botany, zoology, genetics quizzes for Grades 11-12" },
                { "@type": "OfferCatalog", name: "Maths Higher Quizzes", description: "Advanced maths and JEE-prep quizzes for Grades 11-12" },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "The Practise Ground",
            url: "https://www.thepractiseground.in",
            description: "Free English, Maths, Science, Physics, Chemistry & Biology quizzes for Grades 5-12. 39,000+ questions.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is The Practise Ground?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Practise Ground is a free online platform where students in Grades 5 to 12 can practice English, Maths, Science, Physics, Chemistry, Biology, and Maths Higher (JEE-prep) through weekly quizzes. Each quiz has 25 multiple-choice questions aligned with CBSE, ICSE, and state board curricula.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to sign up to take a quiz?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No! All quizzes are completely free and open. Just select your subject and grade, pick a quiz, and start practising immediately — no email or account needed.",
                },
              },
              {
                "@type": "Question",
                name: "How often are new quizzes added?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We have 52 weeks of quizzes ready for every subject and grade — that is a full year of content per subject. With 39,000+ questions across all subjects, there is always something new to practise!",
                },
              },
              {
                "@type": "Question",
                name: "What subjects and topics do you cover?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer English, Maths, and Science quizzes for Grades 5-12. For Grades 11-12, we also have separate Physics, Chemistry, Biology, and Maths Higher (JEE-prep) tracks. All content is aligned with CBSE, ICSE, and state board curricula.",
                },
              },
              {
                "@type": "Question",
                name: "Is this useful for CBSE and ICSE students?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Our questions are designed to supplement school-level practice and are useful for students following CBSE, ICSE, and state board curricula.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
