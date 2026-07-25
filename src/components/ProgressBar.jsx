export default function ProgressBar({ done, total, label }) {
  const ratio = total ? done / total : 0;
  const pct = Math.round(ratio * 100);
  const complete = total > 0 && done >= total;
  return (
    <div className={`progress ${complete ? "progress--done" : ""}`}>
      <div className="progress__head">
        <span className="progress__label">{label}</span>
        <span className="progress__count mono">
          {done}/{total}
          {complete && " ✓"}
        </span>
      </div>
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
