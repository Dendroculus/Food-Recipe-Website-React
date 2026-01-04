import React, { Fragment } from "react";
import MainPageLayout from "../MainPageLayout"; 
import RecipeCard from "../RecipeCard";
import { lettuceBased, mixedVegetable, specialty, allSaladRecipes, description, topPicks } from './SaladData';

export default class Salad extends React.Component {
  render() {
    return (
      <MainPageLayout 
        title="Salad"
        description={description}
        topPicks={topPicks}
        allRecipes={allSaladRecipes}
      >
        <Fragment>
          <RecipeCard recipes={lettuceBased} title="Lettuce Based" />
          <RecipeCard recipes={mixedVegetable} title="Mixed Vegetable" />
          <RecipeCard recipes={specialty} title="Specialty" />
        </Fragment>
      </MainPageLayout>
    );
  }
}