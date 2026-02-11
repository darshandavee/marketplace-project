import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src="/timeazon.png" alt="Website Logo" className="logo" />
      </NavLink>

      <ul>
        <li><NavLink to="/">Homepage</NavLink></li>
        <li><NavLink to="/product">Shop</NavLink></li>
        <li>Lookbook</li>
        <li>Contact Us</li>
        <li>Login</li>
      </ul>

      <div className="Search-bar">
        <input type="text" placeholder="Search" />
      </div>

      {/* Cart Button */}
      <div className="cart">
        <img src="/shopping-cart.png" alt="Cart" />
        <span className="cart-count">0</span>
      </div>
    </div>
  );
};

export default Navbar;
