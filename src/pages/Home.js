import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import InternetConnectionTabs from '../components/InternetConnectionTabs';
import MpesaSection from '../components/MpesaSection';
import BusinessSolutions from '../components/BusinessSolutions';
import OurPurpose from '../components/OurPurpose';
import JoinUsSection from '../components/JoinUsSection';
import BuyDeviceSection from '../components/BuyDeviceSection';
import FeedbackAppSection from '../components/FeedbackAppSection';

function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <NewsSection />
      <InternetConnectionTabs />
      <MpesaSection />
      <BusinessSolutions />
      <OurPurpose />
      <JoinUsSection />
      <BuyDeviceSection />
      <FeedbackAppSection />
      <Footer />
    </main>
  );
}

export default Home;