import type { MetadataRoute } from "next";
import { CHEMISTRY_GRADES, getChemistryGradeWeeks } from "@/lib/chemistry-quiz-data";

// Chemistry quiz sitemap: /quiz/chemistry/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/quiz/chemistry`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const grade of CHEMISTRY_GRADES) {
    routes.push({
      url: `${baseUrl}/quiz/chemistry/${grade}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    const weeks = getChemistryGradeWeeks(grade);
    for (const week of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/chemistry/${grade}/${week.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return routes;
}
