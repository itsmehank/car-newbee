#!/usr/bin/env node
// 문체 검사 — 본문(body_easy_md)의 기준 문체는 해요체. 합쇼체가 남아 있으면 잡는다.
// 규칙 전문은 작업 저장소의 docs/CONTENT-STYLE.md에 있다(공개 리포에는 docs/를 올리지 않는다).
//
// 스캔 대상은 3곳이고, 모두 화면에 보이는 글이라 위반은 오류다(validate-content.mjs 가 배포를 막는다).
//   body_easy_md  — 화면 본문
//   field_tips_md — "실전 팁" 섹션. 인용 발췌의 개조식은 그대로 두고 연결문·콜아웃만 본다
//   glossary.json — 툴팁 정의
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(resolve(root, p), "utf-8"));

// 합쇼체 4종: 평서(~니다)·의문(~니까)·명령(~시오)·청유(~ㅂ시다)
// 종결 기호에 작은따옴표류를 포함해야 인용 끝에 붙은 어미를 놓치지 않는다.
const HAPSYO = /(니다|니까|시오|ㅂ시다|읍시다)(?=[.!?)\]”"’']|\s*$)/g;

// 원문을 그대로 둬야 하는 곳. 지우면 배포가 막히므로 사유를 함께 남긴다.
// 줄번호는 편집에 밀리므로 신뢰하지 않고, 줄에 포함된 고유 문구로 대조한다.
// 필드까지 지정해야 같은 문구가 다른 필드에 들어왔을 때 조용히 새지 않는다.
const ALLOW = [
  ["p2-warning-lights", "body_easy_md", "하이브리드 시스템을 점검하십시오", "계기판 경고 메시지 원문"],
  ["p2-warning-lights", "body_easy_md", "안전한 곳에 정차하십시오\"**: 시스템 문제", "계기판 경고 메시지 원문"],
  ["p2-warning-lights", "body_easy_md", "시동을 걸지 마십시오", "계기판 경고 메시지 원문"],
  ["p2-warning-lights", "body_easy_md", "전원 공급 장치 점검! 안전한 곳에 정차하십시오", "계기판 경고 메시지 원문"],
  ["p2-warning-lights", "body_easy_md", "배터리 시스템 냉각수를 보충하십시오", "계기판 경고 메시지 원문"],
  ["p2-warning-lights", "body_easy_md", "\"...안전한 곳에 정차하십시오\"라는 메시지", "계기판 경고 메시지 원문"],
  ["p4-tips", "body_easy_md", "무리한 힘을 가하지 마십시오", "매뉴얼 안전 경고문 인용"],
  ["p4-tips", "body_easy_md", "절대 분해하거나 조립하지 마십시오", "매뉴얼 안전 경고문 인용"],
  ["p4-adas", "body_easy_md", "항상 스티어링 휠을 잡고 주행하십시오", "매뉴얼 안전 경고문 인용"],
  ["p0-inspection-handover", "body_easy_md", "저도 사진 찍어 두겠습니다", "딜러에게 말할 대사"],
  ["p0-inspection-handover", "body_easy_md", "위 내용 확인 부탁드립니다", "딜러에게 말할 대사"],
  ["p1-features", "body_easy_md", "잔액이 ○○원입니다", "하이패스 안내 음성"],
  ["p4-features", "body_easy_md", "설정 1에 저장되었습니다", "계기판 표시 문구 원문"],
];

// 한 줄에 보존 대상과 변환 대상이 섞여 있을 수 있어, 줄이 아니라 매치 단위로 센다.
const allowedCount = (id, field, line) =>
  ALLOW.filter(([gid, f, phrase]) => gid === id && f === field && line.includes(phrase)).length;

const scanText = (id, field, text) => {
  const found = [];
  text.split("\n").forEach((line, idx) => {
    const hits = line.match(HAPSYO);
    if (!hits) return;
    const extra = hits.length - allowedCount(id, field, line);
    if (extra > 0) found.push({ id, line: idx + 1, count: extra, text: line.trim() });
  });
  return found;
};

export function checkTone() {
  const guides = read("src/content/guides.json");
  const glossary = read("src/content/glossary.json");

  const body = guides.flatMap((g) => scanText(g.id, "body_easy_md", g.body_easy_md ?? ""));
  const tips = guides.flatMap((g) => scanText(g.id, "field_tips_md", g.field_tips_md ?? ""));
  const terms = Object.entries(glossary)
    .filter(([, def]) => typeof def === "string" && HAPSYO.test(def) && (HAPSYO.lastIndex = 0) === 0)
    .map(([term]) => term);

  const sum = (rows) => rows.reduce((n, r) => n + r.count, 0);
  return { body, tips, terms, bodyCount: sum(body), tipsCount: sum(tips) };
}

// 단독 실행 시에만 리포트를 찍는다. validate-content.mjs는 checkTone()만 가져다 쓴다.
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { body, tips, terms, bodyCount, tipsCount } = checkTone();
  console.log("=== 문체 검사 (합쇼체 → 해요체) ===");
  console.log(`허용 목록: ${ALLOW.length}건 (경고 메시지·매뉴얼 인용·대사)`);
  console.log("");
  console.log(`① body_easy_md  : ${bodyCount}건  ${bodyCount ? "❌" : "✅"}`);
  for (const r of body) console.log(`   [${r.id}:${r.line}] ${r.text.slice(0, 90)}`);
  console.log("");
  console.log(`② field_tips_md : ${tipsCount}건  ${tipsCount ? "❌" : "✅"}`);
  for (const r of tips) console.log(`   [${r.id}:${r.line}] ${r.text.slice(0, 90)}`);
  console.log("");
  console.log(`③ glossary 정의 : ${terms.length}건  ${terms.length ? "❌" : "✅"}`);
  if (terms.length) console.log(`   ${terms.join(" · ")}`);
  process.exit(bodyCount || tipsCount || terms.length ? 1 : 0);
}
