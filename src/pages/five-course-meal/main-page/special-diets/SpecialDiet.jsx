import React, { Fragment } from "react";
import MainPageLayout from "../MainPageLayout"; 
import RecipeCard from "../RecipeCard";
import { dairyFree, glutenFree, vegan, vegetarian, allSpecialDietsRecipes, topPicks, description } from './SpecialDietsData';

export default class SpecialDiets extends React.Component {
  render() {
    return (
      <MainPageLayout 
        title="Special Diets"
        description={description}
        topPicks={topPicks}
        allRecipes={allSpecialDietsRecipes}
      >
        <Fragment>
          <RecipeCard recipes={dairyFree} title="Dairy Free" />
          <RecipeCard recipes={glutenFree} title="Gluten Free" />
          <RecipeCard recipes={vegan} title="Vegan" />
          <RecipeCard recipes={vegetarian} title="Vegetarian" />
        </Fragment>
      </MainPageLayout>
    );
  }
}