class VegetableCutter {
  cut() {
    // code for cutting vegetables
  }
}

class RiceCooker {
  cook() {
    // code for cooking rice
  }
}

class MeatGriller {
  grill() {
    // code for grilling meat
  }
}

class MealPreparation {
  constructor() {
    this.vegetableCutter = new VegetableCutter();
    this.riceCooker = new RiceCooker();
    this.meatGriller = new MeatGriller();
  }

  prepare() {
    this.vegetableCutter.cut();
    this.riceCooker.cook();
    this.meatGriller.grill();
  }
}
function main() {
  const mealPreparation = new MealPreparation();
  mealPreparation.prepare();
}
main();
