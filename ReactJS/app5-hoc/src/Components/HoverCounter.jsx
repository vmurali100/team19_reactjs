import React, { Component } from "react";
import HOCComp from "./HOCComp";

class HoverCounter extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, handleReset } = this.props;
    return (
      <div>
        <h2>Counter Value in Click Counter is : {count}</h2>
        <button onMouseOver={handleIncrement}>Increment</button>
        <button onMouseOver={handleDecrement}>Decrement</button>
        <button onMouseOver={handleReset}>Reset</button>
      </div>
    );
  }
}
export default HOCComp(HoverCounter);
