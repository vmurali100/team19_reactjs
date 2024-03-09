import React, { Component } from "react";

export class Count extends Component{
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    increment=()=>{
        this.setState({
         count:this.state.count+1
        })
        }
        decrement=()=>{
            this.setState({
              count:this.state.count-1
            })

        }   
        
    render(){
        return <div>
            <h1 style={{color:'red'}}>Secenario 16</h1>
            <h2 style={{fontSize:'32px'}}>{this.state.count}</h2>
            <button style={{color:'red',margin:'10px',fontSize:'18px'}} onClick={this.increment}>Increment</button>
            <button style={{color:'blue',fontSize:'18px'}} onClick={this.decrement}>Decrement</button> <hr />
        </div>    
    }
}