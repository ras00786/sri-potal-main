import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../../assets/logo.png'; // Replace with your logo path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  return (
    <div>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.4499880584012!2d79.50411610815235!3d15.406245656788423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b2fae973d1833%3A0xb52e601cd6aaea42!2sSri%20Sai%20Homemade%20Sweets%2C%20Kanigiri!5e0!3m2!1sen!2sin!4v1720935730572!5m2!1sen!2sin"
          width="100%"
          height="450"
          title="map"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container-fluid bg-dark text-light">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 footer-logo-color p-4">
                <Link to="/" className="navbar-brand">
                  <img style={{ height: "auto", width: "15em" }} src={logo} alt="Sri Sai Homemade Sweets Logo" />
                </Link>
                <p className="mt-3 mb-4">Sri Sai Homemade Sweets, Kanigiri. The best homemade sweets in town!</p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 d-flex justify-content-around">
              <div className="row gx-5">
                <div className="col-lg-6 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2 align-items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2 =" />
                    <p className="mb-0">D.NO: 8/3, 1323, Jawaharlal St, Kothapeta, Kanigiri, Andhra Pradesh 523230</p>
                  </div>
                  <div className="d-flex mb-2 align-items-center">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-primary me-2" />
                    <p className="mb-0">+91 9985948118</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a href="#home" className="text-light mb-2" ><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Home</a>
                    <a href="#about" className="text-light mb-2" ><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />About Us</a>
                    <a href="#services" className="text-light mb-2" ><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Our Services</a>
                    <a  href="#contact" className="text-light" ><FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-white footer-bottom">
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div className="d-flex align-items-center justify-content-center" style={{ height: "50px" }}>
                <p className="mb-0">&copy; 2024 <Link className="text-white border-bottom" to="/">Sri Sai Homemade Sweets, Kanigiri</Link>. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
