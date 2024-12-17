import React from 'react';
import './loader.css'; // Make sure to create this CSS file for styling
import logoImage from '../../../assets/logo.png' // Replace with the path to your logo

const Loader = () => {
    return (
      <div className="loader-container">
        <div className="loader">
          <img src={logoImage} alt="Logo" className="loader-logo" />
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
          <div className="line line4"></div>
        </div>
      </div>
    );
  };
  
  export default Loader;
