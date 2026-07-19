import React from 'react';
import './Experiences.css';
import { experiences } from '../data/travelData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} ${className}`}>{children}</div>;
};

const Experiences = () => {
  return (
    <section className="experiences">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">🎯 Experiences</span>
            <h2 className="section-title">Travel Your Way</h2>
            <p className="section-subtitle">Choose from curated experiences designed for every type of traveler</p>
          </div>
        </AnimatedSection>

        <div className="experiences__grid">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.id}>
              <div className="experiences__card card-hover-lift">
                <div className="experiences__img-wrap">
                  <img src={exp.image} alt={exp.name} className="experiences__img" loading="lazy" />
                  <div className="experiences__overlay">
                    <span className="experiences__icon">{exp.icon}</span>
                    <h3 className="experiences__name">{exp.name}</h3>
                    <span className="experiences__count">{exp.count} tours</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
