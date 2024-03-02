import { useState } from "react";

export const WeekDays=()=>{
    const [WeekDays,setWeekDays]=useState([]);

    const handlechangeWeekDays=()=>{
        setWeekDays([
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ])
    }
    return (
        <div>
            <h2 style={{color:"black"}}>WeekDays</h2>
            <button onClick={handlechangeWeekDays}>DisplayWeekDays</button>
            <ul>
                {WeekDays.map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
            
            <hr />
        </div>
    )
}