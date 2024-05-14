import { Layout, Container, Counter } from "components";
import "pages/ShoppingCart/ShoppingCart.css";
import { useEffect, useState } from "react";
import { useAuth } from "hooks/useAuth";

function XIcon({ w = 10, h = 10, onClick }) {
  return (
    <div className="x-icon" style={{ width: w, height: h }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

function ToppingCard({ topping, deleteTopping }) {
  const { id, name, price, amount } = topping;
  return (
    <div className="item">
      <span>
        {name}(+{price}원)x{amount}
      </span>
      <span>
        <XIcon onClick={() => deleteTopping(id)} />
      </span>
    </div>
  );
}

export default function ShoppingCart() {
  const { cartItem, setCartItem } = useAuth();
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const clearCart = () => {
    setList([]);
    sessionStorage.setItem("list", JSON.stringify([]));
  };
  const deleteItem = id => {
    const list = JSON.parse(sessionStorage.getItem("list"));
    const newList = list.filter(item => item.pizzaId !== id);
    sessionStorage.setItem("list", JSON.stringify(newList));
    setCartItem(newList);
  };

  const deleteTopping = (itemId, toppingId) => {
    const list = JSON.parse(sessionStorage.getItem("list"));
    const item = list.find(item => item.id === itemId);
    const newList = [
      ...list.filter(item => item.id !== itemId),
      {
        ...item,
        toppings: [item.toppings.filter(item => item.id !== toppingId)],
      },
    ];
  };
  useEffect(() => {
    const storage = JSON.parse(sessionStorage.getItem("list") || "[]");
    setList(storage);
    const sum = storage
      .map(item => item.pizzaPrice * item.pizzaAmount + item.toppingPrice)
      .reduce((sum, price) => sum + price, 0);
    setTotal(sum);
    setCartItem(storage.length);
  }, [cartItem]);
  return (
    <Layout>
      <Container>
        <div className="ShoppingCart">
          <h1>장바구니</h1>
          <div className="cart-table">
            <div className="header">주문내역</div>
            <div className="thead">
              <div className="th title">상품정보</div>
              <div className="th topping">추가토핑</div>
              <div className="th count">수량</div>
              <div className="th price">금액</div>
              <div className="th delete"></div>
            </div>
            <div className="tbody">
              {list.map((item, idx) => (
                <div key={idx} className="tr">
                  <div className="td title">
                    <div className="thumb">
                      <img
                        src={item.pizzaImg}
                        width="100%"
                        height="100%"
                        alt="이미지"
                      />
                    </div>
                    <div className="info">
                      <div>
                        <strong>{item.pizzaTitle}</strong>
                      </div>
                      <div>{item.pizzaPrice}원</div>
                    </div>
                  </div>
                  <div className="td topping">
                    {item.toppings
                      // .filter(topping => topping.amount !== 0)
                      .map((topping, index) => (
                        <ToppingCard
                          topping={topping}
                          key={index}
                          deleteTopping={id => deleteTopping(id)}
                        />
                      ))}
                  </div>
                  <div className="td count">
                    <Counter count={item.pizzaAmount} />
                  </div>
                  <div className="td price">
                    {item.pizzaPrice * item.pizzaAmount + item.toppingPrice}원
                  </div>
                  <div className="td delete">
                    <XIcon
                      w={20}
                      h={20}
                      onClick={() => deleteItem(item.pizzaId)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="footer">
              주문금액 <span className="price">{total}</span>원
            </div>
          </div>
          <div className="buttons">
            <button className="clear" onClick={clearCart}>
              장바구니 비우기
            </button>
            <button className="order">주문하기</button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
