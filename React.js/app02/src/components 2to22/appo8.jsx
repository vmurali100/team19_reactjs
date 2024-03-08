import React, { Component } from "react";

export class User extends Component{
    constructor(prop){
           super(prop)
           this.state={
            infromation:{
                name:"John Doe",
                email:"johndoe@example.com"
            }
           }
    }
    render(){
       return <div>
          <h1 style={{color:"red"}}>Secenario 8</h1>
          <p style={{color:"green",fontWeight:"bold",fontSize:"25px"}}>Name: {this.state.infromation.name}</p>
          <p style={{color:"green",fontWeight:"bold",fontSize:"25px"}}>Email: {this.state.infromation.email}</p> <hr />
       </div>

    }
}