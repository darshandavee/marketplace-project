import React from "react";
import './Navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <img src="" alt="" className="logo" />
            <ul>
                <li>Homepage</li>
                <li>Shop</li>
                <li>Lookbook</li>
                <li>Contact Us</li>
            </ul>

            <div className="Search-bar">
                <input type="text" placeholder="Search"/>
                <img src="" alt="" />
            </div>

            <img src="" alt="" className="toggle-icon"></img>
        </div>

        
    )
}

export default Navbar
