// 독립 자동차 시장 분석 자료 — 이 파일만 편집하면 연구 페이지에 반영됩니다.
// (1) 아래 빈 따옴표에 직접 조사한 내용을 입력하세요.
// (2) 차량을 추가할 때 vehicles 배열의 주석 예시를 복사하세요.
// (3) 검증을 마치면 status를 "draft"에서 "published"로 바꾸세요.
// 주의: 공개 자료와 개인 분석만 사용하세요. 내부 가격표·미공개 영업정보는 입력하지 마세요.
window.KIA_MARKET_DATA = {
  status: "draft", // "draft" | "published" — published면 메인 포트폴리오에도 표시
  lastUpdated: "", // 조사/수정일 예: "2026-11-19"
  scope: {
    market: "Russia", // 시장
    segment: "",      // 분석 차급 예: "C-SUV" (직접 선택)
    period: "",       // 조사 기간 예: "2026 Q4"
    focusModel: ""    // 집중 분석할 기아 모델 (있는 경우)
  },
  researchQuestion: "", // 핵심 질문 1문장: 무엇을 비교하고 어떤 결정을 돕는가?
  marketSummary: "",    // 시장 규모/성장/정책 등: 수치, 기간, 출처 포함
  targetCustomer: "",   // 고객 니즈/구매 기준, 그 근거
  method: "",           // 비교 기준: 동일 날짜, 트림/가격 조건, MSRP/실거래가 구분
  // 각 행에 데이터 1개씩. priceRub는 숫자만 입력. 자료 없는 항목은 빈 문자열로.
  vehicles: [
    // { brand: "Kia", model: "조사한 모델명", trim: "트림", priceRub: 0, powertrain: "", highlights: "", date: "YYYY-MM-DD", sourceUrl: "https://..." },
    // { brand: "경쟁 브랜드", model: "모델명", trim: "트림", priceRub: 0, powertrain: "", highlights: "", date: "YYYY-MM-DD", sourceUrl: "https://..." },
  ],
  positioningInsight: "", // 동일 조건 가격·사양 비교 후 확인한 차이
  priceInsight: "",       // 가격 포지셔닝과 분석 시사점
  recommendations: [
    // { title: "제안 1", detail: "권고 내용", evidence: "이 제안을 뒷받침하는 데이터/출처" },
  ],
  risksAndLimits: "",    // 표본·환율·프로모션·수입 방식 등 해석상의 한계
  sources: [
    // { title: "공식 가격표/리서치 보고서", url: "https://...", accessed: "YYYY-MM-DD" },
  ]
};
