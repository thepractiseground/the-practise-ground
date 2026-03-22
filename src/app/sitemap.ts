import type { MetadataRoute } from "next";
import { getAllPosts } from "@/data/blog-posts";
import { funQuizzes } from "@/data/fun-quizzes";
import { CEFR_LEVELS, getCefrLevelWeeks } from "@/lib/cefr-quiz-data";
import { SPANISH_CEFR_LEVELS, getSpanishLevelWeeks } from "@/lib/cefr-spanish-quiz-data";
import { FRENCH_CEFR_LEVELS, getFrenchLevelWeeks } from "@/lib/cefr-french-quiz-data";
import { GERMAN_CEFR_LEVELS, getGermanLevelWeeks } from "@/lib/cefr-german-quiz-data";

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
    { url: `${baseUrl}/summer-challenge`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/donate`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/posters-printables`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/fun`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
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

  for (const quiz of funQuizzes) {
    routes.push({
      url: `${baseUrl}/fun/${quiz.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // CEFR English level quizzes
  routes.push({
    url: `${baseUrl}/quiz/english`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  });
  for (const level of CEFR_LEVELS) {
    routes.push({
      url: `${baseUrl}/quiz/english/${level}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
    const weeks = getCefrLevelWeeks(level);
    for (const w of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/english/${level}/${w.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  // CEFR Spanish level quizzes
  const langConfigs: { slug: string; levels: readonly string[]; getWeeks: (l: string) => { week: number }[] }[] = [
    { slug: "spanish", levels: SPANISH_CEFR_LEVELS, getWeeks: getSpanishLevelWeeks },
    { slug: "french", levels: FRENCH_CEFR_LEVELS, getWeeks: getFrenchLevelWeeks },
    { slug: "german", levels: GERMAN_CEFR_LEVELS, getWeeks: getGermanLevelWeeks },
  ];

  for (const lang of langConfigs) {
    routes.push({
      url: `${baseUrl}/quiz/${lang.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
    for (const level of lang.levels) {
      routes.push({
        url: `${baseUrl}/quiz/${lang.slug}/${level}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
      const weeks = lang.getWeeks(level);
      for (const w of weeks) {
        routes.push({
          url: `${baseUrl}/quiz/${lang.slug}/${level}/${w.week}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  return routes;
}
