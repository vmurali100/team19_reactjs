
import { useState } from "react"

export const Message = () =>{

const[message, setMessage] = useState("Hello World");

return(

    <div>
          <h2>{message}</h2>
    </div>
   )
}