import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "./actions";

function App() {

  const [user, setUser] = useState({
    fname: "",
    lname: "",
  });

  const {users} = useSelector((state)=>state);
  const dispatch = useDispatch()
  console.log(users)
  const handleChange=(e)=>{
    console.log(e)
    const newUser = {...user}
    newUser[e.target.name] = e.target.value;
    setUser(newUser)
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

      <br />
      <br />

      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        value={user.lname}
        variant="filled"
        size="small"
        placeholder="Last Name "
        name="lname"

        onChange={handleChange}

      />
      <br />
      <br />

      <Button variant="contained" onClick={()=>{dispatch(addUserAction(user))}}>Add User</Button>
    </div>
  );
}

export default App;
