import React from 'react';
import RecipeSection from './RecipeSection';
import RecipeNavBar from "../../../components/navigations/RecipesNavBar"; 
import '../styles/recipe.css';
import Footer from "../../../components/footer/Footer";
import Modal from "../../../components/modals/Modals";
import Search from "../main-page/Search";

export default class RecipePageLayout extends React.Component {
    componentDidMount() {
        this.handleScroll();
    }

    componentDidUpdate() {
        this.handleScroll();
    }

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

    render() {
        const { categories } = this.props;

        return (
            <div className='recipe-page-wrapper'>
                <RecipeNavBar />
                <Search />
                <main>
                    {categories.map((category, index) => (
                        // We add an ID here so your handleScroll function can find it
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