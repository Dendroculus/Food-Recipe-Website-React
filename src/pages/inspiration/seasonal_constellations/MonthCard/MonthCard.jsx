import React from "react";
import "./MonthCard.css";

/**
 * MonthCard component displays a single month and its produce.
 * @param {object} props
 * @param {object} props.month - Month data object with `month` and `produce` array
 * @extends React.Component
 */
export default class MonthCard extends React.Component {
  /**
   * Render a card for the provided month, listing produce items.
   * @returns {JSX.Element} Month card JSX.
   */
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