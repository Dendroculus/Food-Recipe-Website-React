import React from "react";
import '../styles/top_pick_carousel.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default class TopPicks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
        };

        this.topPicks = [
            { img: "/assets/main_course/Chicken/Chicken Cordon Bleu.png", title: "Chicken Cordon Bleu" },
            { img: "/assets/main_course/Seafood/Salmon Steak in Coconut Milk with Peas.png", title: "Salmon Steak" },
            { img: "/assets/main_course/Seafood/Shrimp Avocado Cocktail.png", title: "Shrimp Avocado Cocktail" },
            { img: "/assets/main_course/Pork/Tonkatsu.webp", title: "Tonkatsu", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "40 mins" },
            { img: "/assets/main_course/Seafood/Lobster Thermidor.jpg", title: "Lobster Thermidor", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "40 mins" },
            { img: "/assets/main_course/Pork/Crispy Pork Schnitzel.png", title: "Crispy Pork Schnitzel", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "35 mins" },
            { img: "/assets/main_course/Pork/Pork Eggs Benedict.jpg", title: "Pulled Pork Eggs Benedict", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "35 mins" },
            { img: "/assets/main_course/Lamb/Greek Gyros.jpg", title: "Greek Gyros", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 10 mins" },
            { img: "/assets/main_course/Beef/Beef Teppanyaki.jpeg", title: "Beef Teppanyaki", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 30 mins" },
        ];

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
        this.setState({
            currentIndex: (this.state.currentIndex + 1) % this.topPicks.length
        })
    }

    prevSlide = () => {
        this.setState({
            currentIndex: this.state.currentIndex === 0 ? this.topPicks.length - 1 : this.state.currentIndex - 1
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
        return (
            <section className="top-picks-section">
                <div className="heading-container">
                    <h3 className="top-pick-heading">
                        <span className="top-line">Top Picks</span>
                        <span className="bottom-line">Main Course</span>
                    </h3>
                </div>
                <div className="alice-carousel-wrapper" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <button className="alice-nav-btn alice-nav-prev" onClick={this.prevSlide}>
                        <FaChevronLeft />
                    </button>
                    <div className="alice-main-display">
                        <div className="alice-main-card">
                            <img src={this.topPicks[currentIndex].img} alt={this.topPicks[currentIndex].title} />
                            <div className="alice-main-overlay">
                                <h3>{this.topPicks[currentIndex].title}</h3>
                            </div>
                        </div>
                        <div className="alice-thumbnails">
                            {this.topPicks.map((item, index) => (
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