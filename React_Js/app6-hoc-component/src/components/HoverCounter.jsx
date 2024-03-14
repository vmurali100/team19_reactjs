import React, { Component } from "react";
import HocComponent from "./HOCComponents";

class HoverCounter extends Component {
 

  render() {
    const {count,Incrementcount,Decrementcount,ResetCount}=this.props
    console.log(this.props)
    return (
      <>
        <h1>Welcome to HoverCounter Component</h1>
        <h2>Count Value is : {count}</h2>
        <button onMouseOver={Incrementcount}>Increment</button>
        <button onMouseOver={Decrementcount}>Decrement</button>
        <button onMouseOver={ResetCount}>ResetCount</button>
      </>
    );
  }
}
export default HocComponent(HoverCounter);
