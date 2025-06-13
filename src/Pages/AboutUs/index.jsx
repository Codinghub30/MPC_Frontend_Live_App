import React, { useEffect, useState } from "react";
import Profile from "../../assets/profile.jpg";
import "./styles.css";
import Faq from "../../components/Faq";

function AboutUs() {
  const [counter, setCounter] = useState({
    cooperations: 0,
    candidates: 0,
    permanentEmployees: 0,
    countries: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => ({
        cooperations:
          prevCounter.cooperations + (prevCounter.cooperations < 80 ? 1 : 0),
        candidates:
          prevCounter.candidates + (prevCounter.candidates < 200 ? 1 : 0),
        permanentEmployees:
          prevCounter.permanentEmployees +
          (prevCounter.permanentEmployees < 180 ? 1 : 0),
        countries: prevCounter.countries + (prevCounter.countries < 13 ? 1 : 0),
      }));
    }, 20); // Update every 20ms for smooth animation

    return () => clearInterval(interval); // Clear interval when the component is unmounted
  }, []);

  const reasons = [
    {
      number: "01",
      title: "Simplifying Real Estate",
      description:
        "At MPC, we simplify real estate transactions by offering essential services like PAN card assistance, sketch maps, and property mutation, ensuring a smooth experience for our clients.",
    },
    {
      number: "02",
      title: "Empowering Through Knowledge",
      description:
        "Our mission is to empower clients with the knowledge and resources needed for confident real estate decisions, offering services like income verification and legal documentation.",
    },
    {
      number: "03",
      title: "Building a Stronger Future",
      description:
        "At [Your Company Name], we are committed to making real estate accessible by offering comprehensive services like PAN card assistance and residential caste certificates, contributing to a brighter future for all.",
    },
    {
      number: "04",
      title: "Bridging Real Estate and Legalities",
      description:
        "We bridge the gap between real estate and legalities, providing services such as income verification and property mutation to ensure smooth, compliant transactions for our clients.",
    },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}

      <div className="hero-container">
        <div className="hero-content">
          <h1>We Work for a Better Future</h1>
          <p>Your trusted partner for making a difference</p>
          <button className="cta-button">Get Involved</button>
        </div>
      </div>
      {/* Live Counter Section */}
      <div style={{ position: "fixed", zIndex: "-1" }}>
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
      </div>

      <div className="vision-container" style={{ textAlign: "center" }}>
        <div className="live-counter">
          <div className="counter-box">
            <h3>{counter.cooperations}+</h3>
            <p>Sales</p>
          </div>
          <div className="counter-box">
            <h3>{counter.candidates}+</h3>
            <p>Documents Applied</p>
          </div>
          <div className="counter-box">
            <h3>{counter.permanentEmployees}+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="counter-box">
            <h3>{counter.countries}+</h3>
            <p>Plot Sold</p>
          </div>
        </div>
      </div>

      {/* Success Section */}
      <div className="behind-success-container">
        <div className="success-content">
          <div className="success-tailer">
            <div className="text">
              <h2>Behind the Success</h2>
              <p>
                At MPC, we are a trusted real estate service provider dedicated
                to simplifying the complexities of property transactions. Our
                team is committed to delivering efficient, reliable, and
                transparent services to help our clients navigate through
                property-related legalities and documentation with ease.
              </p>
            </div>
          </div>

          <div className="profile">
            <img src={Profile} alt="Chris Spring" className="profile-image" />
            <h3>Chris Spring</h3>
            <p>CEO & Founder</p>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: 20,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 10, fontSize: "2rem" }}>
          Mission
        </h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: 40 }}>
          Here are a few reasons why we stand out and why our customers trust
          us.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          {reasons.map(({ number, title, description }) => (
            <div
              key={number}
              style={{
                flex: "1 1 30%",
                padding: 20,
                borderRadius: 8,
                textAlign: "center",
                background: "#f9f9f9",
                position: "relative",
                backgroundColor: "#f3f4f6",
                minWidth: 250,
                minHeight: 250,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Large number behind */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: 120,
                  fontWeight: "bold",
                  userSelect: "none",
                  zIndex: 0,
                  pointerEvents: "none",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  opacity: 0.1,
                  lineHeight: 1,
                  color: "black",
                }}
              >
                {number}
              </div>

              {/* Foreground content */}
              <div
                style={{ position: "relative", zIndex: 1, marginTop: "0rem" }}
              >
                <>
                  <h3 style={{ marginBottom: 15, fontWeight: "bold" }}>
                    {title}
                  </h3>
                  <p style={{ color: "#444", fontSize: 14, lineHeight: 1.5 }}>
                    {description}
                  </p>
                </>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 50, textAlign: "center" }}>
          <button
            style={{
              padding: "10px 30px",
              fontSize: 14,
              fontWeight: "bold",
              borderRadius: 4,
              border: "2px solid black",
              background: "white",
              cursor: "pointer",
              letterSpacing: 1,
            }}
            onClick={() => alert("Contact us for more details!")}
          >
            CONTACT US
          </button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-us-container">
        <h1>Why Choose Us</h1>
        <p>
          Our team is dedicated to making a tangible difference in the lives of
          many. We work with passion and purpose.
        </p>
      </div>
      <Faq />
    </div>
  );
}

export default AboutUs;
