import type { MetadataRoute } from "next";
import { MATHS_GRADES, getMathsGradeWeeks } from "@/lib/maths-quiz-data";

// Maths quiz sitemap: /quiz/maths/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/quiz/maths`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const grade of MATHS_GRADES) {
    routes.push({
      url: `${baseUrl}/quiz/maths/${grade}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    const weeks = getMathsGradeWeeks(grade);
    for (const week of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/maths/${grade}/${week.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return routes;
}
