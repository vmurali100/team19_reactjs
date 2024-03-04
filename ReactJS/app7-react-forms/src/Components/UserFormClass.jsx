export const UserFormClass = ({user, index,handleChange,handleAddUser,handleUpdateUser}) =>{
return(
    <div>
       <form>
        <label htmlFor="fname">First Name : </label>
        <input type="text" name="fname" value={user.fname} onChange={handleChange} />
        <br />
        <label htmlFor="lname">Last Name: </label>
        <input type="text" name="lname" value={user.lname} onChange={handleChange} />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" value={user.email} onChange={handleChange} /><br /><br />
        {index == null ?
         <button type="button" onClick={handleAddUser}>Add User</button>
         :
        <button type="button" onClick={handleUpdateUser}>Update User</button>

        }
         </form>
    </div>
)
}