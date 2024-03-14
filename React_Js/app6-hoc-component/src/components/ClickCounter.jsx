import React, { Component } from "react";
import HocComponent from "./HOCComponents";

class ClickCounter extends Component {
 

  render() {
    console.log(this.props)
    const {count,Incrementcount,Decrementcount,ResetCount}=this.props
    return (
      <>
        <h1>Welcome to Clickcounter Component</h1>
        <h2>Count Value is : {count}</h2>
        <button onClick={Incrementcount}>Increment</button>
        <button onClick={Decrementcount}>Decrement</button>
        <button onClick={ResetCount}>ResetCount</button>
      </>
    );
  }
}
export default HocComponent(ClickCounter);
