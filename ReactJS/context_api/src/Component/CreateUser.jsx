import React, { useState } from 'react'

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    address: ""
  })

  const handleChane = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div>

      <form onSubmit={submitHandler}>
        <label htmlFor="Name">Name</label>
        <input type="text" name='name' value={user.name} onChange={handleChane} />
        <br />
        <label htmlFor="Email">Email</label>
        <input type='email' name='email' value={user.email} onChange={handleChane} />
        <br />
        <label htmlFor="Contact">Contact</label>
        <input type="number" name='contact' value={user.contact} onChange={handleChane} />
        <br />
        <label htmlFor="Address">Address</label>
        <input type="text" name='address' value={user.address} onChange={handleChane} />
        <button type='submit'> Submit</button>
      </form>
    </div>
  )
}

export default CreateUser;