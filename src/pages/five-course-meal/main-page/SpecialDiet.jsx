import React, {Fragment} from "react";
import "../../home/Home.css";
import "../styles/main.css";
import RecipeNavBar from "../RecipesNavBar"; 
import Footer from "../../home/Footer";
import Modal from "../../home/Modals";
import RecipeCard from "./RecipeCard";
import TopPicks from "./TopPicks";
import { FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart} from "react-icons/fa";
import FilterRecipe from './FilterRecipe';
import { dairyFree, glutenFree, vegan, vegetarian, allSpecialDietsRecipes } from './SpecialDietsData';
import Search from "./Search";

export default class Salad extends React.Component {
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
      {img: "/assets/special_diets/vegetarian/Pea and Mint Soup.jpg", title: "Pea and Mint Soup"},
      {img: "/assets/special_diets/vegetarian/Ratatouille.jpg", title: "Ratatouille"},
      {img: "/assets/special_diets/vegetarian/Cauliflower Steaks.jpg", title: "Cauliflower Steaks"},
      {img: "/assets/special_diets/vegan/Sapo Tofu.jpg", title: "Sapo Tofu"},
      {img: "/assets/special_diets/vegan/Mushroom Miso Risotto.jpg", title: "Mushroom Miso Risotto"},
      {img: "/assets/special_diets/gluten_free/Steamed Fish.jpg", title: "Steamed Fish"},
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
    if (activeFilter === 'all') return allSpecialDietsRecipes;
    return allSpecialDietsRecipes.filter((recipe) => recipe.tags && recipe.tags.includes(activeFilter) ? true : false)
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
        <RecipeCard recipes={dairyFree} title="Dairy Free" />
        <RecipeCard recipes={glutenFree} title="Gluten Free" />
        <RecipeCard recipes={vegan} title="Vegan" />
        <RecipeCard recipes={vegetarian} title="Vegetarian" />
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
        <FilterRecipe 
          activeFilter={activeFilter} 
          onChangeFilter={this.setFilter} />
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
          <h1 class="head-title">Special Diets</h1>
          <div class="diet text-container">
              <div class="content">
                  <p class="check-out">Explore our website's full appetizer recipe collection. Log in or create your account to easily save, revisit and review all your favourite appetizer dishes!</p>
              </div>
          </div>

          <TopPicks topPicks={this.topPicks} title="Dessert" />

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
                  <h1 className="more-section-title">SPECIAL DIETS</h1>
                  <p className="description-text">
                    For more best special diets recipe ideas, Celestial's got you covered!
                  </p>
                  <button type="button" className="cta-button">MORE SPECIAL DIETS RECIPE</button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <Modal />
      </div>
    );
  }
}