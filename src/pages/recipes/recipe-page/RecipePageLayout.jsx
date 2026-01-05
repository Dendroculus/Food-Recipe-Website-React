import React from 'react';
import RecipeSection from './RecipeSection';
import RecipeNavBar from "../../../components/navigations/RecipesNavBar"; 
import './styles/RecipePage.css';
import Footer from "../../../components/footer/Footer";
import Modal from "../../../components/modals/Modals";
import Search from "../main-page/Search";

/**
 * RecipePageLayout renders a full recipe page composed of multiple categories/sections.
 * It handles scrolling to hash fragments on mount and update.
 *
 * Props:
 * - categories: Array<{
 *     id: string,
 *     title: string,
 *     data: Array<recipe>
 *   }>
 *
 * @extends React.Component
 */
export default class RecipePageLayout extends React.Component {
    componentDidMount() {
        this.handleScroll();
    }

    componentDidUpdate() {
        this.handleScroll();
    }

    /**
     * Scroll to an element based on the current URL hash.
     * If no hash present, scroll to top.
     * @returns {void}
     */
    handleScroll = () => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }

    /**
     * Render the recipe page layout including navigation, search, sections, footer and modals.
     * @returns {JSX.Element} Page markup.
     */
    render() {
        const { categories } = this.props;

        return (
            <div className='recipe-page-wrapper'>
                <RecipeNavBar />
                <Search />
                <main>
                    {categories.map((category, index) => (
                        <section key={index} id={category.id} className={category.id}>
                            <h1 className="head-recipe">{category.title}</h1>
                            {category.data.map(recipe => (
                                <RecipeSection key={recipe.id} recipe={recipe} />
                            ))}
                        </section>
                    ))}
                </main>
                <Footer />
                <Modal />
            </div>
        )
    }
}