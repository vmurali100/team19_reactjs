import React, { Component } from "react";


export class Colorchanger extends Component{
    constructor(){
        super();
        this.state={
            currentcolor:"white",
        }
    }
    handlecolor=(newcolor)=>{
        this.setState({currentcolor:newcolor})
    }

    render(){
        return <div style={{backgroundColor:this.state.currentcolor}}>
            <h1 style={{color:"red"}}>scenario_22</h1>
            <button onClick={()=>this.handlecolor("red")}>red</button>
            <button onClick={()=>this.handlecolor("green")}>green</button>
            <button onClick={()=>this.handlecolor("blue")}>blue</button>
            <hr />
        </div>
    }
}
