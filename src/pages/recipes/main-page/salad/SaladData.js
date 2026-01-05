export const description = "Explore our website's full salad recipe collection. Log in or create your account to easily save, revisit and review all your favourite salad dishes!";
    
export const topPicks = [
      {img: "/assets/salad/Mixed Vegetable/Mediterranean ChickPea Salad.jpg", title: "Mediterranean ChickPea Salad"},
      {img: "/assets/salad/Mixed Vegetable/Mediterranean Salad.jpg", title: "Mediterranean Salad"},
      {img: "/assets/salad/Specialty/Watermelon Cucumber Salad.webp", title: "Watermelon Cucumber Salad"},
      {img: "/assets/salad/Specialty/Endive Salad Bites.jpg", title: "Endive Salad Bites"},
      {img: "/assets/salad/Specialty/Apple Salad.png", title: "Apple Salad"},
      {img: "/assets/salad/Mixed Vegetable/Italian Salad.png", title: "Italian Salad"},
    ];

export const allSaladRecipes = [
  { 
    id: 62,
    category: 'salads',
    subcategory:  'lettuceBased',
    img: "/assets/salad/Lettuce-Based/Butter Lettuce Salad.jpg", 
    title: "Butter Lettuce Salad", 
    href: "/recipes/recipes/salad#butter-lettuce-salad", 
    time:  "10 mins", 
    keywords: ['salad', 'lettuce', 'butter lettuce', 'green', 'fresh'],
    tags:  ['summer', 'spring'] 
  },
  { 
    id: 63,
    category: 'salads',
    subcategory: 'lettuceBased',
    img:  "/assets/salad/Lettuce-Based/Maroulosalata.jpg", 
    title: "Maroulosalata", 
    href: "/recipes/recipes/salad#maroulosalata", 
    time: "15 mins", 
    keywords: ['salad', 'lettuce', 'maroulosalata', 'greek', 'mediterranean'],
    tags: ['summer', 'spring'] 
  },
  { 
    id: 64,
    category: 'salads',
    subcategory: 'lettuceBased',
    img: "/assets/salad/Lettuce-Based/Radicchio Salad.jpg", 
    title: "Radicchio Salad", 
    href: "/recipes/recipes/salad#radicchio-salad", 
    time: "15 mins", 
    keywords: ['salad', 'lettuce', 'radicchio', 'bitter', 'italian'],
    tags: ['fall', 'winter'] 
  },
  { 
    id: 65,
    category: 'salads',
    subcategory: 'lettuceBased',
    img: "/assets/salad/Lettuce-Based/Romaine Salad with Green Goddess.jpg", 
    title: "Romaine Salad", 
    href:  "/recipes/recipes/salad#romaine-salad-green-goddess", 
    time: "15 mins", 
    keywords:  ['salad', 'lettuce', 'romaine', 'green goddess', 'dressing'],
    tags: ['summer', 'spring'] 
  },
  { 
    id: 66,
    category: 'salads',
    subcategory: 'mixedVegetable',
    img: "/assets/salad/Mixed Vegetable/Italian Salad.png", 
    title: "Italian Salad", 
    href: "/recipes/recipes/salad#italian-salad", 
    time: "15 mins", 
    keywords: ['salad', 'mixed vegetable', 'italian', 'vegetables', 'fresh'],
    tags: ['summer', 'spring'] 
  },
  { 
    id: 67,
    category: 'salads',
    subcategory: 'mixedVegetable',
    img: "/assets/salad/Mixed Vegetable/Mediterranean ChickPea Salad.jpg", 
    title: "Mediterranean ChickPea Salad", 
    href: "/recipes/recipes/salad#mediterranean-chickpea-salad", 
    time: "15 mins", 
    keywords: ['salad', 'mixed vegetable', 'mediterranean', 'chickpea', 'protein'],
    tags: ['summer', 'spring'] 
  },
  { 
    id: 68,
    category: 'salads',
    subcategory: 'mixedVegetable',
    img: "/assets/salad/Mixed Vegetable/Mediterranean Salad.jpg", 
    title: "Mediterranean Salad", 
    href: "/recipes/recipes/salad#mediterranean-salad", 
    time: "20 mins", 
    keywords: ['salad', 'mixed vegetable', 'mediterranean', 'greek', 'fresh'],
    tags: ['summer', 'spring'] 
  },
  { 
    id: 69,
    category: 'salads',
    subcategory: 'mixedVegetable',
    img: "/assets/salad/Mixed Vegetable/Mexican Chopped Salad.jpeg", 
    title: "Mexican Chopped Salad", 
    href: "/recipes/recipes/salad#mexican-chopped-salad", 
    time: "20 mins", 
    keywords:  ['salad', 'mixed vegetable', 'mexican', 'chopped', 'spicy'],
    tags: ['summer', 'spring'] 
  },
  { 
    id: 70,
    category: 'salads',
    subcategory: 'specialty',
    img:  "/assets/salad/Specialty/Apple Salad.png", 
    title: "Apple Salad", 
    href: "/recipes/recipes/salad#apple-salad", 
    time: "20 mins", 
    keywords: ['salad', 'specialty', 'apple', 'fruit', 'sweet'],
    tags: ['fall', 'winter'] 
  },
  { 
    id: 71,
    category: 'salads',
    subcategory: 'specialty',
    img: "/assets/salad/Specialty/Endive Salad Bites.jpg", 
    title: "Endive Salad Bites", 
    href: "/recipes/recipes/salad#endive-salad-bites", 
    time: "20 mins", 
    keywords: ['salad', 'specialty', 'endive', 'bites', 'appetizer'],
    tags: ['summer', 'spring', 'valentine'] 
  },
  { 
    id: 72,
    category: 'salads',
    subcategory: 'specialty',
    img: "/assets/salad/Specialty/Frisee Salad.webp", 
    title: "Frisee Salad", 
    href: "/recipes/recipes/salad#frisee-salad", 
    time: "25 mins", 
    keywords: ['salad', 'specialty', 'frisee', 'french', 'gourmet'],
    tags: ['spring', 'summer'] 
  },
  { 
    id: 73,
    category: 'salads',
    subcategory: 'specialty',
    img: "/assets/salad/Specialty/Watermelon Cucumber Salad.webp", 
    title: "Watermelon Cucumber Salad", 
    href: "/recipes/recipes/salad#watermelon-cucumber-salad", 
    time: "15 mins", 
    keywords: ['salad', 'specialty', 'watermelon', 'cucumber', 'refreshing', 'summer'],
    tags:  ['summer'] 
  },
];

const getSaladBySubcategory = (subcategory) => {
  return allSaladRecipes.filter(recipe => recipe.subcategory === subcategory);
}

export const lettuceBased = getSaladBySubcategory('lettuceBased');
export const mixedVegetable = getSaladBySubcategory('mixedVegetable');
export const specialty = getSaladBySubcategory('specialty');