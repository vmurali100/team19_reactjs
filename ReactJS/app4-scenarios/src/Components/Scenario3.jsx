import { useState } from "react"

export const Welcome = () =>{
const[welcomeMessage, setWelcomeMessage] = useState("Welcome!");
const handleChangeMessage = () =>{
    setWelcomeMessage("Good Bye!")
}
    return(
        <div>
          <h2 style={{color: "green"}}>Scenario 3</h2>
          <h3>{welcomeMessage}</h3>
          <button onClick={handleChangeMessage}>Change</button>
          <hr />
        </div>
    )
}