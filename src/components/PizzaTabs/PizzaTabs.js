import "./PizzaTabs.css";

function Tab({ active, children }) {
  return <div className={active ? "active" : ""}>{children}</div>;
}

function Tabs({ children }) {
  return <div className="Tabs">{children}</div>;
}

export default function PizzaTabs() {
  return (
    <div className="PizzaTabs">
      <Tabs>
        {/* <Tab active>피자</Tab>
        <Tab>하프앤하프</Tab>
        <Tab>음료&기타</Tab> */}
      </Tabs>
    </div>
  );
}
