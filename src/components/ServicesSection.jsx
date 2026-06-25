import React from 'react';
import './ServicesSection.css';
import { services, luxuryTravel } from '../data/travelData';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-tag">Our Services</span>
          <h2 className="services-title">Explore Our <span className="highlight">Services</span></h2>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrap">
                <span className="service-emoji">{service.icon}</span>
              </div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a href={`#${service.id}`} className="service-link">Learn More →</a>
            </div>
          ))}
        </div>

        {/* Luxury Travel Banner */}
        <div className="luxury-banner">
          <div className="luxury-text">
            <span className="luxury-tag">Luxury Travel</span>
            <h2 className="luxury-title">{luxuryTravel.title}</h2>
            <p className="luxury-desc">{luxuryTravel.description}</p>
            <a href="#cabs" className="btn-book-ride">Book A Ride</a>
          </div>
          <div className="luxury-video">
            <iframe
              width="100%"
              height="100%"
              src={luxuryTravel.youtubeEmbed}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
