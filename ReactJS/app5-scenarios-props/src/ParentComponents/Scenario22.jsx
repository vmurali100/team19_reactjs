import { Component } from "react";

export class ChangeColor extends Component{
    constructor(){
        super();
    this.state = {
        currentColor : 'white'
    }
    }

    handleChangeColorRed = () =>{
        this.setState({
            currentColor : 'red'
        })
    }
        handleChangeColorGreen = () =>{
        this.setState({
            currentColor : 'green'
        })
    }
    handleChangeColorBlue = () =>{
        this.setState({
            currentColor : 'blue'
        })
    }
render(){
 return (
        <div style={{ backgroundColor : this.state.currentColor , padding : "25px"}}>
         <h2 style={{color:"yellow"}}>Scenario 22 - Color Changer</h2>
         <button onClick={this.handleChangeColorRed} style={{marginRight : "15px"}}>Red</button>
         <button onClick={this.handleChangeColorGreen} style={{marginRight : "15px"}}>Green</button>
         <button onClick={this.handleChangeColorBlue}>Blue</button>

       </div>
    )
}
}