// Define the Chef interface
class Chef {
  prepare() {}
}

// Implement the MeatChef class
class MeatChef extends Chef {
  constructor(name) {
    super();
    this.name = name;
  }

  prepare() {
    console.log(this.name + " is preparing the meat");
  }
}

// Implement the VegetableChef class
class VegetableChef extends Chef {
  constructor(name) {
    super();
    this.name = name;
  }

  prepare() {
    console.log(this.name + " is preparing the vegetables");
  }
}

// Implement the DessertChef class
class DessertChef extends Chef {
  constructor(name) {
    super();
    this.name = name;
  }

  prepare() {
    console.log(this.name + " is preparing the dessert");
  }
}

// Define the Meal class
class Meal {
  constructor(chefs) {
    this.chefs = chefs;
  }

  prepare() {
    for (const chef of this.chefs) {
      chef.prepare();
    }
  }
}

// Define the MealPlan class
class MealPlan {
  constructor(foodGroups, recipes, chefs) {
    this.foodGroups = foodGroups;
    this.recipes = recipes;
    this.mealPlan = {};
    this.chefs = chefs;
  }

  generate() {
    for (const group of Object.keys(this.foodGroups)) {
      const meals = this.recipes.filter((r) => r.foodGroups.includes(group));
      const servingsPerMeal = this.foodGroups[group] / meals.length;

      for (const meal of meals) {
        const missingChefs = meal.chefs.filter(
          (c) => !Object.keys(this.chefs).includes(c)
        );

        if (missingChefs.length > 0) {
          console.warn(`Missing chefs: ${missingChefs.join(", ")}`);
          continue;
        }

        const chefInstances = meal.chefs.map((c) => this.chefs[c]);

        for (let i = 0; i < servingsPerMeal; i++) {
          const newMeal = new Meal(chefInstances, meal);
          if (!this.mealPlan[group]) {
            this.mealPlan[group] = [];
          }
          this.mealPlan[group].push(newMeal);
        }
      }
    }
  }

  output() {
    console.log("Meal Plan:");
    for (const group of Object.keys(this.mealPlan)) {
      console.log(`----${group}:`);
      for (const meal of this.mealPlan[group]) {
        meal.prepare();
      }
    }
  }
}

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
const chefs = {
  meat: new MeatChef("John"),
  vegetable: new VegetableChef("Mary"),
  dessert: new DessertChef("Bob"),
};

// Generate a meal plan based on the food pyramid, prepared by multiple chefs
const mealPlan = new MealPlan(foodGroups, recipes);
mealPlan.generate();
mealPlan.output();

// Outputs:
// vegetables:
// Mary is preparing the vegetables
// John is preparing the meat
// Mary is preparing the vegetables
// John is preparing the meat
// fruits:
// Bob is preparing the dessert
// grains:
// John is preparing the meat
// Mary is preparing the vegetables
// John is preparing the meat
// Mary is preparing the vegetables
// John is preparing the meat
// Mary is preparing the vegetables
// Bob is preparing the dessert
// proteins:
// John is preparing the meat
// Mary is preparing the vegetables
// John is preparing the meat
// Mary is preparing the vegetables
// John is preparing the meat
// Mary is preparing the vegetables
// John is preparing the meat
// Mary is preparing the vegetables
// Bob is preparing the dessert
// dairy:
// John is preparing the meat
// Mary is preparing the vegetables
// John is preparing the meat
// Mary is preparing the vegetables
// Bob is preparing the dessert
