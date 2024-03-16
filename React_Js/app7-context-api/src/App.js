import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { UserContext } from "./UserContext";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";


function App() {
  const [count, setcount] = useState(0);
  const [countvalue, setCountValue] = useState(0);
  const IncrementCount = (type) => {
    type === "click" ? setcount(count + 1) : setCountValue(countvalue + 1);
  };

  const DecrementCount = (type) => {
    type === "click" ? setcount(count - 1) : setCountValue(countvalue - 1);
  };
  const ResetCount = (type) => {
    type === "click" ? setcount(0) : setCountValue(0);
  };
  return (
    <div className="App">
      {/* <MainComponent msg={message}/> */}
      <UserContext.Provider
        value={{
          count,
          countvalue,
          IncrementCount,
          DecrementCount,
          ResetCount,
        }}
      >
        {/* <MainComponent/> */}
        <ClickCounter/>
        <hr/>
        <HoverCounter/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
