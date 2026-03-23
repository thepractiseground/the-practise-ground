import type { MetadataRoute } from "next";
import { SPANISH_CEFR_LEVELS, getSpanishLevelWeeks } from "@/lib/cefr-spanish-quiz-data";

// CEFR Spanish sitemap: /quiz/spanish/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [];

  routes.push({
    url: `${baseUrl}/quiz/spanish`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  for (const level of SPANISH_CEFR_LEVELS) {
    routes.push({
      url: `${baseUrl}/quiz/spanish/${level}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    const weeks = getSpanishLevelWeeks(level);
    for (const w of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/spanish/${level}/${w.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
