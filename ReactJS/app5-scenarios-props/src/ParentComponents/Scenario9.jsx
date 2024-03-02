import { useState } from "react"

export const ToggleMessage = () =>{
 const[toggle, setToggle] = useState(true);

 const handleToggle = () =>{
    setToggle(!toggle);
 }
    return(
        <div>
            <h2 style={{color: "green"}}>Scenario 9</h2>
            <h3>{toggle  ? "Start" : "Stop"}</h3>

            <button onClick={handleToggle}>Toggle</button>
            <hr />
        </div>
    )
}