import React from "react";

const Why = () => {
  const reasons = [
    {
      number: "01",
      title: "Trusted Experts",
      description:
        "Our team comprises certified professionals with years of experience delivering reliable services.",
    },
    {
      number: "02",
      title: "Quality Assurance",
      description:
        "We follow strict quality standards to ensure every service meets your expectations and satisfaction.",
    },
    {
      number: "03",
      title: "Customer Support",
      description:
        "24/7 dedicated support to assist you at every step, ensuring smooth and hassle-free experience.",
    },
    {
      number: "04",
      title: "Comprehensive Solutions",
      description:
        "Our wide range of services and tailored solutions are designed to meet your unique needs, ensuring convenience and satisfaction from start to finishx",
    },
  ];

  return (
    <div
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 10 }}>Why Choose Us</h2>
      <p style={{ textAlign: "center", color: "#666", marginBottom: 40 }}>
        Here are a few reasons why we stand out and why our customers trust us.
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
              boxShadow: "0 0 5px rgba(0,0,0,0.05)",
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
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 120,
                fontWeight: "bold",
                color: "#f59f00",
                userSelect: "none",
                zIndex: 0,
                pointerEvents: "none",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                opacity: 0.6,
                lineHeight: 1,
              }}
            >
              {number}
            </div>

            {/* Foreground content */}
            <div style={{ position: "relative", zIndex: 1, marginTop: "4rem" }}>
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
  );
};

export default Why;
