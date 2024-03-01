import React, { Component } from "react";

export class PersonInfo extends Component{
    constructor(){
        super();
        this.state={
            person:{
                Name:"Alice",
                Age:30,
            }
        }
    }
    render(){
        return <div>
            <h1 style={{color:"red",fontSize:"30px",fontWeight:"bolder"}}>scenario_14</h1>
            <p style={{fontSize:"25px",fontWeight:"bolder"}}>{"Name : " + this.state.person.Name}</p>
            <p style={{fontSize:"25px",fontWeight:"bolder"}}>{"Age : " + this.state.person.Age}</p>
            <hr />
        </div>
    }

}