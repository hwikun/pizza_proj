import Container from "../Container/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import useModal from "../../hooks/useModal";
import { useAuth } from "../../hooks/useAuth";
import "./Layout.css";

function Logo() {
  return (
    <Link to="/" className="Logo">
      <img src="/img/logo.png" width="150"></img>
    </Link>
  );
}

function CartIcon() {
  return (
    <div className="CartIcon">
      <div className="count">
        <span>3</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </div>
  );
}

function NavBar({ clickMore }) {
  const { isLogin, userNick, logout } = useAuth();
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="NavBar">
        <Container>
          <div className="top-menu">
            <Logo />
            {!isLogin ? (
              <>
                <span className="link" onClick={openModal}>
                  로그인
                </span>
                <Link to="/join">회원가입</Link>
              </>
            ) : (
              <>
                <span>
                  <strong>{userNick}</strong>님 환영합니다
                </span>
                <span>
                  <CartIcon />
                </span>
                <span className="link" onClick={logout}>
                  로그아웃
                </span>
              </>
            )}
          </div>
          <div className="main-menu">
            <Link to="/pizza">메뉴</Link>
            <Link to="/cart">장바구니</Link>
            <Link to="/event">이벤트</Link>
            <div className="more" onClick={clickMore}>
              더보기
            </div>
          </div>
        </Container>
      </div>
      {isOpen && <LoginModal closeModal={closeModal} />}
    </>
  );
}

function MoreMenu() {
  return (
    <div className="MoreMenu">
      <Container>
        <div className="cols">
          <div className="col">
            <div className="title">도미노 서비스</div>
            <div>매니아 혜택</div>
            <div>도미노 모멘트</div>
            <div>퀵오더</div>
            <div>단체주문 서비스</div>
          </div>
          <div className="col">
            <div className="title">고객센터</div>
            <div>자주하는 질문</div>
            <div>문의/칭찬하기</div>
            <div>문의 내역/답변</div>
          </div>
          <div className="col">
            <div className="title">회사소개</div>
            <div>한국도미노피자</div>
            <div>광고갤러리</div>
            <div>사회공헌활동</div>
            <div>가맹점모집</div>
            <div>인재채용</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <NavBar clickMore={() => setOpen(!open)} />
      {open && <MoreMenu />}
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <Container>
        <div className="inner">
          <span>Copyright &copy; Sitename. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
