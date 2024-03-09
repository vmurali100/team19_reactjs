import React from "react";

export function UserTable07({users,handleedit}){
    return <div>
        <h1>UserTable_07</h1>
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
                        <td>{val.lname}</td>
                        <td>{val.email}</td>
                        <td>
                            <button onClick={()=>{handleedit(val,i)}}>edit</button>
                        </td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}