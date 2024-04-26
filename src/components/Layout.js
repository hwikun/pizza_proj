import Container from "./Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import useModal from "../hooks/useModal";
import "./Layout.css";

function Logo() {
  return (
    <Link to="/" className="Logo">
      <img src="/img/logo.png" width="150"></img>
    </Link>
  );
}

function NavBar({ clickMore }) {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div className="NavBar">
        <Container>
          <div className="top-menu">
            <Logo />
            <span className="link" onClick={openModal}>
              로그인
            </span>
            <Link to="/join">회원가입</Link>
          </div>
          <div className="main-menu">
            <Link to="/pizza">메뉴</Link>
            <Link to="/cart">장바구니</Link>
            <Link to="/event">이벤트</Link>
            <Link to="/branch">매장검색</Link>
            <Link to="/contact">고객문의</Link>
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
          <Link to="/admin">관리자 모드</Link>
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
