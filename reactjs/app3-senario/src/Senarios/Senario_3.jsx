import { useState } from "react";

export default function User() {
   const [message,setmessage]=useState("Welcome")
    const changename = () => {
        setmessage("Good bye..")

}
return(
    <div>
       
        <button onClick={changename}>changename</button>
        <h2>{message}</h2>
        <hr />
    </div>
)
};