import useCounter from "../hooks/useCouter";

export default function Counter({ defaultValue, name, onChange }) {
  const { count, increment, decrement } = useCounter({
    defaultValue,
    onChange,
  });

  return (
    <div className="Counter">
      <input type="text" name={name} value={count || 0} onChange={onChange} />
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
