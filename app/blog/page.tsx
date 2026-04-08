import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogList from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "블로그 | 로카포스팅",
  description:
    "블로그 마케팅, 네이버 SEO, 검색 트렌드 등 사장님을 위한 마케팅 인사이트를 전합니다.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 sm:py-20 bg-surface border-b border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm font-semibold text-red-600 tracking-wide mb-3">
              BLOG
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              마케팅 인사이트
            </h1>
            <p className="text-base text-muted max-w-xl mx-auto">
              블로그 마케팅의 최신 트렌드와 실전 노하우를 전합니다.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <BlogList posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
