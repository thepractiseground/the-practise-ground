import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // OG/Twitter share images are no longer blocked here: they are served with
      // X-Robots-Tag: noindex (see next.config.ts) so Google can fetch them, see they
      // are images, and drop them from the page index. Blocking them caused the
      // "Indexed, though blocked by robots.txt" warnings and can break link previews.
      disallow: [
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
      "https://www.thepractiseground.in/third-language/sitemap.xml",
    ],
  };
}
