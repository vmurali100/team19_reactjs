import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { Button } from '@mui/material';
import { addUserAction, updateUserAction } from './action';
import { UsersTable } from './Components/UsersTable';


function App() {
  const [user, setUser] = useState({
    fname : "",
    lname : ""
 });
 const[index,setIndex] = useState(null);
 const {users} = useSelector((state)=>state);
 console.log(users);
 const dispatch = useDispatch();
 const handleChange = (e) =>{
    const newUser = {...user}
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
 }
 const handleSubmit = () =>{
    dispatch(addUserAction(user));
    clearUser();
 }
 const handleEdit = (usr,i) =>{
   setUser(usr);
   setIndex(i);
 }
 const handleUpdate = () =>{
  dispatch(updateUserAction({...user,index}))
  clearUser();
  setIndex(null)
 }
 const clearUser =() =>{
  setUser({
    fname : "",
    lname : ""
  })
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
   {index == null ?    <Button variant='contained' onClick={handleSubmit}>Add User</Button>
   :
   <Button variant='contained' onClick={handleUpdate}>Update User</Button>}

   <UsersTable handleEdit = {handleEdit} />
    </div>
  );

  }
export default App;
