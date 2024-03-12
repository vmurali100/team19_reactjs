export const ClickCounter = ({count,incrementCount,decrementCount,resetCount}) => {

  return (
    <div>
      <h2>Welcome to Click Couunter</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
      <h2>Counter value : {count}</h2>
    </div>
  );
};
