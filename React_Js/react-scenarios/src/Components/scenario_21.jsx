import React, { useEffect, useState } from "react";

export function ProgressBar (){
    const [percent,setpercent]=useState(10);

    const handlepercent=()=>{
        if(percent<100){
            setTimeout(()=>{
                setpercent(percent+1)
            },100)

        }
       
    }
    useEffect(()=>{
        handlepercent()

    },[percent])



    return <div>
        <h1 style={{color:"red"}}>scenario_21</h1>
        <h2 style={{color:"Black"}}>ProgressBar</h2>
        <div id="progress">
            <div id="progressbar" style={{width:percent+"%"}}></div>
            <small> <b>L</b>oading.....</small> <br /> <br />
            <button onClick={handlepercent}>clickmeToLoad</button>
        </div>

    </div>


}