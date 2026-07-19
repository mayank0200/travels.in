import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { contactInfo } from '../data/travelData';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="footer">
      {/* Newsletter Strip */}
      <div className="footer__newsletter">
        <div className="container">
          <div className="footer__newsletter-inner">
            <div className="footer__newsletter-text">
              <h3>Get Travel Inspiration</h3>
              <p>Subscribe for exclusive deals, travel tips, and destination guides.</p>
            </div>
            <form className="footer__newsletter-form" onSubmit={handleNewsletter}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="footer__newsletter-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer__newsletter-btn">
                <FaPaperPlane /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__col footer__col--brand">
              <div className="footer__logo">
                <span className="footer__logo-icon">✈️</span>
                <div>
                  <span className="footer__logo-brand">Rajasthan Gaurav</span>
                  <span className="footer__logo-sub">Travels</span>
                </div>
              </div>
              <p className="footer__desc">Explore Rajasthan's wonders with us! Immerse yourself in the rich culture, heritage, and hospitality of the desert state on our curated tours.</p>
              <div className="footer__socials">
                <a href={contactInfo.social.facebook} className="footer__social"><FaFacebookF /></a>
                <a href={contactInfo.social.instagram} className="footer__social"><FaInstagram /></a>
                <a href={contactInfo.social.youtube} className="footer__social"><FaYoutube /></a>
                <a href={contactInfo.social.twitter} className="footer__social"><FaTwitter /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tours">Tour Packages</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Destinations */}
            <div className="footer__col">
              <h4 className="footer__col-title">Top Destinations</h4>
              <ul className="footer__links">
                <li><Link to="/tours">Rajasthan</Link></li>
                <li><Link to="/tours">Kashmir</Link></li>
                <li><Link to="/tours">Goa</Link></li>
                <li><Link to="/tours">Kerala</Link></li>
                <li><Link to="/tours">Ladakh</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contact Us</h4>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <FaPhoneAlt />
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
                <div className="footer__contact-item">
                  <FaEnvelope />
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
                <div className="footer__contact-item">
                  <FaMapMarkerAlt />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rajasthan Gaurav Travels. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/refund-policy">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
