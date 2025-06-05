import "./styles.css";
import Logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";

const services = [
  { id: 1, label: "Resident Certificate" },
  { id: 2, label: "Caste Certificate" },
  { id: 3, label: "Income Certificate" },
  { id: 4, label: "Legal Heir Certificate" },
  { id: 5, label: "Pan Card" },
  { id: 6, label: "Driving License" },
  { id: 7, label: "Pauti" },
  { id: 8, label: "Mutation" },
  { id: 9, label: "Conversion" },
  { id: 10, label: "Demarcation" },
  { id: 11, label: "Revenue Map and Sketch Map" },
  { id: 12, label: "Property Partition" },
];

const navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-image" />
          <div>
            <span className="logo-text-primary">MPC</span>
            <br />
            <span className="logo-text-secondary">Consultancy</span>
          </div>
        </div>

        <ul className="menu">
          <li className="menu-item">Home</li>

          <li className="menu-item">
            Services ▾
            <ul className="dropdown">
              {/* Dynamically render services */}
              {services.map((service) => (
                <li
                  key={service.id}
                  className="dropdown-item"
                  onClick={() => navigate(`/servicePage/${service.label}`)}
                >
                  {/* Optionally show icon */}

                  {service.label}
                </li>
              ))}
            </ul>
          </li>

          <li className="menu-item">About Us</li>
          <li className="menu-item">Blogs</li>
          <li className="menu-item">Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
