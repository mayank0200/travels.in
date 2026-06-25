import React from 'react';
import './RajDarshanSection.css';
import { rajDarshan } from '../data/travelData';

const RajDarshanSection = () => {
  return (
    <section className="rajdarshan-section" id="raj-darshan">
      <div className="container">
        <div className="rajdarshan-header">
          <span className="section-tag">{rajDarshan.title}</span>
          <h2 className="rajdarshan-title">{rajDarshan.subtitle}</h2>
          <p className="rajdarshan-intro">{rajDarshan.intro}</p>
        </div>

        <div className="activities-list">
          {rajDarshan.activities.map((activity, idx) => (
            <div key={idx} className="activity-card">
              <div className="activity-img-wrap">
                <img src={activity.image} alt={activity.title} className="activity-img" />
              </div>
              <div className="activity-content">
                <h3 className="activity-title">{activity.title}</h3>
                <div className="places-grid">
                  {activity.places.map((place, pIdx) => (
                    <div key={pIdx} className="place-item">
                      <h4 className="place-name">{place.name}</h4>
                      <p className="place-desc">{place.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RajDarshanSection;
