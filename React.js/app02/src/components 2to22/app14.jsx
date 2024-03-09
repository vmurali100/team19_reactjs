import React, { Component } from "react";

export class Information extends Component{
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
            <h1 style={{color:'red'}}>Secenario 14</h1>
            <p style={{color:'red',fontSize:'25px',fontWeight:'bolder'}}>{"Name: " + this.state.person.Name}</p>
            <p style={{color:'blue',fontSize:'25px',fontWeight:'bolder'}}>{"Age: " + this.state.person.Age}</p> <hr />
        </div>
    }
}