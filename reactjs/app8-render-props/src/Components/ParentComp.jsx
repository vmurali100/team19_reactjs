import React from "react";
import { useState } from "react";
import ChildCom from "./ChildCom";

const ParentComp=()=>{
    const [message,setMessage]=useState("hello from parent component !!!");
        return(
            <div>
                <h2>Welcome to parent component !!</h2>
                <hr />
                <ChildCom newMsg={message} render={setMessage}/>
            </div>
        );
};
export default ParentComp