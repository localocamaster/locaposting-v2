"use client";

import { useState, useEffect } from "react";
import { Menu, X, PenTool } from "lucide-react";

const navLinks = [
  { label: "프로세스", href: "#process" },
  { label: "요금제", href: "#pricing" },
  { label: "고객 후기", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "블로그", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-9 h-9 bg-red-600 rounded-xl">
            <PenTool className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-extrabold text-foreground tracking-tight">
            로카포스팅
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-lg bg-foreground text-white px-5 py-2.5 text-base font-semibold hover:bg-gray-800 transition-colors"
          >
            시작하기
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors"
            aria-label="메뉴"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 text-sm font-medium text-muted hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-3 pb-2">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center rounded-lg bg-foreground text-white px-5 py-2.5 text-sm font-semibold"
              >
                시작하기
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
