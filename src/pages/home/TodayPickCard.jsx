import React from 'react';

class TodayPickCard extends React.Component {
  render() {
    const { image, title, href, meta } = this.props;

    return (
      <div className="fyp-image">
        <img className="img-fluid" src={image} alt={title} />
        <a href={href}>{title}</a>
        <p>{meta}</p>
      </div>
    );
  }
}

export default TodayPickCard;