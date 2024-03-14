import { UserContext } from "./UserContext"
export const HoverCounter = () =>{
    return(
        <div>
          <UserContext.Consumer>
            {({hoverCount,handleIncrement,handleDecrement,handleReset})=>{
               return(
                <>
                <h2>Welcome to Hover Counter</h2>
                <h3>Count is : {hoverCount}</h3>
                <button onMouseOver={handleIncrement}>Increment</button>
                <button onMouseOver={handleDecrement}>Decrement</button>
                <button onMouseOver={handleReset}>Reset</button>
                </>
               )
            }}
          </UserContext.Consumer>
        </div>
    )
}