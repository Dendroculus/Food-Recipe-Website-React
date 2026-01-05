import React from 'react';
import { FaPrint, FaBookmark, FaShareAlt } from "react-icons/fa";

export default class RecipeActionButtons extends React.Component {
    
    handlePrint = () => {
        const { recipe } = this.props;
        const section = document.getElementById(recipe.id);
        
        if (section) {
            section.classList.add('print-active');
            window.print();
            section.classList.remove('print-active');
        }
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