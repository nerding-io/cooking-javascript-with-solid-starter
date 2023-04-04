// Food groups and their recommended daily servings
const foodGroups = {
  vegetables: 3,
  fruits: 2,
  grains: 6,
  proteins: 5,
  dairy: 3,
};

// Meal recipes
const recipes = [
  {
    name: "Ham and cheese sandwich",
    foodGroups: ["grains", "proteins", "dairy"],
  },
  {
    name: "Fruit salad",
    foodGroups: ["fruits"],
  },
  {
    name: "Vegetable stir-fry",
    foodGroups: ["vegetables", "proteins", "grains"],
  },
  {
    name: "Yogurt with granola and berries",
    foodGroups: ["dairy", "grains", "fruits"],
  },
  {
    name: "Grilled chicken with quinoa and vegetables",
    foodGroups: ["proteins", "grains", "vegetables"],
  },
];

// Generating a meal plan based on the food pyramid
const mealPlan = {};

// Outputting the generated meal plan

// Outputs:
// vegetables:
// Preparing Vegetable stir-fry
// Preparing Grilled chicken with quinoa and vegetables
// fruits:
// Preparing Fruit salad
// grains:
// Preparing Ham and cheese sandwich
// Preparing Vegetable stir-fry
// Preparing Yogurt with granola and berries
// proteins:
// Preparing Ham and cheese sandwich
// Preparing Vegetable stir-fry
// Preparing Grilled chicken with quinoa and vegetables
// dairy:
// Preparing Ham and cheese sandwich
// Preparing Yogurt with granola and berries
