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
            currentColor : 'yellow'
        })
    }
        handleChangeColorGreen = () =>{
        this.setState({
            currentColor : 'lightgreen'
        })
    }
    handleChangeColorBlue = () =>{
        this.setState({
            currentColor : 'orange'
        })
    }
render(){
 return (
        <div style={{ backgroundColor : this.state.currentColor , padding : "25px"}}>
         <h2 style={{color:"red"}}> Color Changes</h2>
         <button onClick={this.handleChangeColorRed} style={{marginRight : "15px"}}>yellow</button>
         <button onClick={this.handleChangeColorGreen} style={{marginRight : "15px"}}>lightGreen</button>
         <button onClick={this.handleChangeColorBlue}>orange</button>

       </div>
    )
}
}