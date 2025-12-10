import React from 'react';
import '../Inspiration.css';
import StellarNav from '../InspirationNav';
import '../../home/Home.css';  
import StellarSections from './StellarSections';
import Footer from '../../home/Footer';
import Modals from '../../home/Modals';

class StellarTips extends React.Component {
  render() {
    return (
      <>
        <StellarNav />
        <StellarSections />
        <Footer />
        <Modals />
      </>
    );
  }
}

export default StellarTips;