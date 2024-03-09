import React from "react";

export function Table(props){
    const {users,handleedit,handledelete}=props
    return <div>
        <h1>Table Componenet</h1>
         <table border={1}>
        <thead>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {users.map((Val,i)=>{
            return <tr>
              <td>{Val.fname}</td>
              <td>{Val.lname }</td>
              <td>{Val.email}</td>
              <td>
                <button onClick={()=>{handleedit(Val,i)}}>edit</button>
              </td>
              <td> 
                <button onClick={()=>{handledelete(Val,i)}}>delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
}