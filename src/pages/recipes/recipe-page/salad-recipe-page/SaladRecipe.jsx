import React from 'react';
import RecipePageLayout from '../RecipePageLayout';
import { lettuceBasedRecipes, mixedVegetableRecipes, specialtySaladRecipes } from './SaladRecipeData';

/**
 * SaladRecipe page that organizes salad recipes into Lettuce-Based, Mixed Vegetable and Specialty categories
 * and passes them to RecipePageLayout.
 *
 * @extends React.Component
 */
export default class SaladRecipe extends React.Component {
    render() {
        const categories = [
            { id: 'lettuce-based', title: 'Lettuce-Based', data: lettuceBasedRecipes },
            { id: 'mixed-vegetable', title: 'Mixed Vegetable', data: mixedVegetableRecipes },
            { id: 'specialty', title: 'Specialty', data: specialtySaladRecipes }
        ];

        return <RecipePageLayout categories={categories} />;
    }
}