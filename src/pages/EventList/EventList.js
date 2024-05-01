import { Layout, Container } from "components";
import { v4 as uuidv4 } from "uuid";

function EventCard({ event }) {
  const 
  return <div>EventCard</div>;
}

export default function EventList() {
  const events = [
    {
      id: 1,
      title: "5지는 치즈데이. 가정의달은 도미노와 함께!",
      img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1243_eTBAQsir.jpg",
      content: `
        모든 고객 이용 가능(단, 배달앱 주문 시 혜택 적용 불가)\n
        제휴 및 쿠폰 등 여타 할인과 중복 적용 가능\n
        Best 피자 5종 오리지널 도우 주문 한정 혜택 적용 가능합니다.\n
        모짜렐라 치즈 한정 1.5배 적용됩니다.\n
        일부 특수 매장(대명비발디파크점, 롯데월드점, 알펜시아점, 잠실야구장점) 제외`,
    },
    {
      id: 2,
      title: "SKT 0day 배달/포장 50% 할인",
    },
    {
      id: 3,
      title: "행운뽑기 주인공을 찾아라",
    },
    {
      id: 4,
      title: "해피 데일리 피자 쿠폰 챌린지",
    },
  ];
  return (
    <Layout>
      <Container>
        <div className="EventList">
          <h1>이벤트</h1>
          {events.map((event) => (
            <EventCard key={uuidv4()} event={event} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}
