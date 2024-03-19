import React, { useState } from "react";

const User1=()=>{
   const[fname,setfname]=useState("");
   const[lname,setlname]=useState("");

   const handleChange =(e)=>{
      console.log(e.target.name)

      if(e.target.name=="fname"){
          setfname(e.target.value)
      }else{
        setlname(e.target.value)
      }
   };

  return <div>
      <h2>Welcome to ReactForm..!</h2>
      <form>
        <label htmlFor="firstname">First Name: </label>
        <input type="text" name="fname" value={fname} onChange={handleChange}/> <br /> <br />
        <label htmlFor="lastname">Last Name: </label> 
        <input type="text" name="lname" value={lname}  onChange={handleChange}/> <br /> <br />
        <button>Click Me!</button>
      </form>
  </div>


};

export default User1;
