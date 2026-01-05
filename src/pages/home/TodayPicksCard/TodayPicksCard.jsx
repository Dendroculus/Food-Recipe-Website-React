import React from 'react';
import PropTypes from 'prop-types';
import './TodayPicksCard.css';

/**
 * TodayPickCard component represents a single pick card used in Today's Picks grid.
 * Props:
 * - image: string - image url for the pick
 * - title: string - title of the recipe
 * - href: string - link to the recipe
 * - meta: string - short meta information (prep time, difficulty, rating)
 *
 * @extends React.Component
 */
class TodayPickCard extends React.Component {
  /**
   * Render the pick card with image, title link and meta text.
   * @returns {JSX.Element} Pick card markup.
   */
  render() {
    const { image, title, href, meta } = this.props;

    return (
      <div className="fyp-image">
        <img className="img-fluid" src={image} alt={title} loading="lazy" width="400" height="300" />
        <a href={href}>{title}</a>
        <p>{meta}</p>
      </div>
    );
  }
}

/**
 * Prop types for TodayPickCard.
 * @type {Object}
 */
TodayPickCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  meta: PropTypes.string,
};

/**
 * Default props for TodayPickCard.
 * @type {Object}
 */
TodayPickCard.defaultProps = {
  meta: '',
};

export default TodayPickCard;