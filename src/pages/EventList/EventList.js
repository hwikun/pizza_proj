import { Layout, Container } from "components";
import { v4 as uuidv4 } from "uuid";
import "./EventList.css";
import { Link } from "react-router-dom";

function PageNavigation() {
  return (
    <div className="PageNavigation">
      <div className="prev">이전</div>
      <div className="pages">
        <div className="page">
          <span>1</span>
        </div>
        <div className="page active">
          <span>2</span>
        </div>
        <div className="page">
          <span>3</span>
        </div>
        <div className="page">
          <span>4</span>
        </div>
        <div className="page">
          <span>5</span>
        </div>
      </div>
      <div className="next">다음</div>
    </div>
  );
}

function EventCard({ idx, event }) {
  const { title, state, date } = event;
  return (
    <Link to={`/event/${idx}`} className="EventCard">
      <div className="no">{idx}</div>
      <div className="title">{title}</div>
      <div className="state">{state}</div>
      <div className="date">{date}</div>
    </Link>
  );
}

export default function EventList() {
  return (
    <Layout>
      <Container>
        <div className="EventList">
          <h1>이벤트</h1>
          <div className="header">
            <div className="no">No</div>
            <div className="title">제목</div>
            <div className="state">상태</div>
            <div className="date">날짜</div>
          </div>
          <Link to="/event/1" className="EventCard">
            <div className="no">19</div>
            <div className="title">해피 데일리 피자 쿠폰 챌린지</div>
            <div className="state">종료</div>
            <div className="date">2024-04-18</div>
          </Link>
          <Link to="/event/2" className="EventCard">
            <div className="no">18</div>
            <div className="title">SKT 0day 배달/포장 50% 할인</div>
            <div className="state">진행중</div>
            <div className="date">2024-04-17</div>
          </Link>
          <Link to="/event/3" className="EventCard">
            <div className="no">17</div>
            <div className="title">행운뽑기 주인공을 찾아라</div>
            <div className="state">종료</div>
            <div className="date">2024-04-16</div>
          </Link>
          <Link to="/event/4" className="EventCard">
            <div className="no">16</div>
            <div className="title">
              5지는 치즈데이. 가정의달은 도미노와 함께!
            </div>
            <div className="state">진행중</div>
            <div className="date">2024-04-15</div>
          </Link>
          <Link to="/event/1" className="EventCard">
            <div className="no">15</div>
            <div className="title">해피 데일리 피자 쿠폰 챌린지</div>
            <div className="state">종료</div>
            <div className="date">2024-04-18</div>
          </Link>
          <Link to="/event/2" className="EventCard">
            <div className="no">14</div>
            <div className="title">SKT 0day 배달/포장 50% 할인</div>
            <div className="state">진행중</div>
            <div className="date">2024-04-17</div>
          </Link>
          <Link to="/event/3" className="EventCard">
            <div className="no">13</div>
            <div className="title">행운뽑기 주인공을 찾아라</div>
            <div className="state">종료</div>
            <div className="date">2024-04-16</div>
          </Link>
          <Link to="/event/4" className="EventCard">
            <div className="no">12</div>
            <div className="title">
              5지는 치즈데이. 가정의달은 도미노와 함께!
            </div>
            <div className="state">진행중</div>
            <div className="date">2024-04-15</div>
          </Link>
          <Link to="/event/1" className="EventCard">
            <div className="no">11</div>
            <div className="title">해피 데일리 피자 쿠폰 챌린지</div>
            <div className="state">종료</div>
            <div className="date">2024-04-18</div>
          </Link>
          <Link to="/event/2" className="EventCard">
            <div className="no">10</div>
            <div className="title">SKT 0day 배달/포장 50% 할인</div>
            <div className="state">진행중</div>
            <div className="date">2024-04-17</div>
          </Link>
          <PageNavigation />
        </div>
      </Container>
    </Layout>
  );
}
