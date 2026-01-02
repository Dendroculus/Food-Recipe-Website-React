import React from "react";
import './QuickTipsSection.css'

export default class QuickTipsSection extends React.Component {
  renderQuickTip(tip, index) {
    return (
      <div key={index} className="col-md-6 col-lg-3">
        <div className="quick-tip">
          <div className="quick-icon">{tip.icon}</div>
          <h4>{tip.title}</h4>
          <p>{tip.text}</p>
        </div>
      </div>
    );
  }

  render() {
    const { quickTips } = this.props;

    return (
      <section className="quick-tips-section mb-5">
        <h2 className="section-title text-center mb-4">⚡ Quick Orbital Tips</h2>
        <div className="row g-3">{quickTips.map((tip, index) => this.renderQuickTip(tip, index))}</div>
      </section>
    );
  }
}