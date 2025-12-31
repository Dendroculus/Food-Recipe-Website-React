import React, {Fragment} from 'react';
import RecipeSection from '../RecipeSection';
import { saladRecipes } from './SaladRecipeData';
import RecipeNavbar from '../../RecipesNavBar';
import '../../styles/recipe.css';
import Footer from "../../../home/Footer";
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
        // Categorize salads by type based on tags or recipe characteristics
        const lettuceRecipes = saladRecipes.filter(recipe => 
            recipe.tags?.some(tag => tag.toLowerCase().includes('lettuce') || tag.toLowerCase().includes('romaine')) || 
            recipe.name.toLowerCase().includes('lettuce') ||
            recipe.name.toLowerCase().includes('caesar')
        );
        
        const mixedVegetableRecipes = saladRecipes.filter(recipe => 
            recipe.tags?.some(tag => tag.toLowerCase().includes('mixed') || tag.toLowerCase().includes('vegetable')) || 
            recipe.name.toLowerCase().includes('greek') ||
            recipe.name.toLowerCase().includes('garden') ||
            recipe.name.toLowerCase().includes('mediterranean')
        );
        
        const specialtyRecipes = saladRecipes.filter(recipe => 
            !lettuceRecipes.includes(recipe) && !mixedVegetableRecipes.includes(recipe)
        );

        return (
            <Fragment>
                <RecipeNavbar />
                <Search />
                <main>
                    <section className='lettuce-based'>
                        <h1 className="head-recipe">Lettuce-Based</h1>
                        {lettuceRecipes.map(recipe => (
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
                        {specialtyRecipes.map(recipe => (
                            <RecipeSection key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                </main>
                <Footer />
            </Fragment>
        )
    }
}
