import React, { useState } from "react";

export function TogglingQuotes(){
    const[quote,setquote]=useState("Nothing is impossible.....");

    const handlequotes=()=>{
        setquote("“Don't limit yourself...!")
    }

    return <div>
        <h1 style={{color:"red"}}>Scenario_19</h1>
        <button onClick={handlequotes}>handlequotes</button>
        <h2>{quote}</h2> 
        <hr />

    </div>
}