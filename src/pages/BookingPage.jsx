import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FaUser, FaPhone, FaCalendarAlt, FaUsers, FaCommentDots, FaWhatsapp, FaShieldAlt, FaLock, FaCheckCircle, FaChevronRight, FaMapMarkerAlt, FaClock, FaRupeeSign, FaSuitcaseRolling, FaTaxi } from 'react-icons/fa';
import { contactInfo } from '../data/travelData';
import './BookingPage.css';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '2',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!bookingData) {
      navigate('/tours');
    }
  }, [bookingData, navigate]);

  useEffect(() => {
    document.title = `Book ${bookingData?.name || 'Tour'} | Rajasthan Gaurav Travels`;
  }, [bookingData]);

  if (!bookingData) return null;

  const { name, image, price, duration, type } = bookingData;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello! I'd like to book:\n\n` +
      `📍 *${name}*\n` +
      (duration ? `⏱ Duration: ${duration}\n` : '') +
      (price ? `💰 Price: ₹${Number(price).toLocaleString()}/person\n` : '') +
      `\n👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `📅 Travel Date: ${form.date}\n` +
      `👥 Guests: ${form.guests}\n` +
      (form.message ? `💬 Message: ${form.message}\n` : '');

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/918854913030?text=${encoded}`, '_blank');
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80';

  return (
    <div className="booking-page">
      {/* Hero Banner */}
      <div className="booking-page__hero">
        <div className="container booking-page__hero-content">
          <div className="booking-page__breadcrumb">
            <Link to="/">Home</Link>
            <FaChevronRight />
            <Link to={type === 'cab' ? '/cabs' : '/tours'}>{type === 'cab' ? 'Cabs' : 'Tours'}</Link>
            <FaChevronRight />
            <span>Booking</span>
          </div>
          <h1 className="booking-page__hero-title">Complete Your Booking</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="booking-page__grid">

          {/* LEFT — Summary */}
          <div className="booking-summary">
            <div className="booking-summary__image-wrap">
              <img
                src={image || fallbackImage}
                alt={name}
                className="booking-summary__image"
                onError={(e) => { e.target.src = fallbackImage; }}
              />
              <div className="booking-summary__badge">
                {type === 'cab' ? <FaTaxi /> : <FaSuitcaseRolling />}
                {type === 'cab' ? 'Cab Service' : 'Tour Package'}
              </div>
            </div>
            <div className="booking-summary__body">
              <h2 className="booking-summary__title">{name}</h2>
              <div className="booking-summary__type">
                <FaMapMarkerAlt /> {type === 'cab' ? 'Outstation Cab' : 'Tour Package'}
              </div>

              <div className="booking-summary__details">
                {duration && (
                  <div className="booking-summary__detail">
                    <FaClock /> <span>Duration: <strong>{duration}</strong></span>
                  </div>
                )}
                <div className="booking-summary__detail">
                  <FaPhone /> <span>Support: <strong>{contactInfo.phone}</strong></span>
                </div>
              </div>

              {price && (
                <>
                  <div className="booking-summary__divider" />
                  <div className="booking-summary__price-box">
                    <div>
                      <div className="booking-summary__price-label">Starting from</div>
                      <div className="booking-summary__price-value">
                        ₹{Number(price).toLocaleString()}
                        <span className="booking-summary__price-suffix"> /person</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="booking-form-card">
            <div className="booking-form-card__header">
              <h2>Fill in Your Details</h2>
              <p>We'll send your booking request via WhatsApp for instant confirmation.</p>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="booking-form__group">
                <label><FaUser /> Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="booking-form__group">
                <label><FaPhone /> Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="booking-form__row">
                <div className="booking-form__group">
                  <label><FaCalendarAlt /> Travel Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="booking-form__group">
                  <label><FaUsers /> No. of Guests</label>
                  <select name="guests" value={form.guests} onChange={handleChange}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="booking-form__group">
                <label><FaCommentDots /> Special Requirements (Optional)</label>
                <textarea
                  name="message"
                  placeholder="Any special requests, preferences, or questions..."
                  value={form.message}
                  onChange={handleChange}
                  rows="3"
                />
              </div>

              <button type="submit" className="booking-form__submit">
                <FaWhatsapp size={22} /> Send Booking Request via WhatsApp
              </button>

              <p className="booking-form__note">
                Or call us directly at <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </p>

              <div className="booking-trust">
                <div className="booking-trust__item"><FaShieldAlt /> Verified Agency</div>
                <div className="booking-trust__item"><FaLock /> Secure Data</div>
                <div className="booking-trust__item"><FaCheckCircle /> Instant Response</div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingPage;
