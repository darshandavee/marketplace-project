import React from 'react';
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
      <div className="signup-page">
        <form action="">
          <h1>Create An Account</h1>
            <div className="input-container">
            <input type="text" placeholder="Email" required/>
          </div>
          <div className="input-container">
            <input type="text" placeholder="Username" required/>
          </div>
            <div className="input-container">
            <input type="password" placeholder="Password" required/>
          </div>
          <button className='submit-btn' type="submit">Confirm</button>
          <div className="forgot-password">
            <a className='password' href="#">Forgot Password?</a>
          </div>

          <div className="login-link">
          <p>Already have an account? <a className='login' href="#">Login</a></p>
          </div>
          
        </form>
</div>
);
};

export default Signup;