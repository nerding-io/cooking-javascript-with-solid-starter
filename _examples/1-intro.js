// Single Responsibility Principle (Protein Group)
// A new method named cookProtein has been created which is only responsible for cooking protein.

// Open/Closed Principle (Vegetables Group)
// A new method named addNewVegetable has been created which can
// add a new vegetable without changing existing code.

// Liskov Substitution Principle (Fruit Group)
// A new class Apple has been created that extends the base class Fruit,
// specific properties and behaviors of Apple can be added in this class.

// Interface Segregation Principle (Dairy Group)
// A new interface Cheese has been created that only contains cut() and grate() methods.
// Class Cheddar has implemented Cheese interface which only contains cut() and grate() methods.

// Dependency Inversion Principle (Grains Group)
// A new class Flour has been created that has basic properties and behavior of flour.
// Class Bread has dependencies on class Flour which are passed in as arguments to its constructor.

// Metaprogramming (Mixing Group)
// A new function named makeDinner has been created which takes dish name as
// input, fetches recipe, ingredients, generates instructions and cooks dish.
