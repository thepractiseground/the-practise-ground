import type { MetadataRoute } from "next";
import { GERMAN_CEFR_LEVELS, getGermanLevelWeeks } from "@/lib/cefr-german-quiz-data";

// CEFR German sitemap: /quiz/german/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [];

  routes.push({
    url: `${baseUrl}/quiz/german`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  for (const level of GERMAN_CEFR_LEVELS) {
    routes.push({
      url: `${baseUrl}/quiz/german/${level}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    const weeks = getGermanLevelWeeks(level);
    for (const w of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/german/${level}/${w.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
