import { Component } from "react";

export class WelcomeClass extends Component{
    constructor(){
      super();
      this.state = {
        message : "Welcome!"
      }
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
            <h3>{this.state.message}</h3>
            <button onClick={this.handleChange}>Change</button>
            <hr />
        </div>
    )
 }
}