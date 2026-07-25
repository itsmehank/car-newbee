import { Link, useParams } from "react-router-dom";
import { getGuide, guidesInOrder, PHASES, STAGES } from "@/lib/content";
import { useUserState } from "@/lib/useUserState";
import Markdown from "@/components/Markdown";
import ProgressBar from "@/components/ProgressBar";

const SCOPE = {
  generic: { label: "범용", cls: "badge--scope" },
  hybrid: { label: "하이브리드", cls: "badge--hybrid" },
  "mx5-hev": { label: "MX5 전용", cls: "badge--mx5" },
};
const SRC = {
  official: { label: "공식", cls: "src--official" },
  media: { label: "언론", cls: "src--media" },
  personal: { label: "개인", cls: "src--personal" },
};

// 본문(마크다운)을 최상위 "## 제목" 기준으로 섹션 분할.
// 첫 제목 앞 도입부는 lead로, 각 섹션은 개별 카드로 렌더한다.
function splitSections(md) {
  if (!md) return { lead: "", sections: [] };
  const lines = md.split("\n");
  const lead = [];
  const sections = [];
  let cur = null;
  for (const line of lines) {
    const m = line.match(/^##\s+(.*)$/);
    if (m) {
      cur = { title: m[1].trim(), body: [] };
      sections.push(cur);
    } else if (cur) {
      cur.body.push(line);
    } else {
      lead.push(line);
    }
  }
  return {
    lead: lead.join("\n").trim(),
    sections: sections.map((s) => ({ title: s.title, body: s.body.join("\n").trim() })),
  };
}

export default function GuideDetailPage() {
  const { id } = useParams();
  const { isChecked, toggleChecklistItem, guideProgress } = useUserState();
  const g = getGuide(id);

  if (!g) {
    return (
      <div className="container stub">
        <h1>가이드를 찾을 수 없습니다</h1>
        <p>
          <Link to="/">← 홈으로</Link>
        </p>
      </div>
    );
  }

  const phase = PHASES.find((p) => p.n === g.phase);
  const scope = SCOPE[g.car_scope] ?? SCOPE.generic;
  const isSolo = g.flags?.includes("단독출처");
  const prog = guideProgress(g.id, g.checklist.length);

  // 섹션(단계) 내 위치 + 이전/다음 (상황 대응 P3 제외)
  const sequential = g.phase !== 3;
  const ordered = guidesInOrder(g.phase);
  const idx = ordered.findIndex((x) => x.id === g.id);
  const prev = sequential && idx > 0 ? ordered[idx - 1] : null;
  const next = sequential && idx >= 0 && idx < ordered.length - 1 ? ordered[idx + 1] : null;

  return (
    <div className="container guide-detail">
      <div className="crumb">
        <Link to="/">홈</Link> › <Link to={`/phase/${g.phase}`}>P{g.phase} {phase?.label}</Link>
        {g.stage && ` › ${STAGES.find((s) => s.key === g.stage)?.label ?? ""}`}
      </div>

      <div className="gd-badges">
        <span className={`badge ${scope.cls}`}>{scope.label}</span>
        {isSolo && <span className="badge badge--flag">참고 · 단독출처</span>}
        {g.valid_year && <span className="badge badge--year">{g.valid_year} 기준</span>}
      </div>
      <h1 className="gd-title">{g.title}</h1>
      <ul className="gd-summary">
        {g.summary.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      {isSolo && (
        <div className="solo-note">
          이 항목은 <strong>단일(개인) 출처</strong> 기반입니다. 공식 확인 전 참고용으로만 활용하세요.
        </div>
      )}

      {/* 체크리스트 */}
      <section className="gd-card">
        <h2 className="gd-card__h">체크리스트</h2>
        <ProgressBar done={prog.done} total={prog.total} label="이 항목 진행" />
        <ul className="checklist">
          {g.checklist.map((c, i) => {
            const checked = isChecked(g.id, i);
            return (
              <li key={i}>
                <label className={`check-item ${checked ? "check-item--on" : ""}`}>
                  <input type="checkbox" checked={checked} onChange={() => toggleChecklistItem(g.id, i)} />
                  <span className="checkbox" aria-hidden>
                    {checked && "✓"}
                  </span>
                  <span className="check-item__text">{c}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 본문 — 쉬운 설명이 있으면 그것을 메인으로(주제별 카드 분할), 원문은 접어서 보존 */}
      {(() => {
        const src = g.body_easy_md ?? g.body_md;
        const { lead, sections } = splitSections(src);
        const split = sections.length > 0;
        return (
          <>
            {lead && (
              <div className="gd-lead">
                <Markdown>{lead}</Markdown>
              </div>
            )}
            {split ? (
              sections.map((s, i) => (
                <section className="gd-card gd-card--section" key={i}>
                  <h2 className="gd-section-h">{s.title}</h2>
                  <Markdown>{s.body}</Markdown>
                </section>
              ))
            ) : (
              <section className="gd-card">
                <Markdown>{src}</Markdown>
              </section>
            )}
            {g.body_easy_md && (
              <details className="original">
                <summary>자세히 · 원문 그대로 보기</summary>
                <div className="original__body">
                  <Markdown>{g.body_md}</Markdown>
                </div>
              </details>
            )}
          </>
        );
      })()}

      {/* 실전 팁 */}
      {g.field_tips_md && (
        <section className="field-tips">
          <h2 className="field-tips__h">실전 팁 (영상 출처)</h2>
          <Markdown>{g.field_tips_md}</Markdown>
        </section>
      )}

      {/* 출처 */}
      <section className="gd-card">
        <h2 className="gd-card__h">출처</h2>
        <ul className="src-list">
          {g.sources.map((s, i) => {
            const t = SRC[s.type] ?? SRC.personal;
            const body = (
              <>
                <span className={`src-tag ${t.cls}`}>{t.label}</span>
                <span className="src-name">{s.name}</span>
              </>
            );
            return (
              <li key={i}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noreferrer" className="src-item">
                    {body}
                  </a>
                ) : (
                  <span className="src-item">{body}</span>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* 섹션 내 위치 + 이전/다음 */}
      {sequential && (
        <section className="section">
          <div className="pos-indicator">
            <span>
              {phase?.label} · <b>{idx + 1}</b> / {ordered.length}
            </span>
            <Link to={`/phase/${g.phase}`} className="pos-indicator__all">
              단계 전체 보기
            </Link>
          </div>
          <div className="prevnext">
            {prev ? (
              <Link to={`/guide/${prev.id}`} className="prevnext__btn">
                <span className="prevnext__dir">← 이전</span>
                <span className="prevnext__title">{prev.title}</span>
              </Link>
            ) : (
              <span className="prevnext__btn prevnext__btn--empty" />
            )}
            {next ? (
              <Link to={`/guide/${next.id}`} className="prevnext__btn prevnext__btn--next">
                <span className="prevnext__dir">다음 →</span>
                <span className="prevnext__title">{next.title}</span>
              </Link>
            ) : (
              <span className="prevnext__btn prevnext__btn--empty" />
            )}
          </div>
        </section>
      )}

      <Link to="/" className="back-link">
        ← 홈으로
      </Link>
    </div>
  );
}
