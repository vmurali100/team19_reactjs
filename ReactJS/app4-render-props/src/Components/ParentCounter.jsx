import React from "react";
import { useState } from "react";
import Counter from "./Counter";

const ParentCounter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <Counter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCount={resetCount}
      />
    </div>
  );
};

export default ParentCounter;
