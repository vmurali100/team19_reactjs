import React, { Component } from "react";

export class Car extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello World",
            CarInfo:{},
            CarBrands:[]
        }
    }
    handlemessageVariable=()=>{
        this.setState({
            message:"Car Componenet..!!!"
        })
    }
    handleobjects=()=>{
        this.setState({
            CarInfo:{
                Brand:"Thar",
                Color:"white",
                Price:1500000
            }
        })
    }
    handleArrays=()=>{
        this.setState({
            CarBrands:["audi","benz","Mahindra","Suzuki"]
        })
    }

    render(){
        return <div>
            <button onClick={this.handlemessageVariable}>clickme</button>
            <h1>{this.state.message}</h1>   
            <hr />

            <button onClick={this.handleobjects}>clickme</button>
            <ul style={{listStyleType:"none", fontWeight:"bolder", fontSize:"25px"}}>
                {Object.values(this.state.CarInfo).map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
            <hr /> 

            <button onClick={this.handleArrays}>clickme</button>
            <ul style={{listStyleType:"none", fontWeight:"bolder", fontSize:"25px"}}>{this.state.CarBrands.map((val)=>{
                return <li>{val}</li>

            })}</ul>   

            <hr />
        </div>
    }

  
}
export default Car;
