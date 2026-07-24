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
      "CBSE-aligned Hindi grammar (व्याकरण) practice for the three-language formula. Covers the core Class 6 syllabus from वर्णमाला to वाक्य rachना, one topic per week.",
    skills:
      "Alphabet (वर्णमाला), Noun (संज्ञा), Gender (लिंग), Number (वचन), Pronoun (सर्वनाम), Adjective (विशेषण), Verb (क्रिया), Tense (काल), Case (कारक), Prefix & Suffix (उपसर्ग-प्रत्यय), Synonyms & Antonyms (पर्यायवाची-विलोम), Punctuation & Sentence (विराम चिह्न)",
    targetAudience:
      "CBSE Class 6 students taking Hindi as a second or third language under the NEP three-language formula",
    classes: ["6"],
  },
  kannada: {
    name: "Kannada",
    native: "ಕನ್ನಡ",
    flag: "🇮🇳",
    color: "from-amber-400 to-red-500",
    bgColor: "bg-red-500",
    description:
      "CBSE-aligned Kannada grammar (ವ್ಯಾಕರಣ) practice for the three-language formula. Covers the core Class 6 syllabus from ವರ್ಣಮಾಲೆ to ಸಂಧಿ and ವಾಕ್ಯ, one topic per week.",
    skills:
      "Alphabet (ವರ್ಣಮಾಲೆ), Noun (ನಾಮಪದ), Gender (ಲಿಂಗ), Number (ವಚನ), Pronoun (ಸರ್ವನಾಮ), Adjective (ಗುಣವಾಚಕ), Verb (ಕ್ರಿಯಾಪದ), Tense (ಕಾಲ), Case (ವಿಭಕ್ತಿ), Sandhi (ಸಂಧಿ), Synonyms & Antonyms, Sentence & Punctuation",
    targetAudience:
      "CBSE Class 6 students taking Kannada as a second or third language under the NEP three-language formula",
    classes: ["6"],
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
