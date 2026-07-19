import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTABanner.css';

const CTABanner = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-banner">
      <div className="cta-banner__bg">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80" 
          alt="Adventure" 
          className="cta-banner__bg-img"
        />
      </div>
      <div className="cta-banner__overlay"></div>
      <div className="cta-banner__content container">
        <span className="cta-banner__label">🌟 Start Planning Today</span>
        <h2 className="cta-banner__title">Ready for Your<br/>Next Adventure?</h2>
        <p className="cta-banner__subtitle">Let us help you plan the perfect trip. Get personalized recommendations and exclusive deals.</p>
        <div className="cta-banner__actions">
          <button className="btn-primary btn-lg" onClick={() => navigate('/tours')}>
            Explore Tours →
          </button>
          <button className="btn-outline btn-lg" onClick={() => navigate('/contact')}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
