import React from "react";
import AboutUs from "./AboutUs/About";
import Home from "./homepage/Homepage";
import Services from "./services/Services";
import ContactUs from "./contactus/ContactUs";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar"; // Ensure Navbar is imported

const HomeMain = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default HomeMain;
