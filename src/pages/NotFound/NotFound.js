import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <div className="inner">
        <div className="error404">404</div>
        <div>죄송합니다. 해당 페이지가 없습니다.</div>
        <Link to="/">홈으로 가기</Link>
      </div>
    </div>
  );
}
