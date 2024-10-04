import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>Voice</li>
            <li>Data</li>
            <li>Home Fibre</li>
            <li>M-PESA API</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Business</h4>
          <ul>
            <li>M-PESA for business</li>
            <li>Internet for business</li>
            <li>Cloud solutions</li>
            <li>Mobile communication solutions</li>
            <li>Cybersecurity solutions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>Who We Are</li>
            <li>Community Impact</li>
            <li>Sustainability</li>
            <li>Join Us</li>
            <li>Brand Toolkit</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Investor Relations</h4>
          <ul>
            <li>Analysts Coverage</li>
            <li>Investor Calendar</li>
            <li>Share Price Performance</li>
            <li>Annual Reports</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>FAQs</h4>
          <ul>
            <li>Fuliza</li>
            <li>M-PESA Global</li>
            <li>Pochi la biashara</li>
            <li>Sim registration</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>More</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Data Privacy Statement</li>
            <li>Frequently Asked Questions</li>
            <li>Press Releases</li>
          </ul>
        </div>
      </div>

      <div className="social-icons">
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
