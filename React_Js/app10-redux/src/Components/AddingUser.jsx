import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { AddUseraction } from './action1';



const AddingUser = () => {
    const [user,setuser]=useState({
        fname:"",
        age:"",
        email:"",
        password:""
    })
    const handlechange=(e)=>{
        const newuser={...user};
        newuser[e.target.name]=e.target.value;
        setuser(newuser)
    }
    const dispatch=useDispatch();

    const AddUser=()=>{
        dispatch(AddUseraction(user))
        setuser({
            fname:"",
            age:"",
            email:"",
            password:""
        })
    }
    const {users}=useSelector((state)=>{
      return state
    })
    console.log(users)
  return (
    <div>
      <h1>Fill Your Details</h1>
      
      <TextField id="standard-basic" label="Name" variant="standard" name='fname' value={user.fname} placeholder='Enter Your Name' onChange={handlechange}/> <br />
      <TextField id="standard-basic" label="age" variant="standard"  name='age'  value={user.age} placeholder='Enter Your age'  onChange={handlechange} /> <br />
      <TextField id="standard-basic" label="Email" variant="standard"  name='email' value={user.email}  placeholder='Enter Your email'  onChange={handlechange}/> <br />
      <TextField id="standard-basic" label="password" variant="standard"   name='password' value={user.password} placeholder='Enter Your password'  onChange={handlechange} />
      <br /> <br />
      <Button variant="contained" onClick={AddUser}>AddUser</Button>
      
    </div>
  )
}

export default AddingUser
