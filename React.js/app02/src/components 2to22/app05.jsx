import React, { useState } from "react";

export function Fruits(){
   const[message,setmessage]=useState(["apple, ","banana, ","grapes."])
   return <div>
    <h1 style={{color:"red"}}>Scenario 5</h1>
    <h1 style={{color:"green"}}>{message}</h1> <hr />
   </div>
}