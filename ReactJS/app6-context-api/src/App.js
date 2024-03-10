import logo from "./logo.svg";
import "./App.css";
import MainComp from "./Components/MainComp";
import { useState } from "react";
import { UserContext } from "./UserContext";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";

function App() {
  const [welcomeMsg, setWelcomeMsg] = useState("Welcome to Context API");
  const [clickcount, setClickcount] = useState(0);
  const [hovercount, setHovercount] = useState(0);

  const handleIncrement = (type) => {
    type === "click"
      ? setClickcount(clickcount + 1)
      : setHovercount(hovercount + 1);
  };
  const handleDecrement = (type) => {
    type === "click"
      ? setClickcount(clickcount - 1)
      : setHovercount(hovercount - 1);
  };
  const handleReset = (type) => {
    type === "click"
      ? setClickcount(0)
      : setHovercount(0);
  };
  return (
    <div className="App">
      <UserContext.Provider
        value={{
          clickcount,
          hovercount,
          handleIncrement,
          handleDecrement,
          handleReset,
        }}
      >
        {/* <MainComp /> */}
        <ClickCounter />
        <hr />
        <HoverCounter />
      </UserContext.Provider>
      {/* <MainComp msg={welcomeMsg} /> */}
    </div>
  );
}

export default App;
