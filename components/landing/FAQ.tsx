"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "네이버와 구글에 동시 등록이 어떻게 가능한가요?",
    answer:
      "네이버 블로그 기자단을 통해 고품질 콘텐츠를 생성하고, 구글 공식 API를 활용해 24시간 내 자동 검색 등록을 진행합니다. 두 플랫폼의 알고리즘을 동시에 만족시키는 최적화된 콘텐츠 구조를 적용합니다.",
  },
  {
    question: "포스팅 후 검색 노출까지 얼마나 걸리나요?",
    answer:
      "네이버는 24시간 이내 등록, 구글은 1~3일 내 검색 노출이 평균입니다. 키워드 경쟁도와 콘텐츠 품질에 따라 차이가 있을 수 있습니다.",
  },
  {
    question: "검색 상위노출을 보장하나요?",
    answer:
      "구글 검색 등록을 보장하지만, 상위노출은 보장하지 않습니다. 다만 평균 387% 트래픽 증가를 경험하고 있으며, SEO 최적화된 콘텐츠로 노출 가능성을 극대화합니다.",
  },
  {
    question: "어떤 업종에 효과적인가요?",
    answer:
      "병원, 학원, 카페, 미용실 등 지역 기반 비즈니스와 전문 서비스, 이커머스 등 모든 업종에 효과적입니다. 특히 '지역명+서비스' 형태의 로컬 SEO에서 높은 성과를 보입니다.",
  },
  {
    question: "패키지 간 차이점은 무엇인가요?",
    answer:
      "스탠다드(5만원)는 일 방문자 500명 블로그, 디럭스(10만원)는 1,000명, 프리미엄(15만원)은 3,000명 이상의 블로그에서 작성됩니다. 모든 패키지에 SEO 최적화와 구글 검색 등록이 포함됩니다.",
  },
  {
    question: "환불 정책은 어떻게 되나요?",
    answer:
      "콘텐츠 작성 전 100% 환불이 가능합니다. 콘텐츠 작성 후에는 서비스 특성상 환불이 불가합니다.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            자주 묻는 <span className="text-red-600">질문</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            궁금한 점을 빠르게 확인하세요.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-surface border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm sm:text-base font-medium text-foreground pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted shrink-0 transition-transform duration-200 ${
                    expanded === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pt-2 pb-5">
                      <p className="text-sm text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
