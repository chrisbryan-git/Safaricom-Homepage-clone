import React from 'react';
import { Search } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="safaricom-header">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="container">
          <div className="nav-links">
            <a href="/personal">PERSONAL</a>
            <a href="/business">BUSINESS</a>
            <a href="/m-pesa">M-PESA</a>
            <a href="/about-us">ABOUT US</a>
            <a href="/investor-relations">INVESTOR RELATIONS</a>
            <a href="/fraud-awareness">FRAUD AWARENESS</a>
            <a href="/media">MEDIA</a>
            <a href="/careers">CAREERS</a>
            <a href="/customer-service">CUSTOMER SERVICE</a>
          </div>
          <div className="nav-actions">
            <button className="btn btn-new-customer">New Customer</button>
            <button className="btn btn-help">Help</button>
            <div className="search-all-sites">
              <Search size={16} color="white" />
              <span>All Sites</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navigation Bar */}
      <div className="main-nav">
        <div className="container">
          <img src="/images/safaricom-logo-green.png" alt="Safaricom Logo" className="logo" />
          <div className="nav-links">
            <a href="/voice">Voice</a>
            <a href="/data">Data</a>
            <a href="/fixed-internet">Fixed Internet</a>
            <a href="/value-added-services">Value Added Services</a>
            <a href="/buy-a-device">Buy A Device</a>
            <a href="/all-products">All Products</a>
          </div>
          <button className="btn btn-my-account">My Account</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
