import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const userContext = createContext();

const Context_Auth = ({ children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const navigateTo = useNavigate();

  const longinUser = ({ userName, password },setUserDetails) => {
    if (userName === "admin" && password === "Power@123") {
      setIsloggedIn(true); 
      navigateTo("/");
    }else{
      // alert("Incorrect username or password");
         
      setUserDetails({ userName: "", password: "" });
    }
  };
  

  
  const logOutUser = () => {
    // You can implement logout functionality here
  };

  return (
    <userContext.Provider value={{ longinUser, isLoggedIn, logOutUser }}>
      {children}
    </userContext.Provider>
  );
};

export default Context_Auth;
