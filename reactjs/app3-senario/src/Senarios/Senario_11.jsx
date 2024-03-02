import { useState } from "react";

export const RandomNumber =()=>{
    const [randomNum,setrandomNum]=useState();

    const getrandomNumber=()=>{
        var newRandomNum=Math.floor(Math.random()*100);
        setrandomNum(newRandomNum);
    }

    return (
        <div>
            <h2 style={{color:"red"}}></h2>

            <button onClick={getrandomNumber}>click the RandomNumber</button>
            <h3>Randomnumber:{randomNum}</h3>
            <hr />
        </div>
    )
}
