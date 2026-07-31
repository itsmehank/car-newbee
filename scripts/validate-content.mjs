#!/usr/bin/env node
// src/content/ 콘텐츠 검수 스크립트 (Step 6)
// 검사: ① §2 모든 항목이 guides.json에 존재 ② 모든 가이드에 출처 1개 이상
//       ③ timeline 이벤트가 유효한 guide id 참조 ④ 스키마 필수 필드
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { checkTone } from "./check-tone.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(resolve(root, p), "utf-8"));
const guides = read("src/content/guides.json");
const timeline = read("src/content/timeline.json");
const mx5 = read("src/content/mx5-constants.json");

// 기획 문서 §2 항목 → 이를 커버하는 guide id (부착물 세팅·기능 숙지는 p1-features 공유)
const S2 = [
  ["P0 신차 등록 절차", "p0-registration"],
  ["P0 자동차세", "p0-car-tax"],
  ["P0 자동차보험 가입", "p0-insurance"],
  ["P0 운전자보험", "p0-driver-insurance"],
  ["P0 신차 인수 검수", "p0-inspection-handover"],
  ["P0 레몬법", "p0-lemon-law"],
  ["P0 무상보증 확인", "p0-warranty"],
  ["P0 새차증후군", "p0-new-car-syndrome"],
  ["P1 운전 연수", "p1-driving-practice"],
  ["P1 주차 연수", "p1-parking-practice"],
  ["P1 차량 기능 숙지", "p1-features"],
  ["P1 하이브리드 특화", "p1-hybrid-driving"],
  ["P1 주유", "p1-refueling"],
  ["P1 부착물 세팅", "p1-features"],
  ["P1 초기 길들이기", "p1-break-in"],
  ["P2 소모품 주기표", "p2-consumables"],
  ["P2 셀프 점검 루틴", "p2-self-check"],
  ["P2 계기판 경고등", "p2-warning-lights"],
  ["P2 세차", "p2-washing"],
  ["P2 계절 관리", "p2-seasonal"],
  ["P2 정기검사", "p2-inspection"],
  ["P2 서비스센터 이용법", "p2-service-center"],
  ["P3 사고 발생 시", "p3-accident"],
  ["P3 과실비율 분쟁", "p3-fault-ratio"],
  ["P3 배터리 방전", "p3-battery-discharge"],
  ["P3 타이어 펑크", "p3-tire-puncture"],
  ["P3 주차 중 사고", "p3-parking-accident"],
  ["P3 침수/폭설 재해", "p3-disaster"],
];

const ids = new Set(guides.map((g) => g.id));
const REQUIRED = ["id", "phase", "title", "summary", "body_md", "checklist", "sources", "flags", "car_scope", "source_files"];
const problems = [];

// ① §2 커버리지
const s2Missing = S2.filter(([, gid]) => !ids.has(gid));
s2Missing.forEach(([item, gid]) => problems.push(`§2 미커버: ${item} → guide '${gid}' 없음`));

// ② 출처·필수 필드·요약 3문장
for (const g of guides) {
  for (const f of REQUIRED) if (!(f in g)) problems.push(`[${g.id}] 필수 필드 누락: ${f}`);
  if (!Array.isArray(g.sources) || g.sources.length < 1) problems.push(`[${g.id}] 출처 0개`);
  if (!Array.isArray(g.summary) || g.summary.length !== 3) problems.push(`[${g.id}] summary 3문장 아님(${g.summary?.length})`);
  if (!Array.isArray(g.checklist) || g.checklist.length < 1) problems.push(`[${g.id}] checklist 비어있음`);
}

// ③ timeline → guide id 유효성
for (const e of timeline) if (!ids.has(e.guide_id)) problems.push(`timeline '${e.id}' → 없는 guide '${e.guide_id}'`);

// ④ mx5 미확인 노출
const unverified = mx5.unverified ?? [];

// ⑤ 문체 — 화면 본문의 합쇼체만 오류로 본다.
//    용어집 정의는 이슈 #4 범위라 지금 오류로 걸면 통과할 수 없어 건수만 표시한다.
const tone = checkTone();
for (const r of tone.body) problems.push(`[${r.id}:${r.line}] 본문에 격식체 — ${r.text.slice(0, 60)}`);
for (const r of tone.tips) problems.push(`[${r.id}:${r.line}] 실전 팁에 격식체 — ${r.text.slice(0, 60)}`);

// ── 리포트 ──
const byPhase = [0, 1, 2, 3].map((p) => `P${p} ${guides.filter((g) => g.phase === p).length}`).join(" / ");
console.log("=== 콘텐츠 검수 리포트 ===");
console.log(`가이드: ${guides.length}개 (${byPhase})`);
console.log(`타임라인 이벤트: ${timeline.length}개`);
console.log(`§2 항목 커버리지: ${S2.length - s2Missing.length}/${S2.length}`);
console.log(`단독출처 플래그 가이드: ${guides.filter((g) => g.flags.includes("단독출처")).length}개`);
console.log(`MX5 상수 미확인 잔여: ${unverified.length}건${unverified.length ? " — " + unverified.join("; ") : ""}`);
console.log(`문체(합쇼체): 본문 ${tone.bodyCount}건 / 실전 팁 ${tone.tipsCount}건 / 용어집 ${tone.terms.length}건(이슈 #4)`);
console.log("");
if (problems.length === 0) {
  console.log("✅ 문제 없음 — 모든 검사 통과");
  process.exit(0);
} else {
  console.log(`❌ 문제 ${problems.length}건:`);
  problems.forEach((p) => console.log("  - " + p));
  process.exit(1);
}
