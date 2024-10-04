import React from 'react';
import './NewsSection.css';


const NewSection = () => {
  return (
    <section className="new-section">
      <h2 className="section-title">What's new</h2>
      <p className="section-subtitle">Explore our latest initiatives, and products & services that have been innovated to transform the lives of Kenyans and beyond.</p>

      <div className="section-content">
        {/* First Card */}
        <div className="card1 card-green">
           <img src= " /images/INTERNET-FOR-BUSINES.jpg"alt="Internet for Business" className="Internet-image" />
          <div className="card-content">
            <h3>Business Owner? Make an Ownership Declaration</h3>
            <p>If your organization uses M-PESA Paybill, Short-Term Paybill, Bulk Payment, Buy Goods, or Business Till services, it's time to submit an ownership declaration.</p>
            <button className="btn">Find out More</button>
          </div>
        </div>

        {/* Second Card */}
        <div className="card1 card-white">
          <img src="/images/e-sim-card-new.png" alt="E-sin" className="e-sim-image" />
          <div className="card-content">
            <h3>One Voice Tariff</h3>
            <p>Get 50% airtime bonus with every top-up</p>
            <p>Dial *544# to get started</p>
            <button className="btn">See Tariffs</button>
          </div>
        </div>

        {/* Third Card */}
        <div className="card1 card-calc">
          <div className="card-content">
            <h3>Find out how much talktime you can get with your budget</h3>
            <input type="number" placeholder="Enter Amount" />
            <p>Your Talktime: 0.0</p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
