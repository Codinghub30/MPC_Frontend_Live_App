import React from "react";
import "../styles.css";

const Stepper = ({ totalSteps, activeStep }) => {
  return (
    <div className="stepper-container">
      {[...Array(totalSteps)].map((_, i) => {
        const stepNumber = i + 1;
        const isActive = stepNumber === activeStep;
        const isCompleted = stepNumber < activeStep;

        return (
          <div className="step-number-container" key={stepNumber}>
            <div
              className={`step-number ${isActive ? "active" : ""} ${
                isCompleted ? "completed" : ""
              }`}
            >
              {stepNumber}
            </div>
            {stepNumber !== totalSteps && (
              <div
                className={`step-line ${isCompleted ? "completed-line" : ""}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
