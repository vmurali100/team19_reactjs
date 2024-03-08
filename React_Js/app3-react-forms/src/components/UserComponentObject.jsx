import React, { useState } from "react";

export function UsercomponentObj(){
    const [user,setuser]=useState({
        fname:"",
        lname:"",
        email:"",
        phone:""
    })
    const handlechange=(e)=>{
        // console.log(e);
        const newuser={...user};
        newuser[e.target.name]=e.target.value;
        setuser(newuser);
    }
    const adduser=()=>{
        console.log(user)
    }

    return(
        <div>
            <h1 style={{color:"red"}}>React Forms Using Object</h1>
            <form>
                <label htmlFor="fname">fname: </label>
                <input type="text" name="fname" value={user.fname} onChange={handlechange} /> <br /> <br />
                <label htmlFor="fname">lname: </label>
                <input type="text" name="lname" value={user.lname} onChange={handlechange}/> <br /> <br />
                <label htmlFor="fname">email: </label>
                <input type="text" name="email" value={user.email} onChange={handlechange}/> <br /> <br />
                <label htmlFor="fname">phone: </label>
                <input type="text" name="phone" value={user.phone} onChange={handlechange}/> <br /> <br />

                <button  type="button" onClick={adduser}>adduser</button>
            </form>
        </div>
    )



}