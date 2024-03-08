import Reat, { useState } from "react";

export function UserComponent(){
    const [fname,setfname]=useState("");
    const [lname,setlname]=useState("")

    const handlechange=(e)=>{
        console.log(e.target.name)
        if(e.target.name=== "fname"){
            setfname(e.target.value)
        }
        else{
            setlname(e.target.value)
        }
    }
    const adduser=()=>{
        console.log(fname);
        console.log(lname);
    }
    return <div>
        <h1>ReactForms...!!!</h1>
        <form>
            <label htmlFor="fname">fname:</label>
            <input type="text" value={fname} name="fname"  onChange={handlechange}/> <br /> <br />
            <label htmlFor="lname">lname:</label>
            <input type="text" value={lname}  name="lname" onChange={handlechange}/> <br /> <br />
            <button onClick={adduser} type="button">adduser</button>
        </form>
        <hr />
    </div>

}