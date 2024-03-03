import React, { Component } from "react";

export class DisplayingEmoji extends Component{
    constructor(){
        super()
        this.state={
            currentEmoji1:"",
            currentEmoji2:"",
        }
    }

    handleemoji1=()=>{
        this.setState({currentEmoji1:"😊"})
    }

    handleemoji2=()=>{
        this.setState({currentEmoji2:"😥"})
    }
    render(){
        return <div>
            <h1 style={{color:"red"}}>scenario_20</h1>
            <button onClick={this.handleemoji1}>clickme</button>
            <h2>{this.state.currentEmoji1}</h2>
            <button onClick={this.handleemoji2}>clickme</button>
            <h2>{this.state.currentEmoji2}</h2>


            <hr />
        </div>
    }

}