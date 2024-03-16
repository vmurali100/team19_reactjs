import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication (replace with your actual API call)
    const userData = { username, password };
    handleLogin(userData); // Pass user data to parent component
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
