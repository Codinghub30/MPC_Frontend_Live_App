import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import bgImage from "../../assets/contact2.jpg";

import "./styles.css"; // Optional styling
import Why from "../Home/components/Why";
import Faq from "../../components/Faq";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Hero Image Section */}
      <div
        style={{
          width: "100%",
          height: "300px",
          background: `linear-gradient(rgba(24, 23, 23, 0.8), rgba(0, 0, 0, 0.5)), url(${bgImage}) no-repeat center / cover`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Title & Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        <h4 style={{ marginBottom: "80px", fontSize: "2rem" }}>Contact Us</h4>

        <div
          className="content-container"
          style={{ display: "flex", gap: "20px" }}
        >
          <div
            className="email-container"
            onClick={() => handleClick("email")}
            style={{
              padding: "10px 20px",
              border: "1px solid #ccc",
              cursor: "pointer",
              borderRadius: "8px",
              backgroundColor: activeTab === "email" ? "orange" : "#fff",
              color: activeTab === "email" ? "#fff" : "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
            }}
          >
            <FaEnvelope /> Email
          </div>

          <div
            className="phone-container"
            onClick={() => handleClick("phone")}
            style={{
              padding: "10px 20px",
              border: "1px solid #ccc",
              cursor: "pointer",
              borderRadius: "8px",
              backgroundColor: activeTab === "phone" ? "orange" : "#fff",
              color: activeTab === "phone" ? "#fff" : "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
            }}
          >
            <FaPhoneAlt /> Phone
          </div>
        </div>

        {/* Conditionally Shown Content */}
        {activeTab && (
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            {activeTab === "email" && (
              <p style={{ fontSize: "18px" }}>📧 mpconline7@gmail.com</p>
            )}
            {activeTab === "phone" && (
              <p style={{ fontSize: "18px" }}>📞 +91-9876543210</p>
            )}
          </div>
        )}
      </div>
      <Why />
      <Faq />
    </div>
  );
};

export default ContactUs;
