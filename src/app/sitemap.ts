import type { MetadataRoute } from "next";
import { getAllPosts } from "@/data/blog-posts";

// Root sitemap: static pages + blog posts
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/colouring-books`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/for-parents`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/donate`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const posts = getAllPosts();
  for (const post of posts) {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishDate),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return routes;
}
