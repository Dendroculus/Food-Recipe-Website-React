import React from 'react';
import RecipePageLayout from '../RecipePageLayout';
import { chickenRecipes, beefRecipes, porkRecipes, lambRecipes, seafoodRecipes } from './MainCourseRecipeData';

/**
 * MainCourseRecipe page that supplies main course categories (chicken, beef, lamb, pork, seafood)
 * to the RecipePageLayout component.
 *
 * @extends React.Component
 */
export default class MainCourseRecipe extends React.Component {
    render() {
        const categories = [
            { id: 'chicken', title: 'Chicken', data: chickenRecipes },
            { id: 'beef', title: 'Beef', data: beefRecipes },
            { id: 'lamb', title: 'Lamb', data: lambRecipes },
            { id: 'pork', title: 'Pork', data: porkRecipes },
            { id: 'seafood', title: 'Seafood', data: seafoodRecipes }
        ];

        return <RecipePageLayout categories={categories} />;
    }
}