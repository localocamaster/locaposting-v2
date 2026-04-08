"use client";

import { useState } from "react";
import Link from "next/link";
import { categories, type PostMeta } from "@/lib/blog";
import BlogThumbnail from "@/components/blog/BlogThumbnail";

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<string>("전체");

  const filtered =
    active === "전체" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
              active === cat
                ? "bg-foreground text-white border-foreground"
                : "bg-white text-muted border-border hover:border-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-white hover:shadow-lg transition-shadow overflow-hidden"
          >
            <BlogThumbnail category={post.category} title={post.title} slug={post.slug} />

            <div className="flex flex-col flex-1 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-[11px] text-muted">{post.date}</span>
              </div>

              <h2 className="text-[15px] font-bold text-foreground leading-snug mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                {post.title}
              </h2>

              <p className="text-xs text-muted leading-relaxed line-clamp-2 mt-auto">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted text-sm py-16">
          해당 카테고리의 글이 없습니다.
        </p>
      )}
    </>
  );
}
