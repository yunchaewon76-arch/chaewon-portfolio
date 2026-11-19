# Kia Product Specialist 지원용 — 러시아 자동차 시장 분석 작성 가이드

이 파일은 `kia-market-analysis.html` 페이지에 본인의 분석을 넣는 방법을 설명합니다.
**편집할 파일은 [kia-market-data.js](./kia-market-data.js) 하나입니다.** 최초 상태는 `status: "draft"`라서 포트폴리오의 메인 프로젝트 목록에 보이지 않습니다.

## 권장 주제
**“러시아 [선택한 차급] 시장에서 Kia [선택한 모델]과 경쟁 모델의 가격·상품 구성은 얼마나 경쟁력 있는가?”**
공식적으로 판매하지 않거나 공식 가격이 확인되지 않는 모델은 무리하게 비교하지 마세요. 이 경우에는 '제품 포지셔닝 시나리오'로 명시하고, 동종 시장 경쟁 상황 자체에 초점을 맞추어도 좋습니다.

## 조사 순서 (최소 1페이지 분석)
1. **범위 정하기:** 차급 1개(C-SUV, 세단 등), 모델 3~4개, 비교 기준일 1개를 정합니다.
2. **시장 맥락:** 해당 기간 신차 판매 흐름, 주요 브랜드/모델, 가격을 바꾸는 제도·환율·유통 이슈 중 분석과 직접 관련된 내용을 2~3개 찾습니다.
3. **가격·트림 비교:** 각 제조사 또는 딜러의 공식 공개 가격·트림·주요 옵션을 수집합니다. MSRP/권장가격과 딜러 실판매가를 섞지 않고, 같은 날 또는 가까운 날짜 기준으로 기록합니다.
4. **고객 관점 해석:** 가격 차이만 나열하지 말고 같은 예산에서 어떤 기능/가치를 선택할 수 있는지 기술합니다.
5. **2~3개의 제안:** 가격 포지셔닝, 옵션 패키지, 제품 메시지 또는 출시·판매 준비 관점의 실무적 제안을 쓰고 근거와 한계를 명시합니다.

## 권장 공개 출처 (2026-11 기준)
- **AUTOSTAT** — 러시아 신차 등록·판매 통계: https://eng.autostat.ru/
- **AEB 자동차 제조사 위원회** — 판매 통계, 보도자료: https://aebrus.ru/en/media/press-releases/sales-of-cars-and-light-commercial-vehicles.php
- **러시아 중앙은행** — 환율·거시 지표: https://www.cbr.ru/
- **브랜드/공식 딜러 사이트** — 실제 비교하는 모델의 가격표, 사양, 프로모션 조건. 각 차량의 출처 링크를 `vehicles`에 기록합니다.

**주의:** AUTOSTAT와 AEB의 판매 집계 범위가 다를 수 있습니다. 신차 승용차인지, LCV 포함인지, 등록 기준인지 꼭 확인하세요.

## kia-market-data.js 입력 예시 (구조 설명용, 실제 수치 아님)
```js
scope: {
  market: "Russia",
  segment: "조사할 차급",
  period: "2026년 10~11월",
  focusModel: "선정한 기아 모델"
},
vehicles: [
  {
    brand: "조사한 브랜드",
    model: "모델명",
    trim: "트림명",
    priceRub: 0, // 0은 미입력 표시. 확인한 숫자로 바꿉니다.
    powertrain: "엔진/구동 방식",
    highlights: "비교 기준으로 삼은 주요 옵션",
    date: "2026-11-19",
    sourceUrl: "https://해당-브랜드의-실제-가격표-링크"
  }
],
recommendations: [
  {
    title: "핵심 제안",
    detail: "무엇을 왜 제안하는지",
    evidence: "분석 표에서 확인한 근거 + 출처"
  }
]
```

## GitHub에서 직접 수정하는 방법
1. [kia-market-data.js 편집 화면](https://github.com/yunchaewon76-arch/chaewon-portfolio/edit/main/kia-market-data.js)을 엽니다.
2. 빈 문자열(`""`)에 조사 결과를 입력하고, 배열(`vehicles`, `sources`, `recommendations`)에 항목을 복사해 추가합니다. 문자열 안의 따옴표는 `\"`로 이스케이프하세요.
3. **Commit changes**를 눌러 저장합니다. Vercel의 GitHub 자동 배포가 연결되어 있으면 변경사항이 배포됩니다.
4. [연구 페이지](https://chaewon-portfolio-lake.vercel.app/kia-market-analysis.html?lang=ru)를 확인합니다.
5. 검증·교정이 끝나면 `status: "draft"`를 `status: "published"`로 변경해 저장하세요. 그때부터 메인 포트폴리오 프로젝트 목록에 자동 표시됩니다.

## 작성 완료 확인표
- [ ] 가격마다 날짜·출처·가격 유형 기재
- [ ] 같은 차급·유사한 트림끼리 비교
- [ ] 판매량/점유율의 기간과 분모 명시
- [ ] 사실, 해석, 권고를 명확히 구분
- [ ] 본인이 직접 작성한 분석이라는 점 명시
- [ ] 기아/현 직장 내부 정보나 비공개 데이터 제외
- [ ] 러시아어 또는 영어로 최종 교정
- [ ] `status`를 `published`로 변경

원한다면 ChatGPT에 네가 조사한 표, 링크, 메모를 붙여 넣고 "이 내용을 kia-market-data.js에 반영해줘"라고 요청해도 됩니다.
