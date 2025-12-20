import React from 'react';

export default class StarRating extends React.Component {
    render() {
        const { rating, reviews } = this.props;
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<i key={i} className='fas fa-star'></i>)
            } else if (rating >= i - 0.5) {
                stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
            } else {
                stars.push(<i key={i} className="far fa-star"></i>);
            }
        }

        return (
            <div className="rating">
                {stars}
                <span>({reviews} reviews)</span>
            </div>
        )
    }
}