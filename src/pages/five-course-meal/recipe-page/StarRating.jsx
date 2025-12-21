import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default class StarRating extends React.Component {
    render() {
        const { rating, reviews } = this.props;
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} />)
            } else if (rating >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} />);
            } else {
                stars.push(<FaRegStar key={i} />);
            }
        }

        return (
            <div className="rating">
                {stars} <span>({reviews} reviews)</span>
            </div>
        )
    }
}