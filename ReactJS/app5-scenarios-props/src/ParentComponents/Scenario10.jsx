import { Component } from "react";

export class Clicked extends Component{
    constructor(){
    super();
    this.state = {
        message1 : false,
        message2 : false
    }
    }
handleBtn1 = () =>{
    this.setState({
        message1 : true
    })
}

handleBtn2 = () =>{
    this.setState({
        message2 : true
    })
}
 render(){
    return(
        <div>
            <h2 style={{color: "green"}}>Scenario 10</h2>

            <button onClick={this.handleBtn1} style={{color : "blue", fontSize : "25px"}}>
                {this.state.message1 ? "Clicked!!" : "ClickMe"}
            </button>
            <br />

            <button onClick={this.handleBtn2} style={{color : "red", fontSize : "25px"}}>
                {this.state.message2 ? "Nothing!!" : "ClickMe"}
            </button>
            <hr />
        </div>
    )
 }
}