import React, { Component } from "react";

export class SuperChildUpdate extends Component{
    constructor(props){
        super();
        this.state={
            total:0
        }
    }
     static getDerivedStateFromProps(props,state){
        return {total:props.products * 10}
     }
     render(){
        return <div>
            <h2>{"Total cost is : "+this.state.total}</h2>
        </div>
     }
     shouldComponentUpdate(){
        return true
     }
     getSnapshotBeforeUpdate(props,childState){
        console.log(props)
        console.log(childState)
        console.log("Product value is " + props.products + " And Total is " + childState.total)
        return null
     }
     componentDidUpdate(){
        console.log(this.props)
     }
     


}