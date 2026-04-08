"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "스탠다드",
    subtitle: "일 방문자 500명급 블로그",
    price: "50,000",
    features: [
      "블로그 기자단 1건",
      "국내 포털 SEO 최적화",
      "구글 공식 API 검색 등록",
      "후기성 원고료 포함",
    ],
    recommended: false,
  },
  {
    name: "디럭스",
    subtitle: "일 방문자 1,000명급 블로그",
    price: "100,000",
    features: [
      "스탠다드 전체 포함",
      "확장 키워드 최적화",
      "내부 링크 구조 강화",
      "구글 노출 실시간 확인",
    ],
    recommended: true,
  },
  {
    name: "프리미엄",
    subtitle: "일 방문자 3,000명급 블로그",
    price: "150,000",
    features: [
      "디럭스 전체 포함",
      "심화 SEO 최적화",
      "모니터링 리포트 제공",
      "우선 처리",
    ],
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            심플한 <span className="text-red-600">요금제</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            숨겨진 비용 없이, 패키지 하나로 끝.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-6 sm:p-8 border transition-shadow hover:shadow-lg ${
                plan.recommended
                  ? "border-foreground bg-white shadow-md md:scale-[1.03]"
                  : "border-border bg-white"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-foreground text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  추천
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted mt-1">{plan.subtitle}</p>
              </div>

              <div className="mt-5 mb-6">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">
                  ₩{plan.price}
                </span>
                <span className="text-sm text-muted ml-1">/ 건</span>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted"
                  >
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.recommended
                    ? "bg-foreground text-white hover:bg-gray-800"
                    : "bg-surface text-foreground border border-border hover:bg-gray-100"
                }`}
              >
                시작하기
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
