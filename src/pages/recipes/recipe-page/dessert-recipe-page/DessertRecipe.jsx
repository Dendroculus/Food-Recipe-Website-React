import React from 'react';
import RecipePageLayout from '../RecipePageLayout';
import { cakeRecipes, pastryRecipes, puddingRecipes, tiramisuRecipes } from './DessertRecipeData';

/**
 * DessertRecipe page that provides dessert categories (cake, pastry, pudding, tiramisu)
 * to RecipePageLayout for rendering recipe sections.
 *
 * @extends React.Component
 */
export default class DessertRecipe extends React.Component {
    render() {
        const categories = [
            { id: 'cake', title: 'Cake', data: cakeRecipes },
            { id: 'pastry', title: 'Pastry', data: pastryRecipes },
            { id: 'pudding', title: 'Pudding', data: puddingRecipes },
            { id: 'tiramisu', title: 'Tiramisu', data: tiramisuRecipes }
        ];

        return <RecipePageLayout categories={categories} />;
    }
}