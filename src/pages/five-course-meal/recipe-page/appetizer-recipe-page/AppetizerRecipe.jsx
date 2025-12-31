import React, {Fragment} from 'react';
import RecipeSection from '../RecipeSection';
import { appetizerRecipes } from './AppetizerRecipeData';
import RecipeNavbar from '../../RecipesNavBar';
import '../../styles/recipe.css';
import Footer from "../../../home/Footer";
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
        // Categorize appetizers by type based on tags or recipe characteristics
        const breadRecipes = appetizerRecipes.filter(recipe => 
            recipe.tags?.some(tag => tag.toLowerCase().includes('bread')) || 
            recipe.name.toLowerCase().includes('bread') ||
            recipe.name.toLowerCase().includes('ciabatta') ||
            recipe.name.toLowerCase().includes('bruschetta')
        );
        
        const dipRecipes = appetizerRecipes.filter(recipe => 
            recipe.tags?.some(tag => tag.toLowerCase().includes('dip')) || 
            recipe.name.toLowerCase().includes('dip') ||
            recipe.name.toLowerCase().includes('hummus') ||
            recipe.name.toLowerCase().includes('guacamole')
        );
        
        const fingerFoodRecipes = appetizerRecipes.filter(recipe => 
            !breadRecipes.includes(recipe) && !dipRecipes.includes(recipe)
        );

        return (
            <Fragment>
                <RecipeNavbar />
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
            </Fragment>
        )
    }
}
