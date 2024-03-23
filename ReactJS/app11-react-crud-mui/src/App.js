import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, updateUserAction } from "./actions";
import UsersTable from "./Components/UsersTable";

function App() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
  });
  const [index, setIndex] = useState(null);
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(users);
  const handleChange = (e) => {
    console.log(e);
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const clearUser = () => {
    setUser({
      fname: "",
      lname: "",
    });
  };
  const handleSubmit = () => {
    dispatch(addUserAction(user));
    clearUser();
  };

  const handleEdit = (usr, i) => {
    setUser(usr);
    setIndex(i)
  };

  const handleUpdate=()=>{

    dispatch(updateUserAction({...user,index}))
    clearUser()
    setIndex(null)
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

      {index === null ? <Button variant="contained" onClick={handleSubmit}>
        Add User
      </Button>:<Button variant="contained" onClick={handleUpdate}>
        Update User
      </Button>}

      <UsersTable handleEdit={handleEdit} />
    </div>
  );
}

export default App;
