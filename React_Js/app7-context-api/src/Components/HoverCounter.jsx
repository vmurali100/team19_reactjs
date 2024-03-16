import React from "react";
import { UserContext } from "../UserContext";

const HoverCounter = () => {
  return (
    <div>
      <h1>HoverCounter..!</h1>
      <UserContext.Consumer>
        {({countvalue,IncrementCount,DecrementCount,ResetCount,clickDetails}) => {
          console.log(clickDetails);
          return (
            <div>
              <h2>Count Value is :{countvalue}</h2>
              <button onMouseOver={()=>IncrementCount("Hover")}>Increment</button>
              <button onMouseOver={()=>DecrementCount("Hover")}>Decrement</button>
              <button onMouseOver={()=>ResetCount("Hover")}>ResetCount</button>
            </div>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};
export default HoverCounter;
