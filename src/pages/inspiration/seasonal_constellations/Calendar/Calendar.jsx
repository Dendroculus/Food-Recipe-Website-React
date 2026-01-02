import React from "react";
import MonthCard from "../MonthCard/MonthCard";
import "./Calendar.css";

export default class Calendar extends React.Component {
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