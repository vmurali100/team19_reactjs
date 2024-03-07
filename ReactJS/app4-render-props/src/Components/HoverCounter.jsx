import React from "react";

const HoverCounter = ({
  count,
  incrementCount,
  decrementCount,
  resetCount,
}) => {
  return (
    <div>
      <h2>Welcome to Click Counter Component !!!</h2>
      <button onMouseOver={incrementCount}>Increment</button>
      <button onMouseOver={decrementCount}>Decrement</button>
      <button onMouseOver={resetCount}>Reset Count</button>
      <h2>Counter Value : {count}</h2>
    </div>
  );
};

export default HoverCounter;

//     Dont
//   Repeat
//   Yourself
