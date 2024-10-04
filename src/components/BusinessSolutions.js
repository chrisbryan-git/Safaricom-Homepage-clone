import React from 'react';
import './BusinessSolutions.css';

const BusinessSolutions = () => {
  return (
    <div className="business-solutions-container">
      <h2>Business Solutions</h2>
      <p>We seek to provide cutting edge solutions for your business needs</p>

      <div className="business-cards">
        {/* Cloud Solutions Card */}
        <div className="business-card">
          <img
            src="/images/cloud.jpg"
            alt="Cloud Solutions"
            className="business-image"
          />
          <h3>Cloud Solutions</h3>
          <p>Put your business ahead of the competition with technology and the latest online services</p>
          <p>Simple, Transparent and Honest.</p>
          <button className="business-button">Cloud Services</button>
        </div>

        {/* Business Till Card */}
        <div className="business-card">
          <img
            src="/images/businesspayments.jpg"
            alt="Business Till"
            className="business-image"
          />
          <h3>Business Till</h3>
          <p>Collect payments easily with no time limitations through M-PESA</p>
          <p>Simple, Transparent and Honest.</p>
          <button className="business-button">M-PESA business till</button>
        </div>

        {/* Shiriki Plan for Business Card */}
        <div className="business-card">
          <img
            src="/images/Mobile_Payments1.png"
            alt="Shiriki Plan"
            className="business-image"
          />
          <h3>Shiriki plan for business</h3>
          <p>Get affordable internet and calling rates for your small or medium-sized business</p>
          <p>Simple, Transparent and Honest.</p>
          <button className="business-button">Mobile Solutions</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
