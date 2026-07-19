import React, { useState, useEffect } from 'react';
import './ToursPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { trendingPackages, popularDestinations } from '../data/travelData';
import { FaStar, FaClock, FaHotel, FaUtensils, FaCar, FaSearch, FaFilter } from 'react-icons/fa';

const ToursPage = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const allPackages = [...trendingPackages];

  const handleBookNow = (pkg) => {
    navigate('/book', { state: { name: pkg.name, image: pkg.image, price: pkg.price, duration: pkg.duration, type: 'tour' } });
  };

  return (
    <div className="tours-page">
      {/* Hero */}
      <section className="tours-page__hero">
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80" alt="Tours" className="tours-page__hero-img" />
        <div className="tours-page__hero-overlay"></div>
        <div className="tours-page__hero-content container">
          <h1 className="tours-page__hero-title">Tour Packages</h1>
          <p className="tours-page__hero-subtitle">Discover handcrafted itineraries for every kind of traveler</p>
        </div>
      </section>

      <section className="tours-page__content">
        <div className="container">
          {/* Filter Bar */}
          <div className="tours-page__filter-bar">
            <div className="tours-page__search-box">
              <FaSearch />
              <input type="text" placeholder="Search packages..." className="tours-page__search-input" />
            </div>
            <div className="tours-page__filters">
              {['all', 'trending', 'bestseller'].map(f => (
                <button 
                  key={f} 
                  className={`tours-page__filter-btn ${filter === f ? 'tours-page__filter-btn--active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f === 'all' ? 'All Packages' : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Packages Grid */}
          <div className="tours-page__grid">
            {allPackages
              .filter(p => filter === 'all' || p.category === filter)
              .map(pkg => (
              <div key={pkg.id} className="tours-page__card card-hover-lift">
                <div className="tours-page__card-img-wrap">
                  <img src={pkg.image} alt={pkg.name} className="tours-page__card-img" loading="lazy" />
                  <span className="badge badge-red tours-page__discount">{pkg.discount}% OFF</span>
                </div>
                <div className="tours-page__card-body">
                  <div className="tours-page__card-rating">
                    <FaStar style={{color: 'var(--accent-orange)'}} />
                    <span>{pkg.rating}</span>
                    <span className="tours-page__review-count">({pkg.reviewCount})</span>
                  </div>
                  <h3 className="tours-page__card-title">{pkg.name}</h3>
                  <div className="tours-page__card-features">
                    <span><FaClock /> {pkg.duration}</span>
                    <span><FaHotel /> {pkg.hotelStars}★</span>
                    {pkg.mealsIncluded && <span><FaUtensils /> Meals</span>}
                    <span><FaCar /> {pkg.transportType}</span>
                  </div>
                  <div className="tours-page__card-footer">
                    <div>
                      <span className="tours-page__original">₹{pkg.originalPrice.toLocaleString()}</span>
                      <span className="tours-page__price">₹{pkg.price.toLocaleString()}</span>
                    </div>
                    <button className="btn-primary btn-sm" onClick={() => handleBookNow(pkg)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Destinations Section */}
          <div className="tours-page__destinations">
            <h2 className="section-title" style={{textAlign: 'center', marginBottom: '40px'}}>Popular Destinations</h2>
            <div className="tours-page__dest-grid">
              {popularDestinations.map(dest => (
                <Link to={`/destination/${dest.id}`} key={dest.id} className="tours-page__dest-card card-hover-lift">
                  <div className="tours-page__dest-img-wrap">
                    <img src={dest.image} alt={dest.name} className="tours-page__dest-img" loading="lazy" />
                    <div className="tours-page__dest-overlay">
                      <h3>{dest.name}</h3>
                      <p>{dest.tagline}</p>
                      <span>From ₹{dest.startingPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default ToursPage;
