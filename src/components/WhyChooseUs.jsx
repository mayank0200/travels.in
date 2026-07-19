import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseUs.css';
import { whyChooseUs, aboutUs } from '../data/travelData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollAnimation(0.3);
  const started = useRef(false);

  useEffect(() => {
    if (isVisible && !started.current) {
      started.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) { setCount(target); clearInterval(timer); }
        else { setCount(Math.floor(current * 10) / 10); }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isVisible, target]);

  return <span ref={ref} className="counter-value">{Number.isInteger(target) ? Math.floor(count).toLocaleString() : count.toFixed(1)}{suffix}</span>;
};

const WhyChooseUs = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);

  return (
    <section className="why-us">
      <div className="container">
        <div ref={headerRef} className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
          <span className="section-label">✅ Why Choose Us</span>
          <h2 className="section-title">Trusted by Thousands of Travelers</h2>
          <p className="section-subtitle">We go above and beyond to make every journey exceptional</p>
        </div>

        {/* Stats */}
        <div className="why-us__stats">
          {aboutUs.stats.map((stat, i) => (
            <div key={i} className="why-us__stat">
              <Counter target={stat.count} suffix={stat.suffix} />
              <span className="why-us__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="why-us__grid">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="why-us__card card-glass card-hover-lift">
              <span className="why-us__icon">{item.icon}</span>
              <h3 className="why-us__card-title">{item.title}</h3>
              <p className="why-us__card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
