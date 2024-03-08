import React,{ component, useState } from "react"

 export function Button(){
    const [displaymsg,setdisplaymsg]=useState("Welcome");
    const handledisplaymsg=()=>{
        setdisplaymsg("GoodBye....!")
    }   
    return <div>
        <h1 style={{color:"red"}}>Secnario 3</h1>
        <h1 style={{color:"green"}}>{displaymsg}</h1>
        <button style={{color:"red"}}  onClick={handledisplaymsg}>changevalue</button> <hr />
    </div>
}