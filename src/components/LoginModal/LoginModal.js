import { CloseIcon } from "components";
import "components/LoginModal/LoginModal.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export default function LoginModal({ closeModal }) {
  const auth = useAuth();
  console.log(auth);
  const navi = useNavigate();
  const account = useRef({
    id: "",
    pw: "",
  });
  const handleSubmit = async e => {
    e.preventDefault();
    const { id, pw } = account.current;
    const result = await auth.login({ id: id.value, pw: pw.value });
    if (result) closeModal();
    else return;
  };
  return (
    <div className="LoginModal">
      <div className="panel">
        <div className="header">
          <div className="title">로그인</div>
          <CloseIcon onClick={closeModal} />
        </div>
        <div className="content">
          <form className="login">
            <div className="InputField">
              <label className="label">아이디</label>
              <input
                className="input"
                type="text"
                ref={el => (account.current.id = el)}
              />
            </div>
            <div className="InputField">
              <label className="label">비밀번호</label>
              <input
                className="input"
                type="password"
                ref={el => (account.current.pw = el)}
              />
            </div>
            <div className="error">아아디를 입력해주세요</div>
            <button type="submit" onClick={handleSubmit}>
              로그인
            </button>
            <button onClick={() => navi("/join")}>회원가입</button>
          </form>
        </div>
      </div>
    </div>
  );
}
