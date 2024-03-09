import React, { useState } from "react";
import { UserContext } from "../UserContext";

const HoverCounter = () => {
  return (
    <div>
      <h2>Welcome to Click Counter</h2>
      <UserContext.Consumer>
        {({hovercount,handleIncrement,handleDecrement,handleReset}) => {
          return (
            <>
              <h2>Count is : {hovercount}</h2>
              <button onMouseOver={()=>{handleIncrement('hover')}}>Increment</button>
              <button onMouseOver={()=>{handleDecrement('hover')}}>Decrement</button>
              <button onMouseOver={()=>{handleReset('hover')}}>Reset</button>
            </>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default HoverCounter;
