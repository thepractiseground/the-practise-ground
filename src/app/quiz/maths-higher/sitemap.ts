import type { MetadataRoute } from "next";
import { MATHS_HIGHER_GRADES, getMathsHigherGradeWeeks } from "@/lib/maths-higher-quiz-data";

// Maths Higher quiz sitemap: /quiz/maths-higher/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/quiz/maths-higher`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const grade of MATHS_HIGHER_GRADES) {
    routes.push({
      url: `${baseUrl}/quiz/maths-higher/${grade}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    const weeks = getMathsHigherGradeWeeks(grade);
    for (const week of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/maths-higher/${grade}/${week.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return routes;
}
