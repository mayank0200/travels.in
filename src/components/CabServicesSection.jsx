import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CabServicesSection.css';
import { FaTaxi, FaRoad, FaClock, FaCheckCircle, FaStar } from 'react-icons/fa';

const cabRoutes = [
  { id: 'cab_delhi', destination: 'Delhi', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80', distance: '280 km', time: '5 hrs', price: 2500 },
  { id: 'cab_agra', destination: 'Agra', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80', distance: '240 km', time: '4.5 hrs', price: 2800 },
  { id: 'cab_udaipur', destination: 'Udaipur', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80', distance: '390 km', time: '7 hrs', price: 4500 },
  { id: 'cab_jodhpur', destination: 'Jodhpur', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80', distance: '350 km', time: '6 hrs', price: 4000 },
  { id: 'cab_khatu', destination: 'Khatu Shyam Ji', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80', distance: '85 km', time: '2 hrs', price: 1500 },
  { id: 'cab_pushkar', destination: 'Pushkar', image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&q=80', distance: '145 km', time: '3 hrs', price: 2000 },
  { id: 'cab_ranthambore', destination: 'Ranthambore', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80', distance: '160 km', time: '3.5 hrs', price: 2200 },
  { id: 'cab_ajmer', destination: 'Ajmer', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80', distance: '135 km', time: '2.5 hrs', price: 1800 },
];

const CabServicesSection = () => {
  const navigate = useNavigate();

  const handleBookCab = (route) => {
    navigate('/book', { state: { name: `Jaipur to ${route.destination}`, image: route.image, price: route.price, duration: route.time, type: 'cab' } });
  };

  return (
    <section className="cab-section">
      <div className="container">
        <div className="cab-section__header text-center">
          <div className="section-badge"><FaTaxi /> Premium Cab Services</div>
          <h2 className="heading-2">Outstation Cabs from Jaipur</h2>
          <p className="text-body-lg text-secondary">
            Comfortable, safe, and reliable taxi services across North India. Book Sedans, SUVs, or Tempo Travellers at the best rates.
          </p>
        </div>

        <div className="cab-features">
          <div className="cab-feature"><FaCheckCircle /> Professional Drivers</div>
          <div className="cab-feature"><FaCheckCircle /> Well-Maintained Fleet</div>
          <div className="cab-feature"><FaCheckCircle /> Transparent Pricing</div>
          <div className="cab-feature"><FaCheckCircle /> 24/7 Support</div>
        </div>

        <div className="cab-grid">
          {cabRoutes.map(route => (
            <div key={route.id} className="cab-card shadow-sm card-hover-lift">
              <div className="cab-card__image">
                <img src={route.image} alt={`Cab from Jaipur to ${route.destination}`} loading="lazy" />
                <div className="cab-card__rating"><FaStar /> 4.9</div>
              </div>
              
              <div className="cab-card__content">
                <h3 className="cab-card__title">Jaipur to {route.destination}</h3>
                
                <div className="cab-card__meta">
                  <span><FaRoad /> {route.distance}</span>
                  <span><FaClock /> {route.time}</span>
                </div>
                
                <div className="cab-card__footer">
                  <div className="cab-price">
                    <span className="label">Starting at</span>
                    <span className="value">₹{route.price}</span>
                  </div>
                  <button 
                    className="btn-primary btn-sm"
                    onClick={() => handleBookCab(route)}
                  >
                    Book Cab
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cab-section__cta text-center mt-12">
          <p className="mb-6 text-secondary">Looking for a different destination or a larger vehicle like a Tempo Traveller?</p>
          <button 
            className="btn-secondary btn-lg"
            onClick={() => navigate('/book', { state: { name: 'Custom Cab - Jaipur to Custom Destination', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80', price: null, duration: null, type: 'cab' } })}
          >
            Request Custom Cab Quote
          </button>
        </div>
    </section>
  );
};

export default CabServicesSection;
