import React from 'react';
import RecipePageLayout from '../RecipePageLayout';
import { breadRecipes, dipRecipes, fingerFoodRecipes } from './AppetizerRecipeData';

/**
 * AppetizerRecipe page that organizes appetizer recipes into categories for the RecipePageLayout.
 * It builds the categories array expected by RecipePageLayout and passes it as a prop.
 *
 * @extends React.Component
 */
export default class AppetizerRecipe extends React.Component {
    render() {
        const categories = [
            { id: 'bread', title: 'Bread-Based', data: breadRecipes },
            { id: 'dip', title: 'Dip-Based', data: dipRecipes },
            { id: 'finger-food', title: 'Finger Food', data: fingerFoodRecipes }
        ];

        return <RecipePageLayout categories={categories} />;
    }
}