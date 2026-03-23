import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://www.thepractiseground.in/sitemap.xml",
      "https://www.thepractiseground.in/quiz/sitemap.xml",
      "https://www.thepractiseground.in/quiz/maths/sitemap.xml",
      "https://www.thepractiseground.in/quiz/science/sitemap.xml",
      "https://www.thepractiseground.in/quiz/english/sitemap.xml",
      "https://www.thepractiseground.in/quiz/spanish/sitemap.xml",
      "https://www.thepractiseground.in/quiz/french/sitemap.xml",
      "https://www.thepractiseground.in/quiz/german/sitemap.xml",
    ],
  };
}
