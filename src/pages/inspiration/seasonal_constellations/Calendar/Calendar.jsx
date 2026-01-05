import React from "react";
import MonthCard from "../MonthCard/MonthCard";
import "./Calendar.css";

/**
 * Calendar component renders a seasonal harvest calendar grid.
 * @param {object} props - Component props.
 * @param {Array<object>} props.months - Array of month objects to render (each passed to MonthCard).
 * @extends React.Component
 */
export default class Calendar extends React.Component {
  /**
   * Render the calendar section with a MonthCard for each month.
   * @returns {JSX.Element} Calendar section JSX.
   */
  render() {
    const { months = [] } = this.props;
    return (
      <section className="seasonal-calendar">
        <h2 className="section-title">Seasonal Harvest Calendar</h2>
        <p className="section-subtitle">Your guide to what's fresh each month</p>
        <div className="calendar-grid row g-3">
          {months.map((m, idx) => <MonthCard key={idx} month={m} />)}
        </div>
      </section>
    );
  }
}