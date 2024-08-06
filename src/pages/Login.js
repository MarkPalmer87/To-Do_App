// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just refresh the page
    window.location.reload();
  };

  return (
    <div className="login-container">
      {/* Login Form Container */}
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username here"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password here"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      {/* Forgot Password Container */}
      <div className="forgot-password-container">
        <p className="forgot-password">
          ** Forgot password? Reset password under Account tab**
        </p>
      </div>
    </div>
  );
}

export default Login;
