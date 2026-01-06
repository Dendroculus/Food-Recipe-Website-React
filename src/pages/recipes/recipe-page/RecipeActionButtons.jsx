import React from 'react';
import { FaPrint, FaBookmark, FaShareAlt } from 'react-icons/fa';
import { printRecipe, saveRecipe, shareRecipe } from '../../../components/utils/Actions';

/**
 * Renders action buttons for a recipe.
 * All logic is delegated to utility functions.
 *
 * @extends React.Component
 */
export default class RecipeActionButtons extends React.Component {
  /**
   * Print the current recipe.
   * @returns {void}
   */
  handlePrint = () => printRecipe(this.props.recipe);

  /**
   * Save the current recipe as a text file.
   * @returns {void}
   */
  handleSave = () => saveRecipe(this.props.recipe);

  /**
   * Share the current recipe or copy its link.
   * @returns {void}
   */
  handleShare = () => shareRecipe(this.props.recipe);

  /**
   * Render action buttons.
   * @returns {JSX.Element}
   */
  render() {
    return (
      <div className="action-buttons">
        <button
          className="recipe-btn recipe-btn-block"
          onClick={this.handlePrint}
        >
          <FaPrint /> Print Recipe
        </button>

        <button
          className="recipe-btn recipe-btn-outline recipe-btn-block"
          onClick={this.handleSave}
        >
          <FaBookmark /> Save Recipe
        </button>

        <button
          className="recipe-btn recipe-btn-outline recipe-btn-block"
          onClick={this.handleShare}
        >
          <FaShareAlt /> Share Recipe
        </button>
      </div>
    );
  }
}
