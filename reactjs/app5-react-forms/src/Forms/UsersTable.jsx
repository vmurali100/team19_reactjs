import React from "react"

  const UsersTable=({users,handleDelete,handleEdit})=>{
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>first Name</th>
                    <th>last Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((usr,i)=>{
                    return(
                        <tr>
                            <td>{usr.fname}</td>
                            <td>{usr.lname}</td>
                            <td>{usr.email}</td>
                            <td>
                                <button onClick={()=>{
                                    handleEdit(usr,i); }}>Edit</button>

                                </td>
                                <td>
                                    <button onClick={()=>{
                                        handleDelete(usr,i); }}>Delete</button>
                                </td>
                        </tr>
                    );

                })}
            </tbody>
        </table>
    );
    
};
export default UsersTable