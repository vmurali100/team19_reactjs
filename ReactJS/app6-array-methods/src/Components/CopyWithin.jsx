import { useState } from "react"

export const CopyWithin = () =>{
const[myArr, setMyArr] = useState([
   "apple", "banana", "grapes","melon", "guava"
]);
const handleArr = () =>{
    // setMyArr(myArr.copyWithin(0,2,4))
    var newArr = [...myArr];
    newArr.copyWithin(0,2,4);
    setMyArr(newArr);
}
    return(
        <div>
            <h2>CopyWithin</h2>
            <ul>
                {myArr.map((val,i)=>{
                  return <li key={i}>{val}</li>
                })}
            </ul>
            <button onClick={handleArr}>Display Array </button>
            <hr />
        </div>
    )
}