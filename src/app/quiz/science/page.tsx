import Link from "next/link";
import type { Metadata } from "next";
import { getPostsForGrade } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Free Science Quizzes for Grades 5-10 | Physics, Chemistry, Biology | The Practise Ground",
  description:
    "Free Science quizzes covering Physics, Chemistry, and Biology for Grades 5-10. Aligned with CBSE, ICSE, Cambridge IGCSE, and IB curricula. Coming soon!",
  keywords: [
    "science quiz",
    "physics quiz",
    "chemistry quiz",
    "biology quiz",
    "CBSE science",
    "ICSE science",
    "free science practice",
    "Grade 5-10 science",
  ],
  openGraph: {
    title: "Free Science Quizzes for Grades 5-10 | The Practise Ground",
    description:
      "Free Science quizzes covering Physics, Chemistry, and Biology for students worldwide. Coming soon!",
    url: "https://www.thepractiseground.in/quiz/science",
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.thepractiseground.in/quiz/science",
  },
};

const subjects = [
  {
    name: "Physics",
    icon: "⚡",
    color: "from-indigo-500 to-blue-600",
    topics: ["Newton's Laws", "Electricity & Circuits", "Light & Optics", "Sound Waves", "Motion & Forces"],
  },
  {
    name: "Chemistry",
    icon: "🧪",
    color: "from-amber-500 to-orange-600",
    topics: ["Periodic Table", "Chemical Reactions", "Acids & Bases", "Atomic Structure", "Carbon Compounds"],
  },
  {
    name: "Biology",
    icon: "🧬",
    color: "from-lime-500 to-green-600",
    topics: ["Cell Structure", "Photosynthesis", "Human Body Systems", "Genetics & Evolution", "Ecology"],
  },
];

export default function ScienceLandingPage() {
  // Get science blog posts for recommended reading
  const sciencePosts = getPostsForGrade(8, "science");

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Coming Soon
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Science Quizzes
          </h1>
          <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto mb-8">
            Physics, Chemistry &amp; Biology practice for Grades 5-10. Aligned with CBSE, ICSE, Cambridge IGCSE, and IB curricula.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog?category=Physics"
              className="bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors"
            >
              Read Science Blog Posts
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Get Notified When Live
            </Link>
          </div>
        </div>
      </section>

      {/* Subject Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${subject.color} px-6 py-5 text-white`}>
                <span className="text-3xl mb-2 block">{subject.icon}</span>
                <h2 className="text-xl font-bold">{subject.name}</h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-semibold">Topics include</p>
                <ul className="space-y-2">
                  {subject.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 bg-purple-50 text-purple-700 text-center py-3 rounded-xl text-sm font-semibold">
                  Quizzes Coming Soon
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-10">
          What to Expect
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🎯", title: "Curriculum-Aligned", desc: "Questions mapped to CBSE, ICSE, Cambridge IGCSE, and IB syllabi" },
            { icon: "📊", title: "Grade 5-10", desc: "Integrated Science for Grades 5-7, separate Physics/Chemistry/Biology for Grades 8-10" },
            { icon: "🔬", title: "Exam-Focused", desc: "Practice questions based on actual board exam patterns and past papers" },
            { icon: "🆓", title: "100% Free", desc: "No sign-up, no payment — just open and start practising" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-brand-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meanwhile, Read Our Science Blog */}
      {sciencePosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3">
            Meanwhile, Start Learning
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
            While we prepare Science quizzes, explore our detailed Science blog posts covering key topics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sciencePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 group"
              >
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog?category=Physics"
              className="text-brand-orange font-semibold hover:underline"
            >
              View All Science Posts &rarr;
            </Link>
          </div>
        </section>
      )}

      {/* Existing Quizzes CTA */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Try Our English &amp; Maths Quizzes Now
          </h2>
          <p className="text-blue-200 mb-8">
            15,600+ questions across English and Maths, completely free. No sign-up required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz/8"
              className="bg-brand-orange text-white font-bold px-8 py-3 rounded-xl hover:opacity-85 transition-all"
            >
              English Quizzes
            </Link>
            <Link
              href="/quiz/maths/8"
              className="bg-emerald-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-emerald-600 transition-colors"
            >
              Maths Quizzes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
