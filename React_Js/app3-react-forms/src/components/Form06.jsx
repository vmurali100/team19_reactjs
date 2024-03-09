import React from "react";

export function Userform({user,index,users,handlechange,addUser,UpdateUser}){
 
    return <div>
    <h1>ReactForm_06</h1>
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
    </div>
}