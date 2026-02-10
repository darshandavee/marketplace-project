import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className="navbar">
            <img src="/timeazon.png" alt="Website Logo" className="logo" />
            <ul>
                <li>Homepage</li>
                <li>Shop</li>
                <li>Lookbook</li>
                <li>Contact Us</li>
                <li>Login</li>
            </ul>

      <ul>
        <li>Homepage</li>
        <li>Shop</li>
        <li>Lookbook</li>
        <li>Contact Us</li>
        
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
