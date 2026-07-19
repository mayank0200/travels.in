import React, { useEffect } from 'react';
import './PolicyPage.css';
import { contactInfo } from '../data/travelData';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // SEO Meta Tags
    document.title = "Privacy Policy | Rajasthan Gaurav Travels";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the Privacy Policy of Rajasthan Gaurav Travels. Learn how we collect, use, and protect your personal information and data during your travel bookings.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Read the Privacy Policy of Rajasthan Gaurav Travels. Learn how we collect, use, and protect your personal information and data during your travel bookings.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-updated">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
        
        <div className="policy-content">
          <article className="policy-article">
            <p>
              At <strong>Rajasthan Gaurav Travels</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or book a tour package, outstation cab, or any other travel service with us.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about our travel packages, cabs, or services. The personal information that we collect depends on the context of your interactions with us and the website.</p>
            <ul>
              <li><strong>Personal Details:</strong> Name, phone number, email address, and billing address.</li>
              <li><strong>Travel Details:</strong> Travel dates, pick-up/drop-off locations, number of passengers, and special requests.</li>
              <li><strong>Communication Data:</strong> Records of communications via WhatsApp, Email, or Phone for booking inquiries.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the personal information collected via our website for a variety of business purposes described below:</p>
            <ul>
              <li>To facilitate and process your travel and cab bookings.</li>
              <li>To send you administrative information, such as booking confirmations, itinerary updates, and policy changes.</li>
              <li>To communicate with you via WhatsApp or phone regarding your customized tour quotes.</li>
              <li>To respond to your inquiries and offer customer support.</li>
              <li>To request feedback and contact you about your experience with Rajasthan Gaurav Travels.</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal identification information to others. We may share your information only in the following situations:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share your booking details (like pick-up location and contact number) with our verified drivers or partner hotels to fulfill your travel request.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, or court order.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
            </p>

            <h2>5. Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites or services (e.g., payment gateways). We are not responsible for the privacy practices or the content of those third-party sites. We encourage you to review the privacy policies of those third-party websites.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Rajasthan Gaurav Travels</strong><br />
              Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a><br />
              Phone: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a><br />
              Address: {contactInfo.address}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
