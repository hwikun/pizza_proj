import React, { useState, useEffect } from "react";

function MultiCounter() {
  const [order, setOrder] = useState({ count1: 0, count2: 0, count3: 0 });

  // 공통 handleChange 함수
  const handleChange = (counterKey, newValue) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [counterKey]: newValue,
    }));
  };

  // 카운터 컴포넌트
  const Counter = ({ counterKey }) => {
    const [count, setCount] = useState(order[counterKey]);

    useEffect(() => {
      handleChange(counterKey, count);
    }, [count]);

    return (
      <div>
        <p>
          {counterKey} Count: {count}
        </p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    );
  };

  return (
    <div>
      <Counter counterKey="count1" />
      <Counter counterKey="count2" />
      <Counter counterKey="count3" />
    </div>
  );
}

export default MultiCounter;
