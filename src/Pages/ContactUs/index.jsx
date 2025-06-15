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

      {/* WhatsApp */}
      {/* <div style={{ position: "fixed" }}>
        <a
          href="https://wa.me/919348386116"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="Chat on WhatsApp"
          />
        </a>
      </div> */}

      {/* Title & Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        <div
          className="content-container"
          style={{ display: "flex", gap: "20px", marginTop: "5rem" }}
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
              <p style={{ fontSize: "18px" }}>📧 cscdurga2021@gmail.com</p>
            )}
            {activeTab === "phone" && (
              <p style={{ fontSize: "18px" }}>
                📞 +91 98613 57713 <br />
                📞 +91 93483 86116
              </p>
            )}
          </div>
        )}
      </div>
      <Why />
      <Faq />
      <a
        href="https://wa.me/919348386116"
        className="whatsapp-floating"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="Chat on WhatsApp"
        />
      </a>
    </div>
  );
};

export default ContactUs;
