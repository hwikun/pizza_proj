import Container from "./Container";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>&copy; Site</span>
          <Link to="/admin" style={{ color: "#666" }}>
            관리자 모드
          </Link>
        </div>
      </Container>
    </footer>
  );
}
