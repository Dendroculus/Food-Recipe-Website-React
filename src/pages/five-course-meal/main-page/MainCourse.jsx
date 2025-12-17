import React, {Fragment} from "react";
import "../../home/Home.css";
import "../styles/main.css";
import RecipeNavBar from "../RecipesNavBar"; 
import Footer from "../../home/Footer";
import RecipeCard from "./RecipeCard";
import TopPicks from "./TopPicks";
import { FaCanadianMapleLeaf, FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart, FaSnowflake, FaLeaf, FaSun, FaGift } from "react-icons/fa";
import { PiRabbit } from "react-icons/pi";
import { GiChickenOven, GiPumpkinLantern } from "react-icons/gi";
import { chicken, beef, lamb, pork, seafood, allMainCourseRecipes } from './MainCourseData';
import Search from "./Search";

export default class MainCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedRecipes: [],
      currentPage: 1,
      recipesPerPage: 8,
      tappedHeart: null,
      activeFilter: 'all'
    };
    this.topPicks = [
        { img: "/assets/main_course/Chicken/Chicken Cordon Bleu.png", title: "Chicken Cordon Bleu" },
        { img: "/assets/main_course/Seafood/Salmon Steak in Coconut Milk with Peas.png", title: "Salmon Steak" },
        { img: "/assets/main_course/Seafood/Shrimp Avocado Cocktail.png", title: "Shrimp Avocado Cocktail" },
        { img: "/assets/main_course/Pork/Tonkatsu.jpg", title: "Tonkatsu", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "40 mins" },
        { img: "/assets/main_course/Seafood/Lobster Thermidor.jpg", title: "Lobster Thermidor", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "40 mins" },
        { img: "/assets/main_course/Pork/Crispy Pork Schnitzel.png", title: "Crispy Pork Schnitzel", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "35 mins" },
        { img: "/assets/main_course/Pork/Pork Eggs Benedict.jpg", title: "Pulled Pork Eggs Benedict", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "35 mins" },
        { img: "/assets/main_course/Lamb/Greek Gyros.jpg", title: "Greek Gyros", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 10 mins" },
        { img: "/assets/main_course/Beef/Beef Teppanyaki.jpg", title: "Beef Teppanyaki", href: "/five-course-meal/recipes-html/main-course-recipes.html#chicken-cordon-bleu", time: "1 hr 30 mins" },
    ];
    this.toggleSave = this.toggleSave.bind(this);
    this.paginate = this.paginate.bind(this);
    this.handleHeartTap = this.handleHeartTap.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(filter) {
    this.setState({
      activeFilter: filter,
      currentPage: 1
    });
  }

  getFilteredRecipes() {
    const { activeFilter } = this.state;
    if (activeFilter === 'all') return allMainCourseRecipes;
    return allMainCourseRecipes.filter((recipe) => recipe.tags && recipe.tags.includes(activeFilter) ? true : false)
  }

  handleHeartTap(recipeTitle) {
    this.toggleSave(recipeTitle);
    this.setState({tappedHeart: recipeTitle});
    setTimeout(() => {
      this.setState({tappedHeart: null});
    }, 300);
  }

  toggleSave(recipeTitle) {
    this.setState((state) => {
      const { savedRecipes } = state;
      if (savedRecipes.includes(recipeTitle)) {
        return {
          savedRecipes: savedRecipes.filter(title => title !== recipeTitle)
        };
      } else {
        return {
          savedRecipes: [...savedRecipes, recipeTitle]
        };
      }
    });
  }

  isRecipesSaved(recipeTitle) {
    return this.state.savedRecipes.includes(recipeTitle);
  }

  paginate(pageNumber) {
    this.setState({currentPage: pageNumber});
    const allRecipesTitle = document.querySelector('.all-recipes');
    if (allRecipesTitle) {
      allRecipesTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  renderCategoryRecipes() {
    return (
      <Fragment>
        <RecipeCard recipes={chicken} title="Chicken" />
        <RecipeCard recipes={beef} title="Beef" />
        <RecipeCard recipes={lamb} title="Lamb" />
        <RecipeCard recipes={pork} title="Pork" />
        <RecipeCard recipes={seafood} title="Seafood" />
      </Fragment>
    )
  }

  renderAllRecipes() {
    const { currentPage, recipesPerPage, activeFilter } = this.state;
    const filteredRecipes = this.getFilteredRecipes();
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <Fragment>
        <div className="filter-container">
          <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
            onClick={() => this.setFilter('all')}>
              All Recipes
          </button>
          <div className="filter-divider"></div>
          <h4 className="filter-category-title">Seasons</h4>
          <button className={`filter-btn ${activeFilter === 'winter' ? 'active': ''}`} 
            onClick={() => this.setFilter('winter')}>
              <FaSnowflake /> Winter
          </button>
          <button className={`filter-btn ${activeFilter === 'spring' ? 'active': ''}`} 
            onClick={() => this.setFilter('spring')}>
              <FaLeaf /> Spring
          </button>
          <button className={`filter-btn ${activeFilter === 'summer' ? 'active': ''}`} 
            onClick={() => this.setFilter('summer')}>
              <FaSun /> Summer
          </button>
          <button className={`filter-btn ${activeFilter === 'fall' ? 'active': ''}`} 
            onClick={() => this.setFilter('fall')}>
              <FaCanadianMapleLeaf /> Fall
          </button>

          <div className="filter-divider"></div>

          <h4 className="filter-category-title">Events</h4>

          <button className={`filter-btn ${activeFilter === 'christmas' ? 'active': ''}`} 
              onClick={() => this.setFilter('christmas')}>
              <FaGift /> Christmas
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'thanksgiving' ? 'active' : ''}`}
            onClick={() => this.setFilter('thanksgiving')}>
            <GiChickenOven /> Thanksgiving
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'valentine' ? 'active' : ''}`}
            onClick={() => this.setFilter('valentine')}>
            <FaHeart /> Valentine
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'easter' ? 'active' : ''}`}
            onClick={() => this.setFilter('easter')}>
            <PiRabbit /> Easter
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'halloween' ? 'active' : ''}`}
            onClick={() => this.setFilter('halloween')}>
            <GiPumpkinLantern /> Halloween
          </button>
        </div>
        <section className="recipe-section">
          {currentRecipes.map((r) => {
            const isSaved = this.isRecipesSaved(r.title);
            return (
            <div className="card-container" key={r.title}>
              <div className="card">
                <div className="card-image">
                  <img src={r.img} alt={r.title} />
                  <span 
                    className="fa-heart"
                    data-tooltip={isSaved ? "Recipe Saved" : "Save Recipe"}
                    onClick={() => this.handleHeartTap(r.title)}
                    role="button">
                    {isSaved ? <FaHeart /> : <FaRegHeart />}
                  </span>
                </div>
                <div className="card-content">
                  <div className="text">
                    <a href={r.href}>{r.title}</a>
                    <p>{r.time}</p>
                  </div>
                </div>
              </div>
            </div>
          )
          })}
        </section>
        <div className="pagination-container">
          {currentPage > 1 && (
            <button className="pagination-btn pagination-prev" onClick={() => this.paginate(currentPage - 1)}>
              <FaChevronLeft />
            </button>
          )}

          {pageNumbers.map((number) => (
            <button key={number} className={`pagination-btn ${currentPage === number ? 'active' : ''}`} onClick={() => this.paginate(number)}>
              {number}
            </button>
          ))}

          {currentPage < totalPages && (
            <button className="pagination-btn pagination-next" onClick={() => this.paginate(currentPage + 1)}>
              <FaChevronRight />
            </button>
          )}
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <div className="page-wrapper">
        <RecipeNavBar />

        <Search />
        <main>
          <h1 className="head-title">Main Course</h1>

          <div className="main text-container">
            <div className="content">
              <p className="check-out">
                Explore our website's full main course recipe collection. Log in or create your account to easily save, revisit and review all your favourite main-course dishes!
              </p>
            </div>
          </div>

          <TopPicks topPicks={this.topPicks} title="Main Course" />

          {this.renderCategoryRecipes()}

          <div className="all-recipes">
            <h3 className="all-recipes">
              A<span className="blink">l</span>l R<span className="long-blink">e</span>ci<span className="blink">p</span>es
            </h3>
          </div>

          {this.renderAllRecipes()}

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