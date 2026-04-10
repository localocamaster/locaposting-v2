import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "로카포스팅 | 블로그 기자단 포스팅 + 구글 색인 서비스";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #fef2f2 50%, #fff1f2 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blob decorations */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(220, 38, 38, 0.08)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-40px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(251, 146, 60, 0.06)",
            filter: "blur(60px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "9999px",
            border: "1px solid #e5e7eb",
            background: "white",
            padding: "8px 20px",
            fontSize: "18px",
            color: "#6b7280",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#dc2626",
            }}
          />
          네이버 + 구글 동시 검색 노출 솔루션
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#111111",
              letterSpacing: "-1px",
            }}
          >
            블로그 포스팅부터
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              letterSpacing: "-1px",
              display: "flex",
            }}
          >
            <span style={{ color: "#dc2626" }}>구글 노출</span>
            <span style={{ color: "#111111" }}>까지, 한 번에</span>
          </div>
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: "24px",
            color: "#6b7280",
            marginTop: "24px",
          }}
        >
          블로그 기자단이 작성하고, 구글 공식 API로 검색 등록까지.
        </div>

        {/* Price */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "32px",
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          <span
            style={{
              color: "#6b7280",
              textDecoration: "line-through",
            }}
          >
            월 300만원
          </span>
          <span style={{ color: "#111111" }}>→</span>
          <span style={{ color: "#dc2626" }}>단 5만원부터</span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #dc2626, #f97316)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
