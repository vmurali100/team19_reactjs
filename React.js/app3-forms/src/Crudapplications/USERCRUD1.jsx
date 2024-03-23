import React, { useState } from 'react'

export const UserCRUD1 = () => {
    const[user,setuser]=useState({
        fname:"",
        lname:"",
        email:"",
    });
    const[users,setusers]=useState([])
    const handlechange=(e)=>{
        const newUser={...user};
        newUser[e.target.name]=e.target.value;
        setuser(newUser);
    };
    const handleAddUser=()=>{
        const newUsers=[...users];
        newUsers.push(user);
        setusers(newUsers);
        console.log(newUsers)

    }
  return (
    <div>
        <h1>Welcome to USerCRUD1..!</h1>
        <form>
            <label htmlFor="fname">First Name: </label>
            <input type="text" name='fname' value={user.fname} onChange={handlechange} /> <br />
            <label htmlFor="lname">Last Name: </label>
            <input type="text" name='lname'  value={user.lname} onChange={handlechange}/> <br />
            <label htmlFor="email">E-mail: </label>
            <input type="text" name='email' value={user.email} onChange={handlechange}/> <br /> <br />
            <button type='button' onClick={handleAddUser}>Add User</button>
        </form>
        
    </div>
  )
}
