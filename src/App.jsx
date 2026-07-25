import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HomePage from "@/pages/HomePage";
import PhasePage from "@/pages/PhasePage";
import GuideDetailPage from "@/pages/GuideDetailPage";
import SetupPage from "@/pages/SetupPage";
import SituationPage from "@/pages/SituationPage";

// 페이지(경로) 이동 시 항상 최상단에서 시작하도록 스크롤 초기화.
// (react-router는 기본적으로 스크롤 위치를 유지해, 하단에서 '다음'을 누르면
//  새 페이지도 하단에 머무는 문제가 있어 이를 바로잡는다.)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phase/:n" element={<PhasePage />} />
          <Route path="/guide/:id" element={<GuideDetailPage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/situation" element={<SituationPage />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <div className="container">
          첫차 가이드 · 본인 전용 도구 · 콘텐츠는 검증된 출처 기반이며 법·제도 정보는 기준연도를
          확인하세요.
        </div>
      </footer>
    </>
  );
}
