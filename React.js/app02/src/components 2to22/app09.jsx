import React, { useState } from "react";

export function Togglebutton(){
    const [value,setvalue]= useState("")

    const handlebtn=()=>{
        if(value===""){
            setvalue("'Start'")
        }else
        {
            setvalue("'Stop'")
        }
    }

    return <div>
        <h1 style={{color:"red"}}>Scenario 9</h1>
        <button style={{}} type="button" onClick={handlebtn}>clickme</button>
        <h1 style={{color:"green"}}>{value}</h1> <hr />

    </div>

}