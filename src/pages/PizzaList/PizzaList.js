import { formatCurrency } from "lib/utils";
import { useNavigate } from "react-router-dom";
import { Layout, Container, PizzaModal, PizzaTabs } from "components";
import { v4 as uuidv4 } from "uuid";
import useModal from "hooks/useModal";
import "pages/PizzaList/PizzaList.css";
import { useEffect, useState } from "react";

function InfoIcon({ onClick, setPizzaId }) {
  const handleClick = e => {
    onClick(e);
    setPizzaId();
  };
  return (
    <div className="InfoIcon" onClick={handleClick}>
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
          d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    </div>
  );
}

function PizzaCard({ openModal, pizza, setPizzaId }) {
  const { id, img, title, price, isNew, content } = pizza;
  const navigate = useNavigate();
  return (
    <div className="PizzaCard" onClick={() => navigate(`/pizza/${id}`)}>
      <div className="thumb">
        <img src={img} width="100%" height="100%" />
        <InfoIcon onClick={openModal} setPizzaId={() => setPizzaId(id)} />
      </div>
      <div className="title">
        <h2>{title}</h2>
        {isNew ? (
          <div className="new">
            <span>new</span>
          </div>
        ) : null}
      </div>
      <div className="price">
        <span className="size">L</span>
        {formatCurrency(price)}원
      </div>
      <div>#포장 {formatCurrency(price - 1000)}원</div>
      <div>#{content}</div>
    </div>
  );
}

export default function PizzaList() {
  const { isOpen, openModal, closeModal } = useModal();
  const [pizzas, setPizzas] = useState([]);
  const [pizzaId, setPizzaId] = useState(0);
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch("http://localhost:8082/api/pizza/")
      ).json();

      setPizzas(data);
    })();
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <h1>메뉴</h1>
          <PizzaTabs />
          <div className="PizzaList">
            {pizzas.length > 0 &&
              pizzas.map(pizza => (
                <PizzaCard
                  key={uuidv4()}
                  pizza={pizza}
                  openModal={openModal}
                  setPizzaId={setPizzaId}
                />
              ))}
          </div>
        </Container>
      </Layout>
      {isOpen && <PizzaModal pizzaId={pizzaId} closeModal={closeModal} />}
    </>
  );
}
