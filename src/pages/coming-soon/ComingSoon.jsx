import React from "react";
import "./ComingSoon.css";

class ComingSoon extends React.Component {
  renderBubbles() {
    const bubbles = Array.from({ length: 11 }, (_, i) => (
      <div key={i} className={`bubble bubble-${i + 1}`} />
    ));
    return <div className="animated-background">{bubbles}</div>;
  }

  render() {
    return (
      <div className="coming-soon-page">
        {this.renderBubbles()}

        <div className="container">
          <div className="content" role="main">
            <h1 className="title">Coming Soon</h1>
            <p className="subtitle">We're cooking up something delicious!</p>

            <div className="icon-wrapper" aria-hidden="true">
              <div className="chef-hat" aria-hidden="true">
                <div className="hat-top" />
                <div className="hat-band" />
              </div>
            </div>

            <p className="description">
              Our recipe collection is being prepared with love and care.
              <br />
              Check back soon for amazing culinary adventures!
            </p>

            <a href="/" className="btn-home" title="Back to Home">
              <span className="btn-icon" aria-hidden="true">
                ←
              </span>
              <span className="btn-text">Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;