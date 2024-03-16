import React, { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const navigate=useNavigate()
  const handleLogin = ({username,password}) => {
    
    if(password==="password" && username=== "admin"){
      setIsloggedIn(true)
      navigate('/')
    }
  };
  const handleLogout = () => {};
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
