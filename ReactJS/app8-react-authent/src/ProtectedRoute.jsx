import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useAuth();
  console.log("ProtectedRoute", loggedIn);
  if (!loggedIn) {
    return <Navigate to="/login" replace />; // Redirect to login
  }

  return children;
};

export default ProtectedRoute;
