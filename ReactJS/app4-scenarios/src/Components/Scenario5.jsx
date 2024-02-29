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
          <button onClick={handleArr}>Display Array</button>
          <ul>
            {myArr.map((val)=>{
            <li>{val}</li>
            })}
          </ul>
        </div>
    )
}