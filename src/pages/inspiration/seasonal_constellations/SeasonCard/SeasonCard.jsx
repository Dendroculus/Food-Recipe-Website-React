import React from "react";
import "./SeasonCard.css";

/**
 * SeasonCard component displays a single season with image, highlights, and recipes.
 * Expects a `season` prop containing details like img, name, emoji, ingredients, recipes and cta.
 * @param {object} props
 * @param {object} props.season - Season data object
 * @extends React.Component
 */
export default class SeasonCard extends React.Component {
  /**
   * Render the season card showing image, highlights and call-to-action.
   * @returns {JSX.Element} Season card markup.
   */
  render() {
    const { season = {} } = this.props;
    return (
      <article className={`season-card ${season.className || ""}`}>
        <div className="season-card-image">
          <img src={season.img} alt={season.name} className="img-fluid" />
        </div>
        <div className="season-card-content">
          <div className="season-card-header">
            <span className="season-emoji">{season.emoji}</span>
            <h3 className="season-name">{season.name}</h3>
            {season.current && <span className="current-badge badge">Current Season</span>}
          </div>
          <div className="season-card-body">
            <p className="season-months">{season.months}</p>
            <p className="season-description">{season.description}</p>
            <div className="season-highlights">
              <h4>Featured Ingredients:</h4>
              <div className="ingredient-tags">
                {(season.ingredients || []).map((ingredient, i) => (
                  <span key={i} className="tag badge">{ingredient}</span>
                ))}
              </div>
            </div>
            <div className="recipe-preview">
              <h4>Popular Recipes:</h4>
              <ul className="recipe-list list-unstyled">
                {(season.recipes || []).map((recipe, i) => <li key={i}>{recipe}</li>)}
              </ul>
            </div>
          </div>
          <a href="/" onClick={(e) => e.preventDefault()} className="season-cta btn">{season.cta}</a>
        </div>
      </article>
    );
  }
}