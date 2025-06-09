import React, { useState, useEffect } from "react";
import "./styles.css";
import slider1 from "../../assets/image1.jpg";
import slider2 from "../../assets/image2.jpg";
import slider3 from "../../assets/image3.jpg";
import slider4 from "../../assets/image4.jpg";
import Why from "../Home/components/Why";
import Faq from "../../components/Faq";

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [slider1, slider2, slider3, slider4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="gallery-wrapper">
      {/* Hero Section */}
      <section className="gallery-hero">
        <h1>Our Gallery</h1>
        <p>Take a look at our recent projects and moments we’re proud of.</p>
      </section>

      {/* Image Slider */}
      <div className="gallery-container">
        <div className="image-slide-fade">
          <img
            src={images[currentImageIndex]}
            alt="Gallery Slide"
            className="gallery-image-fade"
          />
        </div>

        <div className="nav-buttons">
          <button
            className="nav-btn"
            onClick={() =>
              setCurrentImageIndex(
                (currentImageIndex - 1 + images.length) % images.length
              )
            }
          >
            &#10094;
          </button>
          <button
            className="nav-btn"
            onClick={() =>
              setCurrentImageIndex((currentImageIndex + 1) % images.length)
            }
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Image Grid Section */}
      <section className="gallery-grid">
        {[slider1, slider2, slider3, slider4].map((img, idx) => (
          <div key={idx} className="grid-item">
            <img src={img} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="gallery-cta">
        <h2>Like what you see?</h2>
        <p>Let’s work together on your next project.</p>
        <button className="cta-btn">Get in Touch</button>
      </section>

      <Faq />
    </div>
  );
};

export default ImageGallery;
