
import { useState } from "react"
import { UserContext } from "./UserContext";
import { ClickCounter } from "./ClickCounter";
import { HoverCounter } from "./HoverCounter";

// To Avoid Prop drilling , Context-api comes into the picture
export const ReusableComp = () =>{
  const[clickCount , setClickCount] = useState(0);
  const [hoverCount , setHoverCount] = useState(0);

  const handleIncrement = (type) =>{
      type == "click" ?
    setClickCount(clickCount + 1) :
    setHoverCount(hoverCount + 1)
  }

  const handleDecrement = (type) =>{
     type == "click" ?
     setClickCount(clickCount - 1) :
     setHoverCount(hoverCount - 1)
  }

  const handleReset = (type) =>{
     type == "click" ?
     setClickCount(0) :
     setHoverCount(0)
  }

  return(
    <div>
        <UserContext.Provider
        value = {{clickCount,hoverCount,handleIncrement,handleDecrement,handleReset}}
        >
        <ClickCounter/>
        <hr/>
        <HoverCounter/>

        </UserContext.Provider>
    </div>
  )

}