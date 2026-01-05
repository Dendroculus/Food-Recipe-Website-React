import React from "react";
import './Spotlight.css';

/**
 * Spotlight component highlights the current season with a themed background and text.
 * @extends React.Component
 */
export default class Spotlight extends React.Component {
  /**
   * Map season name to a CSS gradient variable.
   * @param {string} name - Season name (e.g., "Autumn", "Spring").
   * @returns {string} CSS variable containing the gradient.
   */
  gradientForSeason(name) {
    switch (name) {
      case "Spring":
        return "var(--spring)";
      case "Summer":
        return "var(--summer)";
      case "Autumn":
        return "var(--autumn)"; // your original autumn gradient
      case "Winter":
        return "var(--winter)";
      default:
        return "var(--autumn)"; // safe fallback
    }
  }

  /**
   * Render the spotlight section for the provided season.
   * Special-cases Autumn to keep text exactly as authored.
   * @returns {JSX.Element|null} Spotlight JSX or null if no valid season provided.
   */
  render() {
    const { season = {} } = this.props;
    if (!season || !season.name) return null;

    const seasonName = season.name;
    const gradient = this.gradientForSeason(seasonName);

    // Emoji: use the season.emoji for both badge + big background
    const emoji = season.emoji || "✨";

    // IMPORTANT: Autumn text must remain exactly as you wrote it.
    const isAutumn = seasonName.toLowerCase() === "autumn";
    const autumnTitle = "Autumn's Harvest";
    const autumnDescription =
      "Embrace the cozy flavors of fall with warming spices, hearty vegetables, and comforting dishes that bring the essence of autumn to your table.";

    const title = isAutumn ? autumnTitle : `${seasonName}'s Harvest`;
    const description = isAutumn ? autumnDescription : season.description;

    return (
      <section
        className="current-season-spotlight dynamic-spotlight"
        // use linear-gradient via CSS variables
        style={{ background: gradient }}
      >
        {/* big faded background emoji instead of ::after */}
        <div className="spotlight-bg-emoji" aria-hidden="true">
          {emoji}
        </div>

        <div className="season-badge">
          <span className="season-icon" aria-hidden="true">
            {emoji}
          </span>
          <span className="season-text">{`${seasonName.toUpperCase()} EDITION`}</span>
        </div>

        <h2 className="spotlight-title">{title}</h2>

        <p className="spotlight-description">{description}</p>
      </section>
    );
  }
}