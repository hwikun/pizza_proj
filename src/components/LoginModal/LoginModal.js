import { CloseIcon, InputField } from "components";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./LoginModal.css";

export default function LoginModal({ closeModal }) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const inputRefs = useRef({
    id: null,
    pw: null,
  });

  useEffect(() => {
    if (inputRefs.current.id) {
      inputRefs.current.id.focus();
    }
  }, [inputRefs.current.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = inputRefs.current.id.value;
    const pw = inputRefs.current.pw.value;

    if (!id) {
      setErrorMsg("아이디를 입력해주세요");
      inputRefs.current.id.focus();
    } else if (!pw) {
      setErrorMsg("비밀번호를 입력해주세요.");
      inputRefs.current.pw.focus();
    } else {
      setErrorMsg("");
      const success = await login({ id, pw });
      if (success) {
        closeModal();
      } else {
        setErrorMsg("아이디 혹은 비밀번호가 틀립니다.");
      }
    }
  };

  const clickJoin = () => {
    closeModal();
    navigate("/join");
  };

  return (
    <div className="LoginModal">
      <div className="panel">
        <div className="header">
          <div className="title">로그인</div>
          <CloseIcon onClick={closeModal} />
        </div>
        <div className="content">
          <form className="login" onSubmit={handleSubmit}>
            <InputField
              label="아이디"
              ref={(el) => (inputRefs.current.id = el)}
            />
            <InputField
              label="비밀번호"
              type="password"
              ref={(el) => (inputRefs.current.pw = el)}
            />
            {<div className="error">{errorMsg}</div>}
            <button type="submit">로그인</button>
            <button onClick={clickJoin}>회원가입</button>
          </form>
        </div>
      </div>
    </div>
  );
}
