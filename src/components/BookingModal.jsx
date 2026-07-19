import React, { useState, useEffect } from 'react';
import './BookingModal.css';
import { FaTimes, FaWhatsapp, FaUser, FaPhoneAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const BookingModal = ({ isOpen, onClose, destinationName, type = 'tour' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    travelers: '2',
    notes: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const phoneNumber = "918854913030"; // Target WhatsApp Number
    const isCab = type === 'cab';
    const isGeneral = type === 'general';
    
    let introText = `Hi! I want to book the tour for *${destinationName}*.`;
    if (isCab) {
      introText = `Hi! I want to book a cab for *${destinationName}*.`;
    } else if (isGeneral) {
      introText = `Hi! I would like to make a general travel enquiry.`;
    }
      
    const message = `${introText}%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Travelers:* ${formData.travelers}%0A*Notes:* ${formData.notes || 'None'}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="booking-modal__overlay" onClick={onClose}>
      <div className="booking-modal__content" onClick={e => e.stopPropagation()}>
        <button className="booking-modal__close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="booking-modal__header">
          <h2>{type === 'general' ? 'Enquire Now' : 'Book Your Trip'}</h2>
          {type !== 'general' && <p>to <span className="highlight">{destinationName}</span></p>}
        </div>

        <form className="booking-modal__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label><FaUser /> Full Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="John Doe" 
              required 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label><FaPhoneAlt /> Phone Number (WhatsApp)</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="+91 98765 43210" 
              required 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><FaCalendarAlt /> Travel Date</label>
              <input 
                type="date" 
                name="date" 
                required 
                value={formData.date} 
                onChange={handleChange} 
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="form-group">
              <label><FaUsers /> Travelers</label>
              <input 
                type="number" 
                name="travelers" 
                min="1" 
                required 
                value={formData.travelers} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Any Special Requests? (Optional)</label>
            <textarea 
              name="notes" 
              rows="3" 
              placeholder="e.g. Vegetarian food, extra bed..." 
              value={formData.notes} 
              onChange={handleChange} 
            ></textarea>
          </div>

          <button type="submit" className="booking-modal__submit btn-primary">
            <FaWhatsapp /> Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
