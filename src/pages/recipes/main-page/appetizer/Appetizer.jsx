import React, { Fragment } from "react";
import MainPageLayout from "../MainPageLayout"; 
import RecipeCard from "../RecipeCard";
import { bread, dipBased, fingerFood, allAppetizerRecipes, description, topPicks } from './AppetizerData';

export default class Appetizer extends React.Component {
  render() {
    return (
      <MainPageLayout 
        title="Appetizer"
        description={description}
        topPicks={topPicks}
        allRecipes={allAppetizerRecipes}
      >
        <Fragment>
          <RecipeCard recipes={bread} title="Bread" />
          <RecipeCard recipes={dipBased} title="Dip Based" />
          <RecipeCard recipes={fingerFood} title="Finger Food" />
        </Fragment>
      </MainPageLayout>
    );
  }
}