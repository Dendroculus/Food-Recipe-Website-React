import React, {Fragment} from 'react';
import RecipeSection from '../RecipeSection';
import { cakeRecipes, pastryRecipes, puddingRecipes, tiramisuRecipes } from './DessertRecipeData';
import RecipeNavbar from '../../RecipesNavBar';
import '../../styles/recipe.css';
import Footer from "../../../home/Footer";
import Modal from "../../../home/Modals";
import Search from "../../main-page/Search";

export default class DessertRecipe extends React.Component {
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
                    <section className='cake'>
                        <h1 className="head-recipe">Cake</h1>
                        {cakeRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='pastry'>
                        <h1 className="head-recipe">Pastry</h1>
                        {pastryRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='pudding'>
                        <h1 className="head-recipe">Pudding</h1>
                        {puddingRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='tiramisu'>
                        <h1 className="head-recipe">Tiramisu</h1>
                        {tiramisuRecipes.map(recipe => (
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
