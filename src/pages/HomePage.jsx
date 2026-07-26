import { useMemo } from "react";
import { Link } from "react-router-dom";
import { PHASES, guides, guidesByPhase, timeline } from "@/lib/content";
import { computeTimeline } from "@/lib/timeline";
import { useUserState } from "@/lib/useUserState";

function phaseProgress(phase, checklist) {
  let done = 0;
  let total = 0;
  for (const g of guidesByPhase(phase)) {
    const n = g.checklist.length;
    total += n;
    done += Math.min(Object.keys(checklist[g.id] ?? {}).length, n);
  }
  return { done, total };
}

export default function HomePage() {
  const { registrationDate, checklist } = useUserState();
  const computed = useMemo(
    () => computeTimeline(timeline, guides, registrationDate, new Date()),
    [registrationDate]
  );
  // 지금 할 일: 날짜 오름차순(오래된 것 먼저) → 동일 날짜는 정해진 순서(sortKey)로
  const today = computed
    .filter((e) => e.track === "timeline" && e.status === "now")
    .sort((a, b) => (a.daysFromNow ?? 0) - (b.daysFromNow ?? 0) || a.sortKey - b.sortKey);

  // 출고 D-day (등록일 기준)
  const dday = useMemo(() => {
    if (!registrationDate) return null;
    const t0 = new Date();
    t0.setHours(0, 0, 0, 0);
    const reg = new Date(registrationDate + "T00:00:00");
    return Math.round((reg - t0) / 86400000);
  }, [registrationDate]);

  const ddayLabel = dday === null ? null : dday === 0 ? "오늘 출고" : dday > 0 ? `출고 D-${dday}` : `출고 ${-dday}일째`;

  return (
    <div className="container home">
      {/* 상태 카드 */}
      {registrationDate ? (
        <Link to="/setup" className="status-card">
          <div className="status-card__label">내 차 · 싼타페 MX5 HEV</div>
          <div className="status-card__dday">
            <b>{ddayLabel}</b>
            <span className="status-card__date">{registrationDate.replace(/-/g, ".")}</span>
          </div>
          <div className="status-card__sub">
            {today.length > 0 ? `지금 할 일 ${today.length}건이 있어요` : "예정된 할 일을 확인해 보세요"}
          </div>
        </Link>
      ) : (
        <Link to="/setup" className="status-card status-card--cta">
          <div className="status-card__label">시작하기</div>
          <div className="status-card__cta-title">출고일을 등록해 주세요</div>
          <div className="status-card__cta-hint">
            등록하면 단계별 할 일을 날짜순으로 안내해요 →
          </div>
        </Link>
      )}

      {/* 지금 할 일 */}
      {today.length > 0 && (
        <section className="section">
          <h2 className="section__title">지금 할 일</h2>
          <div className="today-list">
            {today.map((ev, i) => (
              <Link key={ev.id} to={`/guide/${ev.guide_id}`} className="today-item">
                <span className="today-item__num">{i + 1}</span>
                <span className="today-item__text">
                  <span className="today-item__title">{ev.title}</span>
                  <span className="today-item__date">
                    {ev.dateLabel} · {ev.relLabel}
                  </span>
                </span>
                <span className="today-item__arrow">›</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 단계별 */}
      <section className="section">
        <h2 className="section__title">단계별로 준비하기</h2>
        <div className="phase-cards">
          {PHASES.filter((p) => p.n !== 3).map((p) => {
            const prog = phaseProgress(p.n, checklist);
            const count = guidesByPhase(p.n).length;
            const pct = prog.total ? Math.round((prog.done / prog.total) * 100) : 0;
            return (
              <Link key={p.n} to={`/phase/${p.n}`} className="phase-card" style={{ "--pc": `var(--phase-${p.n})` }}>
                <span className="phase-card__badge">P{p.n}</span>
                <span className="phase-card__body">
                  <span className="phase-card__title">{p.label}</span>
                  <span className="phase-card__meta">
                    {p.range} · 가이드 {count}개{prog.done > 0 ? ` · ${pct}%` : ""}
                  </span>
                  <span className="mini-bar">
                    <span className="mini-bar__fill" style={{ width: `${pct}%` }} />
                  </span>
                </span>
                <span className="phase-card__arrow">›</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 상황 대응 */}
      <section className="section">
        <h2 className="section__title">갑자기 생긴 일</h2>
        <Link to="/situation" className="sos-card">
          <span className="sos-card__icon">P3</span>
          <span className="sos-card__body">
            <span className="sos-card__title">상황 대응 바로가기</span>
            <span className="sos-card__sub">필요할 때 즉시 · 사고 · 방전 · 펑크 · 침수</span>
          </span>
        </Link>
      </section>
    </div>
  );
}
