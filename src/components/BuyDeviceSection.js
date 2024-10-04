import React from 'react';
import './BuyDeviceSection.css';

const BuyDeviceSection = () => {
  return (
    <div className="buy-device-container">
      {/* Header */}
      <section className="section">
        <div className="section-header">
          <h2>Buy a device</h2>
          <p>Find your dream phone and accessories at unbeatable prices</p>
          <button className="explore-btn">Explore</button>
        </div>
        
        {/* Product Cards */}
        <div className="product-cards-row">
          <div className="product-card">
            <img src="/images/iphone15.jpg" alt="iPhone 15" />
            <h3>iPhone 15</h3>
            <p>6.1" • 6GB RAM • 256GB ROM • Blue + Free 3,000 Airtime</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <div className="product-card">
            <img src="/images/galaxy-a35.jpg" alt="Samsung Galaxy A35 5G" />
            <h3>Samsung Galaxy A35 5G</h3>
            <p>6.6" • 256GB ROM • 8GB RAM • Dual SIM • Blue + Free (25 Watts Adapter + 2,000 Airtime)</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <div className="product-card">
            <img src="/images/vivo-v29e.jpg" alt="Vivo V29e 5G" />
            <h3>Vivo V29e 5G</h3>
            <p>6.67" • 256GB ROM • 8GB RAM • Dual SIM • Rose Gold + Free 5,000 Airtime</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyDeviceSection;
