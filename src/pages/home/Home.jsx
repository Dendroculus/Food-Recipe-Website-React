import React from 'react';
import '../../index.css';
import './Home.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedSection';
import Footer from './Footer';
import Modals from './Modals';

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <HeroSection />
        <FeaturedSection />
        <Footer />
        <Modals />
      </>
    );
  }
}

export default Home;