import React from "react";
import '../styles/top_pick_carousel.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default class TopPicks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
        };

        this.autoPlayInterval = null;
    }

    componentDidMount() {
        this.startAutoPlay();
    }
    
    componentWillUnmount() {
        this.stopAutoPlay();
    }

    startAutoPlay = () => {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 3000);
    }

    stopAutoPlay = () => {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay = () => {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    nextSlide = () => {
        const { topPicks } = this.props;
        this.setState({
            currentIndex: (this.state.currentIndex + 1) % topPicks.length
        })
    }

    prevSlide = () => {
        const { topPicks } = this.props;
        this.setState({
            currentIndex: this.state.currentIndex === 0 ? topPicks.length - 1 : this.state.currentIndex - 1
        })
    }

    goToSlide = (index) => {
        this.setState({ 
            currentIndex: index
        })
    }

    handleMouseEnter = () => {
        this.stopAutoPlay();
    }

    handleMouseLeave = () => {
        this.startAutoPlay();
    }

    render() {
        const { currentIndex } = this.state;
        const topPicks = this.props.topPicks;
        return (
            <section className="top-picks-section">
                <div className="heading-container">
                    <h3 className="top-pick-heading">
                        <span className="top-line">Top Picks</span>
                        <span className="bottom-line">{this.props.title}</span>
                    </h3>
                </div>
                <div className="alice-carousel-wrapper" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <button className="alice-nav-btn alice-nav-prev" onClick={this.prevSlide}>
                        <FaChevronLeft />
                    </button>
                    <div className="alice-main-display">
                        <div className="alice-main-card">
                            <img src={topPicks[currentIndex].img} alt={topPicks[currentIndex].title} />
                            <div className="alice-main-overlay">
                                <h3>{topPicks[currentIndex].title}</h3>
                            </div>
                        </div>
                        <div className="alice-thumbnails">
                            {topPicks.map((item, index) => (
                                <div key={index} className={`alice-thumbnail ${currentIndex === index ? 'active': ''}`} onClick={() => this.goToSlide(index)}>
                                    <img src={item.img} alt={item.title} />
                                    <div className="thumbnail-number">{index + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="alice-nav-btn alice-nav-next" onClick={this.nextSlide}>
                        <FaChevronRight />
                    </button>
                </div>
            </section>
        );
    }

}