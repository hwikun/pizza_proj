import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

function Logo() {
  return (
    <Link to="/" className="Logo">
      <img src="/img/logo.png" width="150"></img>
    </Link>
  );
}

function NavBar({ clickMore }) {
  return (
    <div className="NavBar">
      <Container>
        <div className="top-menu">
          <Logo />
          <div>로그인</div>
          <div>회원가입</div>
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
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <NavBar clickMore={() => setOpen(!open)} />
      {open && (
        <div
          style={{
            left: 0,
            right: 0,
            top: 141,
            position: "fixed",
            backgroundColor: "white",
            borderBottom: "1px solid #ddd",
            zIndex: 100,
            boxShadow: "0 1px 30px rgba(0,0,0,0.1)",
            transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
          }}
        >
          <Container>
            <div style={{ display: "flex", gap: "100px", padding: "40px 0" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px 0",
                }}
              >
                <div
                  style={{ fontWeight: "bold", marginBottom: 10, fontSize: 18 }}
                >
                  도미노 서비스
                </div>
                <div>매니아 혜택</div>
                <div>도미노 모멘트</div>
                <div>퀵오더</div>
                <div>단체주문 서비스</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px 0",
                }}
              >
                <div
                  style={{ fontWeight: "bold", marginBottom: 10, fontSize: 18 }}
                >
                  고객센터
                </div>
                <div>자주하는 질문</div>
                <div>문의/칭찬하기</div>
                <div>문의 내역/답변</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px 0",
                }}
              >
                <div
                  style={{ fontWeight: "bold", marginBottom: 10, fontSize: 18 }}
                >
                  회사소개
                </div>
                <div>한국도미노피자</div>
                <div>광고갤러리</div>
                <div>사회공헌활동</div>
                <div>가맹점모집</div>
                <div>인재채용</div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
