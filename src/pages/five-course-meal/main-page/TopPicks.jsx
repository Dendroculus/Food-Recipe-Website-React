import React from "react";
import '../styles/top_pick_carousel.css';

export default class TopPicks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            isAnimating: false
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

        this.intervalId = null;
    }

    componentDidMount() {
        this.startAutoAdvance();
    }

    componentWillUnmount() {
        this.stopAutoAdvance();
    }

    startAutoAdvance = () => {
        this.intervalId = setInterval(() => {
            this.handleNext();
        }, 4000);
    }

    stopAutoAdvance = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    handleNext = () => {
        if (!this.state.isAnimating) {
            this.setState({isAnimating: true});
            this.setState((prevState) => ({
                currentIndex: (prevState.currentIndex + 1) % this.topPicks.length
            }));
            setTimeout(() => {
                this.setState({isAnimating: false});
            }, 600);
        }
    }

    handlePrev = () => {
        if (!this.state.isAnimating) {
            this.setState({isAnimating: true});
            this.setState((prevState) => ({
                currentIndex: (prevState.currentIndex - 1 + this.topPicks.length) % this.topPicks.length
            }));
            setTimeout(() => {
                this.setState({isAnimating: false});
            }, 600);
        }
    }

    goToSlide = (index) => {
        if (!this.state.isAnimating) {
            this.setState({
                currentIndex: index,
                isAnimating: true
            });
            setTimeout(() => {
                this.setState({isAnimating: false});
            }, 600);
        } 
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

                <div className="flip-carousel">
                    <button className="flip-nav flip-prev" onClick={this.handlePrev}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div className="flip-container">
                        {this.topPicks.map((item, index) => {
                            let position = 'nextSlide';
                            if (index === currentIndex) {
                                position = 'activeSlide';
                            }
                            if (index === currentIndex - 1 || (currentIndex === 0 && index === this.topPicks.length - 1)) {
                                position = 'lastSlide';
                            }

                            return (
                                <div key={index} className={`flip-card ${position}`}>
                                    <div className="flip-card-inner">
                                        <img src={item.img} alt={item.title} />
                                        <div className="flip-overlay">
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button className="flip-nav flip-next" onClick={this.handleNext}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div className="flip-indicators">
                    {this.topPicks.map((_, index) => (
                        <button
                            key={index}
                            className={`flip-dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => this.goToSlide(index)}
                        />
                    ))}
                </div>
            </section>
        );
    }

}