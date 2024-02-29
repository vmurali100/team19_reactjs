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
            <h2>{this.state.message}</h2>
        </div>
    )
    }
}