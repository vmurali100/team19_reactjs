const ClickCounter = ({
  count,
  incrementCount,
  decrementCount,
  resetCount,
}) => {
  return (
    <div>
      <h2>Welcome to Click Counter Component !!!</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset Count</button>
      <h2>Counter Value : {count}</h2>
    </div>
  );
};

export default ClickCounter;

//   Dont
//   Repeat
//   Yourself
