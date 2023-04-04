// Meal superclass
class Meal {
  prepare() {}
}

// Salad subclass extending the Meal superclass
class Salad extends Meal {
  prepare() {
    // code for preparing a salad
  }
}

// Pizza subclass extending the Meal superclass
class Pizza extends Meal {
  prepare() {
    // code for preparing a pizza
  }
}

// Ensuring LSP by using any Meal subclass interchangeably
function prepareMeal(meal) {
  meal.prepare();
}

const salad = new Salad();
const pizza = new Pizza();

prepareMeal(salad); // outputs "Preparing salad"
prepareMeal(pizza); // outputs "Preparing pizza"
