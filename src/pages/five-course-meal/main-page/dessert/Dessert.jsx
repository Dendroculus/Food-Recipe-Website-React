import React, {Fragment} from "react";
import "../../../home/Home.css";
import "../../styles/main.css";
import RecipeNavBar from "../../../../components/navigations/RecipesNavBar"; 
import Footer from "../../../../components/footer/Footer";
import Modal from "../../../../components/modals/Modals";
import RecipeCard from "../RecipeCard";
import TopPicks from "../TopPicks";
import { FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart} from "react-icons/fa";
import FilterRecipe from '../FilterRecipe';
import { cake, pastry, pudding, tiramisu, allDessertRecipes } from './DessertData';
import Search from "../Search";

export default class Dessert extends React.Component {
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
      {img: "/assets/desserts/Cake/Blueberry Heaven on Earth Cake.jpg", title: "Blueberry Heaven on Earth Cake"},
      {img: "/assets/desserts/Cake/Italian Lemon Ricotta Cake.jpeg", title: "Italian Lemon Ricotta Cake"},
      {img: "/assets/desserts/Tiramisu/Oreo Tiramisu Trifle.webp", title: "Oreo Tiramisu Trifle"},
      {img: "/assets/desserts/Tiramisu/Pumpkin Chai Tiramisu.webp", title: "Pumpkin Chai Tiramisu"},
      {img:  "/assets/desserts/Cake/Chocolate Sheet Cake.jpg", title: "Chocolate Sheet Cake"},
      {img: "/assets/desserts/Cake/Boston Cream Poke Cake.jpg", title: "Boston Cream Poke Cake"},
    ];
    this.toggleSave = this.toggleSave.bind(this);
    this.paginate = this.paginate.bind(this);
    this.handleHeartTap = this.handleHeartTap.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.scrollIntoAllRecipes = this.scrollIntoAllRecipes.bind(this);
  }

  setFilter(filter) {
    this.setState({
      activeFilter: filter,
      currentPage: 1
    });
  }

  getFilteredRecipes() {
    const { activeFilter } = this.state;
    if (activeFilter === 'all') return allDessertRecipes;
    return allDessertRecipes.filter((recipe) => recipe.tags && recipe.tags.includes(activeFilter) ? true : false)
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
    this.scrollIntoAllRecipes();
  }

  scrollIntoAllRecipes() {
    const allRecipesTitle = document.querySelector('.all-recipes');
    if (allRecipesTitle) {
        allRecipesTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
  }

  renderCategoryRecipes() {
    return (
      <Fragment>
        <RecipeCard recipes={cake} title="Cake" />
        <RecipeCard recipes={tiramisu} title="Tiramisu" />
        <RecipeCard recipes={pudding} title="Pudding" />
        <RecipeCard recipes={pastry} title="Pastry" />
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
          <h1 class="main-title">Dessert</h1>
          <section class="dessert-description">
              <div class="dessert-summary-content">
                  <p class="food-definition">Dessert, a delectable treat enjoyed after a meal, is the sweet finale that brings joy to our taste buds.</p>
              </div>
              <button class="cta-button" onClick={() => this.scrollIntoAllRecipes()}>
                <i class="bi bi-bookmark-heart"></i>
                &nbsp;
                Save Your Favorites
              </button>
          </section>

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
        <Modal />
      </div>
    );
  }
}