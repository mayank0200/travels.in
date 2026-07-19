import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaSearch, FaHeart, FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '../data/travelData';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">✈️</span>
          <div className="header__logo-text">
            <span className="header__logo-brand">Rajasthan Gaurav</span>
            <span className="header__logo-sub">Travels</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav hide-mobile">
          <Link to="/" className={`header__link ${isActive('/') ? 'header__link--active' : ''}`}>Home</Link>
          <Link to="/tours" className={`header__link ${isActive('/tours') ? 'header__link--active' : ''}`}>Tour Packages</Link>
          <Link to="/cabs" className={`header__link ${isActive('/cabs') ? 'header__link--active' : ''}`}>Cabs</Link>
          <Link to="/about" className={`header__link ${isActive('/about') ? 'header__link--active' : ''}`}>About Us</Link>
          <Link to="/contact" className={`header__link ${isActive('/contact') ? 'header__link--active' : ''}`}>Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="header__actions">
          <button className="header__icon-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
            <FaSearch />
          </button>
          <Link to="/tours" className="header__icon-btn hide-mobile" aria-label="Wishlist">
            <FaHeart />
          </Link>
          <button onClick={() => navigate('/book', { state: { name: 'General Enquiry', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', price: null, duration: null, type: 'general' } })} className="header__cta hide-mobile">
            <FaWhatsapp /> Enquire Now
          </button>
          <button className="header__hamburger hide-desktop" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="header__search-overlay">
          <div className="container">
            <div className="header__search-box">
              <FaSearch className="header__search-icon" />
              <input type="text" placeholder="Search destinations, tours, packages..." className="header__search-input" autoFocus />
              <button className="header__search-close" onClick={() => setSearchOpen(false)}>
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`header__mobile-menu hide-desktop ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        <div className="header__mobile-menu-inner">
          <Link to="/" className="header__mobile-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/tours" className="header__mobile-link" onClick={() => setMenuOpen(false)}>Tour Packages</Link>
          <Link to="/cabs" className="header__mobile-link" onClick={() => setMenuOpen(false)}>Cabs</Link>
          <Link to="/about" className="header__mobile-link" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="header__mobile-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="header__mobile-divider"></div>
          <a href={`tel:${contactInfo.phone}`} className="header__mobile-link">
            <FaPhoneAlt /> {contactInfo.phone}
          </a>
          <button 
            onClick={() => { navigate('/book', { state: { name: 'General Enquiry', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', price: null, duration: null, type: 'general' } }); setMenuOpen(false); }} 
            className="btn-primary" 
            style={{marginTop: '16px', width: '100%', textAlign: 'center', display: 'block'}}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
