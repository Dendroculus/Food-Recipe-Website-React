import React from 'react';
import StarRating from './StarRating';
import '../styles/recipe.css'
import { 
    FaRegClock, 
    FaFire, 
    FaCalendarCheck, 
    FaSignal, 
    FaCheckCircle, 
    FaTags, 
    FaPrint, 
    FaBookmark
} from "react-icons/fa";

export default class RecipeSection extends React.Component {
    handlePrint = () => {
        const { recipe } = this.props;
        const section = document.getElementById(recipe.id);
        
        section.classList.add('print-active');

        window.print();

        section.classList.remove('print-active');
    }

    handleSave = () => {
        const { recipe } = this.props;
        const content = `
Recipe: ${recipe.title}
--------------------------------------------------------------------------------------------------------------------------------
Prep Time: ${recipe.meta.prepTime}
Cook Time: ${recipe.meta.cookTime}
Total Time: ${recipe.meta.totalTime}
Difficulty: ${recipe.meta.difficulty}
--------------------------------------------------------------------------------------------------------------------------------
DESCRIPTION:
${recipe.description}
--------------------------------------------------------------------------------------------------------------------------------
INGREDIENTS:
${recipe.ingredients.map(ing => `- ${ing}`).join('\n')}
--------------------------------------------------------------------------------------------------------------------------------
INSTRUCTIONS:
${recipe.instructions.map(section => {
    return `\n[${section.title || 'Steps'}]\n` + 
        section.steps.map((step, i) => `${i + 1}. ${step}`).join('\n');
}).join('\n')}
--------------------------------------------------------------------------------------------------------------------------------
        `;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${recipe.title.replace(/\s+/g, '_')}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

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
                            <FaFire />
                            <span>{recipe.meta.cookTime} cook</span>
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
                        <StarRating rating={recipe.rating} reviews={recipe.meta.reviews} />
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

                        <div className="action-buttons">
                        <button className="btn btn-block" onClick={this.handlePrint}>
                            <FaPrint /> Print Recipe
                        </button>
                        <button className="btn btn-outline btn-block" onClick={this.handleSave}>
                            <FaBookmark /> Save Recipe
                        </button>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
        )
    }
}