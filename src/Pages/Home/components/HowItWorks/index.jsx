import React from "react";
import "./styles.css";
import step3 from "../../../../assets/support.png"; // Replace with your images or imports
import step2 from "../../../../assets/form.png";
import step1 from "../../../../assets/checklist.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="circle-bg"></div>
      <div className="container">
        <h2 className="title">
          HOW IT WORKS
          <br />
          <span className="highlight">
            Choose Your Service <br />
            <strong>The Easiest Way To Get Your Documents Done</strong>
          </span>
        </h2>

        <div className="steps-wrapper">
          <div className="step">
            <div className="step-circle">
              <img src={step1} alt="Step 1" />
            </div>
            <p className="step-text">
              Select the real estate or document service you need from our
              expert list.
            </p>
          </div>

          <div className="connector connector-1" />

          <div className="step">
            <div className="step-circle">
              <img src={step2} alt="Step 2" />
            </div>
            <p className="step-text">
              Provide your details in the quick and easy form for the chosen
              service.
            </p>
          </div>

          <div className="connector connector-2" />

          <div className="step">
            <div className="step-circle">
              <img src={step3} alt="Step 3" />
            </div>
            <p className="step-text">
              Our executive will reach out to guide you and complete your
              process smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
