import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      alert('Login Successful');
      navigate('/'); // Redirect to homepage after login
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="login-page">
      {/* VR-Themed Background */}
      <div className="login-background">
        <div className="grid-overlay"></div>
        <div className="stars-overlay"></div>
      </div>

      {/* Login Content */}
      <div className="login-container">
        <h2 className="login-title">Enter the Virtual World</h2>
        <p className="login-subtitle">Your gateway to explore virtual destinations</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="login-footer">
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
