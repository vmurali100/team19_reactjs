import React, { useState } from "react";

export function Usercrud04() {
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    age: "",
    email: "",
  });
  const [users,setusers]=useState([]);
  const handlechange=(e)=>{
    const newuser={...user}
    newuser[e.target.name]=e.target.value;
    setuser(newuser);
  }

  
  const handleadduser=()=>{
    const newUsers=[...users]
    newUsers.push(user);
    setusers(newUsers)
    console.log(newUsers)


  }
  return (
    <div>
      <h1>React_Form04</h1>
      <form>
        <label htmlFor="fname">fname:</label>
        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={handlechange}
        />{" "}
        <br /> <br />
        <label htmlFor="fname">lname:</label>
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={handlechange}
        />{" "}
        <br /> <br />
        <label htmlFor="fname">age: </label>
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={handlechange}
        />{" "}
        <br /> <br />
        <label htmlFor="fname">email: </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handlechange}
        />{" "}
        <br /> <br />
        <button onClick={handleadduser} type="button">
          adduser
        </button>
      </form>
      <hr /> 
      <table border={1}>
        <thead>
            <th>fname</th>
            <th>lname</th>
            <th>age</th>
            <th>email</th>
            <th>edit</th>
            <th>delete</th>
        </thead>
        <tbody>
            {users.map((usr)=>{
                return <tr>
                    <td>{usr.fname}</td>
                    <td>{usr.lname}</td>
                    <td>{usr.age}</td>
                    <td>{usr.email}</td>
                    <td>
                        <button>edit</button>
                    </td>
                    <td>
                    <button>delete</button>

                    </td>
                   
                    
                </tr>
                

            })}
        </tbody>
      </table>
    </div>
  );
}