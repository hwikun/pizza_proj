import Layout from "../components/Layout";
export default function PizzaView() {
  return (
    <Layout>
      <div style={{ display: "flex", gap: "50px" }}>
        <div
          style={{
            width: 600,
            height: 600,
            paddingBottom: 100,
            position: "relative",
          }}
        >
          <img
            src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_Sby1plV9.jpg"
            width="100%"
          />
          <div
            style={{
              background: "black",
              color: "white",
              position: "absolute",
              top: 540,
              right: 0,
              height: "50px",
              lineHeight: "50px",
              fontSize: 30,
              padding: "5px 30px",
            }}
          >
            제품 상세
          </div>
        </div>
        <div style={{ flexGrow: 1 }}>
          <h1 style={{ fontWeight: "bold", margin: 0, fontSize: 30 }}>
            클래식 리코타+소시지 맥스
          </h1>
        </div>
      </div>
    </Layout>
  );
}
