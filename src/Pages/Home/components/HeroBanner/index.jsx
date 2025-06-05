import React from "react";
import "./HeroBanner.css";
import planeImage from "/mnt/data/06244c03-23f2-42e4-9822-1b78bb302107.png"; // Plane illustration image
import womanImage from "/mnt/data/6f0ccac2-3288-4f56-84ec-d4bf7bd23b4a.png"; // Woman with passport

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="left-image">
          <img src={planeImage} alt="Travel and documents" />
        </div>
        <div className="center-text">
          <h1>Ready for your next destination?</h1>
          <h3>Leave the visa paperwork to us!</h3>
          <button>Click Here</button>
        </div>
        <div className="right-image">
          <img src={womanImage} alt="Happy traveler" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
