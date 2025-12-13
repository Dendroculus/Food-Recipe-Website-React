import React from "react";
import "../../home/Home.css";
import "../styles/main.css";
import RecipeNavBar from "../RecipesNavBar"; 
import Footer from "../../home/Footer";

export default class SpecialDiets extends React.Component {
  topPicks = [
    { img: "/assets/special_diets/vegetarian/Apple Crumble.jpg", title: "Apple Crumble" },
    { img: "/assets/special_diets/vegetarian/Dal Tadka.jpg", title: "Dal Tadka" },
    { img: "/assets/special_diets/vegetarian/Ratatouille.jpg", title: "Ratatouille" },
  ];

  vegetarian = [
    { img: "/assets/special_diets/vegetarian/Apple Crumble.jpg", title: "Apple Crumble", href: "/five-course-meal/special-diets/recipe/vegetarian-recipes.html#apple-crumble", time: "55 mins" },
    { img: "/assets/special_diets/vegetarian/Cauliflower Steaks.jpg", title: "Cauliflower Steaks", href: "/five-course-meal/special-diets/recipe/vegetarian-recipes.html#cauliflower-steaks", time: "40 mins" },
    { img: "/assets/special_diets/vegetarian/Dal Tadka.jpg", title: "Dal Tadka", href: "/five-course-meal/special-diets/recipe/vegetarian-recipes.html#dal-tadka", time: "30 mins" },
    { img: "/assets/special_diets/vegetarian/Pea and Mint Soup.jpg", title: "Pea and Mint Soup", href: "/five-course-meal/special-diets/recipe/vegetarian-recipes.html#pea-and-mint-soup", time: "30 mins" },
    { img: "/assets/special_diets/vegetarian/Koshari.jpg", title: "Koshari", href: "/five-course-meal/recipes-html/salad-recipes.html#mediterranean-salad", time: "2 hr 30 mins" },
    { img: "/assets/special_diets/vegetarian/Ratatouille.jpg", title: "Ratatouille", href: "/five-course-meal/recipes-html/salad-recipes.html#mexican-salad", time: "1 hr" },
    { img: "/assets/special_diets/vegetarian/Sauteed fiddleheads.jpg", title: "Sauteed fiddleheads", href: "/five-course-meal/special-diets/recipe/vegetarian-recipes.html#sauteed-fiddleheads", time: "30 mins" },
    { img: "/assets/special_diets/vegetarian/Vegetarian spring roll.jpg", title: "Vegetarian spring roll", href: "/five-course-meal/special-diets/recipe/vegetarian-recipes.html#vegetarian-spring-roll", time: "50 mins" },
  ];

  vegan = [
    { img: "/assets/special_diets/vegan/Banana Bread.jpg", title: "Banana Bread", href: "/five-course-meal/special-diets/recipe/vegan-recipes.html#banana-bread", time: "3 hr" },
    { img: "/assets/special_diets/vegan/Carrot Turmeric Soup.webp", title: "Carrot Turmeric Soup", href: "/five-course-meal/special-diets/recipe/vegan-recipes.html#carrot-turmeric-soup", time: "55 mins" },
    { img: "/assets/special_diets/vegan/churros.jpg", title: "Churros", href: "/five-course-meal/special-diets/recipe/vegan-recipes.html#churros", time: "20 mins" },
    { img: "/assets/special_diets/vegan/Jacket Potato.jpg", title: "Jacket Potato", href: "/five-course-meal/special-diets/recipe/vegan-recipes.html#jacketpotato", time: "1 hr 45 mins" },
    { img: "/assets/special_diets/vegan/Mushroom Miso Risotto.jpg", title: "Mushroom Miso Risotto", href: "/five-course-meal/special-diets/recipe/vegan-recipes.html#miso-risotto", time: "45 mins" },
    { img: "/assets/special_diets/vegan/Mushroom Stew.jpg", title: "Mushroom Stew", href: "/five-course-meal/special-diets/recipe/vegan-recipes.html#mushroom-stew", time: "1 hr 20 mins" },
    { img: "/assets/special_diets/vegan/Sapo Tofu.jpg", title: "Claypot Tofu", href: "/five-course-meal/special-diets/recipe/vegan-recipes.html#claypot-tofu", time: "40 mins" },
    { img: "/assets/special_diets/vegan/Vegan Waffles.jpg", title: "Vegan Waffles", href: "/five-course-meal/special-diets/recipe/vegan-recipes.html#vegan-waffles", time: "15 mins" },
  ];

  gluten_free = [
    { img: "/assets/special_diets/gluten_free/Air-fried Root Vegetables.jpg", title: "Air-fried Root Vegetables", href: "/five-course-meal/special-diets/recipe/gluten-free-recipes.html#root-vegetables", time: "35 mins" },
    { img: "/assets/special_diets/gluten_free/Chicken Enchiladas.webp", title: "Chicken Enchiladas", href: "/five-course-meal/special-diets/recipe/gluten-free-recipes.html#chicken-enchiladas", time: "1 hr 5 mins" },
    { img: "/assets/special_diets/gluten_free/Chicken Fajitas.webp", title: "Chicken Fajitas", href: "/five-course-meal/special-diets/recipe/gluten-free-recipes.html#chicken-fajitas", time: "30 mins" },
    { img: "/assets/special_diets/gluten_free/Coconut Lime Chicken.jpg", title: "Coconut Lime Chicken", href: "/five-course-meal/special-diets/recipe/gluten-free-recipes.html#coconut-lime-chicken", time: "30 mins" },
    { img: "/assets/special_diets/gluten_free/Garlic Chicken.jpg", title: "Garlic Chicken", href: "/five-course-meal/special-diets/recipe/gluten-free-recipes.html#garlic-chicken", time: "35 mins" },
    { img: "/assets/special_diets/gluten_free/Gluten-free Pizza.jpg", title: "Gluten-free Pizza", href: "/five-course-meal/special-diets/recipe/gluten-free-recipes.html#pizza", time: "1 hr 40 mins" },
    { img: "/assets/special_diets/gluten_free/Labneh.jpg", title: "Labneh", href: "/five-course-meal/special-diets/recipe/gluten-free-recipes.html#labneh", time: "1 D 5 mins" },
    { img: "/assets/special_diets/gluten_free/Steamed Fish.jpg", title: "Steamed Fish", href: "/five-course-meal/special-diets/recipe/gluten-free-recipes.html#steamed-fish", time: "20 mins" },
  ];

  dairy_free = [
    { img: "/assets/special_diets/dairy_free/Caponata.jpg", title: "Caponata", href: "/five-course-meal/special-diets/recipe/dairy-free-recipes.html#caponata", time: "1 hr 45 mins" },
    { img: "/assets/special_diets/dairy_free/Dairy-Free Chicken.jpg", title: "Dairy-Free Chicken", href: "/five-course-meal/special-diets/recipe/dairy-free-recipes.html#dairy-free-chicken", time: "45 mins" },
    { img: "/assets/special_diets/dairy_free/Peanut Butter Noodle.webp", title: "Peanut Butter Noodle", href: "/five-course-meal/special-diets/recipe/dairy-free-recipes.html#peanut-noodle", time: "15 mins" },
    { img: "/assets/special_diets/dairy_free/Potstickers.jpg", title: "Potstickers", href: "/five-course-meal/special-diets/recipe/dairy-free-recipes.html#potstickers", time: "55 mins" },
    { img: "/assets/special_diets/dairy_free/Rendang Beef.jpg", title: "Rendang Beef", href: "/five-course-meal/special-diets/recipe/dairy-free-recipes.html#rendang", time: "1 hr 45 mins" },
    { img: "/assets/special_diets/dairy_free/Sesame Lemon Chicken.jpg", title: "Sesame Lemon Chicken", href: "/five-course-meal/special-diets/recipe/dairy-free-recipes.html#lemon-chicken", time: "25 mins" },
    { img: "/assets/special_diets/dairy_free/Southwestern Goulash.webp", title: "Southwestern Goulash", href: "/five-course-meal/special-diets/recipe/dairy-free-recipes.html#southwestern-goulash", time: "25 mins" },
    { img: "/assets/special_diets/dairy_free/Turkey Pot Pie.jpg", title: "Turkey Pot Pie", href: "/five-course-meal/special-diets/recipe/dairy-free-recipes.html#turkey-pie", time: "1 hr 20 mins" },
  ]

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
        <section className="all-recipe-section">
            <div className="all-recipes">
                <h3 class="all-recipes">V<span class="blink">e</span>ge<span class="long-blink">t</span>ar<span class="blink">i</span>an</h3>
            </div>
            <section className="recipe-section">
                {this.vegetarian.map((r) => (
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
            <section className="button">
                <div className="text-center mt-4">
                <button type="button" className="btn btn-secondary">More &gt;</button>
                </div>
            </section>
            <div className="all-recipes">
                <h3 class="all-recipes">V<span class="blink">e</span>g<span class="long-blink">a</span>n</h3>
            </div>
            <section className="recipe-section">
                {this.vegetarian.map((r) => (
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
            <section className="button">
                <div className="text-center mt-4">
                <button type="button" className="btn btn-secondary">More &gt;</button>
                </div>
            </section>
            <div className="all-recipes">
                <h3 class="all-recipes">G<span class="blink">lu</span>te<span class="long-blink">n F</span>r<span class="blink">e</span>e</h3>
            </div>
            <section className="recipe-section">
                {this.vegetarian.map((r) => (
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
            <section className="button">
                <div className="text-center mt-4">
                <button type="button" className="btn btn-secondary">More &gt;</button>
                </div>
            </section>
            <div className="all-recipes">
                <h3 class="all-recipes">D<span class="blink">a</span>ir<span class="long-blink">y</span> F<span class="blink">r</span>ee</h3>
            </div>
            <section className="recipe-section">
                {this.vegetarian.map((r) => (
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
            <section className="button">
                <div className="text-center mt-4">
                <button type="button" className="btn btn-secondary">More &gt;</button>
                </div>
            </section>
        </section>
    );
  }

  render() {
    return (
      <div className="page-wrapper">
        <RecipeNavBar />

        <main>
          <h1 className="head-title">Special Diets</h1>

          <div className="salad text-container">
            <div className="content">
              <p className="check-out">
                Explore our website's full special diets recipe collection. Log in or create your account to easily save, revisit and review all your favourite appetizer dishes!
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

          {this.renderAllRecipes()}

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