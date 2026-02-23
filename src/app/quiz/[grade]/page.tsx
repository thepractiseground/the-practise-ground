import Link from "next/link";
import { notFound } from "next/navigation";
import { GRADES, GRADE_INFO, getGradeWeeks } from "@/lib/quiz-data";
import { getPostsForGrade } from "@/data/blog-posts";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ grade: string }>;
}

export async function generateStaticParams() {
  return GRADES.map((g) => ({ grade: String(g) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { grade: gradeStr } = await params;
  const grade = parseInt(gradeStr);
  const weeks = getGradeWeeks(grade);
  const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);

  return {
    title: `Grade ${grade} English Quiz - ${totalQ}+ Free Questions`,
    description: `Free English practice quizzes for Grade ${grade} students. ${weeks.length} weekly quizzes with ${totalQ}+ questions covering grammar, vocabulary, comprehension and more.`,
    keywords: [
      `grade ${grade} english quiz`, `class ${grade} english questions`,
      `english practice grade ${grade}`, `CBSE english class ${grade}`,
      `english grammar quiz grade ${grade}`, `free english quiz class ${grade}`,
    ],
    alternates: { canonical: `https://www.thepractiseground.in/quiz/${grade}` },
  };
}

export default async function GradePage({ params }: Props) {
  const { grade: gradeStr } = await params;
  const grade = parseInt(gradeStr);

  if (!GRADES.includes(grade as typeof GRADES[number])) notFound();

  const weeks = getGradeWeeks(grade);
  const info = GRADE_INFO[grade];
  const totalQ = weeks.reduce((s, w) => s + w.questions.length, 0);

  // Group weeks by topic categories
  const topics = new Map<string, typeof weeks>();
  weeks.forEach((w) => {
    const cat = w.topic.split(/[–\-—:]/)[0].trim();
    if (!topics.has(cat)) topics.set(cat, []);
    topics.get(cat)!.push(w);
  });

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero */}
      <section className={`bg-gradient-to-r ${info.color} py-12 sm:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Grade {grade}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Grade {grade} English Quizzes
          </h1>
          <p className="text-white/90 text-lg mb-2">
            Ages {info.ageRange} &middot; {weeks.length} weekly quizzes &middot; {totalQ.toLocaleString()} questions
          </p>
          <p className="text-white/80">
            Select a week below to start practising. Each quiz has 25 multiple-choice questions.
          </p>
        </div>
      </section>

      {/* Week Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {weeks.map((w) => (
            <Link
              key={w.week}
              href={`/quiz/${grade}/${w.week}`}
              className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} text-white text-sm font-bold flex items-center justify-center`}>
                  {w.week}
                </span>
                <div>
                  <span className="text-xs text-gray-400">Week {w.week}</span>
                  <h3 className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-brand-orange transition-colors">
                    {w.topic || `English Practice`}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-gray-500">{w.questions.length} questions</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended Blog Posts */}
      {(() => {
        const blogPosts = getPostsForGrade(grade, "english");
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
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">
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
            About Grade {grade} English Practice
          </h2>
          <p className="text-gray-600 mb-4">
            Our Grade {grade} English quizzes are designed for students aged {info.ageRange}. Each week features 25 carefully crafted multiple-choice questions that cover essential English topics including grammar, vocabulary, sentence structure, reading comprehension, and writing skills.
          </p>
          <p className="text-gray-600 mb-4">
            With {weeks.length} weeks of content and {totalQ.toLocaleString()}+ questions, students get a full year of English practice. All quizzes are free and require no sign-up — just click and start learning.
          </p>
          <p className="text-gray-600">
            These quizzes are aligned with school curricula and are useful for students following CBSE, ICSE, and state board syllabi. Regular practice helps improve grammar accuracy, expand vocabulary, and build confidence in English.
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
                name: `How many English quiz questions are available for Grade ${grade}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `There are ${totalQ} English quiz questions available for Grade ${grade}, spread across ${weeks.length} weekly quizzes.`,
                },
              },
              {
                "@type": "Question",
                name: `Do I need to sign up for Grade ${grade} English quizzes?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No sign-up is required. All quizzes are completely free and open to everyone.",
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
              { "@type": "ListItem", position: 2, name: `Grade ${grade} English`, item: `https://www.thepractiseground.in/quiz/${grade}` },
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
            name: `Grade ${grade} English Quizzes`,
            description: `Free English practice quizzes for Grade ${grade} students. ${weeks.length} weekly quizzes with ${totalQ}+ questions.`,
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
