import { useState } from "react";
import { NewWelcome } from "../ChildComponents/ScenarioChild3";

export const Welcome = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome!");

  const returnBtn=()=>{
    return <button onClick={handleChangeMessage}>Click Me</button>
  }
  const handleChangeMessage = () =>{
    setWelcomeMessage("Good Bye!!")
  }


  return (
    <div>
      <h2 style={{ color: "green" }}>Scenario 3</h2>
      <NewWelcome newWelcome={welcomeMessage} getBtn={returnBtn}/>
      <hr />
    </div>
  );
};
