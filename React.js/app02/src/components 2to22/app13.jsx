import React, { useState } from "react";

export function Week(){
    const [dayslist,setdayslist]=useState(['Monday','Tuesday','Wednesday','Thrusday','Friday','Saturaday']);


    return <div>
       <h1 style={{color:'red'}}>Secenario 13</h1>
        <ul style={{listStyle:"none",fontSize:"20px",color:"Blue"}}>
            {dayslist.map((day,i)=>{
                return <li key={i}>{day}</li>
            })}
        </ul>
        <hr />
    </div>
}