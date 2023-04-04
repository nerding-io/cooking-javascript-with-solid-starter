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
    chefs: ["meat", "vegetable"],
  },
  {
    name: "Fruit salad",
    foodGroups: ["fruits"],
    chefs: ["dessert"],
  },
  {
    name: "Vegetable stir-fry",
    foodGroups: ["vegetables", "proteins", "grains"],
    chefs: ["vegetable", "meat"],
  },
  {
    name: "Yogurt with granola and berries",
    foodGroups: ["dairy", "grains", "fruits"],
    chefs: ["dessert"],
  },
  {
    name: "Grilled chicken with quinoa and vegetables",
    foodGroups: ["proteins", "grains", "vegetables"],
    chefs: ["meat", "vegetable"],
  },
];

// Chefs responsible for each part of the meal

// Generate a meal plan based on the food pyramid, prepared by multiple chefs
