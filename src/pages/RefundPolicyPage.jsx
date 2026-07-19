import React, { useEffect } from 'react';
import './PolicyPage.css';
import { contactInfo } from '../data/travelData';

const RefundPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // SEO Meta Tags
    document.title = "Cancellation & Refund Policy | Rajasthan Gaurav Travels";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Review the Cancellation and Refund Policy of Rajasthan Gaurav Travels. Learn about our terms for tour package cancellations, cab booking refunds, and processing times.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Review the Cancellation and Refund Policy of Rajasthan Gaurav Travels. Learn about our terms for tour package cancellations, cab booking refunds, and processing times.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">Cancellation & Refund Policy</h1>
          <p className="policy-updated">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
        
        <div className="policy-content">
          <article className="policy-article">
            <p>
              At <strong>Rajasthan Gaurav Travels</strong>, we strive to provide the best travel experiences. We understand that plans can change unexpectedly. This policy outlines the terms under which cancellations and refunds are processed for our tour packages and cab bookings.
            </p>

            <h2>1. Cancellation by the Customer</h2>
            <p>If you wish to cancel your booked tour or cab service, you must notify us in writing via email or WhatsApp as soon as possible. The cancellation charges will be applicable based on the time of cancellation prior to the scheduled departure:</p>
            <ul>
              <li><strong>More than 30 days prior to departure:</strong> 15% of the total booking amount will be retained as cancellation fees.</li>
              <li><strong>15 to 30 days prior to departure:</strong> 25% of the total booking amount will be retained.</li>
              <li><strong>7 to 14 days prior to departure:</strong> 50% of the total booking amount will be retained.</li>
              <li><strong>Less than 7 days prior to departure (or No-Show):</strong> No refund will be provided (100% cancellation charges apply).</li>
            </ul>

            <h2>2. Specific Cab Booking Cancellations</h2>
            <p>For standalone outstation cab bookings, the following standard applies unless specified otherwise during booking:</p>
            <ul>
              <li>Cancellations made 24 hours prior to the pick-up time: Full refund of the advance amount (minus 5% gateway/processing fees).</li>
              <li>Cancellations made within 24 hours of the pick-up time: No refund on the advance booking amount.</li>
            </ul>

            <h2>3. Cancellation by Rajasthan Gaurav Travels</h2>
            <p>
              In rare instances, we may need to cancel a tour due to unavoidable circumstances such as natural disasters, extreme weather, political unrest, or minimum participant requirements not being met. In such cases:
            </p>
            <ul>
              <li>We will offer you an alternative travel date or a comparable tour package.</li>
              <li>If the alternative is not acceptable to you, we will provide a <strong>100% full refund</strong> of the amount paid to us.</li>
              <li>We are not responsible for any incidental expenses you may have incurred (e.g., non-refundable flight tickets, visa fees, etc.).</li>
            </ul>

            <h2>4. Refund Processing Time</h2>
            <p>
              Once a cancellation is approved and confirmed by our team, the refund process will be initiated.
            </p>
            <ul>
              <li>Refunds will be processed back to the original method of payment (e.g., Bank Account, UPI).</li>
              <li>Please allow <strong>7 to 14 business days</strong> for the refunded amount to reflect in your account, depending on your bank's processing time.</li>
            </ul>

            <h2>5. Non-Refundable Services</h2>
            <p>
              Certain bookings or components of a tour may be strictly non-refundable. This includes, but is not limited to:
            </p>
            <ul>
              <li>Confirmed flight or train tickets booked on your behalf.</li>
              <li>Specific premium hotel reservations during peak seasons (like Diwali, New Year, or Pushkar Fair).</li>
              <li>Special event tickets or safari permits (e.g., Ranthambore Jungle Safari tickets).</li>
            </ul>

            <h2>6. How to Request a Cancellation</h2>
            <p>
              To initiate a cancellation and request a refund, please contact our support team immediately with your booking reference details:
            </p>
            <p>
              <strong>Rajasthan Gaurav Travels Support</strong><br />
              Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a><br />
              WhatsApp/Phone: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a><br />
              Address: {contactInfo.address}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
