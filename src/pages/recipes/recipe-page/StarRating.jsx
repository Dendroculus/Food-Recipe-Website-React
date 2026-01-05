import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

/**
 * StarRating component renders a 5-star rating display based on a numeric rating.
 *
 * Props:
 * - rating: number (e.g., 4.5)
 * - reviews: number (count of reviews)
 *
 * @extends React.Component
 */
export default class StarRating extends React.Component {
    /**
     * Render the star icons and review count.
     * @returns {JSX.Element} Star rating markup.
     */
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