import Layout from "../components/Layout";
import Container from "../components/Container";
import { Tabs, Tab } from "../components/Tabs";
import { Link } from "react-router-dom";
import "./PizzaList.css";

function PizzaCard() {
  return (
    <Link to="/pizza/1" className="PizzaCard">
      <img
        src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_Td6eyIV8.jpg"
        width="100%"
        height="100%"
      />
      <h2 className="title">클래식 리코타+소시지 맥스</h2>
      <div className="price">
        <span className="size">L</span>17,400원
      </div>
      <div>#포장 16,400원</div>
      <div>#클래식 치즈의 고소함과 만난 5가지 미트!</div>
    </Link>
  );
}

export default function PizzaList() {
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
        <div className="PizzaList">
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </Container>
    </Layout>
  );
}
