import React from 'react';
import { FaPrint, FaBookmark, FaShareAlt } from "react-icons/fa";

/**
 * RecipeActionButtons component provides actions for a recipe:
 * - Print the recipe section
 * - Save the recipe to a downloadable text file
 * - Share the recipe via Web Share API or copy link
 *
 * Props:
 * - recipe: {
 *     id: string|number,
 *     title: string,
 *     meta: { prepTime?: string, cookTime?: string, totalTime?: string, difficulty?: string },
 *     description: string,
 *     ingredients: string[],
 *     instructions: Array<{ section?: string, steps: string[] }>
 *   }
 *
 * @extends React.Component
 */
export default class RecipeActionButtons extends React.Component {
    
    /**
     * Print the recipe section by id.
     * Adds a temporary 'print-active' class to the section element before invoking window.print().
     * @returns {void}
     */
    handlePrint = () => {
        const { recipe } = this.props;
        const section = document.getElementById(recipe.id);
        
        if (section) {
            section.classList.add('print-active');
            window.print();
            section.classList.remove('print-active');
        }
    }

    /**
     * Save the recipe as a plain text file.
     * Builds a text representation of the recipe (meta, description, ingredients, instructions)
     * and triggers a download using a temporary anchor element.
     * @returns {void}
     */
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
    return `\n[${section.section || 'Steps'}]\n` + 
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

    /**
     * Share the current page or recipe using the Web Share API when available.
     * Falls back to copying the current URL to clipboard and notifying the user.
     * @returns {void}
     */
    handleShare = () => {
        const { recipe } = this.props;

        const shareData = {
            title: recipe.title,
            text: `Check out this recipe ${recipe.title}`,
            url: window.location.href,
        };

        if (navigator.share) {
            navigator.share(shareData);
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!"); 
        }
    }

    /**
     * Render action buttons for print, save and share.
     * @returns {JSX.Element} Buttons markup.
     */
    render() {
        return (
            <div className="action-buttons">
                <button className="recipe-btn recipe-btn-block" onClick={this.handlePrint}>
                    <FaPrint /> Print Recipe
                </button>
                <button className="recipe-btn recipe-btn-outline recipe-btn-block" onClick={this.handleSave}>
                    <FaBookmark /> Save Recipe
                </button>
                <button className="recipe-btn recipe-btn-outline recipe-btn-block" onClick={this.handleShare}>
                    <FaShareAlt /> Share Recipe
                </button>
            </div>
        );
    }
}