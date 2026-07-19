import React, { useEffect } from 'react';
import './PolicyPage.css';
import { contactInfo } from '../data/travelData';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // SEO Meta Tags
    document.title = "Terms & Conditions | Rajasthan Gaurav Travels";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the Terms and Conditions of Rajasthan Gaurav Travels. Understand the booking rules, user obligations, and legal policies before planning your trip.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Read the Terms and Conditions of Rajasthan Gaurav Travels. Understand the booking rules, user obligations, and legal policies before planning your trip.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">Terms & Conditions</h1>
          <p className="policy-updated">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
        
        <div className="policy-content">
          <article className="policy-article">
            <p>
              Welcome to <strong>Rajasthan Gaurav Travels</strong>. By accessing our website and utilizing our travel booking services, you agree to be bound by the following Terms and Conditions. Please read them carefully before making any booking.
            </p>

            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Rajasthan Gaurav Travels, concerning your access to and use of our website as well as any other media form, media channel, or mobile website related, linked, or otherwise connected thereto.
            </p>

            <h2>2. Booking and Reservations</h2>
            <ul>
              <li><strong>Confirmation:</strong> A booking is only confirmed once an advance payment or full payment is received and a confirmation receipt is issued by our team.</li>
              <li><strong>Pricing:</strong> All prices are subject to change without prior notice until a booking is confirmed. Prices may vary based on peak seasons, availability, and taxes.</li>
              <li><strong>Itinerary Changes:</strong> We reserve the right to alter or modify itineraries in the event of unforeseen circumstances (such as weather conditions, road closures, or political strikes) to ensure the safety of our guests.</li>
            </ul>

            <h2>3. Payments and Billing</h2>
            <p>
              To secure your tour package or cab service, an advance payment is required. The balance payment must be settled as per the schedule communicated during the booking process. We accept payments via UPI, bank transfers, and standard digital payment methods.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>By using our services, you represent and warrant that:</p>
            <ul>
              <li>All registration and booking information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You will not use the website or our services for any illegal or unauthorized purpose.</li>
            </ul>

            <h2>5. Liability Disclaimer</h2>
            <p>
              Rajasthan Gaurav Travels acts only as an agent for the passengers with respect to transportation, hotels, and other services. We shall not be held liable for any injury, damage, loss, delay, or irregularity that may be caused by defect in any vehicle, or through the acts or defaults of any company or person engaged in conveying the passenger or carrying out the arrangements of the tour.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website are owned or licensed to us, and are protected by copyright and trademark laws.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              In order to resolve a complaint regarding our services or to receive further information, please contact us at:
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

export default TermsPage;
