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
    path : '/five-course-meal/main-page/appetizer',
    component: React.lazy(() => import('./pages/five-course-meal/main-page/appetizer/Appetizer')),
  },
  {
    path : '/five-course-meal/main-page/salad',
    component: React.lazy(() => import('./pages/five-course-meal/main-page/salad/Salad')),
  },
  {
    path : '/five-course-meal/main-page/main-course',
    component: React.lazy(() => import('./pages/five-course-meal/main-page/main-course/MainCourse')),
  },
  {
    path : '/five-course-meal/main-page/dessert',
    component: React.lazy(() => import('./pages/five-course-meal/main-page/dessert/Dessert')),
  },
  {
    path : '/five-course-meal/main-page/special-diets',
    component: React.lazy(() => import('./pages/five-course-meal/main-page/special-diets/SpecialDiet')),
  },
  {
    path: '/five-course-meal/recipes/main-course', 
    component: React.lazy(() => import('./pages/five-course-meal/recipe-page/main-course-recipe-page/MainCourseRecipe')),
  },
  {
    path: '/five-course-meal/recipes/appetizer', 
    component: React.lazy(() => import('./pages/five-course-meal/recipe-page/appetizer-recipe-page/AppetizerRecipe')),
  },
  {
    path: '/five-course-meal/recipes/dessert', 
    component: React.lazy(() => import('./pages/five-course-meal/recipe-page/dessert-recipe-page/DessertRecipe')),
  },
  {
    path: '/five-course-meal/recipes/salad', 
    component: React.lazy(() => import('./pages/five-course-meal/recipe-page/salad-recipe-page/SaladRecipe')),
  },
  {
    path: '/five-course-meal/recipes/special-diets', 
    component: React.lazy(() => import('./pages/five-course-meal/recipe-page/special-diet-recipe-page/SpecialDietsRecipe')),
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
    path: '/login',
    component: React.lazy(() => import('./pages/logination-form/form')),
  }
];

export default routes;