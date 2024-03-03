import React, { Component } from "react";

export class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        });
    }

    decrement =()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return <div>
            <h1 style={{color:"red"}}>scenario_16</h1>
            <h2 style={{color:"green", fontSize:"50px"}}>{this.state.count}</h2>
            <button style={{margin:"10px"}} onClick={this.increment} >increment</button>
            <button onClick={this.decrement}>decrement</button> <hr />
        </div>
    }
}