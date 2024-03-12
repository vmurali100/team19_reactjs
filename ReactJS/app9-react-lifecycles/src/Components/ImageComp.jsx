import { Component } from "react";

export class ImageComp extends Component {
    render(){
    return (
        <div>
           <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        </div>
    )
    }
  componentWillUnmount(){
    console.log("componentWillUnmount Called");
  }
}