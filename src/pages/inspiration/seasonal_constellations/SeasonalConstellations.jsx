import React from "react";
import InspirationNav from "../../../components/navigations/InspirationNav";
import Footer from "../../../components/footer/Footer";
import Modals from "../../../components/modals/Modals";
import SeasonalSections from "./SeasonalSections/SeasonalSections";
import "./SeasonalConstellations.css";

/**
 * SeasonalConstellations page composing navigation, seasonal sections, footer and modals.
 * @extends React.Component
 */
class SeasonalConstellations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Render the SeasonalConstellations page.
   * @returns {JSX.Element} Page markup including nav, seasonal content, footer and modals.
   */
  render() {
    return (
      <div className="seasonal-constellations-page">
        <InspirationNav />
        <SeasonalSections />
        <Footer />
        <Modals />
      </div>
    );
  }
}

export default SeasonalConstellations;