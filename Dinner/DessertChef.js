import Chef from "./Chef.js";

// Implement the DessertChef class
export default class DessertChef extends Chef {
  constructor(name) {
    super();
    this.name = name;
  }

  prepare() {
    console.log(this.name + " is preparing the dessert");
  }
}
