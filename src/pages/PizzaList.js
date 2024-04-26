import { useEffect, useState } from "react";
import { formatCurrency } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "../components/Container";
import PizzaModal from "../components/PizzaModal";
import { Tabs, Tab } from "../components/Tabs";
import { v4 as uuidv4 } from "uuid";
import useModal from "../hooks/useModal";
import "./PizzaList.css";

function InfoIcon({ onClick }) {
  return (
    <div className="InfoIcon" onClick={(e) => onClick(e)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    </div>
  );
}

function PizzaCard({ pizza, openModal }) {
  const { id, img, title, price, content, isNew } = pizza;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pizza/" + id);
  };

  return (
    <>
      {/* <Link to={`/pizza/${id}`} className="PizzaCard">  */}
      <div className="PizzaCard" onClick={handleClick}>
        <div className="thumb">
          <img src={img} width="100%" height="100%" />
          <InfoIcon onClick={openModal} />
        </div>
        <div className="title">
          <h2>{title}</h2>
          {isNew && (
            <div className="new">
              <span>new</span>
            </div>
          )}
        </div>
        <div className="price">
          <span className="size">L</span>
          {formatCurrency(price)}원
        </div>
        <div>#포장 {formatCurrency(price - 1000)}원</div>
        <div>#{content}</div>
      </div>
    </>
  );
}

export default function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    fetch("http://localhost:5000/api/pizza")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
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
            {pizzas.map((pizza) => (
              <PizzaCard
                key={uuidv4()}
                pizza={pizza}
                openModal={(e) => openModal(e)}
              />
            ))}
          </div>
        </Container>
      </Layout>
      {isOpen && <PizzaModal closeModal={closeModal} />}
    </>
  );
}
