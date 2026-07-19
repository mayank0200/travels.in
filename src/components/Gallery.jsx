import React, { useState } from 'react';
import './Gallery.css';
import { galleryImages } from '../data/travelData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="gallery">
      <div className="container">
        <div ref={headerRef} className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
          <span className="section-label">📸 Gallery</span>
          <h2 className="section-title">Captured Moments</h2>
          <p className="section-subtitle">A visual journey through India's most breathtaking landscapes</p>
        </div>

        <div className="gallery__masonry">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className={`gallery__item ${img.tall ? 'gallery__item--tall' : ''}`}
              onClick={() => setLightbox(img)}
            >
              <img src={img.src} alt={img.location} className="gallery__img" loading="lazy" />
              <div className="gallery__item-overlay">
                <FaMapMarkerAlt />
                <span>{img.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
          <button className="gallery__lightbox-close"><FaTimes /></button>
          <img src={lightbox.src} alt={lightbox.location} className="gallery__lightbox-img" />
          <p className="gallery__lightbox-caption"><FaMapMarkerAlt /> {lightbox.location}</p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
