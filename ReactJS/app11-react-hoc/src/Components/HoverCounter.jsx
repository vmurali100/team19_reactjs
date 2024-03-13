import { Component } from "react";
import { HOCComp } from "./HOCComp";

class HoverCounter extends Component{
   render(){
     const {count,handleIncrement,handleDecrement,handleReset} = this.props
     return(
        <div>
            <h3>Welcome to Hover Counter</h3>
            <h3>Count : {count}</h3>
            <button onMouseOver={handleIncrement}>Increment</button>
            <button onMouseOver={handleDecrement}>Decrement</button>
            <button onMouseOver={handleReset}>Reset</button>
        </div>
     )
   }
}
export default HOCComp(HoverCounter)