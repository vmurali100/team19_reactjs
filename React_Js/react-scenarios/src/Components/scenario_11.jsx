import React, { useState } from "react";

export default function RandomNumers(){
    const [randonum,setrandonum]= useState("");

    const genraterandomnum=()=>{
        const  newrandomnum=Math.floor(Math.random()*100+1);
        setrandonum(newrandomnum);
    }
    return <div>
        <h1 style={{color:"red"}}>scenario_11</h1>
        <button onClick={genraterandomnum}> genraterandomnumber</button>
        <h2>{randonum}</h2>
        <hr />
    </div>
}