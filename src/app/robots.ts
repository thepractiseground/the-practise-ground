import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/*/opengraph-image",   // Next.js auto-generated OG image routes
        "/*/twitter-image",      // Next.js auto-generated Twitter image routes
        "/default-funnel-step-*", // Legacy systeme.io thank-you pages
      ],
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
