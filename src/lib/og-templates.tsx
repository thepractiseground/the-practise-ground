import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// ─── Shared constants ───────────────────────────────────────────
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Brand colors
const BRAND_ORANGE = "#F97316";

// Subject config
const SUBJECT_CONFIG: Record<string, { accent: string; emoji: string; bgFile: string }> = {
  english: { accent: BRAND_ORANGE, emoji: "📖", bgFile: "og-english.png" },
  maths: { accent: "#FBBF24", emoji: "🔢", bgFile: "og-maths.png" },
  science: { accent: "#34D399", emoji: "🔬", bgFile: "og-science.png" },
};

// Blog category → background file mapping
const BLOG_BG_MAP: Record<string, string> = {
  "English Grammar": "og-blog-grammar.png",
  "Writing Skills": "og-blog-writing.png",
  "Maths Concepts": "og-blog-maths.png",
  "Maths Tips": "og-blog-maths.png",
  "Problem Solving": "og-blog-maths.png",
  "Science Concepts": "og-blog-science.png",
  Physics: "og-blog-science.png",
  Chemistry: "og-blog-science.png",
  Biology: "og-blog-science.png",
  Science: "og-blog-science.png",
  "Study Tips": "og-blog-grammar.png",
  "Learning Tips": "og-blog-grammar.png",
  "Exam Prep": "og-blog-grammar.png",
  Grammar: "og-blog-grammar.png",
  Vocabulary: "og-blog-grammar.png",
  default: "og-blog-grammar.png",
};

// ─── Load background image as base64 ───────────────────────────
async function loadBgImage(filename: string): Promise<string> {
  try {
    const imgPath = join(process.cwd(), "public/images/og", filename);
    const data = await readFile(imgPath);
    return `data:image/png;base64,${data.toString("base64")}`;
  } catch {
    // Fallback: return empty string (will show gradient fallback)
    return "";
  }
}

// ─── Background wrapper with overlay ───────────────────────────
function BgWithOverlay({
  bgSrc,
  overlayOpacity = 0.4,
  children,
}: {
  bgSrc: string;
  overlayOpacity?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Background image */}
      {bgSrc && (
        <img
          src={bgSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
      {/* Dark overlay for text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `rgba(0,0,0,${overlayOpacity})`,
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Shared TPG Logo Block ─────────────────────────────────────
function TPGLogo({ small = false }: { small?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid rgba(255,255,255,0.35)",
        borderRadius: "8px",
        padding: small ? "6px 14px" : "8px 18px",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: small ? "10px" : "12px", letterSpacing: "2px" }}>THE</span>
      <span style={{ color: BRAND_ORANGE, fontSize: small ? "22px" : "28px", fontWeight: "bold", lineHeight: "1.1" }}>PRACTISE</span>
      <span style={{ color: "rgba(255,255,255,0.7)", fontSize: small ? "11px" : "13px", letterSpacing: "4px" }}>GROUND</span>
    </div>
  );
}

// ─── Quiz OG Image ─────────────────────────────────────────────
export async function renderQuizOG({
  grade,
  topic,
  weekNum,
  questionCount,
  subject,
}: {
  grade: number;
  topic: string;
  weekNum: number;
  questionCount: number;
  subject: "english" | "maths" | "science";
}): Promise<ImageResponse> {
  const config = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG.english;
  const subjectLabel = subject.charAt(0).toUpperCase() + subject.slice(1);
  const bgSrc = await loadBgImage(config.bgFile);

  return new ImageResponse(
    (
      <BgWithOverlay bgSrc={bgSrc} overlayOpacity={0.35}>
        <div style={{ display: "flex", flexDirection: "column", padding: "50px 60px", height: "100%" }}>
          {/* Top row: Logo + Subject badge */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <TPGLogo small />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: "20px",
                padding: "8px 20px",
              }}
            >
              <span style={{ fontSize: "24px" }}>{config.emoji}</span>
              <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>{subjectLabel}</span>
            </div>
          </div>

          {/* Center content */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: "12px" }}>
            <div style={{ color: config.accent, fontSize: "20px", fontWeight: "bold", letterSpacing: "1px" }}>
              GRADE {grade} · WEEK {weekNum}
            </div>
            <div
              style={{
                color: "white",
                fontSize: topic.length > 40 ? "34px" : "40px",
                fontWeight: "bold",
                lineHeight: "1.2",
                maxWidth: "700px",
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              {topic}
            </div>
          </div>

          {/* Bottom stats */}
          <div style={{ display: "flex", gap: "30px" }}>
            {[
              { num: String(questionCount), label: "Questions" },
              { num: "Free", label: "No Sign-up" },
              { num: "MCQ", label: "Format" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "10px 22px",
                }}
              >
                <span style={{ color: config.accent, fontSize: "24px", fontWeight: "bold" }}>{stat.num}</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </BgWithOverlay>
    ),
    { ...OG_SIZE }
  );
}

// ─── Grade Landing OG Image ────────────────────────────────────
export async function renderGradeOG({
  grade,
  subject,
  weekCount,
}: {
  grade: number;
  subject: "english" | "maths" | "science";
  weekCount: number;
}): Promise<ImageResponse> {
  const config = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG.english;
  const subjectLabel = subject.charAt(0).toUpperCase() + subject.slice(1);
  const bgSrc = await loadBgImage(config.bgFile);

  return new ImageResponse(
    (
      <BgWithOverlay bgSrc={bgSrc} overlayOpacity={0.4}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "60px",
          }}
        >
          <TPGLogo />
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "30px", marginBottom: "12px" }}>
            <span style={{ fontSize: "40px" }}>{config.emoji}</span>
            <span style={{ color: config.accent, fontSize: "24px", fontWeight: "bold", letterSpacing: "1px" }}>
              {subjectLabel.toUpperCase()}
            </span>
          </div>
          <div
            style={{
              color: "white",
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "16px",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Grade {grade} Quizzes
          </div>
          <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "22px", marginBottom: "30px" }}>
            {weekCount} Weekly Quizzes · Free · No Sign-up
          </div>
          <div style={{ position: "absolute", bottom: "24px", color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>
            thepractiseground.in
          </div>
        </div>
      </BgWithOverlay>
    ),
    { ...OG_SIZE }
  );
}

// ─── Blog OG Image ─────────────────────────────────────────────
export async function renderBlogOG({
  title,
  category,
  readTime,
}: {
  title: string;
  category: string;
  readTime: string;
}): Promise<ImageResponse> {
  const bgFile = BLOG_BG_MAP[category] || BLOG_BG_MAP.default;
  const bgSrc = await loadBgImage(bgFile);

  return new ImageResponse(
    (
      <BgWithOverlay bgSrc={bgSrc} overlayOpacity={0.35}>
        <div style={{ display: "flex", flexDirection: "column", padding: "50px 60px", height: "100%" }}>
          {/* Top row: Logo + Category */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <TPGLogo small />
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: "20px",
                padding: "8px 20px",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {category}
            </div>
          </div>

          {/* Title */}
          <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
            <div
              style={{
                color: "white",
                fontSize: title.length > 60 ? "32px" : title.length > 40 ? "38px" : "44px",
                fontWeight: "bold",
                lineHeight: "1.25",
                maxWidth: "700px",
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              {title}
            </div>
          </div>

          {/* Bottom: read time + URL */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: "8px",
                padding: "8px 16px",
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
              }}
            >
              {readTime}
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>thepractiseground.in/blog</div>
          </div>
        </div>
      </BgWithOverlay>
    ),
    { ...OG_SIZE }
  );
}

// ─── Fun Quiz OG Image ─────────────────────────────────────────
export async function renderFunQuizOG({
  title,
  category,
  emoji,
  questionCount,
}: {
  title: string;
  category: string;
  emoji: string;
  questionCount: number;
}): Promise<ImageResponse> {
  const bgSrc = await loadBgImage("og-fun.png");

  return new ImageResponse(
    (
      <BgWithOverlay bgSrc={bgSrc} overlayOpacity={0.3}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "60px",
          }}
        >
          <TPGLogo small />

          <div style={{ fontSize: "72px", marginTop: "24px", marginBottom: "8px" }}>{emoji}</div>

          <div
            style={{
              color: "white",
              fontSize: title.length > 30 ? "36px" : "42px",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: "1.2",
              marginBottom: "12px",
              maxWidth: "800px",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            {title}
          </div>

          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: "20px",
              padding: "8px 20px",
              color: "rgba(255,255,255,0.9)",
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            {category}
          </div>

          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { num: String(questionCount), label: "Questions" },
              { num: "Fun", label: "Quiz" },
              { num: "Free", label: "Play Now" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "10px 22px",
                }}
              >
                <span style={{ color: "white", fontSize: "22px", fontWeight: "bold" }}>{stat.num}</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{stat.label}</span>
              </div>
            ))}
          </div>

          <div style={{ position: "absolute", bottom: "24px", color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>
            thepractiseground.in/fun
          </div>
        </div>
      </BgWithOverlay>
    ),
    { ...OG_SIZE }
  );
}
