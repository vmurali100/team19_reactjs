import React, { useState } from "react";

export function Random(){
    const[numbers,setnumbers]=useState('');

   const Numbers=()=>{
     const Newrandomnumber=Math.floor(Math.random()*100+1);
     setnumbers(Newrandomnumber);
   }


    return <div>
      <h1 style={{color:'red'}}>Secenario 11</h1>
      <button style={{color:'blue',fontSize:'15px'}} onClick={Numbers}>Generate Random Numbers</button> 
      <h1 style={{color:'green'}}>{numbers}</h1>   <hr />
    </div>
}