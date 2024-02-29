import React, { useState } from "react";
export const Message=()=>{

    const changemessage=()=>{
        setmessage("GoodBye..!!")
    }

    let [message,setmessage]= useState("Welcome")
    return <div>
        <h1 style={{color:"red"}}>Scenario_03</h1>
        <button onClick={changemessage}>clickme</button>
        <h2>{message}</h2>
        <hr />
    </div>
}
