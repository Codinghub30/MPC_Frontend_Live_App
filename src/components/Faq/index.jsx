import React, { useState } from "react";

const faqs = [
  {
    question: "What types of real estate services do you offer?",
    answer:
      "We provide a complete range of real estate services including property registration, khata transfer, land survey, encumbrance certificate, and legal verification of documents.",
  },
  {
    question: "Do you help with BDA approvals and related work?",
    answer:
      "Yes, we handle end-to-end BDA-related services like site approval, plan sanction, deviation regularization, and NOC procurement from relevant authorities.",
  },
  {
    question:
      "Can I get an affidavit or rental agreement drafted at your office?",
    answer:
      "Absolutely. We provide legally valid affidavits, rental agreements, sale agreements, gift deeds, and other notary-attested documents at affordable prices.",
  },
  {
    question: "Do you provide interior designing services?",
    answer:
      "Yes, we have a team of certified interior designers who provide turnkey interior solutions for homes, offices, and commercial spaces including modular kitchens, wardrobes, and customized furniture.",
  },
  {
    question:
      "How long does it take to complete a Khata transfer or property registration?",
    answer:
      "Timelines vary by municipality, but typically Khata transfers take 10–15 working days and property registration can be completed in 1–2 days post-document readiness.",
  },
  {
    question: "Is your affidavit or agreement legally valid in court?",
    answer:
      "Yes, all our affidavits and agreements are prepared according to legal norms, signed on government stamp paper, and attested by an authorized notary or advocate.",
  },
  {
    question: "Can I book your services online or through WhatsApp?",
    answer:
      "Yes, you can book any of our services online or by contacting us via WhatsApp. We offer doorstep document pickup and delivery within select areas.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "60px auto", padding: "0 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #ccc",
            padding: "15px 0",
            cursor: "pointer",
          }}
        >
          <div
            onClick={() => toggleIndex(index)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {faq.question}
            <span>{activeIndex === index ? "−" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div style={{ marginTop: "10px", color: "#555", fontSize: "16px" }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
