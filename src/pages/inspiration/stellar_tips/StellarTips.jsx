import React from 'react';
import "../stellar_tips/StellarTips.css";
import StellarSections from './StellarSections/StellarSections';
import Footer from "../../../components/footer/Footer";
import Modals from "../../../components/modals/Modals";
import InspirationNav from '../../../components/navigations/InspirationNav'; 

class StellarTips extends React.Component {
  render() {
    return (
      <div className="stellar-tips-page">
        <InspirationNav />
        <StellarSections />
        <Footer />
        <Modals />
      </div>
    );
  }
}

export default StellarTips;

