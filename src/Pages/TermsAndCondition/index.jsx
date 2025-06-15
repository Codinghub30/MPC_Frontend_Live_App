import React from "react";
import "./styles.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-wrapper">
      <div className="terms-container">
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-intro">
          These Terms & Conditions govern your use of MPC’s services. By
          accessing or using our services, you agree to these terms.
        </p>

        <section className="terms-section">
          <h2 className="terms-heading">1. Services We Provide</h2>
          <p>
            We offer documentation, consultation, and processing services for:
            CSC, Real Estate, Property Work, Interior Design, Pan Card, Driving
            License, Affidavits, Agreements, BDA/BMC Work, and Architectural
            Services.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-heading">2. Offline Payment Policy</h2>
          <p>
            All payments are collected **offline** via cash, UPI, or direct bank
            transfer. No online or gateway-based payments are accepted at this
            time.
          </p>
          <ul className="terms-list">
            <li>Payment must be made before service processing begins.</li>
            <li>
              We will issue a confirmation slip or acknowledgment after payment.
            </li>
            <li>
              Ensure you collect your payment receipt physically or digitally.
            </li>
          </ul>
        </section>

        <section className="terms-section">
          <h2 className="terms-heading">3. Document Submission</h2>
          <p>
            It is your responsibility to provide valid, clear, and accurate
            documents. Any incorrect or incomplete submission may delay your
            service.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-heading">4. Refund Policy</h2>
          <p>
            As we deal with physical documentation and manual service
            processing, **refunds are not applicable** once the work has
            started. Refunds will only be considered if:
          </p>
          <ul className="terms-list">
            <li>The service has not been initiated at all.</li>
            <li>
              There is a failure to deliver due to our own error or
              non-availability.
            </li>
          </ul>
        </section>

        <section className="terms-section">
          <h2 className="terms-heading">5. External Dependencies</h2>
          <p>
            Some services depend on external government or legal departments
            (e.g., BDA, BMC, RTO, PAN offices). We are not responsible for
            delays or rejections from such departments.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-heading">6. Right to Refuse</h2>
          <p>
            We reserve the right to reject or cancel any service request if:
            <ul className="terms-list">
              <li>Fraudulent activity is suspected</li>
              <li>Documents appear forged or invalid</li>
              <li>Customer is non-cooperative or abusive</li>
            </ul>
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-heading">7. Updates to Terms</h2>
          <p>
            These terms may be updated at any time without prior notice. Your
            continued use of our services implies your acceptance of the current
            version of these terms.
          </p>
        </section>

        <p className="terms-footer">Last updated: June 2025</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
