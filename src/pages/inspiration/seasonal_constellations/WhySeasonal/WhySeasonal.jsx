import React from "react";
import "./WhySeasonal.css";

/**
 * WhySeasonal component presents benefits of eating seasonally.
 * @extends React.Component
 */
export default class WhySeasonal extends React.Component {
  /**
   * Render a single benefit card.
   * @param {object} b - Benefit object containing icon, title, and text.
   * @param {number} idx - Index key for the element.
   * @returns {JSX.Element} Benefit card JSX.
   */
  renderBenefit(b, idx) {
    return (
      <div key={idx} className="col-lg-3 col-md-6">
        <div className="benefit-card card h-100">
          <div className="card-body text-center">
            <div className="benefit-icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Render the overall section listing benefits.
   * @returns {JSX.Element} Section markup for Why Eat Seasonally.
   */
  render() {
    const { benefits = [] } = this.props;
    return (
      <section className="why-seasonal">
        <h2 className="section-title">Why Eat Seasonally?</h2>
        <div className="benefits-grid row g-4">
          {benefits.map((b, idx) => this.renderBenefit(b, idx))}
        </div>
      </section>
    );
  }
}