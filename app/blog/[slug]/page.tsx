import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPosts } from "@/lib/blog";
import { ChevronRight, MessageSquare } from "lucide-react";

interface Section {
  heading: string;
  content?: string;
  table?: { headers: string[]; rows: string[][] };
  afterTable?: string;
  subSections?: { heading: string; content: string }[];
  steps?: { step: string; detail: string }[];
  list?: { title: string; detail: string }[];
  faqs?: { question: string; answer: string }[];
}

// Register all posts here
import * as blogPressMarketing from "@/content/posts/blog-press-marketing-guide";
import * as blogMarketingByIndustry from "@/content/posts/blog-marketing-by-industry";
import * as blogVsInstagramMarketing from "@/content/posts/blog-vs-instagram-marketing";
import * as blogMarketingCost from "@/content/posts/blog-marketing-cost";
import * as blogMarketingPerformance from "@/content/posts/blog-marketing-performance";
import * as blogMarketingFailureReasons from "@/content/posts/blog-marketing-failure-reasons";
import * as naverSmartBlockGuide from "@/content/posts/naver-smart-block-guide";
import * as naverCrankDiaAlgorithm from "@/content/posts/naver-crank-dia-algorithm";
import * as naverSeoChecklist from "@/content/posts/naver-seo-checklist";
import * as naverPlaceBlogSynergy from "@/content/posts/naver-place-blog-synergy";
import * as naverHomefeedStrategy from "@/content/posts/naver-homefeed-strategy";
import * as naverBlogQualityPrevention from "@/content/posts/naver-blog-quality-prevention";
import * as searchTrend2026 from "@/content/posts/search-trend-2026";
import * as aiSearchEraMarketing from "@/content/posts/ai-search-era-marketing";
import * as eeatContentStrategy from "@/content/posts/eeat-content-strategy";
import * as geoStrategyGuide from "@/content/posts/geo-strategy-guide";
import * as smallBusinessMarketingStart from "@/content/posts/small-business-marketing-start";
import * as keywordSelectionGuide from "@/content/posts/keyword-selection-guide";
import * as marketingQuoteChecklist from "@/content/posts/marketing-quote-checklist";
import * as marketingChannelSelection from "@/content/posts/marketing-channel-selection";

const allPostModules = [
  blogPressMarketing,
  blogMarketingByIndustry,
  blogVsInstagramMarketing,
  blogMarketingCost,
  blogMarketingPerformance,
  blogMarketingFailureReasons,
  naverSmartBlockGuide,
  naverCrankDiaAlgorithm,
  naverSeoChecklist,
  naverPlaceBlogSynergy,
  naverHomefeedStrategy,
  naverBlogQualityPrevention,
  searchTrend2026,
  aiSearchEraMarketing,
  eeatContentStrategy,
  geoStrategyGuide,
  smallBusinessMarketingStart,
  keywordSelectionGuide,
  marketingQuoteChecklist,
  marketingChannelSelection,
];

function getPost(slug: string) {
  return allPostModules.find((mod) => mod.meta.slug === slug) ?? null;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} | 로카포스팅`,
    description: post.meta.description,
  };
}

function renderMarkdownBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function Paragraph({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i} className="text-[15px] text-muted leading-relaxed mb-4">
          {renderMarkdownBold(p)}
        </p>
      ))}
    </>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta } = post;
  const sections = post.sections as Section[];
  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === meta.category)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-muted mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                홈
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href="/blog"
                className="hover:text-foreground transition-colors"
              >
                블로그
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground line-clamp-1">{meta.title}</span>
            </nav>

            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
                  {meta.category}
                </span>
                <span className="text-xs text-muted">{meta.date}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight break-keep">
                {meta.title}
              </h1>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, idx) => (
                <section key={idx}>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>

                  {section.content && <Paragraph text={section.content} />}

                  {/* Sub Sections */}
                  {section.subSections?.map((sub, si) => (
                    <div key={si} className="mt-6">
                      <h3 className="text-base font-bold text-foreground mb-2">
                        {sub.heading}
                      </h3>
                      <Paragraph text={sub.content} />
                    </div>
                  ))}

                  {/* Table */}
                  {section.table && (
                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-surface">
                            {section.table.headers.map((h, hi) => (
                              <th
                                key={hi}
                                className="px-4 py-3 text-left font-semibold text-foreground border-b border-border"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr
                              key={ri}
                              className="border-b border-border last:border-0"
                            >
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className="px-4 py-3 text-muted leading-relaxed"
                                >
                                  {renderMarkdownBold(cell)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.afterTable && (
                    <Paragraph text={section.afterTable} />
                  )}

                  {/* Steps */}
                  {section.steps && (
                    <div className="space-y-5 mt-4">
                      {section.steps.map((s, si) => (
                        <div
                          key={si}
                          className="flex gap-4 p-4 rounded-xl bg-surface border border-border"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                            {si + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-sm mb-1">
                              {s.step}
                            </p>
                            <p className="text-sm text-muted leading-relaxed">
                              {renderMarkdownBold(s.detail)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* List */}
                  {section.list && (
                    <div className="space-y-4 mt-4">
                      {section.list.map((item, li) => (
                        <div key={li} className="flex gap-3">
                          <div className="flex-shrink-0 w-1.5 rounded-full bg-red-600 mt-1" />
                          <div>
                            <p className="font-semibold text-foreground text-sm mb-1">
                              {item.title}
                            </p>
                            <p className="text-sm text-muted leading-relaxed">
                              {renderMarkdownBold(item.detail)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* FAQs */}
                  {section.faqs && (
                    <div className="space-y-4 mt-4">
                      {section.faqs.map((faq, fi) => (
                        <div
                          key={fi}
                          className="p-5 rounded-xl bg-surface border border-border"
                        >
                          <p className="font-semibold text-foreground text-sm mb-2">
                            Q. {faq.question}
                          </p>
                          <p className="text-sm text-muted leading-relaxed">
                            {renderMarkdownBold(faq.answer)}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                블로그 마케팅, 지금 시작해보세요
              </h3>
              <p className="text-sm text-red-100 mb-6 max-w-md mx-auto">
                로카포스팅이 검색 상위노출부터 성과 리포트까지 책임집니다.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                무료 상담 신청하기
              </a>
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
              <div className="mt-14">
                <h3 className="text-lg font-bold text-foreground mb-6">
                  관련 글 더 보기
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group p-4 rounded-xl border border-border hover:shadow-md transition-shadow"
                    >
                      <span className="text-[11px] font-semibold text-red-600">
                        {r.category}
                      </span>
                      <p className="text-sm font-semibold text-foreground mt-1 group-hover:text-red-600 transition-colors line-clamp-2">
                        {r.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
