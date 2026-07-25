// 출고일(D0) 기준 타임라인 계산 — 순수 함수. DESIGN §3 로직.
const DAY = 86400000;

const startOfDay = (d) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};
const addDays = (d, n) => new Date(d.getTime() + n * DAY);
const daysBetween = (from, to) => Math.round((startOfDay(to) - startOfDay(from)) / DAY);
const fmtDate = (d) =>
  `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;

// "매년 N월" 규칙 → 다음 도래 라벨
function nextRecurring(rule, today) {
  const m = /매년\s*(\d{1,2})월/.exec(rule);
  if (!m) return { nextLabel: null };
  const month = Number(m[1]);
  let year = today.getFullYear();
  // 이미 그 달을 지났으면 내년
  if (today.getMonth() + 1 > month) year += 1;
  return { nextLabel: `다음 ${year}년 ${month}월` };
}

// 출고일 미입력 시 상대 라벨
function offsetLabel(off) {
  if (off.type === "day") return off.value === 0 ? "출고 당일" : off.value < 0 ? `출고 D${off.value}` : `출고 D+${off.value}`;
  if (off.type === "range") return `출고 D+${off.from} ~ D+${off.to}`;
  return "";
}

function relLabel(diff) {
  if (diff === 0) return "오늘";
  if (diff > 0) return `D-${diff}`;
  return `${-diff}일 지남`;
}

/**
 * @returns 이벤트별 파생정보 배열. track: "timeline"(날짜 축) | "situation"(상황 대응)
 *   status: planned(출고일 미입력) | past | now | upcoming | recurring | ondemand
 */
export function computeTimeline(events, guides, registrationDate, today = new Date()) {
  const gmap = Object.fromEntries(guides.map((g) => [g.id, g]));
  const reg = registrationDate ? startOfDay(new Date(registrationDate + "T00:00:00")) : null;
  const t0 = startOfDay(today);

  return events.map((e) => {
    const guide = gmap[e.guide_id] ?? null;
    const off = e.offset;
    const base = { ...e, guide };

    if (off.type === "on-demand") {
      return { ...base, track: "situation", status: "ondemand", sortKey: 1e9, dateLabel: null };
    }
    if (off.type === "recurring") {
      return {
        ...base,
        track: "timeline",
        status: "recurring",
        sortKey: 5e8,
        dateLabel: off.rule,
        ...nextRecurring(off.rule, t0),
      };
    }

    // day / range
    const isRange = off.type === "range";
    const sortKey = isRange ? off.from : off.value;

    if (!reg) {
      return { ...base, track: "timeline", status: "planned", sortKey, dateLabel: null, offsetLabel: offsetLabel(off) };
    }

    const start = addDays(reg, isRange ? off.from : off.value);
    const end = isRange ? addDays(reg, off.to) : start;
    const diff = daysBetween(t0, start);
    const endDiff = daysBetween(t0, end);

    let status;
    if (isRange) status = t0 < startOfDay(start) ? "upcoming" : t0 > startOfDay(end) ? "past" : "now";
    else status = Math.abs(diff) <= 3 ? "now" : diff < 0 ? "past" : "upcoming";

    return {
      ...base,
      track: "timeline",
      status,
      sortKey,
      daysFromNow: diff,
      dateLabel: isRange ? `${fmtDate(start)} ~ ${fmtDate(end)}` : fmtDate(start),
      relLabel: isRange
        ? endDiff < 0
          ? "지남"
          : diff > 0
            ? `D-${diff} 시작`
            : "진행 중"
        : relLabel(diff),
    };
  });
}

export const STATUS_ORDER = { now: 0, upcoming: 1, recurring: 2, planned: 3, past: 4, ondemand: 5 };
