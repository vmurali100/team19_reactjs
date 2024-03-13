import React from "react";

const ChildComponent=(props)=>{
    return <>
    <button onClick={()=>{props.setmessage(" data changed from child ")}}> click</button>
    <h2>Welcome to ChildComponent..!!!</h2>
    <h3>{"Data Recieved From Parent Componenet is : "+props.newmessage}</h3>
    </>
}
export default ChildComponent;