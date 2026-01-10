import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoTrendingUp } from 'react-icons/io5';
import './RecipeSearch.css';
import { allMainCourseRecipes } from '../../../pages/recipes/main-page/main-course/MainCourseData';
import { allAppetizerRecipes } from '../../../pages/recipes/main-page/appetizer/AppetizerData';
import { allDessertRecipes } from '../../../pages/recipes/main-page/dessert/DessertData';
import { allSaladRecipes } from '../../../pages/recipes/main-page/salad/SaladData';
import { allSpecialDietsRecipes } from '../../../pages/recipes/main-page/special-diets/SpecialDietsData';

/**
 * Search component provides an inline search box with live results and trending/category suggestions.
 *
 * State:
 * - searchTerm: string
 * - isFocused: boolean
 * - searchResults: Array<Object>
 *
 * The component searches across multiple recipe datasets imported at top.
 *
 * @extends React.Component
 */
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            isFocused: false,
            searchResults: []
        };

        /**
         * Combined list of all recipes to search through.
         * @type {Array<Object>}
         */
        this.allRecipes = [
            ...allMainCourseRecipes,
            ...allAppetizerRecipes,
            ...allDessertRecipes,
            ...allSaladRecipes,
            ...allSpecialDietsRecipes
        ];
    }

    /**
     * Handle changes to the search input and trigger search if appropriate.
     * @param {Event} e - Input change event.
     * @returns {void}
     */
    handleSearchChange = (e) => {
        const target = e.target.value;
        this.setState({ searchTerm: target });
        if (target.trim().length > 0) {
            this.performSearch(target);
        } else {
            this.setState({ searchResults: [] });
        }
    };

    /**
     * Perform a search across the combined recipe list matching title, keywords, category, subcategory, or tags.
     * Limits results to first 8 matches.
     * @param {string} target - Search query.
     * @returns {void}
     */
    performSearch = (target) => {
        const results = this.allRecipes.filter((recipe) => {

            if (recipe.title.toLowerCase().includes(target.toLowerCase())) return true;

            if (recipe.keywords && recipe.keywords.some((keyword) => keyword.toLowerCase().includes(target.toLowerCase()))) return true;

            if (recipe.category && recipe.category.toLowerCase().includes(target.toLowerCase())) return true;
            if (recipe.subcategory) {
                if (Array.isArray(recipe.subcategory)) {
                    if (recipe.subcategory.some((sub) => sub.toLowerCase().includes(target.toLowerCase()))) return true;
                } else if (recipe.subcategory.toLowerCase().includes(target.toLowerCase())) return true;
            }

            if (recipe.tags && recipe.tags.some((tag) => tag.toLowerCase().includes(target.toLowerCase()))) return true;

            return false;
        })

        this.setState({ searchResults: results.slice(0, 8) });
    }

    /**
     * Set focus state to true to show dropdown.
     * @returns {void}
     */
    handleSearchFocus = () => {
        this.setState({ isFocused: true });
    }

    /**
     * Blur handler hides dropdown after a short timeout to allow clicks.
     * @returns {void}
     */
    handleSearchBlur = () => {
        setTimeout(() => {
            this.setState({ isFocused: false });
        }, 200);
    }

    /**
     * Trigger a search using a trending term.
     * @param {string} searchTerm - Trending search term to execute.
     * @returns {void}
     */
    handleTrendingClick = (searchTerm) => {
        this.setState({ searchTerm: searchTerm }, () => {
        this.performSearch(searchTerm);
        });
    };

    /**
     * Navigate to a category path.
     * @param {string} categoryPath - Category path to navigate to.
     * @returns {void}
     */
    handleCategoryClick = (categoryPath) => {
        window.location.href = `/recipes/main-page/${categoryPath}`;
    };

    /**
     * Render the search input, dropdown results, trending searches and category shortcuts.
     * @returns {JSX.Element} Search UI markup.
     */
    render() {
        const { searchTerm, isFocused, searchResults } = this.state;
        const showDropdown = isFocused;
        const trendingSearches = [
            'Chicken Cordon Bleu',
            'Claypot Tofu',
            'Panacotta',
            'Palmiers',
            'Greek Gyros'
        ];
        const categories = [
            { 
                name: 'Appetizers', 
                path: 'appetizer', 
                img: '/assets/appetizers/appetizers_pfp.jpg'
            },
            { 
                name: 'Main Course', 
                path: 'main-course', 
                img:  '/assets/main_course/main_course_pfp.jpg'
            },
            { 
                name: 'Salad', 
                path: 'salad', 
                img: '/assets/salad/salad_pfp.jpg'
            },
            { 
                name: 'Desserts', 
                path: 'dessert', 
                img: '/assets/desserts/desserts_pfp.jpg'
            },
            { 
                name: 'Special Diets', 
                path: 'special-diets', 
                img: '/assets/special_diets/vegan/Vegan BG.jpg'
            }
        ];
        const showSearchResults = searchTerm.trim().length > 0 && searchResults.length > 0;
        return (
        <div className="recipe-search-wrapper">
            <div className="recipe-search-container">
            <form onSubmit={this.handleSearchSubmit}>
                <div className="recipe-search-input-wrapper">
                <FaSearch className="recipe-search-icon" />
                <input
                    type="text"
                    className="recipe-search-input"
                    placeholder="Search Recipes"
                    value={searchTerm}
                    onChange={this.handleSearchChange}
                    onFocus={this.handleSearchFocus}
                    onBlur={this.handleSearchBlur}
                />
                </div>
            </form>
            {showDropdown && (
                <div className="recipe-search-dropdown">
                {showSearchResults ?  (
                    <div className="recipe-search-results-section">
                    <h3 className="recipe-search-heading">Search Results</h3>
                        {searchResults.map((recipe) => (
                            <a 
                            key={recipe.id} 
                            href={recipe.href} 
                            className="recipe-search-result-item">
                            <img 
                                src={recipe.img} 
                                alt={recipe.title} 
                                className="recipe-result-img"/>
                            <div className="recipe-result-info">
                                <span className="recipe-result-title">{recipe.title}</span>
                                <div className="recipe-result-meta">
                                <span className="recipe-result-category">{recipe.category}</span>
                                <span className="recipe-result-time">{recipe.time}</span>
                                </div>
                            </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <>
                    <div className="recipe-trending-section">
                        <h3 className="recipe-search-heading">Trending Searches</h3>
                        {trendingSearches.map((item, index) => (
                        <div 
                            key={index} 
                            className="recipe-trending-item"
                            onClick={() => this.handleTrendingClick(item)}>
                            <IoTrendingUp className="recipe-trending-icon" />
                            <span>{item}</span>
                        </div>
                        ))}
                    </div>

                    <div className="recipe-category-section">
                        <h3 className="recipe-search-heading">Search by Category</h3>
                        {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="recipe-category-item"
                            onClick={() => this.handleCategoryClick(category.path)}>
                            <img 
                            src={category.img} 
                            alt={category.name}
                            className="recipe-category-img"/>
                            <span>{category.name}</span>
                        </div>
                        ))}
                    </div>
                    </>
                )}
                </div>
            )}
            </div>
        </div>
        );
    }
}