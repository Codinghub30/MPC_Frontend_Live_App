import React, { useState, useEffect } from "react";
import "./styles.css";

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/mnt/data/7fb822a3-4778-4f06-8108-40e2d9f704e4.png",
    "/mnt/data/0b898274-a924-4bce-91d1-2b74f7451d09.png",
    "/mnt/data/your-image-3.jpg",
    "/mnt/data/your-image-4.jpg",
    "/mnt/data/your-image-5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [images.length]);

  return (
    <div className="gallery-container">
      {/* Image Slide with Fade In/Out effect */}
      <div className="image-slide-fade">
        <img
          src={images[currentImageIndex]}
          alt="Gallery Image"
          className="gallery-image-fade"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button
          className="nav-btn prev-btn"
          onClick={() =>
            setCurrentImageIndex(
              (currentImageIndex - 1 + images.length) % images.length
            )
          }
        >
          &#10094; Prev
        </button>
        <button
          className="nav-btn next-btn"
          onClick={() =>
            setCurrentImageIndex((currentImageIndex + 1) % images.length)
          }
        >
          Next &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
