/**
 * A/B Test Theme Configuration
 *
 * 4 color palettes are randomly assigned to visitors via cookie.
 * CSS custom properties are overridden at runtime so all Tailwind
 * `text-brand-*` / `bg-brand-*` classes automatically pick up the new colors.
 */

export type ThemeId = "ocean-coral" | "indigo-lime" | "teal-amber" | "royal-purple";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  description: string;
  colors: {
    "brand-orange": string;   // Primary CTA / action color
    "brand-navy": string;     // Headings / dark text
    "brand-teal": string;     // Accent
    "brand-pink": string;     // Secondary CTA
    "brand-yellow": string;   // Highlight
    "hero-from": string;      // Hero gradient start
    "hero-via": string;       // Hero gradient middle
    "hero-to": string;        // Hero gradient end
    "cta-hover": string;      // CTA button hover state
    "footer-bg": string;      // Footer background
  };
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  "ocean-coral": {
    id: "ocean-coral",
    name: "Ocean + Coral",
    description: "Premium, warm, globally appealing",
    colors: {
      "brand-orange": "#E86833",
      "brand-navy": "#263A70",
      "brand-teal": "#1A8A7D",
      "brand-pink": "#D64187",
      "brand-yellow": "#F5A623",
      "hero-from": "#FAF5FF",      // purple-50
      "hero-via": "#FDF2F8",       // pink-50
      "hero-to": "#ECFEFF",        // cyan-50
      "cta-hover": "#D4551F",      // darker coral
      "footer-bg": "#111827",      // gray-900
    },
  },
  "indigo-lime": {
    id: "indigo-lime",
    name: "Indigo + Lime",
    description: "Energetic, techy, gamified",
    colors: {
      "brand-orange": "#65A30D",   // lime-600
      "brand-navy": "#3730A3",     // indigo-800
      "brand-teal": "#0891B2",     // cyan-600
      "brand-pink": "#DB2777",     // pink-600
      "brand-yellow": "#CA8A04",   // yellow-600
      "hero-from": "#EEF2FF",     // indigo-50
      "hero-via": "#F5F3FF",      // violet-50
      "hero-to": "#ECFEFF",       // cyan-50
      "cta-hover": "#4D7C0F",     // lime-700
      "footer-bg": "#1E1B4B",     // indigo-950
    },
  },
  "teal-amber": {
    id: "teal-amber",
    name: "Teal + Amber",
    description: "Balanced, educational, fresh",
    colors: {
      "brand-orange": "#D97706",   // amber-600
      "brand-navy": "#134E4A",     // teal-900
      "brand-teal": "#0D9488",     // teal-500
      "brand-pink": "#7C3AED",     // violet-600
      "brand-yellow": "#EA580C",   // orange-600
      "hero-from": "#F0FDFA",     // teal-50
      "hero-via": "#ECFDF5",      // emerald-50
      "hero-to": "#FFFBEB",       // amber-50
      "cta-hover": "#B45309",     // amber-700
      "footer-bg": "#042F2E",     // teal-950
    },
  },
  "royal-purple": {
    id: "royal-purple",
    name: "Royal Purple",
    description: "Sophisticated, modern, premium",
    colors: {
      "brand-orange": "#9333EA",   // purple-600
      "brand-navy": "#1E293B",     // slate-800
      "brand-teal": "#06B6D4",     // cyan-500
      "brand-pink": "#EC4899",     // pink-500
      "brand-yellow": "#EAB308",   // yellow-500
      "hero-from": "#F8FAFC",     // slate-50
      "hero-via": "#FAF5FF",      // purple-50
      "hero-to": "#ECFEFF",       // cyan-50
      "cta-hover": "#7E22CE",     // purple-700
      "footer-bg": "#0F172A",     // slate-900
    },
  },
};

export const THEME_IDS = Object.keys(THEMES) as ThemeId[];

export const COOKIE_NAME = "tpg_theme";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 days

/**
 * Pick a random theme for a new visitor
 */
export function getRandomTheme(): ThemeId {
  const idx = Math.floor(Math.random() * THEME_IDS.length);
  return THEME_IDS[idx];
}
