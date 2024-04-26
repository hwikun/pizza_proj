import { useState, useEffect, useCallback } from "react";

export default function useCounter({ defaultValue = 0, onChange }) {
  const [count, setCount] = useState(defaultValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount - 1 < 0 ? 0 : prevCount - 1));
  };

  useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [count]);

  return { count, increment, decrement };
}
