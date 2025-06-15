import React, { useState } from "react";
import "./styles.css";
import Logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const services = [
  { id: 1, label: "CSC" },
  { id: 2, label: "Real Estate" },
  { id: 3, label: "Property Work" },
  { id: 4, label: "Interior Design" },
  { id: 5, label: "Pan Card" },
  { id: 6, label: "Driving License" },
  { id: 7, label: "Affidavite" },
  { id: 8, label: "Agreement" },
  { id: 9, label: "BDA and BMC Work" },
  { id: 10, label: "Architectural Work" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <nav className="navbar">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" className="logo-image" />
          <div>
            <span className="logo-text-primary">MatruShakti Property</span>
            <br />
            <span className="logo-text-secondary">Consultancy</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="menu desktop-menu">
          <li className="menu-item" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="menu-item">
            Services ▾
            <ul className="dropdown">
              {services.map((service) => (
                <li
                  key={service.id}
                  className="dropdown-item"
                  onClick={() => navigate(`/servicePage/${service.label}`)}
                >
                  {service.label}
                </li>
              ))}
            </ul>
          </li>
          <li className="menu-item" onClick={() => navigate("/about-us")}>
            About Us
          </li>
          <li className="menu-item" onClick={() => navigate("/image-gallery")}>
            Gallery
          </li>
          <li className="menu-item" onClick={() => navigate("/contact-us")}>
            Contact Us
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={toggleDrawer}>
          <FaBars size={24} />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <FaTimes className="close-icon" onClick={toggleDrawer} />
        </div>
        <ul className="drawer-menu">
          <li
            onClick={() => {
              toggleDrawer();
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className="drawer-collapsible"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            <div className="drawer-collapsible-header">
              Services
              <span>{servicesOpen ? "▲" : "▼"}</span>
            </div>
            {servicesOpen && (
              <ul className="drawer-submenu">
                {services.map((service) => (
                  <li
                    key={service.id}
                    onClick={() => {
                      toggleDrawer();
                      navigate(`/servicePage/${service.label}`);
                    }}
                  >
                    {service.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            onClick={() => {
              toggleDrawer();
              navigate("/about-us");
            }}
          >
            About Us
          </li>
          <li
            onClick={() => {
              toggleDrawer();
              navigate("/image-gallery");
            }}
          >
            Gallery
          </li>
          <li
            onClick={() => {
              toggleDrawer();
              navigate("/contact-us");
            }}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
