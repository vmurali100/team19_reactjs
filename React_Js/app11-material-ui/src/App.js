import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUseractions, UpdateUseractions } from './action';
import UserTable from './Components/UserTable';

function App() {
  const [user,setuser]=useState({
    fname:"",
    age:"",
    email:"",
    password:""
  });
  const [index,setindex]=useState(null);
  const handlechange=(e)=>{
    const newuser={...user};
    newuser[e.target.name]=e.target.value;
    setuser(newuser)
  }
  const dispatch=useDispatch();

  const handleUser=()=>{
    dispatch(AddUseractions(user))
    Clearform()
  }
  const handleedit=(usr,i)=>{
    setuser(usr)
    setindex(i)
  }

  const handleUpdate=()=>{
    dispatch(UpdateUseractions({...user,index}))
    setindex(null)
    Clearform()

  }
  const Clearform=()=>{
    setuser({
      fname:"",
      age:"",
      email:"",
      password:""

    })
  }
  
  return (
    <div className="App">
        <TextField id="standard-basic" label="Name" variant="standard" placeholder='Enter Your Name' value={user.fname} name='fname' onChange={handlechange}/> <br/>
        <TextField id="standard-basic" label="Age" variant="standard" placeholder='Enter Your Age'  value={user.age} name='age' onChange={handlechange} /> <br/>
        <TextField id="standard-basic" label="Email" variant="standard" placeholder='Enter Your Email'  value={user.email} name='email' onChange={handlechange} /> <br/>
        <TextField id="standard-basic" label="Password" variant="standard" placeholder='Enter Your Password'  value={user.password}  name='password' onChange={handlechange}/> <br/> <br/>
        {index === null ? <Button variant="contained" onClick={handleUser}>AddUser</Button> : <Button variant="contained" onClick={handleUpdate}>UdateUser</Button>}
        <UserTable handleedit={handleedit}/>
    </div>
  );
}


export default App;
