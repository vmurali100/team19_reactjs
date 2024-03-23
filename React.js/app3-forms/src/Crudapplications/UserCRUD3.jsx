import React, { useState } from 'react'

export const UserCRUD3 = () => {
    const[user,setuser]=useState({
          fname:"",
          lname:"",
          age:"",
          email:"",    
    });
    const[users,setusers]=useState([]);
    const handlechange=(e)=>{
      const newUser={...user};
      newUser[e.target.name]=e.target.value;
      setuser(newUser);
    };
    const handleadduser=()=>{
     const newusers=[...users];
     newusers.push(user);
     setusers(newusers);
      console.log(user)
    }
  return (
    <div>
        <h1>Welcome to ReactUserCRUD3..!</h1>
        <form>
            <label htmlFor="fname">First Name: </label>
            <input type="text" name='fname' value={user.fname}  onChange={handlechange}/> <br />
            <label htmlFor="lname">Last Name: </label>
            <input type="text" name='lname' value={user.lname} onChange={handlechange}/> <br />
            <label htmlFor="age">Age: </label>
            <input type="text" name='age' value={user.age} onChange={handlechange}/> <br />
            <label htmlFor="email">E-mail: </label>
            <input type="text" name='email' value={user.email} onChange={handlechange}/> <br /> <br />
            <button type='button' onClick={handleadduser}>Add User</button>
        </form>
    </div>
  )
}
