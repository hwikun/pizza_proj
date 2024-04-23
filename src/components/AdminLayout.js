import "./AdminLayout.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <Link to="/">
          <img src="/img/logo.png" height="51" />
        </Link>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="menu">
        <div className="item">메뉴관리</div>
        <div className="submenu">
          <div className="item">메뉴그룹 관리</div>
          <div className="item">아이템 관리</div>
        </div>
        <div className="item">회원관리</div>
        <div className="item">이벤트관리</div>
        <div className="item">주문관리</div>
        <div className="item">문의관리</div>
      </div>
      <button className="logout">로그아웃</button>
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <div className="AdminLayout">
      <Sidebar />
      <div className="content">
        <Header />
        AdminLayout
        <div>{children}</div>
      </div>
    </div>
  );
}
