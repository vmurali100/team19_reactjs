import { useState } from "react"

export const SimpleQuote = () =>{
const[quote, setQuote] = useState("i am comig to india");

const handleChangeQuote = () =>{
    setQuote("kkkk")
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