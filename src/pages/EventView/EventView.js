import { Layout, Container } from "components";
import "./EventView.css";

export default function EventView() {
  const event = {
    id: 2,
    title: "SKT 0day 배달/포장 50% 할인",
    img: "https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1231_GhELVIyL.jpg",
    content: `쿠폰 다운로드 기간: 2024년 4월 10일(수), 4월 20일(토), 4월 30일(화) 3일 중 1일\n
        쿠폰 사용 기간: 각 발급일로부터 5일 (4/10~4/14, 4/20~4/24, 4/30~5/4)\n
        쿠폰 다운로드 방법: T멤버십 앱 로그인 > 0 day 이벤트 페이지 > 도미노피자 할인 쿠폰 다운로드\n
        쿠폰 사용 방법: 도미노피자 홈페이지/앱 접속 > 배달/포장 주문 선택 > 배달 주소 등록/포장 매장 선택 > 장바구니에 담기 > 할인 적용 [통신사 및 카드사 제휴 프로모션 선택] > [SKT 0 day 혜택(배달/포장 50%, Silver, Gold, VIP 모두 사용 가능)] 선택 > 쿠폰 번호 입력 > 조회 클릭 > 적용 클릭 > 결제 및 주문 완료\n
        도미노피자 홈페이지/앱 이용 시 오전 10시 이후부터 원활하게 주문하실 수 있습니다.\n
        매장 오픈 시간: 오전 11시~오전 11시 30분(지점별 다름)`,
    state: "진행중",
    date: "2024-04-19",
  };
  const { title, img, content, state, date } = event;
  return (
    <Layout>
      <Container>
        <div className="EventView">
          <h1>이벤트</h1>
          <div>
            <div className="title">SKT 0day 배달/포장 50% 할인</div>
            <div className="info">
              <div className="date">2024-04-19</div>
              <div className="state">진행중</div>
            </div>
            <div className="img">
              <img
                src="https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1231_GhELVIyL.jpg"
                width="100%"
              />
            </div>
            <div className="content">
              <p>
                쿠폰 다운로드 기간: 2024년 4월 10일(수), 4월 20일(토), 4월
                30일(화) 3일 중 1일
              </p>
              <p>
                쿠폰 사용 기간: 각 발급일로부터 5일 (4/10~4/14, 4/20~4/24,
                4/30~5/4)
              </p>
              <p>
                쿠폰 다운로드 방법: T멤버십 앱 로그인 > 0 day 이벤트 페이지 >
                도미노피자 할인 쿠폰 다운로드
              </p>
              <p>
                쿠폰 사용 방법: 도미노피자 홈페이지/앱 접속 > 배달/포장 주문
                선택 > 배달 주소 등록/포장 매장 선택 > 장바구니에 담기 > 할인
                적용 [통신사 및 카드사 제휴 프로모션 선택] > [SKT 0 day
                혜택(배달/포장 50%, Silver, Gold, VIP 모두 사용 가능)] 선택 >
                쿠폰 번호 입력 > 조회 클릭 > 적용 클릭 > 결제 및 주문 완료\
              </p>
              <p>
                도미노피자 홈페이지/앱 이용 시 오전 10시 이후부터 원활하게
                주문하실 수 있습니다.
              </p>
              <p>매장 오픈 시간: 오전 11시~오전 11시 30분(지점별 다름)</p>
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
