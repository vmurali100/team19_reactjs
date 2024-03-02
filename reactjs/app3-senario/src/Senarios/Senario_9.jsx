import { useState } from "react";

export default function Taggle(){
    const[change,setchange]=useState(true)
    const Taggle=()=>{
        setchange(!change)
    }
    return(
        <div>
            <button onClick={Taggle}>Taggle</button>
            <h3>{change ? "start" :"stop"}</h3>
            <hr />
        </div>
    )

}