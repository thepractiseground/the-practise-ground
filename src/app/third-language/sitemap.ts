import type { MetadataRoute } from "next";
import {
  THIRD_LANGUAGES,
  getLangClasses,
  getClassWeeks,
  classSlug,
} from "@/lib/third-language-data";

// Third-language (CBSE R3) sitemap: /third-language/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thepractiseground.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [];

  routes.push({
    url: `${baseUrl}/third-language`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  for (const lang of THIRD_LANGUAGES) {
    routes.push({
      url: `${baseUrl}/third-language/${lang}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const cls of getLangClasses(lang)) {
      routes.push({
        url: `${baseUrl}/third-language/${lang}/${classSlug(cls)}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });

      for (const w of getClassWeeks(lang, cls)) {
        routes.push({
          url: `${baseUrl}/third-language/${lang}/${classSlug(cls)}/${w.week}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  }

  return routes;
}
