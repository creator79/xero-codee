// pages/page.tsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageSection from './components/ImageSection';
import FeatureSection from './components/FeatureSection';
import SelfServe from './components/XeroCode';
import Body from './components/Body';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import XeroCode from './components/SelfTeam';

const Page: React.FC = () => {
  return (
    <div className='bg-white flex flex-col font-custom'>
      {/* Use "font-custom" to apply your custom font-family */}
      <Navbar />
      <HeroSection/>
      <ImageSection/>
      <FeatureSection/>
      <SelfServe/>
      <XeroCode/>
      <Body/>
      <NewsLetter/>
      <Footer/>
      {/* Your page content goes here */}
    </div>
  );
};

export default Page;
