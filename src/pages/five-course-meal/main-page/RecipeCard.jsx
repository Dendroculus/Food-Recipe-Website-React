import React from "react";
import '../styles/carousel.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default class RecipeCard extends React.Component {
    constructor(props) {
        super(props);

         this.state = {
            currentIndex: 0,
            recipesPerView: 2
        };
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        if (window.innerWidth <= 800) {
            this.setState({recipesPerView: 1, currentIndex: 0});
        } else {
            this.setState({recipesPerView: 2, currentIndex: 0});
        }
    }

    handlePrevious = () => {
        const { recipes } = this.props;
        this.setState((state) => ({
            currentIndex: state.currentIndex === 0 ? 
            Math.ceil(recipes.length / state.recipesPerView) - 1 : state.currentIndex - 1
        }));
    }

    handleNext = () => {
        const { recipes } = this.props;
        this.setState((state) => ({
            currentIndex: state.currentIndex >= Math.ceil(recipes.length / state.recipesPerView) - 1 ? 0
            : state.currentIndex + 1
        }));
    }
    
    goToSlide = (index) => {
        this.setState({currentIndex: index});
    }

   render() {
        const { currentIndex, recipesPerView } = this.state;
        const { recipes, title } = this.props;
        const indicator = [];
        for (let i = 0; i < Math.ceil(recipes.length / recipesPerView); i++) {
            indicator.push(i);
        }
        return (
            <section className="carousel-container">
                <div className="category-recipes">
                    <h3 className="category-recipes">{title}</h3>
                </div>
                <div className="carousel-wrapper">
                    <button className="carousel-button carousel-button-prev" onClick={this.handlePrevious}>
                        <FaChevronLeft />
                    </button>
                    <div className="carousel-track-container">
                        <div className="carousel-track"
                        style={{transform: `translateX(-${currentIndex * 100}%)`, transition: `transform 0.5s ease-in-out`}}>
                            {recipes.map((r, index) => (
                                <div className="carousel-slide" key={`${r.title}-${index}`}>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={r.img} alt={r.title} />
                                        </div>
                                        <div className="text">
                                            <a href={r.href}>{r.title}</a>
                                            <p>{r.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="carousel-button carousel-button-next" onClick={this.handleNext}>
                        <FaChevronRight />
                    </button>
                </div>
                <div className="carousel-indicators">
                    {indicator.map((index) => (
                        <button
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => this.goToSlide(index)} />
                    ))}
                </div>
            </section>
        )
   }

};