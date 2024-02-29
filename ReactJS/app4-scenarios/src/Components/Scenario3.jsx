import { useState } from "react"

export const Welcome = () =>{
const[welcomeMessage, setWelcomeMessage] = useState("Welcome!");
const handleChangeMessage = () =>{
    setWelcomeMessage("Good Bye!")
}
    return(
        <div>
          <h2>{welcomeMessage}</h2>
          <button onClick={handleChangeMessage}>Change</button>
        </div>
    )
}