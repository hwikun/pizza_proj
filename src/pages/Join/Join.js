import { Layout, Container } from "components";
import "./Join.css";

export default function Join() {
  return (
    <Layout>
      <Container>
        <div className="Join">
          <h1>회원가입</h1>
          <div>
            <div className="InputField">
              <label className="label">아이디</label>
              <input className="input" type="text" />
            </div>
            <div className="InputField">
              <label className="label">닉네임</label>
              <input className="input" type="text" />
            </div>
            <div className="InputField">
              <label className="label">비밀번호</label>
              <input className="input" type="password" />
            </div>
            <div className="InputField">
              <label className="label">비밀번호 확인</label>
              <input className="input" type="password" />
            </div>
            <button>회원가입</button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
