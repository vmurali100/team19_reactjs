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
            <h2>{this.state.message}</h2>
            <button onClick={this.handleChange}>Change</button>
        </div>
    )
 }
}