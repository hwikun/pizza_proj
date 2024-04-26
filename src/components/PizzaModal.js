import "./PizzaModal.css";
import CloseIcon from "./CloseIcon";

function Accordion() {
  return (
    <div className="Accordion">
      <div className="title">제품 상세보기</div>
      <div className="content">고소함과 얼얼함의 콜라보레이션!</div>
      <div className="title">메인 토핑</div>
      <div className="content">
        *맥콘 베이컨: 트러플 크림 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라,
        맥앤치즈, 옥수수 / *마라 불고기: 토마토 소스, 콰트로 치즈 퐁듀, 체더,
        모차렐라, 페퍼로니, 청피망, 마라 포크 크럼블
      </div>
      <div className="title">원산지</div>
      <div className="content">
        베이컨(돼지고기) : 외국산 / 페퍼로니[돼지고기(국내산), 쇠고기(호주산)] /
        마라 포크 크럼블(돼지고기) : 국내산
      </div>
      <div className="title">도미노피자의 특징</div>
      <div className="content">
        <h3>매일매일 만들어 신선하고 쫄깃 고소한 도우!</h3>
        <p>
          최고의 도우 맛을 위해 물, 밀가루, 이스트 등을 최적의 비율 로 매일
          반죽하여 냉장저온(1~3°C) 숙성한 도미노 피자의 도우! 수분보유량이
          우수하고 도우 입자 사이의 공기층이 적절히 형성된 3일~7일차 도우를
          사용해 전문 피자메이커가 핸드토스드(Hand Tossed) 방식으 로 만들어
          특유의 쫄깃 하고 포실포실한 식감과 맛, 향으로 오감을 충족시킵니다.
        </p>
        <h3>원유부터 다른 깊고 풍부한 맛, 도미노만의 시그니처 치즈!</h3>
        <p>
          도미노피자만을 위해 연구 개발된 도미노 시그니처 치즈는 미국 농무성에서
          인정한 A등급 프리미엄 우유로 생산되어 최고의 맛과 풍미를 자랑하는
          모차렐라 피자 치즈 입니다. 지방 함량과 단백질, 염도 함량을 최적의
          밸런스로 맞춰 고소한 맛과 치즈 풍미를 강화, 부드럽고 쫄깃하게 늘어나는
          치즈 스트레칭(늘어지는 정도)까지 고려한 최상의 치즈! 게다가 페터 크림
          치즈, 체더 치즈, 콰트로 치즈 퐁듀, 리코타 치즈 등 고급 프리미엄 피자
          치즈를 사용함으로써 피자의 품격을 높여 더욱 맛있는 피자를
          완성하였습니다.
        </p>
        <h3>신선한 캘리포니아산 프리미엄 토마토 소스!</h3>
        <p>
          캘리포니아는 따뜻한 햇살과 시원한 저녁 날씨 덕에 토마토가 자라기에
          최적의 환경을 제공합니다. 이 곳에 위치한 대규모 (35만 에이커) 토마토
          농장)에서 70일 동안 잘 익은 토마토는 빠른시간 (4~6시간)내 모든 가공
          처리가 이루어져 신선함이 살아있습니다. 캘리포니아산 토마토는 과육이
          풍부해 피자 소스로 만들었을 때 당도, 산미, 감칠맛이 극상의 조화를
          이루기 때문에 피자 맛에 깊이를 더합니다.
        </p>
        <h3>항상 놀랍고 새로운 프리미엄 토핑!</h3>
        <p>
          도미노피자는 프리미엄 피자에 어울리는 최고급 식자재인 와규,
          직화스테이크, 게살, 블랙타이거 슈림프 등 항상 놀라움과 새로움을 주는
          혁신적인 프리미엄 토핑을 피자 업계 최초로 적용하며 소비자의 입맛과
          트렌드를 선도하고 피자 선택의 폭을 넓히는 것은 물론 도미노피자만의
          색다른 고객 감동을 만들어 가고 있습니다.
        </p>
      </div>
    </div>
  );
}

export default function PizzaModal({ closeModal }) {
  return (
    <div className="PizzaModal" onClick={closeModal}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <div className="title">맥콘 베이컨+마라 불고기</div>
          <CloseIcon onClick={closeModal} />
        </div>
        <div className="content">
          <div className="main">
            <div className="thumb">
              <img src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_0j7mUmht.jpg" />
              <p> 모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.</p>
            </div>
            <div className="info">
              <label>메인 토핑</label>
              <p>
                *맥콘 베이컨: 트러플 크림 소스, 콰트로 치즈 퐁듀, 체더,
                모차렐라, 맥앤치즈, 옥수수 / *마라 불고기: 토마토 소스, 콰트로
                치즈 퐁듀, 체더, 모차렐라, 페퍼로니, 청피망, 마라 포크 크럼블
              </p>
              <label>원산지</label>
              <p>
                베이컨(돼지고기) : 외국산 / 페퍼로니[돼지고기(국내산),
                쇠고기(호주산)] / 마라 포크 크럼블(돼지고기) : 국내산
              </p>
            </div>
          </div>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
