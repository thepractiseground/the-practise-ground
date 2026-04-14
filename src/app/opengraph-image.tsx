import { ImageResponse } from "next/og";

export const alt = "The Practise Ground - Free Quizzes for Grades 5-12 & Language Learning A1-C1";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1E3A5F 0%, #2563EB 50%, #0891B2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Logo block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "3px solid rgba(255,255,255,0.4)",
            borderRadius: "12px",
            padding: "12px 24px",
            marginBottom: "30px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", letterSpacing: "2px" }}>THE</span>
          <span style={{ color: "#F97316", fontSize: "42px", fontWeight: "bold", lineHeight: "1.1" }}>PRACTISE</span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", letterSpacing: "6px" }}>GROUND</span>
        </div>

        {/* Title */}
        <div
          style={{
            color: "white",
            fontSize: "36px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "16px",
            lineHeight: "1.3",
          }}
        >
          Free English, Maths & Science Quizzes
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "22px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Grades 5-12 · Languages A1-C1 · 23,400+ Questions · No Sign-up
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "10px",
          }}
        >
          {[
            { num: "52", label: "Weeks per Grade" },
            { num: "8", label: "Grade Levels" },
            { num: "100%", label: "Free Forever" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "16px 28px",
              }}
            >
              <span style={{ color: "#F97316", fontSize: "32px", fontWeight: "bold" }}>{stat.num}</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            color: "rgba(255,255,255,0.5)",
            fontSize: "16px",
          }}
        >
          thepractiseground.in
        </div>
      </div>
    ),
    { ...size }
  );
}
