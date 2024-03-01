import { useEffect, useState } from "react";

export const ProgressBar = () =>{
    const[percent, setPercent] = useState(0);

    const handlePercent = () =>{
    setTimeout(()=>{
         setPercent(percent + 1);
    },100);
    }

    useEffect(()=>{
       if(percent <=100){
        handlePercent();
       }
    },[percent])

    return(
        <div>
            <h2 style={{color : "green"}}>Scenario 21 - Progress Bar</h2>
        <div id= "progress">
           <div id="progressbar" style={{width : `${percent}%`}}></div>
        </div><br />
        <hr />
        </div>

    )
}