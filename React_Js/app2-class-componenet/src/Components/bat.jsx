 import React from "react";
import { Component } from "react";

 export class Bat extends Component{
    constructor(){
        super();
        this.state={
            message:" Bat Component..!",
            batinfo:{},
            batbrands:[],
        }
    }
    handleMessage=()=>{
        this.setState({
            message:"I am from bat Component..!"
        })
    }
    handleArray=()=>{
        this.setState({
            batbrands:["MRF","Ceat","Kokubura","TON"]
        })
    }
    handleObject=()=>{
        this.setState({
            batinfo:{
                batname:"MRF",
                Material:"Wood",
                Price:"20000"
            }
        })
        }

    render(){
        return <div>
            <button onClick={this.handleMessage}>clickme</button>
            <h1>{this.state.message}</h1> <hr />
            <button onClick={this.handleArray}>clickme</button>
            <ul style={{listStyleType:"none", fontWeight:"bolder", fontSize:"25px"}}>{this.state.batbrands.map((val)=>{
                return <li>{val}</li>
            })}</ul>
            <hr />
            <button onClick={this.handleObject}>clickme</button>
            <ul style={{listStyleType:"none", fontWeight:"bolder", fontSize:"25px"}}>{Object.values(this.state.batinfo).map((val)=>{
                return <li>{val}</li>
            })}</ul>
            <hr />
        </div>
    }
 }
