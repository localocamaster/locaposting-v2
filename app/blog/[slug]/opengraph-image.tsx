import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import { getAllPosts } from "@/lib/blog";

export const alt = "로카포스팅 블로그";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 의미 단위 줄바꿈 맵: 제목을 보기 좋게 나누기
const titleLines: Record<string, string[]> = {
  "blog-press-marketing-guide": ["블로그 기자단 마케팅이란?", "효과부터 진행 방식까지 완벽 정리"],
  "blog-marketing-by-industry": ["업종별 블로그 마케팅 전략:", "병원, 맛집, 인테리어부터 학원까지"],
  "blog-vs-instagram-marketing": ["블로그 마케팅 vs 인스타그램 마케팅:", "우리 업종엔 뭐가 맞을까?"],
  "blog-marketing-cost": ["블로그 마케팅 대행 비용,", "얼마가 적정한가요? 2026년 시세 총정리"],
  "blog-marketing-performance": ["블로그 마케팅 성과 측정법:", "순위 확인부터 매출 연결까지"],
  "blog-marketing-failure-reasons": ["블로그 마케팅 실패하는", "5가지 이유와 해결법"],
  "naver-smart-block-guide": ["네이버 스마트블록 완벽 가이드:", "2026년 검색 결과 구조와 노출 전략"],
  "naver-crank-dia-algorithm": ["네이버 C-Rank와 D.I.A 알고리즘:", "블로그 상위노출의 핵심 원리"],
  "naver-seo-checklist": ["네이버 블로그 상위노출", "체크리스트 20가지 (2026년 최신판)"],
  "naver-place-blog-synergy": ["네이버 플레이스와", "블로그 마케팅 시너지 전략"],
  "naver-homefeed-strategy": ["네이버 홈피드 노출 전략:", "검색 외 유입 채널 만들기"],
  "naver-blog-quality-prevention": ["네이버 블로그 저품질 예방법:", "원인, 증상, 탈출 방법 총정리"],
  "search-trend-2026": ["2026년 검색 트렌드 변화:", "사장님이 알아야 할 5가지"],
  "ai-search-era-marketing": ["AI 검색 시대,", "블로그 마케팅은 여전히 유효한가?"],
  "eeat-content-strategy": ["E-E-A-T 콘텐츠 전략:", "전문성으로 검색 순위 올리는 법"],
  "geo-strategy-guide": ["GEO(생성형 엔진 최적화) 전략 가이드:", "AI 검색에서 살아남는 법"],
  "small-business-marketing-start": ["사장님을 위한 온라인 마케팅", "입문 가이드 (2026년판)"],
  "keyword-selection-guide": ["마케팅 키워드 선정법:", "검색량부터 경쟁도 분석까지"],
  "marketing-quote-checklist": ["마케팅 대행 견적서 체크리스트:", "바가지 안 쓰는 7가지 확인 포인트"],
  "marketing-channel-selection": ["블로그, 인스타, 광고…", "우리 업종에 맞는 마케팅 채널은?"],
};

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
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              maxWidth: "1000px",
            }}
          >
            {(titleLines[slug] || [post.title]).map((line, i) => (
              <div
                key={i}
                style={{
                  fontSize: "52px",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.3,
                  letterSpacing: "-0.5px",
                }}
              >
                {line}
              </div>
            ))}
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
