import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + 4;
      });
    }, 80);

    const exitTimer = setTimeout(() => setExiting(true), 2200);
    const removeTimer = setTimeout(() => onFinish(), 2800);

    return () => { clearInterval(interval); clearTimeout(exitTimer); clearTimeout(removeTimer); };
  }, [onFinish]);

  return (
    <div className={`splash ${exiting ? 'splash--exit' : ''}`}>
      <div className="splash__bg"></div>
      <div className="splash__particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="splash__particle" style={{ '--i': i }}></div>
        ))}
      </div>
      <div className="splash__content">
        <div className="splash__icon">✈️</div>
        <div className="splash__brand" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>RAJASTHAN GAURAV</div>
        <div className="splash__brand splash__brand--accent" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>TRAVELS</div>
        <div className="splash__line"></div>
        <div className="splash__tagline">Discover Your Next Adventure</div>
      </div>
      <div className="splash__loader">
        <div className="splash__loader-track">
          <div className="splash__loader-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="splash__loader-text">{progress}%</span>
      </div>
    </div>
  );
};

export default SplashScreen;
