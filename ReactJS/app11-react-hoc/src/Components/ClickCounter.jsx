import { Component } from "react";
import { HOCComp } from "./HOCComp";

class ClickCounter extends Component{
    render(){
        const {count,handleIncrement,handleDecrement,handleReset} = this.props
        return(
            <div>
                <h3>Welcome To click counter</h3>
                <h3>Count : {count}</h3>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        )
    }
}

export default HOCComp(ClickCounter)