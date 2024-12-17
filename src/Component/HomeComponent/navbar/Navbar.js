import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import logoImage from '../../../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const userData = localStorage.getItem('userData'); // Check if userData exists

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">
          <a href="/" className={userData ? "nav-link-disabled" : "nav-link"}>
            <img src={logoImage} alt="Logo" />
          </a>
        </div>

        {/* Show navigation links only if userData is not present */}
        {!userData && location.pathname === '/' && (
          <div className="nav-middle">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#about" className="nav-link">About</a>
          </div>
        )}

        {/* Show login/signup based on location */}
        {!userData && (
          <div className="nav-right">
            {location.pathname === '/signup' ? (
              <Link to="/login" className="nav-link">Login</Link>
            ) : (
              <Link to="/signup" className="nav-link">SignUp</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
