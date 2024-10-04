import React from 'react';
import './OurPurpose.css';

const OurPurpose = () => {
  return (
    <div className="our-purpose-container">
      <h2>Our Purpose</h2>
      <p>We seek to create opportunities for Kenyans to be a part of our growth story by empowering them with the right tools for economic growth.</p>

      <div className="purpose-cards">
        {/* Who We Are Card */}
        <div className="purpose-card">
          <img
            src="/images/whoweare.jpg"
            alt="Who we are"
            className="purpose-image"
          />
          <h3>Who we are</h3>
          <ul className="purpose-links">
            <li><a href="#">Our Story →</a></li>
            <li><a href="#">Leadership →</a></li>
            <li><a href="#">Our Journey →</a></li>
          </ul>
        </div>

        {/* Our Impact Card */}
        <div className="purpose-card">
          <img
            src="/images/impact1.jpg"
            alt="Our Impact"
            className="purpose-image"
          />
          <h3>Our Impact</h3>
          <ul className="purpose-links">
            <li><a href="#">Safaricom Foundation →</a></li>
            <li><a href="#">M-PESA Foundation →</a></li>
            <li><a href="#">Sustainability →</a></li>
          </ul>
        </div>

        {/* Our Brand Card */}
        <div className="purpose-card">
          <img
            src="/images/golftour.jpg"
            alt="Our Brand"
            className="purpose-image"
          />
          <h3>Our Brand</h3>
          <ul className="purpose-links">
            <li><a href="#">Brand toolkit →</a></li>
            <li><a href="#">Brand Assets →</a></li>
            <li><a href="#">Brand Campaigns →</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurPurpose;
