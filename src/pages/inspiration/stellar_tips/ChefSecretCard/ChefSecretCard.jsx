import React from "react";
import './ChefSecretCard.css'

export default class ChefSecretCard extends React.Component {
  renderStatItem(stat, index) {
    return (
      <div key={index} className="stat-item">
        <strong>{stat.label}</strong> {stat.value}
      </div>
    );
  }

  render() {
    const { secret } = this.props;

    return (
      <section className="chef-secret-card my-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <div className="secret-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                {secret.badgeIcon}
              </svg>
              {secret.badgeLabel}
            </div>
            <h3 className="secret-title">{secret.title}</h3>
            <p className="secret-description">{secret.description}</p>
            <div className="secret-stats">{secret.stats.map((stat, idx) => this.renderStatItem(stat, idx))}</div>
          </div>
          <div className="col-lg-4">
            <div className="secret-illustration">
              <div className="orbit-ring"></div>
              <div className="orbit-ring ring-2"></div>
              <div className="orbit-ring ring-3"></div>
              <div className="central-star">✨</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}