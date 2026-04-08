"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Send,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-foreground">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            월{" "}
            <span className="line-through text-gray-500 decoration-2">
              300만원
            </span>{" "}
            → <span className="text-red-500">단 5만원</span>부터
          </h2>
          <p className="text-lg text-gray-400">
            블로그 포스팅만 합니다. 대신, 검색까지 책임집니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-4">
            {/* KakaoTalk */}
            <a
              href="https://open.kakao.com/o/sIrZYA5h"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 h-14 rounded-xl bg-[#FEE500] text-[#000000] text-sm font-semibold hover:bg-[#FDD835] transition-all shadow-sm hover:shadow-md"
            >
              <MessageSquare className="w-5 h-5" />
              카카오톡으로 문의하기
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/localoca_official"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 h-14 rounded-xl bg-[#0088CC] text-white text-sm font-semibold hover:bg-[#0077B5] transition-all shadow-sm hover:shadow-md"
            >
              <Send className="w-5 h-5" />
              텔레그램으로 문의하기
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>

            {/* Divider */}
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-muted">
                  또는 바로 주문하기
                </span>
              </div>
            </div>

            {/* Self-order CTA */}
            <a
              href="/order/select"
              className="group flex items-center justify-center gap-2.5 h-14 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-all shadow-sm hover:shadow-md"
            >
              상담 없이 바로 주문
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Operating Hours */}
            <div className="bg-surface rounded-xl p-4 text-center mt-2">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Clock className="w-4 h-4 text-muted" />
                <span className="text-sm font-semibold text-foreground">
                  운영 시간
                </span>
              </div>
              <p className="text-xs text-muted">
                24시간 접수 (늦은 시간 답변은 다음 영업일)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
