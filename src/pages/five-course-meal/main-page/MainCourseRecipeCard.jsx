import React from "react";
import "../styles/main.css";
import '../styles/carousel.css';

export default class MainCourseRecipeCard extends React.Component {
    constructor(props) {
        super(props);

         this.state = {
            chickenIndex: 0,
            beefIndex: 0,
            lambIndex: 0,
            porkIndex: 0,
            seafoodIndex: 0,
            recipesPerView: 2
        };

        this.chicken = [
            { img: "/assets/main_course/Chicken/Chicken Cordon Bleu.png", title: "Chicken Cordon Bleu", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 15 mins" },
            { img: "/assets/main_course/Chicken/Chicken Marsala.jpg", title: "Chicken Marsala", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "30 mins" },
            { img: "/assets/main_course/Chicken/Chicken Roulade.jpg", title: "Chicken Roulade", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 10 mins" },
            { img: "/assets/main_course/Chicken/Chicken Wellington.png", title: "Chicken Wellington", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "55 mins" },
            { img: "/assets/main_course/Chicken/Juicy Pan-Seared Chicken.jpg", title: "Juicy Pan-Seared Chicken", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "15 mins" },
            { img: "/assets/main_course/Chicken/Chicken Corn Chowder.jpg", title: "Chicken Corn Chowder", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr" },
        ];

        this.beef = [
            { img: "/assets/main_course/Beef/Beef Wellington.jpg", title: "Beef Wellington", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "2 hr 10 mins" },
            { img: "/assets/main_course/Beef/Classic Beef Stroganoff.png", title: "Classic Beef Stroganoff", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "55 mins" },
            { img: "/assets/main_course/Beef/Coffee-Rubbed Braised Short Ribs.png", title: "Coffee-Rubbed Braised Short Ribs", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "2 hr" },
            { img: "/assets/main_course/Beef/Grilled Rib-Eyed Steak.webp", title: "Grilled Rib-Eyed Steak", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "42 mins" },
            { img: "/assets/main_course/Beef/Korean Beef Bulgogi.jpg", title: "Korean Beef Bulgogi", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "15 mins" },
            { img: "/assets/main_course/Beef/Beef Teppanyaki.jpeg", title: "Beef Teppanyaki", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 30 mins" },
        ];

        this.lamb = [
            { img: "/assets/main_course/Lamb/Fig Arugula and Prosciutto Salad.jpg", title: "Fig Arugula and Prosciutto Salad", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "2 hr 10 mins" },
            { img: "/assets/main_course/Lamb/Greek Gyros.jpg", title: "Greek Gyros", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 10 mins" },
            { img: "/assets/main_course/Lamb/Lamb Pastelon.jpg", title: "Lamb Pastelon", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "55 mins" },
            { img: "/assets/main_course/Lamb/Lamb Ragu Bucatini.jpg", title: "Lamb Ragu Bucatini", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr" },
            { img: "/assets/main_course/Lamb/Luscious Tandoori Lamb Chops.jpg", title: "Luscious Tandoori Lamb Chops", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "9 hr 10 mins" },
            { img: "/assets/main_course/Lamb/Lamb Loin Chops.jpg", title: "Lamb Loin Chops", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 12 mins" },
        ];

        this.pork = [
            { img: "/assets/main_course/Pork/Crispy Pork Schnitzel.png", title: "Crispy Pork Schnitzel", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "35 mins" },
            { img: "/assets/main_course/Pork/Pork Chops Charcutiere Sauce.png", title: "Pork Chops Charcutiere Sauce", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "35 mins" },
            { img: "/assets/main_course/Pork/Pork Tenderloin with Honey Glaze.jpg", title: "Honey-Glazed Pork Tenderloin", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 5 mins" },
            { img: "/assets/main_course/Pork/Stuffed Pork Loin.webp", title: "Stuffed Pork Loin", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "3 hr 4 mins" },
            { img: "/assets/main_course/Pork/Tonkatsu.webp", title: "Tonkatsu", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "40 mins" },
            { img: "/assets/main_course/Pork/Pork Eggs Benedict.jpg", title: "Pulled Pork Eggs Benedict", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "35 mins" },
        ];

        this.seafood = [
            { img: "/assets/main_course/Seafood/Lobster Mango Salad.png", title: "Lobster Mango Salad", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "15 mins" },
            { img: "/assets/main_course/Seafood/Lobster Thermidor.jpg", title: "Lobster Thermidor", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "40 mins" },
            { img: "/assets/main_course/Seafood/Salmon Steak in Coconut Milk with Peas.png", title: "Salmon Steak in Coconut Milk with Peas", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "24 mins" },
            { img: "/assets/main_course/Seafood/Shrimp Avocado Cocktail.png", title: "Shrimp Avocado Cocktail", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "10 mins" },
            { img: "/assets/main_course/Pork/Tonkatsu.webp", title: "Tonkatsu", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "40 mins" },
            { img: "/assets/main_course/Seafood/Sole and Salmon Mousse Terrine with Indian Sauce.jpg", title: "Sole and Salmon Mousse Terrine", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 5 mins" },
        ];

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

    handleChickenPrevious = () => {
        this.setState((prevState) => ({
            chickenIndex: prevState.chickenIndex === 0 
                ? Math.ceil(this.chicken.length / prevState.recipesPerView) - 1 
                : prevState.chickenIndex - 1
        }));
    }

    handleChickenNext = () => {
        this.setState((prevState) => ({
            chickenIndex: prevState.chickenIndex >= Math.ceil(this.chicken.length / prevState.recipesPerView) - 1 
                ? 0 
                : prevState.chickenIndex + 1
        }));
    }

    handleBeefPrevious = () => {
        this.setState((prevState) => ({
            beefIndex: prevState.beefIndex === 0 
                ? Math.ceil(this.beef.length / prevState.recipesPerView) - 1 
                : prevState.beefIndex - 1
        }));
    }

    handleBeefNext = () => {
        this.setState((prevState) => ({
            beefIndex: prevState.beefIndex >= Math.ceil(this.beef.length / prevState.recipesPerView) - 1 
                ? 0 
                : prevState.beefIndex + 1
        }));
    }

    handleLambPrevious = () => {
        this.setState((prevState) => ({
            lambIndex: prevState.lambIndex === 0 
                ? Math.ceil(this.lamb.length / prevState.recipesPerView) - 1 
                : prevState.lambIndex - 1
        }));
    }

    handleLambNext = () => {
        this.setState((prevState) => ({
            lambIndex: prevState.lambIndex >= Math.ceil(this.lamb.length / prevState.recipesPerView) - 1 
                ? 0 
                : prevState.lambIndex + 1
        }));
    }

    handlePorkPrevious = () => {
        this.setState((prevState) => ({
            porkIndex: prevState.porkIndex === 0 
                ? Math.ceil(this.pork.length / prevState.recipesPerView) - 1 
                : prevState.porkIndex - 1
        }));
    }

    handlePorkNext = () => {
        this.setState((prevState) => ({
            porkIndex: prevState.porkIndex >= Math.ceil(this.pork.length / prevState.recipesPerView) - 1 
                ? 0 
                : prevState.porkIndex + 1
        }));
    }

    handleSeafoodPrevious = () => {
        this.setState((prevState) => ({
            seafoodIndex: prevState.seafoodIndex === 0 
                ? Math.ceil(this.seafood.length / prevState.recipesPerView) - 1 
                : prevState.seafoodIndex - 1
        }));
    }

    handleSeafoodNext = () => {
        this.setState((prevState) => ({
            seafoodIndex: prevState.seafoodIndex >= Math.ceil(this.seafood.length / prevState.recipesPerView) - 1 
                ? 0 
                : prevState.seafoodIndex + 1
        }));
    }
    
    goToSlide = (index) => {
        this.setState({currentIndex: index});
    }

    chickenRender() {
        const { chickenIndex: currentIndex, recipesPerView } = this.state;

        return (
            <section className="carousel-container">
                <div className="category-recipes">
                    <h3 className="category-recipes">
                        Chicken
                    </h3>
                </div>
                <div className="carousel-wrapper">
                    <button className="carousel-button carousel-button-prev" onClick={this.handleChickenPrevious}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    
                    <div className="carousel-track-container">
                        <div 
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}>
                            {this.chicken.map((r, index) => (
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
                    
                    <button className="carousel-button carousel-button-next" onClick={this.handleChickenNext}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <div className="carousel-indicators">
                    {Array.from({ length: Math.ceil(this.chicken.length / recipesPerView) }).map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => this.goToSlide(index)}
                        />
                    ))}
                </div>
            </section>
        );
    }

    beefRender() {
        const { beefIndex: currentIndex, recipesPerView } = this.state;

        return (
            <section className="carousel-container">
                <div className="category-recipes">
                    <h3 className="category-recipes">
                        Beef
                    </h3>
                </div>
                <div className="carousel-wrapper">
                    <button className="carousel-button carousel-button-prev" onClick={this.handleBeefPrevious}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    
                    <div className="carousel-track-container">
                        <div 
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}>
                            {this.beef.map((r, index) => (
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
                    
                    <button className="carousel-button carousel-button-next" onClick={this.handleBeefNext}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <div className="carousel-indicators">
                    {Array.from({ length: Math.ceil(this.beef.length / recipesPerView) }).map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => this.goToSlide(index)}
                        />
                    ))}
                </div>
            </section>
        );
    }

    lambRender() {
        const { lambIndex: currentIndex, recipesPerView } = this.state;

        return (
            <section className="carousel-container">
                <div className="category-recipes">
                    <h3 className="category-recipes">
                        Lamb
                    </h3>
                </div>
                <div className="carousel-wrapper">
                    <button className="carousel-button carousel-button-prev" onClick={this.handleLambPrevious}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    
                    <div className="carousel-track-container">
                        <div 
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}>
                            {this.lamb.map((r, index) => (
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
                    
                    <button className="carousel-button carousel-button-next" onClick={this.handleLambNext}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <div className="carousel-indicators">
                    {Array.from({ length: Math.ceil(this.lamb.length / recipesPerView) }).map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => this.goToSlide(index)}
                        />
                    ))}
                </div>
            </section>
        );
    }

    porkRender() {
        const { porkIndex: currentIndex, recipesPerView } = this.state;

        return (
            <section className="carousel-container">
                <div className="category-recipes">
                    <h3 className="category-recipes">
                        Pork
                    </h3>
                </div>
                <div className="carousel-wrapper">
                    <button className="carousel-button carousel-button-prev" onClick={this.handlePorkPrevious}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    
                    <div className="carousel-track-container">
                        <div 
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}>
                            {this.pork.map((r, index) => (
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
                    
                    <button className="carousel-button carousel-button-next" onClick={this.handlePorkNext}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <div className="carousel-indicators">
                    {Array.from({ length: Math.ceil(this.pork.length / recipesPerView) }).map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => this.goToSlide(index)}
                        />
                    ))}
                </div>
            </section>
        );
    }

    seafoodRender() {
        const { seafoodIndex: currentIndex, recipesPerView } = this.state;

        return (
            <section className="carousel-container">
                <div className="category-recipes">
                    <h3 className="category-recipes">
                        Seafood
                    </h3>
                </div>
                <div className="carousel-wrapper">
                    <button className="carousel-button carousel-button-prev" onClick={this.handleSeafoodPrevious}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    
                    <div className="carousel-track-container">
                        <div 
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}>
                            {this.seafood.map((r, index) => (
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
                    
                    <button className="carousel-button carousel-button-next" onClick={this.handleSeafoodNext}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <div className="carousel-indicators">
                    {Array.from({ length: Math.ceil(this.seafood.length / recipesPerView) }).map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => this.goToSlide(index)}
                        />
                    ))}
                </div>
            </section>
        );
    }

    render() {
        return (
            <section className="category">
                {this.chickenRender()}
                {this.beefRender()}
                {this.lambRender()}
                {this.porkRender()}
                {this.seafoodRender()}
            </section>
        );
    }

};