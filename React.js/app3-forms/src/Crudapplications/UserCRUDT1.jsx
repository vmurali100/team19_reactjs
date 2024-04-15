import React, { useState } from 'react'

export const UserCRUDT1 = () => {
    const [user, setuser] = useState({
        fname: "",
        lname: "",
        age: "",
        email: "",
    });
    const [users, setusers] = useState([
        { fname: "John", lname: "Doe", age:24, email: "john.doe@example.com" },
        { fname: "Alice", lname: "Smith", age:26, email: "alice.smith@example.com" },
        { fname: "Michael", lname: "Johnson",age:28, email: "michael.johnson@example.com" }
    ]);
    const handlechange = (e) => {
        const newuser = { ...user };
        newuser[e.target.name] = e.target.value;
        setuser(newuser);
    };
    const handleadduser = () => {
        const newusers = [...users];
        newusers.push(user);
        setusers(newusers);
        console.log(newusers)
        clearform()


    };
    const handleEdit = (usr,i) => {
        setuser(usr );
    };
    const handledelete = (usr,i) => {
        console.log(usr)
     setusers(users.filter((us)=>{
       return  us.fname !== usr.fname
     }))
    }
    const clearform = () => {
        setuser({
            fname: "",
            lname: "",
            age: "",
            email: "",
        })
    }

    return (
        <div>
            <h1>Welcome to ReactTableForm...!</h1>
            <form>
                <label htmlFor="fname">First Name: </label>
                <input type="text" name='fname' value={user.fname} onChange={handlechange} /> <br />
                <label htmlFor="lname">Last Name: </label>
                <input type="text" name='lname' value={user.lname} onChange={handlechange} /> <br />
                <label htmlFor="age">Age: </label>
                <input type="text" name='age' value={user.age} onChange={handlechange} /> <br />
                <label htmlFor="email">E-mail: </label>
                <input type="text" name='email' value={user.email} onChange={handlechange} /> <br /> <br />
                <button type='button' onClick={handleadduser}>Add User</button>
            </form>
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>E-mail</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((usr,i) => {
                        return <tr>
                            <td>{usr.fname}</td>
                            <td>{usr.lname}</td>
                            <td>{usr.age}</td>
                            <td>{usr.email}</td>
                            <td>
                                <button onClick={() => { handleEdit(usr,i) }}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => { handledelete(usr,i) }}>Delete</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}
