import { useState } from "react"

export const SimpleQuote = () =>{
const[quote, setQuote] = useState("Believe you can and you're halfway there");

const handleChangeQuote = () =>{
    setQuote("It does not matter how slowly you go as long as you do not stop..... Changed by UseState!!!")
}
    return(
        <div>
         <h2 style={{color: "green"}}>Scenario 19</h2>
         <h3>{quote}</h3>
         <button onClick={handleChangeQuote}>Change Quote</button>
         <hr />
        </div>
    )
}