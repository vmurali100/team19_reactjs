import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = ({ username, password }) => {
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      navigate("");
    }
  };
  const handleLogout = () => {};
  return (
    <AuthContext.Provider value={{ loggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
