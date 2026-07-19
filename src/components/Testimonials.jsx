import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import { testimonials } from '../data/travelData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <section className="testimonials">
      <div className="container">
        <div ref={headerRef} className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
          <span className="section-label">💬 Testimonials</span>
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">Real stories from real travelers who experienced the magic</p>
        </div>

        <div 
          className="testimonials__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="testimonials__track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((t) => (
              <div key={t.id} className="testimonials__slide">
                <div className="testimonials__card card-glass">
                  <FaQuoteLeft className="testimonials__quote-icon" />
                  <p className="testimonials__text">{t.text}</p>
                  <div className="testimonials__stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="testimonials__star" />
                    ))}
                  </div>
                  <div className="testimonials__author">
                    <img src={t.avatar} alt={t.name} className="testimonials__avatar" />
                    <div>
                      <span className="testimonials__name">{t.name}</span>
                      <span className="testimonials__location">{t.location}</span>
                    </div>
                  </div>
                  <span className="testimonials__tour">{t.tour}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
