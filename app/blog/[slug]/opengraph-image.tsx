import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import { getAllPosts } from "@/lib/blog";

export const alt = "로카포스팅 블로그";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const categoryColors: Record<string, string> = {
  "블로그 마케팅": "#dc2626",
  "네이버 SEO": "#2563eb",
  "검색 트렌드": "#7c3aed",
  "마케팅 가이드": "#059669",
};

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allPosts = getAllPosts();
  const post = allPosts.find((p) => p.slug === slug);

  const fontBold = await readFile(
    join(process.cwd(), "fonts/PretendardBold.otf")
  );
  const fontRegular = await readFile(
    join(process.cwd(), "fonts/PretendardRegular.otf")
  );

  if (!post) {
    return new ImageResponse(
      <div style={{ width: "100%", height: "100%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "32px", fontFamily: "Pretendard" }}>
        로카포스팅
      </div>,
      { ...size, fonts: [{ name: "Pretendard", data: fontBold, weight: 700, style: "normal" as const }] }
    );
  }

  const color = categoryColors[post.category] || "#dc2626";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "#111111",
          fontFamily: "Pretendard",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: `${color}15`,
            filter: "blur(80px)",
          }}
        />

        {/* Top section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Category badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                padding: "6px 16px",
                borderRadius: "9999px",
                background: color,
                color: "white",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              {post.category}
            </div>
            <span style={{ color: "#9ca3af", fontSize: "18px" }}>
              {post.date}
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.3,
              letterSpacing: "-0.5px",
              maxWidth: "900px",
            }}
          >
            {post.title}
          </div>
        </div>

        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#dc2626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              L
            </div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#e5e7eb",
              }}
            >
              로카포스팅
            </span>
          </div>
          <span style={{ color: "#6b7280", fontSize: "18px" }}>
            locaposting.com
          </span>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: `linear-gradient(90deg, ${color}, ${color}66)`,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: fontBold, weight: 700, style: "normal" },
        { name: "Pretendard", data: fontRegular, weight: 400, style: "normal" },
      ],
    }
  );
}
