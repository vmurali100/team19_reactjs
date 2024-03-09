import React, { useState } from "react";

export function Usercrud05() {
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [index,setindex]=useState(null)

  const [users,setusers]=useState([
    // {fname:"sandy",lname:"s",email:"sandy@gmail.com"},
    // {fname:"Amar",lname:"s",email:"Amar@gmail.com"},
    // {fname:"Siva",lname:"A",email:"Siva@gmail.com"},
  ]);
  const handlechange=(e)=>{
    const newUser={...user}
    newUser[e.target.name]=e.target.value;
    setuser(newUser)
  }
  const addUser=()=>{
    const newUsers=[...users];
    newUsers.push(user);
    setusers(newUsers)
    console.log(users)
    clearUser();
  }
  const handledelete=(val,i)=>{
    // we can delete using splice or filter note:we cannot directly modify any changes in existing array we have to create an copy of an array in that we can make changes ..
    // Using Splice 

    // const newUsers=[...users]
    // newUsers.splice(i,1);
    // setusers(newUsers);

    //Using Filter
    setusers(users.filter((va)=>{
      return va.fname != val.fname

    }))
    console.log(val)
  }
  const handleedit=(val,i)=>{
    setuser(val)
    setindex(i)
  }

  const UpdateUser=()=>{
    const newUsers=[...users];
    newUsers[index]=user
    setusers(newUsers);
    clearUser()
    setindex(null)
  }
  const clearUser=()=>{
    setuser({
      fname: "",
    lname: "",
    email: "",
    })
  }
  
  return (
    <>
      <h1>ReactForm_05</h1>
      <form>
        <label htmlFor="fname">FirstName : </label>
        <input type="text" value={user.fname} name="fname" onChange={handlechange} /> <br />
        <label htmlFor="fname">LastName : </label>
        <input type="text" value={user.lname} name="lname" onChange={handlechange}/> <br />
        <label htmlFor="fname">email :</label>
        <input type="text" value={user.email} name="email" onChange={handlechange}/> <br /> <br />
      </form>
     
      {index === null ? <button onClick={addUser}>adduser</button>:<button onClick={UpdateUser}>UpdateUser</button>}
      <hr />
      <table border={1}>
        <thead>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {users.map((val,i)=>{
            return <tr>
              <td>{val.fname}</td>
              <td>{val.lname }</td>
              <td>{val.email}</td>
              <td>
                <button onClick={()=>{handleedit(val,i)}}>edit</button>
              </td>
              <td> 
                <button onClick={()=>{handledelete(val,i)}}>delete</button>
              </td>
            </tr>

          })}
        </tbody>
      </table>
    </>
  );
}
