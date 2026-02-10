import React from "react";
import './Navbar.css'

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

            <div className="Search-bar">
                <input type="text" placeholder="Search"/>
                <img src="" alt="" />
            </div>

        </div>

        
    )
}
    export default Navbar
