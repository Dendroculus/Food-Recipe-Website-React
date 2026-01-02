import React from 'react';
import TodayPickCard from '../TodayPicksCard/TodayPicksCard';
import todayPicks from './TodayPicksData';
import './TodayPicks.css';

class TodayPicks extends React.Component {
  constructor(props) {
    super(props);

    this.picks = todayPicks;

    this.state = {
      startIndex: 0,
      fading: false,
    };

    this.intervalMs = 5000; // rotate every 5s
    this.fadeMs = 300; // match CSS transition
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, this.intervalMs);
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
    if (this.fadeTimeout) clearTimeout(this.fadeTimeout);
  }

  tick() {
    // trigger fade-out, then change picks, then fade-in
    this.setState({ fading: true }, () => {
      this.fadeTimeout = setTimeout(() => {
        this.setState((prev) => {
          const nextStart = (prev.startIndex + 6) % this.picks.length;
          return { startIndex: nextStart, fading: false };
        });
      }, this.fadeMs);
    });
  }

  visiblePicks() {
    const { startIndex } = this.state;
    return Array.from({ length: 6 }, (_, i) => this.picks[(startIndex + i) % this.picks.length]);
  }

  renderRow(slice) {
    return (
      <div className="today-picks-fyp">
        {slice.map((item, index) => (
          <TodayPickCard
            key={index + item.href}
            image={item.image}
            title={item.title}
            href={item.href}
            meta={item.meta}
          />
        ))}
      </div>
    );
  }

  render() {
    const { fading } = this.state;
    const picks = this.visiblePicks();
    const firstRow = picks.slice(0, 3);
    const secondRow = picks.slice(3, 6);

    return (
      <div className={`today-picks ${fading ? 'tp-fade-out' : 'tp-fade-in'}`}>
        <h1>Today's Picks</h1>
        {this.renderRow(firstRow)}
        {this.renderRow(secondRow)}

        <div className="quick-recipes">
          <form id="quick-recipes-form" action="quick-recipe-subscribe">
            <label htmlFor="quick-subscribe">
              Get 5 quick recipes delivered to your inbox for free
            </label>
            <div className="input-group">
              <input
                type="email"
                id="quick-subscribe"
                className="form-control"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TodayPicks;