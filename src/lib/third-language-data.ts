import hindiData from "@/data/third-language-hindi.json";
import kannadaData from "@/data/third-language-kannada.json";
import type { CefrWeek } from "@/lib/cefr-quiz-data";

// Third-language (NEP / CBSE R3) quiz data. Same week/question shape as the
// CEFR quizzes; keyed by class number (e.g. "6") -> weeks[].
export type ClassData = Record<string, CefrWeek[]>;

export const THIRD_LANGUAGES = ["hindi", "kannada"] as const;
export type ThirdLanguage = (typeof THIRD_LANGUAGES)[number];

export const LANG_INFO: Record<string, {
  name: string; native: string; flag: string; color: string; bgColor: string;
  description: string; skills: string; targetAudience: string; classes: string[];
}> = {
  hindi: {
    name: "Hindi",
    native: "हिन्दी",
    flag: "🇮🇳",
    color: "from-orange-400 to-rose-500",
    bgColor: "bg-orange-500",
    description:
      "CBSE-aligned Hindi grammar (व्याकरण) & vocabulary practice for the three-language formula — Classes 6 to 10. From वर्णमाला and संधि to समास, रस and अलंकार, one topic per week.",
    skills:
      "Alphabet (वर्णमाला), Sandhi (संधि), Noun (संज्ञा), Gender/Number, Pronoun (सर्वनाम), Adjective (विशेषण), Verb (क्रिया), Tense (काल), Case (कारक), Samas (समास), Vachya (वाच्य), Ras (रस), Alankar (अलंकार), Prefix-Suffix, Synonyms & Antonyms, Idioms & Proverbs, and more",
    targetAudience:
      "CBSE Classes 6–10 students taking Hindi as a second or third language under the NEP three-language formula",
    classes: ["6", "7", "8", "9", "10"],
  },
  kannada: {
    name: "Kannada",
    native: "ಕನ್ನಡ",
    flag: "🇮🇳",
    color: "from-amber-400 to-red-500",
    bgColor: "bg-red-500",
    description:
      "CBSE-aligned Kannada grammar (ವ್ಯಾಕರಣ) & vocabulary practice for the three-language formula — Classes 6 to 10. From ವರ್ಣಮಾಲೆ and ಸಂಧಿ to ಸಮಾಸ, ಛಂದಸ್ಸು and ಅಲಂಕಾರ, one topic per week.",
    skills:
      "Alphabet (ವರ್ಣಮಾಲೆ), Sandhi (ಸಂಧಿ), Noun (ನಾಮಪದ), Gender/Number, Pronoun (ಸರ್ವನಾಮ), Adjective (ಗುಣವಾಚಕ), Verb (ಕ್ರಿಯಾಪದ), Tense (ಕಾಲ), Vibhakti (ವಿಭಕ್ತಿ), Samasa (ಸಮಾಸ), Alankara (ಅಲಂಕಾರ), Chhandas (ಛಂದಸ್ಸು), Kridanta-Taddhita, Synonyms & Antonyms, Idioms & Proverbs, and more",
    targetAudience:
      "CBSE Classes 6–10 students taking Kannada as a second or third language under the NEP three-language formula",
    classes: ["6", "7", "8", "9", "10"],
  },
};

const DATA: Record<string, ClassData> = {
  hindi: hindiData as ClassData,
  kannada: kannadaData as ClassData,
};

export function getLangClasses(lang: string): string[] {
  return LANG_INFO[lang.toLowerCase()]?.classes ?? [];
}

export function getClassWeeks(lang: string, cls: string): CefrWeek[] {
  return DATA[lang.toLowerCase()]?.[cls] ?? [];
}

export function getClassWeek(lang: string, cls: string, weekNum: number): CefrWeek | undefined {
  return getClassWeeks(lang, cls).find((w) => w.week === weekNum);
}

// URL segment helpers: class "6" <-> "class-6"
export function classSlug(cls: string): string {
  return `class-${cls}`;
}
export function parseClassSlug(slug: string): string {
  return slug.toLowerCase().replace(/^class-/, "");
}

export function getAllLangClassPairs(): { lang: string; cls: string }[] {
  const out: { lang: string; cls: string }[] = [];
  for (const lang of THIRD_LANGUAGES) {
    for (const cls of getLangClasses(lang)) out.push({ lang, cls });
  }
  return out;
}

export function getAllLangClassWeekTriples(): { lang: string; cls: string; week: number }[] {
  const out: { lang: string; cls: string; week: number }[] = [];
  for (const lang of THIRD_LANGUAGES) {
    for (const cls of getLangClasses(lang)) {
      for (const w of getClassWeeks(lang, cls)) out.push({ lang, cls, week: w.week });
    }
  }
  return out;
}
