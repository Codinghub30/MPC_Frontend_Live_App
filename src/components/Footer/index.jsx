import React from "react";
import logo from "../../assets/logo1.png";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-logo">
          <img src={logo} alt="Make My Documents Logo" />
        </div>
        <div className="footer-links">
          <div>
            <h4>About Company</h4>
            <ul>
              <li>Home</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li>
                <i className="fab fa-facebook-f" />
              </li>
              <li>
                <i className="fab fa-instagram" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2018–2025 MPC™ ALL RIGHTS RESERVED</div>
    </footer>
  );
};

export default Footer;
