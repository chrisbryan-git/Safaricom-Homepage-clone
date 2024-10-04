import React from 'react';
import './JoinUsSection.css';

const JoinUsSection = () => {
  return (
    <div className="join-us-container">
      {/* Join Us Section */}
      <section className="section">
        <h2>Join us</h2>
        <p>When we come together, we create amazing opportunities</p>
        <div className="cards-row">
          <div className="card">
            <img src="/images/customer.jpg" alt="New Customer" />
            <h3>New customer</h3>
            <p>Are you looking to join the fastest, most reliable and strongest network? Get started on your journey with us in quick and easily actionable steps.</p>
            <button>Register Here</button>
          </div>
          <div className="card">
            <img src="/images/suppliers.jpg" alt="Suppliers" />
            <h3>Suppliers</h3>
            <p>We are looking to partner with competent and efficient individuals and businesses. All our suppliers are qualified through a transparent pre-qualification process prior to engagement.</p>
            <button>View Resources</button>
          </div>
          <div className="card">
            <img src="/images/careers.jpg" alt="Careers" />
            <h3>Careers</h3>
            <p>We offer a wide range of opportunities within our diversified network. Visit our online portal to search and apply for all the latest jobs in our company.</p>
            <button>Explore Opportunities</button>
          </div>
        </div>
      </section>

      {/* Investor Relations Section */}
      <section className="section">
        <h2>Investor relations</h2>
        <p>Get all the information you need about our year on year business performance</p>
        <div className="cards-row">
          <div className="card">
            <img src="/images/reports1.jpg" alt="Reports" />
            <h3>Reports</h3>
            <p>Explore our year on year brand performance based on our customer-obsession mission, as presented in our annual financial reports.</p>
            <button>See Results</button>
          </div>
          <div className="card">
            <img src="/images/stocks1.jpg" alt="Stocks" />
            <h3>Stocks</h3>
            <p>Have a look at the latest share price performance of our business, dividend payments and extensive analyst coverage.</p>
            <button>View Performance</button>
          </div>
          <div className="card">
            <img src="/images/agm1.jpg" alt="Annual General Meetings" />
            <h3>Annual General Meetings</h3>
            <p>Keep up to date with our general notices, resolutions, and minutes as well as our annual general meetings' calendar of events.</p>
            <button>Check Updates</button>
          </div>
        </div>
      </section>

      {/* Fraud Awareness Section */}
      <section className="section">
        <h2>Fraud Awareness</h2>
        <p>Beware of fraudsters and remain vigilant by understanding the types of fraud and the tips on how to protect yourself.</p>
        <div className="cards-row">
          <div className="card">
            <img src="/images/mpesafraud1.jpg" alt="M-PESA Fraud" />
            <h3>M-PESA Fraud</h3>
            <p>Fraudsters target your M-PESA account balance through ATM, messages, USSD, etc.</p>
            <button>Learn More</button>
          </div>
          <div className="card">
            <img src="/images/Impersonating_Safaricom_staff.jpg" alt="Impersonation" />
            <h3>Impersonation</h3>
            <p>People pretend to be who they are not with the intent of defrauding unsuspecting victims.</p>
            <button>Find Out How</button>
          </div>
          <div className="card">
            <img src="/images/fakesocials.jpg" alt="Fake Social Media Accounts" />
            <h3>Fake social media accounts</h3>
            <p>Beware of fake social media handles that take on similar identity to the official channels.</p>
            <button>See How</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsSection;
