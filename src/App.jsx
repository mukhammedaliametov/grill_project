import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Composition from './components/Composition';
import OurWorks from './components/OurWorks';
import VideoReview from './components/VideoReview';
import Feedback from './components/Feedback';
import Partners from './components/Partners';
import Stores from './components/Stores';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Advantages />
      <Composition />
      <OurWorks />
      <VideoReview />
      <Feedback />
      <Partners />
      <Stores />
      <Footer />
    </div>
  );
};

export default App;