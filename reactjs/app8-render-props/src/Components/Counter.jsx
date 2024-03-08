import React from 'react'

const Counter = ({incrementCount,decrementCount,resetCount,count}) => {
  return (
    <div>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset Count</button>
      <h2>Counter Value : {count}</h2>
    </div>
  )
}

export default Counter