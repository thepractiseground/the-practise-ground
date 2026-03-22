import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/data/blog-posts";
import HeroImage from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "Learning Blog: English, Maths & Science Tips | The Practise Ground",
  description:
    "Free learning blog with English grammar, Maths tips, and Science guides (Physics, Chemistry, Biology) for students in Grades 5-10.",
  keywords: [
    "english grammar tips",
    "maths study tips",
    "science study guide",
    "CBSE science help",
    "physics chemistry biology",
    "learning blog for students",
    "maths exam preparation",
    "Cambridge IGCSE tips",
    "IB maths and english",
    "grammar lessons",
    "algebra tips",
    "geometry guide",
  ],
  openGraph: {
    title: "Learning Blog: English, Maths & Science Tips | The Practise Ground",
    description:
      "Free learning blog with English grammar, Maths strategies, Science guides, and exam tips for students worldwide.",
    url: "https://www.thepractiseground.in/blog",
    siteName: "The Practise Ground",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.thepractiseground.in/blog",
  },
};

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
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const allPosts = getAllPosts();
  const allCategories = getAllCategories();
  const selectedCategory = category;

  const filteredPosts = selectedCategory
    ? allPosts.filter((post) => post.category.toLowerCase() === selectedCategory.toLowerCase())
    : allPosts;

  return (
    <div className="bg-theme-gradient min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <HeroImage
          src="/images/og/og-blog-grammar.png"
          alt="Learning blog illustration"
          overlay={0.6}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Learning Blog</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            English grammar tips, Maths strategies, and study guides to help you succeed — from Grade 5 to 10 and beyond
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/blog"
            className={`px-4 py-2.5 rounded-full font-semibold transition-all min-h-11 ${
              !selectedCategory
                ? "bg-brand-navy text-white"
                : "bg-white text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white"
            }`}
          >
            All Posts
          </Link>
          {allCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${cat.toLowerCase()}`}
              className={`px-4 py-2.5 rounded-full font-semibold transition-all min-h-11 ${
                selectedCategory === cat.toLowerCase()
                  ? "bg-brand-navy text-white"
                  : "bg-white text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 pb-20">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No posts found in this category.</p>
            <Link href="/blog" className="text-brand-orange hover:underline mt-4 inline-block">
              View all posts
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => {
              const colors =
                categoryColors[post.category] || {
                  bg: "bg-gray-100",
                  badge: "bg-gray-500",
                };
              return (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  {/* Featured Image or Category Badge Background */}
                  {post.featuredImage ? (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={`/images/blog/${post.featuredImage}`}
                        alt={post.featuredImageAlt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className={`h-2 ${colors.badge}`} />
                  )}

                  <div className="p-6 sm:p-8">
                    {/* Category Badge */}
                    <div className="flex gap-2 mb-4">
                      <span
                        className={`inline-block ${colors.badge} text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full`}
                      >
                        {post.category}
                      </span>
                      <span className="inline-block bg-gray-200 text-gray-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                        {post.grade}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5 pt-4 border-t border-gray-200">
                      <span className="flex items-center gap-1">
                        <span>📅</span>
                        {new Date(post.publishDate).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>⏱️</span>
                        {post.readTime}
                      </span>
                    </div>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-brand-orange font-bold hover:text-brand-navy transition-colors"
                    >
                      Read Article
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Learning Blog - The Practise Ground",
            description:
              "Free learning blog with English grammar, Maths strategies, and exam preparation guides for students worldwide.",
            url: "https://www.thepractiseground.in/blog",
            creator: {
              "@type": "Organization",
              name: "The Practise Ground",
              url: "https://www.thepractiseground.in",
            },
          }),
        }}
      />
    </div>
  );
}
