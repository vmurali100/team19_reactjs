export const HoverCounter = ({count,incrementCount,decrementCount,resetCount}) =>{
    return(
        <div>
            <h2>Welcome to Hover Couunter</h2>
          <button onMouseOver={incrementCount}>Increment</button>
          <button onMouseOver={decrementCount}>Decrement</button>
          <button onMouseOver={resetCount}>Reset</button>
          <h2>Counter value : {count}</h2>
        </div>
    )
}