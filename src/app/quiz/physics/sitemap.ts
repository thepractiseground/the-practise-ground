import type { MetadataRoute } from "next";
import { PHYSICS_GRADES, getPhysicsGradeWeeks } from "@/lib/physics-quiz-data";

// Physics quiz sitemap: /quiz/physics/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/quiz/physics`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const grade of PHYSICS_GRADES) {
    routes.push({
      url: `${baseUrl}/quiz/physics/${grade}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    const weeks = getPhysicsGradeWeeks(grade);
    for (const week of weeks) {
      routes.push({
        url: `${baseUrl}/quiz/physics/${grade}/${week.week}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return routes;
}
