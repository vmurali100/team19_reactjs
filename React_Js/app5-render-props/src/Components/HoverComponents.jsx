import React, { useState } from "react";

const HoverCounter = ({count,IncrementCount,DecrementCount,ResetCount}) => {

  return (
    <div>
      <h1>Welcome to HoverCounter</h1>
      <h2>Counter Value :{count}</h2>
      <button onMouseOver={IncrementCount}>IncrementCount</button>
      <button onMouseOver={DecrementCount}>DecrementCount</button>
      <button onMouseOver={ResetCount}>ResetCount</button>
    </div>
  );
};
export default HoverCounter;
