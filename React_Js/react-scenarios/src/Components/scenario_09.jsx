import React, { useState } from "react";

export function Togglingbtn(){
    const [currentstate,setcurrentstate]=useState(true);

    const handlechange=()=>{
        if(currentstate === true){
            setcurrentstate("Start")
        }else{
            setcurrentstate("stop")
        }
    }

    return(
        <div>
            <h1 style={{color:"red"}}>Scenario_09</h1>
            <button onClick={handlechange}>clickme</button>
            <h2>{currentstate}</h2>
            <hr />
        </div>
    )
}