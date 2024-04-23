import Layout from "../components/Layout";
function PizzaCard() {
  return (
    <div
      style={{
        flexShrink: 0,
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      <img
        src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_Td6eyIV8.jpg"
        width="100%"
        height="100%"
      />
      <div style={{ textAlign: "left", marginTop: 10 }}>
        <h2 style={{ fontWeight: "bold", fontSize: 24 }}>
          클래식 리코타+소시지 맥스
        </h2>
        <div style={{ fontWeight: "bold", margin: "10px 0", fontSize: 16 }}>
          <span style={{ color: "red" }}>L</span>17,400원
        </div>
        <div style={{ color: "gray", fontSize: 14 }}>
          <div>#포장 16,400원</div>
          <div>#클래식 치즈의 고소함과 만난 5가지 미트!</div>
        </div>
      </div>
    </div>
  );
}

export default function PizzaList() {
  return (
    <Layout>
      <h1>메뉴</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px 0",
          fontSize: "16px",
          color: "gray",
          borderBottom: "2px solid black",
          marginBottom: "40px",
        }}
      >
        <div>하프앤하프</div>
        <div>사이드디시</div>
        <div>인기세트메뉴</div>
        <div>마이키친</div>
        <div>음료&기타</div>
      </div>
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </Layout>
  );
}
