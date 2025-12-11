import React from "react";

export default class TipCard extends React.Component {
  render() {
    const { tip } = this.props;

    return (
      <article className="tip-card h-100">
        <div className="tip-number">{tip.number}</div>
        <div className="tip-icon-wrapper">
          <svg className="tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {tip.icon}
          </svg>
        </div>
        <h3 className="tip-title">{tip.title}</h3>
        <p className="tip-description">{tip.description}</p>
        <div className="tip-meta">
          <span className={`badge-custom ${tip.badgeClass}`}>{tip.badgeLabel}</span>
          <span className="difficulty">{tip.difficulty}</span>
        </div>
      </article>
    );
  }
}