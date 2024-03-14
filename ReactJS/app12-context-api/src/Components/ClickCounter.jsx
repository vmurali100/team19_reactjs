import { UserContext } from "./UserContext"
export const ClickCounter = () =>{
   return (
     <div>
        <h2>Welcome to Click Counter</h2>
        <UserContext.Consumer>
            {({clickCount,handleIncrement,handleDecrement,handleReset})=>{
               return(
                <>
                <h2>Count is : {clickCount}</h2>
                <button onClick={()=>{handleIncrement("click")}}>Increment</button>
                <button onClick={()=>{handleDecrement("click")}}>Decrement</button>
                <button onClick={()=>{handleReset("click")}}>Reset</button>

                </>
               )
            }}
        </UserContext.Consumer>
     </div>
   )
}
