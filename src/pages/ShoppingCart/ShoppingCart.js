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

function ToppingItem({ topping, deleteTopping }) {
  const { id, name, price, amount } = topping;
  return (
    <div className="item">
      <span>
        {name}(+{price}원)x{amount}
      </span>
      <span>
        <XIcon onClick={deleteTopping} />
      </span>
    </div>
  );
}

function PizzaItem({ item, deleteItem, deleteTopping }) {
  const { pizzaId, pizzaTitle, pizzaPrice, pizzaImg, pizzaAmount, toppings } =
    item;
  const [pizzaTotal, setPizzaTotal] = useState(
    pizzaPrice * pizzaAmount +
      toppings.reduce((acc, p) => acc + p.price * p.amount, 0),
  );
  // useEffect(() => {
  //   setPizzaTotal(
  //     pizzaPrice * pizzaAmount +
  //       toppings.reduce((acc, p) => acc + p.price * p.amount, 0),
  //   );
  // }, [pizzaTotal]);
  return (
    <div className="tr">
      <div className="td title">
        <div className="thumb">
          <img src={pizzaImg} width="100%" height="100%" alt="이미지" />
        </div>
        <div className="info">
          <div>
            <strong>{pizzaTitle}</strong>
          </div>
          <div>{pizzaPrice}원</div>
        </div>
      </div>
      <div className="td topping">
        {toppings
          // .filter(topping => topping.amount !== 0)
          .map((topping, index) => (
            <ToppingItem
              topping={topping}
              key={index}
              deleteTopping={() => deleteTopping(pizzaId, topping.id)}
            />
          ))}
      </div>
      <div className="td count">
        <Counter count={pizzaAmount} />
      </div>
      <div className="td price">
        {/* {pizzaPrice * pizzaAmount + toppingPrice}원 */}
        {pizzaTotal}원
      </div>
      <div className="td delete">
        <XIcon w={20} h={20} onClick={() => deleteItem(pizzaId)} />
      </div>
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
    console.log("deleteTopping");
    const list = JSON.parse(sessionStorage.getItem("list"));
    const itemIndex = list.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      const updatedToppings = list[itemIndex].toppings.filter(
        topping => topping.id !== toppingId,
      );
      const updatedItem = { ...list[itemIndex], toppings: updatedToppings };
      const newList = [
        ...list.slice(0, itemIndex),
        updatedItem,
        ...list.slice(itemIndex + 1),
      ];
      setList(newList);
      sessionStorage.setItem("list", JSON.stringify(newList));
    }
  };
  useEffect(() => {
    const storage = JSON.parse(sessionStorage.getItem("list") || "[]");
    setList(storage);
    const sum = storage
      .map(
        item =>
          item.pizzaPrice * item.pizzaAmount +
          item.toppings.reduce(
            (acc, topping) => acc + topping.price * topping.amount,
            0,
          ),
      )
      .reduce((sum, price) => sum + price, 0);
    setTotal(sum);
    setCartItem(storage.length);
  }, [cartItem]); // list를 의존성 배열에 추가하여 list가 변경될 때마다 useEffect가 실행되도록 함
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
                <PizzaItem
                  key={idx}
                  item={item}
                  deleteItem={deleteItem}
                  deleteTopping={(itemId, toppingId) =>
                    deleteTopping(itemId, toppingId)
                  }
                />
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
