import React, { Fragment } from "react";
import PropTypes from "prop-types";
import RecipeNavBar from "../../../components/navigations/RecipesNavBar"; 
import Footer from "../../../components/footer/Footer";
import Modal from "../../../components/modals/Modals";
import TopPicks from "./TopPicks";
import FilterRecipe from './FilterRecipe';
import Search from "./Search";
import { FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./styles/MainPage.css";
import "./styles/RecipeCard.css";
import "./styles/Pagination.css";
import "../../home/Home.css";

class MainPageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedRecipes: [],
      currentPage: 1,
      recipesPerPage: 8,
      tappedHeart: null,
      activeFilter: 'all'
    };
  }

  setFilter = (filter) => {
    this.setState({ activeFilter: filter, currentPage: 1 });
  }

  getFilteredRecipes() {
    const { allRecipes } = this.props;
    const { activeFilter } = this.state;
    if (activeFilter === 'all') return allRecipes;
    return allRecipes.filter((recipe) => recipe.tags && recipe.tags.includes(activeFilter));
  }

  handleHeartTap = (recipeTitle) => {
    this.toggleSave(recipeTitle);
    this.setState({ tappedHeart: recipeTitle });
    setTimeout(() => this.setState({ tappedHeart: null }), 300);
  }

  toggleSave = (recipeTitle) => {
    this.setState((state) => {
      const { savedRecipes } = state;
      if (savedRecipes.includes(recipeTitle)) {
        return { savedRecipes: savedRecipes.filter(title => title !== recipeTitle) };
      } else {
        return { savedRecipes: [...savedRecipes, recipeTitle] };
      }
    });
  }

  scrollToRecipes = () => {
    const allRecipesTitle = document.querySelector('.all-recipes');
    if (allRecipesTitle) allRecipesTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    this.scrollToRecipes();
  }

  renderAllRecipes() {
    const { currentPage, recipesPerPage, activeFilter, savedRecipes } = this.state;
    const filteredRecipes = this.getFilteredRecipes();
    
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const filterNames = {
      all: "All",
      winter: "Winter",
      spring: "Spring",
      summer: "Summer",
      fall: "Fall",
      christmas: "Christmas",
      thanksgiving: "Thanksgiving",
      valentine: "Valentine",
      easter: "Easter",
      halloween: "Halloween",
    };

    const activeFilterName = filterNames[activeFilter] || activeFilter;

    return (
      <Fragment>
        <FilterRecipe activeFilter={activeFilter} onChangeFilter={this.setFilter} />

        {activeFilter !== 'all' && currentRecipes.length === 0 && (
          <h2 className="no-recipes-header">
            No current {activeFilterName.toLowerCase()} recipes!
          </h2>
        )}

        <section className="recipe-section">
          {currentRecipes.map((r) => {
            const isSaved = savedRecipes.includes(r.title);
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
                      {r.href ? <Link to={r.href}>{r.title}</Link> : <span>{r.title}</span>}
                      <p>{r.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
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
    const { title, description, topPicks, children, type, customHeader } = this.props;
    const bgClass = type || title.toLowerCase().replace(' ', '');

    return (
      <div className="page-wrapper recipe-page">
        <RecipeNavBar />
        <Search />
        <main>
          <h1 className="head-title">{title}</h1>
          
          {/* Logic: If customHeader exists, render it (passing scrollToRecipes). Otherwise, render standard header */}
          {customHeader ? customHeader(this.scrollToRecipes) : (
            <div className={`${bgClass} text-container`}>
              <div className="content">
                <p className="check-out">{description}</p>
              </div>
            </div>
          )}

          <TopPicks topPicks={topPicks} title={title} />

          {children}

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
                  <h1 className="more-section-title">{title.toUpperCase()}</h1>
                  <p className="description-text">
                    For more best {title.toLowerCase()} recipe ideas, Celestial's got you covered!
                  </p>
                  <button type="button" className="cta-button">MORE {title.toUpperCase()} RECIPE</button>
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

MainPageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  allRecipes: PropTypes.array.isRequired,
  topPicks: PropTypes.array.isRequired,
  children: PropTypes.node,
  type: PropTypes.string,
  customHeader: PropTypes.func, 
};

export default MainPageLayout;