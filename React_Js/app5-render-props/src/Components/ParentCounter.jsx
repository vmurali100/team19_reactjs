import React, { useState } from "react";
import Counter from "./Counter";

const ParentCounter=()=>{
    const [count,setcount]=useState(0)
    const incrementCount=()=>{
        setcount(count+1)
    }
    const decrementCount=()=>{
        setcount(count-1)
    }
    const resetCount=()=>{
        setcount(0)
    }
    return <div>
        <Counter count={count} incrementCount={incrementCount} decrementCount={decrementCount} resetCount={resetCount} />
    </div>
}
export default ParentCounter;