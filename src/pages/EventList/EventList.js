import { Layout, Container } from "components";
import { v4 as uuidv4 } from "uuid";
import "pages/EventList/EventList.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PageNavigation({ currentPage, setCurrentPage, length }) {
  return (
    <div className="PageNavigation">
      <div
        className="prev"
        onClick={() => setCurrentPage(prev => (prev - 10 < 0 ? 0 : prev - 10))}>
        이전
      </div>
      <div className="pages">
        {Array(Math.ceil(length / 10))
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`page ${currentPage === index * 10 ? "active" : ""}`}
              onClick={() => setCurrentPage(index * 10)}>
              <span>{index + 1}</span>
            </div>
          ))}
      </div>
      <div
        className="next"
        onClick={() =>
          setCurrentPage(prev => (prev + 10 > length ? prev : prev + 10))
        }>
        다음
      </div>
    </div>
  );
}

function EventCard({ event }) {
  const { id, title, state, date } = event;
  return (
    <Link to={`/event/${id}`} className="EventCard">
      <div className="no">{id}</div>
      <div className="title">{title}</div>
      <div className="state">{state}</div>
      <div className="date">{date}</div>
    </Link>
  );
}

export default function EventList() {
  const [eventList, setEventList] = useState([]);
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const movePage = () => {
    setEvents(eventList.slice(currentPage, currentPage + 10));
  };

  useEffect(() => {
    (async () => {
      const eventData = await (
        await fetch("http://localhost:8082/api/event/")
      ).json();

      setEventList(eventData);
      setEvents(eventData.slice(currentPage, currentPage + 10));
    })();
  }, []);

  useEffect(() => {
    movePage();
  }, [currentPage]);

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
          {events.map((event, idx) => (
            <EventCard key={uuidv4()} event={event} />
          ))}

          <PageNavigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            length={eventList.length}
          />
        </div>
      </Container>
    </Layout>
  );
}
