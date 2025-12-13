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
    component: React.lazy(() => import('./pages/five-course-meal/main-page/Appetizer')),
  },
  {
    path : '/five-course-meal/main-page/salad',
    component: React.lazy(() => import('./pages/five-course-meal/main-page/Salad')),
  },
  {
    path : '/five-course-meal/main-page/main-course',
    component: React.lazy(() => import('./pages/five-course-meal/main-page/MainCourse')),
  },
  {
    path : '/five-course-meal/main-page/dessert',
    component: React.lazy(() => import('./pages/five-course-meal/main-page/Dessert')),
  },
  {
    path : '/five-course-meal/main-page/special-diets',
    component: React.lazy(() => import('./pages/five-course-meal/main-page/SpecialDiet')),
  },

];

export default routes;