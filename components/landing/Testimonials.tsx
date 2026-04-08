"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    type: "카페",
    name: "김○○ 사장님",
    text: "블로그 기자단 포스팅부터 구글 검색 등록까지 전 과정을 책임져 주셔서 편하고 든든했어요. 매출이 30% 증가했습니다!",
    highlight: "매출 30% 증가",
  },
  {
    type: "병원",
    name: "이○○ 원장",
    text: "구글 검색 등록이 빠르게 완료되어 블로그 유입이 확 늘었어요. 지역 검색 1페이지에 노출되고 있습니다!",
    highlight: "검색 1페이지",
  },
  {
    type: "학원",
    name: "박○○ 대표",
    text: "네이버 블로그 기자단 글 작성 후 구글 검색 노출까지 완벽하게 완료! 상담 문의가 2배로 늘었어요.",
    highlight: "문의 2배 증가",
  },
  {
    type: "쇼핑몰",
    name: "최○○ 대표",
    text: "급하게 요청했는데도 빠르게 처리해줘서 만족스럽네요. 친절하고 신속해서 부담 없이 진행했습니다!",
    highlight: "신속한 처리",
  },
  {
    type: "미용실",
    name: "정○○ 원장",
    text: "요구사항을 정확히 파악해서 원하는 스타일의 글이 바로 나왔습니다. 예약이 꽉 차고 있어요!",
    highlight: "예약 포화",
  },
  {
    type: "헬스장",
    name: "윤○○ 대표",
    text: "진짜 네이버 기자단 글이 구글 검색에도 노출되네요! 회원 가입이 40% 늘었습니다.",
    highlight: "회원 40% 증가",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            고객 <span className="text-red-600">후기</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            1,000+ 고객님들의 실제 이야기
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {review.type}
                  </p>
                  <p className="text-xs text-muted">{review.name}</p>
                </div>
                <span className="text-xs bg-red-50 text-red-600 px-2.5 py-1 rounded-full font-medium">
                  {review.highlight}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
