


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/scam-detectorlogo.png" alt="ScamDetector Logo" className="logo-icon" />
            {/* <span className="logo-text">ScamDetector</span> */}
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/Login" onClick={closeMenu}>Login</Link>
          <Link to="/Register" onClick={closeMenu}>Register</Link>
          <Link to="/Report" onClick={closeMenu}>Report Scam</Link>
          <Link to="/Help" onClick={closeMenu}>Help & Info</Link>
          <Link to="/About" onClick={closeMenu}>About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

