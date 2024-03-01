import React, { Component } from "react";
export class Buttons extends Component{
    constructor(){
        super();
        this.state={
            click:"",
            None:"",   
        }
    }
    handlebutton1=()=>{
        this.setState({
            click:"Clicked"
        })
    }

    handlebutton2=()=>{
        this.setState({
            None:"Nothing"
        })
    }
 
    render(){
        return <div>
            <h1 style={{color:"red"}}>scenario_10</h1>
            <button onClick={this.handlebutton1}>clickme</button> <br />
            <h2>{this.state.click}</h2>
            <button onClick={this.handlebutton2}>clickme</button> <br />
            <h2>{this.state.None}</h2>
            <hr />
        </div>
    }
}