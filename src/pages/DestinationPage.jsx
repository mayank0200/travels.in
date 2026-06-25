import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/travelData';
import './DestinationPage.css';

const DestinationPage = () => {
  const { tourId } = useParams();
  const tour = destinations.find(d => d.id === tourId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tourId]);

  if (!tour) {
    return (
      <div className="container py-60 text-center">
        <h2>Tour not found!</h2>
        <Link to="/" className="btn-return">Return Home</Link>
      </div>
    );
  }

  const bannerImg = tour.bannerImage || tour.image;

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <div className="dest-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${bannerImg})` }}>
        <div className="container text-center">
          <h1 className="dest-hero-title">{tour.name}</h1>
          <p className="dest-hero-subtitle">{tour.title}</p>
        </div>
      </div>

      <div className="container dest-content-wrapper">
        <div className="dest-main-col">
          {/* Overview */}
          <div className="dest-section-block shadow-sm">
            <h2 className="section-title">Overview</h2>
            <p className="dest-long-desc">{tour.longDescription || tour.description}</p>
          </div>

          {/* Highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <div className="dest-section-block shadow-sm">
              <h2 className="section-title">Tour Highlights</h2>
              <ul className="highlights-list">
                {tour.highlights.map((hl, idx) => (
                  <li key={idx} className="highlight-item">
                    <strong>{hl.name}:</strong> {hl.desc}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Gallery */}
          {tour.gallery && tour.gallery.length > 0 && (
            <div className="dest-section-block shadow-sm">
              <h2 className="section-title">Gallery</h2>
              <div className="dest-gallery-grid">
                {tour.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt={`${tour.name} ${idx + 1}`} className="gallery-img" />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="dest-sidebar-col">
          <div className="booking-card shadow-lg sticky-sidebar">
            <h3 className="booking-title">Book This Tour</h3>
            <div className="features-list">
              {tour.features.map((f, i) => (
                <div key={i} className="feature-item">
                  <span className="check-icon">✓</span> {f}
                </div>
              ))}
            </div>
            
            <form className="quick-enquiry-form">
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="date" placeholder="Travel Date" />
              <a 
                href={`https://wa.me/918854913030?text=Hi, I am interested in the ${tour.name} tour.`}
                target="_blank" 
                rel="noreferrer"
                className="btn-whatsapp-enquire"
              >
                Enquire on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
