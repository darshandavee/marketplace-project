import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://timeazon.cta-training.academy/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setMessage("Login successful!");

      // Optional: redirect after login
      setTimeout(() => {
        navigate("/time-portal");
      }, 1000);

    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Initialize Access</h1>

        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="submit-btn" type="submit">
          Confirm
        </button>

        {message && <p>{message}</p>}

        <div className="forgot-password">
          <Link className="password" to="/PasswordReset">
            Forgot Password?
          </Link>
        </div>

        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <Link className="signup" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
