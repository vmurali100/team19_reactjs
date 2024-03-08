import { useState } from "react"

export const Entries = () =>{
const[arr, setArr] = useState([ "hi","hello","bye","welcome"]);
const [displayData, setDisplayData] = useState([])

const handleEntry = () =>{
    const Iterator = arr.entries();
     var newArr = []
    Iterator.forEach((dat)=>{
             newArr.push(dat);
    })
    setDisplayData(newArr);

    }

    return(
        <div>
          <h2>Entries</h2>
          <ul>
           {displayData.map((data,i)=>{
              return <li key={i}>{data[1] + "" + data[0]}</li>
           })}

          </ul>
          <button onClick={handleEntry}>Display Array</button>
          <hr />
        </div>
    )
}