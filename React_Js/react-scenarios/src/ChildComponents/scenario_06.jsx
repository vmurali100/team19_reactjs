import React, { Component } from "react";

export class DisplayingObject extends Component{
    constructor(props){
        super()
    
    }
    render(){
        return <div>
            <ul>
                 <ul style={{fontSize:"25px", fontWeight:"bolder", listStyleType:"none",color:"blue"}}>
                {Object.values(this.props.newobj).map((val,index)=>{
                return <li key={index}>{val}</li>
            })}</ul>
            </ul>

        </div>
    }
}