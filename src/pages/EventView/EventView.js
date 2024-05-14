import { Layout, Container } from "components";
import "pages/EventView/EventView.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EventView() {
  const { id } = useParams();
  console.log(id);
  const [event, setEvent] = useState({
    id: 0,
    title: "",
    img: "",
    content: "",
    state: "",
    date: "",
  });
  const { title, img, content, state, date } = event;

  useEffect(() => {
    (async () => {
      const eventData = await (
        await fetch(`http://localhost:8082/api/event/${id}`)
      ).json();
      setEvent(eventData);
    })();
  }, []);

  return (
    <Layout>
      <Container>
        <div className="EventView">
          <h1>이벤트</h1>
          <div>
            <div className="title">{title}</div>
            <div className="info">
              <div className="date">{date}</div>
              <div className="state">{state}</div>
            </div>
            <div className="img">
              <img src={img} width="100%" />
            </div>
            <div className="content">
              {content.split("\n").map(line => (
                <p>{line}</p>
              ))}
            </div>
            <div className="buttons">
              <button>목록</button>
              <div>
                <button className="prev">이전글</button>
                <button className="next">다음글</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
