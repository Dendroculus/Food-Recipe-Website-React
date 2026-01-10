import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoTrendingUp } from 'react-icons/io5';
import './HomeSearch.css';
import { allMainCourseRecipes } from '../../../pages/recipes/main-page/main-course/MainCourseData';
import { allAppetizerRecipes } from '../../../pages/recipes/main-page/appetizer/AppetizerData';
import { allDessertRecipes } from '../../../pages/recipes/main-page/dessert/DessertData';
import { allSaladRecipes } from '../../../pages/recipes/main-page/salad/SaladData';
import { allSpecialDietsRecipes } from '../../../pages/recipes/main-page/special-diets/SpecialDietsData';

/**
 * Search component
 *
 * Provides an inline search box with debounced live search over a combined
 * list of recipes, a dropdown showing results, trending suggestions and
 * category shortcuts. Supports an optional "hero" presentation mode via the
 * `isHero` prop.
 */
export default class Search extends React.Component {
    /**
     * Create the Search component instance.
     * @param {Object} props - React props.
     */
    constructor(props) {
        super(props);
        
        // 1. Combine all recipes first so we can use them for state initialization
        this.allRecipes = [
            ...allMainCourseRecipes,
            ...allAppetizerRecipes,
            ...allDessertRecipes,
            ...allSaladRecipes,
            ...allSpecialDietsRecipes
        ];

        this.state = {
            searchTerm: '',
            isFocused: false,
            searchResults: [],
            // 2. Initialize trending recipes with random picks
            trendingRecipes: this.getRandomRecipes(5)
        };

        /**
         * Debounce timeout id used for throttling searches.
         * @type {?number}
         */
        this.searchTimeout = null;
    }

    /**
     * getRandomRecipes
     *
     * Returns a small array of random recipes from the combined recipe list.
     * Used to populate the trending section with varied items.
     *
     * @param {number} count - Number of random recipes to return.
     * @returns {Array<Recipe>} Array of recipe objects (may be empty).
     */
    getRandomRecipes(count) {
        if (!this.allRecipes || this.allRecipes.length === 0) return [];
        // Create a copy to sort so we don't mutate the original list order
        const shuffled = [...this.allRecipes].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    /**
     * React lifecycle method.
     * Clears any pending debounce timer when the component unmounts.
     * @returns {void}
     */
    componentWillUnmount() {
        if (this.searchTimeout) clearTimeout(this.searchTimeout);
    }

    /**
     * handleSearchChange
     *
     * Debounced input change handler. Updates the `searchTerm` state and
     * schedules `performSearch` after a short delay.
     *
     * @param {Event} e - Input change event.
     * @returns {void}
     */
    handleSearchChange = (e) => {
        const target = e.target.value;
        this.setState({ searchTerm: target });

        if (this.searchTimeout) clearTimeout(this.searchTimeout);

        this.searchTimeout = setTimeout(() => {
            if (target.trim().length > 0) {
                this.performSearch(target);
            } else {
                this.setState({ searchResults: [] });
            }
        }, 300);
    };

    /**
     * handleSearchSubmit
     *
     * Form submit handler invoked on Enter. Navigates to the first search
     * result if any exist.
     *
     * @param {Event} e - Submit event.
     * @returns {void}
     */
    handleSearchSubmit = (e) => {
        e.preventDefault();
        const { searchResults } = this.state;
        if (searchResults.length > 0) {
            // "Links to my FOOD A" -> Go to the first match
            window.location.href = searchResults[0].href;
        }
    };

    /**
     * performSearch
     *
     * Filters the combined recipe list by matching the target term against
     * title, keywords, category, subcategory and tags. Updates `searchResults`
     * with up to 8 matches.
     *
     * @param {string} target - Search term to match.
     * @returns {void}
     */
    performSearch = (target) => {
        const results = this.allRecipes.filter((recipe) => {
            const t = target.toLowerCase();
            
            if (recipe.title.toLowerCase().includes(t)) return true;
            if (recipe.keywords && recipe.keywords.some((k) => k.toLowerCase().includes(t))) return true;
            if (recipe.category && recipe.category.toLowerCase().includes(t)) return true;
            
            if (recipe.subcategory) {
                if (Array.isArray(recipe.subcategory)) {
                    if (recipe.subcategory.some((sub) => sub.toLowerCase().includes(t))) return true;
                } else if (recipe.subcategory.toLowerCase().includes(t)) return true;
            }

            if (recipe.tags && recipe.tags.some((tag) => tag.toLowerCase().includes(t))) return true;

            return false;
        });

        this.setState({ searchResults: results.slice(0, 8) });
    }

    /**
     * handleSearchFocus
     *
     * Marks the search as focused to show the dropdown.
     * @returns {void}
     */
    handleSearchFocus = () => { this.setState({ isFocused: true }); }

    /**
     * handleSearchBlur
     *
     * Hides the dropdown shortly after blur to allow internal clicks to register.
     * @returns {void}
     */
    handleSearchBlur = () => {
        setTimeout(() => {
            this.setState({ isFocused: false });
        }, 200);
    }

    /**
     * handleTrendingClick
     *
     * When a trending recipe is clicked, fills the search input and performs
     * the search immediately.
     *
     * @param {string} recipeTitle - Title of the trending recipe to search for.
     * @returns {void}
     */
    handleTrendingClick = (recipeTitle) => {
        this.setState({ searchTerm: recipeTitle, isFocused: true }, () => {
            this.performSearch(recipeTitle);
        });
    };

    /**
     * handleCategoryClick
     *
     * Navigates to the category page for the selected category.
     *
     * @param {string} categoryPath - URL path segment for the category.
     * @returns {void}
     */
    handleCategoryClick = (categoryPath) => {
        window.location.href = `/recipes/main-page/${categoryPath}`;
    };

    /**
     * render
     *
     * Renders the search input and conditional dropdown. The dropdown shows
     * either search results or trending recipes and category shortcuts.
     *
     * @returns {JSX.Element}
     */
    render() {
        const { searchTerm, isFocused, searchResults, trendingRecipes } = this.state;
        const { isHero } = this.props;

        const showDropdown = isFocused;
        
        const categories = [
            { name: 'Appetizers', path: 'appetizer', img: '/assets/appetizers/appetizers_pfp.jpg'},
            { name: 'Main Course', path: 'main-course', img:  '/assets/main_course/main_course_pfp.jpg'},
            { name: 'Salad', path: 'salad', img: '/assets/salad/salad_pfp.jpg'},
            { name: 'Desserts', path: 'dessert', img: '/assets/desserts/desserts_pfp.jpg'},
            { name: 'Special Diets', path: 'special-diets', img: '/assets/special_diets/vegan/Vegan BG.jpg'}
        ];

        const showSearchResults = searchTerm.trim().length > 0 && searchResults.length > 0;
        const wrapperClass = isHero ? "search-wrapper hero-mode" : "search-wrapper";

        return (
        <div className={wrapperClass}>
            <div className="search-container">
            <form onSubmit={this.handleSearchSubmit}>
                <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    className="search-input"
                    id="home-search-input"
                    placeholder={isHero ? "Start searching..." : "Search Recipes"}
                    value={searchTerm}
                    onChange={this.handleSearchChange}
                    onFocus={this.handleSearchFocus}
                    onBlur={this.handleSearchBlur}
                />
                </div>
            </form>
            {showDropdown && (
                <div className="search-dropdown">
                {showSearchResults ?  (
                    <div className="search-results-section">
                    <h3 className="search-heading">Results</h3>
                        {searchResults.map((recipe, index) => (
                            <a key={`${recipe.title}-${index}`} href={recipe.href} className="search-result-item">
                            <img src={recipe.img} alt={recipe.title} className="result-img"/>
                            <div className="result-info">
                                <span className="result-title">{recipe.title}</span>
                                <div className="result-meta">
                                <span className="result-category">{recipe.category}</span>
                                <span className="result-time">{recipe.time}</span>
                                </div>
                            </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <>
                    <div className="trending-section">
                        <h3 className="search-heading">Trending Now</h3>
                        {/* 3. Render the RANDOM trending recipes */}
                        {trendingRecipes.map((recipe, index) => (
                        <div 
                            key={index} 
                            className="trending-item"
                            onMouseDown={() => this.handleTrendingClick(recipe.title)}>
                            <IoTrendingUp className="trending-icon" />
                            <span>{recipe.title}</span>
                        </div>
                        ))}
                    </div>

                    <div className="category-section">
                        <h3 className="search-heading">Categories</h3>
                        {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="category-item"
                            onMouseDown={() => this.handleCategoryClick(category.path)}>
                            <img src={category.img} alt={category.name} className="category-img"/>
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