import { useState } from "react";

export const CopyWithin = () =>{
    const[myArr, setMyArr] = useState([
       "Tv","fridge","book","black"
    ]);
    const handleArr = () =>{
        // setMyArr(myArr.CopyWithin(0,2,4))
        var newArr = [...myArr];
        newArr.CopyWithin(0,2,4);
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
            </div>
        )
    }