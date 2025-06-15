import React from "react";
import "./styles.css"; // Import the CSS file

const PrivacyPolicy = () => {
  return (
    <div className="privacy-wrapper">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-intro">
          At MPC, your privacy is our priority. This Privacy Policy explains how
          we collect, use, and protect your personal information when you engage
          with our services.
        </p>

        <section className="privacy-section">
          <h2 className="privacy-heading">1. Information We Collect</h2>
          <p>
            We may collect personal information such as your full name, contact
            number, email address, physical address, and documents necessary to
            process services like CSC registration, real estate support,
            affidavit creation, and more.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-heading">2. How We Use Your Information</h2>
          <ul className="privacy-list">
            <li>To process the service(s) you have requested.</li>
            <li>To communicate updates or additional document needs.</li>
            <li>To improve user experience and service efficiency.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-heading">3. Data Protection & Security</h2>
          <p>
            We implement standard security measures to protect your personal
            data from unauthorized access, disclosure, or destruction. However,
            no method of transmission is 100% secure.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-heading">4. Sharing of Information</h2>
          <p>
            Your data is only shared with government bodies or authorized
            agencies directly involved in delivering your selected service. We
            do not sell or rent your information to third parties.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-heading">5. Retention Period</h2>
          <p>
            We retain your personal information only for as long as necessary to
            fulfill the service or as required by law. You may request data
            deletion by contacting us.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-heading">6. Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your
            data. For any privacy-related concerns, please contact our support
            team.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-heading">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Any significant
            changes will be posted on this page with an updated date.
          </p>
        </section>

        <p className="privacy-footer">Last updated: June 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
