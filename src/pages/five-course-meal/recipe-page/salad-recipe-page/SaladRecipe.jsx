import React, {Fragment} from 'react';
import RecipeSection from '../RecipeSection';
import { lettuceBasedRecipes, mixedVegetableRecipes, specialtySaladRecipes } from './SaladRecipeData';
import RecipeNavbar from '../../RecipesNavBar';
import '../../styles/recipe.css';
import Footer from "../../../home/Footer";
import Modal from "../../../home/Modals";
import Search from "../../main-page/Search";

export default class SaladRecipe extends React.Component {
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
        return (
            <Fragment>
                <RecipeNavbar />
                <Search />
                <main>
                    <section className='lettuce-based'>
                        <h1 className="head-recipe">Lettuce-Based</h1>
                        {lettuceBasedRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='mixed-vegetable'>
                        <h1 className="head-recipe">Mixed Vegetable</h1>
                        {mixedVegetableRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='specialty'>
                        <h1 className="head-recipe">Specialty</h1>
                        {specialtySaladRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                </main>
                <Footer />
                <Modal />
            </Fragment>
        )
    }
}
