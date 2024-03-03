import React, { useState } from "react";

export function ProgessBar(){
    const [percent,setpercent]=useState(0);
    return <div>
        <h1 style={{color:"red"}}>scenario_21</h1>
        <div id="progess">
        <div id="progessbar"></div>
    </div>
    </div>
}