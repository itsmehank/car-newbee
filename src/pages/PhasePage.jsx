import { Link, useParams, Navigate } from "react-router-dom";
import { PHASES, PHASE_OVERVIEW, STAGES, guidesInOrder } from "@/lib/content";
import { useUserState } from "@/lib/useUserState";

const SCOPE = {
  generic: { label: "범용", cls: "badge--scope" },
  hybrid: { label: "하이브리드", cls: "badge--hybrid" },
  "mx5-hev": { label: "MX5 전용", cls: "badge--mx5" },
};

function GuideCard({ g, no, done }) {
  const scope = SCOPE[g.car_scope] ?? SCOPE.generic;
  return (
    <Link to={`/guide/${g.id}`} className="guide-list-card">
      <div className="guide-list-card__top">
        <span className="guide-list-card__title">
          <span className="guide-list-card__no">{no}</span>
          {g.title}
        </span>
        <span className="phase-card__arrow">›</span>
      </div>
      <p className="guide-list-card__summary">{g.summary?.[0]}</p>
      <div className="guide-list-card__badges">
        {done && <span className="badge badge--done">완료 ✓</span>}
        <span className={`badge ${scope.cls}`}>{scope.label}</span>
        {g.flags?.includes("단독출처") && <span className="badge badge--flag">참고</span>}
        {g.valid_year && <span className="badge badge--year">{g.valid_year} 기준</span>}
      </div>
    </Link>
  );
}

export default function PhasePage() {
  const { n } = useParams();
  const phaseNo = Number(n);
  const phase = PHASES.find((p) => p.n === phaseNo);
  const { guideProgress } = useUserState();

  if (!phase || phaseNo === 3) return <Navigate to={phaseNo === 3 ? "/situation" : "/"} replace />;

  const list = guidesInOrder(phaseNo);
  const isDone = (g) => {
    const p = guideProgress(g.id, g.checklist.length);
    return p.total > 0 && p.done >= p.total;
  };

  return (
    <div className="container">
      <div className="crumb">
        <Link to="/">홈</Link> › P{phase.n}
      </div>
      <div className="page-head">
        <h1 className="page-head__title">{phase.label}</h1>
        <p className="page-head__desc">
          {phase.range} · 가이드 {list.length}개
        </p>
      </div>

      {/* 흐름 개괄 */}
      {PHASE_OVERVIEW[phaseNo] && <div className="overview-card">{PHASE_OVERVIEW[phaseNo]}</div>}

      {/* Phase 0: 출고 전/당일/직후 그룹핑 */}
      {phaseNo === 0
        ? STAGES.map((st) => {
            const group = list.filter((g) => g.stage === st.key);
            if (!group.length) return null;
            return (
              <section key={st.key} className="stage-group">
                <div className="stage-head">
                  <h2 className="stage-head__label">{st.label}</h2>
                  <p className="stage-head__desc">{st.desc}</p>
                </div>
                <div className="guide-list">
                  {group.map((g) => (
                    <GuideCard key={g.id} g={g} no={g.order} done={isDone(g)} />
                  ))}
                </div>
              </section>
            );
          })
        : (
            <div className="guide-list" style={{ marginTop: 18 }}>
              {list.map((g) => (
                <GuideCard key={g.id} g={g} no={g.order} done={isDone(g)} />
              ))}
            </div>
          )}

      <Link to="/" className="back-link">
        ← 홈으로
      </Link>
    </div>
  );
}
