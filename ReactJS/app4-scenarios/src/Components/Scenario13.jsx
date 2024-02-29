import { useState } from "react"

export const WeekDays = () =>{
const[weekDays, setWeekDays] = useState([]);

const handleChangeWeekDays = () =>{
    setWeekDays([
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ])
}
    return(
        <div>
           <h2 style={{color: "green"}}>Scenario 13</h2>
           <ul>
            {weekDays.map((val)=>{
                 return <li>{val}</li>
            })}
           </ul>
           <button onClick={handleChangeWeekDays}>Display WeekDays</button>
           <hr />
        </div>

    )
}