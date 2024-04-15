import React, { useState } from 'react'

export const UserCRUDT2 = () => {
    const [user, setuser] = useState({
        fname: "",
        lname: "",
        email: "",
        age: "",
    });
    const handlechange = (e) => {
        const newuser = { ...user };
        newuser[e.target.name] = e.target.value;
        setuser(newuser);
    };
    const handleAddUser = (e) => {
        console.log(user);
    }
    return (
        <div>
            <h1>Welcome To ReactCrudT2</h1>
            <form>
                <label htmlFor="fname">First Name:</label>
                <input type="text" name='fname' value={user.fname} onChange={handlechange} /> <br />
                <label htmlFor="lname">Last Name:</label>
                <input type="text" name='lname' value={user.lname} onChange={handlechange} /> <br />
                <label htmlFor="email">E-mail:</label>
                <input type="text" name='email' value={user.email} onChange={handlechange} /> <br />
                <label htmlFor="age">Age:</label>
                <input type="text" name='age' value={user.age} onChange={handlechange} /> <br /> <br />
                <button type="button"  onClick={handleAddUser}>Add User</button>
            </form>
            <hr />
            <table border={1}>
               <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>E-Mail</td>
                    <td>Age</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
               </thead>
               <tbody>
                   
               </tbody>
            </table>
        </div>
    )
}
