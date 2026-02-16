import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="login-page">
        <form action="">
          <h1>Initialize Access</h1>
          <div className="input-container">
            <input type="text" placeholder="Username" required/>
          </div>
            <div className="input-container">
            <input type="password" placeholder="Password" required/>
          </div>
          <button className='submit-btn' type="submit">Confirm</button>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <div className="signup-link">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
          </div>
          
        </form>
</div>
);
};

export default Login;
