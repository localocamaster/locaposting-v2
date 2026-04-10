"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 1500, bounce: 0 });
  const display = useTransform(spring, (v) => {
    if (suffix === "%") return `${v.toFixed(1)}${suffix}`;
    if (value >= 1000) return `${Math.floor(v).toLocaleString()}+`;
    return `${Math.floor(v)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref}>
      {display}
    </motion.span>
  );
}

const stats = [
  {
    value: 387,
    suffix: "%",
    display: "387%",
    label: "평균 트래픽 증가",
    detail: "기자단 활동 후 6개월 평균",
  },
  {
    value: 98.7,
    suffix: "%",
    display: "98.7%",
    label: "구글 등록 성공률",
    detail: "구글 공식 API 기반 자동 등록",
  },
  {
    value: 0,
    suffix: "",
    display: "1~3일",
    label: "평균 검색 노출",
    detail: "포스팅 후 구글 검색 반영까지",
  },
  {
    value: 1000,
    suffix: "+",
    display: "1,000+",
    label: "누적 고객",
    detail: "소상공인부터 기업까지",
  },
];

export default function Stats() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            검증된 <span className="relative inline-block text-red-600">
              실제 성과
              <motion.span
                className="absolute left-0 bottom-0 h-[3px] bg-red-600/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            숫자로 증명하는 로카포스팅의 효과
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 rounded-2xl bg-surface border border-border"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-2">
                {stat.value > 0 ? (
                  <CountUp value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </div>
              <div className="text-sm font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-muted mt-1">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
