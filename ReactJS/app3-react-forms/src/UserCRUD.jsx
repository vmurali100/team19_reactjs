import React from "react";
import { useState } from "react";

const UserCRUD = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [users,setUsers]=useState([])
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser)
  };

  const handleAddUser=()=>{
    const newUsers = [...users]
    newUsers.push(user);
    setUsers(newUsers)
    console.log(newUsers)
  }

  const handleDelete=(usr)=>{
    console.log(usr)
  }
  const handleEdit=()=>{

  }
  return (
    <div>
      <form>
        <label htmlFor="fname">First Name : </label>
        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="fname">Last Name : </label>
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="fname">Email : </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br />
        <br /> <br />
        <button type="button" onClick={handleAddUser}>Add User</button>
      </form>
      <hr />
      <table border={1}>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {users.map((usr)=>{
                return <tr>
                    <td>{usr.fname}</td>
                    <td>{usr.lname}</td>
                    <td>{usr.email}</td>
                    <td>
                        <button onClick={()=>{handleEdit(usr)}}>Edit</button>
                    </td>
                    <td>
                        <button onClick={()=>{handleDelete(usr)}}>Delete</button>
                    </td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserCRUD;
