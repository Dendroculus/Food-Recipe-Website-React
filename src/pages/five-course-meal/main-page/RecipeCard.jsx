import { useState, useEffect } from "react";
import "../styles/main.css";
import '../styles/carousel.css';

const Chicken = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [recipesPerView, setRecipesPerView] = useState(2);

    const chicken = [
        { img: "/assets/main_course/Chicken/Chicken Cordon Bleu.png", title: "Chicken Cordon Bleu", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 15 mins" },
        { img: "/assets/main_course/Chicken/Chicken Marsala.jpg", title: "Chicken Marsala", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "30 mins" },
        { img: "/assets/main_course/Chicken/Chicken Roulade.jpg", title: "Chicken Roulade", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 10 mins" },
        { img: "/assets/main_course/Chicken/Chicken Wellington.png", title: "Chicken Wellington", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "55 mins" },
        { img: "/assets/main_course/Chicken/Juicy Pan-Seared Chicken.jpg", title: "Juicy Pan-Seared Chicken", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "15 mins" },
        { img: "/assets/main_course/Chicken/Chicken Corn Chowder.jpg", title: "Chicken Corn Chowder", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr" },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 800) {
                setRecipesPerView(1);
                setCurrentIndex(0); 
            } else {
                setRecipesPerView(2);
                setCurrentIndex(0);
            }
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? Math.ceil(chicken.length / recipesPerView) - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex >= Math.ceil(chicken.length / recipesPerView) - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }
    return (
        <section className="carousel-container">
            <div className="carousel-wrapper">
                <button className="carousel-button carousel-button prev" onClick={handlePrevious}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className="carousel-track-container">
                    <div className="carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: 'transform 0.5s ease-in-out'
                    }}>
                        {chicken.map((r) => (
                        <div className="carousel-slide" key={r.title}>
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
                <button className="carousel-button carousel-button-next" onClick={handleNext}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="carousel-indicators">
                {Array.from({ length: Math.ceil(chicken.length / recipesPerView) }).map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );

};

export default Chicken;