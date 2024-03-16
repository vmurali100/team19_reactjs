import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from './Auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const users = [
        {
          username: 'user1',
          password: await bcrypt.hash('password1', 10), 
        },
        {
          username: 'user2',
          password: await bcrypt.hash('password2', 10),
        },
      ];
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      login(foundUser); 
      navigate('/'); 
    } else {
      console.error('Invalid username or password');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
