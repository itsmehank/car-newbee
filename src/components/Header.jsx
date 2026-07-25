import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const atHome = pathname === "/";
  return (
    <header className="app-header">
      <div className="app-header__row">
        {atHome ? (
          <Link to="/" className="brand">
            첫차<span>가이드</span>
          </Link>
        ) : (
          <Link to="/" className="icon-btn" aria-label="홈으로">
            ‹
          </Link>
        )}
        <Link to="/setup" className="icon-btn" aria-label="내 차 설정">
          ⚙
        </Link>
      </div>
    </header>
  );
}
