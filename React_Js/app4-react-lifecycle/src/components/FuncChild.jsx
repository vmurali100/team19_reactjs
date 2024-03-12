import React, { useEffect, useState } from "react";

const FuncChildComponent=(props)=>{

    const [total,settotal]=useState(0)
    useEffect(()=>{
        console.log("component did mounted..!!")
        settotal(props.products * 10)
    },[props.products])

    return (
        <div>
            <h2>Welcome to FuncChildComponent...!!!</h2>
            <h3>{"total cost is : "+ total}</h3>
        </div>
    )
}
export default FuncChildComponent