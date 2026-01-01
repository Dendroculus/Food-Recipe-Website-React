import React, {Fragment} from 'react';
import RecipeSection from '../RecipeSection';
import { dairyfreerecipes, glutenFreeRecipes, veganRecipes, vegetarianRecipes } from './SpecialDietsRecipeData';
import RecipeNavBar from "../../../../components/navigations/RecipesNavBar"; 
import '../../styles/recipe.css';
import Footer from "../../../../components/footer/Footer";
import Modal from "../../../../components/modals/Modals";
import Search from "../../main-page/Search";

export default class SpecialDietsRecipe extends React.Component {
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
                    <section className='vegetarian'>
                        <h1 className="head-recipe">Vegetarian</h1>
                        {vegetarianRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='vegan'>
                        <h1 className="head-recipe">Vegan</h1>
                        {veganRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='gluten-free'>
                        <h1 className="head-recipe">Gluten Free</h1>
                        {glutenFreeRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                    <section className='dairy-free'>
                        <h1 className="head-recipe">Dairy Free</h1>
                        {dairyfreerecipes.map(recipe => (
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
