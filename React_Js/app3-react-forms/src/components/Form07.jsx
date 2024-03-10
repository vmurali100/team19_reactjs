import React from "react";

export function UserForm_07({user,handlechange,index,users,handleaddUser,handleUpdateuser}){
    return <div>
        <h1>UserForm_07</h1>
        <form >
                <label htmlFor="fname">Fname:</label>
                <input type="text" name="fname" value={user.fname} onChange={handlechange} /> <br />
                <label htmlFor="fname">lname:</label>
                <input type="text" name="lname" value={user.lname} onChange={handlechange} /> <br />
                <label htmlFor="fname">Email:</label>
                <input type="text" name="email" value={user.email} onChange={handlechange} /> <br />
            </form>
           
            {index === null ?  <button onClick={handleaddUser}>addUser</button>: <button onClick={handleUpdateuser}>handleUpdateuser</button> }
            <hr />

    </div>
}