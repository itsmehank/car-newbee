import { Link } from "react-router-dom";
import { mx5 } from "@/lib/content";
import { useUserState } from "@/lib/useUserState";

const fmtKo = (iso) => {
  if (!iso) return null;
  const [y, m, d] = iso.split("-");
  return `${y}년 ${Number(m)}월 ${Number(d)}일`;
};

// 상수를 초보자용으로 재구성: 핵심 한 줄(main) + 쉬운 설명 줄(notes) + 용어 풀이
const w = mx5.warranty;
const m = mx5.maintenance;
const GROUPS = [
  {
    title: "보증",
    rows: [
      {
        label: "일반부품",
        main: "3년 또는 6만km (먼저 오는 것 기준)",
        notes: ["2018년 이후 출고차는 2년/8만km · 3년/6만km · 4년/4만km 중 골라 쓸 수 있어요(변경 횟수 제한 없음)."],
        raw: w.general.value,
        src: w.general.source,
      },
      {
        label: "동력계통",
        main: "5년 또는 10만km",
        notes: ["엔진·변속기처럼 힘을 전달하는 핵심 부품(동력전달장치)에 적용돼요."],
        raw: w.powertrain.value,
        src: w.powertrain.source,
      },
      {
        label: "하이브리드 전용",
        main: "10년 또는 20만km",
        notes: ["하이브리드 핵심 부품인 고전압 배터리·전기 모터·HPCU(하이브리드 전력제어장치)에 적용돼요."],
        raw: w.hybrid_parts.value,
        src: w.hybrid_parts.source,
      },
    ],
  },
  {
    title: "정비 주기",
    rows: [
      {
        label: "엔진오일",
        main: "보통 1만km 또는 1년마다 교체",
        notes: [
          "시내 위주로 짧게 자주 타면(‘가혹 조건’) 5천km 또는 6개월마다 갈아 주세요.",
          "규격은 0W-20(겨울에도 잘 흐르는 묽은 저점도 오일), 한 번에 약 4.8L 들어가요.",
          "정품(권장) 오일이 아니면 더 짧은 주기로 교체해야 해요.",
        ],
        raw: m.engine_oil.value,
        src: m.engine_oil.source,
      },
      {
        label: "브레이크액",
        main: "5만km마다 교체",
        notes: ["DOT-4 등급 브레이크액이에요(정비소에서 규격 맞춰 넣어 줍니다)."],
        raw: m.brake_fluid.value,
        src: m.brake_fluid.source,
      },
      {
        label: "타이어 위치 교환",
        main: "1만km마다",
        notes: ["앞뒤 타이어 위치를 바꿔 고르게 닳게 하는 정비예요(‘로테이션’)."],
        raw: m.tire_rotation.value,
        src: m.tire_rotation.source,
      },
    ],
  },
  {
    title: "타이어 · 연료",
    rows: [
      {
        label: "타이어 규격",
        main: "235/60 R18 (기본 18인치)",
        notes: ["큰 휠 옵션은 255/45 R20(20인치)예요.", "예비 타이어는 없고, 펑크 때 쓰는 응급 수리 키트(TMK)가 실려 있어요."],
        raw: mx5.tire.size.value,
        src: mx5.tire.size.source,
      },
      {
        label: "공기압",
        main: "앞뒤 모두 35psi (240kPa)",
        notes: ["psi·kPa는 공기압 단위예요. 주유소·정비소 공기압 기계에서 35에 맞추면 됩니다."],
        raw: mx5.tire.pressure.value,
        src: mx5.tire.pressure.source,
      },
      {
        label: "연료",
        main: "일반 휘발유(무연 가솔린)",
        notes: ["고급 휘발유를 넣을 필요 없어요. 일반유로 충분합니다."],
        raw: mx5.fuel.type.value,
        src: mx5.fuel.type.source,
      },
    ],
  },
];

function ConstRow({ row }) {
  return (
    <div className="const-row">
      <div className="const-row__label">{row.label}</div>
      <div className="const-row__main">{row.main}</div>
      {row.notes?.map((n, i) => (
        <div key={i} className="const-row__note">
          {n}
        </div>
      ))}
      <details className="const-raw">
        <summary>공식 원문 값</summary>
        <div className="const-raw__body">
          {row.raw}
          {row.src && <span className="const-row__src">출처: {row.src}</span>}
        </div>
      </details>
    </div>
  );
}

export default function SetupPage() {
  const { registrationDate, setRegistrationDate, resetAll } = useUserState();

  return (
    <div className="container setup">
      <div className="page-head">
        <h1 className="page-head__title">내 차 설정</h1>
      </div>

      <section className="gd-card">
        <div className="field-label">출고(등록)일</div>
        <p className="const-row__note" style={{ marginBottom: 12 }}>
          자동차등록증의 등록일을 넣으면, 이 날짜를 기준으로 할 일이 날짜순으로 안내돼요.
        </p>
        <input
          type="date"
          className="date-input"
          value={registrationDate ?? ""}
          max="2100-12-31"
          onChange={(e) => setRegistrationDate(e.target.value)}
          aria-label="출고 등록일"
        />
        <p className="save-state">
          {registrationDate ? (
            <>
              <span className="dot dot--ok" /> {fmtKo(registrationDate)} · 저장됨
            </>
          ) : (
            <>
              <span className="dot" /> 아직 출고일이 없어요
            </>
          )}
        </p>
        {registrationDate && (
          <button className="btn btn--ghost" style={{ marginTop: 14 }} onClick={() => setRegistrationDate(null)}>
            출고일 지우기
          </button>
        )}
      </section>

      <section className="gd-card">
        <h2 className="gd-card__h">내 차 정보 (싼타페 MX5 HEV)</h2>
        {GROUPS.map((grp) => (
          <div key={grp.title} className="const-group">
            <h3>{grp.title}</h3>
            {grp.rows.map((row) => (
              <ConstRow key={row.label} row={row} />
            ))}
          </div>
        ))}
        {mx5.unverified?.length > 0 && (
          <div className="const-unverified">
            <strong>아직 확인 못 한 정보</strong>
            <ul>
              {mx5.unverified.map((u, i) => (
                <li key={i}>{u}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="gd-card">
        <h2 className="gd-card__h">초기화</h2>
        <p className="const-row__note" style={{ marginBottom: 12 }}>
          출고일과 모든 체크 상태를 지웁니다. 되돌릴 수 없어요.
        </p>
        <button
          className="btn btn--danger"
          onClick={() => {
            if (confirm("출고일과 모든 체크 상태를 초기화할까요?")) resetAll();
          }}
        >
          전체 초기화
        </button>
      </section>

      <Link to="/" className="back-link">
        ← 홈으로
      </Link>
    </div>
  );
}
