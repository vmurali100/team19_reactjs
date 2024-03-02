import { Component } from "react";
import { NewWelcomeClass } from "../ChildComponents/ScenarioChild4";

export class WelcomeClass extends Component{
    constructor(){
      super();
      this.state = {
        message : "Welcome!"
      }
    }
    returnBtn = () =>{
      return <button onClick={this.handleChange}>Click Me</button>
    }
    handleChange = () =>{
        this.setState({
            message : "GoodBye!"
     })


    }

 render(){
    return(
        <div>
             <h2 style={{color: "green"}}>Scenario 4</h2>
            <NewWelcomeClass newWelcomeMsg = {this.state.message} getBtn = {this.returnBtn}/>

            <hr />
        </div>
    )
 }
}