import React from "react";
import { useState } from "react";

const UserComp = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
  
  const handleChange = (e) => {
    console.log(e.target.name)
    // setFname(e.target.value)
    if(e.target.name=== "fname"){
        setFname(e.target.value)
    }else{
        setLname(e.target.value)
    }
  };
  return (
    <div>
      <h2>ReactJS Forms !!</h2>
      <form>
        <label htmlFor="fname">First Name : </label>
        <input type="text" name="fname" value={fname} onChange={handleChange} /> <br />
        <label htmlFor="fname">Last Name : </label>
        <input type="text" name="lname" value={lname} onChange={handleChange} /> <br />
        <br /> <br />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default UserComp;
