import React from "react";
import "../../home/Home.css";
import "../styles/main.css";
import Navbar from "../../home/Navbar";
import Footer from "../../home/Footer";

export default class Salad extends React.Component {
  topPicks = [
    { img: "/assets/salad/Apple Salad.png", title: "Apple Salad" },
    { img: "/assets/salad/Italian Salad.png", title: "Italian Salad" },
    { img: "/assets/salad/Radicchio Salad.jpg", title: "Radicchio Salad" },
  ];

  allRecipes = [
    { img: "/assets/salad/Apple Salad.png", title: "Apple Salad", href: "/five-course-meal/recipes-html/salad-recipes.html#apple-salad", time: "20 mins" },
    { img: "/assets/salad/Butter Lettuce Salad.jpg", title: "Butter Lettuce Salad", href: "/five-course-meal/recipes-html/salad-recipes.html#butter-lettuce-salad", time: "15 mins" },
    { img: "/assets/salad/Frisee Salad.webp", title: "Frisee Salad", href: "/five-course-meal/recipes-html/salad-recipes.html#frisse-salad", time: "1 hr 10 mins" },
    { img: "/assets/salad/Italian Salad.png", title: "Italian Salad", href: "/five-course-meal/recipes-html/salad-recipes.html#italian-salad", time: "15 mins" },
    { img: "/assets/salad/Mediterranean Salad.jpg", title: "Mediterranean Salad", href: "/five-course-meal/recipes-html/salad-recipes.html#mediterranean-salad", time: "10 mins" },
    { img: "/assets/salad/Mexican Chopped Salad.jpeg", title: "Mexican Chopped Salad", href: "/five-course-meal/recipes-html/salad-recipes.html#mexican-salad", time: "50 mins" },
    { img: "/assets/salad/Radicchio Salad.jpg", title: "Radicchio Salad", href: "/five-course-meal/recipes-html/salad-recipes.html#radicchio-salad", time: "20 mins" },
    { img: "/assets/salad/Romaine Salad with Green Goddess.jpg", title: "Romaine Salad with Green Goddess", href: "/five-course-meal/recipes-html/salad-recipes.html#romaine-salad", time: "20 mins" },
  ];

  renderTopPicks() {
    return (
      <div className="recommended-img">
        {this.topPicks.map((item) => (
          <div className="recommended-card" key={item.title}>
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <p className="text">{item.title}</p>
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
        <Navbar />

        <main>
          <h1 className="head-title">Salad</h1>

          <div className="salad text-container">
            <div className="content">
              <p className="check-out">
                Explore our website's full salad recipe collection. Log in or create your account to easily save, revisit and review all your favourite salad dishes!
              </p>
            </div>
          </div>

          <section className="recommended-section">
            <div className="heading-container">
              <h3 className="top-pick-heading">
                <span className="top-line">Top Picks</span>
                <span className="bottom-line">Main Course</span>
              </h3>
            </div>
            {this.renderTopPicks()}
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
                  <h1 className="more-section-title">SALAD</h1>
                  <p className="description-text">
                    For more best salad recipe ideas, Celestial's got you covered!
                  </p>
                  <button type="button" className="cta-button">MORE SALAD RECIPE</button>
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