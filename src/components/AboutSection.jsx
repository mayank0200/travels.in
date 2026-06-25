import React from 'react';
import './AboutSection.css';
import { aboutUs } from '../data/travelData';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text-col">
            <span className="section-tag">About Us</span>
            <h2 className="about-title">{aboutUs.title}</h2>
            <p className="about-desc">{aboutUs.description}</p>

            <div className="stats-row">
              {aboutUs.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-icon">{stat.icon}</span>
                  <h3 className="stat-count">{stat.count}+</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-explore">Explore More</a>
          </div>

          <div className="about-img-col">
            <div className="img-mosaic">
              {aboutUs.images.map((img, idx) => (
                <div key={idx} className={`mosaic-item mosaic-item-${idx + 1}`}>
                  <img src={img} alt={`About ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mission-section">
          <div className="mission-card">
            <h3 className="mission-title">{aboutUs.mission.title}</h3>
            <p className="mission-text">{aboutUs.mission.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
