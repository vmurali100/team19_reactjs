import React, { Component } from "react";
import { DisplayMsg } from "../ChildComponents/scenario_02";
export class Gretting extends Component{
    constructor(){
        super();
        this.state={
            message:"Welcome!!!",
        }
    }
    render(){
        return <div>
            <h1 style={{color:"red"}}>Scenario_02</h1>
            {/* <h2>Hello World</h2> */}
            <DisplayMsg newmsg={this.state.message}/>
            
            <hr />
        </div>
    }
}