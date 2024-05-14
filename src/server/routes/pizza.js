const express = require("express");
const router = express.Router();

const pizzas = [
  {
    id: 1,
    img: "https://cdn.dominos.co.kr/admin/upload/goods/20240326_Td6eyIV8.jpg",
    title: "맥콘 베이컨+클래식 리코타",
    price: 16900,
    isNew: true,
    content: "맥앤치즈의 고소함과 만난 클래식의 맛!",
  },
  {
    id: 2,
    img: "https://cdn.dominos.co.kr/admin/upload/goods/20240326_Sby1plV9.jpg",
    title: "클래식 리코타+소시지 맥스",
    price: 17400,
    isNew: true,
    content: "클래식 치즈의 고소함과 만난 5가지 미트!",
  },
  {
    id: 3,
    img: "https://cdn.dominos.co.kr/admin/upload/goods/20240326_0j7mUmht.jpg",
    title: "맥콘 베이컨+마라 불고기",
    price: 17400,
    isNew: false,
    content: "고소함과 얼얼함의 콜라보!",
  },
  {
    id: 4,
    img: "https://cdn.dominos.co.kr/admin/upload/goods/20240326_8lirinP7.jpg",
    title: "소시지 맥스+맵퍼로니",
    price: 17900,
    isNew: false,
    content: "짠맵 조합에 코카-콜라 한 잔이면 크으~",
  },
  {
    id: 5,
    img: "https://cdn.dominos.co.kr/admin/upload/goods/20231215_965Hu68d.jpg",
    title: "브리스킷 바비Q",
    price: 34900,
    isNew: false,
    content:
      "4가지 페퍼(블랙, 핑크, 화이트, 그린)로 시즈닝한 육즙 가득 브리스킷 스테이크!",
  },
  {
    id: 6,
    img: "https://cdn.dominos.co.kr/admin/upload/goods/20230612_A5Qaqy05.jpg",
    title: "치즈 크레이프 샌드",
    price: 34900,
    isNew: false,
    content: "7가지 치즈, 스테이크, 슈림프가 겹겹이 쌓인 맛의 품격!",
  },
];
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

router.get("/", (req, res) => {
  res.json(pizzas);
});

router.get("/toppings", (req, res) => {
  res.json(toppings);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const nowPizza = pizzas.find(pizza => pizza.id === id);
  if (nowPizza) {
    res.json(nowPizza);
  } else {
    res.status(404).send("Not found");
  }
});

module.exports = router;
