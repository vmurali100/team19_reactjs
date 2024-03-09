import React, { Component } from "react";

export class Randomcolors extends Component{
     constructor(){
          super();
          this.state={
            currentcolor:'white',
          }
     }
     handlecolor=(newcolor)=>{
        this.setState({currentcolor:newcolor})
     }
     render(){
        return <div style={{backgroundColor:this.state.currentcolor}}>
        <h1 style={{color:"red"}}>Secenario 22</h1>
        <button style={{margin:"10px",color:"red"}} onClick={()=>this.handlecolor("red")}>Red</button>
        <button  style={{margin:"10px",color:"blue"}} onClick={()=>this.handlecolor("blue")}> blue</button>
        <button  style={{color:"green"}} onClick={()=>this.handlecolor("green")}>green</button> <hr />
        </div> 
     }
}