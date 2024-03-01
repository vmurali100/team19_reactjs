import React, { Component } from "react";

export class ColorPicker extends Component{
  constructor(){
    super();
    this.state={
      colors:["red","green","blue"],
      currentcolor:"",
    }
  }
  generatecolor=()=>{
    const randomcolor=Math.floor(Math.random()*this.state.colors.length)
    const color=this.state.colors[randomcolor];
    this.setState({currentcolor:color});
  }

  render(){
    return  <div>
      <h1 style={{fontSize:"30px", color:" red" ,fontWeight:"bolder"}}>scenario_12</h1>
      <button onClick={this.generatecolor}>generatecolor</button>
      <div style={{background:this.state.currentcolor, width:"300px",height:"100px",margin:"0 auto",marginTop:"20px"}}></div>
      <hr />
    </div>
  }
}

