import React from 'react';
import '../../index.css';
import './Home.css';
import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedSection';
import Navbar from '../../components/navigations/Navbar';
import Footer from '../../components/footer/Footer';
import Modals from '../../components/modals/Modals';

class Home extends React.Component {
  render() {
    return (
      <div className='home-page'>
        <Navbar />
        <HeroSection />
        <FeaturedSection />
        <Footer />
        <Modals />
      </div>
    );
  }
}

export default Home;