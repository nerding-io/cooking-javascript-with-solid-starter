import Meal from "./Meal.js";

// Define the MealPlan class
export default class MealPlan {
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
