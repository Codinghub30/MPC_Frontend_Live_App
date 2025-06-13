import React, { useState } from "react";
import "./styles.css";
import Associated from "./components/Associated";
import { useNavigate } from "react-router-dom";

import HeroImage from "../../assets/Home2.png";
import HowItWorks from "./components/HowItWorks";
import certificate from "../../assets/certificate.png";
import certificate1 from "../../assets/docu1.png";
import certificate2 from "../../assets/docu2.png";
import certificate3 from "../../assets/docu3.png";
import pan from "../../assets/pan.png";
import card from "../../assets/card.png";
import pauti from "../../assets/pauti.png";
import mutation from "../../assets/mutation.png";
import conversion from "../../assets/conversion.png";
import land from "../../assets/land.png";
import map from "../../assets/map.png";
import property from "../../assets/property.png";
import Why from "./components/Why";
import Faq from "../../components/Faq";

const services = [
  { id: 1, icon: certificate, label: "CSC" },
  { id: 2, icon: land, label: "Real Estate" },
  { id: 3, icon: certificate2, label: "Property Work" },
  { id: 4, icon: property, label: "Interior Design" },
  { id: 5, icon: certificate3, label: "Pan Card" },
  { id: 6, icon: card, label: "Driving License" },
  { id: 7, icon: pauti, label: "Affidavite" },
  { id: 8, icon: conversion, label: "Agreement" },
  { id: 9, icon: certificate1, label: "BDA and BMC Work" },
  { id: 10, icon: map, label: "Architectural Work" },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to capture search query
  const navigate = useNavigate();

  const handleSearch = () => {
    const service = searchQuery.trim().toLowerCase();

    const getService = services.find((item) =>
      item.label.toLowerCase().includes(service)
    );
    if (getService) {
      navigate(`/servicePage/${getService.label.toLowerCase()}`);
    } else {
      // Handle case where service is not found
      alert(
        "Service not found! Please check the spelling or try a different search."
      );
    }
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-left">
          <h1>#1* Real Estate and Expert Document Services.</h1>
          <p>
            Your Trusted and Reliable Partner for Seamless Property Solutions
          </p>
          <p>Effortless Documentation Apply, Reliable Support Every Step</p>
          <input
            className="search-input"
            type="text"
            placeholder="Find and prepare your documents with ease!"
            value={searchQuery} // Controlled input field
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          />
          {/* Search Button */}
          <button
            style={{
              border: "none",
              padding: "0.5rem 1.7rem",
              marginTop: "1rem",
              borderRadius: "2rem",
              cursor: "pointer",
            }}
            onClick={handleSearch}
            className="search-button"
          >
            Search
          </button>

          <div className="wp-number">
            <div>
              <a
                href="https://wa.me/919348386116"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                  alt="Chat on WhatsApp"
                  style={{ width: "2rem" }}
                />
              </a>
            </div>
            <a
              href="https://wa.me/919348386116"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-float"
              style={{
                fontSize: "12px",
                textAlign: "end",
                textDecoration: "none",
                color: "white",
              }}
            >
              +91 93483 86116{" "}
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img
            src={HeroImage}
            alt="Consultant with documents"
            className="hero-image"
          />
        </div>
      </header>

      <section className="services-section">
        {services.map(({ id, icon, label }) => (
          <div
            key={id}
            className="service-card"
            onClick={() => navigate(`/servicePage/${label}`)}
          >
            <div className="icon-container">
              <img src={icon} alt={label} />
            </div>
            <p>{label}</p>
          </div>
        ))}
      </section>
      <HowItWorks />
      <Why />
      <Faq />
      <Associated />
    </div>
  );
};

export default Home;
