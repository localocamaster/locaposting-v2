"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      {/* Gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-red-200/30 blur-[100px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-orange-200/20 blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-rose-100/25 blur-[80px] animate-blob animation-delay-4000" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-32 pb-16 sm:pb-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-muted shadow-sm mb-8"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          네이버 + 구글 동시 검색 노출 솔루션
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.15]"
        >
          블로그 포스팅부터{" "}
          <br />
          <span className="text-red-600">구글 노출</span>까지, 한 번에
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          블로그 기자단이 작성하고, 구글 공식 API로 검색 등록까지.
          <br className="hidden sm:block" />
          간편하게 시작하세요.
        </motion.p>

        {/* Price Hook */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 inline-flex items-center gap-3 text-3xl sm:text-4xl font-bold"
        >
          <span className="text-muted line-through decoration-red-500 decoration-2">
            월 300만원
          </span>
          <span className="text-foreground">→</span>
          <span className="text-red-600">단 5만원부터</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative flex items-center gap-2 rounded-xl bg-foreground text-white px-8 py-4 text-base font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:shadow-foreground/20"
          >
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            지금 시작하기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#pricing"
            className="flex items-center gap-2 rounded-xl border border-border bg-white/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-foreground hover:bg-surface transition-all"
          >
            요금제 보기
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted"
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>
              <b className="text-foreground">1,000+</b> 고객
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>
              구글 등록 성공률 <b className="text-foreground">98.7%</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>
              평균 <b className="text-foreground">1~3일</b> 내 반영
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
