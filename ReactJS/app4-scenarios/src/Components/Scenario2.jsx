import { Component } from "react";

export class MessageClass extends Component{
    constructor(){
    super()
    this.state = {
        message : "Hello World"
    }
    }
 render(){
    return(
        <div>
             <h2 style={{color: "green"}}>Scenario 2</h2>
            <h3>{this.state.message}</h3>
            <hr />
        </div>
    )
    }
}