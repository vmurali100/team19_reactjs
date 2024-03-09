import React, { Component } from "react";

export class Colors extends Component{
    constructor(){
        super()
        this.state={
            colors:['Blue','Red','Green','Black'],
            Emptycolor:'',
        }
    }
    Randomcolors=()=>{
        const changecolors=Math.floor(Math.random()*this.state.colors.length)
        const color=this.state.colors[changecolors];
        this.setState({Emptycolor:color});
    }

    render(){
        return <div>
            <h1 style={{color:'red'}}>Secenario 12</h1>
            <button style={{color:'blue', fontSize:'17px'}} onClick={this.Randomcolors}>Generate Random colors</button>
            <h1>{this.state.Emptycolor}</h1> <hr />
        </div>
    }
}