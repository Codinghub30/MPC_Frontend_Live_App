import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Feed from "./pages/Feed";
// import CreatePost from "./pages/CreatePost";
// import PostDetail from "./pages/PostDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./Pages/Signup";
import Home from "./Pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Service from "./Pages/Service";
import ServiceForm from "./Pages/ServiceForm";
import AboutUs from "./Pages/AboutUs";
import RealEstate from "./Pages/Service/RealEstate";
import Csc from "./Pages/Service/Csc";
import PropertyWork from "./Pages/Service/PropertyWork";
import Interior from "./Pages/Service/Interior";
import PanCard from "./Pages/Service/PanCard";
import DriverLicense from "./Pages/Service/DriverLicence";
import Agreement from "./Pages/Service/Agreement";
import Bda from "./Pages/Service/Bda";
import Architectural from "./Pages/Service/Architectural";
import ContactUs from "./Pages/ContactUs";
import ImageGallery from "./Pages/ImageGallery";
import ScrollTop from "./components/ScrollTop";
import Affidavite from "./Pages/Service/Affidavite";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <ToastContainer position="top-right" autoClose={3000} />
        <ScrollTop />
        <Routes>
          {/* <Route path="/" element={<Feed />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/servicePage/:id" element={<Service />} /> */}
          <Route path="/servicePage/Real Estate" element={<RealEstate />} />
          <Route path="/servicePage/csc" element={<Csc />} />
          <Route path="/servicePage/property work" element={<PropertyWork />} />
          <Route path="/servicePage/Interior Design" element={<Interior />} />
          <Route path="/servicePage/Pan Card" element={<PanCard />} />
          <Route
            path="/servicePage/Driving License"
            element={<DriverLicense />}
          />
          <Route path="/servicePage/Agreement" element={<Agreement />} />
          <Route path="/servicePage/BDA and BMC Work" element={<Bda />} />
          <Route
            path="/servicePage/Architectural Work"
            element={<Architectural />}
          />
          <Route path="/servicePage/affidavite" element={<Affidavite />} />

          <Route path="/servicePage/form" element={<ServiceForm />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          {/* <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetail />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
