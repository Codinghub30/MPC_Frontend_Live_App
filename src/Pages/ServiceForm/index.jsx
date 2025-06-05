import React, { useState } from "react";
import Stepper from "./components/Stepper";
import FormPart from "./components/FormPart";

const ServiceForm = () => {
  const totalSteps = 4;
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <Stepper totalSteps={totalSteps} activeStep={activeStep} />
      <FormPart step={activeStep} totalSteps={totalSteps} />

      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button
            onClick={prevStep}
            disabled={activeStep === 1}
            style={{
              marginLeft: 10,
              padding: "0.4rem 0.8rem",
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={activeStep === totalSteps}
            style={{
              marginLeft: 10,
              padding: "0.4rem 0.8rem",
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
