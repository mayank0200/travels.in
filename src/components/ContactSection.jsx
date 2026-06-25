import React, { useState } from 'react';
import './ContactSection.css';
import { contactInfo } from '../data/travelData';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi! I'm ${formData.name}.%0A%0ASubject: ${formData.subject}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0A${formData.message}`;
    window.open(`https://wa.me/918854913030?text=${msg}`, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">Ready to start your journey? Contact us today to book your dream trip!</p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-card">
            <h3 className="form-title">Let's Talk</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required />
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us about your trip..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send via WhatsApp <FaWhatsapp />
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-info-col">
            <div className="info-card">
              <div className="info-icon-wrap phone-bg">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Call Us</h4>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                <p className="info-sub">Available 24/7</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrap email-bg">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email Us</h4>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                <p className="info-sub">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrap whatsapp-bg">
                <FaWhatsapp />
              </div>
              <div>
                <h4>WhatsApp</h4>
                <a href={contactInfo.whatsapp}>Chat with us now</a>
                <p className="info-sub">Instant replies</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrap location-bg">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Jaipur, Rajasthan, India</p>
                <p className="info-sub">Serving all of Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
