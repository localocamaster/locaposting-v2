import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "이용약관 | 로카포스팅",
  description: "로카포스팅 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-12">
            로카포스팅 이용약관
          </h1>

          <div className="space-y-10 text-sm text-muted leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">1. 목적</h2>
              <p>
                본 약관은 &quot;로카포스팅&quot;(이하 &quot;서비스&quot;)을 운영하는 주식회사
                로카로카(이하 &quot;회사&quot;)와, 고객이 랜딩페이지를 통해 카카오톡/텔레그램으로
                문의한 뒤 회사가 안내하는 계좌로 이체 결제를 하여 서비스를 이용하는 과정에서
                발생하는 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">2. 서비스 내용</h2>
              <p className="mb-2">회사는 다음과 같은 서비스를 제공합니다.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>블로그 기자단을 통한 콘텐츠 제작 및 발행</li>
                <li>국내 포털 및 구글 검색엔진 검색 등록 지원</li>
                <li>SEO 최적화, 키워드 분석, 성과 모니터링</li>
                <li>고객 맞춤형 원고 제작 및 리포트 제공</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">3. 서비스 신청 및 결제</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>고객은 랜딩페이지 → 카카오톡/텔레그램 문의 → 상담 진행</li>
                <li>서비스 신청 후 회사 지정 계좌로 이체</li>
                <li>결제 완료 시 서비스 개시</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">4. 환불 및 취소</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>원고 작성 전: 전액 환불 가능</li>
                <li>원고 작성 시작 후: 환불 불가</li>
                <li>콘텐츠 발행 및 검색 등록 요청 완료 후: 환불 불가</li>
                <li>환불/취소는 「전자상거래법」 등 관련 법령을 따름</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">5. 고객의 의무</h2>
              <p className="mb-2">고객은 다음 사항을 준수해야 합니다.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>정확한 정보 제공</li>
                <li>불법적·부적절한 콘텐츠 제작 요청 금지</li>
                <li>제공 자료(이미지, 원고 등)에 대한 법적 책임 부담</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">6. 회사의 의무</h2>
              <p>
                회사는 성실히 서비스를 제공하며 고객의 개인정보를 보호합니다. 단, 구글/국내 포털의
                정책 변경, 검색 알고리즘 변동, 기술적 문제 등 회사가 통제할 수 없는 사유로 인한
                검색 등록 지연·노출 실패에 대해 보장하지 않습니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">7. 면책사항</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>회사는 고객이 제공한 자료의 적법성, 정확성에 대해 책임지지 않습니다.</li>
                <li>검색 결과 순위나 노출 성과는 보장하지 않습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">8. 약관의 변경</h2>
              <p>본 약관은 필요 시 개정될 수 있으며, 개정 시 랜딩페이지에 공지합니다.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">9. 준거법 및 관할</h2>
              <p>
                본 약관은 대한민국 법률을 따르며, 분쟁 발생 시 회사 본사 소재지 관할 법원을 전속
                관할 법원으로 합니다.
              </p>
            </section>

            <p className="pt-4 text-xs text-muted">
              본 약관은 2025년 8월 28일부터 시행합니다.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
