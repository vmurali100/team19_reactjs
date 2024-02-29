import { useState } from "react"

export const FruitsArr = () =>{
const[myArr, setMyArr] = useState([]);

const handleArr = () =>{
    setMyArr([
        "apple",
        "banana",
        "orange",
        "Grapes"
    ])
}
    return (
        <div>
          <h2 style={{color: "green"}}>Scenario 5</h2>
          <ul>
            {myArr.map((val)=>{
             return  <li>{val}</li>
            })}
          </ul>
          <button onClick={handleArr}>Display Array</button>

          <hr />
        </div>
    )
}