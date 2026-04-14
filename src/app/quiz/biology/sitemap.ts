import type { MetadataRoute } from "next";
import { BIOLOGY_GRADES, getBiologyGradeWeeks } from "@/lib/biology-quiz-data";

// Biology quiz sitemap: /quiz/biology/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/quiz/biology`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const grade of BIOLOGY_GRADES) {
    routes.push({
      url: `${baseUrl}/quiz/biology/${grade}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    const weeks = getBiologyGradeWeeks(grade);
    for (const week of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/biology/${grade}/${week.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return routes;
}
