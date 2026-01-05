import React, {Fragment} from 'react';
import StarRating from './StarRating';
import RecipeActionButtons from './RecipeActionButtons'; 
import './styles/RecipePage.css'
import { 
    FaRegClock, 
    FaFire, 
    FaCalendarCheck, 
    FaSignal, 
    FaCheckCircle, 
    FaTags, 
    FaClock
} from "react-icons/fa";

/**
 * RecipeSection displays the full details of a single recipe including:
 * - Header with title, meta, rating and image
 * - Ingredients list
 * - Instructions (one or more sections)
 * - Nutrition information and tags
 * - Embedded video (optional)
 * - Action buttons (print, save, share)
 *
 * Props:
 * - recipe: {
 *     id: string|number,
 *     title: string,
 *     meta: { prepTime?: string, cookTime?: string, waitTime?: string, totalTime?: string, difficulty?: string, rating?: number, reviews?: number },
 *     image: string,
 *     description: string,
 *     ingredients: string[],
 *     instructions: Array<{ section?: string, steps: string[] }>,
 *     nutrition: Object,
 *     tags: string[],
 *     video?: string
 *   }
 *
 * @extends React.Component
 */
export default class RecipeSection extends React.Component {
    /**
     * Render the recipe section layout and content.
     * @returns {JSX.Element} Recipe section markup.
     */
    render() {
        const { recipe } = this.props;
        return (
            <section id={recipe.id}>
                <header className="recipe-header">
                    <div className="recipe-container">
                    <div className="header-content">
                        <div>
                        <h1 className="recipe-title">{recipe.title}</h1>
                        <div className="recipe-meta">
                            <div className="meta-item">
                                <FaRegClock />
                                <span>{recipe.meta.prepTime} prep</span>
                            </div>
                            <div className="meta-item">
                                {recipe.meta.cookTime ? (
                                    <Fragment>
                                        <FaFire />
                                        <span>{recipe.meta.cookTime} cook</span>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <FaClock />
                                        <span>{recipe.meta.waitTime} wait</span>
                                    </Fragment>
                                )}
                            </div>
                            <div className="meta-item">
                                <FaCalendarCheck />
                                <span>{recipe.meta.totalTime} total</span>
                            </div>
                            <div className="meta-item">
                                <FaSignal />
                                <span>{recipe.meta.difficulty}</span>
                            </div>
                        </div>
                        <StarRating rating={recipe.meta.rating} reviews={recipe.meta.reviews} />
                        </div>
                        <div className="recipe-image">
                        <img src={recipe.image} alt={recipe.title} />
                        </div>
                    </div>
                    </div>
                </header>

                <div className="recipe-container">
                    <div className="main-content">
                    
                    <div className="left-column">
                        <div className="recipe-info-card">
                        <h2 className="title">Description</h2>
                        <p className="description">{recipe.description}</p>
                        </div>
                        <div className="recipe-info-card">
                        <div className="title">Ingredients</div>
                        <ul className="ingredients-list">
                            {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="ingredient-item">
                                <FaCheckCircle />
                                <span className="list">{ingredient}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>

                    <div className="middle-column">
                        <div className="recipe-info-card">
                        <h2 className="title">Instructions</h2>
                        {recipe.instructions.map((section, index) => (
                            <div key={index}>
                            {section.section && section.section !== "Instructions" && (
                                <h3 className="subtitle">{section.section}</h3>
                            )}
                            <ol className="instructions-list">
                                {section.steps.map((step, stepIndex) => (
                                <li key={stepIndex} className="instructions-item">
                                    <p>{step}</p>
                                </li>
                                ))}
                            </ol>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="recipe-info-card">
                            <h2 className="title">Nutrition Information</h2>
                            <p>Per serving</p>
                            <div className="nutrition-grid">
                                {Object.entries(recipe.nutrition).map(([key, value]) => (
                                <div key={key} className="nutrition-item">
                                    <div className="nutrition-value">{value}</div>
                                    <div className="nutrition-label">
                                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>

                        <div className="info-box">
                            <h3 className="info-title">
                                <FaTags /> Tags
                            </h3>
                            <div className="tags">
                                {recipe.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {recipe.video && (
                        <div className="youtube-video-container">
                            <iframe 
                            src={recipe.video} 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen 
                            loading="lazy"
                            ></iframe>
                        </div>
                        )}

                        <RecipeActionButtons recipe={recipe} />
                    </div>

                    </div>
                </div>
            </section>
        )
    }
}