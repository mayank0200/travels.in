import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileBottomNav.css';
import { FaHome, FaCompass, FaTaxi, FaEnvelope } from 'react-icons/fa';

const MobileBottomNav = () => {
  return (
    <nav className="mobile-bottom-nav hide-desktop">
      <NavLink to="/" className={({ isActive }) => `mobile-bottom-nav__item ${isActive ? 'active' : ''}`}>
        <FaHome className="mobile-bottom-nav__icon" />
        <span className="mobile-bottom-nav__label">Home</span>
      </NavLink>
      
      <NavLink to="/tours" className={({ isActive }) => `mobile-bottom-nav__item ${isActive ? 'active' : ''}`}>
        <FaCompass className="mobile-bottom-nav__icon" />
        <span className="mobile-bottom-nav__label">Tours</span>
      </NavLink>

      <NavLink to="/cabs" className={({ isActive }) => `mobile-bottom-nav__item ${isActive ? 'active' : ''}`}>
        <FaTaxi className="mobile-bottom-nav__icon" />
        <span className="mobile-bottom-nav__label">Cabs</span>
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => `mobile-bottom-nav__item ${isActive ? 'active' : ''}`}>
        <FaEnvelope className="mobile-bottom-nav__icon" />
        <span className="mobile-bottom-nav__label">Contact</span>
      </NavLink>
    </nav>
  );
};

export default MobileBottomNav;
