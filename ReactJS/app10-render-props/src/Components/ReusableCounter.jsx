import { useState } from "react"

export const ReusableCounter = ({render}) =>{
const[count , setCount] = useState(0);
const incrementCount = () =>{
    setCount(count + 1);
}
const decrementCount = () =>{
    setCount(count  - 1);
}
const resetCount = () =>{
    setCount(0);
}

    return(
        <div>
        {render(count,incrementCount,decrementCount,resetCount )}
        </div>
    )
}