import React from 'react';
import './Abouts.css';
import grandmother from '../../../assets/grandmother.png'; // Import your image

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-side-heading">
       
      </div>
      <div className="about-content">
        <div className="about-text">
        <h1>About Us</h1>
          <p>
            Welcome to our website! We are passionate about delivering the best traditional sweets that bring back fond memories of your childhood. Our team is dedicated to providing top-notch quality and ensuring customer satisfaction.
          </p>
          <p>
            Our mission is to create value and make a difference by preserving and sharing the rich culinary heritage of our grandmothers. We believe in innovation, integrity, and excellence in everything we do. Thank you for choosing us and being part of our journey.
          </p>
          <p>
            With over 50 years of experience in the industry, we take pride in offering you the sweets that your grandmothers used to make. Our recipes are famous for their exceptional taste and the cherished memories they bring back. Relive your childhood with every bite of our delicious, traditional sweets.
          </p>
        </div>
        <div className="about-image-container">
          <img src={grandmother} alt="Grandmother" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
