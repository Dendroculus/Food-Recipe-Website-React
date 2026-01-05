import React from "react";
import SeasonCard from "../SeasonCard/SeasonCard";
import './SeasonsGrid.css';

/**
 * SeasonsGrid component renders a list of SeasonCard components.
 * @param {object} props
 * @param {Array<object>} props.seasons - Array of season objects to display
 * @extends React.Component
 */
export default class SeasonsGrid extends React.Component {
  /**
   * Render the grid of seasons.
   * @returns {JSX.Element} Sections grid markup.
   */
  render() {
    const { seasons = [] } = this.props;
    return (
      <section className="seasons-grid">
        {seasons.map((season, idx) => (
          <SeasonCard key={idx} season={season} />
        ))}
      </section>
    );
  }
}