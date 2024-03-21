import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { Button } from '@mui/material';
import { addUserAction } from './action';


function App() {
  const [user, setUser] = useState({
    fname : "",
    lname : ""
 });
 const {users} = useSelector((state)=>state);
 console.log(users);
 const dispatch = useDispatch();
 const handleChange = (e) =>{
    const newUser = {...user}
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
 }
  return (
    <div className="App">
  <TextField
    hiddenLabel
    id="filled-hidden-label-small"
    value={user.fname}
    variant="filled"
    size="small"
    name="fname"
    placeholder="First Name"
    onChange={handleChange}
  />
  <br/>
  <br/>
  <TextField
     hiddenLabel
     id="filled-hidden-label-small"
     value={user.lname}
     variant="filled"
     size="small"
     name="lname"
     placeholder="Last Name"
     onChange={handleChange}
   />
   <br/>
   <br/>
   <Button variant='contained' onClick={()=>{dispatch(addUserAction(user))}}>Add User</Button>
    </div>
  );
}

export default App;
