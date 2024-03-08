import React, { useState } from "react";
import { DisplayArrays } from "../ChildComponents/scenario_05";

export function Fruits(){
    const [fruit,setfriut]=useState(["apple","orange","gapes","banana"]);
    return <div>
    <h1 style={{color:"red"}}>scenario_05</h1>
    <ul style={{fontSize:"25px",listStyleType:"none",fontWeight:"bolder",color:"blue"}}>
        <DisplayArrays newArray={fruit}/>
 
    </ul>
    <hr />
    </div>
}