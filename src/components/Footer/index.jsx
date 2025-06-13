import React from "react";
import logo from "../../assets/logo1.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
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
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/contact-us")}>Contact Us</li>
              <li onClick={() => navigate("/about-us")}>About Us</li>
              <li onClick={() => navigate("/image-gallery")}>Gallery</li>
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

          <div className="map-column">
            <h4>Our Location</h4>
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps?q=20.2510852813721,85.839469909668&z=15&output=embed"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div style={{ marginTop: "10px", fontSize: "16px" }}>
          <p style={{ fontSize: "12px" }}>
            📍 Plot No - 422/5973, Lewis Road, Near Arundhati Hero Showroom,
            Kalpana Square, Bhubaneswar
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            <p style={{ fontSize: "10px", fontWeight: "800" }}>
              📞 +91 93483 86116{" "}
            </p>
            <p style={{ fontSize: "10px", fontWeight: "600" }}>
              📞 +91 98613 57713{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2018–2025 MPC™ ALL RIGHTS RESERVED</div>
    </footer>
  );
};

export default Footer;
