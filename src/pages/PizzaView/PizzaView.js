import { Layout, Container, PizzaModal, Counter, PizzaTabs } from "components";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { formatCurrency } from "lib/utils";
import { useNavigate } from "react-router-dom";
import useModal from "hooks/useModal";
import "pages/PizzaView/PizzaView.css";
import useCounter from "hooks/useCounter";

const ToppingCard = ({ topping, orders, setOrders }) => {
  const { id, imgUrl, name, price } = topping || {};

  const increment = () => {
    setOrders({ ...orders, [id]: orders[`${id}`] + 1 });
  };
  const decrement = () => {
    setOrders({
      ...orders,
      [id]: orders[`${id}`] - 1 < 0 ? 0 : orders[`${id}`] - 1,
    });
  };

  return (
    <div className="ToppingCard">
      <img src={imgUrl} width="60" />
      <div className="detail">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Counter
        count={orders[`${id}`]}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
};

export default function PizzaView() {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();
  const { id } = useParams();
  const [pizza, setPizza] = useState({
    id: 0,
    img: "",
    title: "",
    price: 0,
    isNew: false,
    content: "",
  });
  const [toppings, setToppings] = useState([]);
  const [pizzaAmount, setPizzaAmount] = useCounter(1);
  const [orders, setOrders] = useState({ 1: 0, 2: 0, 3: 0 });
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const calcSum = () => {
      const orderPrices = toppings.map(
        topping => topping.price * (orders[topping.id] || 0),
      );
      setSum(orderPrices.reduce((sum, price) => sum + price, 0));
    };

    calcSum();
  }, [orders, toppings]);

  const putInCart = () => {
    const list = JSON.parse(sessionStorage.getItem("list") || "[]");

    const cartItem = {
      pizzaId: pizza.id,
      pizzaImg: pizza.img,
      pizzaTitle: pizza.title,
      pizzaPrice: pizza.price,
      toppings: toppings
        .filter(item => orders[item.id] !== 0)
        .map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          amount: orders[`${item.id}`],
        })),
      toppingPrice: sum,
      pizzaAmount: pizzaAmount,
    };
    const newList = [...list, cartItem];
    sessionStorage.setItem("list", JSON.stringify(newList));
    navigate("/cart");
  };
  useEffect(() => {
    const urls = [
      `http://localhost:8082/api/pizza/${id}`,
      "http://localhost:8082/api/pizza/toppings",
    ];
    (async () => {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const datas = await Promise.all(
        responses.map(response => response.json()),
      );

      setPizza(datas[0]);
      setToppings(datas[1]);
    })();
  }, []);
  return (
    <>
      <Layout>
        <Container>
          <h1>메뉴</h1>
          <PizzaTabs />
          <div className="PizzaView">
            <div>
              <div className="thumb">
                <img src={pizza?.img} />
                <div className="button" onClick={openModal}>
                  제품 상세
                </div>
              </div>
            </div>
            <div className="info">
              <h1 className="title">{pizza?.title}</h1>
              <div>
                #포장 {formatCurrency(pizza?.price - 1000)}원
                <br />#{pizza?.content}
              </div>
              <label>사이즈 선택</label>
              <div className="price">
                <span>L</span>
                {formatCurrency(pizza?.price)}원
              </div>
              <label>토핑 추가</label>
              <div>
                {toppings.map((topping, idx) => (
                  <ToppingCard
                    key={uuidv4()}
                    topping={topping}
                    orders={orders}
                    setOrders={setOrders}
                  />
                ))}
              </div>
              <label>수량 선택</label>
              <Counter
                count={pizzaAmount}
                increment={() => setPizzaAmount(1)}
                decrement={() => setPizzaAmount(-1)}
              />
              <label>총 금액</label>
              <div className="sum" onClick={putInCart}>
                <span>총 금액</span>
                {formatCurrency(pizza?.price * pizzaAmount + sum)}원 담기
              </div>
            </div>
          </div>
        </Container>
      </Layout>
      {isOpen && <PizzaModal closeModal={closeModal} pizzaId={id} />}
    </>
  );
}
