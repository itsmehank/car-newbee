import { Link } from "react-router-dom";
import { timeline, getGuide } from "@/lib/content";

const ICON = {
  "p3-accident": "!",
  "p3-parking-accident": "P",
  "p3-battery-discharge": "12V",
  "p3-tire-puncture": "◑",
  "p3-disaster": "≈",
  "p3-fault-ratio": "%",
};

export default function SituationPage() {
  const items = timeline
    .filter((e) => e.offset.type === "on-demand")
    .map((e) => getGuide(e.guide_id))
    .filter(Boolean);

  return (
    <div className="container">
      <div className="page-head">
        <h1 className="page-head__title">무슨 일이 생겼나요?</h1>
        <p className="page-head__desc">해당 상황을 눌러 대처 순서를 바로 확인하세요.</p>
      </div>

      <div className="sos-grid">
        {items.map((g) => (
          <Link key={g.id} to={`/guide/${g.id}`} className="sos-tile">
            <span className="sos-tile__icon">{ICON[g.id] ?? "•"}</span>
            <span className="sos-tile__title">{g.title}</span>
          </Link>
        ))}
      </div>

      <Link to="/" className="back-link">
        ← 홈으로
      </Link>
    </div>
  );
}
