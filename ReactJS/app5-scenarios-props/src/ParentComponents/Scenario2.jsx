import { Component } from "react";
import { NewMessageClass } from "../ChildComponents/ScenarioChild2";

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
             <NewMessageClass newMsgClass = {this.state.message}/>

            <hr />
        </div>
    )
    }
}