import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import { rajasthanCities } from '../data/travelData';

const HeroSection = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('one-way');
  const [fromCity, setFromCity] = useState('Jaipur');
  const [toCity, setToCity] = useState('Udaipur');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [packageType, setPackageType] = useState('Regular');
  
  // Custom dropdown states
  const [activeDropdown, setActiveDropdown] = useState(null); // 'from', 'to', 'travellers'
  const [travellers, setTravellers] = useState(2);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSwap = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  const handleSearch = () => {
    // Navigate to a search results page with the parameters
    navigate(`/search?from=${fromCity}&to=${toCity}&type=${packageType}&date=${departureDate}&travellers=${travellers}`);
  };

  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="container hero-content">
        
        <div className="search-widget" ref={dropdownRef}>
          <div className="trip-types">
            <label className="radio-label">
              <input type="radio" name="trip" checked={tripType === 'one-way'} onChange={() => setTripType('one-way')} />
              <span className="radio-text">One Way</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="trip" checked={tripType === 'round-trip'} onChange={() => setTripType('round-trip')} />
              <span className="radio-text">Round Trip</span>
            </label>
            <span className="book-cabs-badge">Book Intercity Cabs</span>
          </div>

          <div className="search-inputs-grid">
            {/* FROM */}
            <div 
              className={`input-box ${activeDropdown === 'from' ? 'active' : ''}`} 
              onClick={() => setActiveDropdown('from')}
            >
              <span className="box-label">From</span>
              <div className="box-main-val">{fromCity}</div>
              <span className="box-sub-val">Rajasthan, India</span>
              
              {activeDropdown === 'from' && (
                <div className="custom-dropdown shadow-lg">
                  <div className="dropdown-search">
                    <input type="text" placeholder="Search City" autoFocus />
                  </div>
                  <ul className="city-list">
                    {rajasthanCities.map(city => (
                      <li key={city} onClick={(e) => { e.stopPropagation(); setFromCity(city); setActiveDropdown(null); }}>
                        <div className="city-name">{city}</div>
                        <div className="city-state">Rajasthan, India</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="swap-btn-container">
              <button className="swap-icon-btn shadow-md" onClick={(e) => { e.stopPropagation(); handleSwap(); }}>
                ⇄
              </button>
            </div>

            {/* TO */}
            <div 
              className={`input-box ${activeDropdown === 'to' ? 'active' : ''}`} 
              onClick={() => setActiveDropdown('to')}
            >
              <span className="box-label">To</span>
              <div className="box-main-val">{toCity}</div>
              <span className="box-sub-val">Rajasthan, India</span>

              {activeDropdown === 'to' && (
                <div className="custom-dropdown shadow-lg">
                  <div className="dropdown-search">
                    <input type="text" placeholder="Search City" autoFocus />
                  </div>
                  <ul className="city-list">
                    {rajasthanCities.map(city => (
                      <li key={city} onClick={(e) => { e.stopPropagation(); setToCity(city); setActiveDropdown(null); }}>
                        <div className="city-name">{city}</div>
                        <div className="city-state">Rajasthan, India</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* DEPARTURE */}
            <div className="input-box date-box">
              <span className="box-label">Departure <span className="down-arrow">▼</span></span>
              <input 
                type="date" 
                className="hidden-date-input" 
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
              <div className="box-main-val date-val">
                {departureDate ? new Date(departureDate).getDate() : 'Select'} 
                <span className="date-month"> {departureDate ? new Date(departureDate).toLocaleString('default', { month: 'short', year: '2-digit' }) : 'Date'}</span>
              </div>
              <span className="box-sub-val">{departureDate ? new Date(departureDate).toLocaleDateString('en-US', { weekday: 'long' }) : 'Any day'}</span>
            </div>

            {/* RETURN */}
            <div className={`input-box date-box ${tripType === 'one-way' ? 'disabled' : ''}`}>
              <span className="box-label">Return <span className="down-arrow">▼</span></span>
              <input 
                type="date" 
                className="hidden-date-input" 
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                disabled={tripType === 'one-way'}
              />
              <div className="box-main-val date-val">
                {tripType === 'one-way' ? 'Tap to add' : (returnDate ? new Date(returnDate).getDate() : 'Select')} 
                {tripType !== 'one-way' && <span className="date-month"> {returnDate ? new Date(returnDate).toLocaleString('default', { month: 'short', year: '2-digit' }) : 'Date'}</span>}
              </div>
              <span className="box-sub-val">{returnDate && tripType !== 'one-way' ? new Date(returnDate).toLocaleDateString('en-US', { weekday: 'long' }) : 'Round trip for great deals'}</span>
            </div>

            {/* TRAVELLERS */}
            <div 
              className={`input-box ${activeDropdown === 'travellers' ? 'active' : ''}`}
              onClick={() => setActiveDropdown('travellers')}
            >
              <span className="box-label">Travellers & Class <span className="down-arrow">▼</span></span>
              <div className="box-main-val">{travellers} <span className="text-md">Traveler{travellers > 1 ? 's' : ''}</span></div>
              <span className="box-sub-val">Standard Class</span>

              {activeDropdown === 'travellers' && (
                <div className="custom-dropdown shadow-lg travellers-dropdown" onClick={(e) => e.stopPropagation()}>
                  <div className="traveller-counter">
                    <span className="counter-label">Adults</span>
                    <div className="counter-controls">
                      <button onClick={() => setTravellers(Math.max(1, travellers - 1))}>-</button>
                      <span>{travellers}</span>
                      <button onClick={() => setTravellers(travellers + 1)}>+</button>
                    </div>
                  </div>
                  <button className="btn-apply" onClick={() => setActiveDropdown(null)}>APPLY</button>
                </div>
              )}
            </div>
          </div>

          {/* FARE TYPES */}
          <div className="fare-types-container">
            <span className="fare-title">Select A Package Type:</span>
            <div className="fare-options">
              {['Regular', 'Honeymoon', 'Spiritual', 'Adventure'].map(type => (
                <label key={type} className={`fare-pill ${packageType === type ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="fare" 
                    checked={packageType === type}
                    onChange={() => setPackageType(type)}
                  /> 
                  {type}
                </label>
              ))}
            </div>
          </div>

        </div>
        
        <div className="search-action">
          <button className="btn-search-massive" onClick={handleSearch}>SEARCH</button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
