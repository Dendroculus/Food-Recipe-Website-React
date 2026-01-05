import React, { Fragment } from "react";
import MainPageLayout from "../MainPageLayout"; 
import RecipeCard from "../RecipeCard";
import { cake, pastry, pudding, tiramisu, allDessertRecipes, topPicks } from './DessertData';

export default class Dessert extends React.Component {
  render() {
    return (
      <MainPageLayout 
        title="Dessert"
        topPicks={topPicks}
        allRecipes={allDessertRecipes}
        customHeader={(scrollToRecipes) => (
          <section className="dessert-description">
              <div className="dessert-summary-content">
                  <p className="food-definition">Dessert, a delectable treat enjoyed after a meal, is the sweet finale that brings joy to our taste buds.</p>
              </div>
              <button className="cta-button" onClick={scrollToRecipes}>
                <i className="bi bi-bookmark-heart"></i>
                &nbsp;
                Save Your Favorites
              </button>
          </section>
        )}
      >
        <Fragment>
          <RecipeCard recipes={cake} title="Cake" />
          <RecipeCard recipes={tiramisu} title="Tiramisu" />
          <RecipeCard recipes={pudding} title="Pudding" />
          <RecipeCard recipes={pastry} title="Pastry" />
        </Fragment>
      </MainPageLayout>
    );
  }
}