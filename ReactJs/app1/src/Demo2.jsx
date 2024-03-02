import React from 'react'

export const Demo2 = (props) => {
        const { name, email, contactNumber } = props.user;

const setUpdateUser=()=>{
   props.setUser({...props.user,

     name: "Jayasankar Raju",
    email: "jayasankarraju121@.com",
    contactNumber: 9963333133})
}
  return (
    <div>
  <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{contactNumber}</h1>
            <button onClick={setUpdateUser}> Update User</button>
            </div>
  )
}
