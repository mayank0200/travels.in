import React, { useState } from 'react';
import './FAQSection.css';
import { faqItems } from '../data/travelData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation(0.1);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div ref={headerRef} className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
          <span className="section-label">❓ FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know before your journey</p>
        </div>

        <div className="faq__list">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
              onClick={() => toggle(index)}
            >
              <div className="faq__question">
                <h3 className="faq__question-text">{item.question}</h3>
                <span className="faq__toggle">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div className="faq__answer">
                <p className="faq__answer-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
