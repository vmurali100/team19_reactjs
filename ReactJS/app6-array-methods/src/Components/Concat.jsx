import { useState } from "react"

export const Concat = () =>{
const [myArr1, setMyArr1] = useState([
    "ram",
    "sam",
    "gopi"
]);
const[myArr2, setMyArr2] = useState([
    "apple",
    "banana",
    "grapes"
])
const [updatedArray,setUpdatedArray] = useState([]);

const concatArr = () =>{
    const newArray = myArr1.concat(myArr2);
    setUpdatedArray(newArray);
}

    return(
        <div>
            <h2>Concat</h2>
           <ul>
             {myArr1.map((val,i)=>{
               return <li key={i}>{val}</li>
             })}
           </ul>
           <ul>
            {myArr2.map((val,i)=>{
               return <li key={i}>{val}</li>
            })}
           </ul>
           <button onClick={concatArr}>Display New Array</button>

           <hr />
           <ul>
            {updatedArray.map((arr,i)=>{
                return <li key={i}>{arr}</li>
            })}
           </ul>
           <hr />
        </div>
    )
}