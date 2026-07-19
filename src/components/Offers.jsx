import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Offers.css';
import { trendingPackages } from '../data/travelData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaStar, FaClock, FaHotel, FaUtensils, FaCar } from 'react-icons/fa';

const AnimatedSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} ${className}`}>{children}</div>;
};

const TrendingPackages = () => {
  const navigate = useNavigate();

  return (
    <section className="trending" id="packages">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">🔥 Trending Now</span>
            <h2 className="section-title">Popular Tour Packages</h2>
            <p className="section-subtitle">Handcrafted itineraries at unbeatable prices with premium inclusions</p>
          </div>
        </AnimatedSection>

        <div className="trending__grid">
          {trendingPackages.map((pkg, index) => (
            <AnimatedSection key={pkg.id}>
              <div className="trending__card card-hover-lift">
                <div className="trending__img-wrap">
                  <img src={pkg.image} alt={pkg.name} className="trending__img" loading="lazy" />
                  <span className="trending__discount badge badge-red">{pkg.discount}% OFF</span>
                  <div className="trending__img-overlay">
                    <span className="trending__category badge badge-orange">{pkg.category}</span>
                  </div>
                </div>
                <div className="trending__body">
                  <div className="trending__rating">
                    <FaStar className="trending__star" />
                    <span className="trending__rating-val">{pkg.rating}</span>
                    <span className="trending__review-count">({pkg.reviewCount} reviews)</span>
                  </div>
                  <h3 className="trending__name">{pkg.name}</h3>
                  <div className="trending__highlights">
                    {pkg.highlights.map((h, i) => (
                      <span key={i} className="trending__highlight">{h}</span>
                    ))}
                  </div>
                  <div className="trending__features">
                    <span><FaClock /> {pkg.duration}</span>
                    <span><FaHotel /> {pkg.hotelStars}★ Hotel</span>
                    {pkg.mealsIncluded && <span><FaUtensils /> Meals</span>}
                    <span><FaCar /> {pkg.transportType}</span>
                  </div>
                  <div className="trending__footer">
                    <div className="trending__pricing">
                      <span className="trending__original-price">₹{pkg.originalPrice.toLocaleString()}</span>
                      <span className="trending__price">₹{pkg.price.toLocaleString()}</span>
                      <span className="trending__per">per person</span>
                    </div>
                    <button 
                      className="btn-primary btn-sm" 
                      onClick={() => {
                        navigate('/book', { state: { name: pkg.name, image: pkg.image, price: pkg.price, duration: pkg.duration, type: 'tour' } });
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
    </section>
  );
};

export default TrendingPackages;
