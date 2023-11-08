import { createContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(5);
  const valueToShare = {
    count,
    incrementCount: () => setCount(count + 1),
  };

  return (
    <CounterContext.Provider value={valueToShare}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContext;
export { CounterProvider };
