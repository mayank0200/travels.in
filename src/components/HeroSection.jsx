import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [tourType, setTourType] = useState('');
  const [duration, setDuration] = useState('');

  const handleSearch = () => {
    navigate(`/search?to=${destination}&type=${tourType}&dur=${duration}`);
  };

  return (
    <section className="hero">
      <div className="hero__bg">
        <img 
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80" 
          alt="Rajasthan Gaurav Travels" 
          className="hero__bg-img"
        />
      </div>
      <div className="hero__overlay"></div>

      {/* Floating Elements */}
      <div className="hero__floaters">
        <div className="hero__float hero__float--1"></div>
        <div className="hero__float hero__float--2"></div>
        <div className="hero__float hero__float--3"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__label">✨ Premium Travel Experiences</span>
          <h1 className="hero__title">
            Discover<br/>
            <span className="hero__title-accent">Rajasthan</span>
          </h1>
          <p className="hero__subtitle">
            Explore breathtaking destinations, handcrafted tour packages, and unforgettable experiences across India's most stunning landscapes.
          </p>
          <div className="hero__cta-group">
            <button className="btn-primary btn-lg" onClick={() => navigate('/tours')}>
              Explore Tours →
            </button>
            <button className="btn-outline btn-lg" onClick={() => navigate('/contact')}>
              Plan My Trip
            </button>
          </div>
        </div>

        {/* Search Widget */}
        <div className="hero__search glass">
          <div className="hero__search-row">
            <div className="hero__search-field">
              <FaMapMarkerAlt className="hero__search-field-icon" />
              <div className="hero__search-field-content">
                <label className="hero__search-label">Destination</label>
                <select 
                  className="hero__search-select" 
                  value={destination} 
                  onChange={e => setDestination(e.target.value)}
                >
                  <option value="">Where to?</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="kashmir">Kashmir</option>
                  <option value="goa">Goa</option>
                  <option value="kerala">Kerala</option>
                  <option value="ladakh">Ladakh</option>
                  <option value="himachal">Himachal</option>
                </select>
              </div>
            </div>

            <div className="hero__search-divider"></div>

            <div className="hero__search-field">
              <FaCalendarAlt className="hero__search-field-icon" />
              <div className="hero__search-field-content">
                <label className="hero__search-label">Tour Type</label>
                <select 
                  className="hero__search-select" 
                  value={tourType} 
                  onChange={e => setTourType(e.target.value)}
                >
                  <option value="">Select type</option>
                  <option value="adventure">Adventure</option>
                  <option value="honeymoon">Honeymoon</option>
                  <option value="family">Family</option>
                  <option value="luxury">Luxury</option>
                  <option value="religious">Religious</option>
                </select>
              </div>
            </div>

            <div className="hero__search-divider"></div>

            <div className="hero__search-field">
              <FaClock className="hero__search-field-icon" />
              <div className="hero__search-field-content">
                <label className="hero__search-label">Duration</label>
                <select 
                  className="hero__search-select" 
                  value={duration} 
                  onChange={e => setDuration(e.target.value)}
                >
                  <option value="">Any duration</option>
                  <option value="2-3">2-3 Days</option>
                  <option value="4-5">4-5 Days</option>
                  <option value="6-7">6-7 Days</option>
                  <option value="8+">8+ Days</option>
                </select>
              </div>
            </div>

            <button className="hero__search-btn" onClick={handleSearch}>
              <FaSearch />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="hero__badges">
          <div className="hero__badge"><span>💰</span> Best Prices</div>
          <div className="hero__badge"><span>🛡️</span> Safe Travels</div>
          <div className="hero__badge"><span>⭐</span> Quality Service</div>
          <div className="hero__badge"><span>👑</span> Luxury Experiences</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
