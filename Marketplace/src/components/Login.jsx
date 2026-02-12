import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="login-page">
        <form action="">
          <h1>Login Page</h1>
          <div className="input-container">
            <input type="text" placeholder="Username" required/>
          </div>
            <div className="input-container">
            <input type="password" placeholder="Password" required/>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>

          <div className="signup-link">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
          </div>
          
        </form>
</div>
);
};

export default Login;
