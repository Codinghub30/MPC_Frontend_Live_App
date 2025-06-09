import React, { useState } from "react";
import Stepper from "./components/Stepper";
import FormPart from "./components/FormPart";

const ServiceForm = () => {
  const totalSteps = 3;
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
      <FormPart
        step={activeStep}
        totalSteps={totalSteps}
        nextStep={nextStep}
        prevStep={prevStep}
      />

      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      ></div>
    </div>
  );
};

export default ServiceForm;
