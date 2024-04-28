import Layout from "../components/Layout";
import Container from "../components/Container";
import PizzaModal from "../components/PizzaModal";
import { Tabs, Tab } from "../components/Tabs";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { formatCurrency } from "../lib/utils";
import useModal from "../hooks/useModal";
import "./PizzaView.css";

function Counter({ count, increment, decrement }) {
  return (
    <div className="Counter">
      <div className="minus button" onClick={decrement}>
        -
      </div>
      <div name="name" className="num">
        {count}
      </div>
      <div className="plus button" onClick={increment}>
        +
      </div>
    </div>
  );
}

function ToppingCard({ topping, count, increment, decrement }) {
  const { imgUrl, name, price } = topping || {};

  return (
    <div key={uuidv4()} className="ToppingCard">
      <img src={imgUrl} width="60" />
      <div className="detail">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default function PizzaView() {
  const { id } = useParams();
  const [nowPizza, setNowPizza] = useState({});
  const { isOpen, openModal, closeModal } = useModal();
  const [order, setOrder] = useState({});
  const [totalCount, setTotalCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5050/api/pizza/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setNowPizza(data);
          setTotalPrice(data.price);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      setNowPizza({});
    }
  }, [id]);

  const toppings = [
    {
      id: 1,
      imgUrl: "https://cdn.dominos.co.kr/admin/upload/topping/RTP051.jpg",
      name: "파인애플 40g(8개)",
      price: 500,
    },
    {
      id: 2,
      imgUrl: "https://cdn.dominos.co.kr/admin/upload/topping/RTP036.jpg",
      name: "도미노치즈 100g",
      price: 3300,
    },
    {
      id: 3,
      imgUrl: "https://cdn.dominos.co.kr/admin/upload/topping/RTP059.jpg",
      name: "올리브 20g",
      price: 300,
    },
  ];

  const incrementTopping = (topping) => {
    console.log("increment " + topping.name);
    const newOrder = {
      ...order,
      [topping.name]: order[topping.name] ? order[topping.name] + 1 : 1,
    };
    setOrder(newOrder);
    computeTopping(newOrder);
  };

  const decrementTopping = (topping) => {
    console.log("decrement " + topping.name);
    console.log("order[topping.name]  " + order[topping.name]);
    const newOrder = {
      ...order,
      [topping.name]: order[topping.name] > 0 ? order[topping.name] - 1 : 0,
    };
    setOrder(newOrder);
    computeTopping(newOrder);
  };

  const computeTopping = (newOrder) => {
    console.log("computeTopping newOrder" + JSON.stringify(newOrder));
  };

  const incrementCount = () => {
    console.log("incrementCount");
    setTotalCount(totalCount + 1);
  };

  const decrementCount = () => {
    console.log("decrementCount");
    setTotalCount(totalCount - 1 > 1 ? totalCount - 1 : 1);
  };

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
          <div className="PizzaView">
            <div>
              <div className="thumb">
                <img src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_Sby1plV9.jpg" />
                <div className="button" onClick={openModal}>
                  제품 상세
                </div>
              </div>
            </div>
            <div className="info">
              <h1 className="title">{nowPizza.title}</h1>
              <div>
                #포장 {nowPizza.price ? formatCurrency(nowPizza.price) : "-"}원
                <br />#{nowPizza.content}
              </div>
              <label>사이즈 선택</label>
              <div className="price">
                <span>L</span>
                {nowPizza.price ? formatCurrency(nowPizza.price) : "-"}
              </div>
              <label>토핑 추가</label>
              <div>
                {toppings.map((topping) => (
                  <ToppingCard
                    key={uuidv4()}
                    topping={topping}
                    count={order[topping.name] || 0}
                    increment={() => incrementTopping(topping)}
                    decrement={() => decrementTopping(topping)}
                  />
                ))}
              </div>
              <label>수량 선택</label>
              <Counter
                count={totalCount}
                increment={incrementCount}
                decrement={decrementCount}
              />
              <label>총 금액</label>
              <div className="sum">
                <span>총 금액</span>
                {formatCurrency(totalPrice)}원 담기
              </div>
            </div>
          </div>
        </Container>
      </Layout>
      {isOpen && <PizzaModal closeModal={closeModal} />}
    </>
  );
}
