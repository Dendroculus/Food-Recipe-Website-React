import React from "react";
import TipCard from "./TipCard";

export default class TipsCategory extends React.Component {
  render() {
    const { title, icon, description, tips } = this.props;

    return (
      <section className="tips-category mb-5">
        <div className="category-header">
          <h2 className="category-title">
            <span className="category-icon">{icon}</span>
            {title}
          </h2>
          <p className="category-desc">{description}</p>
        </div>

        <div className="row g-4">
          {tips.map((tip) => (
            <div key={tip.number} className="col-12 col-md-6 col-lg-4">
              <TipCard tip={tip} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}