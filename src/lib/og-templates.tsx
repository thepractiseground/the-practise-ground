import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// ─── Shared constants ───────────────────────────────────────────
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const BRAND_ORANGE = "#F97316";

// Subject config — now using JPEG for smaller base64
const SUBJECT_CONFIG: Record<string, { accent: string; emoji: string; bgFile: string }> = {
  english: { accent: BRAND_ORANGE, emoji: "📖", bgFile: "og-english.jpg" },
  maths: { accent: "#FBBF24", emoji: "🔢", bgFile: "og-maths.jpg" },
  science: { accent: "#34D399", emoji: "🔬", bgFile: "og-science.jpg" },
};

const BLOG_BG_MAP: Record<string, string> = {
  "English Grammar": "og-blog-grammar.jpg",
  "Writing Skills": "og-blog-writing.jpg",
  "Maths Concepts": "og-blog-maths.jpg",
  "Maths Tips": "og-blog-maths.jpg",
  "Problem Solving": "og-blog-maths.jpg",
  "Science Concepts": "og-blog-science.jpg",
  Physics: "og-blog-science.jpg",
  Chemistry: "og-blog-science.jpg",
  Biology: "og-blog-science.jpg",
  Science: "og-blog-science.jpg",
  "Study Tips": "og-blog-grammar.jpg",
  "Learning Tips": "og-blog-grammar.jpg",
  "Exam Prep": "og-blog-grammar.jpg",
  Grammar: "og-blog-grammar.jpg",
  Vocabulary: "og-blog-grammar.jpg",
  default: "og-blog-grammar.jpg",
};

// ─── Load + cache background images as base64 JPEG ─────────────
const bgCache = new Map<string, string>();

function getBgImage(filename: string): string {
  if (bgCache.has(filename)) return bgCache.get(filename)!;
  try {
    const imgPath = join(process.cwd(), "public/images/og", filename);
    const data = readFileSync(imgPath);
    const ext = filename.endsWith(".jpg") ? "jpeg" : "png";
    const b64 = `data:image/${ext};base64,${data.toString("base64")}`;
    bgCache.set(filename, b64);
    return b64;
  } catch {
    bgCache.set(filename, "");
    return "";
  }
}

// ─── Shared styles ─────────────────────────────────────────────
// Every div in Satori MUST have display:flex if it has >1 child.
// Using a flat structure: single outer div with backgroundImage,
// single child div for overlay+content.

const overlayStyle = (opacity: number) => ({
  display: "flex" as const,
  flexDirection: "column" as const,
  width: "100%",
  height: "100%",
  background: `rgba(0,0,0,${opacity})`,
});

const outerStyle = (bgSrc: string) => ({
  display: "flex" as const,
  width: "100%" as const,
  height: "100%" as const,
  backgroundImage: bgSrc ? `url(${bgSrc})` : undefined,
  backgroundSize: "1200px 630px",
  backgroundPosition: "center",
  fontFamily: "Arial, sans-serif",
});

// ─── Quiz OG Image ─────────────────────────────────────────────
export function renderQuizOG({
  grade, topic, weekNum, questionCount, subject,
}: {
  grade: number; topic: string; weekNum: number;
  questionCount: number; subject: "english" | "maths" | "science";
}): ImageResponse {
  const c = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG.english;
  const label = subject.charAt(0).toUpperCase() + subject.slice(1);
  const bgSrc = getBgImage(c.bgFile);

  return new ImageResponse(
    (
      <div style={outerStyle(bgSrc)}>
        <div style={overlayStyle(0.35)}>
          <div style={{ display: "flex", flexDirection: "column", padding: "50px 60px", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "2px solid rgba(255,255,255,0.35)", borderRadius: "8px", padding: "6px 14px", backgroundColor: "rgba(0,0,0,0.2)" }}>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "10px", letterSpacing: "2px" }}>THE</span>
                <span style={{ color: BRAND_ORANGE, fontSize: "22px", fontWeight: "bold", lineHeight: "1.1" }}>PRACTISE</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", letterSpacing: "4px" }}>GROUND</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "20px", padding: "8px 20px" }}>
                <span style={{ fontSize: "24px" }}>{c.emoji}</span>
                <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{label}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: "12px" }}>
              <span style={{ color: c.accent, fontSize: "20px", fontWeight: "bold", letterSpacing: "1px" }}>
                GRADE {grade} · WEEK {weekNum}
              </span>
              <span style={{ color: "white", fontSize: topic.length > 40 ? "34px" : "40px", fontWeight: "bold", lineHeight: "1.2", maxWidth: "700px", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                {topic}
              </span>
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "10px", padding: "10px 22px" }}>
                <span style={{ color: c.accent, fontSize: "24px", fontWeight: "bold" }}>{String(questionCount)}</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>Questions</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "10px", padding: "10px 22px" }}>
                <span style={{ color: c.accent, fontSize: "24px", fontWeight: "bold" }}>Free</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>No Sign-up</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "10px", padding: "10px 22px" }}>
                <span style={{ color: c.accent, fontSize: "24px", fontWeight: "bold" }}>MCQ</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>Format</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}

// ─── Grade Landing OG Image ────────────────────────────────────
export function renderGradeOG({
  grade, subject, weekCount,
}: {
  grade: number; subject: "english" | "maths" | "science"; weekCount: number;
}): ImageResponse {
  const c = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG.english;
  const label = subject.charAt(0).toUpperCase() + subject.slice(1);
  const bgSrc = getBgImage(c.bgFile);

  return new ImageResponse(
    (
      <div style={outerStyle(bgSrc)}>
        <div style={overlayStyle(0.4)}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "60px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "2px solid rgba(255,255,255,0.35)", borderRadius: "8px", padding: "8px 18px", backgroundColor: "rgba(0,0,0,0.2)" }}>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", letterSpacing: "2px" }}>THE</span>
              <span style={{ color: BRAND_ORANGE, fontSize: "28px", fontWeight: "bold", lineHeight: "1.1" }}>PRACTISE</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", letterSpacing: "4px" }}>GROUND</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "30px", marginBottom: "12px" }}>
              <span style={{ fontSize: "40px" }}>{c.emoji}</span>
              <span style={{ color: c.accent, fontSize: "24px", fontWeight: "bold", letterSpacing: "1px" }}>{label.toUpperCase()}</span>
            </div>
            <span style={{ color: "white", fontSize: "48px", fontWeight: "bold", marginBottom: "16px", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              Grade {grade} Quizzes
            </span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "22px", marginBottom: "30px" }}>
              {weekCount} Weekly Quizzes · Free · No Sign-up
            </span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>thepractiseground.in</span>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}

// ─── Blog OG Image ─────────────────────────────────────────────
export function renderBlogOG({
  title, category, readTime,
}: {
  title: string; category: string; readTime: string;
}): ImageResponse {
  const bgFile = BLOG_BG_MAP[category] || BLOG_BG_MAP.default;
  const bgSrc = getBgImage(bgFile);

  return new ImageResponse(
    (
      <div style={outerStyle(bgSrc)}>
        <div style={overlayStyle(0.35)}>
          <div style={{ display: "flex", flexDirection: "column", padding: "50px 60px", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "2px solid rgba(255,255,255,0.35)", borderRadius: "8px", padding: "6px 14px", backgroundColor: "rgba(0,0,0,0.2)" }}>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "10px", letterSpacing: "2px" }}>THE</span>
                <span style={{ color: BRAND_ORANGE, fontSize: "22px", fontWeight: "bold", lineHeight: "1.1" }}>PRACTISE</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", letterSpacing: "4px" }}>GROUND</span>
              </div>
              <div style={{ display: "flex", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "20px", padding: "8px 20px" }}>
                <span style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>{category}</span>
              </div>
            </div>
            <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
              <span style={{ color: "white", fontSize: title.length > 60 ? "32px" : title.length > 40 ? "38px" : "44px", fontWeight: "bold", lineHeight: "1.25", maxWidth: "700px", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                {title}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ display: "flex", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "8px", padding: "8px 16px" }}>
                <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px" }}>{readTime}</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>thepractiseground.in/blog</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}

// ─── Fun Quiz OG Image ─────────────────────────────────────────
export function renderFunQuizOG({
  title, category, emoji, questionCount,
}: {
  title: string; category: string; emoji: string; questionCount: number;
}): ImageResponse {
  const bgSrc = getBgImage("og-fun.jpg");

  return new ImageResponse(
    (
      <div style={outerStyle(bgSrc)}>
        <div style={overlayStyle(0.3)}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "60px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "2px solid rgba(255,255,255,0.35)", borderRadius: "8px", padding: "6px 14px", backgroundColor: "rgba(0,0,0,0.2)" }}>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "10px", letterSpacing: "2px" }}>THE</span>
              <span style={{ color: BRAND_ORANGE, fontSize: "22px", fontWeight: "bold", lineHeight: "1.1" }}>PRACTISE</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", letterSpacing: "4px" }}>GROUND</span>
            </div>
            <span style={{ fontSize: "72px", marginTop: "24px", marginBottom: "8px" }}>{emoji}</span>
            <span style={{ color: "white", fontSize: title.length > 30 ? "36px" : "42px", fontWeight: "bold", textAlign: "center", lineHeight: "1.2", marginBottom: "12px", maxWidth: "800px", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              {title}
            </span>
            <div style={{ display: "flex", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "20px", padding: "8px 20px", marginBottom: "20px" }}>
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px" }}>{category}</span>
            </div>
            <div style={{ display: "flex", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "10px", padding: "10px 22px" }}>
                <span style={{ color: "white", fontSize: "22px", fontWeight: "bold" }}>{String(questionCount)}</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>Questions</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "10px", padding: "10px 22px" }}>
                <span style={{ color: "white", fontSize: "22px", fontWeight: "bold" }}>Fun</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>Quiz</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "10px", padding: "10px 22px" }}>
                <span style={{ color: "white", fontSize: "22px", fontWeight: "bold" }}>Free</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>Play Now</span>
              </div>
            </div>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", marginTop: "20px" }}>thepractiseground.in/fun</span>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
