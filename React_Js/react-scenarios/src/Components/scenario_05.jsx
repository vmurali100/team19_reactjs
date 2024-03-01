import React, { useState } from "react";

export function Fruits(){
    const [fruit,setfriut]=useState(["apple","orange","gapes","banana"]);
    return <div>
    <h1 style={{color:"red"}}>scenario_05</h1>
    <ul style={{fontSize:"25px",listStyleType:"none",fontWeight:"bolder"}}>{fruit.map((val)=>{
        return <li>{val}</li>
    })}</ul>
    <hr />
    </div>
}