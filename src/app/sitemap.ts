import type { MetadataRoute } from "next";
import { GRADES, getGradeWeeks } from "@/lib/quiz-data";
import { MATHS_GRADES, getMathsGradeWeeks } from "@/lib/maths-quiz-data";
import { getAllPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/colouring-books`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Grade hub pages
  for (const grade of GRADES) {
    routes.push({
      url: `${baseUrl}/quiz/${grade}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Individual quiz pages
    const weeks = getGradeWeeks(grade);
    for (const week of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/${grade}/${week.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // Maths landing page
  routes.push({
    url: `${baseUrl}/quiz/maths`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  // Maths grade hub pages
  for (const grade of MATHS_GRADES) {
    routes.push({
      url: `${baseUrl}/quiz/maths/${grade}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Individual maths quiz pages
    const mathsWeeks = getMathsGradeWeeks(grade);
    for (const week of mathsWeeks) {
      routes.push({
        url: `${baseUrl}/quiz/maths/${grade}/${week.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // Blog posts
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
