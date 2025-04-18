import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple registration logic (checking if passwords match)
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (username && password) {
      alert('Registration Successful');
      navigate('/login'); // After registration, redirect to login page
    } else {
      alert('Please fill all fields!');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">Enter your details to register</p>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <div className="register-footer">
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
