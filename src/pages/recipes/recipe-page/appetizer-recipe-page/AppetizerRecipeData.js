/**
 * @typedef {Object} Recipe
 * @property {string} id
 * @property {string} title
 * @property {string} image
 * @property {string} description
 * @property {Object} meta
 * @property {string} meta.prepTime
 * @property {string} meta.cookTime
 * @property {string} meta.totalTime
 * @property {string} meta.difficulty
 * @property {number} meta.rating
 * @property {number} meta.reviews
 * @property {string[]} ingredients
 * @property {Array<{
 *   section: string,
 *   steps: string[]
 * }>} instructions
 * @property {Object} nutrition
 * @property {string} nutrition.calories
 * @property {string} nutrition.carbs
 * @property {string} nutrition.protein
 * @property {string} nutrition.fat
 * @property {string} nutrition.saturatedFat
 * @property {string} nutrition.cholesterol
 * @property {string} nutrition.sodium
 * @property {string} nutrition.fiber
 * @property {string} nutrition.sugar
 * @property {string[]} tags
 * @property {string} video
 */

/** @type {Recipe[]} */
export const breadRecipes = [
  {
    id: "florentine-ciabatta",
    title: "Florentine Ciabatta",
    image: "/assets/appetizers/Bread/Florentine Ciabatta.jpg",
    description: "A rustic Italian bread with spinach and cheese filling.",
    meta: {
      prepTime: "20 mins",
      cookTime: "25 mins",
      totalTime: "45 mins",
      difficulty: "Medium",
      rating: 4.7,
      reviews: 89
    },
    ingredients: [
      "500g bread flour",
      "350ml warm water",
      "2 tsp salt",
      "1 tsp instant yeast",
      "200g fresh spinach",
      "150g mozzarella cheese",
      "2 cloves garlic, minced",
      "2 tbsp olive oil"
    ],
    instructions: [
      {
        section: "Dough Preparation",
        steps: [
          "Mix flour, salt, and yeast in a large bowl.",
          "Gradually add warm water and mix until a sticky dough forms.",
          "Knead for 10 minutes until smooth and elastic.",
          "Cover and let rise for 1 hour or until doubled in size."
        ]
      },
      {
        section: "Filling and Baking",
        steps: [
          "Sauté spinach and garlic in olive oil until wilted.",
          "Roll out dough and spread spinach mixture and cheese over it.",
          "Fold dough over filling and shape into a loaf.",
          "Bake at 220°C (425°F) for 25 minutes until golden brown."
        ]
      }
    ],
    nutrition: {
      calories: "285",
      carbs: "45g",
      protein: "10g",
      fat: "8g",
      saturatedFat: "3g",
      cholesterol: "15mg",
      sodium: "680mg",
      fiber: "3g",
      sugar: "2g"
    },
    tags: ["Bread", "Appetizer", "Vegetarian"],
    video: "https://www.youtube.com/embed/02f2fXaEpXE?si=r6Ynd45fRTCF7GXa"
  },
  {
    id: "garlic-bread",
    title: "Garlic Bread",
    image: "/assets/appetizers/Bread/Garlic Bread.webp",
    description: "Crusty bread with garlic butter and herbs.",
    meta: {
      prepTime: "10 mins",
      cookTime: "15 mins",
      totalTime: "25 mins",
      difficulty: "Easy",
      rating: 4.5,
      reviews: 120
    },
    ingredients: [
      "1 French baguette",
      "1/2 cup butter, softened",
      "4 cloves garlic, minced",
      "2 tbsp fresh parsley, chopped",
      "1/4 cup Parmesan cheese, grated",
      "Salt to taste"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Slice baguette diagonally without cutting all the way through.",
          "Mix butter, garlic, parsley, and salt."
        ]
      },
      {
        section: "Baking",
        steps: [
          "Spread garlic butter between slices.",
          "Wrap in foil and bake for 10 minutes.",
          "Unwrap, sprinkle with Parmesan, and bake for 5 more minutes until crispy."
        ]
      }
    ],
    nutrition: {
      calories: "210",
      carbs: "25g",
      protein: "5g",
      fat: "11g",
      saturatedFat: "7g",
      cholesterol: "30mg",
      sodium: "450mg"
    },
    tags: ["Bread", "Garlic", "Easy", "Appetizer"],
    video: "https://www.youtube.com/embed/FkV_fU5GoXM?si=1MoXh8uK7eUQiK28"
  },
  {
    id: "tomato-peach-pizza",
    title: "Grilled Tomato-Peach Pizza",
    image: "/assets/appetizers/Bread/Grilled Tomato-Peach Pizza.jpg",
    description: "Grilled pizza with tomatoes, peaches, and fresh mozzarella.",
    meta: {
      prepTime: "15 mins",
      cookTime: "10 mins",
      totalTime: "25 mins",
      difficulty: "Medium",
      rating: 4.8,
      reviews: 75
    },
    ingredients: [
      "1 pizza dough",
      "2 tomatoes, sliced",
      "1 peach, sliced",
      "8 oz fresh mozzarella",
      "1/4 cup basil leaves",
      "2 tbsp olive oil",
      "Balsamic glaze for drizzling"
    ],
    instructions: [
      {
        section: "Grilling",
        steps: [
          "Preheat grill to medium-high.",
          "Roll out pizza dough and brush with olive oil.",
          "Grill dough for 2-3 minutes per side until lightly charred."
        ]
      },
      {
        section: "Topping",
        steps: [
          "Top with tomatoes, peaches, and mozzarella.",
          "Return to grill until cheese melts.",
          "Garnish with basil and balsamic glaze."
        ]
      }
    ],
    nutrition: {
      calories: "320",
      carbs: "40g",
      protein: "15g",
      fat: "12g",
      saturatedFat: "6g",
      cholesterol: "35mg",
      sodium: "580mg"
    },
    tags: ["Pizza", "Grilled", "Summer", "Appetizer"],
    video: "https://www.youtube.com/embed/H1EBF9FQqng?si=Btvn68pQHs92TVeW"
  },
  {
    id: "citrus-monkey-bread",
    title: "Mini Citrus Monkey Bread",
    image: "/assets/appetizers/Bread/Mini Citrus Monkey Bread.jpeg",
    description: "Sweet pull-apart bread with citrus glaze.",
    meta: {
      prepTime: "20 mins",
      cookTime: "30 mins",
      totalTime: "50 mins",
      difficulty: "Medium",
      rating: 4.6,
      reviews: 68
    },
    ingredients: [
      "1 can biscuit dough",
      "1/2 cup sugar",
      "1 tbsp orange zest",
      "1 tbsp lemon zest",
      "1/2 cup butter, melted",
      "1/2 cup powdered sugar",
      "2 tbsp orange juice"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Preheat oven to 350°F (175°C).",
          "Cut biscuits into quarters.",
          "Mix sugar with citrus zest in a bowl."
        ]
      },
      {
        section: "Assembly",
        steps: [
          "Dip biscuit pieces in melted butter, then sugar mixture.",
          "Arrange in mini bundt pans.",
          "Bake for 25-30 minutes until golden."
        ]
      },
      {
        section: "Glazing",
        steps: [
          "Mix powdered sugar and orange juice.",
          "Drizzle over warm monkey bread."
        ]
      }
    ],
    nutrition: {
      calories: "280",
      carbs: "38g",
      protein: "3g",
      fat: "14g",
      saturatedFat: "8g",
      cholesterol: "35mg",
      sodium: "420mg"
    },
    tags: ["Sweet", "Bread", "Citrus", "Appetizer"],
    video: "https://www.youtube.com/embed/rJfadalpG4Q?si=UqVBNrGQQLsFaZUG"
  },
  {
    id: "smoked-salmon-dip",
    title: "Smoked Salmon Dip",
    image: "/assets/appetizers/Bread/Smoked Salmon Dip.jpg",
    description: "Creamy dip with smoked salmon and herbs.",
    meta: {
      prepTime: "10 mins",
      cookTime: "0 mins",
      totalTime: "10 mins",
      difficulty: "Easy",
      rating: 4.9,
      reviews: 95
    },
    ingredients: [
      "8 oz smoked salmon",
      "8 oz cream cheese, softened",
      "1/2 cup sour cream",
      "2 tbsp fresh dill, chopped",
      "1 tbsp lemon juice",
      "1 tsp horseradish",
      "Black pepper to taste"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Flake salmon into small pieces.",
          "Beat cream cheese until smooth.",
          "Mix all ingredients together."
        ]
      },
      {
        section: "Serving",
        steps: [
          "Chill for at least 1 hour before serving.",
          "Serve with crackers or bread."
        ]
      }
    ],
    nutrition: {
      calories: "180",
      carbs: "3g",
      protein: "9g",
      fat: "15g",
      saturatedFat: "8g",
      cholesterol: "45mg",
      sodium: "380mg"
    },
    tags: ["Dip", "Seafood", "Quick", "Appetizer"],
    video: "https://www.youtube.com/embed/KxbkxT_P4iw?si=QrG8fPAdX0zDByJq"
  },
  {
    id: "sourdough-knots",
    title: "Sourdough Garlic Knots",
    image: "/assets/appetizers/Bread/Sourdough Garlic Knots.jpg",
    description: "Soft sourdough knots with garlic butter.",
    meta: {
      prepTime: "15 mins",
      cookTime: "20 mins",
      totalTime: "35 mins",
      difficulty: "Medium",
      rating: 4.7,
      reviews: 82
    },
    ingredients: [
      "1 lb sourdough pizza dough",
      "4 tbsp butter, melted",
      "3 cloves garlic, minced",
      "2 tbsp parsley, chopped",
      "1/4 cup Parmesan cheese",
      "Sea salt for sprinkling"
    ],
    instructions: [
      {
        section: "Shaping",
        steps: [
          "Preheat oven to 400°F (200°C).",
          "Divide dough into 12 equal pieces.",
          "Roll each piece into a rope and tie into a knot."
        ]
      },
      {
        section: "Baking",
        steps: [
          "Place knots on baking sheet.",
          "Bake for 15-18 minutes until golden.",
          "Brush with garlic butter and sprinkle with Parmesan."
        ]
      }
    ],
    nutrition: {
      calories: "160",
      carbs: "22g",
      protein: "4g",
      fat: "7g",
      saturatedFat: "4g",
      cholesterol: "20mg",
      sodium: "320mg"
    },
    tags: ["Sourdough", "Garlic", "Bread", "Appetizer"],
    video: "https://www.youtube.com/embed/KS99kH-29II?si=M901GzDCYLVyGUXR"
  }
];

/**
 * @typedef {Object} Recipe
 * @property {string} id
 * @property {string} title
 * @property {string} image
 * @property {string} description
 * @property {Object} meta
 * @property {string} meta.prepTime
 * @property {string} meta.cookTime
 * @property {string} meta.totalTime
 * @property {string} meta.difficulty
 * @property {number} meta.rating
 * @property {number} meta.reviews
 * @property {string[]} ingredients
 * @property {Array<{
 *   section: string,
 *   steps: string[]
 * }>} instructions
 * @property {Object} nutrition
 * @property {string} nutrition.calories
 * @property {string} nutrition.carbs
 * @property {string} nutrition.protein
 * @property {string} nutrition.fat
 * @property {string} nutrition.saturatedFat
 * @property {string} nutrition.cholesterol
 * @property {string} nutrition.sodium
 * @property {string[]} tags
 * @property {string} video
 */

/** @type {Recipe[]} */
export const dipRecipes = [
  {
    id: "spinach-artichoke-dip",
    title: "Hot Spinach Artichoke Dip",
    image: "/assets/appetizers/Dip-Based/Hot Spinach Artichoke Dip.jpg",
    description: "Creamy, cheesy dip with spinach and artichokes.",
    meta: {
      prepTime: "15 mins",
      cookTime: "20 mins",
      totalTime: "35 mins",
      difficulty: "Easy",
      rating: 4.8,
      reviews: 156
    },
    ingredients: [
      "10 oz frozen spinach, thawed and drained",
      "14 oz artichoke hearts, chopped",
      "8 oz cream cheese",
      "1 cup sour cream",
      "1 cup Parmesan cheese",
      "1 cup mozzarella cheese",
      "2 cloves garlic, minced",
      "1 tsp red pepper flakes"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Squeeze all water from spinach.",
          "Chop artichokes."
        ]
      },
      {
        section: "Mixing",
        steps: [
          "Mix cream cheese and sour cream until smooth.",
          "Add spinach, artichokes, garlic, and cheeses.",
          "Season with salt, pepper, and red pepper flakes."
        ]
      },
      {
        section: "Baking",
        steps: [
          "Transfer to baking dish.",
          "Bake for 20 minutes until bubbly.",
          "Serve with tortilla chips or bread."
        ]
      }
    ],
    nutrition: {
      calories: "210",
      carbs: "5g",
      protein: "8g",
      fat: "18g",
      saturatedFat: "7g",
      cholesterol: "35mg",
      sodium: "420mg"
    },
    tags: ["Dip", "Cheese", "Vegetarian", "Appetizer"],
    video: "https://www.youtube.com/embed/vVGJgihkM6w?si=u0FaZfo2GXY8FVdV"
  },
  {
    id: "party-cheese-bread",
    title: "Party Cheese Bread",
    image: "/assets/appetizers/Dip-Based/Party Cheese Bread.jpg",
    description: "Pull-apart bread filled with cheese and herbs.",
    meta: {
      prepTime: "15 mins",
      cookTime: "25 mins",
      totalTime: "40 mins",
      difficulty: "Easy",
      rating: 4.6,
      reviews: 112
    },
    ingredients: [
      "1 round sourdough loaf",
      "2 cups mixed cheeses (cheddar, mozzarella, Monterey Jack)",
      "1/2 cup butter, melted",
      "2 cloves garlic, minced",
      "2 tbsp parsley, chopped",
      "1 tsp Italian seasoning"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Preheat oven to 350°F (175°C).",
          "Cut bread in a crosshatch pattern without cutting through bottom.",
          "Insert cheese into cuts."
        ]
      },
      {
        section: "Baking",
        steps: [
          "Mix butter, garlic, and herbs.",
          "Pour over bread.",
          "Wrap in foil and bake for 15 minutes.",
          "Unwrap and bake for 10 more minutes until cheese melts."
        ]
      }
    ],
    nutrition: {
      calories: "240",
      carbs: "20g",
      protein: "10g",
      fat: "14g",
      saturatedFat: "8g",
      cholesterol: "40mg",
      sodium: "450mg"
    },
    tags: ["Bread", "Cheese", "Party", "Appetizer"],
    video: "https://www.youtube.com/embed/W2mZX_N5UkU?si=PkN9SMf3QyqgmCBg"
  },
  {
    id: "tex-mex-poblano-dip",
    title: "Tex Mex Skillet Poblano Dip",
    image: "/assets/appetizers/Dip-Based/Tex Mex Skillet Poblano Dip.jpg",
    description: "Spicy poblano and cheese dip in a skillet.",
    meta: {
      prepTime: "20 mins",
      cookTime: "15 mins",
      totalTime: "35 mins",
      difficulty: "Medium",
      rating: 4.7,
      reviews: 88
    },
    ingredients: [
      "2 poblano peppers, roasted and chopped",
      "8 oz cream cheese",
      "1 cup pepper Jack cheese, shredded",
      "1 cup corn kernels",
      "1/2 cup black beans",
      "1/4 cup cilantro, chopped",
      "1 tsp cumin",
      "1/2 tsp chili powder"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Roast poblano peppers until charred, then peel and chop.",
          "Preheat oven to 375°F (190°C)."
        ]
      },
      {
        section: "Mixing",
        steps: [
          "Mix all ingredients in a bowl.",
          "Transfer to cast iron skillet."
        ]
      },
      {
        section: "Baking",
        steps: [
          "Bake for 15 minutes until bubbly.",
          "Garnish with extra cilantro.",
          "Serve with tortilla chips."
        ]
      }
    ],
    nutrition: {
      calories: "190",
      carbs: "8g",
      protein: "7g",
      fat: "15g",
      saturatedFat: "9g",
      cholesterol: "45mg",
      sodium: "320mg"
    },
    tags: ["Dip", "Tex-Mex", "Spicy", "Family Snack"],
    video: "https://www.youtube.com/embed/6XBGQYdzbSo?si=61Uz0b2MVQetnd3b"
  }
];

/**
 * @typedef {Object} Recipe
 * @property {string} id
 * @property {string} title
 * @property {string} image
 * @property {string} description
 * @property {Object} meta
 * @property {string} meta.prepTime
 * @property {string} meta.cookTime
 * @property {string} meta.totalTime
 * @property {string} meta.difficulty
 * @property {number} meta.rating
 * @property {number} meta.reviews
 * @property {string[]} ingredients
 * @property {Array<{
 *   section: string,
 *   steps: string[]
 * }>} instructions
 * @property {Object} nutrition
 * @property {string} nutrition.calories
 * @property {string} nutrition.carbs
 * @property {string} nutrition.protein
 * @property {string} nutrition.fat
 * @property {string} nutrition.saturatedFat
 * @property {string} nutrition.cholesterol
 * @property {string} nutrition.sodium
 * @property {string[]} tags
 * @property {string} video
 */

/** @type {Recipe[]} */
export const fingerFoodRecipes = [
  {
    id: "fried-tortellini",
    title: "Fried Prosciutto Tortellini",
    image: "/assets/appetizers/Finger-Food/Fried Prosciutto Tortellini.jpg",
    description: "Crispy fried tortellini with marinara sauce.",
    meta: {
      prepTime: "10 mins",
      cookTime: "15 mins",
      totalTime: "25 mins",
      difficulty: "Easy",
      rating: 4.5,
      reviews: 94
    },
    ingredients: [
      "1 package cheese and prosciutto tortellini",
      "2 eggs, beaten",
      "1 cup breadcrumbs",
      "1/2 cup Parmesan cheese",
      "1 tsp Italian seasoning",
      "Oil for frying",
      "Marinara sauce for dipping"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Cook tortellini according to package directions.",
          "Drain and pat dry.",
          "Mix breadcrumbs, Parmesan, and seasoning."
        ]
      },
      {
        section: "Frying",
        steps: [
          "Dip tortellini in egg, then breadcrumb mixture.",
          "Fry at 350°F (175°C) for 2-3 minutes until golden.",
          "Drain on paper towels."
        ]
      },
      {
        section: "Serving",
        steps: [
          "Serve hot with warm marinara sauce."
        ]
      }
    ],
    nutrition: {
      calories: "185",
      carbs: "22g",
      protein: "9g",
      fat: "7g",
      saturatedFat: "3g",
      cholesterol: "45mg",
      sodium: "380mg"
    },
    tags: ["Fried", "Italian", "Quick", "Appetizer"],
    video: "https://www.youtube.com/embed/mYBZw7hrWPM?si=jXvtj9L-h2y0YjAf"
  },
  {
    id: "ham-cheese-biscuits",
    title: "Ham n Cheese Biscuit Stacks",
    image: "/assets/appetizers/Finger-Food/Ham n Cheese Biscuit Stacks.jpg",
    description: "Mini biscuit stacks with ham and cheese.",
    meta: {
      prepTime: "15 mins",
      cookTime: "12 mins",
      totalTime: "27 mins",
      difficulty: "Easy",
      rating: 4.4,
      reviews: 76
    },
    ingredients: [
      "1 can flaky biscuits",
      "8 oz ham, sliced thin",
      "4 oz cheddar cheese, sliced",
      "2 tbsp Dijon mustard",
      "2 tbsp honey",
      "1 tbsp poppy seeds"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Separate biscuits and cut each into 3 layers."
        ]
      },
      {
        section: "Assembly",
        steps: [
          "Mix mustard and honey for glaze.",
          "Layer biscuits with ham and cheese.",
          "Brush with glaze and sprinkle poppy seeds."
        ]
      },
      {
        section: "Baking",
        steps: [
          "Bake for 10-12 minutes until golden.",
          "Serve warm."
        ]
      }
    ],
    nutrition: {
      calories: "150",
      carbs: "15g",
      protein: "7g",
      fat: "8g",
      saturatedFat: "4g",
      cholesterol: "25mg",
      sodium: "420mg"
    },
    tags: ["Ham", "Cheese", "Biscuits", "Appetizer"],
    video: "https://www.youtube.com/embed/DYqtnb3eQ1Y?si=NbgqWbvUa2_0qohu"
  },
  {
    id: "little-smokies",
    title: "Little Smokies",
    image: "/assets/appetizers/Finger-Food/Little Smokies.jpg",
    description: "Cocktail sausages in sweet and tangy sauce.",
    meta: {
      prepTime: "5 mins",
      cookTime: "20 mins",
      totalTime: "25 mins",
      difficulty: "Easy",
      rating: 4.3,
      reviews: 102
    },
    ingredients: [
      "1 package cocktail sausages",
      "1 cup barbecue sauce",
      "1/2 cup grape jelly",
      "1 tbsp Worcestershire sauce",
      "1 tsp hot sauce (optional)"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Combine all ingredients in a slow cooker or saucepan.",
          "Stir to coat sausages."
        ]
      },
      {
        section: "Cooking",
        steps: [
          "Cook on low for 2-3 hours in slow cooker OR",
          "Simmer on stovetop for 20 minutes."
        ]
      },
      {
        section: "Serving",
        steps: [
          "Serve warm with toothpicks."
        ]
      }
    ],
    nutrition: {
      calories: "120",
      carbs: "12g",
      protein: "5g",
      fat: "7g",
      saturatedFat: "3g",
      cholesterol: "20mg",
      sodium: "480mg"
    },
    tags: ["Sausages", "Party", "Quick", "Appetizer"],
    video: "https://www.youtube.com/embed/tZUPReMX8AI?si=j1XHXNDVLotpLxTj"
  },
  {
    id: "orange-marmalade-meatballs",
    title: "Orange Marmalade Meatballs",
    image: "/assets/appetizers/Finger-Food/Orange Marmalade Meatballs.jpg",
    description: "Sweet and tangy meatballs with orange glaze.",
    meta: {
      prepTime: "10 mins",
      cookTime: "20 mins",
      totalTime: "30 mins",
      difficulty: "Easy",
      rating: 4.6,
      reviews: 89
    },
    ingredients: [
      "1 lb frozen meatballs",
      "1 cup orange marmalade",
      "1/2 cup barbecue sauce",
      "2 tbsp soy sauce",
      "1 tbsp ginger, grated",
      "Green onions for garnish"
    ],
    instructions: [
      {
        section: "Sauce",
        steps: [
          "Combine marmalade, barbecue sauce, soy sauce, and ginger in saucepan.",
          "Heat until marmalade melts."
        ]
      },
      {
        section: "Cooking",
        steps: [
          "Add meatballs to sauce.",
          "Simmer for 15-20 minutes until heated through."
        ]
      },
      {
        section: "Serving",
        steps: [
          "Garnish with green onions.",
          "Serve with toothpicks."
        ]
      }
    ],
    nutrition: {
      calories: "180",
      carbs: "18g",
      protein: "8g",
      fat: "9g",
      saturatedFat: "4g",
      cholesterol: "30mg",
      sodium: "420mg"
    },
    tags: ["Meatballs", "Sweet", "Party", "Appetizer"],
    video: "https://www.youtube.com/embed/JsG8PJna5F8?si=hVGFASKq9FXkOKCf"
  },
  {
    id: "stuffed-cherry-tomatoes",
    title: "Stuffed Cherry Tomatoes",
    image: "/assets/appetizers/Finger-Food/Stuffed Cherry Tomatoes.jpg",
    description: "Cherry tomatoes filled with herbed cheese.",
    meta: {
      prepTime: "20 mins",
      cookTime: "0 mins",
      totalTime: "20 mins",
      difficulty: "Easy",
      rating: 4.5,
      reviews: 67
    },
    ingredients: [
      "24 cherry tomatoes",
      "4 oz cream cheese, softened",
      "2 tbsp fresh herbs (basil, chives, parsley)",
      "1 clove garlic, minced",
      "Salt and pepper to taste",
      "Fresh basil for garnish"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Cut tops off tomatoes and scoop out seeds.",
          "Invert on paper towels to drain."
        ]
      },
      {
        section: "Filling",
        steps: [
          "Mix cream cheese, herbs, garlic, salt, and pepper.",
          "Pipe or spoon into tomatoes."
        ]
      },
      {
        section: "Serving",
        steps: [
          "Chill for 30 minutes before serving.",
          "Garnish with fresh basil."
        ]
      }
    ],
    nutrition: {
      calories: "45",
      carbs: "3g",
      protein: "1g",
      fat: "3g",
      saturatedFat: "2g",
      cholesterol: "10mg",
      sodium: "60mg"
    },
    tags: ["Vegetarian", "Healthy", "Quick", "Appetizer"],
    video: "https://www.youtube.com/embed/9Er_RqoBZ_M?si=HyRHmC2w_6XPPtys"
  },
  {
    id: "tanghulu",
    title: "Tanghulu",
    image: "/assets/appetizers/Finger-Food/Tanghulu.jpg",
    description: "Chinese candied fruit on sticks.",
    meta: {
      prepTime: "15 mins",
      cookTime: "10 mins",
      totalTime: "25 mins",
      difficulty: "Medium",
      rating: 4.8,
      reviews: 54
    },
    ingredients: [
      "2 cups strawberries or other firm fruit",
      "2 cups sugar",
      "1 cup water",
      "Bamboo skewers"
    ],
    instructions: [
      {
        section: "Preparation",
        steps: [
          "Wash and dry fruit thoroughly.",
          "Skewer fruit onto bamboo sticks."
        ]
      },
      {
        section: "Sugar Syrup",
        steps: [
          "Combine sugar and water in saucepan.",
          "Heat to 300°F (150°C) without stirring.",
          "Test by dropping syrup in cold water - it should harden."
        ]
      },
      {
        section: "Coating",
        steps: [
          "Dip fruit in syrup, rotating to coat.",
          "Place on parchment paper to harden.",
          "Serve once hardened."
        ]
      }
    ],
    nutrition: {
      calories: "120",
      carbs: "30g",
      protein: "0g",
      fat: "0g",
      saturatedFat: "0g",
      cholesterol: "0mg",
      sodium: "0mg"
    },
    tags: ["Sweet", "Fruit", "Chinese", "Appetizer"],
    video: "https://www.youtube.com/embed/JrkR68iRjfU?si=NIAUQWZNT7VjIRKT"
  }
];