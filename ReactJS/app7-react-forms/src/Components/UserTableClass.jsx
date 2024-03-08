export const UsersTableClass = ({usersArr ,handleDelete,handleEdit}) =>{
//    const {users, handleDelete,handleEdit} = props;
return(
    <div>
        <table border={1}>
            <thead>
              <tr>
              <th>FirstName</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
               {usersArr.map((usr , i)=>{
                  return(
                    <tr key={i}>
                        <td>{usr.fname}</td>
                        <td>{usr.lname}</td>
                        <td>{usr.email}</td>
                        <td>
                            <button onClick={()=>{handleEdit(usr,i)}}>Edit</button>
                        </td>
                        <td>
                            <button onClick={()=>{handleDelete(usr, i)}}>Delete</button>
                        </td>
                    </tr>
                  )
               })}
            </tbody>
        </table>
    </div>
)
}