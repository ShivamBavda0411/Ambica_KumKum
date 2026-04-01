import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="AK Logo"  height="100px" />
        </div>

        {/* Menu */}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;