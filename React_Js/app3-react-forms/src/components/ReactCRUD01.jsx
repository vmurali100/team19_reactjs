import React, { useState } from "react";

export function Usercrud01(){
    const [user,setuser]=useState({
        fname:"",
        lname:"",
        age:"",
        email:""

    });

    const handlechange=(e)=>{
        const newuser={...user};
        newuser[e.target.name]=e.target.value;
        setuser(newuser)
    }
    const adduser=()=>{
        console.log(user)
    }

    return <div>
        <h1>React Crud 01</h1>
        <form>
                    <label htmlFor="fname">fname:</label>
                    <input type="text" name="fname" value={user.fname} onChange={handlechange}/> <br /> <br />
                    <label htmlFor="fname">lname:</label>
                    <input type="text" name="lname" value={user.lname} onChange={handlechange}/>  <br /> <br />
                    <label htmlFor="fname">age: </label>
                    <input type="text" name="age" value={user.age} onChange={handlechange}/> <br /> <br />
                    <label htmlFor="fname">email: </label>
                    <input type="text" name="email" value={user.email} onChange={handlechange}/> <br /> <br />
                    <button onClick={adduser} type="button">adduser</button>
        </form>

    </div>
}