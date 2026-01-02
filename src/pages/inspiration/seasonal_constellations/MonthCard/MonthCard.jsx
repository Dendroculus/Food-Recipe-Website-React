import React from "react";
import "./MonthCard.css";

export default class MonthCard extends React.Component {
  render() {
    const { month = {} } = this.props;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="month-card card h-100">
          <div className="card-body">
            <div className="month-header">{month.month}</div>
            <div className="month-produce">
              {(month.produce || []).map((p, i) => <span key={i}>{p}</span>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}