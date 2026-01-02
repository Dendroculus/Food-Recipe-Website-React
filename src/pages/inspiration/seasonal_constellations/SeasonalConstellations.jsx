import React from "react";
import "../stellar_tips/StellarSections/StellarSections.css";
import './seasonal.css';
import "./SeasonalConstellations.css";
import Footer from "../../../components/footer/Footer";
import Modals from "../../../components/modals/Modals";
import SeasonalSections from "./SeasonalSections/SeasonalSections";
import "./SeasonalConstellations.css";

class SeasonalConstellations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <InspirationNav />
        <SeasonalSections />
        <Footer />
        <Modals />
      </>
    );
  }
}

export default SeasonalConstellations;
