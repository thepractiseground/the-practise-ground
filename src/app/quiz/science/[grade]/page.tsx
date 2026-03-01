import Link from "next/link";
import { notFound } from "next/navigation";
import { SCIENCE_GRADES, SCIENCE_GRADE_INFO, getScienceGradeWeeks } from "@/lib/science-quiz-data";
import { getPostsForGrade } from "@/data/blog-posts";
import WhatsAppShareGrade from "@/components/WhatsAppShareGrade";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ grade: string }>;
}

export async function generateStaticParams() {
  return SCIENCE_GRADES.map((g) => ({ grade: String(g) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { grade: gradeStr } = await params;
  const grade = parseInt(gradeStr);
  const weeks = getScienceGradeWeeks(grade);
  const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);

  return {
    title: `Grade ${grade} Science Quiz - ${totalQ}+ Free Questions | The Practise Ground`,
    description: `Free Science practice quizzes for Grade ${grade} students. ${weeks.length} weekly quizzes with ${totalQ}+ questions covering ${SCIENCE_GRADE_INFO[grade]?.topics || "key science topics"}. Aligned with CBSE, ICSE, and international curricula.`,
    keywords: [
      `grade ${grade} science quiz`, `class ${grade} science questions`,
      `science practice grade ${grade}`, `CBSE science class ${grade}`,
      `science MCQ grade ${grade}`, `free science quiz class ${grade}`,
      `grade ${grade} physics chemistry biology`,
    ],
    alternates: { canonical: `https://www.thepractiseground.in/quiz/science/${grade}` },
  };
}

export default async function ScienceGradePage({ params }: Props) {
  const { grade: gradeStr } = await params;
  const grade = parseInt(gradeStr);

  if (!SCIENCE_GRADES.includes(grade as typeof SCIENCE_GRADES[number])) notFound();

  const weeks = getScienceGradeWeeks(grade);
  const info = SCIENCE_GRADE_INFO[grade];
  const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className={`bg-gradient-to-r ${info.color} py-12 sm:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/quiz/science" className="hover:text-white">Science</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Grade {grade}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Grade {grade} Science Quizzes
          </h1>
          <p className="text-white/90 text-lg mb-2">
            Ages {info.ageRange} &middot; {weeks.length} weekly quizzes &middot; {totalQ.toLocaleString()} questions
          </p>
          <p className="text-white/80 mb-5">
            Topics: {info.topics}
          </p>
          <WhatsAppShareGrade
            grade={grade}
            subject="Science"
            totalQuestions={totalQ}
            totalWeeks={weeks.length}
            url={`https://www.thepractiseground.in/quiz/science/${grade}`}
          />
        </div>
      </section>

      {/* Week Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {weeks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {weeks.map((w) => (
              <Link
                key={w.week}
                href={`/quiz/science/${grade}/${w.week}`}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} text-white text-sm font-bold flex items-center justify-center`}>
                    {w.week}
                  </span>
                  <div>
                    <span className="text-xs text-gray-400">Week {w.week}</span>
                    <h3 className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-purple-600 transition-colors">
                      {w.topic || "Science Practice"}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{w.questions.length} questions</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-brand-navy mb-3">Coming Soon!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              We are preparing Grade {grade} Science quizzes. Check back soon for weekly practice questions!
            </p>
            <Link href="/quiz/science" className="inline-block mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
              Browse Other Grades
            </Link>
          </div>
        )}
      </section>

      {/* Recommended Blog Posts */}
      {(() => {
        const blogPosts = getPostsForGrade(grade, "science");
        if (blogPosts.length === 0) return null;
        return (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Recommended Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 border border-gray-100 group"
                >
                  <span className="inline-block bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold text-brand-navy group-hover:text-purple-600 transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      {/* SEO Content */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            About Grade {grade} Science Practice
          </h2>
          <p className="text-gray-600 mb-4">
            Our Grade {grade} Science quizzes are designed for students aged {info.ageRange}. Each week features 25 multiple-choice questions covering essential science topics including {info.topics.toLowerCase()}.
          </p>
          <p className="text-gray-600 mb-4">
            With {weeks.length} weeks of content and {totalQ.toLocaleString()}+ questions, students get structured practice throughout the year. All quizzes are free and require no sign-up.
          </p>
          <p className="text-gray-600">
            These quizzes are aligned with the CBSE, ICSE, Cambridge IGCSE, and IB curricula and help students build a strong foundation in Physics, Chemistry, and Biology concepts.
          </p>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `How many Science quiz questions are available for Grade ${grade}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `There are ${totalQ} Science quiz questions available for Grade ${grade}, spread across ${weeks.length} weekly quizzes.`,
                },
              },
              {
                "@type": "Question",
                name: `What topics are covered in Grade ${grade} Science quizzes?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Grade ${grade} Science quizzes cover ${info.topics}.`,
                },
              },
            ],
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
              { "@type": "ListItem", position: 2, name: "Science", item: "https://www.thepractiseground.in/quiz/science" },
              { "@type": "ListItem", position: 3, name: `Grade ${grade} Science`, item: `https://www.thepractiseground.in/quiz/science/${grade}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: `Grade ${grade} Science Quizzes`,
            description: `Free Science practice quizzes for Grade ${grade} students. ${weeks.length} weekly quizzes with ${totalQ}+ questions covering ${info.topics.toLowerCase()}.`,
            provider: { "@type": "Organization", name: "The Practise Ground", url: "https://www.thepractiseground.in" },
            educationalLevel: `Grade ${grade}`,
            isAccessibleForFree: true,
            inLanguage: "en",
            numberOfCredits: 0,
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              courseWorkload: `${weeks.length} weeks`,
            },
          }),
        }}
      />
    </div>
  );
}
