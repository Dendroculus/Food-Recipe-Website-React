import React from "react";
import "../../home/Home.css";
import "../styles/main.css";
import Navbar from "../../home/Navbar";
import Footer from "../../home/Footer";

export default class Dessert extends React.Component {
  topPicks = [
    { img: "/assets/desserts/Limoncello Tiramisu.jpg", title: "Limoncello Tiramisu" },
    { img: "/assets/desserts/Strawberry Tiramisu.jpg", title: "Strawberry Tiramisu" },
    { img: "/assets/desserts/Oreo Tiramisu Trifle.webp", title: "Oreo Tiramisu Trifle" },
    { img: "/assets/desserts/Pumpkin Chai Tiramisu.webp", title: "Pumpkin Chai Tiramisu" },
  ];

  cakes = [
    { img: "/assets/desserts/Chocolate Sheet Cake.jpg", title: "Chocolate Sheet Cake", href: "/five-course-meal/recipes-html/dessert-recipes.html#chocolate-cake" },
    { img: "/assets/desserts/Blueberry Heaven on Earth Cake.jpg", title: "Blueberry Heaven on Earth Cake", href: "/five-course-meal/recipes-html/dessert-recipes.html#blueberry-cake" },
    { img: "/assets/desserts/Boston Cream Poke Cake.jpg", title: "Boston Cream Poke Cake", href: "/five-course-meal/recipes-html/dessert-recipes.html#boston-cake" },
    { img: "/assets/desserts/Italian Lemon Ricotta Cake.jpeg", title: "Italian Lemon Ricotta Cake", href: "/five-course-meal/recipes-html/dessert-recipes.html#lemon-ricotta-cake" },
  ];

  tiramisu = [
    { img: "/assets/desserts/Limoncello Tiramisu.jpg", title: "Limoncello Tiramisu", href: "/five-course-meal/recipes-html/dessert-recipes.html#limoncello-tiramisu" },
    { img: "/assets/desserts/Strawberry Tiramisu.jpg", title: "Strawberry Tiramisu", href: "/five-course-meal/recipes-html/dessert-recipes.html#strawberry-tiramisu" },
    { img: "/assets/desserts/Oreo Tiramisu Trifle.webp", title: "Oreo Tiramisu Trifle", href: "/five-course-meal/recipes-html/dessert-recipes.html#oreo-tiramisu-trifle" },
    { img: "/assets/desserts/Pumpkin Chai Tiramisu.webp", title: "Pumpkin Chai Tiramisu", href: "/five-course-meal/recipes-html/dessert-recipes.html#pumpkin-tiramisu" },
  ];

  others = [
    { img: "/assets/desserts/Panacotta.png", title: "Panacotta", href: "/five-course-meal/recipes-html/dessert-recipes.html#panacotta" },
    { img: "/assets/desserts/Profiteroles.png", title: "Profiteroles", href: "/five-course-meal/recipes-html/dessert-recipes.html#profiteroles" },
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

  render() {
    return (
      <div className="page-wrapper">
        <Navbar />

        <main>
          <h1 className="main-title">Dessert</h1>

          <section className="dessert-description">
            <div className="dessert-summary-content">
              <p className="food-definition">
                Dessert, a delectable treat enjoyed after a meal, is the sweet finale that brings joy to our taste buds.
              </p>
            </div>
            <button type="button" className="cta-button">
              <i className="bi bi-bookmark-heart"></i>
              Save Your Favorites
            </button>
          </section>

          <section className="recommended-section">
            <div className="heading-container">
              <h3 className="top-pick-heading">
                <span className="top-line">Top Picks</span>
                <span className="bottom-line">Dessert</span>
              </h3>
            </div>
            <div className="dessert-container">
              {this.renderCardGrid(this.topPicks)}
            </div>
          </section>

          <section className="cake-section py-5">
            <div className="container">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="section-title text-center mb-3">Cakes</h2>
                </div>
              </div>
              {this.renderCardGrid(this.cakes, "row g-4", "card-img", "dessert-section-description")}
            </div>
          </section>

          <section className="tiramisu-section py-5">
            <div className="container">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="section-title text-center mb-3">Tiramisu</h2>
                </div>
              </div>
              {this.renderCardGrid(this.tiramisu, "row g-4", "card-img", "dessert-section-description")}
            </div>
          </section>

          <section className="others-section py-5">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                  <h2 className="section-title text-center mb-3">Others</h2>
                </div>
              </div>
              <div className="d-flex">
                {this.others.map((item) => (
                  <div className="flex-grow-1" key={item.title}>
                    <div className="recipe-card">
                      <div className="card-img-container">
                        <a href={item.href}>
                          <img src={item.img} className="card-img" alt={item.title} />
                        </a>
                        <div className="dessert-section-description">{item.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="more-recipes-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="cooking-badge">COOKING FOR EVERYONE</div>
                  <h1 className="more-section-title">DESSERT</h1>
                  <p className="description-text">
                    For more best dessert recipe ideas, Celestial's got you covered!
                  </p>
                  <button type="button" className="cta-button">MORE DESSERT RECIPE</button>
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