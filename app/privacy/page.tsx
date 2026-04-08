import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | 로카포스팅",
  description: "로카포스팅 개인정보 처리방침",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-12">
            개인정보 처리방침
          </h1>

          <div className="space-y-10 text-sm text-muted leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                1. 개인정보 처리 목적
              </h2>
              <p>
                회사는 고객이 랜딩페이지를 통해 카카오톡/텔레그램 문의 후 계좌이체로 결제하여
                서비스를 이용하는 과정에서 원활한 상담, 계약 진행, 서비스 제공 및 결제/환불
                업무를 위하여 최소한의 개인정보를 수집·이용합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                2. 수집하는 개인정보 항목
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>필수: 카카오톡 ID, 텔레그램 ID 등 연락처</li>
                <li>선택: 서비스 요청 관련 자료(이미지, 원고, 키워드 등)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                3. 보유 및 이용 기간
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>서비스 완료 후 3개월간 보관 후 파기</li>
                <li>계약·대금 지급 기록: 5년 (법령상 의무 보관)</li>
                <li>소비자 불만·분쟁 처리 기록: 3년 (법령상 의무 보관)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                4. 개인정보 제3자 제공
              </h2>
              <p>
                원칙적으로 외부 제공 없음. 단, 법령에 따른 요청 또는 고객 동의 시 제공 가능합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                5. 개인정보 처리 위탁
              </h2>
              <p>
                원칙적으로 위탁 없음. 필요 시 사전 동의 후 제한적 위탁이 가능합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                6. 개인정보 파기 방법
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>전자파일: 복구 불가 방식 삭제</li>
                <li>종이 문서: 분쇄기로 파기</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">7. 고객 권리</h2>
              <p>
                열람, 정정, 삭제, 처리정지 요구가 가능하며, 언제든지 동의 철회가 가능합니다.
                단, 서비스 제공에 제한이 발생할 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                8. 개인정보 보호책임자
              </h2>
              <ul className="list-none space-y-1">
                <li>성명: 김진우</li>
                <li>이메일: localoca.master@gmail.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">9. 고지 의무</h2>
              <p>
                본 방침은 제정일로부터 적용되며, 변경 시 랜딩페이지 및 공지사항을 통해
                안내합니다.
              </p>
            </section>

            <p className="pt-4 text-xs text-muted">
              본 방침은 2025년 8월 28일부터 시행합니다.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
