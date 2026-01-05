import React from 'react';
import RecipePageLayout from '../RecipePageLayout';
import { dairyfreerecipes, glutenFreeRecipes, veganRecipes, vegetarianRecipes } from './SpecialDietsRecipeData';

export default class SpecialDietsRecipe extends React.Component {
    render() {
        const categories = [
            { id: 'vegetarian', title: 'Vegetarian', data: vegetarianRecipes },
            { id: 'vegan', title: 'Vegan', data: veganRecipes },
            { id: 'gluten-free', title: 'Gluten Free', data: glutenFreeRecipes },
            { id: 'dairy-free', title: 'Dairy Free', data: dairyfreerecipes }
        ];

        return <RecipePageLayout categories={categories} />;
    }
}