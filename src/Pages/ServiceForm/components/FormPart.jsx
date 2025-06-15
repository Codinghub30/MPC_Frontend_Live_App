import React, { useEffect, useState } from "react";
import "../styles.css";
import authService from "../../../api/authService";

const formFields = {
  1: [
    { label: "Enter Full Name", name: "fullName" },
    { label: "Enter Phone Number", name: "phone" },
    { label: "Enter Email", name: "email" },
  ],
  2: [
    { label: "Enter Address Line 1", name: "address1" },
    { label: "Enter Address Line 2", name: "address2" },
    { label: "Enter City", name: "city" },
  ],
  3: [
    { label: "Enter State", name: "state" },
    { label: "Enter Zip Code", name: "zip" },
    { label: "Enter Country", name: "country" },
  ],
};

const FormPart = ({ step, totalSteps, nextStep, prevStep }) => {
  // const totalSteps = Object.keys(formFields).length;
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    workType: "",
  });

  const savedService = sessionStorage.getItem("Service");

  useEffect(() => {
    if (savedService) {
      setFormData((prev) => ({
        ...prev,
        workType: savedService,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      workType: savedService || formData.workType, // Prefer session if available
    };

    try {
      const res = await authService.createBooking(payload);
      const formspreeRes = await fetch("https://formspree.io/f/xblyjbdp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (formspreeRes.ok) {
        alert("Booking created and email sent successfully!");
      } else {
        const errorRes = await formspreeRes.json();
        console.error("Formspree Error:", errorRes);
        alert("Booking created, but failed to send email.");
      }
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        workType: "",
      });
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("There was an error creating your booking.");
    }
  };
  const fields = formFields[step] || [];
  const isStepValid = () => {
    const fields = formFields[step];
    return fields.every((field) => formData[field.name] !== "");
  };
  return (
    <form className="multi-step-form">
      <div className="form-container">
        {fields.map(({ label, name, placeholder, type, options }) => (
          <div className="form-group" key={name}>
            <label className="form-label">
              {label}
              <span className="required">*</span>
            </label>
            {type === "textarea" ? (
              <textarea
                className="inputField textarea"
                name={name}
                placeholder={placeholder}
                required
              ></textarea>
            ) : type === "select" ? (
              <select className="inputField" name={name} required>
                {options.map((opt, idx) => (
                  <option key={idx} value={opt === "Select State" ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className="inputField"
                type={name.toLowerCase().includes("email") ? "email" : "text"}
                name={name}
                placeholder={placeholder || label}
                value={formData[name]}
                required
                onChange={handleChange}
              />
            )}
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={prevStep}
          disabled={step === 1}
          style={{
            marginLeft: 10,
            padding: "0.4rem 0.8rem",
            backgroundColor: step === 1 ? "#a5a3a3" : "orange",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={step === totalSteps || !isStepValid()}
          style={{
            marginLeft: 10,
            padding: "0.4rem 0.8rem",
            backgroundColor: !isStepValid() ? "#a5a3a3" : "orange",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Next
        </button>
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {step === totalSteps && (
          <button
            onClick={handleSubmit}
            style={{
              marginLeft: 10,
              padding: "0.4rem 0.8rem",
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        )}
        {/* {step > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}

        {step < totalSteps && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}

        {step === totalSteps && (
          <button
            type="submit"
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        )} */}
      </div>
    </form>
  );
};

export default FormPart;
