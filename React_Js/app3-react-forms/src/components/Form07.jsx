import React from "react";

export function Userform07({user,index,handlechange,handleAddUser,handleUpdate}){
    return <div>
        <h1>Iam from UserForm07 Component</h1>
        <form>
            <label htmlFor="fname">fname</label>
            <input type="text" name="fname" value={user.fname} onChange={handlechange}/> <br />
            <label htmlFor="fname">lname</label>
            <input type="text" name="lname" value={user.lname} onChange={handlechange}/> <br />
            <label htmlFor="fname">email</label>
            <input type="text" name="email" value={user.email} onChange={handlechange}/> <br /> <br />
        </form> 
        {index === null ?  <button onClick={handleAddUser}>addUser</button> :  <button onClick={handleUpdate}>addUser</button> }
       
        

       
        
        <hr />
    </div> 
}