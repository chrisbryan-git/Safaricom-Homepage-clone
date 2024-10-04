import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Celebrating Kenya’s Everyday Champions. We celebrate every Kenyan who contributes to the success of our nation. 
          Together, we are unstoppable. Every Kenyan shines! 
          <span>#SisiWoteNiMabingwa</span>
        </h1>
        <button className="hero-button">Learn More</button>
      </div>
      
      <div className="popular-links">
        <h2>Popular Links</h2>
        <div className="links-container">
          <div className="link-section">
            <h3>Voice</h3>
            <ul>
              <li>Monthly Plans Voice</li>
              <li>Postpay</li>
              <li>Voice Tariffs</li>
              <li>Voice Security</li>
            </ul>
          </div>
          <div className="link-section">
            <h3>Internet</h3>
            <ul>
              <li>Home Fibre FAQs</li>
              <li>Monthly Plans Data</li>
              <li>Home Fibre</li>
              <li>Lipa Mdogo Mdogo</li>
            </ul>
          </div>
          <div className="link-section">
            <h3>M-PESA</h3>
            <ul>
              <li>M-PESA Tariffs</li>
              <li>Paypal M-PESA Service</li>
              <li>M-PESA Statement</li>
              <li>M-PESA Reversal</li>
            </ul>
          </div>
          <div className="link-section">
            <h3>Other Services</h3>
            <ul>
              <li>Fuliza</li>
              <li>M-PESA Global Pay</li>
              <li>Safaricom Esim</li>
              <li>Shine Kenya</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
