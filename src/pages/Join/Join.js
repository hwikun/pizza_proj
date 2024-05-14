import { Layout, Container } from "components";
import "pages/Join/Join.css";
import { useRef, useState } from "react";

export default function Join() {
  const usernameReg = /^[a-z0-9]{4,}$/;
  const passwordReg =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  const nicknameReg = /^[가-힣a-zA-Z0-9]+$/;
  const [msg, setMsg] = useState({
    usernameMsg: false,
    nicknameMsg: false,
    passwordMsg: false,
    confirmMsg: false,
  });
  const newAccount = useRef({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async e => {
    console.log("submit");
    e.preventDefault();
    const { username, nickname, password, confirmPassword } =
      newAccount.current;
    const flagObject = {
      usernameMsg: false,
      nicknameMsg: false,
      passwordMsg: false,
      confirmMsg: false,
    };

    if (!usernameReg.test(username.value)) {
      flagObject.usernameMsg = true;
    }
    if (!nicknameReg.test(nickname.value)) {
      flagObject.nicknameMsg = true;
    }
    if (!passwordReg.test(password.value)) {
      flagObject.passwordMsg = true;
    }
    if (
      confirmPassword.value.length < 1 ||
      password.value !== confirmPassword.value
    ) {
      flagObject.confirmMsg = true;
    }
    setMsg({ ...flagObject });

    if (Object.values(flagObject).includes(true)) {
      console.log("실패");
      return;
    }

    const result = await (
      await fetch("http://localhost:8082/api/user/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: username.value,
          nickname: nickname.value,
          pw: password.value,
        }),
      })
    ).json();
    console.log(result);
  };
  return (
    <Layout>
      <Container>
        <div className="Join">
          <h1>회원가입</h1>
          <div>
            <div className="InputField">
              <label className="label">아이디</label>
              <input
                className="input"
                type="text"
                ref={el => (newAccount.current.username = el)}
              />

              {msg.usernameMsg && (
                <div className="msg">
                  영소문자 또는 숫자를 4자 이상 입력해주세요
                </div>
              )}
            </div>
            <div className="InputField">
              <label className="label">닉네임</label>
              <input
                className="input"
                type="text"
                ref={el => (newAccount.current.nickname = el)}
              />

              {msg.nicknameMsg && (
                <div className="msg">
                  특수문자를 제외한 영 대소문자, 숫자, 한글만 입력해주세요
                </div>
              )}
            </div>
            <div className="InputField">
              <label className="label">비밀번호</label>
              <input
                className="input"
                type="password"
                ref={el => (newAccount.current.password = el)}
              />

              {msg.passwordMsg && (
                <div className="msg">
                  영문 대/소문자, 숫자, 특수문자 가능, 최소 8자 이상
                  입력해주세요
                </div>
              )}
            </div>
            <div className="InputField">
              <label className="label">비밀번호 확인</label>
              <input
                className="input"
                type="password"
                ref={el => (newAccount.current.confirmPassword = el)}
              />

              {msg.confirmMsg && (
                <div className="msg">비밀번호가 불일치합니다</div>
              )}
            </div>
            <button onClick={handleSubmit}>회원가입</button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
