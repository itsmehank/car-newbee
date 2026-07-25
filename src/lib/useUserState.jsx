import { createContext, useContext, useEffect, useMemo, useState } from "react";

// localStorage 단일 키. version 필드로 추후 동기화·마이그레이션 대비.
const KEY = "carnewbee";
const CURRENT_VERSION = 1;

const empty = () => ({
  version: CURRENT_VERSION,
  registrationDate: null, // "YYYY-MM-DD" | null
  checklist: {}, // { [guideId]: { [itemIndex]: true } }
  updatedAt: null,
});

function migrate(data) {
  // 현재 v1만 존재. 미래 버전 대비 훅.
  if (!data || typeof data !== "object") return empty();
  if (data.version !== CURRENT_VERSION) return { ...empty(), ...data, version: CURRENT_VERSION };
  return data;
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    return migrate(JSON.parse(raw));
  } catch {
    return empty();
  }
}

function persist(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...state, updatedAt: new Date().toISOString() }));
  } catch (e) {
    // 프라이빗 모드·용량 초과 등: 인메모리 유지, 경고만
    console.warn("[car-newbee] localStorage 저장 실패 — 이번 세션에만 유지됩니다.", e);
  }
}

const Ctx = createContext(null);

export function UserStateProvider({ children }) {
  const [state, setState] = useState(load);

  useEffect(() => {
    persist(state);
  }, [state]);

  const api = useMemo(() => {
    const setRegistrationDate = (date) =>
      setState((s) => ({ ...s, registrationDate: date || null }));

    const isChecked = (guideId, idx) => Boolean(state.checklist?.[guideId]?.[idx]);

    const toggleChecklistItem = (guideId, idx) =>
      setState((s) => {
        const g = { ...(s.checklist[guideId] ?? {}) };
        if (g[idx]) delete g[idx];
        else g[idx] = true;
        return { ...s, checklist: { ...s.checklist, [guideId]: g } };
      });

    const guideProgress = (guideId, total) => {
      // 콘텐츠 항목 수가 줄어도 done이 total을 넘지 않도록 캡(홈 집계와 일관)
      const done = Math.min(Object.keys(state.checklist?.[guideId] ?? {}).length, total);
      return { done, total, ratio: total ? done / total : 0 };
    };

    const resetAll = () => setState(empty());

    return {
      registrationDate: state.registrationDate,
      checklist: state.checklist,
      setRegistrationDate,
      isChecked,
      toggleChecklistItem,
      guideProgress,
      resetAll,
    };
  }, [state]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useUserState() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useUserState must be used within UserStateProvider");
  return ctx;
}
