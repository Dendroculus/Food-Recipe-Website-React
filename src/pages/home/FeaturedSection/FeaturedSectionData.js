/**
 * Data for the featured recipe card.
 * @type {{image: string, alt: string, badgeLabel: string, title: string, subtitle: string, meta: string, description: string, href: string}}
 */
let featuredRecipe = {
      image: '/assets/main_course/Pork/Pork Chops Charcutiere Sauce.png',
      alt: 'Recipe of the Week',
      badgeLabel: 'Weekly Pick',
      title: 'Recipe of the Week',
      subtitle: 'Pork Chops Charcutiere',
      meta: '30 min • Medium • ★ 4.8',
      description:
        'A quick star-worthy main that balances savory and bright flavors — perfect for weeknight dinners.',
      href: '/recipes/recipes/main-course#pork-chops',
    };

/**
 * Array of spotlight recipe entries for the comparison table.
 * @type {Array<{name: string, prep: string, difficulty: string, calories: string}>}
 */
let spotlightRecipes = [
      { name: 'Pork Chops Charcutiere', prep: '30 min', difficulty: 'Medium', calories: '520 kcal' },
      { name: 'Panacotta', prep: '2 hr', difficulty: 'Medium', calories: '350 kcal' },
      { name: 'Provino Salad', prep: '10 min', difficulty: 'Easy', calories: '210 kcal' },
    ];

/**
 * Short kitchen tips displayed in the featured section.
 * @type {string[]}
 */
let tips = [
      'Use seasonal produce for better flavor and lower cost.',
      'Rest meat 5–10 minutes before slicing for juicier results.',
      'Keep a simple pantry: olive oil, vinegar, garlic, canned tomatoes, and dried herbs.',
    ];

export { featuredRecipe, spotlightRecipes, tips };