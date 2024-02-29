
import { useState } from "react"

export const Message = () =>{

const[message, setMessage] = useState("Hello World");

return(

    <div>
          <h2 style={{color: "green"}}>Scenario 1</h2>
          <h3>{message}</h3>
          <hr />
    </div>
   )
}