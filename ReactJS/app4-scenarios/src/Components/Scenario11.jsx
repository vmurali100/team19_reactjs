import { useState } from "react"

export const RandomNumber = () =>{
const[randomNum, setRandomNum] = useState( );

const getRandomNumber = () =>{
    var newRandomNum = Math.floor(Math.random() * 100);
    setRandomNum(newRandomNum);
}

    return(
        <div>
          <h2 style={{color: "green"}}>Scenario 11</h2>

          <button onClick={getRandomNumber}>Click To Get a Random Number</button>
          <h3>Random Number : {randomNum}</h3>
          <hr/>

        </div>
    )
}