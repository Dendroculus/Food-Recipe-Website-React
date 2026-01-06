import React from 'react';
import './FeaturedSection.css';
import { spotlightRecipes, tips } from './FeaturedSectionData';
import { allMainCourseRecipes } from '../../recipes/main-page/main-course/MainCourseData';
import { allAppetizerRecipes } from '../../recipes/main-page/appetizer/AppetizerData';
import { allDessertRecipes } from '../../recipes/main-page/dessert/DessertData';
import { allSaladRecipes } from '../../recipes/main-page/salad/SaladData';
import { allSpecialDietsRecipes } from '../../recipes/main-page/special-diets/SpecialDietsData';

/**
 * FeaturedSection component displays a dynamic weekly featured recipe, kitchen tips, and a comparison table.
 * * Features:
 * - Randomly selects a recipe from all available data to display as "Recipe of the Week".
 * - Uses static data for tips and spotlight comparison table.
 * * @extends React.Component
 */
class FeaturedSection extends React.Component {
  /**
   * Initialize component and select a random recipe.
   * @param {object} props - React props.
   */
  constructor(props) {
    super(props);

    const allRecipes = [
        ...allMainCourseRecipes,
        ...allAppetizerRecipes,
        ...allDessertRecipes,
        ...allSaladRecipes,
        ...allSpecialDietsRecipes
    ];

    const randomRecipe = allRecipes.length > 0 
        ? allRecipes[Math.floor(Math.random() * allRecipes.length)] 
        : null;

    this.featuredRecipe = randomRecipe ? {
      image: randomRecipe.img,
      alt: randomRecipe.title,
      badgeLabel: 'Weekly Pick',
      title: 'Recipe of the Week',
      subtitle: randomRecipe.title,
      meta: `${randomRecipe.time} • ${randomRecipe.category || 'Special'} • ★ 4.9`,
      description: 'A quick star-worthy dish that balances savory and bright flavors — perfect for any meal.',
      href: randomRecipe.href,
    } : {
      // FALLBACK RECIPE IF NO RECIPES ARE AVAILABLE
      image: '/assets/main_course/Pork/Pork Chops Charcutiere Sauce.png',
      alt: 'Recipe of the Week',
      badgeLabel: 'Weekly Pick',
      title: 'Recipe of the Week',
      subtitle: 'Pork Chops Charcutiere',
      meta: '30 min • Medium • ★ 4.8',
      description: 'A quick star-worthy main that balances savory and bright flavors.',
      href: '#'
    };

    this.spotlightRecipes = spotlightRecipes;
    this.tips = tips;
  }

  /**
   * Render the featured section with the dynamic recipe card.
   * @returns {JSX.Element} The featured section markup.
   */
  render() {
    const { featuredRecipe, spotlightRecipes, tips } = this;

    return (
      <section className="before-footer-features container my-4" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="section-title">
          Featured — Recipe of the Week & Kitchen Tips
        </h2>

        <div className="row g-3">
          <div className="col-12 col-md-6">
            <article className="card feature-card h-100 text-decoration-none" aria-labelledby="weekly-recipe-title">
              <div className="row g-0 h-100 align-items-stretch">
                <div className="col-4 col-sm-4 col-md-4">
                  <div className="media-wrap">
                    <img
                      src={featuredRecipe.image}
                      alt={featuredRecipe.alt}
                      className="img-fluid rounded-start"
                      loading="lazy"
                      width="360"
                      height="240"
                    />
                    <span className="tag-badge" aria-hidden="true">
                      {featuredRecipe.badgeLabel}
                    </span>
                  </div>
                </div>

                <div className="col-8 col-sm-8 col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{featuredRecipe.title}</h3>
                    <h4 id="weekly-recipe-title" className="mb-1">
                      {featuredRecipe.subtitle}
                    </h4>
                    <p className="small text-muted mb-2">{featuredRecipe.meta}</p>
                    <p className="card-text">{featuredRecipe.description}</p>
                    <div className="d-flex gap-2 mt-2">
                      <a href={featuredRecipe.href} className="btn btn-sm btn-success">
                        View Recipe
                      </a>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="col-12 col-md-6">
            <div className="card h-100 spotlight-card">
              <div className="card-body">
                <h3 className="card-title">Kitchen Tips & Pantry Checklist</h3>

                <ul className="tips-list">
                  {tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>

                <details className="mt-2 nutrition-details">
                  <summary className="summary-btn">Quick Compare (click to open)</summary>
                  <div className="table-responsive">
                    <table className="table table-sm align-middle nutrition-table mb-0">
                      <caption className="visually-hidden">Quick comparison of featured recipes</caption>
                      <colgroup>
                        <col style={{ width: '46%' }} />
                        <col style={{ width: '18%' }} />
                        <col style={{ width: '18%' }} />
                        <col style={{ width: '18%' }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">Recipe</th>
                          <th scope="col">Prep</th>
                          <th scope="col">Difficulty</th>
                          <th scope="col">Calories</th>
                        </tr>
                      </thead>
                      <tbody>
                        {spotlightRecipes.map((recipe, index) => (
                          <tr key={index}>
                            <th scope="row">{recipe.name}</th>
                            <td data-label="Prep">{recipe.prep}</td>
                            <td data-label="Difficulty">{recipe.difficulty}</td>
                            <td className="num" data-label="Calories">
                              {recipe.calories}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </details>

                <p className="small text-muted mt-3 mb-0">Want more? Use the search above or subscribe to get weekly recipes in your inbox.</p>
                <div className="spotlight-cta">
                  <a href="#home-search-input" className="btn-ghost">
                    Get the checklist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedSection;