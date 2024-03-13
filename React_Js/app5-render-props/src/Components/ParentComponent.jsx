import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent=()=>{
    const [message,setmessage]=useState("HelloWorld")
    return <div>
        <h1>Welcome to ParentComponent..!!!</h1>
        <hr />
        <ChildComponent newmessage={message}  setmessage={setmessage}/>
    </div>
}
export default ParentComponent