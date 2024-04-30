import { Layout, Container, Counter } from "components";
import "./ShoppingCart.css";

function XIcon({ w = 10, h = 10, onClick }) {
  return (
    <div className="x-icon" style={{ width: w, height: h }} onClick={onClick}>
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
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

export default function ShoppingCart() {
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
              <div className="tr">
                <div className="td title">
                  <div className="thumb">
                    <img
                      src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_Td6eyIV8.jpg"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="info">
                    <div>
                      <strong>맥콘 베이컨+클래식 리코타</strong>
                    </div>
                    <div>16,900원</div>
                  </div>
                </div>
                <div className="td topping"></div>
                <div className="td count">
                  <Counter count={2} />
                </div>
                <div className="td price">33,800원</div>
                <div className="td delete">
                  <XIcon w={20} h={20} />
                </div>
              </div>
              <div className="tr">
                <div className="td title">
                  <div className="thumb">
                    <img
                      src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_Sby1plV9.jpg"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="info">
                    <div>
                      <strong>클래식 리코타+소시지 맥스</strong>
                    </div>
                    <div>17,400원</div>
                  </div>
                </div>
                <div className="td topping">
                  <div className="item">
                    <span>도미노 치즈 100g(+3000원)x1</span>
                    <span>
                      <XIcon />
                    </span>
                  </div>
                  <div className="item">
                    <span>파인애플 40g(8개)(+500원)x1</span>
                    <span>
                      <XIcon />
                    </span>
                  </div>
                </div>
                <div className="td count">
                  <Counter count={1} />
                </div>
                <div className="td price">20,900원</div>
                <div className="td delete">
                  <XIcon w={20} h={20} />
                </div>
              </div>
              <div className="tr">
                <div className="td title">
                  <div className="thumb">
                    <img
                      src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_Sby1plV9.jpg"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="info">
                    <div>
                      <strong>클래식 리코타+소시지 맥스</strong>
                    </div>
                    <div>17,400원</div>
                  </div>
                </div>
                <div className="td topping">
                  <div className="item">
                    <span>파인애플 40g(8개)(+500원)x1</span>
                    <span>
                      <XIcon />
                    </span>
                  </div>
                </div>
                <div className="td count">
                  <Counter count={1} />
                </div>
                <div className="td price">17,900원</div>
                <div className="td delete">
                  <XIcon w={20} h={20} />
                </div>
              </div>
            </div>
            <div className="footer">
              주문금액 <span className="price">72,600</span>원
            </div>
          </div>
          <div className="buttons">
            <button className="clear">장바구니 비우기</button>
            <button className="order">주문하기</button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
