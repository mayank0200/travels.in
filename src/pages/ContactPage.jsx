import React, { useState, useEffect } from 'react';
import { contactInfo } from '../data/travelData';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import FAQSection from '../components/FAQSection';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/918854913030?text=Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`, '_blank');
  };

  return (
    <div style={{background:'var(--bg-secondary)'}}>
      {/* Hero */}
      <section style={{position:'relative',height:'40vh',minHeight:'300px',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80" alt="Contact" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} />
        <div style={{position:'absolute',inset:0,background:'rgba(15,23,42,0.65)'}}></div>
        <div className="container" style={{position:'relative',zIndex:2,textAlign:'center'}}>
          <h1 style={{fontSize:'clamp(2.5rem,5vw,3.5rem)',fontWeight:900,color:'white',marginBottom:'10px'}}>Contact Us</h1>
          <p style={{fontSize:'1.1rem',color:'rgba(255,255,255,0.75)'}}>We'd love to hear from you</p>
        </div>
      </section>

      <section style={{padding:'80px 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:'48px',alignItems:'start'}}>
            {/* Contact Cards */}
            <div>
              <h2 className="heading-3" style={{marginBottom:'24px'}}>Get in Touch</h2>
              <p className="text-body" style={{marginBottom:'32px'}}>Have a question or need help planning your trip? Reach out to us and we'll get back to you within 30 minutes.</p>
              
              <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
                {[
                  { icon: <FaPhoneAlt />, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
                  { icon: <FaEnvelope />, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                  { icon: <FaWhatsapp />, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/918854913030' },
                  { icon: <FaMapMarkerAlt />, label: 'Address', value: contactInfo.address, href: '#' }
                ].map((item, i) => (
                  <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    style={{
                      display:'flex',alignItems:'center',gap:'16px',
                      padding:'20px',borderRadius:'var(--radius-xl)',
                      background:'white',boxShadow:'var(--shadow-sm)',
                      transition:'all 0.3s ease',textDecoration:'none'
                    }}
                  >
                    <div style={{width:'48px',height:'48px',borderRadius:'50%',background:'var(--primary-50)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--primary)',fontSize:'1.1rem'}}>
                      {item.icon}
                    </div>
                    <div>
                      <span style={{fontSize:'0.8rem',color:'var(--text-muted)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em',display:'block'}}>{item.label}</span>
                      <span style={{fontSize:'0.95rem',color:'var(--text-primary)',fontWeight:600}}>{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{background:'white',borderRadius:'var(--radius-2xl)',padding:'40px',boxShadow:'var(--shadow-lg)'}}>
              <h3 className="heading-3" style={{marginBottom:'24px'}}>Send us a Message</h3>
              <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'16px'}}>
                <input className="input-field" placeholder="Your Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                <input className="input-field" type="email" placeholder="Email Address" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                <input className="input-field" type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                <textarea className="input-field" placeholder="Tell us about your dream trip..." rows="5" style={{resize:'vertical'}} required value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
                <button type="submit" className="btn-primary" style={{width:'100%'}}>Send Message →</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

export default ContactPage;
