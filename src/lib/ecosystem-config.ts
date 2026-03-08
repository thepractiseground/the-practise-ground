export interface EcosystemProject {
  id: string;
  name: string;
  shortName: string;
  url: string;
  icon: string;
  tagline: string;
  description: string;
  ctaLabel: string;
  stripBg: string;
  stripAccent: string;
  ctaBg: string;
  ctaHoverBg: string;
}

export const ecosystem: Record<string, EcosystemProject> = {
  tpg: {
    id: "tpg",
    name: "The Practise Ground",
    shortName: "TPG",
    url: "https://www.thepractiseground.in",
    icon: "📚",
    tagline: "Subject learning with quiz practice for students — The Practise Ground",
    description: "Grammar, math & science — interactive quizzes, practice exercises, and learning resources for classrooms and homeschool.",
    ctaLabel: "Visit The Practise Ground →",
    stripBg: "bg-gray-900",
    stripAccent: "text-amber-400",
    ctaBg: "bg-amber-500",
    ctaHoverBg: "hover:bg-amber-600",
  },
  aitt: {
    id: "aitt",
    name: "AI Think Tank",
    shortName: "AITT",
    url: "https://www.aithinktank.space",
    icon: "🧠",
    tagline: "Free AI education for kids, teens & corporates — AI Think Tank",
    description: "Quizzes, interactive games, infographics, and practical AI guides — making AI accessible for everyone.",
    ctaLabel: "Explore AI Think Tank →",
    stripBg: "bg-gray-900",
    stripAccent: "text-teal-400",
    ctaBg: "bg-teal-600",
    ctaHoverBg: "hover:bg-teal-700",
  },
  ct: {
    id: "ct",
    name: "CareerTalks",
    shortName: "CT",
    url: "https://www.careertalks.space",
    icon: "🎯",
    tagline: "20 career paths explored for the next generation — CareerTalks",
    description: "Interactive career guides, industry insights, and skill maps — helping teens and young adults find their path.",
    ctaLabel: "Discover CareerTalks →",
    stripBg: "bg-indigo-950",
    stripAccent: "text-violet-400",
    ctaBg: "bg-violet-600",
    ctaHoverBg: "hover:bg-violet-700",
  },
};

// Which projects to promote on each site
export const crossPromoTargets: Record<string, string[]> = {
  aitt: ["tpg", "ct"],   // On AITT, promote TPG and CT
  tpg: ["aitt", "ct"],   // On TPG, promote AITT and CT
  ct: ["tpg", "aitt"],   // On CT, promote TPG and AITT
};

// Current site ID — change this per project
export const CURRENT_SITE = "tpg";

export function getPromoTargets(): EcosystemProject[] {
  const targets = crossPromoTargets[CURRENT_SITE] || [];
  return targets.map((id) => ecosystem[id]);
}

/**
 * Build a UTM-tagged URL for cross-promo tracking.
 * @param baseUrl - The destination project URL
 * @param content - The banner type: "strip" or "floating_bar"
 */
export function buildUtmUrl(baseUrl: string, content: "strip" | "floating_bar"): string {
  const params = new URLSearchParams({
    utm_source: CURRENT_SITE,
    utm_medium: "banner",
    utm_campaign: "cross_promo",
    utm_content: content,
  });
  return `${baseUrl}?${params.toString()}`;
}
