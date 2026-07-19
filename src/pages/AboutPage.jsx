import React, { useState, useEffect } from 'react';
import { aboutUs, contactInfo } from '../data/travelData';
import WhyChooseUs from '../components/WhyChooseUs';
import CTABanner from '../components/CTABanner';
import BookingModal from '../components/BookingModal';

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{background: 'var(--bg-secondary)'}}>
      {/* Hero */}
      <section style={{position:'relative',height:'45vh',minHeight:'340px',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80" alt="About" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} />
        <div style={{position:'absolute',inset:0,background:'rgba(15,23,42,0.65)'}}></div>
        <div className="container" style={{position:'relative',zIndex:2,textAlign:'center'}}>
          <h1 style={{fontSize:'clamp(2.5rem,5vw,3.5rem)',fontWeight:900,color:'white',marginBottom:'10px',letterSpacing:'-0.02em'}}>About Us</h1>
          <p style={{fontSize:'1.1rem',color:'rgba(255,255,255,0.75)',maxWidth:'500px',margin:'0 auto'}}>Crafting unforgettable travel experiences since 2015</p>
        </div>
      </section>

      {/* About Content */}
      <section style={{padding:'80px 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'center'}}>
            <div>
              <span className="section-label">✈️ Our Story</span>
              <h2 className="heading-2" style={{marginTop:'12px',marginBottom:'20px'}}>{aboutUs.title}</h2>
              <p className="text-body-lg" style={{marginBottom:'24px'}}>{aboutUs.description}</p>
              <p className="text-body" style={{marginBottom:'32px'}}>{aboutUs.mission.text}</p>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                Enquire Now <FaWhatsapp style={{marginLeft: '8px'}} />
              </button>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
              {aboutUs.images.map((img, i) => (
                <div key={i} style={{borderRadius:'var(--radius-xl)',overflow:'hidden',height: i % 2 === 0 ? '280px' : '240px'}}>
                  <img src={img} alt="About" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTABanner />
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        destinationName="General Enquiry"
        type="general"
      />
    </div>
  );
};

export default AboutPage;
