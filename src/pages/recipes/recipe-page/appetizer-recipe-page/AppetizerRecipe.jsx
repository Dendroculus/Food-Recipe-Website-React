import React from 'react';
import RecipePageLayout from '../RecipePageLayout';
import { breadRecipes, dipRecipes, fingerFoodRecipes } from './AppetizerRecipeData';

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