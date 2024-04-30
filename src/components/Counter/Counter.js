import "./Counter.css";

export default function Counter({ count, increment, decrement }) {
  return (
    <div className="Counter">
      <div className="minus button" onClick={decrement}>
        -
      </div>
      <div name="name" className="num">
        {count}
      </div>
      <div className="plus button" onClick={increment}>
        +
      </div>
    </div>
  );
}
