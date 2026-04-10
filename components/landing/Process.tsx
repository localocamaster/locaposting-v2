"use client";

import { motion } from "framer-motion";
import { PenTool, Search, Activity, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: PenTool,
    step: "01",
    title: "키워드 & 패키지 선택",
    description: "타겟 키워드와 원하는 패키지를 상담을 통해 선택하세요.",
  },
  {
    icon: Search,
    step: "02",
    title: "기자단 포스팅 + SEO",
    description: "검증된 블로그 기자단이 SEO 최적화된 콘텐츠를 작성합니다.",
  },
  {
    icon: Activity,
    step: "03",
    title: "구글 검색 등록",
    description: "포스팅 즉시 구글 공식 API로 검색 등록 요청, 1~3일 내 노출.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "노출 확인",
    description: "네이버·구글 검색 결과에 노출. 결과 리포트를 전달해드립니다.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            주문부터 검색 노출까지,{" "}
            <span className="text-red-600">4단계면 끝</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            간단한 상담 한 번이면 바로 시작됩니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 text-red-600">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-muted uppercase tracking-wider">
                  Step {item.step}
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>

              {/* Connector line (desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
