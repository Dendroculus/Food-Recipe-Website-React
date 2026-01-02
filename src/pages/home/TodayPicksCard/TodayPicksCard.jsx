import React from 'react';
import PropTypes from 'prop-types';
import './TodayPicksCard.css';

class TodayPickCard extends React.Component {
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

TodayPickCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  meta: PropTypes.string,
};

TodayPickCard.defaultProps = {
  meta: '',
};

export default TodayPickCard;