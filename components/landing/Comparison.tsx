"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { label: "네이버 포털 등록", general: "partial", press: "yes", loca: "yes" },
  { label: "구글 검색 등록", general: "no", press: "no", loca: "yes" },
  { label: "구글 노출 모니터링", general: "no", press: "no", loca: "yes" },
  { label: "누락 시 자동 재등록", general: "no", press: "no", loca: "yes" },
  { label: "평균 비용", general: "무료~30만원", press: "50~100만원", loca: "5만원~" },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "yes")
    return <Check className="w-4 h-4 text-green-600 mx-auto" />;
  if (status === "no")
    return <X className="w-4 h-4 text-gray-300 mx-auto" />;
  if (status === "partial")
    return <Minus className="w-4 h-4 text-yellow-500 mx-auto" />;
  return <span className="text-xs font-medium">{status}</span>;
}

export default function Comparison() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            서비스 <span className="text-red-600">비교</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            왜 로카포스팅이 다른지, 한눈에 비교하세요.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden sm:block bg-white rounded-2xl border border-border overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider">
                  구분
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider text-center">
                  일반 블로그
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider text-center">
                  블로그 기자단
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider text-center bg-red-50 text-red-600">
                  로카포스팅
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.label}
                  className={idx < rows.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="px-6 py-4 text-sm font-medium text-foreground">
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusIcon status={row.general} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusIcon status={row.press} />
                  </td>
                  <td className="px-6 py-4 text-center bg-red-50/50 font-semibold">
                    <StatusIcon status={row.loca} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-4">
          {[
            { title: "일반 블로그", data: rows.map((r) => ({ label: r.label, value: r.general })), highlight: false },
            { title: "블로그 기자단", data: rows.map((r) => ({ label: r.label, value: r.press })), highlight: false },
            { title: "로카포스팅", data: rows.map((r) => ({ label: r.label, value: r.loca })), highlight: true },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-5 ${
                card.highlight
                  ? "border-red-500 bg-red-50 relative"
                  : "border-border bg-white"
              }`}
            >
              {card.highlight && (
                <span className="absolute -top-3 right-4 bg-red-600 text-white text-[11px] px-2.5 py-1 rounded-full font-medium">
                  추천
                </span>
              )}
              <h4 className="font-bold text-foreground mb-3">{card.title}</h4>
              <div className="space-y-2">
                {card.data.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted">{item.label}</span>
                    <StatusIcon status={item.value} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
