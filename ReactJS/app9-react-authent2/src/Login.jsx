import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [userInfo, setuserInfo] = useState({
    username: "",
    password: "",
  });
  const handleChange=(e)=>{
    const newUser = {...userInfo}
    newUser[e.target.name]=e.target.value;
    setuserInfo(newUser)
  }
  const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);
  return (
    <>
      <h2>Welcome to Login Component</h2>
      <form>
        <label htmlFor="">Username : </label>
        <input type="text" name="username" onChange={handleChange} value={userInfo.username}/> <br />
        <label htmlFor="">Usernam : </label>
        <input type="text" name="password" onChange={handleChange} value={userInfo.password}/> <br />
        <button type="button" onClick={()=>{handleLogin(userInfo)}}>Login</button>
      </form>
    </>
  );
};

// const Login = () => {
//   return (
//     <AuthContext.Consumer>
//       {(val)=>{
//         console.log(val)
//         return <h2>Welcome to Login Component !!</h2>
//       }}
//     </AuthContext.Consumer>
//   )
// }

export default Login;
