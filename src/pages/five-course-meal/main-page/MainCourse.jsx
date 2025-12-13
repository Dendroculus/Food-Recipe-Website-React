import React from "react";
import "../../home/Home.css";
import "../styles/main.css";
import RecipeNavBar from "../RecipesNavBar"; 
import Footer from "../../home/Footer";
import MainCourseRecipeCard from "./MainCourseRecipeCard";
import TopPicks from "./TopPicks";

export default class MainCourse extends React.Component {

  allRecipes = [
    { img: "/assets/main_course/Chicken/Chicken Cordon Bleu.png", title: "Chicken Cordon Bleu", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 15 mins" },
    { img: "/assets/main_course/Chicken/Chicken Marsala.jpg", title: "Chicken Marsala", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "30 mins" },
    { img: "/assets/main_course/Chicken/Chicken Roulade.jpg", title: "Chicken Roulade", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 10 mins" },
    { img: "/assets/main_course/Chicken/Chicken Wellington.png", title: "Chicken Wellington", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "55 mins" },
    { img: "/assets/main_course/Chicken/Juicy Pan-Seared Chicken.jpg", title: "Juicy Pan-Seared Chicken", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "15 mins" },
    { img: "/assets/main_course/Seafood/Lobster Mango Salad.png", title: "Lobster Mango Salad", href: "/five-course-meal/recipes-html/main-course-recipes.html#lobster-mango-salad", time: "1 hr" },
    { img: "/assets/main_course/Pork/Pork Chops Charcutiere Sauce.png", title: "Pork Chops", href: "/five-course-meal/recipes-html/main-course-recipes.html#pork-chops", time: "25 mins" },
    { img: "/assets/main_course/Seafood/Salmon Steak in Coconut Milk with Peas.png", title: "Salmon Steak", href: "/five-course-meal/recipes-html/main-course-recipes.html#salmon-steak", time: "24 mins" },
    { img: "/assets/main_course/Seafood/Shrimp Avocado Cocktail.png", title: "Shrimp Avocado Cocktail", href: "/five-course-meal/recipes-html/main-course-recipes.html#shrimp-avocado-cocktail", time: "1 hr 45 mins" },
    { img: "/assets/main_course/Seafood/Sole and Salmon Mousse Terrine with Indian Sauce.jpg", title: "Mousse Terrine", href: "/five-course-meal/recipes-html/main-course-recipes.html#mousse-terrine", time: "1 hr 5 mins" },
    { img: "/assets/main_course/Beef/Coffee-Rubbed Braised Short Ribs.png", title: "Braised Short Ribs", href: "/five-course-meal/recipes-html/main-course-recipes.html#short-ribs", time: "3 hr 55 mins" },
    { img: "/assets/main_course/Lamb/Fig Arugula and Prosciutto Salad.jpg", title: "Arugula & Prosciutto Salad", href: "/five-course-meal/recipes-html/main-course-recipes.html#arugula-prosciutto-salad", time: "15 mins" },
  ];

  renderAllRecipes() {
    return (
      <section className="recipe-section">
        {this.allRecipes.map((r) => (
          <div className="card" key={r.title}>
            <div className="card-image">
              <img src={r.img} alt={r.title} />
            </div>
            <div className="text">
              <a href={r.href}>{r.title}</a>
              <p>{r.time}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }

  render() {
    return (
      <div className="page-wrapper">
        <RecipeNavBar />

        <main>
          <h1 className="head-title">Main Course</h1>

          <div className="summary-content">
            <p className="main-course-definition">
              The main course is the primary dish of food served for lunch or dinner. It is also known by the name of Entree in many countries.
            </p>
          </div>

          <div className="main text-container">
            <div className="content">
              <p className="check-out">
                Explore our website's full main course recipe collection. Log in or create your account to easily save, revisit and review all your favourite main-course dishes!
              </p>
            </div>
          </div>

          <TopPicks />

          <MainCourseRecipeCard />

          <div className="all-recipes">
            <h3 className="all-recipes">
              A<span className="blink">l</span>l R<span className="long-blink">e</span>ci<span className="blink">p</span>es
            </h3>
          </div>

          {this.renderAllRecipes()}

          <section className="button">
            <div className="text-center mt-4">
              <button type="button" className="btn btn-secondary">More &gt;</button>
            </div>
          </section>

          <section className="more-recipes-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="cooking-badge">COOKING FOR EVERYONE</div>
                  <h1 className="more-section-title">MAIN COURSE</h1>
                  <p className="description-text">
                    For more best main course recipe ideas, Celestial's got you covered!
                  </p>
                  <button type="button" className="cta-button">MORE MAIN COURSE RECIPE</button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}