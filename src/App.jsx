import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import CabsPage from './pages/CabsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import MobileBottomNav from './components/MobileBottomNav';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className={`app-container ${showSplash ? 'app-hidden' : 'app-reveal'}`}>
        <ScrollToTop />
        <Header />
        <main className="main-content" style={{ paddingBottom: '70px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/cabs" element={<CabsPage />} />
            <Route path="/destination/:id" element={<DestinationDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    </>
  );
}

export default App;
