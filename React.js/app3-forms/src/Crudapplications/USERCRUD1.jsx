import React, { useState } from "react";

const Usercrud1 = () => {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
    });
    const [users, setUsers] = useState([
        { fname: "Pavan", lname: "kumar", email: "esambattupavan@gmail.com" },
        { fname: "Pavan", lname: "kumar", email: "esambattupavan@gmail.com" },
        { fname: "Pavan", lname: "kumar", email: "esambattupavan@gmail.com" },


    ]);

    const [index, setIndex] = useState(null);
    const handleChange = (e) => {
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    };

    const handleAddUser = () => {
        const newUsers = [...users];
        newUsers.push(user);
        setUsers(newUsers);
        clearForm();
    };

    const handleDelete = (usr, i) => {
        console.log(usr);

        setUsers(
            users.filter((us) => {
                return us.fname !== usr.fname;
            })
        );
    };

    const handleEdit = (usr, i) => {
        setUser(usr);
        setIndex(i)
    };
    const clearForm = () => {
        setUser({
            fname: "",
            lname: "",
            email: "",
        });
    };
    const handleUpdate = (index) => {
        const newUsers = [...users];
        newUsers[index] = user;
        setUsers(newUsers)
        setIndex(null);
        clearForm();
    };
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
                {index === null ? (
                    <button type="button" onClick={handleAddUser}>
                        Add User
                    </button>
                ) : (
                    <button type="button" onClick={handleUpdate}>
                        Update User
                    </button>
                )}
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
                    {users.map((usr, i) => {
                        return (
                            <tr>
                                <td>{usr.fname}</td>
                                <td>{usr.lname}</td>
                                <td>{usr.email}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            handleEdit(usr, i);
                                        }}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            handleDelete(usr, i);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Usercrud1;