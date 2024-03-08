import React, { useState } from "react";

export default function Week(){
    // declaring an Array
    const [days,setdays]=useState(["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"]);

    return <div> 
        <h1 style={{fontSize:"30px",fontWeight:"bolder",color:"red"}}>scenario_13</h1>
        <ul style={{fontSize:"30px",fontWeight:"bolder", listStyleType:"none"}}>{days.map((val,i)=>{
            return <li key={i}>{val}</li>

        })}</ul>
        <hr />
    </div>
}