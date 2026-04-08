import { PenTool, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 사업자 정보 */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <PenTool className="w-4 h-4 text-red-600" />
              <span className="font-bold text-foreground">로카포스팅</span>
            </div>
            <div className="space-y-1 text-xs text-muted leading-relaxed break-keep">
              <p>주식회사 로카로카 | 대표자: 이병헌</p>
              <p>사업자등록번호: 888-86-03395</p>
              <p>통신판매업: 2025-인천미추홀-0661</p>
              <p>인천광역시 미추홀구 인하로 100<br />인하대학교 인하드림센터 1관 206에이호</p>
              <p>0507-1339-3982 | localoca.master@gmail.com</p>
              <p>개인정보관리책임자: 김진우</p>
            </div>
          </div>

          {/* 파트너 메시지 */}
          <div className="text-center">
            <h3 className="font-bold text-foreground mb-3">
              검색 마케팅 파트너
            </h3>
            <p className="text-xs text-muted leading-relaxed mb-4">
              블로그 마케팅의 새로운 기준을 만들어갑니다.
              <br />
              당신의 비즈니스가 검색에서 빛날 수 있도록,
              <br />
              로카포스팅이 든든한 동반자가 되겠습니다.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              지금 문의하기
            </a>
          </div>

          {/* 서비스 링크 */}
          <div className="text-center">
            <h3 className="font-bold text-foreground mb-3">서비스 안내</h3>
            <div className="flex flex-col items-center gap-2">
              <a
                href="#pricing"
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                요금제 안내
              </a>
              <a
                href="/terms"
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                이용약관
              </a>
              <a
                href="/privacy"
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                개인정보 처리방침
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted">
            &copy; 2026 LOCAPOSTING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
