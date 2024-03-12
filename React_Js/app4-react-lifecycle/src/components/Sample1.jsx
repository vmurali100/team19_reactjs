import React from "react";
import { Component } from "react";
import { Child1 } from "./Child1";

export class Sample1 extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        console.log("Constructor called in Sample ..!!!")
    }
    componentDidMount(){
        console.log("componentDidMount Called in sample ...!!!")
    }

    handlecount=()=>{
        this.setState({count:this.state.count + 10})
    }
    render(){
    console.log("render called in Sample...!!!")
        return <div>
            <h1> Welcome To Sample1.jsx</h1>
            <button onClick={this.handlecount}>changeCount</button>
            <hr />

            <Child1 count={this.state.count}/>
        </div>
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps Called in Sample...!!!")
        return null
    }
}