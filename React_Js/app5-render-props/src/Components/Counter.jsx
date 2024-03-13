import React from "react";

const Counter=({count,incrementCount,decrementCount,resetCount,})=>{
    return <div>
        <h1>Counter Value : {count}</h1>
        <button onClick={incrementCount}>incrementCount</button>
        <button onClick={decrementCount}>decrementCount</button>
        <button onClick={resetCount}>resetCount</button>
        {}
    </div>
}
export default Counter