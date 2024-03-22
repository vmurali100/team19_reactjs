import React, { useState } from 'react'

export const Myobj = () => {
    const[user,setuser]=useState({
        fname:"",
        lname:"",
    });
    const handlechange=(e)=>{
       const newUser={...user};
       newUser[e.target.name]=e.target.value;
       setuser(newUser)
    };
    const adduser=()=>{
        console.log(user)
    }
  return (
    <div>
        <h1>Welcome to MyObjForm..!</h1>
        <form>
            <label htmlFor="fname">First Name:</label>
            <input type="text" name='fname'  value={user.fname} onChange={handlechange}/> <br />
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name='lname' value={user.lname} onChange={handlechange}/> <br /> <br />
            <button type='button' onClick={adduser}>Add User</button>
        </form>
    </div>

  )
}
export default Myobj;
