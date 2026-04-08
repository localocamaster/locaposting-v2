/**
 * 글별 고유 SVG 일러스트 썸네일
 * 다크 배경 + 중앙 일러스트 (텍스트 없음 — 카드 하단에 이미 제목/카테고리 표시됨)
 */

const categoryAccent: Record<string, { primary: string; secondary: string }> = {
  "블로그 마케팅": { primary: "#f87171", secondary: "#fca5a5" },
  "네이버 SEO": { primary: "#34d399", secondary: "#6ee7b7" },
  "검색 트렌드": { primary: "#60a5fa", secondary: "#93c5fd" },
  "마케팅 가이드": { primary: "#a78bfa", secondary: "#c4b5fd" },
};

function PostIllustration({ slug, c }: { slug: string; c: { primary: string; secondary: string } }) {
  switch (slug) {

    /* ═══════════════════════════════════════════
       블로그 마케팅 (6개)
       ═══════════════════════════════════════════ */

    case "blog-press-marketing-guide":
      // 블로그 카드 3장 겹침 + 기자단 사람 아이콘
      return (
        <g>
          <rect x="170" y="55" width="140" height="100" rx="12" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.5" />
          <rect x="170" y="55" width="140" height="24" rx="12" fill={c.primary} opacity="0.15" />
          <circle cx="186" cy="67" r="4" fill={c.primary} opacity="0.5" />
          <circle cx="198" cy="67" r="4" fill={c.primary} opacity="0.35" />
          <circle cx="210" cy="67" r="4" fill={c.primary} opacity="0.2" />
          <rect x="186" y="90" width="75" height="5" rx="2.5" fill={c.primary} opacity="0.45" />
          <rect x="186" y="102" width="108" height="4" rx="2" fill="white" opacity="0.18" />
          <rect x="186" y="112" width="90" height="4" rx="2" fill="white" opacity="0.12" />
          <rect x="186" y="122" width="100" height="4" rx="2" fill="white" opacity="0.1" />
          <rect x="100" y="35" width="100" height="72" rx="10" fill="none" stroke={c.primary} strokeWidth="1.2" opacity="0.25" />
          <rect x="100" y="35" width="100" height="18" rx="10" fill={c.primary} opacity="0.08" />
          <rect x="114" y="62" width="52" height="4" rx="2" fill={c.secondary} opacity="0.2" />
          <rect x="280" y="105" width="100" height="72" rx="10" fill="none" stroke={c.primary} strokeWidth="1.2" opacity="0.25" />
          <rect x="280" y="105" width="100" height="18" rx="10" fill={c.primary} opacity="0.08" />
          <rect x="294" y="132" width="52" height="4" rx="2" fill={c.secondary} opacity="0.2" />
          <circle cx="95" cy="175" r="10" fill={c.primary} opacity="0.2" />
          <circle cx="95" cy="163" r="7" fill={c.primary} opacity="0.2" />
          <circle cx="240" cy="195" r="10" fill={c.primary} opacity="0.15" />
          <circle cx="240" cy="183" r="7" fill={c.primary} opacity="0.15" />
          <circle cx="385" cy="175" r="10" fill={c.primary} opacity="0.2" />
          <circle cx="385" cy="163" r="7" fill={c.primary} opacity="0.2" />
          <line x1="105" y1="165" x2="155" y2="100" stroke={c.primary} strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
          <line x1="240" y1="175" x2="240" y2="155" stroke={c.primary} strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
          <line x1="375" y1="165" x2="325" y2="140" stroke={c.primary} strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
          <circle cx="400" cy="50" r="45" fill="none" stroke={c.primary} strokeWidth="0.8" opacity="0.08" />
          <circle cx="80" cy="210" r="30" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
        </g>
      );

    case "blog-marketing-by-industry":
      // 업종별 아이콘 그리드 (병원 십자, 포크, 집, 책)
      return (
        <g>
          {/* 그리드 4칸 */}
          <rect x="120" y="55" width="105" height="75" rx="10" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          <rect x="255" y="55" width="105" height="75" rx="10" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          <rect x="120" y="145" width="105" height="75" rx="10" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          <rect x="255" y="145" width="105" height="75" rx="10" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          {/* 병원 십자가 */}
          <rect x="160" y="78" width="24" height="8" rx="2" fill={c.primary} opacity="0.5" />
          <rect x="168" y="70" width="8" height="24" rx="2" fill={c.primary} opacity="0.5" />
          {/* 맛집 포크+나이프 */}
          <line x1="300" y1="70" x2="300" y2="115" stroke={c.primary} strokeWidth="2" opacity="0.4" strokeLinecap="round" />
          <line x1="312" y1="70" x2="312" y2="115" stroke={c.primary} strokeWidth="2" opacity="0.4" strokeLinecap="round" />
          <path d="M312 70 Q318 85 312 95" fill="none" stroke={c.primary} strokeWidth="2" opacity="0.4" />
          {/* 인테리어 집 */}
          <path d="M172 195 L152 175 L192 175 Z" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.4" />
          <rect x="160" y="175" width="24" height="20" rx="2" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.4" />
          {/* 학원 책 */}
          <rect x="295" y="160" width="22" height="30" rx="3" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.4" />
          <line x1="306" y1="160" x2="306" y2="190" stroke={c.primary} strokeWidth="1" opacity="0.3" />
          <rect x="300" y="167" width="12" height="2" rx="1" fill={c.primary} opacity="0.3" />
          {/* 장식 */}
          <circle cx="60" cy="135" r="30" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
          <circle cx="420" cy="135" r="30" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
          {/* 연결 점선 */}
          <line x1="225" y1="92" x2="255" y2="92" stroke={c.primary} strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
          <line x1="225" y1="182" x2="255" y2="182" stroke={c.primary} strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
          <line x1="172" y1="130" x2="172" y2="145" stroke={c.primary} strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
          <line x1="307" y1="130" x2="307" y2="145" stroke={c.primary} strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
        </g>
      );

    case "blog-vs-instagram-marketing":
      // 블로그 아이콘 vs 인스타 아이콘
      return (
        <g>
          {/* 블로그 (왼쪽) */}
          <rect x="80" y="70" width="130" height="100" rx="12" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.5" />
          <rect x="80" y="70" width="130" height="22" rx="12" fill={c.primary} opacity="0.12" />
          <rect x="96" y="105" width="60" height="5" rx="2.5" fill={c.primary} opacity="0.4" />
          <rect x="96" y="116" width="98" height="3.5" rx="1.5" fill="white" opacity="0.15" />
          <rect x="96" y="126" width="80" height="3.5" rx="1.5" fill="white" opacity="0.1" />
          <rect x="96" y="136" width="90" height="3.5" rx="1.5" fill="white" opacity="0.08" />
          {/* VS */}
          <circle cx="240" cy="135" r="20" fill={c.primary} opacity="0.12" stroke={c.primary} strokeWidth="1" />
          <text x="240" y="141" textAnchor="middle" fill={c.primary} opacity="0.6" fontSize="14" fontWeight="700" fontFamily="sans-serif">VS</text>
          {/* 인스타 (오른쪽) */}
          <rect x="270" y="75" width="120" height="120" rx="24" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.3" />
          <circle cx="330" cy="135" r="30" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.3" />
          <circle cx="330" cy="135" r="12" fill={c.primary} opacity="0.1" />
          <circle cx="365" cy="100" r="5" fill={c.primary} opacity="0.2" />
          {/* 장식 */}
          <circle cx="50" cy="50" r="25" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
          <circle cx="430" cy="220" r="35" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
        </g>
      );

    case "blog-marketing-cost":
      // 원화 동전 + 가격표 카드
      return (
        <g>
          {/* 큰 원화 심볼 */}
          <circle cx="170" cy="120" r="50" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.2" />
          <circle cx="170" cy="120" r="38" fill={c.primary} opacity="0.06" />
          <text x="170" y="132" textAnchor="middle" fill={c.primary} opacity="0.5" fontSize="36" fontWeight="700" fontFamily="sans-serif">₩</text>
          {/* 가격표 카드 */}
          <rect x="260" y="55" width="140" height="50" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1" />
          <rect x="275" y="68" width="50" height="5" rx="2.5" fill={c.primary} opacity="0.35" />
          <rect x="275" y="80" width="80" height="3.5" rx="1.5" fill="white" opacity="0.12" />
          <rect x="260" y="120" width="140" height="50" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1" />
          <rect x="275" y="133" width="60" height="5" rx="2.5" fill={c.primary} opacity="0.35" />
          <rect x="275" y="145" width="90" height="3.5" rx="1.5" fill="white" opacity="0.12" />
          <rect x="260" y="185" width="140" height="50" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1" />
          <rect x="275" y="198" width="45" height="5" rx="2.5" fill={c.primary} opacity="0.35" />
          <rect x="275" y="210" width="70" height="3.5" rx="1.5" fill="white" opacity="0.12" />
          {/* 연결선 */}
          <line x1="220" y1="110" x2="260" y2="80" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
          <line x1="220" y1="125" x2="260" y2="145" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
          <line x1="220" y1="140" x2="260" y2="210" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
          {/* 장식 */}
          <circle cx="80" cy="50" r="20" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
          <circle cx="420" cy="40" r="30" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
        </g>
      );

    case "blog-marketing-performance":
      // 대시보드: 차트 + 수치 카드
      return (
        <g>
          {/* 메인 차트 영역 */}
          <rect x="100" y="45" width="200" height="140" rx="12" fill={c.primary} opacity="0.06" stroke={c.primary} strokeWidth="1.2" />
          {/* 그리드 */}
          <line x1="120" y1="80" x2="280" y2="80" stroke="white" strokeWidth="0.5" opacity="0.06" />
          <line x1="120" y1="110" x2="280" y2="110" stroke="white" strokeWidth="0.5" opacity="0.06" />
          <line x1="120" y1="140" x2="280" y2="140" stroke="white" strokeWidth="0.5" opacity="0.06" />
          {/* 상승 그래프 */}
          <polyline points="130,160 160,145 185,130 210,105 240,85 270,65" fill="none" stroke={c.primary} strokeWidth="2" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="130,160 160,145 185,130 210,105 240,85 270,65 270,170 130,170" fill={c.primary} opacity="0.06" />
          <circle cx="185" cy="130" r="3.5" fill={c.primary} opacity="0.5" />
          <circle cx="240" cy="85" r="3.5" fill={c.primary} opacity="0.5" />
          <circle cx="270" cy="65" r="3.5" fill={c.primary} opacity="0.6" />
          {/* 오른쪽 수치 카드들 */}
          <rect x="330" y="50" width="100" height="40" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="0.8" />
          <rect x="342" y="62" width="30" height="4" rx="2" fill={c.primary} opacity="0.3" />
          <rect x="342" y="72" width="55" height="6" rx="2" fill={c.primary} opacity="0.45" />
          <rect x="330" y="105" width="100" height="40" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="0.8" />
          <rect x="342" y="117" width="35" height="4" rx="2" fill={c.primary} opacity="0.3" />
          <rect x="342" y="127" width="50" height="6" rx="2" fill={c.primary} opacity="0.45" />
          <rect x="330" y="160" width="100" height="40" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="0.8" />
          <rect x="342" y="172" width="28" height="4" rx="2" fill={c.primary} opacity="0.3" />
          <rect x="342" y="182" width="45" height="6" rx="2" fill={c.primary} opacity="0.45" />
          {/* 장식 화살표 */}
          <polygon points="270,58 275,65 265,65" fill={c.primary} opacity="0.4" />
        </g>
      );

    case "blog-marketing-failure-reasons":
      // 경고 삼각형 + X 마크들
      return (
        <g>
          {/* 중앙 경고 삼각형 */}
          <polygon points="240,50 300,160 180,160" fill="none" stroke={c.primary} strokeWidth="2" opacity="0.3" strokeLinejoin="round" />
          <polygon points="240,50 300,160 180,160" fill={c.primary} opacity="0.04" />
          <text x="240" y="140" textAnchor="middle" fill={c.primary} opacity="0.5" fontSize="40" fontWeight="700" fontFamily="sans-serif">!</text>
          {/* X 마크 5개 (실패 이유) */}
          <g opacity="0.3">
            <line x1="85" y1="75" x2="105" y2="95" stroke={c.primary} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="105" y1="75" x2="85" y2="95" stroke={c.primary} strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g opacity="0.25">
            <line x1="375" y1="75" x2="395" y2="95" stroke={c.primary} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="395" y1="75" x2="375" y2="95" stroke={c.primary} strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g opacity="0.2">
            <line x1="70" y1="165" x2="90" y2="185" stroke={c.primary} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="90" y1="165" x2="70" y2="185" stroke={c.primary} strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g opacity="0.2">
            <line x1="390" y1="165" x2="410" y2="185" stroke={c.primary} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="410" y1="165" x2="390" y2="185" stroke={c.primary} strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g opacity="0.15">
            <line x1="230" y1="195" x2="250" y2="215" stroke={c.primary} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="250" y1="195" x2="230" y2="215" stroke={c.primary} strokeWidth="2.5" strokeLinecap="round" />
          </g>
          {/* 점선 연결 */}
          <line x1="105" y1="85" x2="180" y2="105" stroke={c.primary} strokeWidth="0.8" opacity="0.1" strokeDasharray="3 3" />
          <line x1="375" y1="85" x2="300" y2="105" stroke={c.primary} strokeWidth="0.8" opacity="0.1" strokeDasharray="3 3" />
          <circle cx="420" cy="40" r="25" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
        </g>
      );

    /* ═══════════════════════════════════════════
       네이버 SEO (6개)
       ═══════════════════════════════════════════ */

    case "naver-smart-block-guide":
      // 스마트블록 레이아웃 (검색결과 블록들)
      return (
        <g>
          {/* 검색바 */}
          <rect x="120" y="35" width="240" height="30" rx="15" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.3" />
          <circle cx="335" cy="50" r="8" fill="none" stroke={c.primary} strokeWidth="1.2" opacity="0.3" />
          <rect x="140" y="46" width="80" height="4" rx="2" fill={c.primary} opacity="0.2" />
          {/* 블록 1 — 인기주제 */}
          <rect x="90" y="80" width="140" height="65" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          <rect x="105" y="90" width="50" height="4" rx="2" fill={c.primary} opacity="0.4" />
          <rect x="105" y="100" width="110" height="3" rx="1.5" fill="white" opacity="0.12" />
          <rect x="105" y="108" width="90" height="3" rx="1.5" fill="white" opacity="0.08" />
          <rect x="105" y="120" width="70" height="10" rx="5" fill={c.primary} opacity="0.1" />
          {/* 블록 2 — VIEW */}
          <rect x="250" y="80" width="140" height="65" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          <rect x="265" y="90" width="40" height="4" rx="2" fill={c.primary} opacity="0.4" />
          <rect x="265" y="100" width="100" height="3" rx="1.5" fill="white" opacity="0.12" />
          <rect x="265" y="108" width="80" height="3" rx="1.5" fill="white" opacity="0.08" />
          <rect x="265" y="120" width="60" height="10" rx="5" fill={c.primary} opacity="0.1" />
          {/* 블록 3 — 플레이스 */}
          <rect x="90" y="160" width="140" height="65" rx="8" fill={c.primary} opacity="0.06" stroke={c.primary} strokeWidth="1" />
          <rect x="105" y="170" width="55" height="4" rx="2" fill={c.primary} opacity="0.3" />
          <rect x="105" y="180" width="95" height="3" rx="1.5" fill="white" opacity="0.1" />
          <rect x="105" y="188" width="75" height="3" rx="1.5" fill="white" opacity="0.07" />
          {/* 블록 4 — AI추천 */}
          <rect x="250" y="160" width="140" height="65" rx="8" fill={c.primary} opacity="0.06" stroke={c.primary} strokeWidth="1" />
          <rect x="265" y="170" width="45" height="4" rx="2" fill={c.primary} opacity="0.3" />
          <rect x="265" y="180" width="105" height="3" rx="1.5" fill="white" opacity="0.1" />
          <rect x="265" y="188" width="85" height="3" rx="1.5" fill="white" opacity="0.07" />
          {/* 장식 */}
          <circle cx="50" cy="135" r="25" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
          <circle cx="430" cy="135" r="25" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
        </g>
      );

    case "naver-crank-dia-algorithm":
      // 기어/톱니 + 연결 노드
      return (
        <g>
          {/* C-Rank 기어 */}
          <circle cx="170" cy="115" r="40" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.25" />
          <circle cx="170" cy="115" r="28" fill={c.primary} opacity="0.06" />
          <circle cx="170" cy="115" r="15" fill="none" stroke={c.primary} strokeWidth="1" opacity="0.2" />
          {/* 기어 톱니 */}
          <rect x="164" y="70" width="12" height="10" rx="2" fill={c.primary} opacity="0.2" />
          <rect x="164" y="150" width="12" height="10" rx="2" fill={c.primary} opacity="0.2" />
          <rect x="125" y="109" width="10" height="12" rx="2" fill={c.primary} opacity="0.2" />
          <rect x="205" y="109" width="10" height="12" rx="2" fill={c.primary} opacity="0.2" />
          {/* D.I.A 기어 */}
          <circle cx="310" cy="135" r="45" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.25" />
          <circle cx="310" cy="135" r="32" fill={c.primary} opacity="0.06" />
          <circle cx="310" cy="135" r="18" fill="none" stroke={c.primary} strokeWidth="1" opacity="0.2" />
          {/* 기어 톱니 */}
          <rect x="304" y="85" width="12" height="10" rx="2" fill={c.primary} opacity="0.2" />
          <rect x="304" y="175" width="12" height="10" rx="2" fill={c.primary} opacity="0.2" />
          <rect x="260" y="129" width="10" height="12" rx="2" fill={c.primary} opacity="0.2" />
          <rect x="350" y="129" width="10" height="12" rx="2" fill={c.primary} opacity="0.2" />
          {/* 연결 */}
          <line x1="215" y1="120" x2="265" y2="130" stroke={c.primary} strokeWidth="1.5" opacity="0.2" strokeDasharray="4 4" />
          {/* 라벨 */}
          <text x="170" y="119" textAnchor="middle" fill={c.primary} opacity="0.4" fontSize="11" fontWeight="600" fontFamily="sans-serif">C-R</text>
          <text x="310" y="139" textAnchor="middle" fill={c.primary} opacity="0.4" fontSize="11" fontWeight="600" fontFamily="sans-serif">D.I.A</text>
          {/* 장식 */}
          <circle cx="70" cy="60" r="20" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.06" />
          <circle cx="420" cy="200" r="25" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.06" />
        </g>
      );

    case "naver-seo-checklist":
      // 체크리스트 (체크마크 행 여러 줄)
      return (
        <g>
          <rect x="130" y="30" width="220" height="210" rx="12" fill={c.primary} opacity="0.05" stroke={c.primary} strokeWidth="1.2" />
          <rect x="130" y="30" width="220" height="28" rx="12" fill={c.primary} opacity="0.1" />
          <rect x="155" y="40" width="60" height="5" rx="2.5" fill={c.primary} opacity="0.35" />
          {/* 체크 항목들 */}
          {[72, 92, 112, 132, 152, 172, 192, 212].map((y, i) => (
            <g key={i}>
              <rect x="155" y={y} width="14" height="14" rx="3" fill="none" stroke={c.primary} strokeWidth="1" opacity={i < 5 ? 0.35 : 0.15} />
              {i < 5 && <polyline points={`${158},${y + 7} ${161},${y + 10} ${166},${y + 4}`} fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />}
              <rect x="178" y={y + 4} width={70 + (i % 3) * 15} height="4" rx="2" fill="white" opacity={i < 5 ? 0.15 : 0.08} />
            </g>
          ))}
          {/* 진행률 바 */}
          <rect x="155" y="235" width="170" height="6" rx="3" fill="white" opacity="0.06" />
          <rect x="155" y="235" width="106" height="6" rx="3" fill={c.primary} opacity="0.25" />
          {/* 장식 */}
          <circle cx="70" cy="135" r="30" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
          <circle cx="410" cy="135" r="25" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
        </g>
      );

    case "naver-place-blog-synergy":
      // 지도 핀 + 블로그 카드 연결
      return (
        <g>
          {/* 지도 핀 */}
          <path d="M170 60 C170 60 130 95 130 120 C130 142 148 160 170 160 C192 160 210 142 210 120 C210 95 170 60 170 60Z" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.5" />
          <circle cx="170" cy="115" r="15" fill={c.primary} opacity="0.15" />
          <circle cx="170" cy="115" r="6" fill={c.primary} opacity="0.3" />
          {/* 블로그 카드 */}
          <rect x="270" y="70" width="130" height="90" rx="10" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          <rect x="270" y="70" width="130" height="20" rx="10" fill={c.primary} opacity="0.1" />
          <rect x="285" y="100" width="55" height="5" rx="2.5" fill={c.primary} opacity="0.35" />
          <rect x="285" y="112" width="100" height="3.5" rx="1.5" fill="white" opacity="0.12" />
          <rect x="285" y="122" width="80" height="3.5" rx="1.5" fill="white" opacity="0.08" />
          <rect x="285" y="132" width="90" height="3.5" rx="1.5" fill="white" opacity="0.06" />
          {/* 시너지 연결 화살표 */}
          <line x1="210" y1="115" x2="265" y2="115" stroke={c.primary} strokeWidth="1.5" opacity="0.25" strokeDasharray="5 5" />
          <polygon points="265,110 275,115 265,120" fill={c.primary} opacity="0.25" />
          {/* 양방향 표시 */}
          <polygon points="215,120 205,115 215,110" fill={c.primary} opacity="0.15" />
          {/* 장식 */}
          <circle cx="80" cy="200" r="25" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.06" />
          <circle cx="400" cy="200" r="30" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.06" />
        </g>
      );

    case "naver-homefeed-strategy":
      // 모바일 피드 스크롤
      return (
        <g>
          {/* 폰 프레임 */}
          <rect x="175" y="25" width="130" height="220" rx="16" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.3" />
          <rect x="210" y="32" width="60" height="4" rx="2" fill={c.primary} opacity="0.15" />
          {/* 피드 카드 1 */}
          <rect x="188" y="50" width="104" height="55" rx="6" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="0.8" />
          <rect x="196" y="58" width="40" height="4" rx="2" fill={c.primary} opacity="0.35" />
          <rect x="196" y="68" width="88" height="3" rx="1.5" fill="white" opacity="0.12" />
          <rect x="196" y="76" width="70" height="3" rx="1.5" fill="white" opacity="0.08" />
          <rect x="196" y="88" width="30" height="10" rx="5" fill={c.primary} opacity="0.12" />
          {/* 피드 카드 2 */}
          <rect x="188" y="115" width="104" height="55" rx="6" fill={c.primary} opacity="0.06" stroke={c.primary} strokeWidth="0.8" />
          <rect x="196" y="123" width="45" height="4" rx="2" fill={c.primary} opacity="0.3" />
          <rect x="196" y="133" width="80" height="3" rx="1.5" fill="white" opacity="0.1" />
          <rect x="196" y="141" width="60" height="3" rx="1.5" fill="white" opacity="0.07" />
          <rect x="196" y="153" width="25" height="10" rx="5" fill={c.primary} opacity="0.1" />
          {/* 피드 카드 3 (잘림) */}
          <rect x="188" y="180" width="104" height="55" rx="6" fill={c.primary} opacity="0.04" stroke={c.primary} strokeWidth="0.8" opacity="0.15" />
          <rect x="196" y="188" width="50" height="4" rx="2" fill={c.primary} opacity="0.2" />
          <rect x="196" y="198" width="85" height="3" rx="1.5" fill="white" opacity="0.06" />
          {/* 장식 — 추천 표시 */}
          <circle cx="100" cy="80" r="18" fill="none" stroke={c.primary} strokeWidth="1" opacity="0.12" />
          <text x="100" y="85" textAnchor="middle" fill={c.primary} opacity="0.25" fontSize="16" fontFamily="sans-serif">★</text>
          <line x1="118" y1="80" x2="185" y2="78" stroke={c.primary} strokeWidth="0.8" opacity="0.1" strokeDasharray="3 3" />
          <circle cx="380" cy="100" r="20" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.06" />
        </g>
      );

    case "naver-blog-quality-prevention":
      // 방패 + 체크마크
      return (
        <g>
          {/* 방패 */}
          <path d="M240 50 L300 75 L300 155 C300 185 240 215 240 215 C240 215 180 185 180 155 L180 75 Z" fill={c.primary} opacity="0.06" stroke={c.primary} strokeWidth="1.5" />
          {/* 체크마크 */}
          <polyline points="215,130 232,148 268,108" fill="none" stroke={c.primary} strokeWidth="3.5" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
          {/* 위험 요소들 (X 마크) 방패 바깥 */}
          <g opacity="0.15">
            <line x1="85" y1="85" x2="100" y2="100" stroke={c.primary} strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="85" x2="85" y2="100" stroke={c.primary} strokeWidth="2" strokeLinecap="round" />
            <line x1="92" y1="100" x2="170" y2="120" stroke={c.primary} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          </g>
          <g opacity="0.15">
            <line x1="380" y1="85" x2="395" y2="100" stroke={c.primary} strokeWidth="2" strokeLinecap="round" />
            <line x1="395" y1="85" x2="380" y2="100" stroke={c.primary} strokeWidth="2" strokeLinecap="round" />
            <line x1="387" y1="100" x2="310" y2="120" stroke={c.primary} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          </g>
          <g opacity="0.12">
            <line x1="90" y1="175" x2="105" y2="190" stroke={c.primary} strokeWidth="2" strokeLinecap="round" />
            <line x1="105" y1="175" x2="90" y2="190" stroke={c.primary} strokeWidth="2" strokeLinecap="round" />
            <line x1="105" y1="182" x2="180" y2="165" stroke={c.primary} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          </g>
          <g opacity="0.12">
            <line x1="380" y1="175" x2="395" y2="190" stroke={c.primary} strokeWidth="2" strokeLinecap="round" />
            <line x1="395" y1="175" x2="380" y2="190" stroke={c.primary} strokeWidth="2" strokeLinecap="round" />
            <line x1="380" y1="182" x2="305" y2="165" stroke={c.primary} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          </g>
        </g>
      );

    /* ═══════════════════════════════════════════
       검색 트렌드 (4개)
       ═══════════════════════════════════════════ */

    case "search-trend-2026":
      // 2026 숫자 + 상승 화살표
      return (
        <g>
          <text x="240" y="130" textAnchor="middle" fill={c.primary} opacity="0.12" fontSize="90" fontWeight="900" fontFamily="sans-serif">2026</text>
          {/* 상승 화살표 */}
          <line x1="140" y1="190" x2="340" y2="70" stroke={c.primary} strokeWidth="2.5" opacity="0.3" strokeLinecap="round" />
          <polygon points="340,60 350,78 330,78" fill={c.primary} opacity="0.3" />
          {/* 트렌드 포인트들 */}
          <circle cx="180" cy="165" r="6" fill={c.primary} opacity="0.2" />
          <circle cx="220" cy="142" r="6" fill={c.primary} opacity="0.25" />
          <circle cx="260" cy="118" r="6" fill={c.primary} opacity="0.3" />
          <circle cx="300" cy="95" r="6" fill={c.primary} opacity="0.35" />
          <circle cx="340" cy="72" r="6" fill={c.primary} opacity="0.4" />
          {/* 장식 */}
          <circle cx="70" cy="60" r="25" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
          <circle cx="420" cy="210" r="30" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
        </g>
      );

    case "ai-search-era-marketing":
      // AI 브레인 + 검색창
      return (
        <g>
          {/* AI 브레인 원 */}
          <circle cx="200" cy="125" r="55" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.2" />
          <circle cx="200" cy="125" r="40" fill={c.primary} opacity="0.05" />
          {/* 뉴런 연결 */}
          <circle cx="185" cy="110" r="5" fill={c.primary} opacity="0.3" />
          <circle cx="215" cy="105" r="4" fill={c.primary} opacity="0.25" />
          <circle cx="200" cy="135" r="5" fill={c.primary} opacity="0.3" />
          <circle cx="180" cy="140" r="3.5" fill={c.primary} opacity="0.2" />
          <circle cx="220" cy="130" r="4" fill={c.primary} opacity="0.25" />
          <line x1="185" y1="110" x2="215" y2="105" stroke={c.primary} strokeWidth="0.8" opacity="0.2" />
          <line x1="185" y1="110" x2="200" y2="135" stroke={c.primary} strokeWidth="0.8" opacity="0.2" />
          <line x1="215" y1="105" x2="220" y2="130" stroke={c.primary} strokeWidth="0.8" opacity="0.2" />
          <line x1="200" y1="135" x2="180" y2="140" stroke={c.primary} strokeWidth="0.8" opacity="0.2" />
          <line x1="200" y1="135" x2="220" y2="130" stroke={c.primary} strokeWidth="0.8" opacity="0.2" />
          {/* AI 라벨 */}
          <text x="200" y="170" textAnchor="middle" fill={c.primary} opacity="0.35" fontSize="12" fontWeight="600" fontFamily="sans-serif">AI</text>
          {/* 검색 결과 카드 */}
          <rect x="300" y="70" width="120" height="30" rx="6" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="0.8" />
          <rect x="312" y="80" width="60" height="4" rx="2" fill={c.primary} opacity="0.3" />
          <rect x="300" y="115" width="120" height="30" rx="6" fill={c.primary} opacity="0.06" stroke={c.primary} strokeWidth="0.8" />
          <rect x="312" y="125" width="55" height="4" rx="2" fill={c.primary} opacity="0.25" />
          <rect x="300" y="160" width="120" height="30" rx="6" fill={c.primary} opacity="0.05" stroke={c.primary} strokeWidth="0.8" />
          <rect x="312" y="170" width="65" height="4" rx="2" fill={c.primary} opacity="0.2" />
          {/* 연결 */}
          <line x1="255" y1="120" x2="295" y2="85" stroke={c.primary} strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
          <line x1="255" y1="130" x2="295" y2="130" stroke={c.primary} strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
          <line x1="255" y1="140" x2="295" y2="175" stroke={c.primary} strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
        </g>
      );

    case "eeat-content-strategy":
      // E-E-A-T 4개 기둥
      return (
        <g>
          {/* 4개 기둥 */}
          <rect x="95" y="100" width="60" height="120" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          <rect x="175" y="80" width="60" height="140" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          <rect x="255" y="90" width="60" height="130" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          <rect x="335" y="70" width="60" height="150" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.2" />
          {/* 라벨 */}
          <text x="125" y="165" textAnchor="middle" fill={c.primary} opacity="0.5" fontSize="16" fontWeight="700" fontFamily="sans-serif">E</text>
          <text x="205" y="155" textAnchor="middle" fill={c.primary} opacity="0.5" fontSize="16" fontWeight="700" fontFamily="sans-serif">E</text>
          <text x="285" y="160" textAnchor="middle" fill={c.primary} opacity="0.5" fontSize="16" fontWeight="700" fontFamily="sans-serif">A</text>
          <text x="365" y="150" textAnchor="middle" fill={c.primary} opacity="0.5" fontSize="16" fontWeight="700" fontFamily="sans-serif">T</text>
          {/* 상단 바 */}
          <rect x="85" y="55" width="320" height="8" rx="4" fill={c.primary} opacity="0.1" />
          {/* 장식 점 */}
          <circle cx="125" y="45" r="3" fill={c.primary} opacity="0.2" />
          <circle cx="205" y="45" r="3" fill={c.primary} opacity="0.2" />
          <circle cx="285" y="45" r="3" fill={c.primary} opacity="0.2" />
          <circle cx="365" y="45" r="3" fill={c.primary} opacity="0.2" />
          {/* 장식 */}
          <circle cx="50" cy="200" r="20" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.06" />
          <circle cx="440" cy="50" r="25" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.06" />
        </g>
      );

    case "geo-strategy-guide":
      // 지구본 + AI 회로
      return (
        <g>
          {/* 지구본 */}
          <circle cx="240" cy="125" r="65" fill="none" stroke={c.primary} strokeWidth="1.5" opacity="0.2" />
          <circle cx="240" cy="125" r="65" fill={c.primary} opacity="0.04" />
          {/* 위도/경도 선 */}
          <ellipse cx="240" cy="125" rx="65" ry="25" fill="none" stroke={c.primary} strokeWidth="0.8" opacity="0.1" />
          <ellipse cx="240" cy="125" rx="40" ry="65" fill="none" stroke={c.primary} strokeWidth="0.8" opacity="0.1" />
          <line x1="175" y1="125" x2="305" y2="125" stroke={c.primary} strokeWidth="0.8" opacity="0.1" />
          <line x1="240" y1="60" x2="240" y2="190" stroke={c.primary} strokeWidth="0.8" opacity="0.1" />
          {/* AI 노드들 */}
          <circle cx="310" cy="75" r="12" fill={c.primary} opacity="0.12" stroke={c.primary} strokeWidth="1" />
          <circle cx="340" cy="140" r="10" fill={c.primary} opacity="0.1" stroke={c.primary} strokeWidth="0.8" />
          <circle cx="160" cy="70" r="10" fill={c.primary} opacity="0.1" stroke={c.primary} strokeWidth="0.8" />
          <circle cx="140" cy="170" r="12" fill={c.primary} opacity="0.12" stroke={c.primary} strokeWidth="1" />
          {/* 연결선 */}
          <line x1="298" y1="82" x2="260" y2="100" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="3 3" />
          <line x1="330" y1="138" x2="290" y2="135" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="3 3" />
          <line x1="170" y1="75" x2="210" y2="100" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="3 3" />
          <line x1="152" y1="165" x2="195" y2="150" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="3 3" />
          {/* GEO 텍스트 */}
          <text x="240" y="130" textAnchor="middle" fill={c.primary} opacity="0.3" fontSize="18" fontWeight="700" fontFamily="sans-serif">GEO</text>
        </g>
      );

    /* ═══════════════════════════════════════════
       마케팅 가이드 (4개)
       ═══════════════════════════════════════════ */

    case "small-business-marketing-start":
      // 로켓 발사
      return (
        <g>
          {/* 로켓 본체 */}
          <path d="M240 60 C240 60 220 90 220 140 L260 140 C260 90 240 60 240 60Z" fill={c.primary} opacity="0.1" stroke={c.primary} strokeWidth="1.5" />
          {/* 로켓 창문 */}
          <circle cx="240" cy="105" r="10" fill={c.primary} opacity="0.15" stroke={c.primary} strokeWidth="1" />
          {/* 날개 */}
          <path d="M220 125 L200 145 L220 140Z" fill={c.primary} opacity="0.15" />
          <path d="M260 125 L280 145 L260 140Z" fill={c.primary} opacity="0.15" />
          {/* 화염 */}
          <path d="M225 140 Q240 180 255 140" fill={c.primary} opacity="0.2" />
          <path d="M230 140 Q240 170 250 140" fill={c.secondary} opacity="0.15" />
          {/* 연기/궤적 */}
          <circle cx="240" cy="195" r="8" fill={c.primary} opacity="0.08" />
          <circle cx="235" cy="210" r="12" fill={c.primary} opacity="0.06" />
          <circle cx="248" cy="225" r="10" fill={c.primary} opacity="0.04" />
          {/* 주변 별 */}
          <circle cx="150" cy="70" r="2" fill={c.primary} opacity="0.25" />
          <circle cx="330" cy="55" r="2.5" fill={c.primary} opacity="0.2" />
          <circle cx="120" cy="140" r="1.5" fill={c.primary} opacity="0.15" />
          <circle cx="360" cy="120" r="2" fill={c.primary} opacity="0.18" />
          <circle cx="100" cy="200" r="1.5" fill={c.primary} opacity="0.12" />
          <circle cx="380" cy="180" r="2" fill={c.primary} opacity="0.15" />
          {/* 장식 원 */}
          <circle cx="400" cy="60" r="30" fill="none" stroke={c.primary} strokeWidth="0.6" opacity="0.06" />
          <circle cx="80" cy="90" r="25" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.05" />
        </g>
      );

    case "keyword-selection-guide":
      // 돋보기 + 키워드 태그들
      return (
        <g>
          {/* 돋보기 */}
          <circle cx="190" cy="115" r="45" fill="none" stroke={c.primary} strokeWidth="2" opacity="0.25" />
          <circle cx="190" cy="115" r="30" fill={c.primary} opacity="0.04" />
          <line x1="222" y1="148" x2="255" y2="180" stroke={c.primary} strokeWidth="3" opacity="0.25" strokeLinecap="round" />
          {/* 키워드 태그들 */}
          <rect x="280" y="55" width="80" height="26" rx="13" fill={c.primary} opacity="0.12" stroke={c.primary} strokeWidth="0.8" />
          <rect x="292" y="64" width="50" height="4" rx="2" fill={c.primary} opacity="0.35" />
          <rect x="300" y="95" width="95" height="26" rx="13" fill={c.primary} opacity="0.1" stroke={c.primary} strokeWidth="0.8" />
          <rect x="312" y="104" width="65" height="4" rx="2" fill={c.primary} opacity="0.3" />
          <rect x="275" y="135" width="70" height="26" rx="13" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="0.8" />
          <rect x="287" y="144" width="40" height="4" rx="2" fill={c.primary} opacity="0.25" />
          <rect x="310" y="175" width="85" height="26" rx="13" fill={c.primary} opacity="0.06" stroke={c.primary} strokeWidth="0.8" />
          <rect x="322" y="184" width="55" height="4" rx="2" fill={c.primary} opacity="0.2" />
          {/* 연결선 */}
          <line x1="235" y1="100" x2="280" y2="68" stroke={c.primary} strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
          <line x1="235" y1="115" x2="300" y2="108" stroke={c.primary} strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
          <line x1="235" y1="130" x2="275" y2="148" stroke={c.primary} strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
          {/* 장식 */}
          <circle cx="80" cy="60" r="20" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.06" />
        </g>
      );

    case "marketing-quote-checklist":
      // 견적서 문서 + 체크표시
      return (
        <g>
          {/* 견적서 문서 */}
          <rect x="140" y="35" width="200" height="200" rx="10" fill={c.primary} opacity="0.05" stroke={c.primary} strokeWidth="1.5" />
          {/* 헤더 */}
          <rect x="140" y="35" width="200" height="30" rx="10" fill={c.primary} opacity="0.1" />
          <rect x="165" y="46" width="70" height="5" rx="2.5" fill={c.primary} opacity="0.35" />
          {/* 항목들 */}
          {[80, 105, 130, 155, 180, 205].map((y, i) => (
            <g key={i}>
              <rect x="165" y={y} width={100 + (i % 2) * 20} height="4" rx="2" fill="white" opacity="0.1" />
              <rect x="300" y={y} width="25" height="4" rx="2" fill={c.primary} opacity={0.15 + i * 0.03} />
            </g>
          ))}
          {/* 합계 줄 */}
          <line x1="165" y1="222" x2="325" y2="222" stroke={c.primary} strokeWidth="0.8" opacity="0.15" />
          <rect x="280" y="226" width="45" height="5" rx="2" fill={c.primary} opacity="0.35" />
          {/* 체크마크 스탬프 */}
          <circle cx="365" cy="80" r="28" fill="none" stroke={c.primary} strokeWidth="2" opacity="0.2" transform="rotate(-15,365,80)" />
          <polyline points="350,80 360,92 382,68" fill="none" stroke={c.primary} strokeWidth="2.5" opacity="0.35" strokeLinecap="round" strokeLinejoin="round" />
          {/* 장식 */}
          <circle cx="75" cy="135" r="25" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.06" />
        </g>
      );

    case "marketing-channel-selection":
      // 여러 채널 아이콘이 중앙으로 모이는 구조
      return (
        <g>
          {/* 중앙 허브 */}
          <circle cx="240" cy="135" r="25" fill={c.primary} opacity="0.1" stroke={c.primary} strokeWidth="1.5" />
          <circle cx="240" cy="135" r="10" fill={c.primary} opacity="0.2" />
          {/* 채널 노드 1 — 블로그 */}
          <rect x="80" y="55" width="60" height="42" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1" />
          <rect x="90" y="64" width="30" height="3" rx="1.5" fill={c.primary} opacity="0.35" />
          <rect x="90" y="72" width="40" height="2.5" rx="1" fill="white" opacity="0.1" />
          <rect x="90" y="78" width="35" height="2.5" rx="1" fill="white" opacity="0.07" />
          <line x1="140" y1="76" x2="215" y2="125" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
          {/* 채널 노드 2 — SNS */}
          <circle cx="370" cy="70" r="25" fill="none" stroke={c.primary} strokeWidth="1" opacity="0.2" />
          <circle cx="370" cy="70" r="12" fill={c.primary} opacity="0.08" />
          <circle cx="370" cy="66" r="4" fill={c.primary} opacity="0.25" />
          <line x1="345" y1="78" x2="265" y2="125" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
          {/* 채널 노드 3 — 광고 */}
          <rect x="340" y="170" width="60" height="42" rx="8" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1" />
          <text x="370" y="197" textAnchor="middle" fill={c.primary} opacity="0.3" fontSize="16" fontFamily="sans-serif">AD</text>
          <line x1="340" y1="185" x2="265" y2="148" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
          {/* 채널 노드 4 — 플레이스 */}
          <path d="M110 190 C110 190 95 205 95 215 C95 225 102 230 110 230 C118 230 125 225 125 215 C125 205 110 190 110 190Z" fill={c.primary} opacity="0.1" stroke={c.primary} strokeWidth="1" />
          <circle cx="110" cy="213" r="4" fill={c.primary} opacity="0.2" />
          <line x1="125" y1="205" x2="215" y2="148" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
          {/* 채널 노드 5 — 이메일 */}
          <rect x="180" y="20" width="50" height="35" rx="6" fill="none" stroke={c.primary} strokeWidth="1" opacity="0.2" />
          <polyline points="182,22 205,42 228,22" fill="none" stroke={c.primary} strokeWidth="0.8" opacity="0.2" />
          <line x1="205" y1="55" x2="230" y2="110" stroke={c.primary} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
          {/* 장식 */}
          <circle cx="440" cy="135" r="20" fill="none" stroke={c.primary} strokeWidth="0.5" opacity="0.06" />
        </g>
      );

    default:
      return (
        <g>
          <rect x="160" y="60" width="160" height="110" rx="12" fill={c.primary} opacity="0.08" stroke={c.primary} strokeWidth="1.5" />
          <rect x="176" y="82" width="80" height="5" rx="2.5" fill={c.primary} opacity="0.4" />
          <rect x="176" y="96" width="120" height="4" rx="2" fill="white" opacity="0.15" />
          <rect x="176" y="108" width="100" height="4" rx="2" fill="white" opacity="0.1" />
          <rect x="176" y="120" width="110" height="4" rx="2" fill="white" opacity="0.08" />
          <circle cx="380" cy="55" r="35" fill="none" stroke={c.primary} strokeWidth="0.8" opacity="0.1" />
        </g>
      );
  }
}

export default function BlogThumbnail({
  category,
  slug,
}: {
  category: string;
  title: string;
  slug: string;
}) {
  const colors = categoryAccent[category] ?? categoryAccent["블로그 마케팅"];

  return (
    <div className="aspect-[16/9] relative overflow-hidden">
      <svg
        viewBox="0 0 480 270"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 다크 배경 */}
        <defs>
          <linearGradient id={`bg-${slug}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <pattern id={`grid-${slug}`} width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="0.6" fill="white" opacity="0.04" />
          </pattern>
        </defs>

        <rect width="480" height="270" fill={`url(#bg-${slug})`} />
        <rect width="480" height="270" fill={`url(#grid-${slug})`} />

        {/* 글별 일러스트 */}
        <PostIllustration slug={slug} c={colors} />
      </svg>
    </div>
  );
}
