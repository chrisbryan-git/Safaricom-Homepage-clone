import React from 'react';
import './MpesaSection.css';

const MpesaSection = () => {
  return (
    <section>
      <h1>M-PESA</h1>
      <p>Send, receive and access money wherever you are.</p>
    <div className="mpesa-section">
      
      {/* Pochi La Biashara Card */}
      <div className="mpesa-card">
        <img src="/images/pochi.jpg" alt="Pochi La Biashara" className="mpesa-image" />
        <h3>Pochi La Biashara</h3>
        <h5>Receive and separate business funds from personal funds</h5>
        <p>Dial <strong>*334#</strong> to get started</p>
        <button className="learn-more-button">Learn More</button>
      </div>

      {/* Cost Calculator */}
      <div className="mpesa-cost">
        <h3>Find out just how much transacting with M-PESA will cost you</h3>
        <select className="mpesa-dropdown">
          <option value="withdraw">Withdraw from Agent</option>
          <option value="send">Send to another M-PESA user</option>
        </select>
        <select className="mpesa-dropdown">
          <option value="range">Select Amount Range</option>
          <option value="0-100">0 - 100 Ksh</option>
          <option value="100-500">100 - 500 Ksh</option>
        </select>
        <div className="cost-display">
          <p>Ksh: 0</p>
        </div>
      </div>

      {/* Lipa Na M-PESA */}
      <div className="mpesa-card">
        <img src="/images/lipa-na-mpesa.jpg" alt="Lipa Na M-PESA" className="mpesa-image" />
        <h3>Lipa Na M-PESA</h3>
          <h5>You can buy goods and pay through your phone</h5>
          <p>Get started now</p>
        <button className="apply-button">Apply For Till Number</button>
      </div>
      </div>
    </section>
  );
};

export default MpesaSection;
