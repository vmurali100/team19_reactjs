import React ,  { useState}from "react";

const ResuableCounter = ({ render }) => {
  const [count, setcount] = useState(0);
  const IncrementCount = () => {
    setcount(count + 1);
  };
  const DecrementCount = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  const ResetCount = () => {
    setcount(0);
  };
  return <div>{render(count,IncrementCount,DecrementCount,ResetCount)}</div>;
};
export default ResuableCounter;
