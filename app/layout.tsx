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
  title: "로카포스팅 | 블로그 기자단 포스팅 + 구글 색인 서비스",
  description:
    "블로그 포스팅부터 구글 색인까지 한 번에. 네이버·구글 동시 노출, 색인 성공률 98.7%",
  openGraph: {
    title: "로카포스팅 | 블로그 기자단 포스팅 + 구글 색인 서비스",
    description:
      "블로그 포스팅부터 구글 색인까지 한 번에. 네이버·구글 동시 노출.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
