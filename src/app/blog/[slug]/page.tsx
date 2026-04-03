import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, getPostsByCategory } from "@/data/blog-posts";
import { markdownToHtml } from "@/lib/markdown";
import WhatsAppShareBlog from "@/components/WhatsAppShareBlog";
import HeroImage from "@/components/HeroImage";
import ImageActions from "@/components/ImageActions";


interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://www.thepractiseground.in/blog/${post.slug}`,
      siteName: "The Practise Ground",
      locale: "en_IN",
      type: "article",
    },
    alternates: {
      canonical: `https://www.thepractiseground.in/blog/${post.slug}`,
    },
    other: {
      "article:published_time": post.publishDate,
      "article:modified_time": post.lastModified || post.publishDate,
      "article:section": post.category,
      "article:tag": post.keywords.join(", "),
    },
  };
}

const categoryColors: Record<string, { bg: string; badge: string }> = {
  Grammar: { bg: "bg-blue-100", badge: "bg-blue-500" },
  "Exam Prep": { bg: "bg-orange-100", badge: "bg-brand-orange" },
  "Study Tips": { bg: "bg-teal-100", badge: "bg-brand-teal" },
  Vocabulary: { bg: "bg-pink-100", badge: "bg-brand-pink" },
  "Maths Concepts": { bg: "bg-emerald-100", badge: "bg-emerald-600" },
  "Maths Tips": { bg: "bg-cyan-100", badge: "bg-cyan-600" },
  "Problem Solving": { bg: "bg-violet-100", badge: "bg-violet-600" },
  Physics: { bg: "bg-indigo-100", badge: "bg-indigo-600" },
  Chemistry: { bg: "bg-amber-100", badge: "bg-amber-600" },
  Biology: { bg: "bg-lime-100", badge: "bg-lime-600" },
  Science: { bg: "bg-purple-100", badge: "bg-purple-600" },
  "Fun & Learning": { bg: "bg-rose-100", badge: "bg-rose-500" },
};

const categoryHeroImage: Record<string, string> = {
  Grammar: "/images/og/og-blog-grammar.png",
  Vocabulary: "/images/og/og-blog-grammar.png",
  "Exam Prep": "/images/og/og-blog-grammar.png",
  "Study Tips": "/images/og/og-blog-grammar.png",
  "Writing Skills": "/images/og/og-blog-writing.png",
  "English Grammar": "/images/og/og-blog-grammar.png",
  "Maths Concepts": "/images/og/og-blog-maths.png",
  "Maths Tips": "/images/og/og-blog-maths.png",
  "Problem Solving": "/images/og/og-blog-maths.png",
  Physics: "/images/og/og-blog-science.png",
  Chemistry: "/images/og/og-blog-science.png",
  Biology: "/images/og/og-blog-science.png",
  Science: "/images/og/og-blog-science.png",
  "Science Concepts": "/images/og/og-blog-science.png",
  "Learning Tips": "/images/og/og-blog-grammar.png",
  "Fun & Learning": "/images/og/og-blog-grammar.png",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-brand-orange hover:underline font-bold">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Parse markdown content
  const { html: contentHtml, headings } = markdownToHtml(post.content);
  const colors =
    categoryColors[post.category] || {
      bg: "bg-gray-100",
      badge: "bg-gray-500",
    };

  // Get related posts from the same category
  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Get next and previous posts
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Breadcrumb Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="text-brand-orange hover:underline">
              Home
            </Link>
            <span>→</span>
            <Link href="/blog" className="text-brand-orange hover:underline">
              Blog
            </Link>
            <span>→</span>
            <span className="text-gray-800 font-medium">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <HeroImage
          src={categoryHeroImage[post.category] || "/images/og/og-blog-grammar.png"}
          alt={`${post.category} illustration`}
          overlay={0.65}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Category & Grade Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className={`${colors.badge} text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full`}>
              {post.category}
            </span>
            <span className="bg-white/20 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
              {post.grade}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <span>✍️</span>
              By {post.author}
            </span>
            <span className="flex items-center gap-2">
              <span>📅</span>
              {new Date(post.publishDate).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <span>⏱️</span>
              {post.readTime}
            </span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + " — Free learning resource\nhttps://www.thepractiseground.in/blog/" + post.slug)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.216l-.252-.149-3.054.801.801-3.054-.149-.252A8 8 0 1112 20z" />
              </svg>
              Share
            </a>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={`/images/blog/${post.featuredImage}`}
              alt={post.featuredImageAlt || post.title}
              width={1200}
              height={630}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <ImageActions
            imageSrc={`/images/blog/${post.featuredImage}`}
            imageAlt={post.featuredImageAlt || post.title}
            title={post.title}
            slug={post.slug}
          />
        </section>
      )}

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <article className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-12">
          {/* Table of Contents */}
          {headings.length >= 3 && (
            <nav className="mb-8 p-5 bg-gray-50 border border-gray-200 rounded-xl">
              <h2 className="text-sm font-bold text-brand-navy uppercase tracking-wide mb-3">In This Article</h2>
              <ul className="space-y-1.5">
                {headings.map((heading, index) => {
                  const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <li key={index}>
                      <a
                        href={`#${id}`}
                        className="text-sm text-gray-600 hover:text-brand-orange transition-colors"
                      >
                        {heading}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        {/* WhatsApp Share Section */}
        <WhatsAppShareBlog title={post.title} excerpt={post.excerpt} slug={post.slug} category={post.category} />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => {
                const relatedColors =
                  categoryColors[relatedPost.category] || {
                    bg: "bg-gray-100",
                    badge: "bg-gray-500",
                  };
                return (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                  >
                    <div className={`h-2 ${relatedColors.badge}`} />
                    <div className="p-6">
                      <span
                        className={`inline-block ${relatedColors.badge} text-white text-xs font-bold px-2 py-1 rounded mb-2`}
                      >
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Quizzes */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">Practice What You&apos;ve Learned</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(() => {
              const isMaths = ["Maths Concepts", "Maths Tips", "Problem Solving"].includes(post.category);
              const gradeMatch = post.grade.match(/\d+/g);
              const grades = gradeMatch ? gradeMatch.map(Number) : [5, 6, 7, 8, 9, 10];
              const displayGrades = grades.length >= 2
                ? Array.from({ length: grades[grades.length - 1] - grades[0] + 1 }, (_, i) => grades[0] + i)
                : grades;
              return displayGrades.slice(0, 6).map((g) => (
                <Link
                  key={g}
                  href={isMaths ? `/quiz/maths/${g}` : `/quiz/${g}`}
                  className={`${isMaths ? "bg-emerald-50 hover:bg-emerald-100 border-emerald-200" : "bg-blue-50 hover:bg-blue-100 border-blue-200"} border rounded-xl p-4 transition-colors group`}
                >
                  <div className={`text-sm font-semibold ${isMaths ? "text-emerald-700" : "text-blue-700"} mb-1`}>
                    Grade {g} {isMaths ? "Maths" : "English"}
                  </div>
                  <div className="text-xs text-gray-500">52 weeks of free quizzes →</div>
                </Link>
              ));
            })()}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-navy to-brand-teal rounded-2xl p-8 sm:p-12 mb-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Practice?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Test your skills with our free interactive quizzes. Over 23,400 questions covering English, Maths, Science and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz/5"
              className="bg-brand-orange text-brand-navy font-bold px-8 py-3 rounded-lg hover:bg-brand-yellow transition-colors inline-block"
            >
              English Quizzes
            </Link>
            <Link
              href="/quiz/maths"
              className="bg-emerald-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors inline-block"
            >
              Maths Quizzes
            </Link>
          </div>
        </section>

        {/* Previous/Next Navigation */}
        <nav className="flex flex-col sm:flex-row gap-4 justify-between">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="flex-1 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="text-xs text-gray-500 mb-2">← Previous Post</div>
              <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                {previousPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="flex-1 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group text-right"
            >
              <div className="text-xs text-gray-500 mb-2">Next Post →</div>
              <h3 className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                {nextPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </section>

      {/* Structured Data - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            datePublished: post.publishDate,
            dateModified: post.lastModified || post.publishDate,
            articleSection: post.category,
            wordCount: post.content.split(/\s+/).length,
            educationalLevel: post.grade,
            about: {
              "@type": "Thing",
              name: post.category,
            },
            image: post.featuredImage
              ? `https://www.thepractiseground.in/images/blog/${post.featuredImage}`
              : `https://www.thepractiseground.in/blog/${post.slug}/opengraph-image`,
            publisher: {
              "@type": "Organization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
            },
          }),
        }}
      />

      {/* Structured Data - FAQPage (auto-generated from Q:/A: content) */}
      {(() => {
        const faqRegex = /\*\*Q:\s*(.+?)\*\*\nA:\s*([\s\S]*?)(?=\n\n\*\*Q:|\n\n##|\n\n$|$)/g;
        const faqPairs: { question: string; answer: string }[] = [];
        let faqMatch;
        while ((faqMatch = faqRegex.exec(post.content)) !== null) {
          faqPairs.push({ question: faqMatch[1].trim(), answer: faqMatch[2].trim() });
        }
        if (faqPairs.length === 0) return null;
        return (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqPairs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        );
      })()}

      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.thepractiseground.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.thepractiseground.in/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://www.thepractiseground.in/blog/${post.slug}`,
              },
            ],
          }),
        }}
      />
    </div>
  );
}
