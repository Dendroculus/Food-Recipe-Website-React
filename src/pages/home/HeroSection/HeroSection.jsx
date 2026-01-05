import React from 'react';
import TodayPicks from '../TodayPicks/TodayPicks';
import './HeroSection.css';

/**
 * HeroSection component displaying main headline, description, CTAs and site search.
 * Contains helper data for hero content and call-to-action buttons.
 * @extends React.Component
 */
class HeroSection extends React.Component {
  /**
   * Initialize hero content and CTA button definitions.
   * @param {object} props - React props.
   */
  constructor(props) {
    super(props);

    this.heroContent = {
      title: 'Cook like a star - quick, seasonal recipes',
      description:
        "Discover a universe of easy-to-make, seasonal recipes that bring the flavors of the cosmos to your kitchen. Whether you're a novice cook or a seasoned chef, our collection of stellar dishes will inspire you to create meals that are out of this world.",
    };

    this.ctaButtons = [
      { type: 'button', className: 'explore', label: 'EXPLORE RECIPES', href: '' },
      { type: 'link', className: 'subscribe', label: 'SUBSCRIBE', href: '#quick-recipes-form' },
    ];
  }

  /**
   * Render CTA buttons based on their type definitions.
   * @returns {Array<JSX.Element>} Array of CTA elements (button or link).
   */
  renderCtas() {
    return this.ctaButtons.map((btn, index) => {
      if (btn.type === 'button') {
        return (
          <button key={index} type="button" className={btn.className}>
            {btn.label}
          </button>
        );
      }

      return (
        <a key={index} href={btn.href} className={btn.className}>
          {btn.label}
        </a>
      );
    });
  }

  /**
   * Render the hero section including TodayPicks and search form.
   * @returns {JSX.Element} Hero section markup.
   */
  render() {
    const { heroContent } = this;

    return (
      <div className="hero-search-container">
        <div className="hero-text-and-desc">
          <div className="hero">
            <h1>{heroContent.title}</h1>
          </div>
          <p className="herodesc">{heroContent.description}</p>
          <div className="more">{this.renderCtas()}</div>

          <TodayPicks />
        </div>

        <form className="site-search" action="#">
          <div className="search">
            <button type="submit" title="Search">
              <img className="img-fluid" src="/assets/icons/search.png" alt="search" width="24" height="24" />
            </button>
            <input type="text" id="site-search" className="form-control" placeholder="Start searching..." aria-label="Site search" />
          </div>
        </form>
      </div>
    );
  }
}

export default HeroSection;