import React, { useState } from "react";

export function Usercrud03() {
  const [user,setuser]=useState({
    fname:"",
    lname:"",
    age:"",
    email:""
  })
  const[users,setusers]=useState([]);
  const handlechange=(e)=>{
    const newuser={...user}
    newuser[e.target.name]=e.target.value;
    setuser(newuser)
  }
  const adduser=()=>{
    const newusers=[...users];
    newusers.push(user)
    setusers(newusers)
    console.log(newusers)
  }

  const handledelete=(usr)=>{
    console.log(usr)

  }
  const handleedit=(usr)=>{

  }


  return <div>
      <h1>ReactCRUD03</h1>
            <form>
                    <label htmlFor="fname">fname:</label>
                    <input type="text" name="fname" value={user.fname} onChange={handlechange}/> <br /> <br />
                    <label htmlFor="fname">lname:</label>
                    <input type="text" name="lname" value={user.lname} onChange={handlechange}/>  <br /> <br />
                    <label htmlFor="fname">age: </label>
                    <input type="text" name="age" value={user.age} onChange={handlechange}/> <br /> <br />
                    <label htmlFor="fname">email: </label>
                    <input type="text" name="email" value={user.email} onChange={handlechange}/> <br /> <br />
                    <button onClick={ adduser} type="button">adduser</button>
        </form> <hr />
        <table border={1}>
          <thead>
            <th>firstName</th>
            <th>lastName</th>
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
                  <button onClick={()=>{handleedit(usr)}}>edit</button>
                </td>
                <td>
                  <button onClick={()=>{handledelete(usr)}}>delete</button>
                </td>
              </tr>

            })}
          </tbody>

        </table>

  </div>
 


  


}