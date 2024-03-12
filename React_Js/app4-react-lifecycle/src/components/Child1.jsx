import React, { Component } from "react";
import { Imagecomponent } from "./ImgComponent";

export class Child1 extends Component{
    constructor(props){
        super(props)
        this.state={}
        console.log("Constructor called in child...!!!")
    }
  
    shouldComponentUpdate=()=>{
        console.log("shouldComponentUpdate in child ...!!!")
        return true
    }
    componentDidUpdate=()=>{
        console.log("componentDidUpdate")
    }
    render(){
        console.log("Render is called in child...!!!")
        return <div>
            <h1>welcome to child component</h1>
            <h2>Value recieved from Parent is:{this.props.count}</h2>
            {this.props.count === 0 && <Imagecomponent/>}
        </div>
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps is called in child...!!!")
        return null
    }
    getSnapshotBeforeUpdate=()=>{
        console.log("getSnapshotBeforeUpdate")
        return null
    }


}