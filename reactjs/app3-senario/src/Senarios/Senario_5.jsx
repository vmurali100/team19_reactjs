import { useState } from "react";

export default function User1(){
    const [array,setarray]=useState([
        "Apple",
        "Banana",
        "Orange"
    ])
    return(
        <div>
            <ul>
                {
                    array.map((arrays)=>{
                        return <li>{arrays}</li>
                    })
                }
            </ul>
            <hr />
        </div> 
        
    )
}