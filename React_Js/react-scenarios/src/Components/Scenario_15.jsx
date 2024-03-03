// import React, { useState } from "react";

// export function DisplayTime(){
//     const [dateTime,setDateTime]=useState(new Date());

//     const updatetime=()=>{
//         setDateTime(new Date())
//     }

//     setInterval(updatetime,1000)

//     return <div>
//         <h1>Welcome</h1>
//         <h2>Date and Time {dateTime.toLocaleString()}</h2>

//     </div>
// }

import React, { useState } from "react";

export function DateTime(){
    const [Welcomemsg,setwelcomemsg]=useState("Welcome")

    var curentdate=new Date();
    var todayDate=curentdate.toDateString();
    var currentTime=curentdate.toLocaleTimeString()

    return <div>
        <h1 style={{color:"red"}}>scenario_15</h1>
        <h2>{Welcomemsg}</h2>
        <h3>Date: {todayDate}</h3>
        <h3>Time: {currentTime}</h3>
        <hr />

    </div>
}
