import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, getPostsByCategory } from "@/data/blog-posts";
import { markdownToHtml } from "@/lib/markdown";

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
  };
}

const categoryColors: Record<string, { bg: string; badge: string }> = {
  Grammar: { bg: "bg-blue-100", badge: "bg-blue-500" },
  "Exam Prep": { bg: "bg-orange-100", badge: "bg-brand-orange" },
  "Study Tips": { bg: "bg-teal-100", badge: "bg-brand-teal" },
  Vocabulary: { bg: "bg-pink-100", badge: "bg-brand-pink" },
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
  const { html: contentHtml } = markdownToHtml(post.content);
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
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 min-h-screen">
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
      <section className="bg-gradient-to-r from-brand-navy to-blue-800 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
          <div className="flex flex-wrap gap-6 text-white/80 text-sm sm:text-base">
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
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <article className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-12">
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

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

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-navy to-brand-teal rounded-2xl p-8 sm:p-12 mb-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Practice?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Test your English skills with our interactive quizzes. Thousands of questions covering grammar, vocabulary, and reading comprehension.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz/5"
              className="bg-brand-orange text-brand-navy font-bold px-8 py-3 rounded-lg hover:bg-brand-yellow transition-colors inline-block"
            >
              Grade 5 Quiz
            </Link>
            <Link
              href="/quiz/10"
              className="bg-brand-pink text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
            >
              Grade 10 Quiz
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
            image: "https://www.thepractiseground.in/og-image.png",
            publisher: {
              "@type": "Organization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
            },
          }),
        }}
      />

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
