import React, { useState } from "react";
import "./styles.css";
import authService from "../../api/authService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((Prev) => ({
      ...Prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.signup(formData);
      console.log(res);
      navigate("/");
    } catch (error) {}
  };
  return (
    <div className="signup-wrapper">
      <div className="login-card">
        <h2>Create Account</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fa fa-envelope icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fa fa-user icon" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fa fa-lock icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="sign-up-container">
            <button type="submit" className="login-button">
              Sign Up
            </button>
          </div>

          <div className="options-row">
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <div className="divider">
            <span>or</span>
          </div>

          <p className="social-text">Sign up with your social media account</p>
          <div className="social-buttons">
            <button className="facebook">Facebook</button>
            <button className="twitter">Twitter</button>
            <button className="google">Google</button>
          </div>

          <p className="signup-link">
            Already have an account? <a href="/login">Log in here!</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
