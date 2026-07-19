import React, { useState, useEffect } from 'react';
import CabServicesSection from '../components/CabServicesSection';
import './CabsPage.css';
import { FaTaxi, FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';

const CabsPage = () => {
  const [customCab, setCustomCab] = useState({
    from: 'Jaipur',
    to: '',
    date: '',
    members: '2'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setCustomCab({ ...customCab, [e.target.name]: e.target.value });
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "918854913030";
    const message = `Hi! I want to book a custom cab.%0A%0A*From:* ${customCab.from}%0A*To:* ${customCab.to}%0A*Date:* ${customCab.date}%0A*Members:* ${customCab.members}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="cabs-page standalone-page">
      {/* Hero Banner */}
      <div className="page-banner" style={{ backgroundImage: 'linear-gradient(rgba(11, 94, 215, 0.8), rgba(15, 118, 110, 0.8)), url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80)' }}>
        <div className="text-center container">
          <h1 className="page-banner-title">Premium Cab Services</h1>
          <p className="text-white mt-2" style={{fontSize: '18px'}}>Comfortable and reliable outstation taxi services from Jaipur.</p>
        </div>
      </div>

      <div className="container py-60">
        
        {/* Custom Booking Form */}
        <div className="cabs-booking-widget glass shadow-xl">
          <h2 className="widget-title"><FaTaxi className="icon-primary" /> Book Your Custom Route</h2>
          <form className="cabs-booking-form" onSubmit={handleCustomSubmit}>
            <div className="form-group">
              <label><FaMapMarkerAlt /> From</label>
              <input type="text" name="from" value={customCab.from} disabled className="disabled-input" />
            </div>
            
            <div className="form-group">
              <label><FaMapMarkerAlt /> To Destination</label>
              <input type="text" name="to" value={customCab.to} onChange={handleChange} placeholder="e.g. Udaipur" required />
            </div>

            <div className="form-group">
              <label><FaCalendarAlt /> Travel Date</label>
              <input type="date" name="date" value={customCab.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
            </div>

            <div className="form-group">
              <label><FaUsers /> Members</label>
              <input type="number" name="members" value={customCab.members} onChange={handleChange} min="1" required />
            </div>

            <button type="submit" className="btn-primary btn-submit">
              <FaWhatsapp /> Book on WhatsApp
            </button>
          </form>
        </div>

      </div>

      {/* Popular Routes Section */}
      <CabServicesSection />
    </div>
  );
};

export default CabsPage;
