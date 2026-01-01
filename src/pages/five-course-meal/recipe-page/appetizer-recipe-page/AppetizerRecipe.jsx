import React, {Fragment} from 'react';
import RecipeSection from '../RecipeSection';
import { breadRecipes, dipRecipes, fingerFoodRecipes } from './AppetizerRecipeData';
import RecipeNavBar from "../../../../components/navigations/RecipesNavBar"; 
import '../../styles/recipe.css';
import Footer from "../../../../components/footer/Footer";
import Modal from "../../../../components/modals/Modals";
import Search from "../../main-page/Search";

export default class AppetizerRecipe extends React.Component {
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
                <RecipeNavBar />
                <Search />
                <main>
                    <section className='bread'>
                        <h1 className="head-recipe">Bread-Based</h1>
                        {breadRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='dip'>
                        <h1 className="head-recipe">Dip-Based</h1>
                        {dipRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='finger-food'>
                        <h1 className="head-recipe">Finger Food</h1>
                        {fingerFoodRecipes.map(recipe => (
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
