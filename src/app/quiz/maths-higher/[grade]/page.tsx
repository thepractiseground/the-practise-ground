import Link from "next/link";
import { notFound } from "next/navigation";
import { MATHS_HIGHER_GRADES, MATHS_HIGHER_GRADE_INFO, getMathsHigherGradeWeeks } from "@/lib/maths-higher-quiz-data";
import { getPostsForGrade } from "@/data/blog-posts";
import WhatsAppShareGrade from "@/components/WhatsAppShareGrade";
import HeroImage from "@/components/HeroImage";

import type { Metadata } from "next";

interface Props {
  params: Promise<{ grade: string }>;
}

export async function generateStaticParams() {
  return MATHS_HIGHER_GRADES.map((g) => ({ grade: String(g) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { grade: gradeStr } = await params;
  const grade = parseInt(gradeStr);
  const weeks = getMathsHigherGradeWeeks(grade);
  const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);

  return {
    title: `Grade ${grade} Maths Higher Quiz - ${totalQ}+ Free Questions`,
    description: `Free Maths Higher practice quizzes for Grade ${grade} students. ${weeks.length} weekly quizzes with ${totalQ}+ questions covering ${MATHS_HIGHER_GRADE_INFO[grade]?.topics || "key maths topics"}.`,
    keywords: [
      `grade ${grade} maths higher quiz`, `class ${grade} maths questions`,
      `maths higher practice grade ${grade}`, `CBSE maths class ${grade}`,
      `maths MCQ grade ${grade}`, `free maths quiz class ${grade}`,
    ],
    alternates: { canonical: `https://www.thepractiseground.in/quiz/maths-higher/${grade}` },
  };
}

export default async function MathsHigherGradePage({ params }: Props) {
  const { grade: gradeStr } = await params;
  const grade = parseInt(gradeStr);

  if (!MATHS_HIGHER_GRADES.includes(grade as typeof MATHS_HIGHER_GRADES[number])) notFound();

  const weeks = getMathsHigherGradeWeeks(grade);
  const info = MATHS_HIGHER_GRADE_INFO[grade];
  const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <HeroImage
          src="/images/og/og-maths.png"
          alt="Maths Higher quizzes illustration"
          overlay={0.6}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/quiz/maths-higher" className="hover:text-white">Maths Higher</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Grade {grade}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Grade {grade} Maths Higher Quizzes
          </h1>
          <p className="text-white/90 text-lg mb-2">
            Ages {info.ageRange} &middot; {weeks.length} weekly quizzes &middot; {totalQ.toLocaleString()} questions
          </p>
          <p className="text-white/80 mb-5">
            Topics: {info.topics}
          </p>
          <WhatsAppShareGrade
            grade={grade}
            subject="Maths Higher"
            totalQuestions={totalQ}
            totalWeeks={weeks.length}
            url={`https://www.thepractiseground.in/quiz/maths-higher/${grade}`}
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
                href={`/quiz/maths-higher/${grade}/${w.week}`}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} text-white text-sm font-bold flex items-center justify-center`}>
                    {w.week}
                  </span>
                  <div>
                    <span className="text-xs text-gray-400">Week {w.week}</span>
                    <h3 className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-emerald-600 transition-colors">
                      {w.topic || "Maths Higher Practice"}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{w.questions.length} questions</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-brand-navy mb-3">No Quizzes Available</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              We don&apos;t have Grade {grade} Maths Higher quizzes yet. Browse our available grades below!
            </p>
            <Link href="/quiz/maths-higher" className="inline-block mt-6 bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
              Browse Available Grades
            </Link>
          </div>
        )}
      </section>

      {/* Recommended Blog Posts */}
      {(() => {
        const blogPosts = getPostsForGrade(grade, "maths-higher");
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
                  <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold text-brand-navy group-hover:text-emerald-600 transition-colors mb-1">
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
            About Grade {grade} Maths Higher Practice
          </h2>
          <p className="text-gray-600 mb-4">
            Our Grade {grade} Maths Higher quizzes are designed for students aged {info.ageRange}. Each week features multiple-choice questions covering essential maths topics including {info.topics.toLowerCase()}.
          </p>
          <p className="text-gray-600 mb-4">
            With {weeks.length} weeks of content and {totalQ.toLocaleString()}+ questions, students get structured practice throughout the year. All quizzes are free and require no sign-up.
          </p>
          <p className="text-gray-600">
            These quizzes are aligned with the CBSE and ICSE curriculum and help students build problem-solving skills, improve accuracy, and prepare for board examinations.
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
                name: `How many Maths Higher quiz questions are available for Grade ${grade}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `There are ${totalQ} Maths Higher quiz questions available for Grade ${grade}, spread across ${weeks.length} weekly quizzes.`,
                },
              },
              {
                "@type": "Question",
                name: `What topics are covered in Grade ${grade} Maths Higher quizzes?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Grade ${grade} Maths Higher quizzes cover ${info.topics}.`,
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
              { "@type": "ListItem", position: 2, name: "Maths Higher", item: "https://www.thepractiseground.in/quiz/maths-higher" },
              { "@type": "ListItem", position: 3, name: `Grade ${grade} Maths Higher`, item: `https://www.thepractiseground.in/quiz/maths-higher/${grade}` },
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
            name: `Grade ${grade} Maths Higher Quizzes`,
            description: `Free Maths Higher practice quizzes for Grade ${grade} students. ${weeks.length} weekly quizzes with ${totalQ}+ questions covering ${info.topics.toLowerCase()}.`,
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
