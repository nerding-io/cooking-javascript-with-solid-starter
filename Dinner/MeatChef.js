import Chef from "./Chef.js";

// Implement the MeatChef class
export default class MeatChef extends Chef {
  constructor(name) {
    super();
    this.name = name;
  }

  prepare() {
    console.log(this.name + " is preparing the meat");
  }
}
