import { useState } from "react";

export const WelcomeMessage = () =>{
    const[WelcomeMessage, setWelcomeMessage] = useState("Welcome!!");
    
       var currentDate = new Date();
       var todayDate = currentDate.toDateString();
       var currentTime = currentDate.toLocaleTimeString();
    
        return(
            <div>
               <h2 style={{color: "rose"}}>message</h2>
               <h3>{ WelcomeMessage}</h3>
               <h3> Today is :{todayDate}</h3>
               <h3>Time : {currentTime}</h3>
               <hr />
    
            </div>
        )
    }