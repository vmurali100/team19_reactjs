import React, { useState } from "react";

const ClickCounter = ({count,IncrementCount,DecrementCount,ResetCount}) => {

  return (
    <>
      <h1>Welcome to ClickCounter</h1>
      <h2>Counter Value :{count}</h2>
      <button onClick={IncrementCount}>IncrementCount</button>
      <button onClick={DecrementCount}>DecrementCount</button>
      <button onClick={ResetCount}>ResetCount</button>
    </>
  );
};
export default ClickCounter;
