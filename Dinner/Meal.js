// import Chef from "./Chef.js";

// Define the Meal class
export default class Meal {
  constructor(chefs, recipe) {
    this.chefs = chefs;
    this.recipe = recipe;
  }

  prepare() {
    for (const chef of this.chefs) {
      console.log(`Preparing ${this.recipe.name}`);
      chef.prepare();
    }
  }
}
