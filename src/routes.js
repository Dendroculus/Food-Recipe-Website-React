import React from 'react';

const routes = [
  {
    path: '/',
    component: React.lazy(() => import('./pages/home/Home')),
  },
  {
    path: '/inspiration/stellar-tips',
    component: React.lazy(() => import('./pages/inspiration/stellar_tips/StellarTips')),
  },
  {
    path: '/inspiration/seasonal-constellations',
    component: React.lazy(() => import('./pages/inspiration/seasonal_constellations/SeasonalConstellations')),
  },
  {
    path: '/coming-soon/coming-soon',
    component: React.lazy(() => import('./pages/coming-soon/ComingSoon')),
  },
  {
    path: '/about-us/AboutUs',
    component: React.lazy(() => import('./pages/about-us/AboutUs')),
  },
  {
    path: '/payment/Payment',
    component: React.lazy(() => import('./pages/payment/Payment')),
  },
  {
    path : '/recipes/main-page/appetizer',
    component: React.lazy(() => import('./pages/recipes/main-page/appetizer/Appetizer')),
  },
  {
    path : '/recipes/main-page/salad',
    component: React.lazy(() => import('./pages/recipes/main-page/salad/Salad')),
  },
  {
    path : '/recipes/main-page/main-course',
    component: React.lazy(() => import('./pages/recipes/main-page/main-course/MainCourse')),
  },
  {
    path : '/recipes/main-page/dessert',
    component: React.lazy(() => import('./pages/recipes/main-page/dessert/Dessert')),
  },
  {
    path : '/recipes/main-page/special-diets',
    component: React.lazy(() => import('./pages/recipes/main-page/special-diets/SpecialDiet')),
  },
  {
    path: '/recipes/recipes/main-course', 
    component: React.lazy(() => import('./pages/recipes/recipe-page/main-course-recipe-page/MainCourseRecipe')),
  },
  {
    path: '/recipes/recipes/appetizer', 
    component: React.lazy(() => import('./pages/recipes/recipe-page/appetizer-recipe-page/AppetizerRecipe')),
  },
  {
    path: '/recipes/recipes/dessert', 
    component: React.lazy(() => import('./pages/recipes/recipe-page/dessert-recipe-page/DessertRecipe')),
  },
  {
    path: '/recipes/recipes/salad', 
    component: React.lazy(() => import('./pages/recipes/recipe-page/salad-recipe-page/SaladRecipe')),
  },
  {
    path: '/recipes/recipes/special-diets', 
    component: React.lazy(() => import('./pages/recipes/recipe-page/special-diet-recipe-page/SpecialDietsRecipe')),
  },
  {
    path: '/shop/ingredients', 
    component: React.lazy(() => import('./pages/shop/ingredients/Ingredients')),
  },
  {
    path: '/shop/kitchen-tools', 
    component: React.lazy(() => import('./pages/shop/kitchen-tools/KitchenTools')),
  },
  {
    path: '/shop/recipe-themed-merch', 
    component: React.lazy(() => import('./pages/shop/recipe-themed-merch/RecipeThemedMerch')),
  },
  {
    path: '/shop/digital-products', 
    component: React.lazy(() => import('./pages/shop/digital-product/DigitalProduct')),
  },
  {
    path: '/form', 
    component: React.lazy(() => import('./pages/authentication/AuthPage')),
  },
];

export default routes;