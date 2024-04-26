import CloseIcon from "./CloseIcon";
import "./LoginModal.css";
import { useState, useRef } from "react";
import InputField from "./InputField";

export default function LoginModal({ closeModal }) {
  const [errorMsg, setErrorMsg] = useState("");
  const inputRefs = useRef({
    id: null,
    pw: null,
  });

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();

    const id = inputRefs.current.id.value;
    const pw = inputRefs.current.pw.value;
    console.log("id " + id);
    console.log("pw " + pw);

    if (!id) {
      setErrorMsg("아이디를 입력해주세요");
    } else if (!pw) {
      setErrorMsg("비밀번호를 입력해주세요.");
    } else {
      setErrorMsg("");
    }
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
            {errorMsg && <div className="error">{errorMsg}</div>}
            <button type="submit">로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
}
