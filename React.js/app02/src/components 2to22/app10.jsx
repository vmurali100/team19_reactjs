import React, { Component } from "react";

export class Buttons extends Component{
    constructor(){
        super()
        this.state={
          click:"",
          None:"",
        }
    }
    Clickbtn1=()=>{
      this.setState({
        click:"Clicked"
      })
        
      
    }
    Clickbtn2=()=>{
       this.setState({
        None:"Nothing"
       })
    }
    render(){
     return <div>
        <h1 style={{color:"red"}}>Secenario 10</h1>
        <button onClick={this.Clickbtn1}>Click me!</button>
        <h1>{this.state.click}</h1>
        <button onClick={this.Clickbtn2}>Click me!</button>
        <h1>{this.state.None}</h1>
     </div>
    
    }
}
