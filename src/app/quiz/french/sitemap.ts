import type { MetadataRoute } from "next";
import { FRENCH_CEFR_LEVELS, getFrenchLevelWeeks } from "@/lib/cefr-french-quiz-data";

// CEFR French sitemap: /quiz/french/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [];

  routes.push({
    url: `${baseUrl}/quiz/french`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  for (const level of FRENCH_CEFR_LEVELS) {
    routes.push({
      url: `${baseUrl}/quiz/french/${level}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    const weeks = getFrenchLevelWeeks(level);
    for (const w of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/french/${level}/${w.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
