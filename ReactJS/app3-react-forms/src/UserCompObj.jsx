import React from "react";
import { useState } from "react";

const UserCompObj = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
  });

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value ;
    setUser(newUser)
  };

  const addUser=()=>{
    console.log(user)
  }
  return (
    <div>
      <h2>ReactJS Forms !!</h2>
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
        <br /> <br />
        <button type="button" onClick={addUser}>Add User</button>
      </form>
    </div>
  );
};

export default UserCompObj;
