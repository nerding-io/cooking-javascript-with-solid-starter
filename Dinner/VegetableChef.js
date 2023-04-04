import Chef from "./Chef.js";

// Implement the VegetableChef class
export default class VegetableChef extends Chef {
  constructor(name) {
    super();
    this.name = name;
  }

  prepare() {
    console.log(this.name + " is preparing the vegetables");
  }
}
