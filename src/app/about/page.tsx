import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Free English, Maths & Science Quizzes | The Practise Ground",
  description:
    "The Practise Ground is a free quiz platform for Grades 5-10 covering English, Maths, and Science. 23,400+ questions built by 10+ educators with 20+ years of teaching experience.",
  openGraph: {
    title: "About The Practise Ground",
    description:
      "Free English, Maths & Science quizzes for Grades 5-10. No sign-up, no fees — just quality practice for every student.",
    url: "https://www.thepractiseground.in/about",
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.thepractiseground.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy via-blue-800 to-indigo-900 py-16 sm:py-20 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Free for every student, everywhere
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            About <span className="text-brand-orange">The Practise Ground</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto">
            Making quality education accessible, fun, and completely free — across English, Maths, and Science.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "23,400+", label: "Quiz Questions", color: "text-brand-orange" },
              { value: "3", label: "Subjects", color: "text-brand-navy" },
              { value: "6", label: "Grade Levels", color: "text-brand-teal" },
              { value: "100%", label: "Free Forever", color: "text-purple-600" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Illustration */}
          <div className="order-2 md:order-1">
            <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 sm:p-10">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { emoji: "📝", label: "English", bg: "bg-orange-100" },
                  { emoji: "🔢", label: "Maths", bg: "bg-emerald-100" },
                  { emoji: "🔬", label: "Science", bg: "bg-purple-100" },
                  { emoji: "📊", label: "Grades 5-10", bg: "bg-blue-100" },
                  { emoji: "🌍", label: "Global", bg: "bg-teal-100" },
                  { emoji: "🆓", label: "Free", bg: "bg-pink-100" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`${item.bg} rounded-2xl p-4 text-center transform hover:scale-105 transition-transform`}
                  >
                    <span className="text-2xl sm:text-3xl block mb-1">{item.emoji}</span>
                    <span className="text-xs font-semibold text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-brand-orange rounded-full opacity-60" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brand-teal rounded-full opacity-60" />
            </div>
          </div>
          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We started The Practise Ground with a simple belief: <strong>every student deserves access to quality practice material</strong>, regardless of their background or financial situation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Too many students rely on expensive tuition centres or premium apps to prepare for exams. We wanted to change that — by building a platform that&apos;s completely free, requires no sign-up, and offers curriculum-aligned content for English, Maths, and Science.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you&apos;re a student in Mumbai preparing for CBSE boards, or in London working through your IGCSE syllabus, The Practise Ground is here for you.
            </p>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3">What We Cover</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Three subjects, six grades, thousands of questions — all aligned with CBSE, ICSE, Cambridge, and IB curricula.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* English */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">English</h3>
              <p className="text-sm text-gray-500 font-semibold mb-3">7,800+ questions</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">&#10003;</span>
                  Grammar — tenses, articles, prepositions, voice
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">&#10003;</span>
                  Vocabulary — synonyms, antonyms, idioms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">&#10003;</span>
                  Reading comprehension &amp; sentence structure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">&#10003;</span>
                  Letter &amp; essay writing concepts
                </li>
              </ul>
              <Link href="/quiz/8" className="inline-block mt-5 text-brand-orange font-semibold text-sm hover:underline">
                Start English Quizzes &rarr;
              </Link>
            </div>

            {/* Maths */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🔢</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Maths</h3>
              <p className="text-sm text-gray-500 font-semibold mb-3">7,800+ questions</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  Arithmetic, fractions &amp; number systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  Algebra — equations, polynomials, AP
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  Geometry, trigonometry &amp; mensuration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  Statistics, probability &amp; data handling
                </li>
              </ul>
              <Link href="/quiz/maths/8" className="inline-block mt-5 text-emerald-600 font-semibold text-sm hover:underline">
                Start Maths Quizzes &rarr;
              </Link>
            </div>

            {/* Science */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Science</h3>
              <p className="text-sm text-gray-500 font-semibold mb-3">7,800+ questions</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">&#10003;</span>
                  Physics — motion, electricity, light &amp; optics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">&#10003;</span>
                  Chemistry — periodic table, reactions, acids
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">&#10003;</span>
                  Biology — cells, photosynthesis, human body
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">&#10003;</span>
                  Environmental science &amp; natural resources
                </li>
              </ul>
              <Link href="/quiz/science" className="inline-block mt-5 text-purple-600 font-semibold text-sm hover:underline">
                Explore Science &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — visual steps */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3">How It Works</h2>
        <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
          Three simple steps. No account required, no cost, no catch.
        </p>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Pick Your Subject & Grade",
              desc: "Choose English, Maths, or Science, then select your grade level (5 through 10).",
              gradient: "from-brand-orange to-orange-400",
              bg: "bg-orange-50",
            },
            {
              step: "2",
              title: "Take a Weekly Quiz",
              desc: "Each quiz has 25 multiple-choice questions on a focused topic. 52 weeks of content per subject.",
              gradient: "from-brand-teal to-emerald-400",
              bg: "bg-teal-50",
            },
            {
              step: "3",
              title: "Learn & Improve",
              desc: "Get instant feedback on every answer. Retake quizzes to improve. Share your scores with friends.",
              gradient: "from-purple-600 to-indigo-500",
              bg: "bg-purple-50",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                <span className="text-white text-2xl font-bold">{item.step}</span>
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Free — with illustration */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">Why Is It Free?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Quality practice material shouldn&apos;t be locked behind a paywall. Every quiz, every question, and every blog post on The Practise Ground is <strong>free to access — no sign-up, no paywalls, no hidden costs</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe consistent practice is what helps students improve, and cost should never be the barrier. That&apos;s why we&apos;re committed to keeping our core content freely available to every student.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you find value in what we do, you can{" "}
                <a
                  href="https://www.paypal.com/ncp/payment/U3FSDHDCCEKJE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline font-medium"
                >
                  support us with a small donation
                </a>
                {" "}to help us grow and add more content.
              </p>
            </div>
            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <div className="space-y-4">
                  {[
                    { icon: "🚫", text: "No sign-up required", color: "bg-red-100 text-red-700" },
                    { icon: "🚫", text: "No paywalls or hidden fees", color: "bg-red-100 text-red-700" },
                    { icon: "✅", text: "23,400+ free questions", color: "bg-green-100 text-green-700" },
                    { icon: "✅", text: "3 subjects, 6 grades", color: "bg-green-100 text-green-700" },
                    { icon: "✅", text: "45+ blog guides", color: "bg-green-100 text-green-700" },
                    { icon: "✅", text: "Core content always free", color: "bg-green-100 text-green-700" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className={`${item.color} rounded-xl px-4 py-3 flex items-center gap-3 font-medium text-sm`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-orange rounded-full opacity-40" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-brand-teal rounded-full opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3">Who Is This For?</h2>
        <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
          Whether you&apos;re a student, parent, or teacher — there&apos;s something here for you.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              emoji: "🎓",
              title: "Students",
              desc: "Build confidence in English, Maths, and Science through consistent weekly practice. Retake quizzes, track improvement, and prepare for exams.",
              bg: "bg-orange-50",
              border: "border-orange-100",
            },
            {
              emoji: "👨‍👩‍👧",
              title: "Parents",
              desc: "Give your child a structured practice routine — at zero cost. No installation needed; just open the browser and start. Perfect supplement to schoolwork.",
              bg: "bg-blue-50",
              border: "border-blue-100",
            },
            {
              emoji: "👩‍🏫",
              title: "Teachers",
              desc: "Use our quizzes as homework assignments or classroom warm-ups. Blog posts serve as ready-made study guides for your students.",
              bg: "bg-emerald-50",
              border: "border-emerald-100",
            },
          ].map((item) => (
            <div key={item.title} className={`${item.bg} border ${item.border} rounded-2xl p-6 hover:shadow-md transition-shadow`}>
              <span className="text-4xl block mb-4">{item.emoji}</span>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">Our Team</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Practise Ground is built and maintained by a dedicated team of <strong>10+ educators</strong> with over <strong>20 years of combined teaching experience</strong> across English, Mathematics, and Science. Our team includes subject-matter experts who have taught in schools following CBSE, ICSE, Cambridge, and IB curricula — giving us first-hand insight into what students need at every grade level.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every question on this platform is written, reviewed, and refined by real teachers — not auto-generated. We take accuracy seriously because we know that a single incorrect answer in a study resource can cause lasting confusion. Our educators bring classroom experience from India, the UK, and Southeast Asia, ensuring our content works for students across different education systems.
              </p>
            </div>
            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "10+", label: "Educators", icon: "👩‍🏫", bg: "bg-blue-100" },
                    { value: "20+", label: "Years Experience", icon: "📚", bg: "bg-indigo-100" },
                    { value: "3", label: "Subjects", icon: "📖", bg: "bg-purple-100" },
                    { value: "4", label: "Curricula Covered", icon: "🌍", bg: "bg-teal-100" },
                  ].map((item) => (
                    <div key={item.label} className={`${item.bg} rounded-2xl p-4 text-center`}>
                      <span className="text-2xl block mb-1">{item.icon}</span>
                      <p className="text-xl font-bold text-brand-navy">{item.value}</p>
                      <p className="text-xs text-gray-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-brand-teal rounded-full opacity-40" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brand-orange rounded-full opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Quality */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3">How We Ensure Quality</h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
          Every question goes through a rigorous process before it reaches you.
        </p>
        <div className="grid sm:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Curriculum Mapping",
              desc: "Each grade and subject is mapped to CBSE, ICSE, Cambridge, and IB syllabi to ensure comprehensive topic coverage across all 52 weeks.",
              gradient: "from-blue-500 to-blue-600",
            },
            {
              step: "2",
              title: "Expert Authoring",
              desc: "Questions are written by subject specialists with hands-on teaching experience, ensuring age-appropriate difficulty and clear language.",
              gradient: "from-brand-teal to-emerald-500",
            },
            {
              step: "3",
              title: "Accuracy Review",
              desc: "Every question, option, and answer is critically reviewed for factual accuracy. Errors are identified and corrected before publication.",
              gradient: "from-purple-500 to-purple-600",
            },
            {
              step: "4",
              title: "Ongoing Updates",
              desc: "Our content is regularly revisited and updated to fix issues, improve clarity, and keep pace with curriculum changes.",
              gradient: "from-brand-orange to-orange-500",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                <span className="text-white text-xl font-bold">{item.step}</span>
              </div>
              <h3 className="font-bold text-brand-navy text-base mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Next */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3">What&apos;s Next</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            We&apos;re actively expanding The Practise Ground. Here&apos;s a glimpse of what&apos;s on our roadmap.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-bold text-brand-navy mb-2">More Grades</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Grades 11 and 12 are next — covering senior secondary topics in English, Maths, and Science for students preparing for board exams and competitive entrance tests.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-bold text-brand-navy mb-2">Language Practice</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We&apos;re building quiz modules for additional languages including German, Spanish, Chinese, Bengali, and Portuguese — making language learning accessible and structured.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-bold text-brand-navy mb-2">Life Skills Courses</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Free courses in Finance Management, Time Management, and Team Management — designed for Grade 12 students and beyond, to help them prepare for college and careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum alignment visual */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3">Built for Every Board</h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Our content is carefully aligned with major education boards across India and globally.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { board: "CBSE", full: "Central Board of Secondary Education", color: "from-blue-500 to-blue-600" },
              { board: "ICSE", full: "Indian Certificate of Secondary Education", color: "from-emerald-500 to-emerald-600" },
              { board: "Cambridge", full: "Cambridge IGCSE", color: "from-purple-500 to-purple-600" },
              { board: "IB", full: "International Baccalaureate", color: "from-amber-500 to-amber-600" },
            ].map((b) => (
              <div key={b.board} className={`bg-gradient-to-br ${b.color} rounded-2xl p-5 text-center text-white`}>
                <p className="text-2xl font-bold mb-1">{b.board}</p>
                <p className="text-xs text-white/80 leading-snug">{b.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-gradient-to-r from-brand-orange to-orange-500 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Start Practising?</h2>
            <p className="text-white/90 mb-8 max-w-lg mx-auto">
              Pick a subject below and jump right in. It takes less than a minute — no sign-up needed.
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

      {/* Get in touch */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <h2 className="text-2xl font-bold text-brand-navy mb-3">Get in Touch</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          We love hearing from students, parents, and teachers. Whether you have feedback, suggestions, or just want to say hello:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@thepractiseground.in"
            className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@thepractiseground.in
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gray-100 text-brand-navy font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Contact Page &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
