import React from 'react'

const UsersForm = ({ user, handleChange, handleAddUser, handleUpdate, index }) => {
    return (
        <form>
            <label htmlFor="fname">First Name:</label>
            <input type="text" name='fname' value={user.fname} onChange={handleChange}
            />{""}
            <br />
            <label htmlFor="fname">last Name:</label>
            <input type="text" name='lname' value={user.lname} onChange={handleChange}
            />{""}
            <br />
            <label htmlFor="fname">Email:</label>
            <input type="text" name='email' value={user.email} onChange={handleChange}
            />{""}
            <br />
            <br />
            {index === null ? (
                <button type="button" onClick={handleAddUser}>Add User</button>
            ):(
                <button type='button' onClick={handleUpdate}>Update User</button>
            )}
        </form>
    )

}
export default UsersForm