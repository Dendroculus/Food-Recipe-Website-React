import React from "react";
import "../../home/Home.css";
import "../styles/main.css";
import RecipeNavbar from "../RecipesNavBar";  
import Footer from "../../home/Footer";

export default class Appetizer extends React.Component {
  topPicks = [
    { img: "/assets/appetizers/Bread/Florentine Ciabatta.jpg", title: "Florentine Ciabatta" },
    { img: "/assets/appetizers/Dip-Based/Party Cheese Bread.jpg", title: "Party Cheese Bread" },
    { img: "/assets/appetizers/Finger Food/Ham n Cheese Biscuit Stacks.jpg", title: "Ham 'n' Cheese Biscuit Stacks" },
    { img: "/assets/appetizers/Finger Food/Stuffed Cherry Tomatoes.jpg", title: "Stuffed Cherry Tomatoes" },
  ];

  allRecipes = [
    { img: "/assets/appetizers/Bread/Florentine Ciabatta.jpg", title: "Florentine Ciabatta", href: "/five-course-meal/recipes-html/appetizer-recipes.html#florentine-ciabatta", time: "25 mins" },
    { img: "/assets/appetizers/Finger Food/Fried Prosciutto Tortellini.jpg", title: "Fried Prosciutto Tortellini", href: "/five-course-meal/recipes-html/appetizer-recipes.html#fried-prosciutto-tortellini", time: "30 mins" },
    { img: "/assets/appetizers/Dip-Based/Hot Spinach Artichoke Dip.jpg", title: "Hot Spinach Artichoke Dip", href: "/five-course-meal/recipes-html/appetizer-recipes.html#artichoke-dip", time: "40 mins" },
    { img: "/assets/appetizers/Bread/Grilled Tomato-Peach Pizza.jpg", title: "Grilled Tomato-Peach Pizza", href: "/five-course-meal/recipes-html/appetizer-recipes.html#grilled-pizza", time: "25 mins" },
    { img: "/assets/appetizers/Finger Food/Orange Marmalade Meatballs.jpg", title: "Orange Marmalade Meatballs", href: "/five-course-meal/recipes-html/appetizer-recipes.html#meatballs", time: "30 mins" },
    { img: "/assets/appetizers/Dip-Based/Party Cheese Bread.jpg", title: "Party Cheese Bread", href: "/five-course-meal/recipes-html/appetizer-recipes.html#party-cheese-bread", time: "55 mins" },
    { img: "/assets/appetizers/Finger Food/Stuffed Cherry Tomatoes.jpg", title: "Stuffed Cherry Tomatoes", href: "/five-course-meal/recipes-html/appetizer-recipes.html#stuffed-cherry-tomatoes", time: "40 mins" },
    { img: "/assets/appetizers/Finger Food/Ham n Cheese Biscuit Stacks.jpg", title: "Ham 'n' Cheese Biscuit Stacks", href: "/five-course-meal/recipes-html/appetizer-recipes.html#cheese-biscuit-stacks", time: "25 mins" },
  ];

  renderCardGrid(list, className = "row g-4", imgClass = "card-img", descClass = "section-description") {
    return (
      <div className={className}>
        {list.map((item) => (
          <div className="col-md-6 col-lg-3" key={item.title}>
            <div className="recipe-card">
              <div className="card-img-container">
                <img src={item.img} className={imgClass} alt={item.title} />
                <div className={descClass}>{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

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
        <RecipeNavbar />

        <main>
          <h1 className="head-title">Appetizer</h1>
          <div className="appetizer text-container">
            <div className="content">
              <p className="check-out">
                Explore our website's full appetizer recipe collection. Log in or create your account to easily save, revisit and review all your favourite appetizer dishes!
              </p>
            </div>
          </div>

          <section className="recommended-section">
            <div className="heading-container">
              <h3 className="top-pick-heading">
                <span className="top-line">Top Picks</span>
                <span className="bottom-line">Appetizer</span>
              </h3>
            </div>
            {this.renderCardGrid(this.topPicks)}
          </section>

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
                  <h1 className="more-section-title">APPETIZER</h1>
                  <p className="description-text">
                    For more best appetizer recipe ideas, Celestial's got you covered!
                  </p>
                  <button type="button" className="cta-button">MORE APPETIZER RECIPE</button>
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