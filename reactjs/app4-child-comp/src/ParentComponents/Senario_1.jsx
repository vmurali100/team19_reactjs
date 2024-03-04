import { useState } from "react"
import { NewMessage } from "../ChildComponents/ScenarioChild1";

export const Message = () =>{

const[message, setMessage] = useState("Hello World");

return(

    <div>
          <h2 style={{color:"blue"}}>Scenarios Using Props</h2><hr />
          <h2 style={{color: "green"}}>Scenario 1</h2>
          <NewMessage newMsg = {message}/>
          <hr />
    </div>
   )
}