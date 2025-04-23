import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/images/logo.png" alt="Logo" />
          </Link>
        </div>

        <div className="navbar-toggler" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
          <li onClick={closeMenu}><Link to="/">Home</Link></li>
          <li onClick={closeMenu}><Link to="/destinations">Destinations</Link></li>
          <li onClick={closeMenu}><Link to="/explore">Explore</Link></li>
          <li onClick={closeMenu}><Link to="/virtual-tours">Virtual Tours</Link></li>
          <li onClick={closeMenu}><Link to="/community">Community</Link></li>
          <li onClick={closeMenu}><Link to="/about">About</Link></li>
          <li className="dropdown">
            <span>Account ▾</span>
            <ul className="dropdown-content">
              <li onClick={closeMenu}><Link to="/login">Login</Link></li>
              <li onClick={closeMenu}><Link to="/register">Register</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: '70px' }}></div>
    </>
  );
};

export default Navbar;
