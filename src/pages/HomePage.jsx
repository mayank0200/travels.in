import React from 'react';
import HeroSection from '../components/HeroSection';
import DestinationsGrid from '../components/DestinationsGrid';
import TrendingPackages from '../components/Offers';
import WhyChooseUs from '../components/WhyChooseUs';
import Experiences from '../components/Experiences';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DestinationsGrid />
      <TrendingPackages />
      <WhyChooseUs />
      <Experiences />
      <Testimonials />
      <Gallery />
      <BlogSection />
      <FAQSection />
      <CTABanner />
    </>
  );
};

export default HomePage;
