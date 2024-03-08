import React, { Component } from "react";
import HOCComp from "./HOCComp";

class ClickCounter extends Component {
  render() {
    const {count,handleDecrement,handleIncrement,handleReset} = this.props
    return (
      <div>
        <h2>Hello From Click Couter</h2>
        <h2>Count Value is : {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  }
}

export default HOCComp(ClickCounter);
