import React, { Component } from "react";

export class Product extends Component{
    constructor(){
        super();
        this.state={
            shirt:{
                color:"black",
                size:"XXL",
                Brand:" US_POLO",
                Price:2300,
            }
        }
    }
    render(){
        return <div>
            <h1 style={{color:"red"}}>scenario_06</h1>
            <ul style={{fontSize:"25px", fontWeight:"bolder", listStyleType:"none"}}>{Object.values(this.state.shirt).map((val)=>{
                return <li>{val}</li>

            })}</ul>
            <hr />

        </div>
    }
}