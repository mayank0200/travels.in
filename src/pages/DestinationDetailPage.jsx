import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { popularDestinations } from '../data/travelData';
import './DestinationDetailPage.css';
import { FaMapMarkerAlt, FaStar, FaCheck, FaTimes, FaClock, FaCalendarDay, FaInfoCircle, FaOm, FaHeart, FaMap, FaSuitcaseRolling } from 'react-icons/fa';

const DestinationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActiveTab('overview');
  }, [id]);

  const destination = popularDestinations.find(dest => dest.id === id);

  if (!destination) {
    return (
      <div className="dest-detail__not-found container">
        <h2>Destination Not Found</h2>
        <button className="btn-primary" onClick={() => navigate('/tours')}>Browse Tours</button>
      </div>
    );
  }

  const handleBookNow = (itemName = destination.name, itemImage = destination.image, itemPrice = destination.startingPrice, itemDuration = destination.duration) => {
    navigate('/book', { state: { name: itemName, image: itemImage, price: itemPrice, duration: itemDuration, type: 'tour' } });
  };

  const renderSubCategoryGrid = (items, fallbackText) => {
    if (!items || items.length === 0) {
      return <div className="no-items-msg"><p>{fallbackText}</p></div>;
    }
    return (
      <div className="sub-category-grid">
        {items.map(item => (
          <div key={item.id} className="sub-card card-hover-lift shadow-sm">
            <div className="sub-card__img-wrap">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div className="sub-card__badge badge-primary"><FaClock /> {item.duration}</div>
            </div>
            <div className="sub-card__body">
              <h3 className="sub-card__title">{item.name}</h3>
              <p className="sub-card__desc">{item.desc}</p>
              <div className="sub-card__footer">
                <div className="sub-card__price">
                  <span>From</span>
                  <strong>₹{item.price.toLocaleString()}</strong>
                </div>
                <button 
                  className="btn-primary btn-sm"
                  onClick={() => handleBookNow(`${item.name} (${destination.name})`, item.image, item.price, item.duration)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="dest-detail">
      {/* Hero Section */}
      <section className="dest-detail__hero">
        <img src={destination.image} alt={destination.name} className="dest-detail__hero-img" />
        <div className="dest-detail__hero-overlay"></div>
        <div className="container dest-detail__hero-content">
          <div className="badge badge-primary dest-detail__hero-badge"><FaMapMarkerAlt /> {destination.name}, India</div>
          <h1 className="dest-detail__title">{destination.name}</h1>
          <p className="dest-detail__tagline">{destination.tagline}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="dest-detail__main">
        <div className="container">
          
          {/* Tab Navigation */}
          <div className="dest-detail__tabs">
            <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
              <FaInfoCircle /> Overview
            </button>
            <button className={`tab-btn ${activeTab === 'spiritual' ? 'active' : ''}`} onClick={() => setActiveTab('spiritual')}>
              <FaOm /> Spiritual
            </button>
            <button className={`tab-btn ${activeTab === 'honeymoon' ? 'active' : ''}`} onClick={() => setActiveTab('honeymoon')}>
              <FaHeart /> Honeymoon
            </button>
            <button className={`tab-btn ${activeTab === 'places' ? 'active' : ''}`} onClick={() => setActiveTab('places')}>
              <FaMap /> Places
            </button>
            <button className={`tab-btn ${activeTab === 'packages' ? 'active' : ''}`} onClick={() => setActiveTab('packages')}>
              <FaSuitcaseRolling /> Packages
            </button>
          </div>

          {/* Tab Content */}
          <div className="dest-detail__tab-content">
            
            {activeTab === 'overview' && (
              <div className="dest-detail__grid">
                {/* Left Column - Details */}
                <div className="dest-detail__info">
                  <div className="dest-detail__section">
                    <h2 className="heading-3">About The Destination</h2>
                    <p className="text-body-lg" style={{lineHeight: 1.8}}>{destination.description}</p>
                  </div>

                  <div className="dest-detail__section">
                    <h2 className="heading-3">Top Highlights</h2>
                    <ul className="dest-detail__highlights">
                      {destination.highlights?.map((highlight, index) => (
                        <li key={index}><FaStar className="icon-star" /> {highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="dest-detail__section">
                    <h2 className="heading-3">Itinerary ({destination.duration})</h2>
                    <div className="dest-detail__itinerary">
                      {destination.itinerary?.map((day, index) => (
                        <div key={index} className="itinerary-day">
                          <div className="itinerary-day__marker"><FaCalendarDay /></div>
                          <div className="itinerary-day__content">
                            <h4>Day {day.day}: {day.title}</h4>
                            <p>{day.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Sticky Booking Card */}
                <div className="dest-detail__sidebar">
                  <div className="dest-detail__pricing-card shadow-xl">
                    <div className="pricing-card__header">
                      <div>
                        <span className="price-label">Starting from</span>
                        <h2 className="price-value">₹{destination.startingPrice.toLocaleString()} <span className="price-suffix">/person</span></h2>
                      </div>
                      <div className="pricing-card__rating">
                        <FaStar className="icon-star" />
                        <span>{destination.rating}</span>
                        <small>({destination.reviewCount} reviews)</small>
                      </div>
                    </div>

                    <div className="pricing-card__features">
                      <div className="feature"><FaClock className="icon-primary" /> {destination.duration} Tour</div>
                    </div>

                    <div className="pricing-card__lists">
                      <div className="pricing-list">
                        <h4>What's Included</h4>
                        <ul>
                          {destination.inclusions?.map((inc, i) => (
                            <li key={i}><FaCheck className="icon-success" /> {inc}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="pricing-list">
                        <h4>Not Included</h4>
                        <ul>
                          {destination.exclusions?.map((exc, i) => (
                            <li key={i}><FaTimes className="icon-danger" /> {exc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button 
                      className="btn-primary btn-lg pricing-card__btn" 
                      onClick={() => handleBookNow()}
                    >
                      Book Base Package
                    </button>
                    <p className="pricing-card__note">Need help? Call us at +91 8854913030</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'spiritual' && (
              <div className="tab-pane-fade-in">
                <h2 className="section-title">Spiritual Tours in {destination.name}</h2>
                {renderSubCategoryGrid(destination.categories?.spiritual, `No specific spiritual tours listed for ${destination.name} yet.`)}
              </div>
            )}

            {activeTab === 'honeymoon' && (
              <div className="tab-pane-fade-in">
                <h2 className="section-title">Romantic Getaways in {destination.name}</h2>
                {renderSubCategoryGrid(destination.categories?.honeymoon, `No specific honeymoon packages listed for ${destination.name} yet.`)}
              </div>
            )}

            {activeTab === 'places' && (
              <div className="tab-pane-fade-in">
                <h2 className="section-title">Top Places to Visit in {destination.name}</h2>
                {renderSubCategoryGrid(destination.categories?.places, `No specific places listed for ${destination.name} yet.`)}
              </div>
            )}

            {activeTab === 'packages' && (
              <div className="tab-pane-fade-in">
                <h2 className="section-title">Special Packages in {destination.name}</h2>
                {renderSubCategoryGrid(destination.categories?.packages, `No special packages listed for ${destination.name} yet.`)}
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};

export default DestinationDetailPage;
