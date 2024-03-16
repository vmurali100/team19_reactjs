import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  const navigate = useNavigate();
  useEffect(()=>{
    if (!isLoggedIn) {
        navigate("login");
      }
  },[])
  return <div>{children}</div>;
};

export default ProtectedRoute;
