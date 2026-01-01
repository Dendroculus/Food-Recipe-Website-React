import React, {Fragment} from 'react';
import RecipeSection from '../RecipeSection';
import { chickenRecipes, beefRecipes, porkRecipes, lambRecipes, seafoodRecipes } from './MainCourseRecipeData';
import RecipeNavbar from '../../RecipesNavBar';
import '../../styles/recipe.css';
import Footer from "../../../home/Footer";
import Modal from "../../../home/Modals";
import Search from "../../main-page/Search";

export default class MainCourseRecipe extends React.Component {
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
                    <section className='chicken'>
                        <h1 className="head-recipe">Chicken</h1>
                        {chickenRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='beef'>
                        <h1 className="head-recipe">Beef</h1>
                        {beefRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='lamb'>
                        <h1 className="head-recipe">Lamb</h1>
                        {lambRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='pork'>
                        <h1 className="head-recipe">Pork</h1>
                        {porkRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='seafood'>
                        <h1 className="head-recipe">Seafood</h1>
                        {seafoodRecipes.map(recipe => (
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