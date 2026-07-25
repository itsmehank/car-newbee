// 정적 콘텐츠 로더 — 빌드 시 JSON 주입 (백엔드 없음)
import guides from "@/content/guides.json";
import timeline from "@/content/timeline.json";
import mx5 from "@/content/mx5-constants.json";

export { guides, timeline, mx5 };

export const PHASES = [
  { n: 0, label: "출고 전후", range: "D-7 ~ D+7" },
  { n: 1, label: "첫 한 달 — 몸에 익히기", range: "D+0 ~ D+30" },
  { n: 2, label: "상시 관리", range: "습관화" },
  { n: 3, label: "상황 대응", range: "필요 시 즉시" },
  { n: 4, label: "싼타페 공부하기", range: "천천히 · 알아가기" },
];

export const guidesByPhase = (phase) => guides.filter((g) => g.phase === phase);

// order 기준 정렬(이전/다음·위치·단계 페이지 공용)
export const guidesInOrder = (phase) =>
  guidesByPhase(phase).sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export const getGuide = (id) => guides.find((g) => g.id === id);

// 단계(섹션) 개괄 — 흐름 요약
export const PHASE_OVERVIEW = {
  0: "차를 받기 전엔 보험, 받는 날엔 등록·검수, 받은 뒤엔 세금·보증·리콜을 챙기는 순서예요. 아래를 위에서부터 하나씩 따라가면 됩니다.",
  1: "첫 한 달은 차에 익숙해지는 기간이에요. 살살 길들이기부터 시작해 기능·주유·운전·주차를 차례로 익히세요.",
  2: "상시 관리는 습관이 핵심이에요. 월 1회 셀프 점검을 기본으로, 소모품 주기·경고등·세차·계절 관리를 챙기면 됩니다.",
  4: "급하지 않게 천천히 내 차를 알아가는 코너예요. 용품 용어부터 기본 버튼·주행보조·전용 꿀팁까지, 위에서부터 하나씩 눌러보며 익히면 됩니다.",
};

// 출고 전/당일/직후 서브섹션(Phase 0)
export const STAGES = [
  { key: "pre", label: "출고 전", desc: "차를 받기 전에 준비할 것 — 보험이 가장 급해요." },
  { key: "day", label: "출고 당일", desc: "차를 받는 날 현장에서 — 등록과 꼼꼼한 검수." },
  { key: "post", label: "출고 직후", desc: "받은 뒤 며칠 안에 — 세금·보증·리콜 확인." },
];

export const getEventForGuide = (id) => timeline.find((e) => e.guide_id === id);
