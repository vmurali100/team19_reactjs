import React, { useState } from "react";
 
export function Users(){
    const[quote,setquote]=useState('"More Work hard"')
    
   const handlequotes=()=>{
        setquote('"To Acheive your Goals"')
    }

    return <div>
        <h1 style={{color:'red'}}>Secenario 19</h1>
        <button style={{color:'darkblue'}} onClick={handlequotes}>Click me!</button>
        <h2 style={{color:'green'}}>{quote}</h2> <hr />
    </div>
}