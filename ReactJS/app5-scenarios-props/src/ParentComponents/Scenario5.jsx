import { useState } from "react";
import { NewFruitsArr } from "../ChildComponents/ScenarioChild5";

export const FruitsArr = () => {
  const [myArr, setMyArr] = useState([]);

  const returnBtn = () => {
    return <button onClick={handleArr}>Display Array</button>;
  };
  const handleArr = () => {
    setMyArr(["apple", "banana", "orange", "Grapes"]);
  };
  return (
    <div>
      <h2 style={{ color: "green" }}>Scenario 5</h2>
      <NewFruitsArr newArr={myArr} getBtn={returnBtn} />
      <hr />
    </div>
  );
};
