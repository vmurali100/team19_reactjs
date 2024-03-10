import React from "react";

export function UserTable_07(props){
    const {users,handleedit,handledelete}=props
    console.log(users)
    return <div>
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
                            <td><button onClick={()=>{handleedit(val,i)}}>edit</button></td>
                            <td><button onClick={()=>{handledelete(val,i)}}>delete</button></td>
                        </tr>

                    })}

                </tbody>
            </table>
    </div>
}