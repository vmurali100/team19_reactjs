import React, { useState } from 'react'

export const Mycomp = () => {
    const[fname,setfname]=useState("");
    const[lname,setlname]=useState("");

    const handlechange=(e)=>{
      console.log(e.target.name)
      
      if(e.target.name==="fname"){
        setfname(e.target.value)
      }else{
        setlname(e.target.value)
      }
    }
  return (
    <div>
        <h1>Welcome to ReactForm2..!</h1>
        <form>
            <label htmlFor="fname">First Name:</label>
            <input type="text" name='fname' value={fname} onChange={handlechange} /> <br />
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name='lname' value={lname} onChange={handlechange}/> <br /> <br />
            <button type='button'>Add User</button>
        </form>
    </div>
  )
}