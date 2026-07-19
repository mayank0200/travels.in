import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationsGrid.css';
import { popularDestinations } from '../data/travelData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaStar, FaClock } from 'react-icons/fa';

const AnimatedSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} ${className}`}>{children}</div>;
};

const DestinationsGrid = () => {
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">🌍 Popular Destinations</span>
            <h2 className="section-title">Where Would You Like to Go?</h2>
            <p className="section-subtitle">Explore India's most stunning destinations, from royal palaces to serene backwaters</p>
          </div>
        </AnimatedSection>

        <div className="destinations__grid">
          {popularDestinations.map((dest, index) => (
            <AnimatedSection key={dest.id} className={`destinations__card-wrapper ${index < 2 ? 'destinations__card-wrapper--large' : ''}`}>
              <Link to={`/destination/${dest.id}`} className="destinations__card card-hover-lift">
                <div className="destinations__img-wrap">
                  <img src={dest.image} alt={dest.name} className="destinations__img" loading="lazy" />
                  <div className="destinations__card-overlay">
                    <span className="destinations__duration badge badge-primary"><FaClock /> {dest.duration}</span>
                  </div>
                </div>
                <div className="destinations__card-body">
                  <div className="destinations__card-top">
                    <h3 className="destinations__card-name">{dest.name}</h3>
                    <div className="destinations__card-rating">
                      <FaStar className="destinations__star" />
                      <span>{dest.rating}</span>
                    </div>
                  </div>
                  <p className="destinations__card-tagline">{dest.tagline}</p>
                  <div className="destinations__card-bottom">
                    <div className="destinations__card-price">
                      <span className="destinations__price-label">From</span>
                      <span className="destinations__price-value">₹{dest.startingPrice.toLocaleString()}</span>
                    </div>
                    <span className="destinations__card-link">Explore →</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;
