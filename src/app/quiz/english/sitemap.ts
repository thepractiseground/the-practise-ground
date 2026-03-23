import type { MetadataRoute } from "next";
import { CEFR_LEVELS, getCefrLevelWeeks } from "@/lib/cefr-quiz-data";

// CEFR English sitemap: /quiz/english/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [];

  // Hub page — highest priority
  routes.push({
    url: `${baseUrl}/quiz/english`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  for (const level of CEFR_LEVELS) {
    // Level page
    routes.push({
      url: `${baseUrl}/quiz/english/${level}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // Individual quiz pages
    const weeks = getCefrLevelWeeks(level);
    for (const w of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/english/${level}/${w.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
