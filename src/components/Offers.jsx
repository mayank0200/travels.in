import React from 'react';
import './Offers.css';
import { offers } from '../data/travelData';

const Offers = () => {
  return (
    <section className="offers-section container" id="offers">
      <div className="offers-header">
        <h2 className="offers-title">Offers</h2>
        <div className="offers-nav">
          <span className="nav-item active">All Offers</span>
          <span className="nav-item">Flights</span>
          <span className="nav-item">Hotels</span>
          <span className="nav-item">Holidays</span>
        </div>
      </div>
      
      <div className="offers-scroll-container">
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card shadow-md">
              <div className="offer-img-container">
                <img src={offer.image} alt={offer.title} className="offer-img" />
              </div>
              <div className="offer-content">
                <p className="offer-tag">DOM FLIGHTS</p>
                <h3 className="offer-card-title">{offer.title}</h3>
                <div className="offer-divider"></div>
                <p className="offer-desc">{offer.description}</p>
              </div>
              <div className="offer-footer">
                <div className="offer-tc">T&C's Apply</div>
                <button className="book-btn">BOOK NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
