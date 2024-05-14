import { useState } from "react";

export default function useCounter(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const updateValue = newVal => {
    setValue(prev => (prev + newVal < 0 ? 0 : prev + newVal));
  };
  //   useEffect(() => {}, [value]);
  return [value, updateValue];
}
