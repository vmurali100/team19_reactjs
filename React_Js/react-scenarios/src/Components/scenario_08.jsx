import React from "react";
import { Component } from "react";

export class User extends Component{
    constructor(){
        super();
        this.state={
            user:{
                fname:"sandy",
                lname:"Virat",
                age:22,
                email:"sandivirat@gamil.com",
            }
        }
    }
    render(){
        return <div>
             <h1 style={{color:"red"}}>scenario_08</h1>
            <ul style={{fontSize:"25px",fontWeight:"bolder",listStyleType:"none"}}>{Object.values(this.state.user).map((usr)=>{
                return <li>{usr}</li>
            })}</ul>
            <hr />
        </div>
    }
}