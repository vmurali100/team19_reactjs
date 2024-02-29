import { useState } from "react"

export const WelcomeMessage = () =>{
const[welcomeMessage, setWelcomeMessage] = useState("Welcome!!");

   var currentDate = new Date();
   var todayDate = currentDate.toDateString();
   var currentTime = currentDate.toLocaleTimeString();

    return(
        <div>
           <h2 style={{color: "green"}}>Scenario 15</h2>
           <h3>{welcomeMessage}</h3>
           <h3> Today is :{todayDate}</h3>
           <h3>Time : {currentTime}</h3>
           <hr />

        </div>
    )
}