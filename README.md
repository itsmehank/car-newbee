# car-newbee — 첫차 가이드 (싼타페 MX5 HEV)

첫차(신차 하이브리드)를 산 사람이 등록 → 보험 → 기능 숙지 → 상시 관리 → 사고 대응까지
시간 순서대로 따라갈 수 있는 개인용 가이드 웹앱.

- React(Vite) SPA, 백엔드 없음. 콘텐츠는 빌드 시 `src/content/*.json`으로 주입.
- 진행 상태는 브라우저 localStorage에 저장.

## 개발
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 생성 (base: /car-newbee/)
```

## 배포
GitHub Pages 프로젝트 페이지(`/car-newbee/`)로 서빙. `dist/`를 `gh-pages` 브랜치에 배포.

> 콘텐츠는 검증된 출처 기반이며 법·제도 정보는 기준연도를 확인하세요. 본인 참고용.
