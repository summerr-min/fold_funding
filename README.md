# FOLD 펀딩 랜딩 페이지

접으면 부피가 줄어드는 가상의 텀블러 `FOLD`를 소개하는 펀딩 랜딩 페이지입니다. 제품의 핵심 특징에서 펀딩 현황, 상세 구조, 색상과 브랜드 스토리로 자연스럽게 이어지도록 구성했습니다.

## 작업 범위

### 직접 기획 및 구현

- 접이식 텀블러 아이디어와 랜딩 페이지의 콘텐츠 흐름 기획
- HTML 시맨틱 마크업과 CSS 반응형 레이아웃 구현
- SVG 도형으로 제품 이미지 제작
- Vanilla JavaScript로 접기·펼치기, 색상 선택, 테마 전환 구현

### AI를 활용한 기능 개선

- GSAP·ScrollTrigger를 활용한 제품 구조 및 접힘 스크롤 인터랙션 적용
- 320px·768px·1440px 화면 구성 점검과 모바일 내비게이션 추가
- 키보드 조작, ARIA 상태 안내와 모션 감소 설정 대응
- 애니메이션 라이브러리 미로딩 시 핵심 콘텐츠와 기본 조작을 유지하는 대체 동작 적용

## 사용 기술

- HTML5
- CSS3
- Vanilla JavaScript
- SVG
- GSAP
- ScrollTrigger

## 주요 기능

- SVG 텀블러 접기·펼치기
- 제품 색상 선택
- 다크·라이트 테마 전환 및 선택 저장
- 펀딩 달성률 카운트업과 게이지
- 제품 구조·접힘·치수 단계별 설명
- 모바일 내비게이션
- 페이지 스크롤 진행률

## 폴더 구조

```text
fold_funding
├─ index.html
├─ css
│  ├─ base.css
│  ├─ layout.css
│  └─ sections.css
└─ js
   ├─ scroll.js
   ├─ hero.js
   ├─ funding.js
   ├─ detail.js
   ├─ navigation.js
   └─ theme.js
```

## 안내

- FOLD는 포트폴리오를 위해 제작한 가상의 제품입니다.
- 펀딩 금액, 후원자 수와 연락처는 예시이며 실제 결제 기능은 없습니다.
