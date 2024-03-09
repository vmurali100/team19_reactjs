import React from "react";
import { UserContext } from "../UserContext";

const ClickCounter = () => {
  return (
    <div>
      <h2>Welcome to Click Counter</h2>
      <UserContext.Consumer>
        {({ clickcount, handleIncrement, handleDecrement, handleReset }) => {
          return (
            <>
              <h2>Count is : {clickcount}</h2>
              <button onClick={()=>{handleIncrement('click')}}>Increment</button>
              <button onClick={()=>{handleDecrement('click')}}>Decrement</button>
              <button onClick={()=>{handleReset('click')}}>Reset</button>
            </>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ClickCounter;
