import { useState} from "react";

export const Concat=()=>{
    const [myArr1,setMyArry1]=useState([
        "swapna",
        "pavithra",
        "lokesh",
        "naveen"
    ]);
    const[myArr2,setMyArry2]=useState([
        "pen",
        "pencil",
        "book",
        "color"
    ])
    const [updatedArry,setupdatedArray]=useState([]);

    const concatArr=()=>{
        const newArry=myArr1.concat(myArr2);
        setupdatedArray(newArry);
    }

    return (
        <div>
            <h2>concat</h2>
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
            <button onClick={concatArr}>Display New Arry</button>
            <hr />
            <ul>
                {updatedArry.map((arr,i)=>{
                    return <li key={i}>{arr}</li>
                })}
            </ul>
            <hr />
        </div>
    )
}