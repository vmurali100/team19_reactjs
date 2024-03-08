import React, { Component } from "react";
import { DisplayingObject } from "../ChildComponents/scenario_06";

export class Product extends Component{
    constructor(){
        super();
        this.state={
            shirt:{
                color:"Black",
                size:"XXL",
                Brand:" US_POLO",
                Price:2300,
            }
        }
    }
    render(){
        return <div>
            <h1 style={{color:"red"}}>scenario_06</h1>
            <DisplayingObject newobj={this.state.shirt}/>

           
            <hr />

        </div>
    }
}