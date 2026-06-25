import React, { useEffect } from 'react';
import RajDarshanSection from '../components/RajDarshanSection';
import './PageBanner.css';

const RajDarshanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="standalone-page">
      <div className="page-banner" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://rajasthangauravtravels.com/img/Kumbhalgarh-fort-2.jpg)' }}>
        <h1 className="page-banner-title">Raj Darshan</h1>
      </div>
      <RajDarshanSection />
    </div>
  );
};

export default RajDarshanPage;
