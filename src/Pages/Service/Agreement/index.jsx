import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ServiceImg from "../../../assets/services.png";

const services = ["Driver License"];

const steps = [
  "Select Service",
  "Fill the Required Details",
  "Our Executive Will Contact You Soon",
];

const Agreement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract service name from URL
  const pathParts = location.pathname.split("/");
  const urlService = decodeURIComponent(pathParts[pathParts.length - 1] || "");

  // State initialized from URL or empty
  const [selectedService, setSelectedService] = useState(
    services.includes(urlService) ? urlService : ""
  );

  // Sync state if URL changes (user navigates)
  useEffect(() => {
    if (services.includes(urlService)) {
      setSelectedService(urlService);
    }
  }, [urlService]);

  //   const [saleDeed, setSaleDeed] = useState(false);
  //   const [driverLicenseCorrect, setDriverLicenseCorrect] = useState(false);

  const [serviceDetail, setServiceDetails] = useState({
    salesDeed: false,
    registerMarriage: false,
  });

  useEffect(() => {
    const saved = sessionStorage.getItem("Service");

    if (saved) {
      setServiceDetails((prev) => ({
        ...prev,
        salesDeed: saved === "Sales Deed",
        registerMarriage: saved === "Register Marriage",
      }));
    }
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setServiceDetails((prev) => {
      const updatedSelection = {
        salesDeed: name === "salesDeed" && checked,
        registerMarriage: name === "registerMarriage" && checked,
      };
      if (checked) {
        sessionStorage.setItem(
          "Service",
          name === "salesDeed" ? "Sales Deed" : "registerMarriage"
        );
      } else {
        // When unchecked, remove the corresponding service from sessionStorage
        sessionStorage.removeItem("Service");
      }
      return updatedSelection;
    });
  };

  const handleApplyNow = () => {
    navigate("/servicePage/form");
  };

  return (
    <div
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px 80px",
          background: "linear-gradient(to bottom, #f9d976, #f39f2a)",
          color: "#000",
          borderRadius: "0 0 20px 20px",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 400px", minWidth: 300 }}>
          <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 15 }}>
            {selectedService || "Please select a Service"}
          </h1>
          <p style={{ fontSize: 16, marginBottom: 6 }}>
            Your Trusted and Reliable Partner for Seamless Property Solutions
          </p>
          <p style={{ fontSize: 16, marginBottom: 20 }}>
            Effortless Documentation Apply, Reliable Support Every Step
          </p>
          <input
            type="search"
            placeholder="Find and prepare your documents with ease!"
            style={{
              width: "100%",
              maxWidth: 450,
              padding: "12px 16px",
              fontSize: 16,
              borderRadius: 8,
              border: "none",
              outline: "none",
              boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
            }}
          />
        </div>
        <div style={{ flex: "0 0 300px", textAlign: "right", minWidth: 250 }}>
          <img
            src={ServiceImg}
            alt="Hand holding house"
            style={{ maxWidth: "100%", height: "auto", borderRadius: 10 }}
          />
        </div>
      </div>

      {/* PanCard Checkboxes */}
      <div style={{ padding: "30px 80px", maxWidth: 600, margin: "40px auto" }}>
        <h3 style={{ fontWeight: "700", fontSize: 20 }}>
          Select Service Type:
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: 20,
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            <input
              type="checkbox"
              name="salesDeed"
              checked={serviceDetail.salesDeed}
              onChange={handleCheckboxChange}
              style={{ marginRight: 10, width: 24, height: 24 }}
            />
            <span
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#333",
              }}
            >
              Sales Deed
            </span>
          </label>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            <input
              type="checkbox"
              name="registerMarriage"
              checked={serviceDetail.registerMarriage}
              onChange={handleCheckboxChange}
              style={{ marginRight: 10, width: 24, height: 24 }}
            />
            <span
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#333",
              }}
            >
              Register Marriage
            </span>
          </label>
        </div>
      </div>

      {/* Show steps and Apply button only if any checkbox is selected */}
      {serviceDetail.registerMarriage ||
        (serviceDetail.salesDeed && (
          <>
            <div
              style={{
                maxWidth: 800,
                margin: "40px auto 20px",
                padding: "0 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    flex: "1 1 200px",
                    textAlign: "center",
                    position: "relative",
                    padding: "20px 10px",
                  }}
                >
                  {/* Circle with step number */}
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      lineHeight: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#f39f2a",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 18,
                      margin: "0 auto 15px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    {index + 1}
                  </div>
                  {/* Step description */}
                  <p style={{ fontWeight: "600", fontSize: 16, color: "#333" }}>
                    {step}
                  </p>

                  {/* Horizontal line between steps */}
                  {index !== steps.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 40,
                        right: "-76px",
                        width: "144px",
                        height: "4px",
                        backgroundColor: "#f39f2a",
                        zIndex: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Apply Now Button */}
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <button
                onClick={handleApplyNow}
                style={{
                  backgroundColor: "#f39f2a",
                  border: "none",
                  borderRadius: 8,
                  padding: "14px 32px",
                  fontSize: 18,
                  color: "#fff",
                  cursor: "pointer",
                  boxShadow: "0 4px 10px rgba(243, 159, 42, 0.5)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#d87c0a")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#f39f2a")
                }
              >
                Apply Now
              </button>
            </div>
          </>
        ))}
    </div>
  );
};

export default Agreement;
