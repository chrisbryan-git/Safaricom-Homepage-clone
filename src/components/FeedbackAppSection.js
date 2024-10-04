import React from 'react';
import './FeedbackAppSection.css';

const FeedbackAppSection = () => {
  return (
    <div className="feedback-app-section">
      {/* Feedback Section */}
      <div className="feedback-section">
        <p>Was this information helpful? If not tell us how we can improve</p>
        <div className="feedback-icons">
          <span role="img" aria-label="sad" className="emoji">☹️</span>
          <span role="img" aria-label="happy" className="emoji">😊</span>
        </div>
      </div>

      {/* App Store Section */}
      <div className="app-section">
        <h2>Manage all your services in one App</h2>
        <div className="app-buttons">
          <img src="/images/apple.png" alt="App Store" />
          <img src="/images/googleapp.png" alt="Google Play" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackAppSection;
