#!/usr/bin/env node
// 용어집(툴팁) 검사 — src/components/Markdown.jsx 의 매칭 로직을 그대로 재현한다.
// 규칙 전문은 작업 저장소의 docs/CONTENT-STYLE.md에 있다.
//
// 단순 문자열 검색으로는 판정할 수 없다. 렌더 결과가 아래 4가지에 좌우되기 때문이다.
//   ① 툴팁이 걸리는 곳은 3군데 — 쉬운 설명 / 접기 안 원문(body_md) / 실전 팁
//   ② "## " 헤딩은 <h2>로 평문 렌더되어 대상이 아니다 (GuideDetailPage.jsx:134)
//   ③ used 세트 때문에 한 <Markdown> 안에서 용어는 첫 등장 1회만 감싼다
//   ④ 매칭은 원문이 아니라 "파싱된 텍스트 노드" 단위다. 강조·코드·링크가 텍스트를 쪼갠다
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(resolve(root, p), "utf-8"));

// Markdown.jsx 와 같은 값 — 이 목록이 바뀌면 여기도 맞춰야 한다
const NO_WRAP = new Set(["a", "code", "gterm", "summary"]);

// 낱말이 잘려 보이지만 뜻이 틀리지 않아 그대로 두는 것. [가이드 id, 용어, 사유]
// 본문을 고치는 편이 손해가 클 때만 쓴다. 목록이 낡으면 아래 staleAllows 가 알려준다.
const ALLOW_FP = [
  ["p0-insurance", "할증", "'할증기준금액'(약관 용어) 안쪽. 같은 섹션에서 긴 키가 이미 소비돼 생김 — 뜻은 틀리지 않다"],
  ["p3-disaster", "자차", "'자차보험' 안쪽. 바로 뒤에 '(자기차량손해)'로 풀어 써 있다"],
];

// 용어 뒤에 붙는 것이 조사면 정상 매칭이다. 낱말이 이어지는 경우와 구분한다.
const JOSA =
  /^(은|는|이|가|을|를|의|에|에서|에게|한테|께서|와|과|랑|이랑|로|으로|도|만|만큼|부터|까지|뿐|대로|마저|조차|밖에|커녕|씩|째|라도|이라도|든지|이든|라|이라|이나|나|보다|처럼|마다|이며|며|이고|고|인|한|할|하는|하면|해|했|이다|입니다|예요|이에요|이라고|라고)/;

const proc = unified().use(remarkParse).use(remarkGfm).use(remarkRehype, { allowDangerousHtml: true });
const rawProc = unified().use(rehypeRaw);

// Markdown.jsx:11 fixBold 와 동일 — 렌더 전에 **볼드**를 <strong>으로 바꾼다.
// 이걸 빼면 한글 조사가 붙은 볼드에서 텍스트 노드가 실제와 다르게 쪼개진다.
const fixBold = (md) => (md ?? "").replace(/\*\*(?!\s)([^\n*]+?)(?<!\s)\*\*/g, "<strong>$1</strong>");

// NO_WRAP 밖의 텍스트 노드만 모은다 = 실제로 용어 매칭이 일어나는 문자열
function textNodes(md) {
  if (!md) return [];
  const src = fixBold(md);
  const tree = rawProc.runSync(proc.runSync(proc.parse(src)));
  const out = [];
  (function visit(node, noWrap) {
    for (const child of node.children ?? []) {
      if (child.type === "text") {
        if (!noWrap) out.push(child.value);
      } else if (child.type === "element") {
        visit(child, noWrap || NO_WRAP.has(child.tagName));
      } else {
        visit(child, noWrap);
      }
    }
  })(tree, false);
  return out;
}

// GuideDetailPage.jsx:20 splitSections 와 동일 — "## " 줄은 제목으로 빠진다
function splitSections(md) {
  const lead = [];
  const sections = [];
  let cur = null;
  for (const line of (md ?? "").split("\n")) {
    if (/^##\s+/.test(line)) sections.push((cur = []));
    else if (cur) cur.push(line);
    else lead.push(line);
  }
  return [lead.join("\n").trim(), ...sections.map((s) => s.join("\n").trim())].filter(Boolean);
}

// 한 가이드가 만들어내는 <Markdown> 인스턴스들. used 세트는 인스턴스마다 새로 생긴다.
function instances(g) {
  const src = g.body_easy_md ?? g.body_md;
  const out = splitSections(src).map((md) => ({ where: "본문", md }));
  if (g.body_easy_md && g.body_md) out.push({ where: "원문(접기)", md: g.body_md });
  if (g.field_tips_md) out.push({ where: "실전 팁", md: g.field_tips_md });
  return out;
}

export function checkGlossary() {
  const glossary = read("src/content/glossary.json");
  const guides = read("src/content/guides.json");
  const TERMS = Object.keys(glossary).sort((a, b) => b.length - a.length);

  const alive = new Map(); // term → [{guide, where}]
  const falsePositives = []; // 다른 낱말 안에서 잘려 잡힌 것

  for (const g of guides) {
    for (const { where, md } of instances(g)) {
      const used = new Set();
      for (const text of textNodes(md)) {
        // Markdown.jsx splitText 와 같은 절차: 가장 이른 위치 우선, 첫 등장 1회
        let rest = text;
        let offset = 0;
        while (rest) {
          let best = null;
          for (const t of TERMS) {
            if (used.has(t)) continue;
            const idx = rest.indexOf(t);
            if (idx >= 0 && (best === null || idx < best.idx)) best = { idx, term: t };
          }
          if (!best) break;
          const at = offset + best.idx;
          const before = text[at - 1] ?? "";
          const after = text.slice(at + best.term.length);
          // 다른 낱말 중간에서 잘린 것을 잡는다. 문자 종류마다 판정이 다르다.
          //   한글 용어 — 앞뒤에 한글이 붙으면 잘린 것: 구|성에|서, 주|차선, 송풍|구, 중재|규정
          //   영문 용어 — 앞뒤에 영문이 붙으면 잘린 것: N|SCC
          // 단 영문 용어에 한글이 붙는 것(고RPM)은 용어가 온전해 오탐이 아니고,
          // 한글 용어 뒤의 조사(은/는/이/가…)도 정상이므로 제외한다.
          const korHead = /^[가-힣]/.test(best.term);
          const korTail = /[가-힣]$/.test(best.term);
          const cutBefore = korHead ? /[가-힣]/.test(before) : /[A-Za-z]/.test(before);
          const cutAfter = korTail
            ? /^[가-힣]/.test(after) && !JOSA.test(after)
            : /^[A-Za-z]/.test(after);
          if (cutBefore || cutAfter) {
            falsePositives.push({
              guide: g.id, where, term: best.term, side: cutBefore ? "앞" : "뒤",
              context: text.slice(Math.max(0, at - 14), at + best.term.length + 8).replace(/\n/g, " "),
            });
          }
          if (!alive.has(best.term)) alive.set(best.term, []);
          alive.get(best.term).push({ guide: g.id, where });
          used.add(best.term);
          offset = at + best.term.length;
          rest = rest.slice(best.idx + best.term.length);
        }
      }
    }
  }

  // 죽은 키 — 원인을 구분해야 삭제할지 표기를 고칠지 정할 수 있다
  const rawAll = guides
    .map((g) => [g.body_easy_md, g.body_md, g.field_tips_md].filter(Boolean).join("\n"))
    .join("\n");
  const headings = guides
    .flatMap((g) => (g.body_easy_md ?? g.body_md ?? "").split("\n"))
    .filter((l) => /^##\s+/.test(l))
    .join("\n");
  const dead = TERMS.filter((t) => !alive.has(t)).map((term) => {
    let cause = "본문에 아예 없음";
    if (headings.includes(term)) cause = "헤딩(## )에만 있음 — 헤딩은 <h2> 평문이라 툴팁이 안 걸린다";
    else if (rawAll.includes(term)) cause = "원문엔 있으나 매칭 실패(강조·코드·링크로 텍스트가 쪼개짐)";
    else {
      // 괄호 앞부분만 본문에 있으면 키 표기가 본문과 어긋난 것
      const short = term.replace(/\s*\(.*$/, "").trim();
      if (short && short !== term && rawAll.includes(short)) {
        cause = `표기 불일치 — 본문은 '${short}' (${rawAll.split(short).length - 1}회)`;
      }
    }
    return { term, cause };
  });

  // 순환 정의 — 뜻풀이 안에 다른 용어집 키가 들어 있으면 사용자가 막힌다.
  // 툴팁 안에서는 다른 툴팁을 누를 수 없다(정의는 dataDef 속성 문자열이라 렌더를 안 거친다, Markdown.jsx:83).
  //
  // 2글자 키(자차·할증·면책 등 17개)에 초보자가 가장 모를 보험 용어가 몰려 있어 길이 제한을 두지 않는다.
  // 대신 낱말 경계를 봐야 한다 — 안 보면 'NSCC' 안의 'SCC' 같은 것이 잡힌다.
  // 전문어가 있어도 그 자리에서 풀이가 되면 사용자는 막히지 않는다. 두 형태를 인정한다.
  //   ① 전문어 뒤에 풀이가 붙음 — "물적사고(차·물건이 부서진 사고)", "무보험차상해 — 보험 없는 차에…"
  //   ② 쉬운 말을 쓰고 전문어를 괄호에 넣음 — "보험료가 오르내린 기록(할인·할증)"
  const isGlossed = (def, i, t) => {
    const after = def.slice(i + t.length);
    if (/^\s*[(（]/.test(after) || /^\s*[—–-]\s/.test(after)) return true; // ①
    const open = def.lastIndexOf("(", i);
    if (open >= 0 && !def.slice(open, i).includes(")") && def.indexOf(")", i) >= 0) return true; // ②
    return false;
  };
  const boundedIncludes = (def, t) => {
    for (let i = def.indexOf(t); i >= 0; i = def.indexOf(t, i + 1)) {
      const before = def[i - 1] ?? "";
      const after = def.slice(i + t.length);
      const cutBefore = /[A-Za-z가-힣]/.test(before) && /^[A-Za-z가-힣]/.test(t);
      const cutAfter = /^[가-힣]/.test(after) && !JOSA.test(after) && /[가-힣]$/.test(t);
      if (!cutBefore && !cutAfter && !isGlossed(def, i, t)) return true;
    }
    return false;
  };
  const circular = Object.entries(glossary)
    .filter(([, def]) => typeof def === "string")
    .map(([term, def]) => ({ term, inner: TERMS.filter((t) => t !== term && boundedIncludes(def, t)) }))
    .filter((r) => r.inner.length > 0);

  // 허용 목록이 낡았는지 — 본문이 바뀌어 오탐이 사라졌는데 목록에만 남아 있는 항목
  const staleAllows = ALLOW_FP.filter(
    ([gid, term]) => !falsePositives.some((f) => f.guide === gid && f.term === term)
  );
  const remaining = falsePositives.filter(
    (f) => !ALLOW_FP.some(([gid, term]) => gid === f.guide && term === f.term)
  );

  return { total: TERMS.length, alive, dead, falsePositives: remaining, staleAllows, circular };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { total, alive, dead, falsePositives, staleAllows, circular } = checkGlossary();
  console.log("=== 용어집(툴팁) 검사 ===");
  console.log(`등록 ${total}개 / 실제 렌더되는 키 ${alive.size}개 / 허용 목록 ${ALLOW_FP.length}건\n`);

  console.log(`① 죽은 키: ${dead.length}건  ${dead.length ? "❌" : "✅"}`);
  for (const d of dead) console.log(`   ${d.term}  —  ${d.cause}`);

  console.log(`\n② 오탐(다른 낱말 안에서 잘려 잡힘): ${falsePositives.length}건  ${falsePositives.length ? "❌" : "✅"}`);
  for (const f of falsePositives) console.log(`   [${f.guide}/${f.where}] '${f.term}'(${f.side}) ← …${f.context}…`);

  console.log(`\n③ 순환 정의(뜻풀이에 다른 전문어): ${circular.length}건`);
  for (const c of circular) console.log(`   ${c.term} → ${c.inner.join(", ")}`);

  if (staleAllows.length) {
    console.log(`\n⚠ 낡은 허용 목록 ${staleAllows.length}건 — 오탐이 사라졌으니 ALLOW_FP에서 지우세요`);
    for (const [gid, term, why] of staleAllows) console.log(`   [${gid}] '${term}' — ${why}`);
  }

  process.exit(dead.length || falsePositives.length ? 1 : 0);
}
