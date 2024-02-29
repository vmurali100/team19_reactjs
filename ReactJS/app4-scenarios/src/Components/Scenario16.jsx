import { Component } from "react";

export class Counter extends Component{
    constructor(){
        super();
    this.state = {
        count : 0
    }
    }
handleReset = () =>{
    this.setState({
        count : 0
    })
}

handleIncrement = () =>{
    this.setState({
        count : this.state.count + 1
    })
}

handleDecrement = () =>{
    this.setState({
        count : this.state.count - 1
    })
}
render(){
    return(
        <div>
            <h2 style={{color:"green"}}>Scenario 16</h2>
            <h3>{this.state.count}</h3>

            <button onClick={this.handleReset} style={{marginRight: "10px"}}>Reset</button>
            <button onClick={this.handleIncrement} style={{marginRight: "10px"}}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <hr />
        </div>
    )
}
}