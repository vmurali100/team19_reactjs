import React, { useState } from "react";
import { DisplayingMsg } from "../ChildComponents/scenario_01";
export function Welcome(){
    const [msg,setmsg]=useState("Welcome..!!")
    return <div>
        <h1 style={{color:"red"}}>Scenario_01 </h1>
        <DisplayingMsg newmsg={msg}/>
        <hr />
    </div>
}