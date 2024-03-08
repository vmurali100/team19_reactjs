import { useState } from "react"

export const Every = () =>{
const[arr, setArr] = useState([1,3,2,4,6,8])

const handleEvery = () =>{

   const everyArr =  arr.every((num) => {
        return num % 2 == 0
    });
    console.log(everyArr);

}
    return(
        <div>
            <h2>Every</h2>

        <button onClick={handleEvery}>Check Even Or Not</button>
        <ul>
            {arr.map((val,i)=>{
               return <li key={i}>{val}</li>
            })}
        </ul>
        </div>
    )
}
