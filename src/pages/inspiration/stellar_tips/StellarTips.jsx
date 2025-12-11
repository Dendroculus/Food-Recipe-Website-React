import React from 'react';
import '../Inspiration.css';
import '../../home/Home.css';  
import StellarSections from './StellarSections';
import Footer from '../../home/Footer';
import Modals from '../../home/Modals';
import InspirationNav from '../InspirationNav'; 

class StellarTips extends React.Component {
  render() {
    return (
      <>
        <InspirationNav />
        <StellarSections />
        <Footer />
        <Modals />
      </>
    );
  }
}

export default StellarTips;