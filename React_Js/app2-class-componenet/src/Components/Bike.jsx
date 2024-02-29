import React from "react";
import { Component } from "react";

export class Bike extends Component {
    constructor(){
        super()
        this.state={
            message:"Hi Iam From Bike Componenet..!!",
            Bikeinfo:{},
            BikeBrand:[],
        }
    }

    handlemessage=()=>{
        this.setState({
            message:"I am  SetState () from Bike Componenet..!!"
        })
    }
    handleObject=()=>{
        this.setState({
            Bikeinfo:{
                model:"Harley Davidson",
                Color:"Black",
                engine:"650cc",
            }
        })
    }
    handleArrays=()=>{
        this.setState({
            BikeBrand:["RX100","Ducati","RoyalEnfield","Ninja","Suzuki"]
        })
    }
    render(){
        return <div>
            <button onClick={this.handlemessage}>Clickme</button>
            <h1>{this.state.message}</h1>
            <hr />
            <button onClick={this.handleObject}>clickme</button>
            <ul style={{listStyleType:"none", fontWeight:"bolder", fontSize:"25px"}}>{Object.values(this.state.Bikeinfo).map((val)=>{
                return <li>{val}</li>
            })}</ul>
            <h1>{this.handleObject.Bikeinfo}</h1>
            <hr />
            <button onClick={this.handleArrays}>clickme </button>
            <ul style={{listStyleType:"none", fontWeight:"bolder", fontSize:"25px"}} >{this.state.BikeBrand.map((val)=>{
                return <li>{val}</li>
            })}</ul>
        </div>
    }
}
