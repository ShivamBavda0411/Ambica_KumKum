import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2>Ambica Kum-Kum</h2>
          <p>
            We are manufacturers of premium quality pooja powders.
            Our products are made with purity and devotion for all
            religious rituals.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Gujarat, India</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ info@ambicakumkum.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Ambica Kum-Kum | All Rights Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;