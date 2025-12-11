export const essentialTips = [
  {
    number: "01",
    title: "Mise en Place",
    description:
      'This French technique means "everything in its place." Before you start cooking, prep and organize all your ingredients. Chop vegetables, measure spices, and arrange tools within reach. This prevents mid-cooking chaos and helps you cook like a professional chef.',
    badgeClass: "bg-prep",
    badgeLabel: "Preparation",
    difficulty: "★★☆☆☆",
    icon: (
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    ),
  },
  {
    number: "02",
    title: "Let Meat Rest",
    description:
      "After cooking meat, let it rest for 5-10 minutes before slicing. This crucial step allows the juices to redistribute throughout the meat, resulting in a more tender, flavorful, and juicy final dish. Cover loosely with foil to keep it warm.",
    badgeClass: "bg-technique",
    badgeLabel: "Technique",
    difficulty: "★★★☆☆",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    number: "03",
    title: "Room Temperature Magic",
    description:
      "Take meat, eggs, and dairy out of the fridge 20-30 minutes before cooking. Room temperature ingredients cook more evenly, preventing the pan from cooling down too much when you add them. This is especially important for baking and searing proteins.",
    badgeClass: "bg-prep",
    badgeLabel: "Preparation",
    difficulty: "★☆☆☆☆",
    icon: (
      <>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </>
    ),
  },
  {
    number: "04",
    title: "Salt Your Pasta Water",
    description:
      "Make your pasta water taste like the sea! Use about 1-2 tablespoons of salt per pound of pasta. This is your only chance to season the pasta itself from the inside out. Well-salted pasta water makes a world of difference in the final dish.",
    badgeClass: "bg-technique",
    badgeLabel: "Technique",
    difficulty: "★☆☆☆☆",
    icon: (
      <>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
  },
  {
    number: "05",
    title: "Layer Your Flavors",
    description:
      "Build flavor throughout the cooking process rather than seasoning all at once. Start with aromatics like onions and garlic, add spices during cooking to bloom them, and finish with fresh herbs. This creates depth and complexity in your dishes.",
    badgeClass: "bg-flavor",
    badgeLabel: "Flavor",
    difficulty: "★★★★☆",
    icon: (
      <>
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </>
    ),
  },
  {
    number: "06",
    title: "Sharp Knives = Safe Knives",
    description:
      "Contrary to popular belief, a sharp knife is safer than a dull one. Sharp knives require less pressure and give you better control, reducing the chance of slipping. Keep your knives sharp and hone them regularly before each use.",
    badgeClass: "bg-safety",
    badgeLabel: "Safety",
    difficulty: "★★☆☆☆",
    icon: (
      <>
        <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" />
      </>
    ),
  },
];

export const flavorTips = [
  {
    number: "07",
    title: "Toast Your Spices",
    description:
      "Toast whole spices in a dry pan for 30-60 seconds until fragrant. This awakens their essential oils and amplifies their flavor exponentially. Grind them fresh for maximum impact. Your spice cabinet will never be the same!",
    badgeClass: "bg-flavor",
    badgeLabel: "Flavor",
    difficulty: "★★★☆☆",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  },
  {
    number: "08",
    title: "Save Your Pasta Water",
    description:
      "That starchy pasta water is liquid gold! Always reserve 1-2 cups before draining. Use it to adjust sauce consistency and help it cling to pasta. The starch acts as a natural thickener and emulsifier, creating silky, restaurant-quality sauces.",
    badgeClass: "bg-technique",
    badgeLabel: "Technique",
    difficulty: "★★☆☆☆",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </>
    ),
  },
  {
    number: "09",
    title: "Acid Brightens Everything",
    description:
      "A squeeze of lemon juice, splash of vinegar, or pinch of citrus zest can transform a dish from flat to fantastic. Add acid at the end of cooking to brighten flavors and balance richness. It's the secret ingredient in many restaurant dishes!",
    badgeClass: "bg-flavor",
    badgeLabel: "Flavor",
    difficulty: "★★★☆☆",
    icon: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </>
    ),
  },
  {
    number: "10",
    title: "Don't Crowd the Pan",
    description:
      "Give your ingredients space to breathe! Overcrowding lowers the pan temperature, causing food to steam instead of sear. Work in batches if needed. Proper browning develops deep, caramelized flavors that make dishes truly stellar.",
    badgeClass: "bg-technique",
    badgeLabel: "Technique",
    difficulty: "★★★☆☆",
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    number: "11",
    title: "Preheat Properly",
    description:
      "Always preheat your pan, oven, or grill before adding food. A properly heated cooking surface is essential for developing flavor, creating good texture, and preventing sticking. For ovens, wait at least 15-20 minutes after it beeps.",
    badgeClass: "bg-technique",
    badgeLabel: "Technique",
    difficulty: "★★☆☆☆",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <circle cx="11" cy="11" r="3" />
      </>
    ),
  },
  {
    number: "12",
    title: "Taste As You Go",
    description:
      "The most important tool in your kitchen is your palate! Taste your food throughout the cooking process and adjust seasoning accordingly. Flavors concentrate as liquids reduce, so season lightly at first and build up gradually.",
    badgeClass: "bg-flavor",
    badgeLabel: "Flavor",
    difficulty: "★★★★☆",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
];

export const proTips = [
  {
    number: "13",
    title: "Use Your Senses",
    description:
      "Trust your senses over timers! Listen for sizzling sounds, watch for color changes, smell for aromatics, and touch for texture. Recipes are guidelines, but your senses tell you when food is actually ready. This is how pros cook without measuring.",
    badgeClass: "bg-pro",
    badgeLabel: "Pro Tips",
    difficulty: "★★★★★",
    icon: (
      <>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </>
    ),
  },
  {
    number: "14",
    title: "Master Mother Sauces",
    description:
      "Learn the five French mother sauces: Béchamel, Velouté, Espagnole, Hollandaise, and Tomato. These form the foundation of countless recipes. Once mastered, you can create infinite variations and elevate any dish from ordinary to extraordinary.",
    badgeClass: "bg-pro",
    badgeLabel: "Pro Tips",
    difficulty: "★★★★☆",
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </>
    ),
  },
  {
    number: "15",
    title: "Finish with Fat",
    description:
      'Swirl in cold butter, drizzle quality olive oil, or add a dollop of cream at the end of cooking. This technique, called "mounting," adds richness, sheen, and rounds out flavors. It\'s the difference between home cooking and restaurant quality.',
    badgeClass: "bg-pro",
    badgeLabel: "Pro Tips",
    difficulty: "★★★☆☆",
    icon: (
      <>
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
  },
];

export const quickTips = [
  { icon: "🧂", title: "Season Early & Often", text: "Build flavor layers by seasoning throughout cooking, not just at the end." },
  { icon: "🔥", title: "High Heat = Flavor", text: "Don't fear high heat for searing! Caramelization creates deep, complex flavors." },
  { icon: "🧊", title: "Cold Butter for Pastry", text: "Keep butter ice-cold for flaky pastries. Freeze it and grate for best results." },
  { icon: "🌿", title: "Fresh Herbs Last", text: "Add delicate herbs like basil and cilantro at the end to preserve bright flavors." },
  { icon: "🥘", title: "Deglaze for Depth", text: "Use wine or stock to scrape up browned bits—that's where flavor lives!" },
  { icon: "🍳", title: "Non-Stick Myth", text: "Stainless steel or cast iron give better browning than non-stick pans." },
  { icon: "🌡️", title: "Instant-Read Thermometer", text: "The best tool for perfect meat every time. No more guessing!" },
  { icon: "🥄", title: "Wooden Spoons Win", text: "Won't scratch pans, won't conduct heat, and won't melt. A kitchen essential!" },
];

export const chefSecret = {
  badgeIcon: (
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  ),
  badgeLabel: "Chef's Secret of the Week",
  title: "The Power of Umami Bombs",
  description:
    'Boost savory depth in any dish with "umami bombs" like tomato paste, soy sauce, miso, Parmesan rind, anchovies, or dried mushrooms. These ingredients add profound savory complexity without being identifiable. Just a small amount can transform a good dish into an unforgettable one. Try adding a teaspoon of tomato paste to your next pasta sauce or a splash of soy sauce to your beef stew!',
  stats: [
    { label: "Impact Level:", value: "High" },
    { label: "Difficulty:", value: "Easy" },
    { label: "Works Best In:", value: "Soups, Sauces, Braises" },
  ],
};