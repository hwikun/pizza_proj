import Layout from "../components/Layout";
import Container from "../components/Container";
import "./PizzaView.css";
import { Tabs, Tab } from "../components/Tabs";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Counter({ defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="Counter">
      <div className="minus button">-</div>
      <div className="num">{value}</div>
      <div className="plus button">+</div>
    </div>
  );
}

function ToppingCard({ topping }) {
  const { title, imgUrl, price } = topping || {};
  return (
    <div className="ToppingCard">
      <img src={imgUrl} width="60" />
      <div className="detail">
        <div className="title">{title}</div>
        <div className="price">{price}</div>
      </div>
      <Counter defaultValue={0} />
    </div>
  );
}

export default function PizzaView() {
  const price = 17900;

  const toppings = [
    {
      imgUrl: "https://cdn.dominos.co.kr/admin/upload/topping/RTP051.jpg",
      title: "파인애플 40g(8개)",
      price: 500,
    },
    {
      imgUrl: "https://cdn.dominos.co.kr/admin/upload/topping/RTP036.jpg",
      title: "도미노치즈 100g",
      price: 3300,
    },
    {
      imgUrl: "https://cdn.dominos.co.kr/admin/upload/topping/RTP059.jpg",
      title: "올리브 20g",
      price: 300,
    },
  ];
  return (
    <Layout>
      <Container>
        <h1>메뉴</h1>
        <Tabs>
          <Tab active>피자</Tab>
          <Tab>하프앤하프</Tab>
          <Tab>사이드디시</Tab>
          <Tab>인기세트메뉴</Tab>
          <Tab>마이키친</Tab>
          <Tab>음료&기타</Tab>
        </Tabs>
        <div className="PizzaView">
          <div>
            <div className="thumb">
              <img src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_Sby1plV9.jpg" />
              <div className="button">제품 상세</div>
            </div>
          </div>
          <div className="info">
            <h1 className="title">클래식 리코타+소시지 맥스</h1>
            <div>
              #포장 16,400원
              <br />
              #클래식 치즈의 고소함과 만난 5가지 미트!
            </div>
            <label>사이즈 선택</label>
            <div className="price">
              <span>L</span>
              {price}
            </div>
            <label>토핑 추가</label>
            <div>
              {toppings.map((topping) => (
                <ToppingCard key={uuidv4()} topping={topping} />
              ))}
            </div>
            <label>수량 선택</label>
            <Counter defaultValue={1} />
            <label>총 금액</label>
            <div className="sum">
              <span>총 금액</span>17,900원 담기
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
