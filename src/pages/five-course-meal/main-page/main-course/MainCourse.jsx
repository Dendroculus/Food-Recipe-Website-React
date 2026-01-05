import React, { Fragment } from "react";
import MainPageLayout from "../MainPageLayout";
import RecipeCard from "../RecipeCard";
import { chicken, beef, lamb, pork, seafood, allMainCourseRecipes, topPicks, description } from './MainCourseData';

export default class MainCourse extends React.Component {
  render() {
    return (
      <MainPageLayout
        title="Main Course"
        description={description}
        topPicks={topPicks}
        allRecipes={allMainCourseRecipes}
        type="main"
      >
        <Fragment>
          <RecipeCard recipes={chicken} title="Chicken" />
          <RecipeCard recipes={beef} title="Beef" />
          <RecipeCard recipes={lamb} title="Lamb" />
          <RecipeCard recipes={pork} title="Pork" />
          <RecipeCard recipes={seafood} title="Seafood" />
        </Fragment>
      </MainPageLayout>
    );
  }
}