import { useState } from "react"

export const Entries = () =>{
const[arr, setArr] = useState([]);

const handleEntry = () =>{
    setArr([
        "hi",
        "hello",
        "bye",
        "welcome"
    ])
}
    return(
        <div>
          <h2>Entries</h2>
          <ul>
            {Array.from(arr.entries()).map((val,i)=>{
                return <li key={i}>
                    Index - {i}  : Value - {val}
                </li>
            })}

          </ul>
          <button onClick={handleEntry}>Display Array</button>
        </div>
    )
}