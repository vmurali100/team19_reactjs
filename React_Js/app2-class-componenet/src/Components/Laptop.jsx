import React, { Component } from "react";
// class components

class Laptop extends Component{
    constructor(){
        super()
        this.state={
            message:"Hi Iam also from laptop state object componenet..!!!",
            laptop:{},
            lapDetails:[],
        }
    }
    handlemessage=()=>{
        this.setState({message:"I am new message modified by setstate method!!!"})
    }
    handleobjectToChange=()=>{
        this.setState({
            laptop:{
                brand:"HP",
                Model:"RYZEN5000",
                Price:54000
            }
        })
    }

    handleArrays=()=>{
        this.setState({
            lapDetails:["ram","john","amar","sandy"]
        })

    }
    render(){
        return <div> 
            <button onClick={this.handlemessage}>clickme</button>
            <h1>{this.state.message}</h1>
            <hr />

            <button onClick={this.handleobjectToChange}>clickme</button>
            <ul style={{listStyleType:"none"}}>
                {Object.values(this.state.laptop).map((lap)=>{
                    return <li>{lap}</li>
                })}
            </ul>

            <hr />

            <button onClick={this.handleArrays}>clickme</button>
            <ul style={{listStyleType:"none"}}>
                {this.state.lapDetails.map((lap)=>{
                    return <li>{lap}</li>
                })}
            </ul>

            <hr />
        </div>
        }

}
export default Laptop