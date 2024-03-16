import React from "react";
import { UserContext } from "../UserContext";

const ClickCounter = () => {
  return (
    <div>
      <h1>ClickCounter..!</h1>
      <UserContext.Consumer>
        {({count,IncrementCount,DecrementCount,ResetCount,clickDetails}) => {
          console.log(clickDetails);
          return (
            <div>
              <h2>Count Value is :{count}</h2>
              <button onClick={()=>IncrementCount("click")}>Increment</button>
              <button onClick={()=>DecrementCount("click")}>Decrement</button>
              <button onClick={()=>ResetCount("click")}>ResetCount</button>
            </div>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};
export default ClickCounter;
