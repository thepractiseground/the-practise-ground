import { getPostBySlug, getAllPosts } from "@/data/blog-posts";
import { renderBlogOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";

export const alt = "Blog post on The Practise Ground";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return await renderBlogOG({
      title: "Blog | The Practise Ground",
      category: "Learning",
      readTime: "",
    });
  }

  return await renderBlogOG({
    title: post.title,
    category: post.category,
    readTime: post.readTime,
  });
}
