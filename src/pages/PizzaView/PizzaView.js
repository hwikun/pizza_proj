import { Layout, Container, PizzaModal, Counter, PizzaTabs } from "components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { formatCurrency } from "lib/utils";
import { useNavigate } from "react-router-dom";
import useModal from "hooks/useModal";
import "./PizzaView.css";

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
  const navigate = useNavigate();
  const { id } = useParams();
  const [nowPizza, setNowPizza] = useState({});
  const { isOpen, openModal, closeModal } = useModal();
  const [order, setOrder] = useState({});
  const [toppingPrice, setToppingPrice] = useState(0);
  const [pizzaCount, setPizzaCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/pizza/${id}`)
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
    console.log(
      "computeTopping newOrder" + JSON.stringify(Object.entries(newOrder))
    );
    let totalTopping = Object.entries(newOrder).reduce(
      (total, [name, count]) => {
        let topping = toppings.find((topping) => topping.name === name);
        return total + count * topping.price;
      },
      0
    );
    setToppingPrice(totalTopping);
    setTotalPrice(pizzaCount * nowPizza.price + totalTopping);
  };

  const incrementCount = () => {
    console.log("incrementCount");
    const count = pizzaCount + 1;
    setPizzaCount(count);
    setTotalPrice(count * nowPizza.price + toppingPrice);
  };

  const decrementCount = () => {
    console.log("decrementCount");
    const count = pizzaCount - 1 > 1 ? pizzaCount - 1 : 1; // 최소값 1
    setPizzaCount(count); // 최소값 1
    setTotalPrice(count * nowPizza.price + toppingPrice);
  };

  return (
    <>
      <Layout>
        <Container>
          <h1>메뉴</h1>
          <PizzaTabs />
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
                count={pizzaCount}
                increment={incrementCount}
                decrement={decrementCount}
              />
              <label>총 금액</label>
              <div className="sum" onClick={() => navigate("/cart")}>
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
