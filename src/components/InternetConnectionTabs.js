import React, { useState } from 'react';
import './InternetConnectionTabs.css';
import { motion, AnimatePresence } from 'framer-motion';

const tabData = [
  {
    id: 'phone',
    title: 'My Phone',
    content: [
      {
        image: "/images/data1.jpg",
        alt: "Person using phone",
        header: "Data and Voice",
        links: [
          "Explore Tariffs",
          "Roaming Services",
          "International Calling Rates"
        ]
      },
      {
        image: "/images/1-3.png",
        alt: "Person smiling with phone",
        header: "Promotions and Offers",
        links: [
          "Voice Deals",
          "Changamkia YouTube na 10/-",
          "Angaza Music Bundle"
        ]
      },
      {
        custom: true,
        content: (
          <div className="card2 card-calc">
          <div className="card-content">
            <h3>Find out how much talktime you can get with your budget</h3>
            <input type="number" placeholder="Enter Amount" />
            <p>Your Talktime: 0.0</p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
        )
      }
    ]
  },
  {
    id: 'home',
    title: 'My Home',
    content: [
      {
        image: "/api/placeholder/300/200",
        alt: "Family using devices",
        header: "Get Connected",
        links: [
          "Check if Your Area is Covered",
          "Explore Packages",
          "Frequently Asked Questions"
        ]
      },
      {
        image: "/api/placeholder/300/200",
        alt: "Person at computer",
        header: "Value Adds",
        links: [
          "Home CCTV",
          "Entertainment",
          "Secure Net"
        ]
      }
    ]
  },
  {
    id: 'business',
    title: 'My Business',
    content: [
      {
        image: "/api/placeholder/300/200",
        alt: "Business people",
        header: "Internet for Business",
        links: [
          "Connectivity for Business",
          "4G Internet for Business",
          "5G Internet for Business"
        ]
      },
      {
        image: "/api/placeholder/300/200",
        alt: "Person with tablet",
        header: "Business Voice, Data and SMS Solutions",
        links: [
          "Bulk SMS",
          "Corporate Value Pack",
          "Sponsored Data"
        ]
      },
      {
        image: "/api/placeholder/300/200",
        alt: "Store owner",
        header: "M-PESA for Business",
        links: [
          "M-PESA PayBill",
          "M-PESA Bulk Payments",
          "M-PESA Business Till"
        ]
      }
    ]
  }
];

const InternetConnectionTabs = () => {
  const [activeTab, setActiveTab] = useState('phone');

  return (
    <div className="container">
      <h2 className="heading">Internet Connection For</h2>
      <div className="tabs">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="content-grid"
        >
          {tabData.find((tab) => tab.id === activeTab)?.content.map((item, index) => (
            <div key={index} className="card2">
              {item.custom ? (
                item.content
              ) : (
                <>
                  <img src={item.image} alt={item.alt} className="card-image" />
                  <div className="card-content">
                    <h3 className="card-header">{item.header}</h3>
                    <ul className="card-links">
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="link-item">
                          <a href="#" className="link-text">{link}</a>
                          <span className="arrow">→</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InternetConnectionTabs;