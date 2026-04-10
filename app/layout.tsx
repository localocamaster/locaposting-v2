import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../fonts/PretendardVariable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://locaposting.com"),
  title: {
    default: "로카포스팅 | 마케팅 서비스 블로그 기자단 및 포스팅 대행",
    template: "%s | 로카포스팅",
  },
  description:
    "블로그 마케팅이 고민이라면 로카포스팅이 답입니다. 블로그 기자단 활동과 블로그 포스팅 대행을 통해 검색 노출을 강화하고, 방문자 증가를 체감해 보세요.",
  keywords: [
    "블로그 마케팅",
    "블로그 기자단",
    "구글 색인",
    "네이버 SEO",
    "블로그 포스팅 대행",
    "검색 노출",
    "소상공인 마케팅",
  ],
  openGraph: {
    title: "로카포스팅 | 마케팅 서비스 블로그 기자단 및 포스팅 대행",
    description:
      "블로그 마케팅이 고민이라면 로카포스팅이 답입니다. 블로그 기자단 활동과 블로그 포스팅 대행을 통해 검색 노출을 강화하고, 방문자 증가를 체감해 보세요.",
    type: "website",
    locale: "ko_KR",
    url: "https://locaposting.com",
    siteName: "로카포스팅",
  },
  twitter: {
    card: "summary_large_image",
    title: "로카포스팅 | 마케팅 서비스 블로그 기자단 및 포스팅 대행",
    description:
      "블로그 마케팅이 고민이라면 로카포스팅이 답입니다. 블로그 기자단 활동과 블로그 포스팅 대행을 통해 검색 노출을 강화하고, 방문자 증가를 체감해 보세요.",
  },
  alternates: {
    canonical: "https://locaposting.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "로카포스팅",
  url: "https://locaposting.com",
  description:
    "블로그 마케팅이 고민이라면 로카포스팅이 답입니다. 블로그 기자단 활동과 블로그 포스팅 대행을 통해 검색 노출을 강화하고, 방문자 증가를 체감해 보세요.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Korean",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
