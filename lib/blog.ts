export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  excerpt: string;
}

export const categories = [
  "전체",
  "블로그 마케팅",
  "네이버 SEO",
  "검색 트렌드",
  "마케팅 가이드",
] as const;

export type Category = (typeof categories)[number];

// Register all posts here
import * as blogPressMarketing from "@/content/posts/blog-press-marketing-guide";
import * as naverSmartBlockGuide from "@/content/posts/naver-smart-block-guide";
import * as naverCrankDiaAlgorithm from "@/content/posts/naver-crank-dia-algorithm";
import * as naverSeoChecklist from "@/content/posts/naver-seo-checklist";
import * as blogMarketingByIndustry from "@/content/posts/blog-marketing-by-industry";
import * as blogVsInstagramMarketing from "@/content/posts/blog-vs-instagram-marketing";
import * as blogMarketingCost from "@/content/posts/blog-marketing-cost";
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
import * as blogMarketingPerformance from "@/content/posts/blog-marketing-performance";
import * as blogMarketingFailureReasons from "@/content/posts/blog-marketing-failure-reasons";

const allPostModules = [
  blogPressMarketing,
  naverSmartBlockGuide,
  naverCrankDiaAlgorithm,
  naverSeoChecklist,
  blogMarketingByIndustry,
  blogVsInstagramMarketing,
  blogMarketingCost,
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
  blogMarketingPerformance,
  blogMarketingFailureReasons,
];

export function getAllPosts(): PostMeta[] {
  return allPostModules
    .map((mod) => mod.meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): PostMeta | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): PostMeta[] {
  if (category === "전체") return getAllPosts();
  return getAllPosts().filter((p) => p.category === category);
}
