const lettuce_based = [
  { 
    img: "/assets/salad/Lettuce-Based/Butter Lettuce Salad.jpg", 
    title: "Butter Lettuce Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#butter-lettuce-salad", 
    time: "10 mins", 
    tags: ['summer', 'spring'] 
  },
  { 
    img: "/assets/salad/Lettuce-Based/Maroulosalata.jpg", 
    title: "Maroulosalata", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#maroulosalata", 
    time: "15 mins", 
    tags: ['summer', 'spring'] 
  },
  { 
    img: "/assets/salad/Lettuce-Based/Radicchio Salad.jpg", 
    title: "Radicchio Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#radicchio-salad", 
    time: "12 mins", 
    tags: ['fall', 'winter'] 
  },
  { 
    img: "/assets/salad/Lettuce-Based/Romaine Salad with Green Goddess.jpg", 
    title: "Romaine Salad with Green Goddess", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#romaine-green-goddess", 
    time: "15 mins", 
    tags: ['summer', 'spring'] 
  },
];

const mixed_vegetable = [
  { 
    img: "/assets/salad/Mixed Vegetable/Italian Salad.png", 
    title: "Italian Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#italian-salad", 
    time: "15 mins", 
    tags: ['summer', 'spring'] 
  },
  { 
    img: "/assets/salad/Mixed Vegetable/Mediterranean ChickPea Salad.jpg", 
    title: "Mediterranean ChickPea Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#mediterranean-chickpea-salad", 
    time: "20 mins", 
    tags: ['summer', 'spring'] 
  },
  { 
    img: "/assets/salad/Mixed Vegetable/Mediterranean Salad.jpg", 
    title: "Mediterranean Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#mediterranean-salad", 
    time: "15 mins", 
    tags: ['summer', 'spring'] 
  },
  { 
    img: "/assets/salad/Mixed Vegetable/Mexican Chopped Salad.jpeg", 
    title: "Mexican Chopped Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#mexican-chopped-salad", 
    time: "20 mins", 
    tags: ['summer', 'spring'] 
  },
];

const specialty = [
  { 
    img: "/assets/salad/Specialty/Apple Salad.png", 
    title: "Apple Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#apple-salad", 
    time: "15 mins", 
    tags: ['fall', 'winter'] 
  },
  { 
    img: "/assets/salad/Specialty/Endive Salad Bites.jpg", 
    title: "Endive Salad Bites", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#endive-salad-bites", 
    time: "10 mins", 
    tags: ['summer', 'spring', 'valentine'] 
  },
  { 
    img:  "/assets/salad/Specialty/Frisee Salad.webp", 
    title: "Frisee Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#frisee-salad", 
    time: "12 mins", 
    tags: ['spring', 'summer'] 
  },
  { 
    img: "/assets/salad/Specialty/Watermelon Cucumber Salad.webp", 
    title: "Watermelon Cucumber Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#watermelon-cucumber-salad", 
    time: "10 mins", 
    tags: ['summer'] 
  },
];

const allSaladRecipes = [
  { 
    id: 62,
    category: 'salads',
    subcategory:  'lettuceBased',
    img: "/assets/salad/Lettuce-Based/Butter Lettuce Salad.jpg", 
    title: "Butter Lettuce Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#butter-lettuce-salad", 
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
    href: "/five-course-meal/recipes-html/salads-recipes.html#maroulosalata", 
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
    href: "/five-course-meal/recipes-html/salads-recipes.html#radicchio-salad", 
    time: "12 mins", 
    keywords: ['salad', 'lettuce', 'radicchio', 'bitter', 'italian'],
    tags: ['fall', 'winter'] 
  },
  { 
    id: 65,
    category: 'salads',
    subcategory: 'lettuceBased',
    img: "/assets/salad/Lettuce-Based/Romaine Salad with Green Goddess.jpg", 
    title: "Romaine Salad with Green Goddess", 
    href:  "/five-course-meal/recipes-html/salads-recipes.html#romaine-green-goddess", 
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
    href: "/five-course-meal/recipes-html/salads-recipes.html#italian-salad", 
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
    href: "/five-course-meal/recipes-html/salads-recipes.html#mediterranean-chickpea-salad", 
    time: "20 mins", 
    keywords: ['salad', 'mixed vegetable', 'mediterranean', 'chickpea', 'protein'],
    tags: ['summer', 'spring'] 
  },
  { 
    id: 68,
    category: 'salads',
    subcategory: 'mixedVegetable',
    img: "/assets/salad/Mixed Vegetable/Mediterranean Salad.jpg", 
    title: "Mediterranean Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#mediterranean-salad", 
    time: "15 mins", 
    keywords: ['salad', 'mixed vegetable', 'mediterranean', 'greek', 'fresh'],
    tags: ['summer', 'spring'] 
  },
  { 
    id: 69,
    category: 'salads',
    subcategory: 'mixedVegetable',
    img: "/assets/salad/Mixed Vegetable/Mexican Chopped Salad.jpeg", 
    title: "Mexican Chopped Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#mexican-chopped-salad", 
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
    href: "/five-course-meal/recipes-html/salads-recipes.html#apple-salad", 
    time: "15 mins", 
    keywords: ['salad', 'specialty', 'apple', 'fruit', 'sweet'],
    tags: ['fall', 'winter'] 
  },
  { 
    id: 71,
    category: 'salads',
    subcategory: 'specialty',
    img: "/assets/salad/Specialty/Endive Salad Bites.jpg", 
    title: "Endive Salad Bites", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#endive-salad-bites", 
    time: "10 mins", 
    keywords: ['salad', 'specialty', 'endive', 'bites', 'appetizer'],
    tags: ['summer', 'spring', 'valentine'] 
  },
  { 
    id: 72,
    category: 'salads',
    subcategory: 'specialty',
    img: "/assets/salad/Specialty/Frisee Salad.webp", 
    title: "Frisee Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#frisee-salad", 
    time: "12 mins", 
    keywords: ['salad', 'specialty', 'frisee', 'french', 'gourmet'],
    tags: ['spring', 'summer'] 
  },
  { 
    id: 73,
    category: 'salads',
    subcategory: 'specialty',
    img: "/assets/salad/Specialty/Watermelon Cucumber Salad.webp", 
    title: "Watermelon Cucumber Salad", 
    href: "/five-course-meal/recipes-html/salads-recipes.html#watermelon-cucumber-salad", 
    time: "10 mins", 
    keywords: ['salad', 'specialty', 'watermelon', 'cucumber', 'refreshing', 'summer'],
    tags:  ['summer'] 
  },
];

export { lettuce_based, mixed_vegetable, specialty, allSaladRecipes };